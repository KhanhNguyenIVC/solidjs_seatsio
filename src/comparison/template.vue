<script setup>
const txtDemo = ref("Hello World!")
</script>

<template>
    <div>
        <h1>Template Vue</h1>
        <span class="txt-demo">VueJS: {{txtDemo}}</span>
    </div>
</template>

<style>
.txt-demo {
    color: #499f76;
}
</style>

