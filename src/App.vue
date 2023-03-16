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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Test_Component from './components/Test_Component.vue'
import Template_syntax from './components/Template_syntax.vue'
import Data_binding from './components/Data_binding.vue'
import Test_Compute from './components/Test_Compute.vue'
import Test_Listen from './components/Test_Listen.vue'
import If_For from './components/If_For.vue'
import Life_cycle from './components/Life_cycle.vue'
import Test_Parent from './components/Test_Parent.vue'
export default defineComponent({
  components: {
    Test_Component,
    Template_syntax,
    Data_binding,
    Test_Compute,
    Test_Listen,
    If_For,
    Life_cycle,
    Test_Parent,
  },
  methods: {
    handleScroll(y) {
      console.log('Page scrolled to:', y)
    },
  }
 
})
</script>