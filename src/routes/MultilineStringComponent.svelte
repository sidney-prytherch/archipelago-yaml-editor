<script type="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';


	export let optionName = '';
	/**
	 * @type {string}
	 */
	export let optionValue = '';
</script>

<div>
	<i class="fa-solid fa-carrot"></i>
	<h3>{optionName}</h3>
	<textarea rows="2" placeholder="Enter {optionName}" bind:value={optionValue} />
</div>

<style>
	* {
		/* border: solid 1px black; */
		font-size: large;
	}

	div {
		display: flex;
        justify-content: left;
		align-items: center;
		display: flex;
		padding: 8px;
		border: none;
		background-color: transparent;
		color: rgb(255, 153, 0);
	}

	h3 {
		color: black;
		padding-left: 15px;
        padding-right: 8px;
	}

	.fa-carrot {
		font-size: 30px !important;
		transform: rotate(-135deg);
		transition: transform 0.5s;
	}

	textarea {
		text-align: start !important;
		padding: 10px;
        margin-left: 23px;
		border-radius: 4px;
		box-sizing: border-box;
        width: 100%;
		background-color: transparent;
		text-align: center;
	}

	textarea:focus {
		border-color: #ccc;
		background-color: #eee;
	}
</style>
