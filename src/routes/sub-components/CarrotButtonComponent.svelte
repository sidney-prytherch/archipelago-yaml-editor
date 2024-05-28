<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	export let optionName = '';
	export let optionHint = '';
	export let expanded = false;
	export let expandOrShorten: () => void;
	export let takeFullSpace = false;
</script>

<div class="container vertical button-container">
	<button
		class:full-space={takeFullSpace}
		title={expanded ? 'minimize options' : 'expand options'}
		class="option-group-key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<p class="option-hint" class:hidden={!expanded}>{optionHint}</p>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	* {
		border: 1px red solid !important;
	}

	.full-space {
		flex-grow: 1;
		text-align: start;
	}
</style>
