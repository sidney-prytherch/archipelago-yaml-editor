<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	export let optionName = '';
	export let optionHint = '';
	export let expanded = false;
	export let expandOrShorten: () => void;
</script>

<div class="container vertical button-container top-align">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="container center"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="triforce-icon"></i>
		<h3>{optionName}</h3>
	</button>
	<p class="option-hint" class:hidden={!expanded}><span>{optionHint}</span></p>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

	.center {
		align-items: center;
	}

	.top-align {
		align-items: flex-start;
	}

	i {
		display: inline-block;
		color: blue;
	}

	h3 {
		display: inline-block;
	}

</style>
