<script>
	import { read } from '$app/server';
	import { datapackage } from './datapackage';
	import jsyaml from 'js-yaml';
	import './interfaces'
	//import { type Game, type Item, type ItemLink, type PlandoData, type PlandoItem, type Trigger } from './interfaces';

  	/**
	 * @type {HTMLInputElement}
	 */
  	let input;

	function onChange() {
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.addEventListener("load", function () {
				let gameSettings = jsyaml.load(reader.result);
				console.log(gameSettings);
				console.log(gameSettings?.["Hollow Knight"][Object.keys(gameSettings?.["Hollow Knight"])[0]]);
				setGame(gameSettings);
			});
			const text = reader.readAsText(file);
			return;
		}
	}


	/**
	 * @param {any} gameSettings
	 */
	function setGame(gameSettings) {
		console.log(gameSettings);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1> Amazing YAML editor </h1>
	<input
		accept=".yml, .yaml"
		bind:this={input}
		on:change={onChange}
		type="file"
	/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
