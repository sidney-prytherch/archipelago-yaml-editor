<script lang="ts">
	import SearchableCheckboxListComponent from './SearchableCheckboxListComponent.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';

	interface checkboxList {
		[key: string]: boolean;
	}
	let expanded = true;
	export let list: string[] = [];
	export let optionName = '';
	let selectionList: checkboxList = list.reduce(arrayToObjectHelper, {});
	function arrayToObjectHelper(object: checkboxList, current: string): checkboxList {
		return { ...object, [current]: false };
	}
	$: selectedItemsList = list.filter((key) => selectionList[key]);
	$: unselectedItemsList = list.filter((key) => !selectionList[key]);

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="option-group-key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
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
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}

	em {
		border-bottom: 1px solid black;
	}

</style>
