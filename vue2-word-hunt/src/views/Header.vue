<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2022-05-03 11:16:36
 * @LastEditors: SUI
 * @LastEditTime: 2022-05-03 19:01:15
 * @FilePath: \2022.5.3\vue2-word-hunt\src\views\Header.vue
-->
<template>
  <div class="header">
    <!-- 标题 -->
    <p class="title">{{ inputValue ? inputValue : 'Word Hunt' }}</p>
    <!-- 输入框 -->
    <input class="input_box" type="text" placeholder="Search a Word" v-model="inputValue" @input="changeInput" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputValue: ''
    }
  },

  methods: {
    changeInput(e) {
      // console.log(e)
      const { value } = e.target
      $bus.$emit('searchWord', value)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 30vh;

  .title {
    font-size: 7vw;
    font-weight: 100;

    @media (max-width: 1000px) {
      font-size: 11vw;
    }
  }

  .input_box {
    padding: 5px;
    box-sizing: border-box;
    width: 50vw;
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(197, 188, 188);
    background-color: #282c34;

    &:focus {
      border-bottom: 1px solid #fff;
    }

    &::placeholder {
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>
