<template>
  <div class="hello">
    <h1>{{ msg }} <span>red</span></h1>
    <h2 class="cc">Essential Links++++++</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 48px
}
h2 {
  font-size: 26px;
}
a {
  color: #42b983;
}
</style>
