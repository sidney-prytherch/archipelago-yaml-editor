<script lang="ts">
    import type { OptionData } from './types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightComponent from './WeightComponent.svelte';
	import WeightedOptionButtonsComponent from './WeightedOptionButtonsComponent.svelte';
	import { deselectOtherOptionsHelper, removeOptionHelper } from './optionButtons';

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

	function addOption() {
		weightedOptions = [...weightedOptions, { name: '', weight: [50], hide: false }];
	}

	function deselectOtherOptions(option: OptionData) {
		deselectOtherOptionsHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function removeOption(option: OptionData) {
		removeOptionHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}
</script>

<div class:vertical={!expanded} class="horizontal container">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<div class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container" class:horizontal={expanded}>
			<table class="value">
				{#each weightedOptions as option, optionIndex}
					<tr class:borderless={!expanded} class:hidden={option.hide}>
						<td>
							<div class:container={!expanded} class:key={!expanded}>
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
									class:minimized-data={!expanded}
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
						<td class:hidden={!expanded}>
							<WeightComponent getPercent={getPercent} bind:option={option}/>
						</td>
						<td class:hidden={!expanded}>
							<div class="secret">
								<WeightedOptionButtonsComponent {deselectOtherOptions} {removeOption} bind:option={option}/>
							</div>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button class="create-row-button" disabled={optionKeys.length > 0 && refs.length === optionKeys.length} on:click={addOption}>Add Option</button>
			</div>
		</div>
	</div>
</div>

<style>
    @import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';
</style>
