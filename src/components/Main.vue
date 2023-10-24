<template>
  <main class="main">
    <div class="content">
      <ModelProperties
        :parametrs="this.filteredParametrsList"
        @choosePropety="addChooseProperty"
      ></ModelProperties>
      <ChoosedProperties
        :choosedProperties="choosedProperties"
      ></ChoosedProperties>
      <FinalTable></FinalTable>
      <!-- <Loader /> -->
    </div>
  </main>
</template>

<script>
import ModelProperties from "@/components/ModelProperties.vue";
import ChoosedProperties from "@/components/ChoosedProperties.vue";
import FinalTable from "@/components/FinalTable.vue";
import Loader from "@/components/Loader.vue";

import { mapState } from "vuex";

export default {
  props: [],
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      parametrsList: (state) => state.parametrsList,
      filteredParametrsList: (state) => state.filteredParametrsList,
    }),
  },
  components: {
    ModelProperties,
    ChoosedProperties,
    FinalTable,
    Loader,
  },
  data() {
    return {};
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
