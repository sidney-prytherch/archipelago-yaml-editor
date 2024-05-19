<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { ItemPlandoItemList } from '../types/types';

	let searchValue = '';

	export let listItemGroupName = '';
    export let itemPlandoItems: ItemPlandoItemList[] = [];

	let filteredList: ItemPlandoItemList[] = [];

	function handleInput() {
		filteredList = itemPlandoItems.filter((item) => item.name.toLowerCase().match(searchValue.toLowerCase()));
		itemPlandoItems = itemPlandoItems; //needed?
	}
</script>

<div class="horizontal container">
	<h4>{listItemGroupName}s</h4>
	<input
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
				<div class="container vertical">
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
        <div class="container vertical">
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
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	.hint {
		position: sticky;
		top: 0;
		background-color: lightblue;
	}

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

    input[type="number"] {
        max-width: 80px !important;
    }

	.container {
		border-right: 1px black solid;
		border-top: 1px black solid;
	}

	.dropdown {
		border-top: 1px black solid;
		border-bottom: 1px black solid;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.no-wrap span {
		margin: 9px;
	}
</style>
