<script lang="ts">
	import './styles.css';
	import StringComponent from './option-components/StringComponent.svelte';
	import MultilineStringComponent from './option-components/MultilineStringComponent.svelte';
	import WeightedNumberListComponent from './option-components/WeightedNumberListComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightedListComponent from './option-components/WeightedListComponent.svelte';
	import type { ItemPlando, NumberRange, OptionData, StringNumberMap } from './types/types';
	import StringListComponent from './option-components/StringListComponent.svelte';
	import SortComponent from './option-components/SortComponent.svelte';
	import ListNumberMapComponent from './option-components/ListNumberMapComponent.svelte';
	import PlandoItemsComponent from './option-components/PlandoItemsComponent.svelte';
	import datapackage from './resources/datapackage.json';
	import yamlContent from './resources/alinktothepast.yaml';

	console.log(yamlContent);
	let name: string;
	let description: string;
	let input: HTMLInputElement;
	let gameSettings: { [x: string]: any } = {};
	let games: OptionData[] = [
		// { name: 'Hollow Knight', weight: [50], hide: false },
		// { name: 'Super Mario World', weight: [0], hide: false }
	];
	let gameinputs: OptionData[] = [
		// { name: 'Hollow Knight', weight: [50], hide: false },
		// { name: 'Super Mario World', weight: [0], hide: false }
	];
	let gameOptions = Object.keys(datapackage.games).splice(1);
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
	let stringList = datapackage.games['Hollow Knight'].item_name_groups.Everything;
	let itemList = datapackage.games['Hollow Knight'].item_name_groups.Everything;
	
	let startInventory: StringNumberMap[] = []; //itemList.map(it => { return {name: it, value: 0, hide: true}});
	let plandoItems: ItemPlando = []
	let plandoCharmCosts: StringNumberMap[] = []; //itemList.map(it => { return {name: it, value: 0, hide: true}});
	let radioListLabels = ['Anywhere', 'Local Items', 'Non-local Items'];
	let checkboxListLabel = ['Start Hints'];
	let locationList = datapackage.games['Hollow Knight'].location_name_groups.Everywhere;
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
