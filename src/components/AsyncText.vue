<template>
    <div>
        该组件已加载完成
    </div>
</template>
<script>
export default {
  name: 'AsyncTest',
  created() {
    setTimeout(() => {
      console.log('Component loaded!');
    }, 3000);
  }
}
</script>