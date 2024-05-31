<script lang="ts">
	import type { OptionData } from '../types/types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightComponent from '../sub-components/WeightComponent.svelte';
	import WeightedOptionButtonsComponent from '../sub-components/WeightedOptionButtonsComponent.svelte';
	import { deselectOtherOptionsHelper, removeOptionHelper } from '../types/optionButtons';
	import SearchableDropdownComponent from '../sub-components/SearchableDropdownComponent.svelte';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import DropdownComponent from '../sub-components/DropdownComponent.svelte';

	let expanded = true;
	export let weightedOptions: OptionData[] = [];
	export let optionKeys: string[] = [];
	export let optionName = '';
	export let optionHint = '';
	export let level = 2;
	//console.log(weightedOptions);
	let searchable = optionKeys.length > 15;
	let selectedOption: OptionData;

	expandOrShorten();

	function expandOrShorten() {
		if (expanded) {
			let optionsList = Object.values(weightedOptions);
			let optionsWithZeroWeight = optionsList.filter((option) => option.weight[0] == 0);
			if (optionsWithZeroWeight.length == optionsList.length - 1) {
				for (let option of optionsWithZeroWeight) {
					option.hide = true;
				}
				selectedOption = optionsList.find((option) => option.weight[0] > 0) || {
					name: '',
					weight: [0],
					hide: true
				};
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
		let newOption = { name: '', weight: [50], hide: false };
		weightedOptions = [...weightedOptions, newOption];
		return newOption;
	}

	function deselectOtherOptions(option: OptionData) {
		deselectOtherOptionsHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function removeOption(option: OptionData) {
		removeOptionHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function selectOption(optionName: string) {
		let optionData = weightedOptions.find((option) => option.name === optionName);
		if (!optionData) {
			optionData = weightedOptions.find((option) => option.name == '');
			if (!optionData) {
				optionData = addOption();
			}
			optionData.name = optionName;
		}
		deselectOtherOptions(optionData);
	}
</script>

<div
	class:vertical={!expanded}
	class="horizontal container flex-start"
	class:yaml-option-level-two={level === 2}
>
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} {optionHint} />
	<div class="vertical container">
		<!-- <div class:hidden={!expanded} class="vl" /> -->
		<div class="container flexgrow" class:horizontal={expanded}>
			<div
				class:yaml-option-level-three={expanded && level === 2}
				class:yaml-option-level-two={expanded && level === 1}
				class="container flexgrow"
			>
				<table class="value" class:hidden={!expanded && optionKeys.length > 0}>
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
									{:else if searchable}
										<div>
											<SearchableDropdownComponent
												list={optionKeys.filter(
													(it) => !weightedOptions.some((map) => map.name === it)
												)}
												bind:value={option.name}
												textAlignStart={!expanded}
											/>
										</div>
									{:else}
										<div class:hidden={!expanded}>
											<DropdownComponent
												list={optionKeys}
												disabledList={optionKeys.filter((it) =>
													weightedOptions.some((map) => map.name === it)
												)}
												bind:value={option.name}
											/>
										</div>
									{/if}
								</div>
							</td>
							<td class:hidden={!expanded}>
								<WeightComponent {getPercent} bind:option />
							</td>
							<td class:hidden={!expanded}>
								<div class="secret">
									<WeightedOptionButtonsComponent
										{deselectOtherOptions}
										{removeOption}
										bind:option
									/>
								</div>
							</td>
						</tr>
					{/each}
				</table>
			</div>
			<div class="container vertical key" class:hidden={expanded || optionKeys.length === 0}>
				<div>
					<DropdownComponent
						list={optionKeys}
						value={selectedOption ? selectedOption.name : '?'}
						{selectOption}
					/>
				</div>
			</div>
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button
					class:create-row-button-level-two={level === 2}
					class:create-row-button-level-one={level === 1}
					disabled={optionKeys.length > 0 && weightedOptions.length === optionKeys.length}
					on:click={addOption}>Add Option</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';
</style>
