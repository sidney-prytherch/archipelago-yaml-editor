<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { OptionData, StringNumberMap } from '../types/types';

	export let option: StringNumberMap;
	export let removeOption: (option: StringNumberMap) => void;
</script>

<div class="container">
	<button
		class="round-button"
		title="Select this option and remove others"
		on:click={() => removeOption(option)}
	>
		<i class="fa-solid fa-xmark"></i>
	</button>
</div>

<style>
	@import '../styles/button-styles.css';

	*:not(h1) {
		font-size: large;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: space-around;
		/* background-color: aqua; */
	}
</style>
