<template>
  <div class="dialog" v-if="showModal" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <select class="companies" @change="updateProjects">
        <option disabled selected>Выберите компанию</option>
        <option
          v-for="company in companies"
          :key="company.id"
          :value="company.id"
        >
          {{ company.name }}
        </option>
      </select>
      <select class="companies" @change="updateModels">
        <option disabled selected>Выберите проект</option>
        <option
          v-for="project in projects"
          :key="project.id"
          :value="project.id"
        >
          {{ project.name }}
        </option>
      </select>
      <select class="companies">
        <option disabled selected>Выберите модель</option>
        <option v-for="model in models" :key="model.id" :value="model.id">
          {{ model.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["showModal", "companies"],
  data() {
    return {
      accessToken: localStorage.getItem("accessToken"),
      projects: [],
      models: [],
    };
  },
  methods: {
    hideDialog() {
      this.$emit("update:showModal", false);
    },
    updateProjects(e) {
      axios({
        method: "get",
        url: `https://value.tangl.cloud/api/app/project/${e.target.value}/byCompanyId`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          console.log("Ответ сервера успешно получен!");
          console.log(response.data);
          this.projects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateModels(e) {
      console.log(this.projects[e.target.selectedIndex - 1].folders[0].models);
      this.models = this.projects[e.target.selectedIndex - 1].folders[0].models;
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;
}

.dialog__content {
  margin: auto;
  background-color: #fff;
  min-width: 800px;
  min-height: 500px;
  border-radius: 20px 0px;
  padding: 10px;
}

.companies {
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
}
</style>
