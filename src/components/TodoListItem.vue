<template>
<div class="container">
  <ul  v-if="items.length">
    <li v-for="(item,index) in items" :key="item.id">
      <span>{{ index + 1 }}</span>
      <span>{{ item.content1 }}</span>
      <span>{{ item.content2 }}</span>
      <input type="button" class="btn btn-delete" value="删除" @click="on_delete(index)">
    </li>
  </ul>
  <div v-else>
    可以添加一些计划了
  </div>
</div>
</template>

<script>
export default {
  name: 'TodoListItem',
  data () {
    return {
      items: [
        {
          id: 1,
          content1: '1.1',
          content2: '1.2'
        },
        {
          id: 2,
          content1: '2.1',
          content2: '2.2'
        }
      ],
      show: function () {
        if (this.items.length = 0) {
          this.show = true
        }
      }
    }
  },
  mounted: function () {
    var me = this
    bus.$on('newFn2', function (bContent1, bContent2) {
      me.items.push({
        content1: bContent1,
        content2: bContent2
      })
    })
  },
  methods: {
    on_delete: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
