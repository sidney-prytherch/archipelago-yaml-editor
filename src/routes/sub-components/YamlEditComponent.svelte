<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { AnyObject, OptionData } from '../types/types';

	export let optionName = '';
	export let currentOptions;
	export let fromYaml: (
		yamlString: string | undefined | null
	) => { results: OptionData[]; errors: string[]; warnings: string[] } | null;
	export let toYaml: (settings: AnyObject | null) => string;
	export let hideYamlEdit: () => void;
	export let mergeOutput: (
		objectToMerge: OptionData[],
		deletePrevious: boolean,
		replacePreviousKeys: boolean
	) => void;
	$: input = currentOptions;
	let errors: string[] = [];
	let warnings: string[] = [];
	let resultObject: OptionData[] = [];
	let results = '';

	$: defaultLength = Math.max(5, Math.min(20, currentOptions.split('\n').length));

	function update() {
		let interpretedYaml = null;
		input = input
			.trim()
			.replace(/^\s*/gm, '')
			.replace(/\s*$/gm, '')
			.replace(/:\s*(\d*$)/gm, ': $1')
			.replace(/^\s*/gm, '')
			.replace(/\s*:/gm, ':')
			.replace(`${optionName}: \n`, "");
		if (!!input) {
			interpretedYaml = fromYaml(input);
		}
		if (!interpretedYaml) {
			results = '';
			errors = [];
			warnings = [];
		} else {
			errors = interpretedYaml.errors;
			warnings = interpretedYaml.warnings;
			resultObject = interpretedYaml.results;
			results = toYaml(interpretedYaml.results);
		}
	}
</script>

<div class="container horizontal">
	<div class="container">
		<textarea
			name={`${optionName}-yaml-input`}
			rows={defaultLength}
			placeholder="Enter yaml for {optionName}"
			bind:value={input}
		/>
		<button class="round-button" title="Select this option and remove others" on:click={update}>
			<i class="fa-solid fa-arrow-right"></i>
		</button>
		<textarea
			disabled
			name={`${optionName}-yaml-interpreted`}
			rows={defaultLength}
			bind:value={results}
			placeholder={currentOptions}
		/>
	</div>
	<div class="container horizontal short-scroll">
		{#each errors as error}
			<p class="error">{error}</p>
		{/each}
		{#each warnings as warning}
			<p class="warning">{warning}</p>
		{/each}
	</div>
	<div class="container add-options-buttons">
		<button class="create-row-button" on:click={() => mergeOutput(resultObject, true, true)}
			>Delete above options and replace with input yaml</button
		>
		<button class="create-row-button" on:click={() => mergeOutput(resultObject, false, true)}
			>Add input yaml to above options (override duplicates with input yaml)</button
		>
		<button class="create-row-button" on:click={() => mergeOutput(resultObject, false, false)}
			>Add input yaml to above options (ignore duplicates from input yaml)</button
		>
		<button class="create-row-button" on:click={hideYamlEdit}>Hide Yaml settings</button>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	/* * {
		border: blue 3px solid;
	} */

	.warning {
		background-color: rgba(255, 221, 0, 0.3);
		border: 1px solid rgba(255, 221, 0, 0.7);
		margin: 4px;
	}

	.error {
		background-color: rgba(255, 0, 0, 0.3);
		border: 1px solid rgba(255, 0, 0, 0.7);
		margin: 4px;
	}

	textarea {
		resize: vertical;
	}

	.short-scroll {
		max-height: 300px;
		overflow-y: auto;
	}

	textarea {
		flex-grow: 1;
	}

	.round-button {
		align-self: center;
		flex-grow: 0;
	}
</style>
