<template>
  <div>
    <web-header v-bind:header_props="scrollY"></web-header>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import WebHeader from './components/WebHeader.vue';

export default{
  name: 'App',
  components: {
    'Footer': Footer,
    'WebHeader': WebHeader 
  },
  data(){
    return{
      scrollY: 0,
      timer: null
    }
  },
  created:function(){
      window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy:function(){
      window.removeEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll: function(){
      if(this.timer===null){
        this.timer=setTimeout(function(){
          this.scrollY=window.scrollY
          clearTimeout(this.timer)
          this.timer=null
        }.bind(this),200)
      }
    }
  }
};
</script>
<style>
@font-face {
  font-family: "Baloo_Bhaijaan";
  src: url(./fonts/BalooBhaijaan-Regular.ttf) format("truetype");
}
@font-face {
  font-family: 'Baloo Bhaina 2';
  src: url(./fonts/BalooBhaina2/BalooBhaina2-Regular.ttf) format("truetype");
}
#body{
  height:100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
