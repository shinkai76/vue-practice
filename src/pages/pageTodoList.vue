<template>
<div class="container">
  <todo-input></todo-input>
  <todo-list-item></todo-list-item>
</div>
</template>

<script>
import TodoInput from '../components/TodoInput.vue'
import TodoListItem from '../components/TodoListItem.vue'

export default {
  name: 'pageTodoList',
  data () {
    return {

    }
  },
  components: {
    'todo-input': TodoInput,
    'todo-list-item': TodoListItem
  }
}
</script>

<style scoped lang="less">
.container {
    width: 70vw;
    margin: 0 auto;
}
</style>
