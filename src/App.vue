<template>
<div id="app">
  <a href="/">首页</a>
  这是一个为了测试VUE学习成果而做的demo
  使用vue-cli webpack vue-router
  css预处理使用的是Less
  没有jquery
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
