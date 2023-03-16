<template>
    <div>
        <p>计算属性</p>
        <p>{{ fullName }}</p>
        <input v-model="firstName" /><br/>
        <input v-model="lastName" />
    </div>
    <hr/>
</template>

<script>
import { defineComponent,computed} from 'vue';
export default defineComponent({
    data(){
        return{
            firstName:'',
            lastName:''
        }
    },
    computed:{
        fullName(){
            return this.firstName + ' ' + this.lastName
        }
    },
})
</script>