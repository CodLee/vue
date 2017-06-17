<template>
  <div id="app">
    <h3>welcome to vue-webpack</h3>
    <p>会使用（大型公司）EsLink检查书写规范，单元测试等</p>
    <p>data数据————{{name}}</p>
    <p>书写规范————{{msg}}</p>
    <p>引入新的组件，不加;号，key-value冒号后空格</p>
    <News>1233</News>
  </div>
</template>

<script>
import News from './components/News.vue'
export default {
  name: 'app',
  data () {
    return {
      name: 'data()返回的数据对象',
      msg: '函数名称后空格，小括号大括号间空格，对象冒号间空格'
    }
  },
  components: {
    News: News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
