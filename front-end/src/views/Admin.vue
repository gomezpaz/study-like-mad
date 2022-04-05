<template>
  <div class="admin container text-center">
    <br />
    <br />
    <br />
    <br />
    <h1>Admin Page</h1>
    <div class="heading">
      <h3>Add a Course</h3>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <p></p>
        <textarea v-model="description" placeholder="Description"></textarea>
        <p></p>
        <input v-model="link" placeholder="Link" />
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <p></p>
        <button @click="upload">Upload</button>
      </div>
      <br />

      <div
        class="row gx-0 mb-5 mb-lg-0 justify-content-center"
        v-if="addCourse"
      >
        <div class="col-lg-6">
          <img class="img-fluid" :src="addCourse.path" alt="..." />
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <br />
                <h4 class="text-white">{{ addCourse.title }}</h4>
                <p class="mb-0 text-white-50">{{ addCourse.description }}</p>
                <hr />
                <a v-on:click="openLink(addCourse.link)" class="btn btn-primary"
                  >Go to course</a
                >
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="heading">
      <h3>Edit/Delete a Course</h3>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectCourse(s)"
          >
            {{ s.title }}
          </div>
        </div>
      </div>

      <br />
      <br />

      <div
        class="row gx-0 mb-5 mb-lg-0 justify-content-center"
        v-if="findCourse"
      >
        <div class="col-lg-6">
          <img class="img-fluid" :src="findCourse.path" alt="..." />
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <hr />
                <h4 class="text-white">Title</h4>
                <input class="card-input" v-model="findCourse.title" />
                <hr />
                <h4 class="text-white">Description</h4>
                <textarea
                  class="card-input"
                  v-model="findCourse.description"
                ></textarea>
                <hr />
                <h4 class="text-white">Link</h4>
                <input class="card-input" v-model="findCourse.link" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="actions" v-if="findCourse">
        <button @click="deleteCourse(findCourse)">Delete</button>
        <button @click="editCourse(findCourse)">Edit</button>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

/* .add,
.edit {
  display: flex;
} */

.card-input {
  width: 70%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  display: flex;
  flex-direction: column;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 100%;
  border: 1px solid #ccc;
  /* put text on left */
  text-align: left;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>

<script>
import axios from "axios";
export default {
  name: "AdminView",
  data() {
    return {
      title: "",
      description: "",
      link: "",
      file: null,
      addCourse: null,
      courses: [],
      findTitle: "",
      findCourse: null,
    };
  },
  computed: {
    suggestions() {
      let courses = this.courses.filter((course) =>
        course.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return courses.sort((a, b) => a.title > b.title);
    },
  },
  created() {
    this.getCourses();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("picture", this.file, this.file.name);
        let r1 = await axios.post("/api/pictures", formData);
        let r2 = await axios.post("/api/courses", {
          title: this.title,
          description: this.description,
          link: this.link,
          path: r1.data.path,
        });
        this.addCourse = r2.data;
      } catch (error) {
        // console.log(error);
      }
    },
    async getCourses() {
      try {
        let response = await axios.get("/api/courses");
        this.courses = response.data;
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
    selectCourse(course) {
      this.findTitle = "";
      this.findCourse = course;
    },
    async deleteCourse(course) {
      try {
        await axios.delete("/api/courses/" + course._id);
        this.findCourse = null;
        this.getCourses();
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
    async editCourse(course) {
      try {
        await axios.put("/api/courses/" + course._id, {
          title: this.findCourse.title,
          description: this.findCourse.description,
          link: this.findCourse.link,
        });
        this.findCourse = null;
        this.getCourses();
        return true;
      } catch (error) {
        // console.log(error);
      }
    },
    openLink(link) {
      // open link in same tab
      window.open(link, "_blank");
    },
  },
};
</script>
