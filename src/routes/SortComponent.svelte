<script lang="ts">
	import CarrotButtonComponent from './CarrotButtonComponent.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import SearchableMultiCheckboxComponent from './SearchableMultiCheckboxComponent.svelte';
	import type { CheckboxList, RadioList } from './types';

	let expanded = true;
	export let listItemsGroupName = '';
	export let list: string[] = [];
	export let optionName = '';
	export let radioListLabels: string[] = [];
	export let checkboxListLabel: string[] = [];

	let radioGroupList: RadioList = list.reduce(arrayToRadioObjectHelper, {});
	let checkboxList: CheckboxList[] = checkboxListLabel.map((_) =>
		list.reduce(arrayToCheckboxObjectHelper, {})
	);
	function arrayToRadioObjectHelper(object: RadioList, current: string): RadioList {
		return { ...object, [current]: radioListLabels[0] };
	}
	function arrayToCheckboxObjectHelper(object: CheckboxList, current: string): CheckboxList {
		return { ...object, [current]: false };
	}
	$: radioButtonStringLists = radioListLabels.map((label) =>
		list.filter((key) => radioGroupList[key] === label)
	);
	$: checkboxButtonStringLists = checkboxList.map((checkboxGroup) =>
		list.filter((key) => checkboxGroup[key])
	);

	// let radioGroupList: RadioList = list.reduce(arrayToRadioObjectHelper, {});
	// let checkboxList: CheckboxList[] = checkboxListLabel.map(_ => list.reduce(arrayToCheckboxObjectHelper, {}));
	// function arrayToRadioObjectHelper(object: RadioList, current: string): RadioList {
	// 	return { ...object, [`${listItemsGroupName}${current}`]: radioListLabels[0] };
	// }
	// function arrayToCheckboxObjectHelper(object: CheckboxList, current: string): CheckboxList {
	// 	return { ...object, [`${listItemsGroupName}${current}`]: false };
	// }
	// $: radioButtonStringLists = radioListLabels.map(label =>
	// 	list.filter((key) => radioGroupList[`${listItemsGroupName}${key}`] === label)
	// )
	// $: checkboxButtonStringLists = checkboxList.map(checkboxGroup =>
	// 	list.filter((key) => checkboxGroup[`${listItemsGroupName}${key}`])
	// )

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:hidden={!expanded} class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} />
	<div class:hidden={!expanded} class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container">
			<SearchableMultiCheckboxComponent
				listItemGroupName={listItemsGroupName}
				bind:radioGroup={radioGroupList}
				bind:radioListLabels
				bind:checkboxList
				bind:checkboxListLabel
				bind:list
			/>
		</div>
		<div class="horizontal container">
			{#each radioButtonStringLists as stringList, listIndex}
				<p class:hidden={!expanded} class="short-scroll">
					<b>{radioListLabels[listIndex]}: </b>
					{#each stringList as item}
						<em>{item}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
			{#each checkboxButtonStringLists as stringList, listIndex}
				<p class:hidden={!expanded} class="short-scroll">
					<b>{checkboxListLabel[listIndex]}: </b>
					{#each stringList as item}
						<em>{item}</em>&nbsp&nbsp
					{/each}
				</p>
			{/each}
		</div>
	</div>
</div>
{#each radioButtonStringLists as stringList, listIndex}
	{#if listIndex > 0}
		<div
			class:hidden={expanded}
			class:vertical={!expanded}
			class="horizontal container yaml-option"
		>
			<CarrotButtonComponent
				bind:expanded
				optionName={radioListLabels[listIndex]}
				{expandOrShorten}
			/>
			<p class="minimized-data dropdown">
				{#each stringList as item}
					<em>{item}</em>&nbsp&nbsp
				{/each}
			</p>
		</div>
	{/if}
{/each}
{#each checkboxButtonStringLists as stringList, listIndex}
	<div class:hidden={expanded} class:vertical={!expanded} class="horizontal container yaml-option">
		<CarrotButtonComponent
			bind:expanded
			optionName={checkboxListLabel[listIndex]}
			{expandOrShorten}
		/>
		<p class="minimized-data dropdown">
			{#each stringList as item}
				<em>{item}</em>&nbsp&nbsp
			{/each}
		</p>
	</div>
{/each}

<style>
	@import './styles/weighted-table-styles.css';
	@import './styles/button-styles.css';
	@import './styles/option-group-styles.css';

	input {
		flex-grow: 0 !important;
		text-align: start !important;
	}
</style>
