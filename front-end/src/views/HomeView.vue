<template>
  <div id="page-top">
    <!-- Masthead-->
    <header class="masthead">
      <div
        class="
          container
          px-4 px-lg-5
          d-flex
          h-100
          align-items-center
          justify-content-center
        "
      >
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <h1 class="mx-auto my-0 text-uppercase">Study Like Mad</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Committed to help you achive your educational dreams.
            </h2>
            <a class="btn btn-primary" href="#about">Get Started</a>
          </div>
        </div>
      </div>
    </header>
    <!-- About-->
    <section class="about-section text-center" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white mb-4">Personalized University Prep</h2>
            <p class="text-white-50">
              Created by experts, Study Like Mad's library of trusted,
              standards-aligned practice and lessons covers math K-12 through
              early college, grammar, science, history, AP®, SAT®, and more.
            </p>
          </div>
        </div>
        <img class="img-fluid" src="../img/satbooks.png" alt="..." />
      </div>
    </section>
    <!-- Projects-->
    <section class="projects-section bg-light" id="projects">
      <div class="container px-4 px-lg-5">
        <!-- Featured Project Row-->
        <FeaturedCourseCard
          title="SAT Prep"
          description="These online SAT Subject Test practice tests are designed to help you prepare. Feedback is provided as you complete each test, and includes your percentile."
          imagePath="images/sat.jpg"
          link="sat"
        />
        <!-- Courses -->
        <CourseCard
          title="SAT II Prep"
          description="The best SAT II prep courses and classes available, including coverage of quality, price and overall effectiveness."
          imagePath="images/sat2.png"
          link="sat2"
          :left="true"
          :internalCourse="true"
        />
        <CourseCard
          title="TOEFL Prep"
          description="Learn everything from basic English grammar to advanced TOEFL strategies with our library of lesson videos."
          imagePath="images/toefl.jpg"
          link="toefl"
          :left="false"
          :internalCourse="true"
        />
        <div v-for="(course, index) in courses" :key="course.id">
          <CourseCard
            :title="course.title"
            :description="course.description"
            :imagePath="course.path"
            :link="course.link"
            :left="index % 2 === 0"
            :internalCourse="false"
          />
        </div>
      </div>
    </section>
    <!-- Signup-->
    <section class="signup-section" id="signup">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form
              class="form-signup"
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
            >
              <!-- Email address input-->
              <div class="row input-group-newsletter">
                <div class="col">
                  <input
                    class="form-control"
                    id="emailAddress"
                    type="email"
                    placeholder="Enter email address..."
                    aria-label="Enter email address..."
                    data-sb-validations="required,email"
                  />
                </div>
                <div class="col-auto">
                  <button
                    class="btn btn-primary disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Notify Me!
                  </button>
                </div>
              </div>
              <div
                class="invalid-feedback mt-2"
                data-sb-feedback="emailAddress:required"
              >
                An email is required.
              </div>
              <div
                class="invalid-feedback mt-2"
                data-sb-feedback="emailAddress:email"
              >
                Email is not valid.
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3 mt-2 text-white">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3 mt-2">
                  Error sending message!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-->
    <section class="contact-section bg-black">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">
                  4923 Market Street, Orlando FL
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">
                  <a href="#!">hello@yourdomain.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">+1 (555) 902-8832</div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-instagram"></i></a>
        </div>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import CourseCard from "@/components/CourseCard.vue";
import FeaturedCourseCard from "@/components/FeaturedCourseCard.vue";
export default {
  name: "homeView",
  components: {
    CourseCard,
    FeaturedCourseCard,
  },
  data() {
    return {
      courses: [],
    };
  },
  created() {
    this.getCourses();
  },
  methods: {
    async getCourses() {
      try {
        let response = await axios.get("/api/courses");
        this.courses = response.data;
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
