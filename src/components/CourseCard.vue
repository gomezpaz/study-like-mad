<template>
  <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
      <div class="col-lg-6"><img class="img-fluid" :src="require('../img/' + imagePath)" alt="..." /></div>
      <div v-bind:class="{ 'order-lg-first': left }" class="col-lg-6">
          <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                      <h4 class="text-white">{{title}}</h4>
                      <p class="mb-0 text-white-50">{{description}}</p>
                      <hr>
                      <a v-on:click="openLink" class="btn btn-primary">Go to course</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'courseCard',
  props: {
    title: String,
    description: String,
    imagePath: String,
    link: String,
    left: Boolean,
  },
  methods: {
    openLink() {
      // open link in same tab
      this.$router.push("sat");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
