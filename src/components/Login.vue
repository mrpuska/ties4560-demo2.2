<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import userService from '../services/user-service';

let router = useRouter();

var dropboxAppId = import.meta.env.VITE_DROPBOX_CLIENT_ID;
var dropboxRedirectUri = import.meta.env.VITE_LOGIN_REDIRECT_URI;
var loginUri = `https://www.dropbox.com/oauth2/authorize?client_id=${dropboxAppId}&redirect_uri=${dropboxRedirectUri}&response_type=code&scope=sharing.read+files.content.write`;

</script>


<template>
    <h3>User</h3>
    <div v-if="!userService.isAuthenticated()">
        <a :href="loginUri">Login</a>
    </div>
    <div v-else>
        <ul>
            <li>{{userService.userData.name.display_name}}</li>
            <li>{{userService.userData.email}}</li>
        </ul>

        <button @click="userService.logout(); router.push('/')">Logout</button>
    </div>
</template>

<style scoped>
    a {
        border: 1px solid gray;
        border-radius: 0.5em;
        padding: 1em;
    }
</style>