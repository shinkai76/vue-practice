<template>
  <div class="dairy">
    <div class="container">
      <input
        class="title-input" type="text" placeholder="输入新标题" autofocus
        v-model="msg"
        v-if="show"
        @keyup.enter="on_show">
      <span
        v-if="show">按Enter确认
      </span>
      <h2
        :class="{title:true,hidetitle:isHide}"
        @click="on_show">{{msg}}
      </h2>
      <textarea
        v-model="dairy"
        @keyup.enter="on_submit(msg,dairy)">
      </textarea>
    </div>

    <ul
      is="DairyWritten">
    </ul>
  </div>
</template>

<script>
import DairyWritten from '../components/DairyWritten.vue'

export default {
  name: 'pageDairy',
  data () {
    return {
      msg:'点击更改标题',
      show:false,
      isHide:false,
      dairy:''
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
      bus.$emit('newFn',this.msg,this.dairy)
      this.msg= '点击更改标题'
      this.dairy = ''
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
  color:red;
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
