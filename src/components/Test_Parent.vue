<template>
    <div>
        <p>{{ message }}</p>
        <Test_Chlid :count="count" @increment="increment"/>
    </div>
    <hr/>
</template>

<script>
    import { defineComponent } from 'vue';
    import Test_Chlid from './Test_Child.vue'
    export default defineComponent({
        data(){
            return{
                message:'组件通信',
                count:0
            }
        },
        components:{
            Test_Chlid
        },
        methods:{
            increment(){
                this.count++
            }
        }
    })
</script>
