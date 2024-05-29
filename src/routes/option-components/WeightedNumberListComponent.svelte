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

	let weightedOptionsAsYaml = '';
	let expanded = true;
	export let weightedOptions: OptionData[] = [];
	export let optionRange: NumberRange;
	export let optionName = '';
	export let optionHint = '';
	export let numberAliases: { [key: string]: number[] } = {};
	let personalNumberAliases = structuredClone(numberAliases);
	let numberAliasNames = Object.keys(personalNumberAliases);
	let pipStep = 0;
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
	expandOrShorten();
	let yamlEditVisible = false;

	function showYamlEdit() {
		weightedOptionsAsYaml = toYaml(null);
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
			{ range: [optionRange.min, optionRange.max], weight: [50], hide: false }
		];
	}

	function addNumberOption() {
		weightedOptions = [
			...weightedOptions,
			{ range: [optionRange.default || optionRange.min], weight: [50], hide: false }
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

	function mergeOutput(objectToMerge: OptionData[], deletePrevious: boolean, replacePreviousKeys: boolean) {
		// console.log(objectToMerge)
		if (deletePrevious) {
			weightedOptions = [];
		}
		for (let newWeightedOption of Object.values(objectToMerge)) {
			let newWeightedOptionRange = (newWeightedOption.range || []).sort()
			let foundDuplicate = false;
			for (let weightedOption of weightedOptions) {
				let weightedOptionRange = (weightedOption.range || []).sort()
				if (weightedOptionRange.length === newWeightedOptionRange.length &&
					(
						(weightedOptionRange.length === 1 && 
							weightedOptionRange[0] === newWeightedOptionRange[0]
						) ||
						(weightedOptionRange.length === 2 && 
						weightedOptionRange[0] === newWeightedOptionRange[0] && 
						weightedOptionRange[1] === newWeightedOptionRange[1] && 
						weightedOption.selectedAlias === newWeightedOption.selectedAlias
						)
					)
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

	function fromYaml(yaml: string | undefined | null): {
		results: OptionData[];
		errors: string[];
		warnings: string[];
	} {
		if (!yaml) {
			return {
			results: [],
			warnings: [],
			errors: []

			}
		}
		let formattedRangeObj: AnyObject = jsYaml.load(yaml) as AnyObject;
		// console.log(formattedRangeObj);

		let warnings: string[] = [];
		let errors: string[] = [];
		let rangeObjects: OptionData[] = [];

		let returnObj = {
			results: rangeObjects,
			warnings: warnings,
			errors: errors
		};

		for (let rangeObjKey of Object.keys(formattedRangeObj)) {
			let weightedObject: OptionData = {
				hide: false,
				range: [],
				selectedAlias: '',
				weight: [0]
			};

			rangeObjects.push(weightedObject);

			let weight = formattedRangeObj[rangeObjKey];
			let weightNum: number | undefined;
			if (typeof weight === 'string') {
				weightNum = Number.parseInt(weight);
			}
			if (typeof weight === 'number') {
				weightNum = weight;
			}
			if (typeof weightNum === 'number') {
				if (isNaN(weight)) {
					warnings.push(
						`Could not interpret weight '${weight}' for key '${rangeObjKey}'. Will assign weight of 0 to '${rangeObjKey}'`
					);
					weight = 0;
				}
				weightedObject.weight = [Math.max(0, Math.min(50, weight))];
			} else {
				errors.push(`can't interpret yaml - attempting to interpret key '${rangeObjKey}' with weight of '${weight}' for option '${optionName}'`);
			}

			if (rangeObjKey in numberAliases) {
				weightedObject.selectedAlias = rangeObjKey;
				weightedObject.range = structuredClone(numberAliases[rangeObjKey]);
				continue;
			}

			let keyAsNumber = Number.parseInt(rangeObjKey);
			if (keyAsNumber >= optionRange.min && keyAsNumber <= optionRange.max) {
				weightedObject.range = [keyAsNumber];
				continue;
			}

			let matchingAliasOrNull =
				(!isNaN(keyAsNumber)
					? Object.entries(numberAliases)
							.filter((it) => it[1].length === 1 && it[1][0] === keyAsNumber)
							.map((it) => it[0])
					: [])[0] ?? null;
			if (matchingAliasOrNull) {
				weightedObject.selectedAlias = matchingAliasOrNull;
				weightedObject.range = structuredClone(numberAliases[matchingAliasOrNull]);
				continue;
			}

			let rangeMin: number | undefined;
			let rangeMax: number | undefined;
			let stringParts = rangeObjKey.split('-');

			if (rangeObjKey === 'random') {
				rangeMin = optionRange.min;
				rangeMax = optionRange.max;
				weightedObject.selectedAlias = 'random';
			} else if (rangeObjKey === 'random-high') {
				rangeMin = optionRange.min;
				rangeMax = optionRange.max;
				weightedObject.selectedAlias = 'random-high';
			} else if (rangeObjKey === 'random-middle') {
				rangeMin = optionRange.min;
				rangeMax = optionRange.max;
				weightedObject.selectedAlias = 'random-middle';
			} else if (rangeObjKey === 'random-low') {
				rangeMin = optionRange.min;
				rangeMax = optionRange.max;
				weightedObject.selectedAlias = 'random-low';
			} else if (rangeObjKey.startsWith('random-range-middle-') && stringParts.length === 5) {
				rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
				rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
				weightedObject.selectedAlias = 'random-middle';
			} else if (rangeObjKey.startsWith('random-range-low-')) {
				rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
				rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
				weightedObject.selectedAlias = 'random-low';
			} else if (rangeObjKey.startsWith('random-range-high-')) {
				rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
				rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
				weightedObject.selectedAlias = 'random-high';
			} else if (rangeObjKey.startsWith('random-range-')) {
				rangeMin = Number.parseInt(stringParts[2]) ?? rangeMin;
				rangeMax = Number.parseInt(stringParts[3]) ?? rangeMax;
				weightedObject.selectedAlias = 'random';
			}
			//  else {
			// 	errors.push(`couldn't understand key '${rangeObjKey}' for '${optionName}'`);
			// }

			if (typeof rangeMin === 'undefined' || typeof rangeMax === 'undefined') {
				errors.push(
					`couldn't understand the key '${rangeObjKey}' for options '${optionName}'. Is the key formatted incorrectly?`
				);
			} else {
				if (rangeMin < optionRange.min || rangeMax > optionRange.max) {
					warnings.push(
						`range ${rangeMin}-${rangeMax} of '${rangeObjKey}' is out of range of [${optionRange.min}, ${optionRange.max}]. Range will be altered from these values.`
					);
				}

				weightedObject.range = [
					Math.max(optionRange.min, rangeMin),
					Math.min(optionRange.max, rangeMax)
				];
			}
		}
		for (let errorString of errors) {
			console.error(errorString);
		}
		return returnObj;
	}

	function logErrorifError(errorIfTrue: boolean, warningIfTrue: boolean, existingKey: string) {
		if (errorIfTrue) {
			if (warningIfTrue) {
				console.warn(
					`key "${existingKey}" with its respective weight is within "${optionName}" multiple times. Duplicates will be ignored.`
				);
			} else {
				console.error(
					`key "${existingKey}" is within "${optionName}" multiple times with different weights.`
				);
			}
		}
	}

	function toYaml(objectToInterpretAsYaml: AnyObject | null) {
		if (!objectToInterpretAsYaml) {
			objectToInterpretAsYaml = weightedOptions;
		}
		let formattedRangeObj: AnyObject = {};
		let min = optionRange.min;
		let max = optionRange.max;
		for (let rangeObj of objectToInterpretAsYaml as OptionData[]) {
			if (rangeObj.range) {
				if (rangeObj.range.length === 2) {
					if (!rangeObj.selectedAlias) {
						console.error('no selected alias for a range! problematic!');
					} else {
						if (rangeObj.range[0] === min && rangeObj.range[1] === max) {
							logErrorifError(
								!!formattedRangeObj[rangeObj.selectedAlias],
								formattedRangeObj[rangeObj.selectedAlias] === rangeObj.weight[0],
								rangeObj.selectedAlias
							);
							formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0];
						} else {
							let namedRange =
								(rangeObj.selectedAlias === 'random'
									? 'random-range'
									: rangeObj.selectedAlias.replace('-', '-range-')) +
								'-' +
								rangeObj.range[0] +
								'-' +
								rangeObj.range[1];
							logErrorifError(
								!!formattedRangeObj[namedRange],
								formattedRangeObj[namedRange] === rangeObj.weight[0],
								namedRange
							);
							formattedRangeObj[namedRange] = rangeObj.weight[0];
						}
					}
				} else if (rangeObj.range.length === 0) {
					console.error('somehow nothing selected for range? ', optionName, rangeObj);
				} else if (rangeObj.selectedAlias) {
					logErrorifError(
						!!formattedRangeObj[rangeObj.selectedAlias],
						formattedRangeObj[rangeObj.selectedAlias] === rangeObj.weight[0],
						rangeObj.selectedAlias
					);
					formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0];
				} else {
					let key = String(rangeObj.range[0]);
					// console.log(`is ${key}, so it's a number`, rangeObj);
					logErrorifError(
						!!formattedRangeObj[key],
						formattedRangeObj[key] === rangeObj.weight[0],
						key
					);
					formattedRangeObj[key] = rangeObj.weight[0];
				}
			}
		}
		let yaml = jsYaml.dump(formattedRangeObj);
		return yaml;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} {optionHint} />
	<div class="container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container" class:horizontal={expanded}>
			<table class="value">
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
								<WeightedOptionButtonsComponent {deselectOtherOptions} {removeOption} bind:option />
							</div>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button class="create-row-button" on:click={addNumberOption}>Add Number Option</button>
				<button class="create-row-button" on:click={addRangeOption}>Add Range Option</button>
				<button class="create-row-button" on:click={showYamlEdit}>{!yamlEditVisible ? 'Show Yaml Editor' : 'Hide Yaml Editor'}</button>
			</div>
			<div class:hidden={!yamlEditVisible || !expanded}>
				<YamlEditComponent
					{fromYaml}
					{toYaml}
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
