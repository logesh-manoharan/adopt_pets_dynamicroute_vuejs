<template>
  <div id="app">

    <b-navbar>
        <b-navbar-brand>
          <h2>Adopt Pets</h2>
        </b-navbar-brand>
        <b-nav-item>
              <router-link class="router_link" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
              <router-link class="router_link" to="/cats">Cats</router-link>
          </b-nav-item>
          <b-nav-item>
              <router-link class="router_link" to="/dogs">Dogs</router-link>
          </b-nav-item>
          <b-nav-item>
              <router-link class="router_link" to="/pets">Pets</router-link>
          </b-nav-item>
    </b-navbar>
          
    <b-container>
      <router-view></router-view>
    </b-container>
      

      
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6
  0px;
}

.navbar {
  background: #f6b319;
}

.nav-item {
  list-style: none;
  text-decoration: none;
  margin-left: 10px;
}

.router_link {
  color: green;
}

.router-link-active {
  background: lightgreen
}
</style>
