<template>
  <main class="main">
    <div class="content" v-if="this.isAuth">
      <ModelProperties
        :parametrs="this.filteredParametrsList"
      ></ModelProperties>
      <ChoosedProperties
        v-if="this.choosedProperties.length > 0"
        :choosedProperties="choosedProperties"
      ></ChoosedProperties>
      <FinalTable></FinalTable>
      <!-- <Loader /> -->
    </div>
  </main>
</template>

<script>
import ModelProperties from "@/components/ParamsList/ModelProperties.vue";
import ChoosedProperties from "@/components/ChoosedParamsList/ChoosedProperties.vue";
import FinalTable from "@/components/FinalTable.vue";
import Loader from "@/components/Loader.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: [],

  components: {
    ModelProperties,
    ChoosedProperties,
    FinalTable,
    Loader,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      parametrsList: (state) => state.parametrsList,
      filteredParametrsList: (state) => state.filteredParametrsList,
      choosedProperties: (state) => state.choosedProperties,
    }),
  },

  methods: {
    addChooseProperty(item) {
      this.choosedProperties.push(item);
    },
  },
};
</script>

<style>
.main {
  height: 100%;
}

.content {
  display: flex;
}
</style>
