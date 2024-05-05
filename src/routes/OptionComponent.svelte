<script>

	import jsyaml from 'js-yaml';
	import './interfaces';
	import '@fortawesome/fontawesome-free/css/all.min.css';


	/**
	 * @type {{ [x: string]: any; }}
	 */
	let gameSettings = {};
	let options = {};
	let expanded = true;
	/**
	 * @type {gameData[]}
	 */
    export let games = [];


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
	 * @param {gameData} game
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
	 * @param {gameData} selectedGame
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
	 * @param {gameData} selectedGame
	 */
	function selectOption(selectedGame) {
		selectedGame.weight = 50;
		games = games;
	}

	/**
	 * @param {gameData} selectedGame
	 */
	function deselectOption(selectedGame) {
		selectedGame.weight = 0;
		games = games;
	}

	function addOption() {
		games = [...games, { name: '', weight: 50, hide: false }];
	}

	/**
	 * @param {gameData} selectedGame
	 */
	function removeOption(selectedGame) {
		games.forEach((game, index) => {
			if (game == selectedGame) {
				games.splice(index, 1);
			}
		});
		games = games;
	}
</script>


<div class:row={!expanded} class="outer container">
	<button
		title={expanded ? 'minimize options' : 'expand options'}
		class="carrot key"
		on:click={expandOrShorten}
	>
		<i class:rotated={expanded} class="fa-solid fa-carrot"></i>
		<h3>game</h3>
	</button>
	<div class="inner container">
		<div class:hidden={!expanded} class="vl" />
		<div class="otherstuff container" class:col={expanded}>
			<table class="value">
				{#each games as game}
					<tr class={game.hide ? 'hidden' : ''}>
						<td
							><input
								class:minimized-data={!expanded}
								type="text"
								placeholder="Enter game name"
								bind:value={game.name}
							/></td
						>
						<td class:hidden={!expanded}><span> {getPercent(game)}%</span></td>
						<td class:hidden={!expanded}>
							<div class="container vertical-center">
								<button
									class="round-button"
									title="Decrease to 0"
									on:click={() => deselectOption(game)}
								>
									<i class:rotated={expanded} class="fa-solid fa-circle-minus"></i>
								</button>
								<input type="range" bind:value={game.weight} min="0" max="50" />
								<button
									class="round-button"
									title="Increase to 50"
									on:click={() => selectOption(game)}
								>
									<i class:rotated={expanded} class="fa-solid fa-circle-plus"></i>
								</button>
							</div>
						</td>
						<td class:hidden={!expanded}
							><input type="number" bind:value={game.weight} min="0" max="50" /></td
						>
						<td class:hidden={!expanded}>
							<button
								class="round-button secret"
								title="Select this option and remove others"
								on:click={() => deselectOtherOptions(game)}
							>
								<i class:rotated={expanded} class="fa-solid fa-wand-sparkles"></i>
							</button>
							<button
								class="round-button secret"
								title="Select this option and remove others"
								on:click={() => removeOption(game)}
							>
								<i class:rotated={expanded} class="fa-solid fa-xmark"></i>
							</button>
						</td>
					</tr>
				{/each}
			</table>
			<div class:hidden={!expanded} class="container end">
				<button class="create-row-button" on:click={addOption}>Add Option</button>
			</div>
		</div>
	</div>
</div>

<style>
	*:not(h1) {
		/* border: solid 1px black; */
		font-size: large;
	}

	.end {
		justify-content: flex-end;
	}

	.hidden {
		display: none !important;
		visibility: hidden !important;
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

	tr:hover .secret {
		visibility: visible;
	}

	.secret {
		visibility: hidden;
	}

	.fa-circle-plus,
	.fa-circle-minus,
	.fa-wand-sparkles,
	.fa-xmark {
		font-size: 25px !important;
	}

	.vl {
		background-color: rgb(255, 153, 0);
		width: 3px;
		margin: 0 8px;
		min-width: 3px;
		margin-left: 21px;
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
	table,
	input,
	.create-row-button {
		padding: 8px;
	}

	.create-row-button {
		margin: 8px;
		border-radius: 5px;
		border-color: dodgerblue;
		color: dodgerblue;
		background-color: transparent;

	}

	.minimized-data {
		text-align: start !important;
	}

	h3 {
		color: black;
		padding-left: 15px;
	}

	button {
		cursor: pointer;
	}

	.carrot {
		border: none;
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
		flex: 1;
		/* background-color: green; */
	}

	table,
	td {
		/* border-left: 0px solid;
		border-right: 0px solid; */
		border-collapse: collapse;
	}

	td {
		text-align: center;
	}

	input[type='number'] {
		border: 1px solid #ccc;
	}

	.round-button {
		color: dodgerblue;
		background-color: transparent;
		border: none;
		box-sizing: border-box;
	}

	table tr td:nth-child(1) {
		width: 40%;
		min-width: 128px;
	}

	table tr td:nth-child(2),
	table tr td:nth-child(4) {
		width: 0%;
		min-width: 64px;
	}

	table tr td:nth-child(3) {
		width: 40%;
	}

	table tr td:nth-child(5) {
		width: 10%;
	}

	input {
		padding: 10px;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='number'] {
		width: 100%;
		min-width: 60px;
	}

	input[type='text'],
	input[type='range'] {
		border: none;
		width: 100%;
		background-color: transparent;
		text-align: center;
	}

	input[type='text']:focus {
		width: 100%;
		border-color: #ccc;
		background-color: #eee;
	}

	@media only screen and (max-width: 600px) {
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

	@media only screen and (max-width: 450px) {
		table tr td:nth-child(3) {
			display: none;
		}
	}
</style>
