<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { removeItemPlandoGroupHelper } from '../types/optionButtons';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import type { ItemPlando, ItemPlandoItemGroup } from '../types/types';
	import SearchableStringNumberMapComponent from '../sub-components/SearchableStringNumberMapComponent.svelte';
	import { ItemPlandoCount, ItemPlandoForce, ItemPlandoWorld } from '../types/enums';
	import SearchableCheckboxListComponent from '../sub-components/SearchableCheckboxListComponent.svelte';
	import RangeSlider from 'svelte-range-slider-pips';

	let expanded = true;
	export let itemPlando: ItemPlando = [];
	export let itemNames: string[] = [];
	export let locations: string[] = [];
	const optionName = 'plando items';

	function expandOrShorten() {
		expanded = !expanded;
	}

	function addItemGroup() {
		itemPlando = [
			...itemPlando,
			{
				items: itemNames.map((itemName) => {
					return { name: itemName, quantity: 0, isAll: false };
				}),
				locations: locations.reduce((obj, location) => {
					return { ...obj, [location]: false };
				}, {}),
				from_pool: true,
				world: ItemPlandoWorld.Local,
				worldVals: {playerNames: '', playerNums: 1},
				force: ItemPlandoForce.Silent,
				percentage: [100],
				count: ItemPlandoCount.All,
				countVals: { min: 0, max: 1, count: 1 },
				expanded: true
			}
		];
	}

	function removeItemPlandoGroup(option: ItemPlandoItemGroup) {
		removeItemPlandoGroupHelper(itemPlando, option);
		itemPlando = itemPlando;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} />
	<div class="vertical container" class:hidden={!expanded}>
		<div class="vl" />
		<div class="container" class:horizontal={expanded}>
			{#each itemPlando as itemPlandoItemGroup, itemPlandoIndex}
				{@const itemPlandoNum = itemPlandoIndex + 1}
				<div class="vertical container">
					<CarrotButtonComponent
						bind:expanded={itemPlandoItemGroup.expanded}
						optionName={`Item Plando Group #${itemPlandoNum}`}
						expandOrShorten={() => {
							itemPlandoItemGroup.expanded = !itemPlandoItemGroup.expanded;
						}}
					/>
					<div class="end-aligned-items">
						<button
							class:hidden={!itemPlandoItemGroup.expanded}
							on:click={() => removeItemPlandoGroup(itemPlandoItemGroup)}
							><h3 class="delete-button">delete this group</h3></button
						>
					</div>
				</div>
				<div class="vertical container" class:hidden={!itemPlandoItemGroup.expanded}>
					<div class="vl" />
					<div class="container" class:horizontal={itemPlandoItemGroup.expanded}>
						<div class="container">
							<SearchableStringNumberMapComponent
								bind:itemPlandoItems={itemPlandoItemGroup.items}
								listItemGroupName="Item"
							/>
							<SearchableCheckboxListComponent
								bind:selectionList={itemPlandoItemGroup.locations}
								list={locations}
								title="Location"
							/>
						</div>
						<div class="container">
							<p class:hidden={!expanded} class="minimized-data dropdown semi-bordered">
								<b>Items: </b>
								{#each itemPlandoItemGroup.items.filter((it) => it.isAll || it.quantity > 0) as item}
									{@const display = item.isAll ? 'All' : item.quantity > 0 ? item.quantity : ''}
									{#if item.name !== ''}
										<em>{` ${item.name}`}: {display}</em>&nbsp&nbsp
									{/if}
								{/each}
							</p>
							<p class:hidden={!expanded} class="minimized-data dropdown semi-bordered">
								<b>Locations: </b>
								{#each Object.keys(itemPlandoItemGroup.locations).filter((location) => itemPlandoItemGroup.locations[location]) as location}
									<em>{` ${location}`}</em>&nbsp&nbsp
								{/each}
							</p>
						</div>
						<table>
							<tr>
								<td>from pool</td>
								<td>
									<select bind:value={itemPlandoItemGroup.from_pool}>
										<option value={true}>true</option>
										<option value={false}>false</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>world</td>
								<td>
									<select
									bind:value={itemPlandoItemGroup.world}
									>
										<option value={ItemPlandoWorld.Local}>true (local)</option>
										<option value={ItemPlandoWorld.NonLocal}>false (non-local)</option>
										<option value={ItemPlandoWorld.AnyWorld}>null (any worlds)</option>
										<option value={ItemPlandoWorld.PlayerNames}>comma-separated list of names</option>
										<option value={ItemPlandoWorld.PlayerNum}>player number</option>
									</select>
								</td>
								<td>
									<input
										bind:value={itemPlandoItemGroup.worldVals.playerNames}
										class:hidden={itemPlandoItemGroup.world !== ItemPlandoWorld.PlayerNames}
										type="text"
									/>
									<input
									bind:value={itemPlandoItemGroup.worldVals.playerNums}
										class:hidden={itemPlandoItemGroup.world !== ItemPlandoWorld.PlayerNum}
										type="number"
									/>
								</td>
							</tr>
							<tr>
								<td>force</td>
								<td>
									<select bind:value={itemPlandoItemGroup.force}>
										<option value={ItemPlandoForce.True}>true</option>
										<option value={ItemPlandoForce.False}>false</option>
										<option value={ItemPlandoForce.Silent}>silent</option>
									</select>
								</td>
								<td></td>
							</tr>
							<tr>
								<td>percentage</td>
								<td colspan="2">
									<RangeSlider
										bind:values={itemPlandoItemGroup.percentage}
										float
										min={0}
										max={100}
										pips
										pipstep={10}
										first="label"
										last="label"
									/>
								</td>
							</tr>
							<tr>
								<td>count</td>
								<td>
									<select
										bind:value={itemPlandoItemGroup.count}
									>
										<option value={ItemPlandoCount.All}>false (all items)</option>
										<option value={ItemPlandoCount.Range}>random in range</option>
										<option value={ItemPlandoCount.Count}>count</option>
									</select>
								</td>
								<td>
									<div
										class="label-number-group"
										class:hidden={itemPlandoItemGroup.count !== ItemPlandoCount.Range}
									>
										<label for="min {itemPlandoNum}">min: </label>
										<input
											class="short-num"
											bind:value={itemPlandoItemGroup.countVals.min}
											name={`min ${itemPlandoNum}`}
											type="number"
										/>
									</div>
									<div
										class="label-number-group"
										class:hidden={itemPlandoItemGroup.count !== ItemPlandoCount.Range}
									>
										<label for="max {itemPlandoNum}">max: </label>
										<input
											class="short-num"
											bind:value={itemPlandoItemGroup.countVals.max}
											name={`max ${itemPlandoNum}`}
											type="number"
										/>
									</div>
									<div
										class="label-number-group"
										class:hidden={itemPlandoItemGroup.count !== ItemPlandoCount.Count}
									>
										<label for="total {itemPlandoNum}">total: </label>
										<input
											class="short-num"
											bind:value={itemPlandoItemGroup.countVals.count}
											name={`total ${itemPlandoNum}`}
											type="number"
										/>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			{/each}
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button class="create-row-button" on:click={addItemGroup}>Add Item Group</button>
			</div>
		</div>
	</div>
	<ul class:hidden={expanded} class="minimized-data dropdown">
		{#each itemPlando as itemPlandoItemGroup}<li>
				<b>
					{itemPlandoItemGroup.count === ItemPlandoCount.All
						? 'All '
						: itemPlandoItemGroup.count === ItemPlandoCount.Count
							? `${itemPlandoItemGroup.countVals.count}`
							: `Between ${itemPlandoItemGroup.countVals.min} and ${itemPlandoItemGroup.countVals.max} `}</b
				>
				of the below-listed items will have a <b>{itemPlandoItemGroup.percentage}%</b> chance to appear
				in the below-listed locations in
				<b
					>{itemPlandoItemGroup.world === ItemPlandoWorld.Local
						? ' your world '
						: itemPlandoItemGroup.world === ItemPlandoWorld.NonLocal
							? " other players' worlds "
							: itemPlandoItemGroup.world === ItemPlandoWorld.AnyWorld
								? ' any worlds '
							: itemPlandoItemGroup.world === ItemPlandoWorld.PlayerNum
								? ` player ${itemPlandoItemGroup.worldVals.playerNums}'s world `
								: ` the world(s) of ${itemPlandoItemGroup.worldVals.playerNames} `}</b
				>
				and will be
				<b
					>{itemPlandoItemGroup.from_pool
						? ' taken from your item pool. '
						: ' added to your pool of items. '}</b
				>
				If the generator isn't able to do this, it will
				<b>
					{itemPlandoItemGroup.force === ItemPlandoForce.True
						? ' throw an error and stop generating.'
						: itemPlandoItemGroup.force === ItemPlandoForce.False
							? ' log a warning and continue generating.'
							: ' continue generating.'}</b
				>
				<br />
				<b>Items:</b>
				{#each itemPlandoItemGroup.items.filter((it) => it.isAll || it.quantity > 0) as item}
					{@const display = item.isAll ? 'All' : item.quantity > 0 ? item.quantity : ''}
					{#if item.name !== ''}
						<em>{` ${item.name}`}: {display}</em>&nbsp&nbsp
					{/if}
				{/each}
				<b>Locations:</b>
				{#each Object.keys(itemPlandoItemGroup.locations).filter((location) => itemPlandoItemGroup.locations[location]) as location}
					<em>{` ${location}`}</em>&nbsp&nbsp
				{/each}
				<br />
					</li>
		{/each}
		</ul>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	button {
		height: 100%;
	}

	.semi-bordered {
		margin: 0 !important;
		flex-basis: 100%;
		border-right: 1px black solid;
		border-bottom: 1px black solid;
	}

	td {
		padding: 8px;
		margin: 8px;
	}

	table tr td:nth-child(1) {
		width: 40% !important;
	}

	table tr td:nth-child(2) {
		width: 10% !important;
	}

	table tr td:nth-child(3) {
		width: 60% !important;
	}

	input {
		border: black 1px solid !important;
	}

	.short-num {
		max-width: 100px;
	}

	.label-number-group {
		width: fit-content !important;
		display: inline-block;
	}
</style>
