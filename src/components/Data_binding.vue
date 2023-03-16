<template>
    <div>
        <p>{{ message }}</p>
        <input v-model="message" />
    </div>
    <hr/>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return{
            message:'Hello Vue3!'
        }
    }
})
</script>