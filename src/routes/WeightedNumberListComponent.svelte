<script lang="ts">

	import '@fortawesome/fontawesome-free/css/all.min.css';
    import type { NumberRange, OptionData } from './types';
    import RangeSlider from 'svelte-range-slider-pips';
	import WeightComponent from './WeightComponent.svelte';

	let expanded = true;
	export let weightedOptions: OptionData[] = [];
	export const optionRange: NumberRange = {min: 0, max: 100};
	export let optionName = "";


    let values = [0,100];
	let range = [20, 70];
	let range2 = [30, 40];

	function expandOrShorten() {
		console.log(weightedOptions)
		if (expanded) {
			let optionsList = Object.values(weightedOptions);
			let optionsWithZeroWeight = optionsList.filter((option) => option.weight[0] == 0);
			if (optionsWithZeroWeight.length == optionsList.length - 1) {
				for (let option of optionsWithZeroWeight) {
					option.hide = true;
				}
				weightedOptions = weightedOptions;
				expanded = !expanded;
			}
		} else {
			for (let option of Object.values(weightedOptions)) {
				option.hide = false;
			}
			weightedOptions = weightedOptions;
			expanded = !expanded;
		}
	}

	function getPercent(option: OptionData): number {
		let percent =
			Math.round(
				(10000 * option.weight[0]) /
					Object.values(weightedOptions).reduce((total, current) => (total += current.weight[0]), 0)
			) / 100;
		return percent || 0;
	}

	function deselectOtherOptions(selectedOption: OptionData) {
		let optionsList = Object.values(weightedOptions);
		for (let option of optionsList) {
			if (option === selectedOption) {
				option.weight[0] = 50;
			} else {
				option.weight[0] = 0;
			}
		}
		weightedOptions = weightedOptions;
	}

	function addOption() {
		weightedOptions = [...weightedOptions, { name: '', weight: [50], hide: false }];
	}

	function removeOption(optionIndex: number) {
		weightedOptions.splice(optionIndex, 1);
		weightedOptions = weightedOptions;
	}
</script>

<div class:row={!expanded} class="outer container">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="carrot key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<div class="inner container">
		<div class:hidden={!expanded} class="vl" />
		<div class="otherstuff container" class:col={expanded}>
			<table class="value">
				{#each weightedOptions as option, optionIndex}
					<tr class={option.hide ? 'hidden' : ''}>
						<td>
							<div class:container={!expanded}>
									
                                
                                
                                <div class="slider-div">
									<RangeSlider range bind:values />
                                </div>
                                <!-- <input
                                    class:single-input={optionKeys.length == 0}
                                    class:minimized-data={!expanded}
                                    type="text"
                                    placeholder="Enter option name"
                                    bind:value={option.name}
                                /> -->
					
							</div>
						</td>
						<td hidden={!expanded}><WeightComponent getPercent={getPercent} bind:option={option} /></td>
						
						
						<td class:hidden={!expanded}>
							<button
								class="round-button secret"
								title="Select this option and remove others"
								on:click={() => deselectOtherOptions(option)}
							>
								<i class:rotated={expanded} class="fa-solid fa-wand-sparkles"></i>
							</button>
							<button
								class="round-button secret"
								title="Select this option and remove others"
								on:click={() => removeOption(optionIndex)}
							>
								<i class:rotated={expanded} class="fa-solid fa-xmark"></i>
							</button>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container end">
				<button class="create-row-button" on:click={addOption}>Add Option</button>
			</div>
		</div>
	</div>
</div>

<style>
    @import './weighted-table-styles.css';
	@import './button-styles.css';

	*:not(h1) {
		/* border: solid 1px black; */
		font-size: large;
	}

	.end {
		justify-content: flex-end;
	}

	.hidden {
		display: none !important;
		visibility: hidden !important;
	}
	.outer {
		flex-direction: column; /* By default, stack elements vertically */
	}

	.inner {
		flex-direction: row; /* By default, stack elements vertically */
	}

	.container {
		width: 100%;
		display: flex;
		/* background-color: aqua; */
	}

	tr:hover .secret {
		visibility: visible;
	}

	.secret {
		visibility: hidden;
	}

	.vl {
		background-color: rgb(255, 153, 0);
		width: 3px;
		margin: 0 8px;
		min-width: 3px;
		margin-left: 21px;
	}

	.key {
		/* background-color: lightseagreen; */
		justify-content: left;
		align-items: center;
		display: flex;
	}

	.otherstuff {
		/* background-color: brown; */
		padding: 8px;
	}

	.outer.row {
		flex-direction: row;
	}

	.otherstuff.col {
		flex-direction: column;
	}

	.key,
	table,
	.create-row-button {
		padding: 8px;
	}

	.create-row-button {
		margin: 8px;
		border-radius: 5px;
		border-color: dodgerblue;
		color: dodgerblue;
		background-color: transparent;
	}

	h3 {
		color: black;
		padding-left: 15px;
	}

	button {
		cursor: pointer;
	}

	.carrot {
		border: none;
		background-color: transparent;
		color: rgb(255, 153, 0);
	}

	.fa-carrot {
		font-size: 30px !important;
		transform: rotate(-135deg);
		transition: transform 0.5s;
	}

	.fa-carrot.rotated {
		transform: rotate(-45deg);
	}

	table {
		flex: 1;
		/* background-color: green; */
	}

	table,
	td {
		/* border-left: 0px solid;
		border-right: 0px solid; */
		border-collapse: collapse;
	}

	td {
		text-align: center;
	}

	.round-button {
		flex-grow: 4;
		color: dodgerblue;
		background-color: transparent;
		border: none;
		box-sizing: border-box;
	}

	.slider-div {
		width: 100%;
		min-width: 60px;
	}

	
</style>
