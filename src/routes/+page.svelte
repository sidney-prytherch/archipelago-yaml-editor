<script lang="ts">
	import './styles.css';
	import StringComponent from './StringComponent.svelte';
	import MultilineStringComponent from './MultilineStringComponent.svelte';
	import WeightedNumberListComponent from './WeightedNumberListComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightedListComponent from './WeightedListComponent.svelte';
	import type { ItemPlando, NumberRange, OptionData, StringNumberMap } from './types';
	import StringListComponent from './StringListComponent.svelte';
	import SortComponent from './SortComponent.svelte';
	import ListNumberMapComponent from './ListNumberMapComponent.svelte';
	import PlandoItemsComponent from './PlandoItemsComponent.svelte';

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
	let progressionRanges = [
		{ range: [50], weight: [50], hide: false },
		{ range: [1, 50], weight: [0], hide: false }
	];
	let progressionRangesOptions = { min: 0, max: 99, default: 50 };
	let progressionAliases = { disabled: [0], normal: [50], extreme: [99] };
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
		'thing that has an exceptionally long name just for the sake of testing',
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
	let itemList = [
		'item 1',
		'item 2',
		'item 3',
		// 'item 4',
		// 'sword 5',
		// 'item 6',
		// 'item 7',
		// 'item 8',
		// 'item 9',
		// 'item 10',
		// 'item 11',
		// 'item 12',
		// 'item 13',
		// 'sword 14',
		// 'item 15',
		// 'item 16',
		// 'thing that has an exceptionally long name just for the sake of testing',
		// 'item 18',
		// 'item 19',
		// 'item 20',
		// 'item 21',
		// 'sword 22',
		// 'item 23',
		// 'item 24',
		// 'item 25',
		// 'item 26',
		// 'item 27',
		// 'item 28',
		// 'item 29',
		// 'item 30'
	];
	let startInventory: StringNumberMap[] = [{ name: itemList[0], value: 1 }]; //itemList.map(it => { return {name: it, value: 0, hide: true}});
	let plandoItems: ItemPlando = []
	let plandoCharmCosts: StringNumberMap[] = []; //itemList.map(it => { return {name: it, value: 0, hide: true}});
	let radioListLabels = ['Anywhere', 'Local Items', 'Non-local Items'];
	let checkboxListLabel = ['Start Hints'];
	let locationList = ['location 12', 'location 22', 'location 32', 'location 42', 'location 52'];
	let locationListLabels = ['Any-Item Locations', 'Priority Locations', 'Excluded Locations'];
	let locationHintListLabel = ['Location Start Hints'];
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
		<PlandoItemsComponent itemNames={itemList} bind:itemPlando={plandoItems} locations={locationList} />
		<StringListComponent bind:list={stringList} optionName="list select" />
		<WeightedListComponent bind:weightedOptions={gameinputs} optionName="game" />
		<WeightedNumberListComponent
			bind:weightedOptions={ranges}
			optionName="range"
			optionRange={rangesOptions}
		/>
		<ListNumberMapComponent
			bind:weightedOptions={startInventory}
			optionName="start inventory"
			optionKeys={itemList}
		/>

		<ListNumberMapComponent
			bind:weightedOptions={plandoCharmCosts}
			optionName="plando charm costs"
		/>
		<WeightedNumberListComponent
			bind:weightedOptions={progressionRanges}
			optionName="progression balancing"
			optionRange={progressionRangesOptions}
			numberAliases={progressionAliases}
		/>
		<SortComponent
			listItemsGroupName="Item"
			bind:list={itemList}
			optionName="Local Items, Non-local Items, Start-Hints"
			{radioListLabels}
			{checkboxListLabel}
		/>
		<SortComponent
			listItemsGroupName="Location"
			bind:list={locationList}
			optionName="Priority Locations, Excluded Locations, Start Location-Hints"
			radioListLabels={locationListLabels}
			checkboxListLabel={locationHintListLabel}
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
		margin-bottom: 60px;
	}
</style>
