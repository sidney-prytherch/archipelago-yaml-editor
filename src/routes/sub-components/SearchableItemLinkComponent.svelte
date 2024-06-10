<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { StringBooleanMap, RadioList, SortObject } from '../types/types';
	import { ItemLinkItemOptions } from '../types/enums';

	let searchValue = '';

	let listItemGroupName = 'Item';
	export let itemLinkGroupName = '';
	export let list: SortObject[] = [];
	let radioListLabels = [
		ItemLinkItemOptions.Anywhere,
		ItemLinkItemOptions.Local,
		ItemLinkItemOptions.NonLocal
	];
	let checkboxListLabels = [ItemLinkItemOptions.Linked];

	console.log(list);

	$: filteredList = list.filter((item) => {
		let rowMatchesFilter = item.name.toLowerCase().match(searchValue.toLowerCase());
		list = list;
		return rowMatchesFilter;
	});

	// function handleInput() {
	// 	filteredList = list.filter((item) => item.name.toLowerCase().match(searchValue.toLowerCase()));
	// 	list = list;
	// 	filteredList = filteredList;
	// }
</script>

<div class="horizontal container right-border">
	<h4>{listItemGroupName}s</h4>
	<input
		class="searchInput"
		type="text"
		placeholder="Search..."
		autocomplete="off"
		bind:value={searchValue}
	/>
	<div class="dropdown">
		<div class="container vertical hint">
			<span><b>{listItemGroupName}</b></span>
			<div class="no-wrap">
				{#each radioListLabels as radioLabel}
					<span><em>{radioLabel.charAt(0).toUpperCase()}</em></span>
				{/each}
			</div>
		</div>
		{#if filteredList.length > 0}
			{#each filteredList as sortObj}
				<div class="container vertical bordered">
					{#each Object.keys(sortObj.checkbox) as checkboxName, checkboxIndex}
						<label>
							<input
								type="checkbox"
								name={`${sortObj.name}-${listItemGroupName}-${itemLinkGroupName}-${checkboxListLabels[checkboxIndex]}`}
								value={`${sortObj.name}-${listItemGroupName}-${itemLinkGroupName}-${checkboxListLabels[checkboxIndex]}`}
								on:change={() => {
									if (sortObj.checkbox[checkboxName]) {
										sortObj.radio = ItemLinkItemOptions.Anywhere;
									}
									sortObj.checkbox[checkboxName] = !sortObj.checkbox[checkboxName];
									sortObj = sortObj;
								}}
								bind:checked={sortObj.checkbox[checkboxName]}
							/>
						</label>
					{/each}
					<label for={sortObj.name}>{sortObj.name}</label>
					<div class="no-wrap">
						{#each radioListLabels as radioLabel}
							<label>
								<input
									type="radio"
									value={radioLabel}
									name={`${sortObj.name}-${listItemGroupName}-${itemLinkGroupName}`}
									on:change={() => {
										console.log(sortObj);
										sortObj.checkbox[ItemLinkItemOptions.Linked] = true;
										sortObj.radio = radioLabel;
										sortObj = sortObj;
										list = list;
									}}
									checked={sortObj.radio === radioLabel &&
										sortObj.checkbox[ItemLinkItemOptions.Linked]}
								/>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		{:else}
			{#each list as sortObj}
				<div class="container vertical">
					<label for={sortObj.name}>{sortObj.name}</label>
					<div class="no-wrap">
						{#each radioListLabels as radioLabel}
							<label>
								<input
									type="radio"
									value={radioLabel}
									name={`${sortObj.name}${listItemGroupName}`}
									bind:group={sortObj.radio}
								/>
							</label>
						{/each}
						{#each Object.keys(sortObj.checkbox) as checkboxName, checkboxIndex}
							<label>
								<input
									type="checkbox"
									name={`${sortObj.name} ${checkboxListLabels[checkboxIndex]}`}
									value={`${sortObj.name} ${checkboxListLabels[checkboxIndex]}`}
									bind:checked={sortObj.checkbox[checkboxName]}
								/>
							</label>
						{/each}
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

	b {
		font-size: larger;
	}

	.vertical {
		place-items: center;
	}

	.vertical > :nth-child(2) {
		flex-grow: 1;
		padding-left: 8px;
	}

	.hint > :nth-child(1) {
		flex-grow: 1;
		padding-left: 8px;
	}

    .hint > :nth-child(2) {
		flex-grow: 0;
	}

	input {
		flex-grow: 0 !important;
		text-align: start !important;
        margin: 6px;
	}

	.right-border {
		/* border-right: 1px black solid; */
		min-width: 400px;
	}

	.bordered {
		border-top: 1px var(--color-theme-3) solid;
	}

	.dropdown {
		border-top: 1px var(--color-theme-3) solid;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.no-wrap span {
		margin: 9px;
	}
</style>
