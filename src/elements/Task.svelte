<script>
import { Task } from "../store"

export let task
export let id

let format = ms => {
	let date = new Date(ms)
	return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
}

let checked = task.checked

function update() {
	if (checked) task.checked = format(Date.now())
	else task.checked = false
	Task.update(id, task)
}

let x = 0
let ax = 0

let transition = 0
let maxDelta = 125
let optimalDelta = 100

let before;

$: ax = Math.abs(x)


let prevPointerX = 0


let isPointerDown = false

function pointermove(e) {
	if (!isPointerDown) return
	if (ax > maxDelta) return

	x += e.offsetX - prevPointerX

	if (x > 0) x = 0

	if (ax > maxDelta) {
		x = x / ax * maxDelta
	}
}
function pointerdown(e) {
	isPointerDown = true
	prevPointerX = e.offsetX
	transition = 0
}
function pointerup(e) {
	isPointerDown = false
	x = ax < optimalDelta*.6 ? 0 : (x / ax * optimalDelta)
	transition = .25
}


</script>

<article
	class={"task" + (checked ? " task--checked": "")}
	on:pointermove={pointermove}
	on:pointerdown={pointerdown}
	on:pointerup={pointerup}
	on:pointerout={pointerup}
	style={`
		--x: ${x}px;
		--optimal-delta: ${optimalDelta}px;
		--transition: ${transition}s
	`}
>
	<label
		class="task__title"
		for={id}
	>{task.title}</label>

	<div class="checkbox">
		<input
			type="checkbox"
			{id} class="checkbox__input visually-hidden"
			bind:checked
			on:change={update}
		>
		<span class="checkbox__body"></span>
	</div>

	<button
		class="task__btn task__btn--remove"
		style={x < 0 ? `transform: scaleX(${ax / optimalDelta});` : "transform: scaleX(0)"}
		on:click={Task.remove(id)}
	>Remove</button>

</article>

<style>
.task {
	--red: red;
	--green: limegreen;
	position: relative;
	max-width: 600px;
	margin: 0 auto;
	font-size: 1.2em;
	transform: translateX(var(--x));
	touch-action: none;
	transition: all var(--transition);
	background-color: white;
}
.task--checked {
	opacity: .5;
	text-decoration: line-through;
}
.task__title {
	display: block;
	width: 100%;
	padding: 1em 2em;
}
.task__btn {
	position: absolute;
	top: 0;
	font: inherit;
	width: var(--optimal-delta);
	height: 100%;
	transition: transform var(--transition);
	outline: none;
	border: 0
}
.task__btn--remove {
	left: 100%;
	transform-origin: left center;
	background-color: var(--red);
	color: white
}

.checkbox {
	--size: 1.5rem;
	position: absolute;
	top: calc(50% - var(--size) / 2);
	right: 1rem;
}
</style>