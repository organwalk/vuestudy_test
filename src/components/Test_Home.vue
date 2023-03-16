<template>
    <div>
      <h1>Home Page</h1>
      <p>{{ message }}</p>
      <router-link to="/about">Go to About Page</router-link>
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue';
  export default defineComponent ({
    data() {
      return {
        message: 'Welcome to the Home Page!'
      }
    }
  })
  </script>