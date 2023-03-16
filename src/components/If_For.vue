<template>
    <div>
        <button @click="show = !show">
        {{ show ?'隐藏' : '显示' }}
        </button>
        <ul v-if="show">
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
                show:true,
                list:[
                    {id:1,text:'学习Vue3'},
                    {id:2,text:'学习TypeScript'},
                    {id:3,text:'写一个Vue3应用'}
                ]
            }
        }
    })
</script>
