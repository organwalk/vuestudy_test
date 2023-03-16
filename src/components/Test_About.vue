<template>
    <div>
      <h1>About Page</h1>
      <p>{{ message }}</p>
      <router-link to="/">Go to Home Page</router-link>
    </div>
  </template>
  <script>
  import { defineComponent } from 'vue';
  export default defineComponent ({
    data() {
      return {
        message: 'Welcome to the About Page!'
      }
    }
  })
  </script>