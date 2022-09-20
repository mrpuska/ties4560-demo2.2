<script setup lang="ts">
import { ref } from 'vue'

    defineProps<{
        loginUri: string
    }>();

var dropboxAppId = import.meta.env.VITE_DROPBOX_CLIENT_ID;
var dropboxRedirectUri = import.meta.env.VITE_LOGIN_REDIRECT_URI;
var loginUri = `https://www.dropbox.com/oauth2/authorize?client_id=${dropboxAppId}&redirect_uri=${dropboxRedirectUri}&response_type=code`;

</script>


<template>
    <h1>login</h1>
    <a :href="loginUri">Login</a>
</template>