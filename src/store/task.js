import { writable } from "svelte/store"

let data = JSON.parse(localStorage.getItem("tasks")) || {}

const list = writable(data)
list.subscribe(value => {
    localStorage.setItem("tasks", JSON.stringify(value));
});

const add = task => {
    list.update(value => {
        value[Date.now()] = task
        return value
    })
}
const remove = id => {
    list.update(value => {
        delete value[id]
        return value
    })
}

const update = (id, task) => {
    list.update(value => {
        Object.keys(task).forEach(key => {
            value[id][key] = task[key]
        })
        return value
    })
}

export default {
	list, add, remove, update
}