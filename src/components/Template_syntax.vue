<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in list" :key="item.id">
            {{ item.text }}
            </li>
        </ul>
    </div>
    <hr/>
</template>
<script>
import { defineComponent } from 'vue';
 
 export default defineComponent({
    data(){
        return{
            title:'我的待办事项',
            list:[
                {id:1,text:'学习Vue3'},
                {id:2,text:'学习TypeScript'},
                {id:3,text:'写一个Vue3应用'}
            ]
        }
    }
 })
</script>