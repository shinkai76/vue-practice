<template>
<div class="dairy">
  <form class="container">
    <input class="title-input" type="text" placeholder="输入新标题" autofocus v-model="msg" v-show="show" @keyup.enter="on_show">
    <span v-show="show">按Enter确认
      </span>
    <h2 :class="{title:true,hidetitle:isHide}" @click="on_show">{{msg}}
      </h2>
    <textarea v-model="dairy">
      </textarea>
    <input type="button" value="提交" @click="on_submit(msg,dairy)" class="btn">
    <input type="reset" value="清空" @click="on_reset" class="btn btn-rest">
  </form>

  <ul is="DairyWritten">
  </ul>
</div>
</template>

<script>
import DairyWritten from '../components/DairyWritten.vue'

export default {
  name: 'pageDairy',
  data() {
    return {
      msg: '点击更改标题',
      show: false,
      isHide: false,
      dairy: '',
    }
  },
  components: {
    DairyWritten: DairyWritten,
  },
  methods: {
    on_show: function() {
      this.show = !this.show;
      this.isHide = !this.isHide;
    },
    on_submit: function() {
      if (this.msg === '' || this.msg === '点击更改标题') {
        alert('至少写个标题吧= =')
      } else {
        bus.$emit('newFn', this.msg, this.dairy)
      }
    },
    on_reset: function() {
      this.msg = '点击更改标题'
      this.dairy = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dairy {
    width: 70vw;
    margin: 0 auto;
    .container {
        max-width: 100%;
        span {
            position: absolute;
            left: 75%;
            line-height: 50px;
            z-index: 100;
        }
        textarea {
            margin-top: 3vh;
            width: 100%;
            height: 30vh;
            border: 1px solid #f1f1f1;
            resize: none;
            outline: none;
            &:focus {
                border: 1px solid #383e46;
            }
        }
        .title {
            text-align: center;
            text-align: center;
            margin: 0 auto;
            width: 60%;
            display: block;
            min-height: 40px;
            text-decoration: underline;
            &-input {
                position: absolute;
                left: 50%;
                margin-left: -25%;
                z-index: 100;
                height: 50px;
                width: 50%;
                outline: none;
                border: none;
                font-size: 20px;
                border-bottom: 4px solid #383e46;
            }
            .hidetitle {
                color: #f1f1f1;
            }
        }
    }

    ul {
        padding-top: 10px;
        margin-top: 30px;
        border-top: 2px solid #e4705c;
    }
}
</style>
