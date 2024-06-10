<script lang="ts">
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { ItemLink, SortObject } from '../types/types';
	import SearchableMultiCheckboxComponent from '../sub-components/SearchableMultiCheckboxComponent.svelte';
	import SearchableItemLinkComponent from './SearchableItemLinkComponent.svelte';
	import { ItemLinkItemOptions } from '../types/enums';

	// {
	//     itemLinkName: string,
	//     items: SortObject[],
	//     replacementItem: string | null,
	//     linkReplacement: boolean,
	//     expanded: boolean
	// }
	export let itemLinkGroup: ItemLink;
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
		<div class="container flexgrow partial-border">
			<SearchableItemLinkComponent
				bind:itemLinkGroupName={itemLinkGroup.itemLinkName}
				bind:list={itemLinkGroup.items}
			/>
		</div>
		<div class="horizontal container flexgrow">
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
			{#each checkboxListFilters as stringList, listIndex}
				<p class="short-scroll">
					<b>{checkboxListLabels[listIndex]}: </b>
					{#each stringList as item}
						<em>{` ${item}`}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
		</div>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	.partial-border {
		border: 1px var(--color-theme-3) solid;
	}

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}
</style>
