<template>
  <div class="model_properties" @change="choosePropety">
    <div class="title_and_hide">
      <div class="model_properties__title">Свойства в модели</div>
      <div class="model_properties__hide" @click="hideAll">свернуть всё</div>
      <input
        class="filterInput"
        type="text"
        @input="
          (e) =>
            this.setFilteredParametrsList(
              filterParametrs(
                this.parametrsList,
                e.target.value,
                filterParametrs
              )
            )
        "
      />
    </div>
    <div class="properties">
      <!-- <pre>{{ filterParametrs(parametrs, "adsk", this.filterParametrs) }}</pre> -->
      <ParametrsList :parametrs="parametrs" :path="'root'" />
    </div>
  </div>
</template>

<script>
import ParametrsList from "@/components/ParametrsList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ParametrsList,
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      parametrsList: (state) => state.parametrsList,
    }),
    ...mapGetters({ filterParametrs1: "getFilteredParametrsList" }),
  },
  props: ["parametrs"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
      setFilteredParametrsList: "setFilteredParametrsList",
    }),
    choosePropety(e) {
      e.target.checked
        ? this.addChoosedProperty({
            name: e.target.name,
            path: e.target.value,
            isGroup: false,
          })
        : this.deleteChoosedProperty({
            name: e.target.name,
            path: e.target.value,
            isGroup: false,
          });
      // console.log(this.findPath(e.target));
    },

    // findPath(element) {
    //   let path = "";
    //   path += element
    //     .closest(".parametrsItem")
    //     .querySelector(".parentTitle").textContent;
    //   console.log(element.closest(".parametrs"));
    //   path += " " + this.findPath(element.closest(".parametrs"));
    //   return path;
    // },

    hideAll(e) {
      const uls = document.querySelectorAll(".parametrs");
      for (let i = 1; i < uls.length; i++) {
        uls[i].hidden = true;
      }
    },

    filterParametrs: (parametrs, key, func) => {
      const newParametrs = {};
      for (const [k, v] of Object.entries(parametrs)) {
        if (typeof v === "object") {
          const obj = func(v, key, func);
          if (Object.keys(obj).length > 0) {
            newParametrs[k] = obj;
          }
        } else {
          if (k.toLowerCase().includes(key.toLowerCase())) {
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
  border: 1px solid black;
}
</style>
