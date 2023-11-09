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
      <select
        class="companies"
        @change="updateProjectFolders"
        v-if="projects.length > 0"
      >
        <option disabled selected>Выберите проект</option>
        <option
          v-for="project in projects"
          :key="project.project_id"
          :value="project.project_id"
        >
          {{ project.project_name }}
        </option>
      </select>
      <ProjectFolders :folders="this.folders" v-if="this.folders.length > 0" />
      <select
        class="companies"
        @change="updatePositionList"
        v-if="catalogs.length > 0"
      >
        <option disabled selected>Выберите Каталог</option>
        <option
          v-for="catalog in catalogs"
          :key="catalog.catalog_id"
          :value="catalog.catalog_id"
        >
          {{ catalog.catalog_name }}
        </option>
      </select>
      <PositionList
        :positions="this.positionList"
        v-if="this.positionList.length > 0"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ProjectFolders from "@/components/ProjectFolders.vue";
import PositionList from "@/components/PositionList.vue";

export default {
  props: [],

  data() {
    return {};
  },

  components: {
    ProjectFolders,
    PositionList,
  },

  computed: {
    ...mapState({
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
      api: (state) => state.api,
    }),
  },

  methods: {
    ...mapMutations({
      setChoosedCompany: "setChoosedCompany",
      setChoosedCompanyId: "setChoosedCompanyId",
      setDialogVisible: "setDialogVisible",
      setProjects: "setProjects",
      setChoosedProject: "setChoosedProject",
      setChoosedProjectId: "setChoosedProjectId",
      setFolders: "setFolders",
      setChoosedCatalogId: "setChoosedCatalogId",
      setPositionList: "setPositionList",
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

    // получить список папок
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

    // получить список позиций
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