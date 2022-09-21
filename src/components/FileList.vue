<script setup lang="ts">
    import { ref } from '@vue/reactivity';
    import fileService from '../services/file-service'
    import userService from '../services/user-service'

    var files = ref()

    if (userService.isAuthenticated()){
        fileService.listFiles().then(res => {
            files.value = res.entries
            console.log(res)
        })
    }
</script>


<template>
    <h3>File list</h3>

    <div class="file" v-for="file in files">
        {{file.name}}
        {{file.size.fileSize()}}
    </div>

</template>


<style scoped>
    .file {
        margin: 1em;
        padding: 0.5em;
        border: 1px solid black;
        border-radius: 0.5em;
        cursor: pointer;
        width: 400px;
    }
    .file:hover {
        background-color: rgb(227, 232, 243);
    }
</style>