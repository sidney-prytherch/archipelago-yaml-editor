<script lang="ts">
	import './styles.css';
	import StringComponent from './StringComponent.svelte';
	import MultilineStringComponent from './MultilineStringComponent.svelte';
	import WeightedNumberListComponent from './WeightedNumberListComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightedListComponent from './WeightedListComponent.svelte';
	import type { NumberRange, OptionData } from './types';
	import StringListComponent from './StringListComponent.svelte';

	//import { type Game, type Item, type ItemLink, type PlandoData, type PlandoItem, type Trigger } from './interfaces';

	let name: string;
	let description: string;
	let input: HTMLInputElement;
	let gameSettings: { [x: string]: any } = {};
	let games: OptionData[] = [
		{ name: 'Hollow Knight', weight: [50], hide: false },
		{ name: 'Super Mario World', weight: [0], hide: false }
	];
	let gameinputs: OptionData[] = [
		{ name: 'Hollow Knight', weight: [50], hide: false },
		{ name: 'Super Mario World', weight: [0], hide: false }
	];
	let gameOptions = ['Hollow Knight', 'Super Mario World', 'Super Mario 64', 'A Link to the Past'];
	let ranges: OptionData[] = [
		{ range: [32], weight: [0], hide: false },
		{ range: [0, 50], weight: [50], hide: false }
	];
	let rangesOptions: NumberRange = { min: 0, max: 50, default: 32 };
	let stringList = [
		'item 1',
		'item 2',
		'item 3',
		'item 4',
		'sword 5',
		'item 6',
		'item 7',
		'item 8',
		'item 9',
		'item 10',
		'item 11',
		'item 12',
		'item 13',
		'sword 14',
		'item 15',
		'item 16',
		'item 17',
		'item 18',
		'item 19',
		'item 20',
		'item 21',
		'sword 22',
		'item 23',
		'item 24',
		'item 25',
		'item 26',
		'item 27',
		'item 28',
		'item 29',
		'item 30'
	];
	// let requires = [
	// 	{ name: 'plando', value: "items" },
	// 	{ name: 'version', value: "0.4.6" }
	// ];
	// let requiresOptions = ["plando", "version"];

	function onChange() {
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				//gameSettings = jsyaml.load(reader.result);
				console.log(gameSettings);
				console.log(
					gameSettings?.['Hollow Knight'][Object.keys(gameSettings?.['Hollow Knight'])[0]]
				);
				setGame();
			});
			const text = reader.readAsText(file);
			return;
		}
	}

	function setGame() {
		console.log(gameSettings);
	}
</script>

<svelte:head>
	<title>Archipelago YAML Editor</title>
	<meta name="description" content="Amazing YAML Editor" />
</svelte:head>

<main>
	<section>
		<h1>Amazing YAML editor</h1>
		<!-- <input accept=".yml, .yaml" bind:this={input} on:change={onChange} type="file" /> -->
		<StringComponent bind:optionValue={name} optionName="name" />
		<MultilineStringComponent bind:optionValue={description} optionName="description" />
		<WeightedListComponent
			bind:weightedOptions={games}
			bind:optionKeys={gameOptions}
			optionName="game"
		/>
		<StringListComponent bind:list={stringList} optionName="start inventory" />
		<WeightedListComponent bind:weightedOptions={gameinputs} optionName="game" />
		<WeightedNumberListComponent
			bind:weightedOptions={ranges}
			optionName="range"
			optionRange={rangesOptions}
		/>
	</section>
</main>

<style>
	main {
		flex: 5;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
