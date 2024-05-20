<script lang="ts">
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { SortObject } from '../types/types';
	import SearchableMultiCheckboxComponent from '../sub-components/SearchableMultiCheckboxComponent.svelte';

	let expanded = true;
	export let listItemsGroupName = ''; //location, item
	export let list: SortObject[] = [];
	export let optionName = '';
	export let radioListLabels: string[];
	export let checkboxListLabels: string[];
	export let optionHint = '';

	$: radioListFilters = radioListLabels.map((radioLabel) => {
		return list.filter((it) => it.radio == radioLabel).map((it) => it.name);
	});

	$: checkboxListFilters = checkboxListLabels.map((checkboxLabel) => {
		return list.filter((it) => it.checkbox[checkboxLabel]).map((it) => it.name);
	});

	expandOrShorten();

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:hidden={!expanded} class:vertical={!expanded} class="horizontal container yaml-option">

	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} optionHint={optionHint} />
	<div class:hidden={!expanded} class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container">
			<SearchableMultiCheckboxComponent
				listItemGroupName={listItemsGroupName}
				bind:list
				bind:radioListLabels
				bind:checkboxListLabels
			/>
		</div>
		<div class="horizontal container">
			{#each radioListFilters as stringList, listIndex}
				<p class:hidden={!expanded} class="short-scroll">
					<b>{radioListLabels[listIndex]}: </b>
					{#each stringList as item}
						<em>{` ${item}`}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
			{#each checkboxListFilters as stringList, listIndex}
				<p class:hidden={!expanded} class="short-scroll">
					<b>{checkboxListLabels[listIndex]}: </b>
					{#each stringList as item}
						<em>{` ${item}`}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
		</div>
	</div>
</div>
{#each radioListFilters as stringList, listIndex}
	{#if listIndex > 0}
		<div
			class:hidden={expanded}
			class:vertical={!expanded}
			class="horizontal container yaml-option"
		>
			<CarrotButtonComponent
				bind:expanded
				optionName={radioListLabels[listIndex]}
				{expandOrShorten}
			/>
			<p class="minimized-data dropdown">
				{#each stringList as item}
					<em>{` ${item}`}</em>&nbsp&nbsp
				{/each}
			</p>
		</div>
	{/if}
{/each}
{#each checkboxListFilters as stringList, listIndex}
	<div class:hidden={expanded} class:vertical={!expanded} class="horizontal container yaml-option">
		<CarrotButtonComponent
			bind:expanded
			optionName={checkboxListLabels[listIndex]}
			{expandOrShorten}
		/>
		<p class="minimized-data dropdown">
			{#each stringList as item}
				<em>{item}</em>
			{/each}
		</p>
	</div>
{/each}

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}
</style>
