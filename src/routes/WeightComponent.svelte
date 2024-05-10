<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import type { OptionData, NumberRange } from './types';

	export let option: OptionData;
	export let getPercent: (option: OptionData) => {};
	const weightDefault: NumberRange = {min: 0, max: 50, default: 25}


	function selectOption() {
		option.weight[0] = 50;
		option = option;
	}

	function deselectOption() {
		option.weight[0] = 0;
		option = option;
	}
</script>

<div class="container">
	<span>{getPercent(option)}%</span>
	<button class="round-button" title="Decrease to 0" on:click={() => deselectOption()}>
		<i class="fa-solid fa-circle-minus"></i>
	</button>
	<div class="slider">
		<RangeSlider float min={weightDefault.min} max={weightDefault.max} bind:values={option.weight} />
	</div>
	<button class="round-button" title="Increase to 50" on:click={() => selectOption()}>
		<i class="fa-solid fa-circle-plus"></i>
	</button>
	<input type="number" bind:value={option.weight[0]} min="0" max="50" />
</div>

<style>
	@import './button-styles.css';

	span {
		min-width: 60px;
	}

	.container {
		display: flex;
		align-items: center;
	}

	input[type='number'] {
		border: 1px solid #ccc;
		min-width: 60px;
		padding: 8px;
		border-radius: 4px;
		box-sizing: border-box;
	}

	.slider {
		width: 100%;
		flex-grow: 1; /* Take up all remaining space */
		margin: 0; /* Add margin for better spacing */
	}

	* {
		/* border: solid 1px black; */
		font-size: large;
	}

	.fa-circle-minus {
		padding-left: 8px;
	}

	.fa-circle-plus {
		padding-right: 8px;
	}

	@media only screen and (max-width: 600px) {
		.slider {
			display: none;
		}
	}

	@media only screen and (max-width: 450px) {
		button {
			display: none;
		}
	}
</style>
