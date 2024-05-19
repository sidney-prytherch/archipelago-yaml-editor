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

	export let data;
	let yaml = data.yaml;
	let datapackage = data.datapackage;
	let defaultGameName = (' ' + yaml.game).slice(1);
	yaml.game = [
		{
			name: defaultGameName,
			weight: [50],
			hide: false
		}
	];
	let gameOptions = Object.keys(datapackage.games).splice(1);
	let gameKeys = Object.keys(yaml[defaultGameName] || {});

	gameKeys.forEach((key) => {
		if (typeof yaml[defaultGameName][key] === "object" && 'sidneys_secret_range_start' in yaml[defaultGameName][key]) {
			// yaml[defaultGameName].ranges = { range: [32], weight: [0], hide: false }
			let entries = Object.entries(yaml[defaultGameName][key]);
			let defaultOption = entries.filter((it) => it[1] == 50)[0][0];
			let defaultValueAsNumber = parseInt(defaultOption);

			// determine value aliases
			let aliases: {[key: string]: number[]} = {};
			
			let min: number = yaml[defaultGameName][key].sidneys_secret_range_start;
			let max: number = yaml[defaultGameName][key].sidneys_secret_range_end;
			yaml[defaultGameName][key].sidneys_super_secret_ranges = [];
			for (let rangeOptions of entries) {
				if (rangeOptions[0].indexOf("sidneys_secret_notes-") === 0) {
					let aliasName = rangeOptions[0].replace('sidneys_secret_notes-', '');
					let aliasValue = [parseInt((rangeOptions[1] as string).replace('equivalent to ', ''))];
					aliases[aliasName] = aliasValue;
				} else if (rangeOptions[0].indexOf("sidneys_secret_") !== 0) {
					let selectedRange: string = rangeOptions[0];
					let selectedOption: number[] = [parseInt(rangeOptions[0])];
					let selected: OptionData = {range: selectedOption, weight: [rangeOptions[1] as number], hide: false}
					if (isNaN(selectedOption[0])) {
						if (selectedRange === "random") {
							selected.range = [min, max];
							selected.selectedAlias = selectedRange;
						} else if (selectedRange === "random-high") {
							selected.range = [min, max];
							selected.selectedAlias = selectedRange;
						} else if (selectedRange === "random-low") {
							selected.range = [min, max];
							selected.selectedAlias = selectedRange;
						} else {
							selected.range = aliases[selectedRange];
							selected.selectedAlias = selectedRange;
						}
					}
					yaml[defaultGameName][key].sidneys_super_secret_ranges.push(selected);
				}
			}

			defaultValueAsNumber = isNaN(defaultValueAsNumber) ? aliases[defaultOption][0] : defaultValueAsNumber;
			aliases.default = [defaultValueAsNumber];

			let rangesOptions: NumberRange = {
				min: min,
				max: max,
				default: defaultValueAsNumber
			};
			yaml[defaultGameName][key].sidneys_super_secret_rangesOptions = rangesOptions;
			yaml[defaultGameName][key].sidneys_super_secret_aliases = aliases;
		}
	});
</script>

<svelte:head>
	<title>Archipelago YAML Editor</title>
	<meta name="description" content="Amazing YAML Editor" />
</svelte:head>

<main>
	<section>
		<h1>Amazing YAML editor</h1>

		<!-- {JSON.stringify(data.datapackage)} -->

		<StringComponent bind:optionValue={yaml.name} optionName="name" />
		<MultilineStringComponent bind:optionValue={yaml.description} optionName="description" />
		<WeightedListComponent
			bind:weightedOptions={data.yaml.game}
			bind:optionKeys={gameOptions}
			optionName="game"
		/>

		{#each gameKeys as key}
			{#if typeof yaml[defaultGameName][key] === "object" && 'sidneys_secret_range_start' in yaml[defaultGameName][key]}
				<WeightedNumberListComponent
					bind:weightedOptions={yaml[defaultGameName][key].sidneys_super_secret_ranges}
					optionName={key}
					optionRange={yaml[defaultGameName][key].sidneys_super_secret_rangesOptions}
					numberAliases={yaml[defaultGameName][key].sidneys_super_secret_aliases}
				/>
			{/if}
		{/each}
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
