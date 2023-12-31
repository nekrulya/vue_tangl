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
    params: {},
    dialogVisibleFunc: false,
    dialogVisibleFav: false,
    paramsLevels: [],

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
      getParamsValue1:
        "http://192.168.102.197:8000/api/app/parametrs/getParamsValue?position_id=",
      getParamsValue2: "&path=",
      getParametricValue1:
        "http://192.168.102.197:8000/api/app/calculations/getParametricValue?expression=",
      getParametricValue2: "&values=",
      getTotal:
        "http://192.168.102.197:8000/api/app/calculations/getTotal?position_id=",
      getLevels:
        "http://192.168.102.197:8000/api/app/calculations/getLevels?model_id=",
      getElementTotalByLevel1:
        "http://192.168.102.197:8000/api/app/calculations/getElementTotalByLevel?position_id=",
      getElementTotalByLevel2: "&level_name=",
    },
    loader: {
      modal: {
        companies: false,
        projets: false,
        folders: false,
        catalogs: false,
        positions: false,
      },
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
    logout(state, prop) {
      state.isAuth = false;
      state.accessToken = "";
      state.username = "";
      state.companies = [];
      state.choosedCompany = "";
      state.choosedCompanyId = 0;
      state.dialogVisible = false;
      state.dialogVisibleGroup = false;
      state.projects = [];
      state.choosedProject = "";
      state.choosedProjectId = 0;
      state.folders = [];
      state.choosedModelId = 0;
      state.catalogs = [];
      state.choosedCatalogId = 0;
      state.positionList = {};
      state.choosedPositionId = 0;
      state.positionChildrenList = {};
      state.parametrsList = {};
      state.filteredParametrsList = {};
      state.choosedProperties = [];
      state.propsToGroup = [];
      state.params = {};
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
    addPosToParams(state, pos) {
      state.params[pos] = {};
    },
    addValueToPosInParams(state, list) {
      state.params[list[0]][list[1]] = list[2];
    },
    setDialogVisibleFunc(state, dialogVisibleFunc) {
      state.dialogVisibleFunc = dialogVisibleFunc;
    },
    setDialogVisibleFav(state, dialogVisibleFav) {
      state.dialogVisibleFav = dialogVisibleFav;
    },
    setChoosedProperties(state, choosedProperties) {
      state.choosedProperties = choosedProperties;
    },
    addChoosedProperty(state, choosedProperty) {
      state.choosedProperties.push(choosedProperty);
    },
    deleteChoosedProperty(state, choosedProperty) {
      state.choosedProperties = state.choosedProperties.filter(
        (property) => property.path != choosedProperty.path
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
    setParamsLevels(state, paramsLevels) {
      state.paramsLevels = paramsLevels;
    },
    setLoader(state, [key1, key2, value]) {
      state.loader[key1][key2] = value;
    },
  },
  actions: {},
  modules: {},
});
