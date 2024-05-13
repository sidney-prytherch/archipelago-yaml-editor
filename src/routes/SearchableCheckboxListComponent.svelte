<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { CheckboxList } from './types';

	let searchValue = '';
	export let title = '';
	export let list: string[] = [];
	export let selectionList: CheckboxList;

	let filteredList: string[] = [];

	function handleInput(): string[] {
		return (filteredList = list.filter((item) =>
			item.toLowerCase().match(searchValue.toLowerCase())
		));
	}
</script>

<div class="horizontal container">
	<h4>{title}</h4>
	<input
		type="text"
		placeholder="Search..."
		autocomplete="off"
		id="searchInput"
		bind:value={searchValue}
		on:input={handleInput}
	/>
	<div class="dropdown">
		{#if filteredList.length > 0}
			{#each filteredList as string}
				<div>
					<input
						type="checkbox"
						name={string}
						value={string}
						bind:checked={selectionList[string]}
					/>
					<label for={string}>{string}</label>
				</div>
			{/each}
		{:else}
			{#each list as string}
				<div>
					<input
						type="checkbox"
						name={string}
						value={string}
						bind:checked={selectionList[string]}
					/>
					<label for={string}>{string}</label>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}

	.container {
		border-right: 1px black solid;
		border-top: 1px black solid;
	}

	.dropdown {
		border-top: 1px black solid;
		border-bottom: 1px black solid;
	}
</style>
