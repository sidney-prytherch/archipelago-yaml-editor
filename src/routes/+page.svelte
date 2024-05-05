<script>
	import { read } from '$app/server';
	import { datapackage } from './datapackage';
	import jsyaml from 'js-yaml';
	import './interfaces';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	//import { type Game, type Item, type ItemLink, type PlandoData, type PlandoItem, type Trigger } from './interfaces';

	/**
	 * @typedef {{name: string, weight: number, hide: boolean}} GameData
	 */
	/**
	 * @type {HTMLInputElement}
	 */
	let input;
	/**
	 * @type {{ [x: string]: any; }}
	 */
	let gameSettings = {};
	let options = {};
	let expanded = true;
	/**
	 * @type {{ [x: string]: GameData; }}
	 */
	let games = {
		'0': { name: 'Hollow Knight', weight: 25, hide: false },
		'1': { name: 'Super Mario World', weight: 0, hide: false }
	};

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

	function expandOrShorten() {
		if (expanded) {
			let gamesList = Object.values(games);
			let gamesWithZeroWeight = gamesList.filter((game) => game.weight == 0);
			if (gamesWithZeroWeight.length == gamesList.length - 1) {
				for (let game of gamesWithZeroWeight) {
					game.hide = true;
				}
				games = games;
				expanded = !expanded;
			}
		} else {
			for (let game of Object.values(games)) {
				game.hide = false;
			}
			games = games;
			expanded = !expanded;
		}
	}

	/**
	 * @param {GameData} game
	 * @returns {number}
	 */
	function getPercent(game) {
		let percent =
			Math.round(
				(10000 * game.weight) /
					Object.values(games).reduce((total, current) => (total += current.weight), 0)
			) / 100;
		return percent || 0;
	}

	/**
	 * @param {GameData} selectedGame
	 */
	function deselectOtherOptions(selectedGame) {
		let gamesList = Object.values(games);
		for (let game of gamesList) {
			if (game === selectedGame) {
				game.weight = 50;
			} else {
				game.weight = 0;
			}
		}
		games = games;
	}

	/**
	 * @param {GameData} selectedGame
	 */
	function selectOption(selectedGame) {
		selectedGame.weight = 50;
		games = games;
	}

	/**
	 * @param {GameData} selectedGame
	 */
	function deselectOption(selectedGame) {
		selectedGame.weight = 0;
		games = games;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Amazing YAML editor</h1>
	<input accept=".yml, .yaml" bind:this={input} on:change={onChange} type="file" />
	<hr />
	<div class:row={!expanded} class="outer container">
		<div class="key">
			<button
				title={expanded ? 'minimize options' : 'expand options'}
				class="carrot"
				on:click={expandOrShorten}
				><i class:rotated={expanded} class="fa-solid fa-carrot"></i></button
			>
			<h3>game</h3>
		</div>
		<div class="inner container">
			<div class:hidden={!expanded} class="vl" />
			<div class="otherstuff container" class:col={expanded}>
				<table class="value">
					{#each Object.keys(games) as gameIndex}
						<tr class={games[gameIndex].hide ? 'hidden' : ''}>
							<td><input type="text" bind:value={games[gameIndex].name} /></td>
							<td class:hidden={!expanded}><span> {getPercent(games[gameIndex])}%</span></td>
							<td class:hidden={!expanded}>
								<div class="container">
									<button
										class="option-button left"
										title="Decrease to 0"
										on:click={() => deselectOption(games[gameIndex])}
									>
										<i class:rotated={expanded} class="fa-solid fa-minus"></i>
									</button>
									<input
										class="center"
										type="range"
										bind:value={games[gameIndex].weight}
										min="0"
										max="50"
									/>
									<button
										class="option-button right"
										title="Increase to 50"
										on:click={() => selectOption(games[gameIndex])}
									>
										<i class:rotated={expanded} class="fa-solid fa-plus"></i>
									</button>
								</div>
							</td>
							<td class:hidden={!expanded}
								><input type="number" bind:value={games[gameIndex].weight} min="0" max="50" /></td
							>
							<td class:hidden={!expanded}>
								<button
									class="option-button"
									title="Select this option and remove others"
									on:click={() => deselectOtherOptions(games[gameIndex])}
								>
									<i class:rotated={expanded} class="fa-solid fa-arrow-left"></i>
								</button>
							</td>
						</tr>
					{/each}
				</table>
			</div>
		</div>
	</div>

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
	.hidden {
		display: none;
		visibility: hidden;
	}
	.outer {
		flex-direction: column; /* By default, stack elements vertically */
	}

	.inner {
		flex-direction: row; /* By default, stack elements vertically */
	}

	.container {
		width: 100%;
		display: flex;
		/* background-color: aqua; */
	}

	.vl {
		background-color: rgb(255, 153, 0);
		width: 3px;
		margin: 0 8px;
		min-width: 3px;
		margin-left: 31px;
	}

	.key {
		/* background-color: lightseagreen; */
		justify-content: left;
		align-items: center;
		display: flex;
	}

	.otherstuff {
		/* background-color: brown; */
		padding: 8px;
	}

	.outer.row {
		flex-direction: row;
	}

	.otherstuff.col {
		flex-direction: column;
	}

	.key,
	.btn,
	table,
	.outer,
	input {
		padding: 8px;
	}

	.btn,
	table {
		margin: 8px;
	}

	.btn {
		height: 50px;
		width: 50px;
		background-color: DodgerBlue;
		border: none;
		color: white;
		font-size: 16px;
		cursor: pointer;
		border-radius: 4px;
		box-sizing: border-box;
	}

	.carrot {
		cursor: pointer;
		border: none;
		height: 50px;
		width: 50px;
		background-color: transparent;
		color: rgb(255, 153, 0);
	}

	.fa-carrot {
  		font-size: 30px !important;
		transform: rotate(-135deg);
		transition: transform 0.5s;
	}

	.fa-carrot.rotated {
		transform: rotate(-45deg);
	}

	table {
		table-layout: fixed;
		flex: 1;
		/* background-color: green; */
	}

	table,
	td,
	th {
		border-left: 0px solid;
		border-right: 0px solid;
		border-collapse: collapse;
	}

	td {
		text-align: center;
	}

	input[type='number'],
	textarea {
		border: 1px solid #ccc;
		background-color: #eee;
	}

	table tr td:nth-child(1) {
		width: 35%;
		min-width: 50px;
	}

	table tr td:nth-child(2) {
		width: 10%;
	}

	table tr td:nth-child(3) {
		width: 25%;
	}

	table tr td:nth-child(4) {
		width: 15%;
	}

	table tr td:nth-child(5) {
		width: 15%;
	}

	input {
		padding: 10px;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='number'] {
		width: 50%;
		min-width: 60px;
	}

	input[type='text'],
	input[type='range'] {
		width: 100%;
		border: 1px solid transparent;
		background-color: transparent;
		text-align: center;
	}

	input[type='text']:focus {
		border-color: #ccc;
		background-color: #eee;
	}
	@media only screen and (max-width: 640px) {
		input[type='range'] {
			display: none;
		}

		table tr td:nth-child(1) {
			width: 45%;
		}

		table tr td:nth-child(3) {
			width: 15%;
		}
	}

	@media only screen and (max-width: 400px) {
		table tr td:nth-child(3) {
			display: none;
		}
	}
</style>
