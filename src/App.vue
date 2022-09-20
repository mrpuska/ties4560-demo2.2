<script setup lang="ts">
import userService from './services/user-service'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <h1>Dropbox client</h1>
  <div class="nav">
    <router-link class="nav-link" to="/login">User</router-link>
    <router-link v-if="userService.isAuthenticated" class="nav-link" to="/upload">Upload </router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.nav {
  width: 100%;
}
:host {
  width: 100%;
}
.nav-link {
  margin: 0.5em;
}
</style>
