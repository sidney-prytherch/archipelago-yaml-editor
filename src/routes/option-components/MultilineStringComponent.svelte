<script type="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let optionName = '';
	export let optionValue = '';
</script>

<div class="container option-group-key yaml-option">
	<i class="fa-solid fa-carrot"></i>
	<h3>{optionName}</h3>
	<textarea rows="2" placeholder="Enter {optionName}" bind:value={optionValue} />
</div>

<style>
	@import '../styles/option-group-styles.css';

	* {
		/* border: solid 1px black; */
		font-size: large;
	}

	div {
		align-items: center;
		padding: 8px;
	}
</style>
