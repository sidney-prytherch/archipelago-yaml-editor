<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let optionName = '';
	export let optionValue = '';
</script>

<div class="container">
	<i class="fa-solid fa-carrot"></i>
	<h3>{optionName}</h3>
	<input class="minimized-data" type="text" placeholder="Enter {optionName}" bind:value={optionValue} />
</div>

<style>
	@import './option-group-styles.css';

	div {
		align-items: center;
		padding: 8px;
	}

	input {
		margin-left: 23px;
	}
</style>
