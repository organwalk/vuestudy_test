<template>
    <div>
        <p>计数器:{{ count }}</p>
        <button @click="$emit('increment')">
            增加
        </button>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        props:{
            count:{
                type:Number,
                required:true
            }
        }
    })
</script>