<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { removeItemLinksGroupHelper, removeItemPlandoGroupHelper } from '../types/optionButtons';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import type { ItemLink, ItemLinks, SortObject } from '../types/types';
	import { ItemPlandoCount, ItemPlandoForce, ItemPlandoWorld } from '../types/enums';
	import SearchableCheckboxListComponent from '../sub-components/SearchableCheckboxListComponent.svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import SearchableItemLinkItemsComponent from '../sub-components/SearchableItemLinkItemsComponent.svelte';
	import SearchableMultiCheckboxComponent from '../sub-components/SearchableMultiCheckboxComponent.svelte';
	import ItemLinkGroupComponent from '../sub-components/ItemLinkGroupComponent.svelte';

	let expanded = false;
	export let itemLinks: ItemLinks = [];
	export let itemNames: string[] = [];
	let itemLinkCount = 0;
	let itemList = structuredClone(itemNames);
	itemList.unshift('everything')
	const optionName = 'item_links';

	function expandOrShorten() {
		expanded = !expanded;
	}

	function addItemGroup() {
		itemLinkCount++;
		itemLinks = [
			...itemLinks,
			{
				itemLinkName: `ItemLink${itemLinkCount}`,
				items: itemList.map((itemName) => {
					return {
						name: itemName,
						radio: 'anywhere',
						checkbox: { linked: false }
					};
				}),
				replacementItem: null,
				linkReplacement: false,
				expanded: true
			}
		];
	}

	function removeItemLinksGroup(option: ItemLink) {
		removeItemLinksGroupHelper(itemLinks, option);
		itemLinks = itemLinks;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option-level-two">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} />
	<div class="vertical container" class:hidden={!expanded}>
		<div class="container flexgrow" class:horizontal={expanded}>
			{#each itemLinks as itemLinkGroup}
				<div class="container horizontal yaml-option-level-three">
					<div class="vertical container">
						<CarrotButtonComponent
							bind:expanded={itemLinkGroup.expanded}
							optionName={itemLinkGroup.itemLinkName}
							expandOrShorten={() => {
								itemLinkGroup.expanded = !itemLinkGroup.expanded;
							}}
						/>
						<div class="end-aligned-items">
							<button
								class:hidden={!itemLinkGroup.expanded}
								on:click={() => removeItemLinksGroup(itemLinkGroup)}
								><h3 class="delete-button">delete this group</h3></button
							>
						</div>
					</div>
					<div class:hidden={!itemLinkGroup.expanded}>
						<ItemLinkGroupComponent
							bind:itemLinkGroup={itemLinkGroup}
						/>
					</div>
				</div>
			{/each}
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button class="create-row-button-level-two" on:click={addItemGroup}>Add Item Group</button>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

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

	input[type='text'] {
		background-color: var(--color-theme-2);
		min-width: 60px;
	}

	input[type='text']:focus {
		background-color: var(--color-theme-1);
		border: 1px solid var(--color-theme-3);
	}

	input[type='text']:focus {
		background-color: var(--color-theme-2);
	}

	.short-num {
		max-width: 100px;
	}

	.label-number-group {
		width: fit-content !important;
		display: inline-block;
	}
</style>
