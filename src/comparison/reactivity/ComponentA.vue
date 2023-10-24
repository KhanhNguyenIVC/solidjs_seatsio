<!-- ComponentA.vue -->
<script setup>
import { store } from "@/store/index.js";
const unreactiveLocalValue = store.count;
//Note: this will not behave reactively

const add = () => {
    store.count = store.count + 1
    // unreactiveLocalValue = unreactiveLocalValue + 1
}

</script>
<template>
    <button @click="add()">Add one</button>
</template>
