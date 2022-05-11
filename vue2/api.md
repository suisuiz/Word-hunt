## 一、request api

```
https://dictionaryapi.dev/
```

---

## 二、组件传值 -- 非父子

### **1、 初始化，全局创建$bus**

在 main.js 初始化 $bus :

```javascript
// main.js
window.$bus = new Vue()
```

### **2、 发送事件**

`$bus.$emit("message", '来自A页面的消息');`

```vue
<!-- A.vue -->
<template>
  <button @click="sendMsg">-</button>
</template>

<script>
export default {
  methods: {
    sendMsg() {
      $bus.$emit('message', '来自A页面的消息')
    }
  }
}
</script>
```

接下来，我们需要在 B 页面 中接收这则消息。

### **3. 接收事件**

`$bus.$on("事件名",callback)`

```vue
<!-- IncrementCount.vue -->
<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    $bus.$on('message', (msg) => {
      // A发送来的消息
      this.msg = msg
    })
  }
}
</script>
```
