<template>
    <div>
        <h3>这是子组件</h3>
        <p>欢迎，{{ username }}</p>
    </div>
</template>

<script>
import { inject } from 'vue';

export default{
    inject:['username'],
    setup(){
        return{
            //如果没有提供username，则默认值为'Guest'
            username:inject('username','Guest')
        }
    }
}
</script>