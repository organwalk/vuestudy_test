<template>
    <div>
        <p>监听</p>
        <p>{{ fullName }}</p>
        <input v-model="firstName" /><br/>
        <input v-model="lastName" />
    </div>
    <hr/>
</template>
<script>
import { defineComponent,watch } from 'vue';
export default defineComponent({
  data() {
    return {
      firstName: '',
      lastName: '',
      fullName: ''
    }
  },
  watch: {
    firstName(newVal, oldVal) {
      this.updateFullName(newVal, this.lastName, oldVal);
    },
    lastName(newVal, oldVal) {
      this.updateFullName(this.firstName, newVal, oldVal);
    }
  },
  methods: {
    updateFullName(firstName, lastName, oldFullName) {
      const newFullName = `${firstName} ${lastName}`;
      if (newFullName !== oldFullName) {
        this.fullName = newFullName;
        console.log(`fullName changed from ${oldFullName} to ${newFullName}`);
      }
    }
  }
})
</script>