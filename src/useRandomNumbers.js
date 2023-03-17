import { ref } from 'vue';

export default function useRandomNumbers() {
  // 定义响应式数据
  const numbers = ref([]);

  // 生成随机数
  function generateNumbers() {
    for (let i = 0; i < 10; i++) {
      numbers.value.push(Math.floor(Math.random() * 100));
    }
  }

  // 计算平均值
  function calculateAverage() {
    const sum = numbers.value.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.value.length;
  }

  // 返回响应式数据和方法
  return {
    numbers,
    generateNumbers,
    calculateAverage
  };
}