<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { ItemLinkItem } from '../types/types';

	let searchValue = '';

	export let listItemGroupName = '';
	export let itemLinkItems: ItemLinkItem[] = [];

	let filteredList: ItemLinkItem[] = [];

	function handleInput() {
		filteredList = itemLinkItems.filter((item) =>
			item.itemName.toLowerCase().match(searchValue.toLowerCase())
		);
		itemLinkItems = itemLinkItems; //needed?
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
				<span><em>Local</em></span>
				<span><em>Non-Local</em></span>
			</div>
		</div>
		{#if filteredList.length > 0}
			{#each filteredList as itemGroup}
				<div class="container vertical border-top">
					<label for={`${itemGroup.itemName} count`}>{itemGroup.itemName}</label>
					<div class="no-wrap">
						<label>
							<input
								type="checkbox"
								name={`${itemGroup.itemName} local`}
								value={`Every ${itemGroup.itemName} local`}
								bind:checked={itemGroup.local}
							/>
						</label>
						<label>
							<input
								type="checkbox"
								name={`${itemGroup.itemName} non-local`}
								value={`${itemGroup.itemName} non-local`}
								bind:checked={itemGroup.nonLocal}
							/>
						</label>
					</div>
				</div>
			{/each}
		{:else}
			{#each itemLinkItems as itemGroup}
			<div class="container vertical border-top">
				<label for={`${itemGroup.itemName} count`}>{itemGroup.itemName}</label>
				<div class="no-wrap">
					<label>
						<input
							type="checkbox"
							name={`${itemGroup.itemName} local`}
							value={`Every ${itemGroup.itemName} local`}
							bind:checked={itemGroup.local}
						/>
					</label>
					<label>
						<input
							type="checkbox"
							name={`${itemGroup.itemName} non-local`}
							value={`${itemGroup.itemName} non-local`}
							bind:checked={itemGroup.nonLocal}
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

	input[type='number'] {
		max-width: 80px !important;
		flex-grow: 0 !important;
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
