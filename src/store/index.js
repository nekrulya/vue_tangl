import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
    isLoading: false,
    username: "",
    accessToken: "",
    companies: [],
    choosedCompany: "",
    choosedCompanyId: "",
    properties: [],
    dialogVisible: false,
    dialogVisibleGroup: false,
    projects: [],
    choosedProject: "",
    choosedProjectId: "",
    folders: [],
    choosedModelId: "",
    catalogs: [],
    choosedCatalogId: "",
    positionList: {},
    choosedPositionId: "",
    parametrsList: {},
    filteredParametrsList: {},
    positionChildrenList: {},

    modelsData: [],
    positions: [],
    odata: [],
    metaTree: [],
    choosedMetaTree: [],
    params: [],
    choosedProperties: [],
    propsToGroup: [],
    api: {
      login: "http://192.168.102.197:8000/api/app/user/authUser",
      companies: "http://192.168.102.197:8000/api/app/company/getCompanyList",
      projectList:
        "http://192.168.102.197:8000/api/app/project/getProjectList?company_id=",
      projectFoldersList:
        "http://192.168.102.197:8000/api/app/project/getProjectFolders?project_id=",
      catalogs:
        "http://192.168.102.197:8000/api/app/model/getCatalogList?model_id=",
      positionList:
        "http://192.168.102.197:8000/api/app/catalog/getPositionList?catalog_id=",
      parametrsList1:
        "http://192.168.102.197:8000/api/app/parametrs/getParametrsList?position_id=",
      parametrsList2: "&catalog_id=",
      positionChildrenList1:
        "http://192.168.102.197:8000/api/app/catalog/getPositionChildrenList?position_id=",
      positionChildrenList2: "&catalog_id=",
    },
  },
  getters: {
    getChoosedProperties(state) {
      return state.choosedProperties;
    },
    // getFilteredParametrsList: (state) => (expr) => {
    //   const params = {};
    //   for (const [k, v] of Object.entries(state.parametrsList)) {
    //     if
    //   }
    //   return params;
    // },
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setChoosedCompany(state, choosedCompany) {
      state.choosedCompany = choosedCompany;
    },
    setChoosedCompanyId(state, choosedCompanyId) {
      state.choosedCompanyId = choosedCompanyId;
    },
    setProperties(state, properties) {
      state.properties = properties;
    },
    setDialogVisible(state, dialogVisible) {
      state.dialogVisible = dialogVisible;
    },
    setDialogVisibleGroup(state, dialogVisibleGroup) {
      state.dialogVisibleGroup = dialogVisibleGroup;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setChoosedProject(state, choosedProject) {
      state.choosedProject = choosedProject;
    },
    setChoosedProjectId(state, choosedProjectId) {
      state.choosedProjectId = choosedProjectId;
    },
    setFolders(state, folders) {
      state.folders = folders;
    },
    setChoosedModelId(state, choosedModelId) {
      state.choosedModelId = choosedModelId;
    },
    setCatalogs(state, catalogs) {
      state.catalogs = catalogs;
    },
    setChoosedCatalogId(state, choosedCatalogId) {
      state.choosedCatalogId = choosedCatalogId;
    },
    setPositionList(state, positionList) {
      state.positionList = positionList;
    },
    setChoosedPositionId(state, choosedPositionId) {
      state.choosedPositionId = choosedPositionId;
    },
    setPositionChildrenList(state, positionChildrenList) {
      state.positionChildrenList = positionChildrenList;
    },

    setParametrsList(state, parametrsList) {
      state.parametrsList = parametrsList;
    },
    setFilteredParametrsList(state, filteredParametrsList) {
      state.filteredParametrsList = filteredParametrsList;
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
      state.choosedProperties.push(choosedProperty);
    },
    deleteChoosedProperty(state, choosedProperty) {
      state.choosedProperties = state.choosedProperties.filter(
        (property) => property != choosedProperty
      );
    },
    setPropsToGroup(state, prop) {
      state.propsToGroup = prop;
    },
    addPropsToGroup(state, prop) {
      state.propsToGroup.push(prop);
    },
    deletePropsToGroup(state, prop) {
      state.propsToGroup = state.propsToGroup.filter(
        (property) => property != prop
      );
    },
  },
  actions: {},
  modules: {},
});
