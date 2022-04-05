<template>
  <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
    <div class="col-xl-8 col-lg-7">
      <img class="img-fluid mb-3 mb-lg-0" :src="imagePath" alt="..." />
    </div>
    <div class="col-xl-4 col-lg-5">
      <div class="featured-text text-center text-lg-left">
        <h4>{{ title }}</h4>
        <p class="text-black-50 mb-0">{{ description }}</p>
        <hr />
        <a v-on:click="openLink" class="btn btn-primary">Go to course</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredCourseCard",
  props: {
    title: String,
    description: String,
    imagePath: String,
    link: String,
  },
  methods: {
    openLink() {
      // open link in same tab
      this.$router.push(this.link);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
