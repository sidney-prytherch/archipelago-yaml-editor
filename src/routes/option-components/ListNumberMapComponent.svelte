<script lang="ts">
	import type { AnyObject, StringNumberMap } from '../types/types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { removeStringNumberMapHelper } from '../types/optionButtons';
	import RemoveButtonComponent from '../sub-components/RemoveButtonComponent.svelte';
	import SearchableDropdownComponent from '../sub-components/SearchableDropdownComponent.svelte';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';

	let expanded = true;
	export let weightedOptions: StringNumberMap[] = [];
	export let optionKeys: string[] = [];
	export let optionName = '';
	export let optionHint = '';

	expandOrShorten();

	function expandOrShorten() {
		expanded = !expanded;
	}

	function addOption() {
		if (optionKeys.length === 0 || weightedOptions.length < optionKeys.length) {
			weightedOptions = [...weightedOptions, { name: '', value: 0 }];
		}
	}

	function removeOption(option: StringNumberMap) {
		removeStringNumberMapHelper(weightedOptions, option);
		weightedOptions = weightedOptions;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<CarrotButtonComponent bind:expanded {optionName} {expandOrShorten} {optionHint} />
	<div class="vertical container" class:hidden={!expanded}>
		<div class="vl" />
		<div class="container" class:horizontal={expanded}>
			<table class="value">
				{#each weightedOptions as option}
					<tr class:borderless={!expanded} class:hidden={!expanded}>
						<td>
							<div class="container" class:key={!expanded}>
								{#if optionKeys.length === 0}
									<input
										class:minimized-data={!expanded}
										type="text"
										placeholder="Enter option name"
										bind:value={option.name}
									/>
								{:else}
									<SearchableDropdownComponent
										list={optionKeys.filter(
											(it) => !weightedOptions.some((map) => map.name === it)
										)}
										bind:value={option.name}
									/>
								{/if}
							</div>
						</td>
						<td class:hidden={!expanded}>
							<input type="number" disabled={!option.name} bind:value={option.value} />
						</td>
						<td class:hidden={!expanded}>
							<div class="secret">
								<RemoveButtonComponent {removeOption} bind:option />
							</div>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container add-options-buttons">
				<button
					class="create-row-button"
					disabled={optionKeys.length > 0 && weightedOptions.length === optionKeys.length}
					on:click={addOption}>Add Option</button
				>
			</div>
		</div>
	</div>
	<p class:hidden={expanded} class="minimized-data dropdown">
		{#each weightedOptions as item}
			{#if item.name !== ''}
				<em>{` ${item.name}`}: {item.value}</em>&nbsp&nbsp
			{/if}
		{/each}
	</p>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';
</style>
