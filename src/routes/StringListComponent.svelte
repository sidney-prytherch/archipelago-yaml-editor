<script lang="ts">
	import SearchableCheckboxListComponent from './SearchableCheckboxListComponent.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { StringBooleanMap } from './types';
	import CarrotButtonComponent from './CarrotButtonComponent.svelte';

	let expanded = true;
	export let list: string[] = [];
	export let optionName = '';
	let selectionList: StringBooleanMap = list.reduce(arrayToObjectHelper, {});
	function arrayToObjectHelper(object: StringBooleanMap, current: string): StringBooleanMap {
		return { ...object, [current]: false };
	}
	$: selectedItemsList = list.filter((key) => selectionList[key]);
	$: unselectedItemsList = list.filter((key) => !selectionList[key]);

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} />
	<div class:hidden={!expanded} class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container">
			<SearchableCheckboxListComponent title="All" bind:selectionList bind:list />
			<SearchableCheckboxListComponent
				title="Selected"
				bind:selectionList
				bind:list={selectedItemsList}
			/>
			<SearchableCheckboxListComponent
				title="Unselected"
				bind:selectionList
				bind:list={unselectedItemsList}
			/>
		</div>
	</div>
	<p class:hidden={expanded} class="minimized-data dropdown">
		{#each selectedItemsList as item}
			<em>{item}</em>&nbsp&nbsp
		{/each}
	</p>
</div>

<style>
	@import './styles/weighted-table-styles.css';
	@import './styles/button-styles.css';
	@import './styles/option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}

	em {
		border-bottom: 1px solid black;
	}
</style>
