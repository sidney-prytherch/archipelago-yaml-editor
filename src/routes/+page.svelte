<script lang="ts">
	import './styles.css';
	import MultilineStringComponent from './option-components/MultilineStringComponent.svelte';
	import WeightedNumberListComponent from './option-components/WeightedNumberListComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import WeightedListComponent from './option-components/WeightedListComponent.svelte';
	import type { ItemPlando, NumberRange, OptionData, SortObject, StringNumberMap } from './types/types';
	import SortComponent from './option-components/SortComponent.svelte';
	import ListNumberMapComponent from './option-components/ListNumberMapComponent.svelte';
	import PlandoItemsComponent from './option-components/PlandoItemsComponent.svelte';
	import CarrotButtonComponent from './sub-components/CarrotButtonComponent.svelte';

	export let data;
	let yaml = data.yaml;
	let datapackage = data.datapackage;
	let defaultGameName = (' ' + yaml.game).slice(1);
	let defaultName = (' ' + yaml.name).slice(1);
	let expanded = true;
	yaml.game = [
		{
			name: defaultGameName,
			weight: [50],
			hide: false
		}
	];
	yaml.name = [{ name: defaultName, weight: [50], hide: false }];
	let gameOptions = Object.keys(datapackage.games).splice(1);
	let gameKeys = Object.keys(yaml[defaultGameName] || {});

	gameKeys.forEach((key) => {
		if (typeof yaml[defaultGameName][key] === 'object') {
			let entries = Object.entries(yaml[defaultGameName][key]);
			if ('sidneys_secret_range_start' in yaml[defaultGameName][key]) {
				// yaml[defaultGameName].ranges = { range: [32], weight: [0], hide: false }
				let defaultOption = entries.filter((it) => it[1] == 50)[0][0];
				let defaultValueAsNumber = parseInt(defaultOption);

				// determine value aliases
				let aliases: { [key: string]: number[] } = {};

				let min: number = yaml[defaultGameName][key].sidneys_secret_range_start;
				let max: number = yaml[defaultGameName][key].sidneys_secret_range_end;
				yaml[defaultGameName][key].sidneys_super_secret_ranges = [];
				for (let rangeOptions of entries) {
					if (rangeOptions[0].indexOf('sidneys_secret_notes-') === 0) {
						let aliasName = rangeOptions[0].replace('sidneys_secret_notes-', '');
						let aliasValue = [parseInt((rangeOptions[1] as string).replace('equivalent to ', ''))];
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
						yaml[defaultGameName][key].sidneys_super_secret_ranges.push(selected);
					}
				}

				defaultValueAsNumber = isNaN(defaultValueAsNumber)
					? aliases[defaultOption][0]
					: defaultValueAsNumber;
				aliases.default = [defaultValueAsNumber];

				let rangesOptions: NumberRange = {
					min: min,
					max: max,
					default: defaultValueAsNumber
				};
				yaml[defaultGameName][key].sidneys_super_secret_rangesOptions = rangesOptions;
				yaml[defaultGameName][key].sidneys_super_secret_aliases = aliases;
			} else if (entries.length > 0) {
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
				yaml[defaultGameName][key].sidneys_super_secret_options = keys;
				yaml[defaultGameName][key].sidneys_super_secret_selected_options = selectedOptions;
			} else if (
				!([
					'start_inventory_from_pool',
					'start_inventory',
					'local_items',
					'non_local_items',
					'start_hints',
					'priority_locations',
					'exclude_locations',
					'start_location_hints'
				].includes(key))
			) {
				console.log(key);
			}
		}
	});

	let plandoItems: ItemPlando = []
	let startInventory: StringNumberMap[] = [];
	let startInventoryFromPool: StringNumberMap[] = [];
	let itemRadioListLabels = ['unspecified_items', 'local_items', 'non_local_items'];
	let itemCheckboxListLabel = ['start_hints'];
	let itemList: string[] = [];
	let locationList: string[] = [];
	let itemSortObject: SortObject[] = [];
	let locationSortObject: SortObject[] = [];
	let locationListLabels = ['unspecified_locations', 'priority_locations', 'excluded_locations'];
	let locationHintListLabel = ['start_location_hints'];

	// export let listItemsGroupName = ''; //location, item
	// export let list: SortObject[] = [];
	// export let optionName = '';
	// export let radioListLabels: string[];
	// export let checkboxListLabel: string[];

	if (defaultGameName in datapackage.games) {
		itemList = structuredClone(datapackage.games[defaultGameName].item_name_groups.Everything);
		locationList = structuredClone(
			datapackage.games[defaultGameName].location_name_groups.Everywhere
		);
		itemSortObject = itemList.map(itemName => {
			return {
				name: itemName,
				radio: itemRadioListLabels[0],
				checkbox: itemCheckboxListLabel.reduce((checkboxObj, checkboxLabel) => {
					return {...checkboxObj, [checkboxLabel]: false }
				}, {})
			};
		});
		locationSortObject = locationList.map(locationName => {
			return {
				name: locationName,
				radio: locationListLabels[0],
				checkbox: locationHintListLabel.reduce((checkboxObj, checkboxLabel) => {
					return {...checkboxObj, [checkboxLabel]: false }
				}, {})
			};
		})
	}


</script>

<svelte:head>
	<title>Archipelago YAML Editor</title>
	<meta name="description" content="Amazing YAML Editor" />
</svelte:head>

<main>
	<section>
		<h1>Amazing YAML editor</h1>

		<!-- {JSON.stringify(data.datapackage)} -->

		<WeightedListComponent bind:weightedOptions={yaml.name} optionName="name" />
		<MultilineStringComponent bind:optionValue={yaml.description} optionName="description" />
		<WeightedListComponent
			bind:weightedOptions={data.yaml.game}
			bind:optionKeys={gameOptions}
			optionName="game"
		/>
		<div class:vertical={!expanded} class="horizontal container yaml-option">
			<CarrotButtonComponent
				bind:expanded
				optionName={defaultGameName}
				expandOrShorten={() => {
					expanded = !expanded;
				}}
				takeFullSpace={true}
			/>
			<div class="vertical container" class:hidden={!expanded}>
				<div class="vl" />
				<div class="container" class:horizontal={expanded}>
					{#each gameKeys as key}
						{#if typeof yaml[defaultGameName][key] === 'object'}
							{#if 'sidneys_secret_range_start' in yaml[defaultGameName][key]}
								<WeightedNumberListComponent
									bind:weightedOptions={yaml[defaultGameName][key].sidneys_super_secret_ranges}
									optionName={key}
									optionRange={yaml[defaultGameName][key].sidneys_super_secret_rangesOptions}
									numberAliases={yaml[defaultGameName][key].sidneys_super_secret_aliases}
								/>
							{:else if 'sidneys_super_secret_options' in yaml[defaultGameName][key]}
								<WeightedListComponent
									bind:weightedOptions={yaml[defaultGameName][key]
										.sidneys_super_secret_selected_options}
									bind:optionKeys={yaml[defaultGameName][key].sidneys_super_secret_options}
									optionName={key}
								/>
							{/if}
						{/if}
					{/each}
					<ListNumberMapComponent
						bind:weightedOptions={startInventory}
						optionName="start_inventory"
						optionKeys={itemList}
					/>
					<ListNumberMapComponent
						bind:weightedOptions={startInventoryFromPool}
						optionName="start_inventory_from_pool"
						optionKeys={itemList}
					/>
					<SortComponent
						listItemsGroupName="Item"
						bind:list={itemSortObject}
						optionName="local_items, non_local_items, start_hints"
						radioListLabels={itemRadioListLabels}
						checkboxListLabels={itemCheckboxListLabel}
					/>
					<SortComponent
						listItemsGroupName="Location"
						bind:list={locationSortObject}
						optionName="priority_locations, exclude_locations, start_location_hints"
						radioListLabels={locationListLabels}
						checkboxListLabels={locationHintListLabel}
					/>
					<PlandoItemsComponent itemNames={itemList} bind:itemPlando={plandoItems} locations={locationList} />
				</div>
			</div>
		</div>
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
