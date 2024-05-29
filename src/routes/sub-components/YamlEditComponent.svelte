<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { AnyObject, OptionData } from '../types/types';

	export let optionName = '';
	export let currentOptions;
	export let fromYaml: (
		yamlString: string | undefined | null
	) => { results: OptionData[]; errors: string[]; warnings: string[] } | null;
	export let toYaml: (settings: AnyObject | null) => string;
	export let mergeOutput: (
		objectToMerge: OptionData[],
		deletePrevious: boolean,
		replacePreviousKeys: boolean
	) => void;
	let input = '';
	let errors: string[] = [];
	let warnings: string[] = [];
	let resultObject: OptionData[] = [];
	let results = '';

	$: defaultLength = Math.max(5, Math.min(20, currentOptions.split('\n').length));

	function loadYamlFromSettingsToInput() {
		input = toYaml(null);
		update();
	}

	function update() {
		let interpretedYaml = null;
		input = input
			.trim()
			.replace(/^\s*/gm, '')
			.replace(/\s*$/gm, '')
			.replace(/:\s*(\d*$)/gm, ': $1')
			.replace(/^\s*/gm, '')
			.replace(/\s*:/gm, ':')
			.replace(`${optionName}: \n`, '');
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
	<button
		class="borderless create-row-button"
		title="Fill yaml input with current settings"
		on:click={loadYamlFromSettingsToInput}
	>
		<i class="fa-solid fa-arrow-down"></i>
		Fill yaml input with current settings
		<i class="fa-solid fa-arrow-down"></i>
	</button>
	<div class="container">
		<div class="horizontal container yaml-area">
			<h3>Yaml Input</h3>
			<textarea
				name={`${optionName}-yaml-input`}
				rows={defaultLength}
				placeholder="Enter yaml for {optionName}"
				bind:value={input}
			/>
		</div>
		<button class="round-button" title="Interpret Yaml" on:click={update}>
			<i class="fa-solid fa-arrow-right"></i>
		</button>

		<div class="horizontal container yaml-area">
			<h3>Interpreted yaml from Input</h3>
			<textarea
				disabled
				name={`${optionName}-yaml-interpreted`}
				rows={defaultLength}
				bind:value={results}
				placeholder={currentOptions}
			/>
		</div>
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
		<button
			class="create-row-button"
			on:click={() => mergeOutput(resultObject, true, true)}
			disabled={resultObject.length === 0}>Delete above options and replace with input yaml</button
		>
		<button
			class="create-row-button"
			on:click={() => mergeOutput(resultObject, false, true)}
			disabled={resultObject.length === 0}
			>Add input yaml to above options (override duplicates with input yaml)</button
		>
		<button
			class="create-row-button"
			on:click={() => mergeOutput(resultObject, false, false)}
			disabled={resultObject.length === 0}
			>Add input yaml to above options (ignore duplicates from input yaml)</button
		>
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	/* * {
		border: blue 3px solid;
	} */

	.borderless {
		border: none;
	}

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

	.yaml-area {
		flex-grow: 1;
	}

	h3 {
		text-align: center;
		margin: 0;
		padding: 0;
	}

	.round-button {
		align-self: center;
		flex-grow: 0;
	}
</style>
