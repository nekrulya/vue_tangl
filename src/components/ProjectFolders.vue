<template>
  <ul class="models">
    <li v-for="folder in folders" :key="folder.name">
      <span>{{ folder.name }}</span>
      <ul v-if="folder.folders.length">
        <ProjectFolders :folders="folder.folders" />
      </ul>
      <ul>
        <li
          v-for="model in folder.models"
          :key="model.id"
          :value="model.id"
          @click="updateCatalogs"
          class="model__item"
        >
          {{ model.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["folders"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      models: (state) => state.models,
      choosedModel: (state) => state.choosedModel,
      choosedModelId: (state) => state.choosedModelId,
      choosedModelId: (state) => state.choosedModelId,
      catalogs: (state) => state.catalogs,
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
      setChoosedModelId: "setChoosedModelId",
      setCatalogs: "setCatalogs",
      setModelsData: "setModelsData",
      setPositions: "setPositions",
      setChoosedPosition: "setChoosedPosition",
      setOdata: "setOdata",
      setMetaTree: "setMetaTree",
      setChoosedMetaTree: "setChoosedMetaTree",
      setParams: "setParams",
    }),
    updateCatalogs(e) {
      this.setChoosedModelId(e.target.value);
      axios({
        method: "get",
        url: `${this.api.catalogs + this.choosedModelId}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.setCatalogs(response.data.catalogs);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.model__item {
  cursor: pointer;
}
</style>
