<template>
  <div class="wrapper">
    <header>
      <h1 class="main-title">
        <router-link :to="{name: 'Home'}">
          <span class="material-icons">task</span>
          <span class="title">My Project Planner</span>
        </router-link>
      </h1>
    </header>
    <div class="content">
      <Navbar />
      <router-view/>
    </div>
    <footer>
      <small>© 2021 Yoko Saka | Developed by <a href="https://yocosaka.com/">Yoko Saka</a> | Concept designed by <a href="https://www.udemy.com/user/47fd83f6-5e4a-4e87-a0f0-519ac51f91b6/" target="_blank" rel="nofollow">Shaun Pelling</a></small>
    </footer>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>

<style>
body{
  background: #f2f2f2;
}
header{
  width:100%;
  margin: 40px auto 0;
}
.content{
  min-height: 50vh;
}
.main-title{
  display: block;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px auto;
}
.main-title a{
  text-decoration: none;
  color: inherit;
}
.main-title .material-icons {
  display: block;
  margin-bottom: 20px;
  font-size: 60px;
  color: #555;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
footer{
 width: 100%;
 text-align: center;
 font-size: 60%;
  padding: 40px 0;
}
footer small a {
  color: inherit;
  text-decoration: none;
}
</style>
