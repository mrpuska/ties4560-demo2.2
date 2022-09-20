<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { ref } from 'vue'

    const oauth2Uri = "https://api.dropboxapi.com/oauth2/token"
    const route = useRoute()
    const authCode = route.query.code;
    var responseJson = ref()
    var redirectUri = window.location.toString()

    function getToken() {

        let params = new URLSearchParams()
        params.append('code', authCode?.toString() || "");
        params.append('grant_type', 'authorization_code');
        params.append('client_id', import.meta.env.VITE_DROPBOX_CLIENT_ID);
        params.append('client_secret', import.meta.env.VITE_DROPBOX_CLIENT_SECRET);
        params.append('redirect_uri', import.meta.env.VITE_LOGIN_REDIRECT_URI)

        let result = fetch(oauth2Uri, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: params
        }).then(res => {
            res.json().then(json => {
                responseJson.value = json;
            })
        })
    }

    getToken();

</script>


<template>
    <div>{{responseJson}}</div>
</template>