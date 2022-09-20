<script setup lang="ts">
    import { ref } from 'vue';
    import userService from '../services/user-service';

    let status = ref("");
    let uri = "https://content.dropboxapi.com/2/files/upload";
    let files = ref();

    async function upload() {
        let file = files.value.item(0);
        let content = await file.text();
        console.log(file)
        console.log(content)
        if (!file)
            return;

        let params = new URLSearchParams()
        params.set('authorization', 'Bearer ' + userService.getAccessToken())
        params.set('arg', JSON.stringify({autorename: true, path: '/' + file.name}))

        fetch(uri + "?" + params.toString(), {
                method: 'POST',
                body: content,
                headers: new Headers(
                    {
                        'Content-Type': 'text/plain; charset=dropbox-cors-hack'
                    })
            }).then(res => {
                if (res.status == 200)
                    status.value = "Success!";
                else
                    status.value = "Failed!";
            })
    }

    function onFileUploaded(event: any) {
        files.value = event.target.files;
    }

</script>

<template>
    <h3>File upload </h3>
    <input type="file" id="uploadFile" name="filename" @change="onFileUploaded">
    <button @click="upload()">Upload</button>
    <p>{{status}}</p>
</template>