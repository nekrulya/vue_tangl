import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
    accessToken: "",
    companies: [],
    choosedCompany: "",
    properties: [],
    dialogVisible: false,
    projects: [],
    choosedProject: "",
    models: [],
    modelsData: [],
    positions: [],
    odata: [],
    metaTree: [],
    choosedMetaTree: [],
    params: [],
  },
  getters: {},
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setChoosedCompany(state, choosedCompany) {
      state.choosedCompany = choosedCompany;
    },
    setProperties(state, properties) {
      state.properties = properties;
    },
    setDialogVisible(state, dialogVisible) {
      state.dialogVisible = dialogVisible;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setChoosedProject(state, choosedProject) {
      state.choosedProject = choosedProject;
    },
    setModels(state, models) {
      state.models = models;
    },
    setModelsData(state, modelsData) {
      state.modelsData = modelsData;
    },
    setPositionss(state, positions) {
      state.positions = positions;
    },
    setOdata(state, odata) {
      state.odata = odata;
    },
    setMetaTree(state, metaTree) {
      state.metaTree = metaTree;
    },
    setChoosedMetaTree(state, choosedMetaTree) {
      state.choosedMetaTree = choosedMetaTree;
    },
    setParams(state, params) {
      state.params = params;
    },
  },
  actions: {},
  modules: {},
});
