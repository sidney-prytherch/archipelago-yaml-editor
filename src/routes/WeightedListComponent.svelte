<script lang="ts">
	import type { OptionData } from './types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightComponent from './WeightComponent.svelte';
	import WeightedOptionButtonsComponent from './WeightedOptionButtonsComponent.svelte';
	import { deselectOtherOptionsHelper, removeOptionHelper } from './optionButtons';
	import SearchableDropdownComponent from './SearchableDropdownComponent.svelte';
	import CarrotButtonComponent from './CarrotButtonComponent.svelte';

	let expanded = true;
	export let weightedOptions: OptionData[] = [];
	export let optionKeys: string[] = [];
	export let optionName = '';

	function expandOrShorten() {
		console.log(weightedOptions);
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

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} />
	<div class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container" class:horizontal={expanded}>
			<table class="value">
				{#each weightedOptions as option}
					<tr class:borderless={!expanded} class:hidden={option.hide}>
						<td>
							<!-- <div class:container={!expanded} class:key={!expanded}> -->
							<div class="container" class:key={!expanded}>
								{#if optionKeys.length === 0}
									<input
										class:minimized-data={!expanded}
										type="text"
										placeholder="Enter option name"
										bind:value={option.name}
									/>
								{:else}
									<SearchableDropdownComponent
										list={optionKeys.filter(
											(it) => !weightedOptions.some((map) => map.name === it)
										)}
										bind:value={option.name}
									/>
								{/if}
							</div>
						</td>
						<td class:hidden={!expanded}>
							<WeightComponent {getPercent} bind:option />
						</td>
						<td class:hidden={!expanded}>
							<div class="secret">
								<WeightedOptionButtonsComponent {deselectOtherOptions} {removeOption} bind:option />
							</div>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button
					class="create-row-button"
					disabled={optionKeys.length > 0 && weightedOptions.length === optionKeys.length}
					on:click={addOption}>Add Option</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	@import './styles/weighted-table-styles.css';
	@import './styles/button-styles.css';
	@import './styles/option-group-styles.css';
</style>
