<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import type { OptionData, NumberRange } from './types';

	export let option: OptionData;
	export let getPercent: (option: OptionData) => {};
	const weightDefault: NumberRange = { min: 0, max: 50, default: 25 };

	// function selectOption() {
	// 	option.weight[0] = 50;
	// 	option = option;
	// }

	// function deselectOption() {
	// 	option.weight[0] = 0;
	// 	option = option;
	// }
</script>

<div class="container center-aligned">
	<div class="slider">
		<RangeSlider
			float
			min={weightDefault.min}
			max={weightDefault.max}
			pips
			pipstep={10}
			first="label"
			last="label"
			bind:values={option.weight}
		/>
	</div>
	<!-- <button class="round-button" title="Decrease to 0" on:click={() => deselectOption()}>
		<i class="fa-solid fa-circle-minus"></i>
	</button> -->
	<input type="number" bind:value={option.weight[0]} min="0" max="50" />
	<!-- <button class="round-button" title="Increase to 50" on:click={() => selectOption()}>
		<i class="fa-solid fa-circle-plus"></i>
	</button> -->
	<span>{getPercent(option)}%</span>
</div>

<style>
	@import './button-styles.css';
	@import './option-group-styles.css';

	button,
	input {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		.slider {
			display: none;
		}

		button,
		input {
			display: inline-block;
		}
	}

	@media only screen and (max-width: 450px) {
		button {
			display: none;
		}
	}
</style>
