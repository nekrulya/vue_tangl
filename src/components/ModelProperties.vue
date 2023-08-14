<template>
  <div class="model_properties" @change="choosePropety">
    <div class="title_and_hide">
      <div class="model_properties__title">Свойства в модели</div>
      <div class="model_properties__hide">свернуть всё</div>
    </div>
    <div class="properties">
      <!-- <pre>{{ Object.entries(this.params) }}</pre> -->
      <PropertiesList :items="Object.entries(this.params)"></PropertiesList>
    </div>
  </div>
</template>

<script>
import PropertiesList from "./PropertiesList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PropertiesList,
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
      choosedProperties: (state) => state.choosedProperties,
    }),
  },
  props: ["properties"],
  data() {
    return {
      items: [
        {
          isGroup: false,
          groupText: "",
          element: {
            isGroup: false,
            groupText: "",
            text: "Высота",
            id: "Высота",
            name: "Высота",
          },
          children: [],
        },
        {
          isGroup: true,
          groupText: "Группа элементов 1",
          element: {
            isGroup: true,
            groupText: "Группа элементов 1",
            text: "Группа элементов 1",
            id: "Группа элементов 1",
            name: "Группа элементов 1",
          },
          children: [
            {
              isGroup: false,
              groupText: "",
              element: {
                isGroup: false,
                groupText: "",
                text: "Элемент 1",
                id: "Элемент 1",
                name: "Элемент 1",
              },
              children: [],
            },
            {
              isGroup: true,
              groupText: "Группа в группе",
              element: {
                isGroup: true,
                groupText: "Группа в группе",
                text: "Группа в группе",
                id: "Группа в группе",
                name: "Группа в группе",
              },
              children: [
                {
                  isGroup: false,
                  groupText: "",
                  element: {
                    isGroup: false,
                    groupText: "",
                    text: "Элемент 2",
                    id: "Элемент 2",
                    name: "Элемент 2",
                  },
                  children: [],
                },
                {
                  isGroup: false,
                  groupText: "",
                  element: {
                    isGroup: false,
                    groupText: "",
                    text: "Элемент 3",
                    id: "Элемент 3",
                    name: "Элемент 3",
                  },
                  children: [],
                },
              ],
            },
            {
              isGroup: false,
              groupText: "",
              element: {
                isGroup: false,
                groupText: "",
                text: "Элемент 4",
                id: "Элемент 4",
                name: "Элемент 4",
              },
              children: [],
            },
          ],
        },
        {
          isGroup: false,
          groupText: "",
          element: {
            isGroup: false,
            groupText: "",
            text: "Элемент 5",
            id: "Элемент 5",
            name: "Элемент 5",
          },
          children: [],
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
    }),
    choosePropety(e) {
      e.target.checked
        ? this.addChoosedProperty(e.target.value)
        : this.deleteChoosedProperty(e.target.value);
    },
  },
};
</script>

<style scoped>
.model_properties {
  height: 100vh;
  min-width: 400px;
  width: max-content;
  border: 1px solid black;
}
.title_and_hide {
  padding: 12px 10px;
}
.model_properties__title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.model_properties__hide {
  color: #436caa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
}

.properties {
  border-top: 1px dashed black;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 85px);
}
</style>
