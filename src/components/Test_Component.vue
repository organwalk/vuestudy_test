<template>
<div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
  <hr/>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'Test_Component',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
})
</script>