<template>
<form>
  <div class="container">
    <label>最高目标:</label>
    <input type="text" v-model="content1">
  </div>
  <div class="container">
    <label>底线:</label>
    <input type="text" v-model="content2">
  </div>
  <input type="reset" value="清空" class="btn btn-reset">
  <input type="submit" value="提交" class="btn" @click="on_submit">
</form>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      content1: '',
      content2: ''
    }
  },
  methods: {
    on_submit: function () {
      var me = this
      if (me.content1 === '' || me.content2 === '') {
        alert('请填写完整再提交')
      } else {
        bus.$emit('newFn2', this.content1, this.content2)
      }
      this.content1 = ''
      this.content2 = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
form{
  margin-bottom: 60px;
}
.container {
    width: 50%;
    margin-bottom: 20px;
    input[type="text"]{
      width: 50%;
      float: right;
    }

}
</style>
