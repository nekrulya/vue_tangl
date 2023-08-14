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
    choosedModel: "",
    choosedModelId: "",
    modelsData: [],
    positions: [],
    choosedPosition: "",
    odata: [],
    metaTree: [],
    choosedMetaTree: [],
    params: [],
    choosedProperties: new Set(),
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
    setChoosedModel(state, choosedModel) {
      state.choosedModel = choosedModel;
    },
    setChoosedModelId(state, choosedModelId) {
      state.choosedModelId = choosedModelId;
    },
    setModelsData(state, modelsData) {
      state.modelsData = modelsData;
    },
    setPositions(state, positions) {
      state.positions = positions;
    },
    setChoosedPosition(state, choosedPosition) {
      state.choosedPosition = choosedPosition;
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
    setChoosedProperties(state, choosedProperties) {
      state.choosedProperties = choosedProperties;
    },
    addChoosedProperty(state, choosedProperty) {
      state.choosedProperties.add(choosedProperty);
    },
    deleteChoosedProperty(state, choosedProperty) {
      state.choosedProperties.delete(choosedProperty);
    },
  },
  actions: {},
  modules: {},
});
