<template>
    <div>
      <h1>Messages</h1>
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          <h2>{{ message.title }}</h2>
          <p>{{ message.content }}</p>
        </li>
      </ul>
      <form @submit.prevent="addNewMessage">
        <label for="title">Title:</label><br/>
        <input type="text" id="title" v-model="title" /><br/>
        <label for="content">Content:</label><br/>
        <textarea id="content" v-model="content"></textarea><br/>
        <button type="submit">Add Message</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['messages']),
    },
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      ...mapActions(['addMessage']),
      addNewMessage() {
        this.addMessage({
          title: this.title,
          content: this.content,
        });
        this.title = '';
        this.content = '';
      },
    },
  };
  </script>