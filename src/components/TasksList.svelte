<script>
import { Task } from "../store"
import { onDestroy } from "svelte";
import TaskComponent from "@/elements/Task.svelte"

let tasksList = {}
let unsubscribe = Task.list.subscribe(v => {tasksList = v})

let checkeds = {}
Object.keys(tasksList).forEach(key => {
	checkeds[key] = tasksList[key].checked
})

onDestroy(() => {
	unsubscribe()
})

</script>

<ul class="tasks__list">
	{#each Object.keys(tasksList) as id (id)}
		<li class={`tasks__item` + (checkeds[id] ? " tasks__item--checked" : "")} >
			<TaskComponent task={tasksList[id]} {id} />
		</li>
	{/each}
</ul>

<style>
.tasks__list {
	padding: 0;
	margin: 0;
	list-style: none;
	overflow: hidden;
	display: grid;
	margin-top: 2em;
	grid-gap: .5em;
}
.tasks__item {
	width: 100%;
	display: block;
}
.tasks__item--checked {
	order: 100;
}
</style>