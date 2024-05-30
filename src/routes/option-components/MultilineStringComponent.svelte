<script type="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import CarrotButtonComponent from '../sub-components/CarrotButtonComponent.svelte';

	export let optionName = '';
	export let optionValue = '';
	export let optionHint = '';
	export let level = 2;
	let expanded = false;
	let lineCount = Math.max(Math.min(optionValue.split(/\r\n|\r|\n/).length, 20), 2);

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:vertical={!expanded} class="horizontal container flex-start" class:yaml-option={level === 2}>
	<CarrotButtonComponent
		bind:expanded
		{optionName}
		expandOrShorten={optionHint === '' ? () => {} : expandOrShorten}
		{optionHint}
	/>
	<div class="vertical container flexgrow" class:yaml-option-subsection={expanded}>
		<!-- <div class="vl" class:hidden={!expanded} /> -->
		<!-- <div class="container flexgrow"> -->
			<textarea
				name={optionName}
				rows={lineCount}
				placeholder="Enter {optionName}"
				bind:value={optionValue}
			/>
		<!-- </div> -->
	</div>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	* {
		/* border: solid 1px black; */
		font-size: large;
	}
</style>
