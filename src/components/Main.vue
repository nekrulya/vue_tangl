<template>
  <main class="main">
    <div class="content">
      <ModelProperties
        :properties="properties"
        @choosePropety="addChooseProperty"
      ></ModelProperties>
      <ChoosedProperties
        :choosedProperties="choosedProperties"
      ></ChoosedProperties>
      <FinalTable></FinalTable>
    </div>
  </main>
</template>

<script>
import ModelProperties from "./ModelProperties.vue";
import ChoosedProperties from "./ChoosedProperties.vue";
import FinalTable from "./FinalTable.vue";

export default {
  props: ["properties"],
  components: {
    ModelProperties,
    ChoosedProperties,
    FinalTable,
  },
  data() {
    return {
      dialogVisible: false,
      choosedProperties: [],
    };
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
