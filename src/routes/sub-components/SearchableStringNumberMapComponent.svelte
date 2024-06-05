<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { ItemPlandoItemList } from '../types/types';

	let searchValue = '';

	export let listItemGroupName = '';
	export let itemPlandoItems: ItemPlandoItemList[] = [];

	let filteredList: ItemPlandoItemList[] = [];

	function handleInput() {
		filteredList = itemPlandoItems.filter((item) =>
			item.name.toLowerCase().match(searchValue.toLowerCase())
		);
		itemPlandoItems = itemPlandoItems; //needed?
	}
</script>

<div class="horizontal flexgrow container">
	<h4>{listItemGroupName}s</h4>
	<input
		class="searchInput"
		type="text"
		placeholder="Search..."
		autocomplete="off"
		bind:value={searchValue}
		on:input={handleInput}
	/>
	<div class="dropdown">
		<div class="container vertical hint">
			<span><b>{listItemGroupName}</b></span>
			<div class="no-wrap">
				<span><em>Amount</em></span>
				<span><em>All</em></span>
			</div>
		</div>
		{#if filteredList.length > 0}
			{#each filteredList as itemGroup}
				<div class="container vertical border-top">
					<label for={`${itemGroup.name} count`}>{itemGroup.name}</label>
					<div class="no-wrap">
						<input
							class:invisible={itemGroup.isAll}
							type="number"
							name={`${itemGroup.name} count`}
							bind:value={itemGroup.quantity}
						/>
						<label>
							<input
								type="checkbox"
								name={`Every ${itemGroup.name}`}
								value={`Every ${itemGroup.name}`}
								bind:checked={itemGroup.isAll}
							/>
						</label>
					</div>
				</div>
			{/each}
		{:else}
			{#each itemPlandoItems as itemGroup}
				<div class="container vertical border-top">
					<label for={`${itemGroup.name} count`}>{itemGroup.name}</label>
					<div class="no-wrap">
						<input
							class:invisible={itemGroup.isAll}
							type="number"
							name={`${itemGroup.name} count`}
							bind:value={itemGroup.quantity}
						/>
						<label>
							<input
								type="checkbox"
								name={`Every ${itemGroup.name}`}
								value={`Every ${itemGroup.name}`}
								bind:checked={itemGroup.isAll}
							/>
						</label>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	@import '../styles/option-group-styles.css';
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';

	b {
		font-size: larger;
	}

	.vertical {
		place-items: center;
	}

	.vertical > :nth-child(1) {
		flex-grow: 1;
		padding-left: 8px;
	}

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}

	input[type='number'] {
		max-width: 80px !important;
	}

	.border-top, .horizontal {
		border-top: 1px var(--color-theme-3) solid;
	}

	.dropdown {
		border-top: 1px var(--color-theme-3) solid;
		border-bottom: 1px var(--color-theme-3) solid;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.no-wrap span {
		margin: 9px;
	}

	.flexgrow {
		border-left: 1px var(--color-theme-3) solid;
	}
</style>
