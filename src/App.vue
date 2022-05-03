<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2022-05-03 11:16:36
 * @LastEditors: SUI
 * @LastEditTime: 2022-05-03 18:27:39
 * @FilePath: \2022.5.3\vue2-word-hunt\src\App.vue
-->
<template>
  <div class="container">
    <main>
      <!-- 头部 -->
      <Header />
      <!-- 结果 -->
      <Result />
    </main>
  </div>
</template>

<script>
// 引入样式
import '@/assets/index.css'
// 头部输入框
import Header from '@/views/Header.vue'
// 结果展示
import Result from '@/views/Result.vue'
export default {
  name: 'App',
  components: { Header, Result }
}
</script>

<style lang="scss">
.container {
  height: 100vh;
  background-color: #282c34;

  main {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 1rem;
  }
}
</style>
