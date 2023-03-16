<template>
    <div>
        <p>{{ message }}</p>
    </div>
    <hr/>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return{
                message:'生命周期钩子'
            }
        },
        created(){
            console.log('组件创建完成')
        },
        mounted(){
            console.log('组件挂载完成')
        }
    })
</script>