<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { NumberRange, OptionData } from './types';
	import RangeSlider from 'svelte-range-slider-pips';
	import WeightComponent from './WeightComponent.svelte';
	import WeightedOptionButtonsComponent from './WeightedOptionButtonsComponent.svelte';
	import { deselectOtherOptionsHelper, removeOptionHelper } from './optionButtons';

	let expanded = true;
	export let weightedOptions: OptionData[] = [];
	export let optionRange: NumberRange;
	export let optionName = '';
	export let numberAliases: { [key: string]: number[] } = {};
	let numberAliasNames = Object.keys(numberAliases);
	let pipStep = 0;
	const rangeLength = optionRange.max - optionRange.min;
	const pipStepRange = [Math.round(rangeLength / 10.0), Math.round(rangeLength / 2.0)];
	for (
		let potentialPipStep = pipStepRange[0];
		potentialPipStep < pipStepRange[1];
		potentialPipStep++
	) {
		console.log(potentialPipStep);
		if (rangeLength % potentialPipStep === 0) {
			pipStep = potentialPipStep;
			break;
		}
	}

	let _refs: HTMLSelectElement[] = [];
	let refs: string[] = [];
	$: refs = _refs.map((it) => (it == null ? '' : it.value));

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
		deselectOtherOptionsHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}

	function removeOption(option: OptionData) {
		removeOptionHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="option-group-key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
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
									on:click={() => {
										console.log(refs);
									}}
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
										class:hidden={!expanded}
										on:change={() => {
											if (numberAliasNames.includes(_refs[optionIndex].value)) {
												option.range = structuredClone(numberAliases[_refs[optionIndex].value]);
											}
											refs = refs;
										}}
									>
										{#if !isRange}
											<option value=""></option>
										{/if}
										<option disabled={!isRange} value="random">random</option>
										<option disabled={!isRange} value="random-low">random-low</option>
										<option disabled={!isRange} value="random-middle">random-middle</option>
										<option disabled={!isRange} value="random-high">random-high</option>
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
			</div>
		</div>
	</div>
</div>

<style>
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';
</style>
