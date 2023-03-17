<template>
  <div>
    <Test_Component
      :title="'Hello, World!'"
      :content="'This is a Vue component.'"
    />
  </div>
  <div><Template_syntax/></div>
  <div><Data_binding /></div>
  <div><Test_Compute/></div>
  <div><Test_Listen/></div>
  <div><If_For/></div>
  <div><Life_cycle/></div>
  <div><Test_Parent/></div>
  <router-view></router-view><hr>
  <div style="height: 80px;overflow: auto;" v-scroll="{ offsetTop: 50 }" @scroll="handleScroll">
    <p>Scroll down to see the magic happen!</p>
    <p>Scroll down to see the magic happen!</p>
    <p>Scroll down to see the magic happen!</p>
  </div><hr/>
  <div>
    <Test_Button variant="primary">Primary Button</Test_Button>
    <Test_Button variant="secondary">Secondary Button</Test_Button>
    <Test_Button variant="success">Success Button</Test_Button>
    <Test_Button variant="danger">Danger Button</Test_Button>
    <Test_Button variant="warning">Warning Button</Test_Button>
    <Test_Button variant="info">Info Button</Test_Button>
    <Test_Button variant="light">Light Button</Test_Button>
    <Test_Button variant="dark">Dark Button</Test_Button>
  </div><hr/>
  <div>
    <h2>这是父组件</h2>
    <provide :username="username">
      <Inject_Child></Inject_Child>
    </provide>
  </div><hr/>
  <div>
    <component :is="AsyncComponent" />
  </div><hr/>
  <div>
    <button @click="generateNumbers">Generate Random Numbers</button>
    <div v-if="numbers.length">
      <p>Numbers: {{ numbers.join(', ') }}</p>
      <p>Average: {{ calculateAverage() }}</p>
    </div>
  </div><hr/>
  <div>
    <button @click="fetchData">发送请求</button>
    <p v-if="response">{{ response.lives }}</p>
  </div><hr/>
</template>

<script>
import { defineComponent,defineAsyncComponent } from 'vue'
import Test_Component from './components/Test_Component.vue'
import Template_syntax from './components/Template_syntax.vue'
import Data_binding from './components/Data_binding.vue'
import Test_Compute from './components/Test_Compute.vue'
import Test_Listen from './components/Test_Listen.vue'
import If_For from './components/If_For.vue'
import Life_cycle from './components/Life_cycle.vue'
import Test_Parent from './components/Test_Parent.vue'
import Test_Button from './components/Test_Button.vue'
import Inject_Child from './components/Inject_Child.vue'
import Async_Loading from './components/Async_Loading.vue'
import Async_ErrorComponent from './components/Async_ErrorComponent.vue'
import useRandomNumbers from './useRandomNumbers'
import{ fetchData } from "./gd_api"
export default defineComponent({
  data(){
    return{
      response:''
    }
  },
  mounted(){
    fetchData('110101')
    .then(data=>{
      this.response = data
    })
  },
  components: {
    Test_Component,
    Template_syntax,
    Data_binding,
    Test_Compute,
    Test_Listen,
    If_For,
    Life_cycle,
    Test_Parent,
    Test_Button,
    Inject_Child
},
  methods: {
    handleScroll(y) {
      console.log('Page scrolled to:', y)
    },
  },
  setup() {
    const AsyncComponent = defineAsyncComponent({
      // 异步加载组件代码和模板
      loader: () => import('./components/AsyncText.vue'),
      // 加载组件时显示的占位符
      loadingComponent: Async_Loading,
      // 加载组件失败时显示的占位符
      errorComponent: Async_ErrorComponent,
      // 加载组件的延迟时间，默认为 30000ms
      delay: 30000,
      // 最长等待时间，超过该时间显示错误占位符，默认为 Infinity
      timeout: 30000,
    });
    const { numbers, generateNumbers, calculateAverage } = useRandomNumbers();
    return {
      AsyncComponent,
      numbers,
      generateNumbers,
      calculateAverage
    }
  }
})
</script>