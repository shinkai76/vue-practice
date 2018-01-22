<template>
  <a :href="url">
    <div class="card">
      {{cardName}}
    </div>
  </a>
</template>

<script>
export default {
  name: 'MyCard',
  data () {
    return {
      url:'/' + this.cardName
    }
  },
  props:['card-name'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

a{
  display: block;
}

.card{
  float: left;
  width: 23%;
  height: 30vh;
  line-height: 30vh;
  border:1px solid #383e46;
  margin:0 5%;
  &:hover{
    border:1px solid #e4705c;
    transition: all ease 0.3s;
  }
}

</style>
