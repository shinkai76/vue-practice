<template>
<div class="container">
  <h2>...认识一下?</h2>
  <div>
    <img src="../assets/photo.jpeg" alt="photo" class="photo" title="伪">
    <h3>西伯利亚大公<br /> doge·<s>so·cold·colder·</s>coldest-cooler VII</h3>
  </div>
  <hr>
  <label>你用微信不?
  </label>
  <input type="radio" v-model="wx" value="yes" @click="on_yes">用啊~
  <input type="radio" v-model="wx" value="no" @click="on_no">抵制微信
  <div v-show="show">
    <div v-if="isWx">
      可以留好友信息了
    </div>
    <div v-else>
      有缘再见
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pageMakeFriends',
  data () {
    return {
      wx: '',
      isWx: false,
      show: false
    }
  },
  methods: {
    on_yes: function () {
      this.show = true
      this.isWx = true
    },
    on_no: function () {
      this.show = true
      this.isWx = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 70vw;
  margin: 0 auto;
  overflow: hidden;
}

h3 {
  position: absolute;
  bottom: 10px;
  border-bottom: 1px solid #eee;
  margin: 0;
  right: 0;
}

.photo {
  max-width: 20vw;
  border-radius: 50%;
  border: 1px solid #383e46;
}
</style>
