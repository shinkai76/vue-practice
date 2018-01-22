<template>
<li class="container">
  <div v-for="(item,index) in items">
    <div class="clearfix">
      <input type="button" value="删除" class="btn btn-delete" >
      <a href="#">{{item.title}}</a>
    </div>
    <p>{{item.content}}</p>
  </div>
</li>
</template>

<script>
export default {
  name: 'DairyWritten',
  data () {
    return {
      items:[
        {
          title:'默认1',
          content:'内容1'
        },
        {
          title:'默认2',
          content:'内容2'
        }
      ]
    }
  },
  props:['pMsg','pDairy'],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  max-width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 10px 0;

}
.btn-delete{
  background-color: #fff;
  color: #ccc;
  border:1px solid #ccc;
}
.btn-delete:hover{
  color: #333;
}
p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
