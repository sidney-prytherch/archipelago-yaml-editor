<script>
	import { read } from '$app/server';
	import { datapackage } from './datapackage';
	import jsyaml from 'js-yaml';
	import OptionComponent from './OptionComponent.svelte';
	import './interfaces';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	//import { type Game, type Item, type ItemLink, type PlandoData, type PlandoItem, type Trigger } from './interfaces';

	/**
	 * @type {HTMLInputElement}
	 */
	let input;
	/**
	 * @type {{ [x: string]: any; }}
	 */
	let gameSettings = {};
	/**
	 * @type {gameData[]}
	 */
	let games = [
		{ name: 'Hollow Knight', weight: 50, hide: false },
		{ name: 'Super Mario World', weight: 0, hide: false }
	];

	function onChange() {
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				gameSettings = jsyaml.load(reader.result);
				console.log(gameSettings);
				console.log(
					gameSettings?.['Hollow Knight'][Object.keys(gameSettings?.['Hollow Knight'])[0]]
				);
				setGame();
			});
			const text = reader.readAsText(file);
			return;
		}
	}

	function setGame() {
		console.log(gameSettings);
	}

</script>

<svelte:head>
	<title>Archipelago YAML Editor</title>
	<meta name="description" content="Amazing YAML Editor" />
</svelte:head>

<section>
	<h1>Amazing YAML editor</h1>
	<input accept=".yml, .yaml" bind:this={input} on:change={onChange} type="file" />
	<hr />
	<OptionComponent bind:games={games} />
	

	<!-- {#each Object.keys(gameSettings) as key}
		<div class="container">
			{#if typeof gameSettings[key] === 'object'}
				<span class="key">{key}</span>
				<div class="container full-width">
					<div class="vl" />
					<div class="right"></div>
				</div>
			{:else if typeof gameSettings[key] === 'string'}
				<span class="key min-width">{key}</span>
				<div class="vl hidden" />
				<input type="text" value={gameSettings[key]} />
			{/if}
		</div> -->

	<!-- <button class="btn"><i class="fa-solid fa-turn-down"></i></button>

		{#if typeof gameSettings[key] === 'string'}
			<tr>
				<td>{key}</td>
				<td colspan="2">
					{#if key === 'description'}
						<textarea placeholder="Write a description for these settings" rows="2">
							{gameSettings[key]}
						</textarea>
					{:else}
						<input type="text" value={gameSettings[key]} />
					{/if}
				</td>
			</tr>
		{/if}
		<hr /> -->
	<!-- {/each} -->
</section>

<style>
	*:not(h1) {
		/* border: solid 1px black; */
		font-size: large;
	}

	input {
		padding: 10px;
		border-radius: 4px;
		box-sizing: border-box;
		padding: 8px;
	}

</style>