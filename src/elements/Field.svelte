<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let value = ""
	function submit(e) {
		if (!value) return
		dispatch("submit", {
			value
		})
		value = ""
	}
</script>

<form class="field" on:submit|preventDefault={submit}>
	<input type="text" class="field__input" bind:value>
	<button type="submit" class="field__btn">
		Add
	</button>
</form>

<style>
.field {
	position: relative;
}
.field__input {
	all: initial;
	box-sizing: border-box;
	font: inherit;
	background-color: #fff;
	padding: 1em 1.5em;
	width: calc(100vw - 2em);
	max-width: 600px;
}
.field__btn {
	position: absolute;
	right: 0; top: 0;
	height: 100%;
	min-width: 4em;
	background-color: var(--primary);
	border: none;
	outline: none;
	color: white;
	font-weight: 1000;
}
@media (max-width: 600px) {
	.field__input:focus + .field__btn {
		display: none;
	}
}
</style>