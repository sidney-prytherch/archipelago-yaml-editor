<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { CheckboxList, RadioList } from './types';

	let searchValue = '';

	export let listItemGroupName = '';
	export let radioGroup: RadioList;
	export let radioListLabels: string[];
	export let checkboxList: CheckboxList[];
	export let checkboxListLabel: string[];
	export let list: string[] = [];

	let filteredList: string[] = [];

	function handleInput() {
		filteredList = list.filter((item) => item.toLowerCase().match(searchValue.toLowerCase()));
		radioGroup = radioGroup;
	}
</script>

<div class="horizontal container">
	<h4>{listItemGroupName}s</h4>
	<input
		type="text"
		placeholder="Search..."
		autocomplete="off"
		id="searchInput"
		bind:value={searchValue}
		on:input={handleInput}
	/>
	<div class="dropdown">
		<div class="container vertical hint">
			<span><b>{listItemGroupName}</b></span>
			<div class="no-wrap">
				{#each radioListLabels as radioLabel}
					<span><em>{radioLabel.charAt(0)}</em></span>
				{/each}
				{#each checkboxListLabel as checkboxLabel}
					<span><em>{checkboxLabel.charAt(0)}</em></span>
				{/each}
			</div>
		</div>
		{#if filteredList.length > 0}
			{#each filteredList as string}
				<div class="container vertical">
					<label for={string}>{string}</label>
					<div class="no-wrap">
						{#each radioListLabels as radioLabel}
							<label>
								<input
									type="radio"
									value={radioLabel}
									name={`${string}${listItemGroupName}`}
									bind:group={radioGroup[string]}
								/>
							</label>
						{/each}
						{#each checkboxList as checkboxList, checkboxIndex}
							<label>
								<input
									type="checkbox"
									name={`${string} ${checkboxListLabel[checkboxIndex]}`}
									value={`${string} ${checkboxListLabel[checkboxIndex]}`}
									bind:checked={checkboxList[string]}
								/>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		{:else}
			{#each list as string}
				<div class="container vertical">
					<label for={string}>{string}</label>
					<div class="no-wrap">
						{#each radioListLabels as radioLabel}
							<label>
								<input
									type="radio"
									value={radioLabel}
									name={`${string}${listItemGroupName}`}
									bind:group={radioGroup[string]}
								/>
							</label>
						{/each}
						{#each checkboxList as checkboxList, checkboxIndex}
							<label>
								<input
									type="checkbox"
									name={`${string} ${checkboxListLabel[checkboxIndex]}`}
									value={`${string} ${checkboxListLabel[checkboxIndex]}`}
									bind:checked={checkboxList[string]}
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
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';

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
