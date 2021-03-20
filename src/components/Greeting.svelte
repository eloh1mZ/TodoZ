<script>
import { Task } from "../store"
import Field from "@/elements/Field.svelte"


function click(e) {
	Task.add({
		title: e.detail.value
	})
}

</script>

<div class="greeting">
	<h1 class="greeting__title">TodoZ</h1>
	<Field on:submit={click} />
</div>

<style>
	.greeting {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
