<script lang="ts">
	import YamlEditComponent from '../sub-components/YamlEditComponent.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { AnyObject, NumberRange, OptionData } from '../types/types';
	import RangeSlider from 'svelte-range-slider-pips';
	import WeightComponent from '../sub-components/WeightComponent.svelte';
	import WeightedOptionButtonsComponent from '../sub-components/WeightedOptionButtonsComponent.svelte';
	import { deselectOtherNumberOptionsHelper, removeOptionHelper } from '../types/optionButtons';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import jsYaml from 'js-yaml';
	import { WeightedNumberListYamlFunctions } from '../ComponentYamlFunctions/WeightedNumberListYamlFunctions';

	let weightedOptionsAsYaml = '';
	let expanded = false;
	export let weightedOptions: OptionData[] = [];
	export let optionRange: NumberRange;
	export let optionName = '';
	export let optionHint = '';
	export let numberAliases: { [key: string]: number[] } = {};
	let personalNumberAliases = structuredClone(numberAliases);
	let numberAliasNames = Object.keys(personalNumberAliases);
	let pipStep = 0;
	const yamlFunctions = new WeightedNumberListYamlFunctions(numberAliases, optionRange, optionName, weightedOptions);
	const rangeLength = optionRange.max - optionRange.min;
	const pipStepRange = [Math.round(rangeLength / 10.0), Math.round(rangeLength / 2.0)];
	for (
		let potentialPipStep = pipStepRange[0];
		potentialPipStep < pipStepRange[1];
		potentialPipStep++
	) {
		// console.log(potentialPipStep);
		if (rangeLength % potentialPipStep === 0) {
			pipStep = potentialPipStep;
			break;
		}
	}

	let _refs: HTMLSelectElement[] = [];
	let refs: string[] = [];
	$: refs = _refs.map((it) => (it == null ? '' : it.value));
	// expandOrShorten();
	let yamlEditVisible = false;

	function showYamlEdit() {
		weightedOptionsAsYaml = yamlFunctions.toYaml(null);
		yamlEditVisible = !yamlEditVisible;
	}

	function expandOrShorten() {
		// console.log(weightedOptions);
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

	function addRangeOption() {
		weightedOptions = [
			...weightedOptions,
			{ range: [optionRange.min, optionRange.max], weight: [50], hide: !expanded }
		];
	}

	function addNumberOption() {
		weightedOptions = [
			...weightedOptions,
			{ range: [optionRange.default || optionRange.min], weight: [50], hide: !expanded }
		];
	}

	function deselectOtherOptions(option: OptionData) {
		deselectOtherNumberOptionsHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function removeOption(option: OptionData) {
		removeOptionHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function mergeOutput(
		objectToMerge: OptionData[],
		deletePrevious: boolean,
		replacePreviousKeys: boolean
	) {
		// console.log(objectToMerge)
		if (deletePrevious) {
			weightedOptions.length = 0;
		}
		for (let newWeightedOption of Object.values(objectToMerge)) {
			let newWeightedOptionRange = (newWeightedOption.range || []).sort();
			let foundDuplicate = false;
			for (let weightedOption of weightedOptions) {
				let weightedOptionRange = (weightedOption.range || []).sort();
				if (
					weightedOptionRange.length === newWeightedOptionRange.length &&
					((weightedOptionRange.length === 1 &&
						weightedOptionRange[0] === newWeightedOptionRange[0]) ||
						(weightedOptionRange.length === 2 &&
							weightedOptionRange[0] === newWeightedOptionRange[0] &&
							weightedOptionRange[1] === newWeightedOptionRange[1] &&
							weightedOption.selectedAlias === newWeightedOption.selectedAlias))
				) {
					foundDuplicate = true;
					if (replacePreviousKeys) {
						weightedOption.weight = newWeightedOption.weight;
					}
				}
			}
			if (!foundDuplicate) {
				weightedOptions.push(structuredClone(newWeightedOption));
			}
		}
		weightedOptions = weightedOptions;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option-level-two">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} {optionHint} />
	<div class="container flexgrow vertical">
		<!-- <div class:hidden={!expanded} class="vl" /> -->
		<div class="container flexgrow" class:horizontal={expanded}>
			<div class:yaml-option-level-three={expanded} class="container flexgrow">
				<table>
					{#each weightedOptions as option, optionIndex}
						{@const isRange = option.range ? option.range.length > 1 : false}
						<tr class:borderless={!expanded} class:hidden={option.hide}>
							<td>
								<div class="container">
									<button
										class="slider-div"
										class:slider-low={refs[optionIndex] === 'random-low'}
										class:slider-middle={refs[optionIndex] === 'random-middle'}
										class:slider-high={refs[optionIndex] === 'random-high'}
									>
										{#if pipStep > 0}
											<RangeSlider
												float
												min={optionRange.min}
												max={optionRange.max}
												range={isRange}
												bind:values={option.range}
												pips
												pipstep={pipStep}
												first="label"
												last="label"
												on:change={(_) => {
													if (!isRange) {
														option.selectedAlias = '';
														_refs[optionIndex].value = '';
														refs = refs;
													}
												}}
											/>
										{:else}
											<RangeSlider
												float
												min={optionRange.min}
												max={optionRange.max}
												range={isRange}
												bind:values={option.range}
												pips
												all="label"
												rest={false}
												on:change={(_) => {
													if (!isRange) {
														option.selectedAlias = '';
														_refs[optionIndex].value = '';
														refs = refs;
													}
												}}
											/>
										{/if}
									</button>
									<div class="key">
										<select
											bind:this={_refs[optionIndex]}
											bind:value={option.selectedAlias}
											on:change={() => {
												if (numberAliasNames.includes(_refs[optionIndex].value)) {
													option.range = structuredClone(
														personalNumberAliases[_refs[optionIndex].value]
													);
												}
												if (
													!isRange &&
													['random', 'random-low', 'random-middle', 'random-high'].includes(
														_refs[optionIndex].value
													)
												) {
													option.range = [optionRange.min, optionRange.max];
												}
												refs = refs;
											}}
										>
											{#if !isRange}
												<option value=""></option>
											{/if}
											<option value="random">random</option>
											<option value="random-low">random-low</option>
											<option value="random-middle">random-middle</option>
											<option value="random-high">random-high</option>
											{#each numberAliasNames as alias}
												<option value={alias}>{alias}</option>
											{/each}
										</select>
									</div>
								</div>
							</td>
							<td class:hidden={!expanded}><WeightComponent {getPercent} bind:option /></td>
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
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button class="create-row-button-level-two" on:click={addNumberOption}>Add Number Option</button>
				<button class="create-row-button-level-two" on:click={addRangeOption}>Add Range Option</button>
				<button class="create-row-button-level-two" on:click={showYamlEdit}
					>{!yamlEditVisible ? 'Show Yaml Editor' : 'Hide Yaml Editor'}</button
				>
			</div>
			<div class:hidden={!yamlEditVisible || !expanded}>
				<YamlEditComponent
					{yamlFunctions}
					{optionName}
					{mergeOutput}
					bind:currentOptions={weightedOptionsAsYaml}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';
</style>
