<script lang="ts">
	import './styles.css';
	import MultilineStringComponent from './option-components/MultilineStringComponent.svelte';
	import WeightedNumberListComponent from './option-components/WeightedNumberListComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightedListComponent from './option-components/WeightedListComponent.svelte';
	import type {
		ItemPlando,
		NumberRange,
		OptionData,
		SortObject,
		StringNumberMap
	} from './types/types';
	import SortComponent from './option-components/SortComponent.svelte';
	import ListNumberMapComponent from './option-components/ListNumberMapComponent.svelte';
	import PlandoItemsComponent from './option-components/PlandoItemsComponent.svelte';
	import CarrotButtonComponent from './sub-components/CarrotButtonComponent.svelte';
	import { downloadYaml } from './yamlFunctions';
	import jsYaml from 'js-yaml'


	export let data;

	const defaultOptionName = 'A Link to the Past'

	let yamls = data.yamls;
	let datapackage = data.datapackage;
	let defaultOptions;

	let playerOptions: { [key: string]: any } = {
		name: [
			{
				name: 'Player{number}',
				weight: [50],
				hide: false
			}
		],
		description: '',
		game: [
			{
				name: '',
				weight: [50],
				hide: false
			}
		]
	};

	if (data && data.yamls) {
		defaultOptions = data.yamls['A Link to the Past'];
		playerOptions.description = (' ' + defaultOptions.description).slice(1);
	}

	$: gameNames = playerOptions.game.map((gameObject: OptionData) => gameObject.name || '');
	let addedGames: string[] = [];

	$: if (gameNames && Array.isArray(gameNames)) {
		for (let game of gameNames) {
			if (!addedGames.includes(game) && yamls && yamls[game]) {
				addGameKeysToOptions(game);
				addedGames.push(game);
			}
		}
	}

	function addGameKeysToOptions(gameName: string) {
		let yaml: { [key: string]: any } = {};
		if (yamls && yamls[gameName]) {
			playerOptions[gameName] = yamls[gameName][gameName];
			yaml = playerOptions[gameName];
		}

		Object.keys(yaml || {}).forEach((key) => {
			if (typeof yaml[key] === 'object') {
				let entries = Object.entries(yaml[key]);
				if ('sidneys_secret_range_start' in yaml[key]) {
					// yaml[defaultGameName].ranges = { range: [32], weight: [0], hide: false }
					let defaultOption = entries.filter((it) => it[1] === 50 && it[0].indexOf("sidneys_secret") !== 0 )[0][0];
					let defaultValueAsNumber = parseInt(defaultOption);

					// determine value aliases
					let aliases: { [key: string]: number[] } = {};

					let min: number = yaml[key].sidneys_secret_range_start;
					let max: number = yaml[key].sidneys_secret_range_end;
					yaml[key].sidneys_super_secret_ranges = [];
					for (let rangeOptions of entries) {
						if (rangeOptions[0].indexOf('sidneys_secret_notes-') === 0) {
							let aliasName = rangeOptions[0].replace('sidneys_secret_notes-', '');
							let aliasValue = [
								parseInt((rangeOptions[1] as string).replace('equivalent to ', ''))
							];
							aliases[aliasName] = aliasValue;
						} else if (rangeOptions[0].indexOf('sidneys_secret_') !== 0) {
							let selectedRange: string = rangeOptions[0];
							let selectedOption: number[] = [parseInt(rangeOptions[0])];
							let selected: OptionData = {
								range: selectedOption,
								weight: [rangeOptions[1] as number],
								hide: false
							};
							if (isNaN(selectedOption[0])) {
								if (selectedRange === 'random') {
									selected.range = [min, max];
									selected.selectedAlias = selectedRange;
								} else if (selectedRange === 'random-high') {
									selected.range = [min, max];
									selected.selectedAlias = selectedRange;
								} else if (selectedRange === 'random-low') {
									selected.range = [min, max];
									selected.selectedAlias = selectedRange;
								} else {
									selected.range = aliases[selectedRange];
									selected.selectedAlias = selectedRange;
								}
							}
							yaml[key].sidneys_super_secret_ranges.push(selected);
						}
					}


					// console.log("key", key)
					// console.log("yaml", yaml)
					// console.log("aliases", aliases)
					// console.log("defaultOption", defaultOption)
					// console.log("aliases[defaultOption]", aliases[defaultOption])
					// console.log("defaultValueAsNumber", defaultValueAsNumber)

					defaultValueAsNumber = isNaN(defaultValueAsNumber)
						? aliases[defaultOption][0]
						: defaultValueAsNumber;
					aliases.default = [defaultValueAsNumber];

					let rangesOptions: NumberRange = {
						min: min,
						max: max,
						default: defaultValueAsNumber
					};
					yaml[key].sidneys_super_secret_rangesOptions = rangesOptions;
					yaml[key].sidneys_super_secret_aliases = aliases;
				} else if (entries.length > 0 && entries.every(it => it[1] === 0 || it[1] === 50)) {
					let keys = entries.map((it) => it[0]);
					let selectedOptions = entries
						.filter((it) => it[1] !== 0)
						.map((it) => {
							return {
								name: it[0],
								weight: [it[1]],
								hide: false
							};
						});

					yaml[key].sidneys_super_secret_options = keys;
					yaml[key].sidneys_super_secret_selected_options = selectedOptions;
				} else if (
					![
						'start_inventory_from_pool',
						'start_inventory',
						'local_items',
						'non_local_items',
						'start_hints',
						'priority_locations',
						'exclude_locations',
						'start_location_hints'
					].includes(key)
				) {
					yaml[key].sidneys_secret_yaml_string = jsYaml.dump(yaml[key]).trim()
				}
			}
		});

		yaml.plandoItems = [];
		yaml.startInventory = [];
		yaml.startInventoryFromPool = [];
		yaml.itemList = [];
		yaml.locationList = [];
		yaml.itemSortObject = [];
		yaml.locationSortObject = [];
		yaml.expanded = true;

		if (gameName in datapackage.games) {
			yaml.itemList = structuredClone(datapackage.games[gameName].item_name_groups.Everything);
			yaml.locationList = structuredClone(
				datapackage.games[gameName].location_name_groups.Everywhere
			);
			yaml.itemSortObject = yaml.itemList.map((itemName: any) => {
				return {
					name: itemName,
					radio: itemRadioListLabels[0],
					checkbox: itemCheckboxListLabel.reduce((checkboxObj, checkboxLabel) => {
						return { ...checkboxObj, [checkboxLabel]: false };
					}, {})
				};
			});
			yaml.locationSortObject = yaml.locationList.map((locationName: any) => {
				return {
					name: locationName,
					radio: locationListLabels[0],
					checkbox: locationHintListLabel.reduce((checkboxObj, checkboxLabel) => {
						return { ...checkboxObj, [checkboxLabel]: false };
					}, {})
				};
			});
		}
	}

	//let defaultGameName = (' ' + yaml.game).slice(1);
	// let defaultName = (' ' + yaml.name).slice(1);
	// yaml.game = [
	// 	// {
	// 	// 	name: defaultGameName,
	// 	// 	weight: [50],
	// 	// 	hide: false
	// 	// }
	// ];

	// yaml.name = [{ name: baseOptions.name, weight: [50], hide: false }];
	let gameOptions = Object.keys(datapackage.games || {}).splice(1);
	// let gameKeys = Object.keys(yaml[defaultGameName] || {});

	let startInventoryHint = '';
	let startInventoryFromPoolHint = '';
	let localItemsHint = '';
	let nonLocalItemsHint = '';
	let startHintHint = '';
	let priorityLocationsHint = '';
	let excludedLocationsHint = '';
	let startLocationHintHint = '';

	let itemRadioListLabels = ['unspecified_items', 'local_items', 'non_local_items'];
	let itemCheckboxListLabel = ['start_hints'];
	let locationListLabels = ['unspecified_locations', 'priority_locations', 'excluded_locations'];
	let locationHintListLabel = ['start_location_hints'];

	// export let listItemsGroupName = ''; //location, item
	// export let list: SortObject[] = [];
	// export let optionName = '';
	// export let radioListLabels: string[];
	// export let checkboxListLabel: string[];

	if (!!defaultOptions) {
		startInventoryHint = defaultOptions[defaultOptionName]['sidneys_secret_documentation-start_inventory'];
		startInventoryFromPoolHint =
			defaultOptions[defaultOptionName]['sidneys_secret_documentation-start_inventory_from_pool'];
		localItemsHint = `Local Items: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-local_items']}`;
		nonLocalItemsHint = `Non-local Items: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-non_local_items']}`;
		startHintHint =
			`Start Hints: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-start_hints']}`.replace(
				"item's locations prefilled into",
				"items' locations prefilled in"
			);
		priorityLocationsHint = `Priority Locations: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-priority_locations']}`;
		excludedLocationsHint = `Excluded Locations: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-excluded_locations']}`;
		startLocationHintHint =
			`Start Location Hints: ${defaultOptions[defaultOptionName]['sidneys_secret_documentation-start_location_hints']}`.replace(
				'items prefilled into',
				'item prefilled in'
			);
	}

	let nameHint =
		"Your name in-game, limited to 16 characters.\n\
{player} will be replaced with the player's slot number.\n\
{PLAYER} will be replaced with the player's slot number, if that slot number is greater than 1.\n\
{number} will be replaced with the counter value of the name.\n\
{NUMBER} will be replaced with the counter value of the name, if the counter value is greater than 1.";

</script>

<svelte:head>
	<title>Archipelago YAML Editor</title>
	<meta name="description" content="Amazing YAML Editor" />
</svelte:head>

<main>
	<section>
		<h1>Amazing YAML editor</h1>
		<!-- {@debug playerOptions} -->
		<WeightedListComponent
			bind:weightedOptions={playerOptions.name}
			optionName="name"
			optionHint={nameHint}
		/>
		<!-- {@debug playerOptions} -->
		<MultilineStringComponent
			bind:optionValue={playerOptions.description}
			optionName="description"
		/>
		<!-- {@debug playerOptions} -->
		<!-- {@debug playerOptions} -->
		<WeightedListComponent
			bind:weightedOptions={playerOptions.game}
			bind:optionKeys={gameOptions}
			optionName="game"
		/>
		<!-- {@debug playerOptions} -->
		{#each playerOptions.game as gameSelections}
			{@const gameName = gameSelections.name}
			{@const yamlSettings = playerOptions[gameName]}
			<!-- {@debug gameSelections} -->
			<!-- {@debug playerOptions} -->
			{#if !!gameName && !!yamlSettings}
				<div class:vertical={!yamlSettings.expanded} class="horizontal container yaml-option">
					<CarrotButtonComponent
						bind:expanded={playerOptions[gameName].expanded}
						optionName={gameName}
						expandOrShorten={() => {
							playerOptions[gameName].expanded = !yamlSettings.expanded;
						}}
						takeFullSpace={true}
					/>
					<div class="vertical container" class:hidden={!yamlSettings.expanded}>
						<div class="vl" />
						<div class="container" class:horizontal={yamlSettings.expanded}>
							{#each Object.keys(yamlSettings || {}) as key}
								{@const optionHint = yamlSettings[`sidneys_secret_documentation-${key}`] || ''}
								{#if typeof yamlSettings[key] === 'object'}
									{#if 'sidneys_secret_range_start' in yamlSettings[key]}
										<WeightedNumberListComponent
											bind:weightedOptions={playerOptions[gameName][key]
												.sidneys_super_secret_ranges}
											optionName={key}
											{optionHint}
											optionRange={yamlSettings[key].sidneys_super_secret_rangesOptions}
											numberAliases={yamlSettings[key].sidneys_super_secret_aliases}
										/>
									{:else if 'sidneys_super_secret_options' in yamlSettings[key]}
										<!-- {@debug playerOptions} -->
										<WeightedListComponent
											bind:weightedOptions={playerOptions[gameName][key]
												.sidneys_super_secret_selected_options}
											bind:optionKeys={playerOptions[gameName][key].sidneys_super_secret_options}
											optionName={key}
											{optionHint}
										/>
									{:else if 'sidneys_secret_yaml_string' in yamlSettings[key]}
										<!-- {@debug playerOptions} -->
										<MultilineStringComponent
											bind:optionValue={playerOptions[gameName][key].sidneys_secret_yaml_string}
											optionName={key}
											{optionHint}
										/>
									{/if}
								{/if}
							{/each}
							<ListNumberMapComponent
								bind:weightedOptions={playerOptions[gameName].startInventory}
								optionName="start_inventory"
								optionKeys={yamlSettings.itemList}
								optionHint={startInventoryHint}
							/>
							<ListNumberMapComponent
								bind:weightedOptions={playerOptions[gameName].startInventoryFromPool}
								optionName="start_inventory_from_pool"
								optionKeys={yamlSettings.itemList}
								optionHint={startInventoryFromPoolHint}
							/>
							<SortComponent
								listItemsGroupName="Item"
								bind:list={playerOptions[gameName].itemSortObject}
								optionName="local_items, non_local_items, start_hints"
								radioListLabels={itemRadioListLabels}
								checkboxListLabels={itemCheckboxListLabel}
								optionHint={[localItemsHint, nonLocalItemsHint, startHintHint].join('\n')}
							/>
							<SortComponent
								listItemsGroupName="Location"
								bind:list={playerOptions[gameName].locationSortObject}
								optionName="priority_locations, exclude_locations, start_location_hints"
								radioListLabels={locationListLabels}
								checkboxListLabels={locationHintListLabel}
								optionHint={[
									priorityLocationsHint,
									excludedLocationsHint,
									startLocationHintHint
								].join('\n')}
							/>
							<PlandoItemsComponent
								itemNames={yamlSettings.itemList}
								bind:itemPlando={playerOptions[gameName].plandoItems}
								locations={yamlSettings.locationList}
							/>
						</div>
					</div>
				</div>
			{/if}
		{/each}
		<button on:click={() => downloadYaml(playerOptions)}>DOWNLOAD YAML</button>
	</section>
</main>

<style>
	@import './styles/weighted-table-styles.css';
	@import './styles/button-styles.css';
	@import './styles/option-group-styles.css';

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
