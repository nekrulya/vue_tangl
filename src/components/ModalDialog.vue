<template>
  <div class="dialog" v-if="dialogVisible" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <select class="companies" @change="updateProjects">
        <option disabled selected>Выберите компанию</option>
        <option
          v-for="company in companies.filter((item) => !item.is_personal)"
          :key="company.company_id"
          :value="company.company_id"
        >
          {{ company.company_name }}
        </option>
      </select>
      <select class="companies" @change="updateProjectFolders">
        <option disabled selected>Выберите проект</option>
        <option
          v-for="project in projects"
          :key="project.project_id"
          :value="project.project_id"
        >
          {{ project.project_name }}
        </option>
      </select>
      <!-- <select class="companies" @change="updateModels">
        <option disabled selected>Выберите модель</option>
        <option v-for="model in models" :key="model.id" :value="model.id">
          {{ model.name }}
        </option>
      </select> -->
      <ProjectFolders :folders="this.folders" />
      <select class="companies" @change="updatePositionList">
        <option disabled selected>Выберите Каталог</option>
        <option
          v-for="catalog in catalogs"
          :key="catalog.catalog_id"
          :value="catalog.catalog_id"
        >
          {{ catalog.catalog_name }}
        </option>
      </select>
      <PositionList :positions="this.positionList" />

      <!-- <ul class="metaTree">
        <li v-for="el in metaTree" :key="el.name" @click="getParams">
          {{ el.name }}
        </li>
      </ul> -->

      <!-- <ul class="odata">
        <li
          v-for="el in this.odata.filter(
            (element) => element.Code.split('.').length <= 3
          )"
          :key="el.Code"
        >
          {{ el.Name }}
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ProjectFolders from "./ProjectFolders.vue";
import PositionList from "./PositionList.vue";

export default {
  props: [],
  data() {
    return {
      ProjectFolders,
    };
  },
  components: {
    ProjectFolders,
    PositionList,
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      companies: (state) => state.companies,
      choosedCompany: (state) => state.choosedCompany,
      choosedCompanyId: (state) => state.choosedCompanyId,
      accessToken: (state) => state.accessToken,
      dialogVisible: (state) => state.dialogVisible,
      projects: (state) => state.projects,
      choosedProject: (state) => state.choosedProject,
      choosedProjectId: (state) => state.choosedProjectId,
      folders: (state) => state.folders,
      models: (state) => state.models,
      catalogs: (state) => state.catalogs,
      choosedCatalogId: (state) => state.choosedCatalogId,
      positionList: (state) => state.positionList,

      choosedModel: (state) => state.choosedModel,
      choosedModelId: (state) => state.choosedModelId,
      modelsData: (state) => state.modelsData,
      positions: (state) => state.positions,
      choosedPosition: (state) => state.choosedPosition,
      odata: (state) => state.odata,
      metaTree: (state) => state.metaTree,
      choosedMetaTree: (state) => state.choosedMetaTree,
      params: (state) => state.params,
      api: (state) => state.api,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      setIsAyth: "setIsAuth",
      setCompanies: "setCompanies",
      setChoosedCompany: "setChoosedCompany",
      setChoosedCompanyId: "setChoosedCompanyId",
      setDialogVisible: "setDialogVisible",
      setProjects: "setProjects",
      setChoosedProject: "setChoosedProject",
      setChoosedProjectId: "setChoosedProjectId",
      setFolders: "setFolders",
      setCatalogs: "setCatalogs",
      setChoosedCatalogId: "setChoosedCatalogId",
      setPositionList: "setPositionList",

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
      this.setChoosedCompany(this.companies[e.target.selectedIndex - 1]);
      this.setChoosedCompanyId(e.target.value);
      axios({
        method: "get",
        url: `${this.api.projectList + this.choosedCompanyId}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.setProjects(response.data.projects);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateProjectFolders(e) {
      this.setChoosedProjectId(e.target.value);
      axios({
        method: "get",
        url: `${this.api.projectFoldersList + this.choosedProjectId}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.setFolders(response.data.folders);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updatePositionList(e) {
      this.setChoosedCatalogId(e.target.value);
      axios({
        method: "get",
        url: `${this.api.positionList + this.choosedCatalogId}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setPositionList(response.data.children);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // получить список моделей
    // updateModels(e) {
    //   // this.setModels(
    //   //   this.projects[e.target.selectedIndex - 1].folders[0].models
    //   // );
    //   // this.setChoosedProject(this.projects[e.target.selectedIndex - 1].name);
    //   this.setModels([
    //     {
    //       models: [
    //         {
    //           id: 1434234144142,
    //           sw: "sw",
    //           checkedForAnalysis: true,
    //           name: "Модель 123",
    //         },
    //       ],
    //       folders: ["папка 1", "папка 2"],
    //       unionModels: [{}],
    //       name: "Имя модели",
    //     },
    //   ]);
    // },

    // получить список классификаторов
    updateData(e) {
      // this.setChoosedModel(this.models[e.target.selectedIndex - 1].name);
      // this.setChoosedModelId(this.models[e.target.selectedIndex - 1].id);
      // axios({
      //   method: "get",
      //   url: `https://value.tangl.cloud/api/app/analysis/${e.target.value}/byModel`,
      //   params: {},
      //   data: {},
      //   headers: {
      //     "Content-Type": "text/plain",
      //     Authorization: `Bearer ${this.accessToken}`,
      //   },
      // })
      //   .then((response) => {
      //     this.setModelsData(
      //       response.data.catalogPrioritiesSchemes[0].catalogPriorities
      //     );
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    // получить odata
    // updatePositions(e) {
    //   this.setChoosedPosition(this.modelsData[e.target.selectedIndex - 1].name);
    //   axios({
    //     method: "get",
    //     url: `https://value.tangl.cloud/api/odata/UnionTree('${this.choosedCompany}','${this.choosedProject}','${this.choosedModel}','${this.choosedPosition}')?parents=true`,
    //     params: {},
    //     data: {},
    //     headers: {
    //       "Content-Type": "text/plain;charset=UTF-8",
    //       Authorization: `Bearer ${this.accessToken}`,
    //     },
    //   })
    //     .then((response) => {
    //       this.setOdata(response.data.value);
    //       console.log(this.odata);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    //   axios({
    //     method: "get",
    //     url: `https://cache.tangl.cloud/api/app/modelsCache/${this.choosedModelId}/tree`,
    //     params: {},
    //     data: {},
    //     headers: {
    //       "Content-Type": "text/plain",
    //       Authorization: `Bearer ${this.accessToken}`,
    //     },
    //   })
    //     .then((response) => {
    //       this.setMetaTree(response.data.metaTree);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    // getParams(e) {
    //   this.setChoosedMetaTree(
    //     this.metaTree.filter((element) => element.name == e.target.textContent)
    //   );
    //   axios({
    //     method: "get",
    //     url: `https://cache.tangl.cloud/api/app/modelsCache/${this.choosedModelId}?elNum=${this.choosedMetaTree[5].typeGroups[0].elements[0].elNum}`,
    //     params: {},
    //     data: {},
    //     headers: {
    //       "Content-Type": "text/plain",
    //       Authorization: `Bearer ${this.accessToken}`,
    //     },
    //   })
    //     .then((response) => {
    //       try {
    //         this.setParams(JSON.parse(response.data.meta));
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
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

  display: flex;
  flex-direction: column;
  row-gap: 20px;
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
