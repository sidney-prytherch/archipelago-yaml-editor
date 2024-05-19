<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let list: string[] = [];
    export let disabledList: string[] = [];
	export let value = '';
    export let selectOption = (val: string) => {};


</script>

<div class="horizontal container">
    <select bind:value={value} class="key" on:change={() => selectOption(value)}>
        {#each list as option}
            <option value={option} disabled={disabledList.some(item => item == option)}>{option}</option>
        {/each}
    </select>
</div>

<style>
	@import '../styles/weighted-table-styles.css';
	@import '../styles/button-styles.css';
	@import '../styles/option-group-styles.css';

    select {
        text-align: start;
    }
</style>
