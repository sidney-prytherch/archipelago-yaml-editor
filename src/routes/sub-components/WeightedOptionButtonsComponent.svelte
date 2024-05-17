<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { OptionData } from '../types/types';

	export let option: OptionData;
	export let removeOption: (option: OptionData) => void;
	export let deselectOtherOptions: (option: OptionData) => void;
</script>

<div class="container">
	<button
		class="round-button"
		title="Select this option and remove others"
		on:click={() => deselectOtherOptions(option)}
	>
		<i class="fa-solid fa-wand-sparkles"></i>
	</button>
	<button
		class="delete-button"
		title="Remove option"
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
