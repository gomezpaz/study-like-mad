<template>
  <div id="app">
    <!-- Navigation-->
    <nav v-bind:class="{ 'navbar-shrink': onTop }" class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#page-top">Study Like Mad</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/#about">Academy</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#projects">Courses</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#signup">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view/>
    <footer class="footer">
        <span class="text-muted">Created by Santiago Gomez Paz. Repo <a href="https://github.com/gomezpaz/study-like-mad">here</a>.</span>
    </footer>
  </div>
</template>

<script>
export default {
  created() {
    // Shrink the navbar 
    this.navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', this.navbarShrink);
  },

  destroyed() {
    document.removeEventListener('scroll', this.navbarShrink);
  },

  data() {
    return {
      onTop: true,
    }
  },

  methods: {
    // Navbar shrink function
    // navbarShrink () {
    //     this.onTop = (window.scrollY !== 0);
    //     console.log(this.onTop);
    // },
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
