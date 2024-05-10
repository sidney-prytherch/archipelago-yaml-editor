<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';


    import type { OptionData } from './types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightComponent from './WeightComponent.svelte';

	let expanded = true;
	export let weightedOptions:OptionData[] = [];
	export let optionKeys: string[] = [];
	export let optionName = "";
	let _refs: HTMLSelectElement[] = [];
	let refs: string[] = [];
	$: refs = _refs.map(it => it == null ? '' : it.value);

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

	function getPercent(option:OptionData):number {
		let percent =
			Math.round(
				(10000 * option.weight[0]) /
					Object.values(weightedOptions).reduce((total, current) => (total += current.weight[0]), 0)
			) / 100;
		return percent || 0;
	}

	function deselectOtherOptions(selectedOption:OptionData) {
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

	function selectOption(selectedOption:OptionData) {
		selectedOption.weight[0] = 50;
		weightedOptions = weightedOptions;
	}

	function deselectOption(selectedOption:OptionData) {
		selectedOption.weight[0] = 0;
		weightedOptions = weightedOptions;
	}

	function addOption() {
		weightedOptions = [...weightedOptions, { name: '', weight: [50], hide: false }];
	}

	function removeOption(optionIndex:number) {
		weightedOptions.splice(optionIndex, 1);
		weightedOptions = weightedOptions;
	}
</script>

<div class:row={!expanded} class="horizontal container">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="carrot key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<div class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="otherstuff container" class:col={expanded}>
			<table class="value">
				{#each weightedOptions as option, optionIndex}
					<tr class={option.hide ? 'hidden' : ''}>
						<td>
							<div class:container={!expanded}>
								{#if optionKeys.length === 0}
									<input
										class:single-input={optionKeys.length == 0}
										class:minimized-data={!expanded}
										type="text"
										placeholder="Enter option name"
										bind:value={option.name}
									/>
								{:else}
									<select 
									bind:this={_refs[optionIndex]}
									on:change={() => refs = refs}
									bind:value={option.name}>
										{#each optionKeys as optionKey}
											<option disabled={refs.includes(optionKey)} value={optionKey}>{optionKey}</option>
										{/each}
									</select>
								{/if}
							</div>
						</td>
						<td class:hidden={!expanded}><WeightComponent getPercent={getPercent} bind:option={option}/></td>
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
				<button class="create-row-button" disabled={refs.length === optionKeys.length} on:click={addOption}>Add Option</button>
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

	.horizontal {
		flex-direction: column; /* By default, stack elements vertically */
	}

	.vertical {
		flex-direction: row; /* By default, stack elements vertically */
	}

	.container {
		width: 100%;
		display: flex;
		/* background-color: aqua; */
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

	.horizontal.row {
		flex-direction: row;
	}

	.otherstuff.col {
		flex-direction: column;
	}

	.key,
	input {
		padding: 8px;
	}


	.minimized-data {
		text-align: start !important;
	}

	h3 {
		color: black;
		padding-left: 15px;
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

	.single-input {
        margin-left: 14px;
	}

	input[type='number'] {
		border: 1px solid #ccc;
	}

	input {
		padding: 10px;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='number'] {
		width: 100%;
		min-width: 60px;
	}

	input[type='text'],
	select {
		border: none;
   		outline: 0px;
		background-color: transparent;
		text-align: center;
	}

	input[type='text'] {
		width: 100%;
	}

	input[type='text']:focus {
		border-color: #ccc;
		background-color: #eee;
	}
</style>
