<script lang="ts">
	import type { StringNumberMap } from './types';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { removeStringNumberMapHelper } from './optionButtons';
	import RemoveButtonComponent from './RemoveButtonComponent.svelte';
	import SearchableDropdownComponent from './SearchableDropdownComponent.svelte';

	let expanded = true;
	export let weightedOptions: StringNumberMap[] = [];
	export let optionKeys: string[] = [];
	export let optionName = '';
	let _refs: HTMLSelectElement[] = [];
	let refs: string[] = [];
	$: refs = _refs.map((it) => (it == null ? '' : it.value));

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
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="option-group-key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<div class="vertical container" class:hidden={!expanded}>
		<div class="vl" />
		<div class="container" class:horizontal={expanded}>
			<table class="value">
				{#each weightedOptions as option}
					<tr class:borderless={!expanded} class:hidden={!expanded}>
						<td>
							<!-- <div class:container={!expanded} class:key={!expanded}> -->
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
									<!-- <select 
									class:minimized-data={!expanded}
									bind:this={_refs[optionIndex]}
									on:change={() => refs = refs}
									bind:value={option.name}>
										{#each optionKeys as optionKey}
											<option disabled={refs.includes(optionKey)} value={optionKey}>{optionKey}</option>
										{/each}
									</select> -->
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
					disabled={optionKeys.length > 0 && refs.length === optionKeys.length}
					on:click={addOption}>Add Option</button
				>
			</div>
		</div>
	</div>
	<p class:hidden={expanded} class="minimized-data dropdown">
		{#each weightedOptions as item}
			{#if item.name !== ''}
				<em>{item.name}: {item.value}</em>&nbsp&nbsp
			{/if}
		{/each}
	</p>
</div>

<style>
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';
</style>
