<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { StringBooleanMap } from '../types/types';

	let searchValue = '';
	export let title = '';
	export let list: string[] = [];
	export let selectionList: StringBooleanMap;

	let filteredList: string[] = [];

	function handleInput(): string[] {
		return (filteredList = list.filter((item) =>
			item.toLowerCase().match(searchValue.toLowerCase())
		));
	}
</script>

<div class="horizontal flexgrow container">
	<h4>{title}</h4>
	<input
		class="searchInput"
		type="text"
		placeholder="Search..."
		autocomplete="off"
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
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}

	.container {
		border: 1px black solid;
	}

	.dropdown {
		border-top: 1px black solid;
	}
</style>
