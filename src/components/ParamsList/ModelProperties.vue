<template>
  <div class="model_properties" @change="choosePropety">
    <div class="title_and_hide">
      <div class="title">Свойства в модели</div>
      <div class="hide" @click="hideAll">свернуть всё</div>
      <input
        class="filterInput"
        type="text"
        placeholder="Поиск..."
        @input="
          (e) =>
            this.setFilteredParametrsList(
              filterParametrs(
                this.parametrsList,
                e.target.value,
                filterParametrs,
                'root',
                this.choosedProperties,
                getChoosedPropertiesSet()
              )
            )
        "
      />
    </div>
    <div class="properties">
      <ParametrsList :parametrs="parametrs" :path="'root'" />
    </div>
  </div>
</template>

<script>
import ParametrsList from "@/components/ParamsList/ParametrsList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["parametrs"],

  components: {
    ParametrsList,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      parametrsList: (state) => state.parametrsList,
      choosedProperties: (state) => state.choosedProperties,
    }),
    ...mapGetters({ filterParametrs1: "getFilteredParametrsList" }),
  },

  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
      setFilteredParametrsList: "setFilteredParametrsList",
    }),

    choosePropety(e) {
      if (e.target.checked) {
        this.addChoosedProperty({
          name: e.target.name,
          tableName: e.target.name,
          path: e.target.value,
          isGroup: false,
        });
      } else {
        this.deleteChoosedProperty({
          name: e.target.name,
          tableName: e.target.name,
          path: e.target.value,
          isGroup: false,
        });
      }
    },

    hideAll(e) {
      const uls = document.querySelectorAll(".parametrs");
      for (let i = 1; i < uls.length; i++) {
        uls[i].hidden = true;
      }
    },

    getChoosedPropertiesSet() {
      let set1 = new Set();

      for (let item of this.choosedProperties) {
        set1.add(item.path);
      }
      return set1;
    },

    filterParametrs: (
      parametrs,
      key,
      func,
      path,
      choosedProperties,
      checkedSet
    ) => {
      const newParametrs = {};

      for (const [k, v] of Object.entries(parametrs)) {
        if (typeof v === "object") {
          const obj = func(
            v,
            key,
            func,
            path + ", " + k,
            choosedProperties,
            checkedSet
          );
          if (Object.keys(obj).length > 0) {
            newParametrs[k] = obj;
          }
        } else {
          if (
            k.toLowerCase().includes(key.toLowerCase()) ||
            checkedSet.has(path + ", " + k)
          ) {
            newParametrs[k] = 1;
          }
        }
      }
      return newParametrs;
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
  display: flex;
  flex-direction: column;
}
.title_and_hide {
  padding: 12px 10px;
}
.title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.hide {
  color: #436caa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 20px;

  cursor: pointer;
}

.properties {
  border-top: 1px dashed black;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 85px);
}

.filterInput {
  border: 1px solid teal;
  padding: 5px 5px;
}
</style>
