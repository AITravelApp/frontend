import { defineStore } from "pinia";

export const useStepperStore = defineStore('counter', () => {

const count = ref(1)

function increment() {
    count.value++
}

return {count, increment}

})

