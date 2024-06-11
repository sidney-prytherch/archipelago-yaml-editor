<script lang="ts">
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { ItemLink, SortObject } from '../types/types';
	import SearchableMultiCheckboxComponent from '../sub-components/SearchableMultiCheckboxComponent.svelte';
	import SearchableItemLinkComponent from './SearchableItemLinkComponent.svelte';
	import { ItemLinkItemOptions } from '../types/enums';
	import SearchableDropdownComponent from './SearchableDropdownComponent.svelte';
	import DropdownComponent from './DropdownComponent.svelte';

	// {
	//     itemLinkName: string,
	//     items: SortObject[],
	//     replacementItem: string | null,
	//     linkReplacement: boolean,
	//     expanded: boolean
	// }
	export let itemLinkGroup: ItemLink;
    export let itemList: string[];
    let replacementItems = structuredClone(itemList)
    replacementItems.unshift("null");
    
	let radioListLabels = [
		ItemLinkItemOptions.Anywhere,
		ItemLinkItemOptions.Local,
		ItemLinkItemOptions.NonLocal
	];
	let checkboxListLabels = [ItemLinkItemOptions.Linked];

	$: radioListFilters = radioListLabels.map((radioLabel) => {
		return itemLinkGroup.items.filter((it) => it.radio == radioLabel).map((it) => it.name);
	});

	$: checkboxListFilters = checkboxListLabels.map((checkboxLabel) => {
		return itemLinkGroup.items.filter((it) => it.checkbox[checkboxLabel]).map((it) => it.name);
	});
</script>

<div class="horizontal container">
	<div class="vertical container">
		<div class="container partial-border">
			<SearchableItemLinkComponent
				bind:itemLinkGroupName={itemLinkGroup.itemLinkName}
				bind:list={itemLinkGroup.items}
			/>
		</div>
		<div class="horizontal container flexgrow">
			{#each checkboxListFilters as stringList, listIndex}
				<p class="short-scroll">
					<b>{checkboxListLabels[listIndex]}: </b>
					{#each stringList as item}
						<em>{` ${item}`}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
			{#each radioListFilters as stringList, listIndex}
				{#if radioListLabels[listIndex] !== ItemLinkItemOptions.Anywhere}
					<p class="short-scroll">
						<b>{radioListLabels[listIndex]}: </b>
						{#each stringList as item}
							<em>{` ${item}`}</em>&nbsp&nbsp
						{/each}
					</p>
				{/if}
			{/each}
		</div>
	</div>
	<table>
		<tr>
			<td>Item Link Name</td>
			<td colspan="2">
				<input
					type="text"
					class:minimized-data={!itemLinkGroup.expanded}
					placeholder="Enter option name"
					bind:value={itemLinkGroup.itemLinkName}
				/>
			</td>
		</tr>
        <tr>
			<td>Replacement Item</td>
			<td colspan="2">
				<SearchableDropdownComponent
                    list={replacementItems}
                    bind:value={itemLinkGroup.replacementItem}
                />
			</td>
		</tr>
        <tr>
			<td>Link Replacement</td>
			<td colspan="1">
				<DropdownComponent
                    list={['true', 'false']}
                    bind:value={itemLinkGroup.linkReplacement}
                />
            <td></td>
		</tr>
	</table>
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

	.partial-border {
		border: 1px var(--color-theme-3) solid;
	}

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}
</style>
