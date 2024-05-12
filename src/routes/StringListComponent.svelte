<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let expanded = true;
	export let list: string[] = [];
	export let optionName = '';

	function expandOrShorten() {
		expanded = !expanded;
	}
</script>

<div class:vertical={!expanded} class="horizontal container yaml-option">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>{optionName}</h3>
	</button>
	<div class="vertical container">
		<div class:hidden={!expanded} class="vl" />
		<div class="container" class:horizontal={expanded}>
            <ul>
                {#each list as string}
                    <li>
                        <input
                            class="minimized-data"
                            type="text"
                            placeholder="Enter option name"
                            bind:value={string}
                        />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    @import './weighted-table-styles.css';
	@import './button-styles.css';
	@import './option-group-styles.css';
</style>
