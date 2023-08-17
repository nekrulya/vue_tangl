<template>
  <div class="dialog" v-if="dialogVisible" @click="hideDialog">
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
      <select class="companies" @change="updateData">
        <option disabled selected>Выберите модель</option>
        <option v-for="model in models" :key="model.id" :value="model.id">
          {{ model.name }}
        </option>
      </select>
      <select class="companies" @change="updatePositions">
        <option disabled selected>Выберите модель</option>
        <option v-for="md in modelsData" :key="md.id" :value="md.id">
          {{ md.name }}
        </option>
      </select>
      <!-- <ul class="metaTree">
        <li v-for="el in metaTree" :key="el.name" @click="getParams">
          {{ el.name }}
        </li>
      </ul> -->
      <ul class="odata">
        <li
          v-for="el in this.odata.filter(
            (element) => element.Code.split('.').length <= 3
          )"
          :key="el.Code"
        >
          {{ el.Name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      companies: (state) => state.companies,
      choosedCompany: (state) => state.choosedCompany,
      accessToken: (state) => state.accessToken,
      dialogVisible: (state) => state.dialogVisible,
      projects: (state) => state.projects,
      choosedProject: (state) => state.choosedProject,
      models: (state) => state.models,
      choosedModel: (state) => state.choosedModel,
      choosedModelId: (state) => state.choosedModelId,
      modelsData: (state) => state.modelsData,
      positions: (state) => state.positions,
      choosedPosition: (state) => state.choosedPosition,
      odata: (state) => state.odata,
      metaTree: (state) => state.metaTree,
      choosedMetaTree: (state) => state.choosedMetaTree,
      params: (state) => state.params,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      setIsAyth: "setIsAuth",
      setCompanies: "setCompanies",
      setChoosedCompany: "setChoosedCompany",
      setDialogVisible: "setDialogVisible",
      setProjects: "setProjects",
      setChoosedProject: "setChoosedProject",
      setModels: "setModels",
      setChoosedModel: "setChoosedModel",
      setChoosedModelId: "setChoosedModelId",
      setModelsData: "setModelsData",
      setPositions: "setPositions",
      setChoosedPosition: "setChoosedPosition",
      setOdata: "setOdata",
      setMetaTree: "setMetaTree",
      setChoosedMetaTree: "setChoosedMetaTree",
      setParams: "setParams",
    }),
    // скрыть модальное окно
    hideDialog() {
      this.setDialogVisible(false);
    },

    // получить список проектов
    updateProjects(e) {
      this.setChoosedCompany(this.companies[e.target.selectedIndex - 1].name);
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
          this.setProjects(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // получить список моделей
    updateModels(e) {
      this.setModels(
        this.projects[e.target.selectedIndex - 1].folders[0].models
      );
      this.setChoosedProject(this.projects[e.target.selectedIndex - 1].name);
    },

    // получить список классификаторов
    updateData(e) {
      this.setChoosedModel(this.models[e.target.selectedIndex - 1].name);
      this.setChoosedModelId(this.models[e.target.selectedIndex - 1].id);
      axios({
        method: "get",
        url: `https://value.tangl.cloud/api/app/analysis/${e.target.value}/byModel`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setModelsData(
            response.data.catalogPrioritiesSchemes[0].catalogPriorities
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // получить odata
    updatePositions(e) {
      this.setChoosedPosition(this.modelsData[e.target.selectedIndex - 1].name);
      axios({
        method: "get",
        url: `https://value.tangl.cloud/api/odata/UnionTree('${this.choosedCompany}','${this.choosedProject}','${this.choosedModel}','${this.choosedPosition}')?parents=true`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setOdata(response.data.value);
          console.log(this.odata);
        })
        .catch((error) => {
          console.log(error);
        });

      axios({
        method: "get",
        url: `https://cache.tangl.cloud/api/app/modelsCache/${this.choosedModelId}/tree`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setMetaTree(response.data.metaTree);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getParams(e) {
      this.setChoosedMetaTree(
        this.metaTree.filter((element) => element.name == e.target.textContent)
      );
      axios({
        method: "get",
        url: `https://cache.tangl.cloud/api/app/modelsCache/${this.choosedModelId}?elNum=${this.choosedMetaTree[5].typeGroups[0].elements[0].elNum}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          try {
            this.setParams(JSON.parse(response.data.meta));
          } catch (e) {
            console.log(e);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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

.metaTree {
  color: #000;
  cursor: pointer;
}

.tree {
  cursor: pointer;
  transition: all 0.2s ease;
}

.tree:hover {
  padding: 5px;
  outline: 2px solid teal;
  transition: all 0.2s ease;
}
</style>
