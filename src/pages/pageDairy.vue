<template>
  <div class="dairy">
    <div class="container">
      <input class="title-input" type="text" v-model.lazy="msg" v-show="show" @keyup.enter="on_show" placeholder="输入新标题" autofocus>
      <span v-show="show">按Enter确认</span>
      <h2 :class="{title:true,hidetitle:isHide}" @click="on_show">{{msg}}</h2>
      <textarea name="name" rows="8" v-model="dairy" @keyup.enter="on_submit"></textarea>

    </div>

    <ul>
      <li is="DairyWritten" :pMsg="msg" :pDairy="dairy"></li>
    </ul>
  </div>
</template>

<script>
import DairyWritten from '../components/DairyWritten.vue'

export default {
  name: 'pageDairy',
  data () {
    return {
      msg:'Undefined',
      show:false,
      isHide:false,
      dairy:'默认内容'
    }
  },
  components:{
    DairyWritten:DairyWritten,
  },
  methods:{
    on_show:function () {
      this.show = !this.show;
      this.isHide = !this.isHide;
    },
    on_submit:function () {

      this.msg= '新一篇的标题未定义'
      this.dairy = '再来一篇?'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dairy{
  width: 70vw;
  margin:0 auto;
}
.container{
  max-width: 100%;
}
h2{
  text-decoration: underline;
}
span{
  position: absolute;
  left: 75%;
  line-height: 50px;
}
.title{
  text-align: center;
}
.title-input{
  position: absolute;
  left: 50%;
  margin-left: -25%;
  z-index: 100;
  height:50px;
  width: 50%;
  outline: none;
  border:none;
  font-size: 20px;
  border-bottom: 4px solid #383e46;
}
.hidetitle{
  color:#f8f8f8;
}
textarea{
  margin-top: 3vh;
  width: 100%;
  height: 30vh;
  border:1px solid #f1f1f1;
  resize: none;
  outline: none;
  &:focus{
    border:1px solid #383e46;
  }
}

</style>
