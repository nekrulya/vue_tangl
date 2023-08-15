<template>
  <div class="table_view" v-if="choosedProperties.length > 0">
    <table class="res_table">
      <thead class="thead">
        <tr>
          <th rowspan="2">Наименование</th>
          <th
            v-for="prop in choosedProperties"
            :key="prop.id"
            :rowspan="prop.isGroup ? 1 : 2"
            :colspan="prop.items?.length"
          >
            {{ prop.name }}
          </th>
        </tr>
        <tr>
          <template v-for="prop in choosedProperties" :key="prop.id">
            <template v-if="prop.isGroup">
              <th v-for="item in prop.items" :key="item.id">
                {{ item.name }}
              </th>
            </template>
            <template v-else>
              <th></th>
            </template>
          </template>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div class="table_download">Скачать таблицу</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
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
      choosedProperties: (state) => state.choosedProperties,
    }),
  },
  data() {
    return {};
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
  },
};
</script>

<style scoped>
.table_view {
  border: 1px solid black;
  width: 100%;
  min-height: 100vh;
}

.res_table {
  border: 1px solid black;
  border-collapse: collapse;
}

.thead {
  height: 80px;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

.table_download {
  display: inline-block;
  margin: 15px;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: #025a6c;
  color: #fff;
}
</style>
