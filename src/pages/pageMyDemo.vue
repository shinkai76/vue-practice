<template>
<div class="home">
  <h1>お帰り</h1>
  <router-link to="/dairy">
    <MyCard card-name="dairy"></MyCard>
  </router-link>
  <router-link to="/todolist">
    <MyCard card-name="todolist"></MyCard>
  </router-link>
  <router-link to="/makefriends">
    <MyCard card-name="makefriends"></MyCard>
  </router-link>
</div>
</template>

<script>
import MyCard from '../components/MyCard.vue'

export default {
  name: 'pageMyDemo',
  data() {
    return {

    }
  },
  components: {
    MyCard: MyCard
  }
}
</script>

<style scoped>
.home {
  width: 70vw;
  margin: 0 auto;
  overflow: hidden;

}

h1 {
  text-align: center;
}
</style>
