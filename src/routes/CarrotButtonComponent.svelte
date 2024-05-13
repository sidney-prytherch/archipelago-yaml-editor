<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	export let optionName = '';
	export let expanded = false;
	export let expandOrShorten: () => void;
</script>


<button
    title={expanded ? 'minimize options' : 'expand options'}
    class="option-group-key"
    on:click={expandOrShorten}
>
    <i class:rotated={expanded} class="fa-solid fa-carrot"></i>
    <h3>{optionName}</h3>
</button>

<style>
	@import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';
</style>
