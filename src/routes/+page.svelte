<script>
	import { read } from '$app/server';
	import { datapackage } from './datapackage';
	import jsyaml from 'js-yaml';
	
  	
  	/**
	 * @type {HTMLInputElement}
	 */
  	let input;
	let text;

	function onChange() {
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.addEventListener("load", function () {
				const text = reader.result;
				let thing = jsyaml.load(reader.result);
				console.log(thing);
				console.log(thing?.["Hollow Knight"][Object.keys(thing?.["Hollow Knight"])[0]]);
			});
			const text = reader.readAsText(file);
			return;
		}
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
