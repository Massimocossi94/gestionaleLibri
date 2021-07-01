<template>
  <div class="container">
    <navbar />
    
    <!-- Placeholder -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  name: 'App',
  data() {
    return {
      
    }
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.min.css";
*{
  padding: 0;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
