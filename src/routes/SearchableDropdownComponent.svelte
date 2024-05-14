<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let searchValue = '';
	export let list: string[] = [];
	export let value = '';

	let filteredList: string[] = [];
	let showDropdown = false;

	function handleInput(): string[] {
		return (filteredList = list.filter((item) =>
			item.toLowerCase().match(searchValue.toLowerCase())
		));
	}

	function setString(text: string) {
		value = text;
		hideMenu();
	}

	function showMenu() {
		showDropdown = !showDropdown;
	}

	function hideMenu() {
		showDropdown = false;
	}
</script>

<div class="horizontal container">
	<button class="search-dropdown-button" on:click={showMenu}
		>{value.length > 0 ? value : 'Select a value...'}</button
	>
	<input
		class="hidden"
		class:show={showDropdown && list.length > 0}
		type="text"
		placeholder="Search..."
		autocomplete="off"
		id="searchInput"
		bind:value={searchValue}
		on:input={handleInput}
	/>
	{#if filteredList.length > 0}
		{#each filteredList as string}
			<button class="hidden" class:show={showDropdown} on:click={() => setString(string)}
				>{string}</button
			>
		{/each}
	{:else}
		{#each list as string}
			<button class="hidden" class:show={showDropdown} on:click={() => setString(string)}
				>{string}</button
			>
		{/each}
	{/if}
</div>

<style>
	@import './styles/weighted-table-styles.css';
	@import './styles/button-styles.css';
	@import './styles/option-group-styles.css';

	#searchInput {
		background-color: white;
		position: sticky;
		top: 0;
		flex-grow: 1;
		text-align: start;
	}

	button {
		flex-grow: 1;
		padding: 8px;
	}

	button:hover {
		background-color: #00000011;
	}

	.dropdown-content {
		display: none;
		overflow: auto;
		z-index: 10;
		max-height: 400px;
	}

	.container {
		max-height: 400px;
		overflow-y: auto;
	}

	.show {
		display: block !important;
		visibility: visible !important;
	}
</style>
