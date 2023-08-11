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
import ModelProperties from "@/components/ModelProperties.vue";
import ChoosedProperties from "@/components/ChoosedProperties.vue";
import FinalTable from "@/components/FinalTable.vue";

export default {
  props: ["properties"],
  components: {
    ModelProperties,
    ChoosedProperties,
    FinalTable,
  },
  data() {
    return {
      choosedProperties: [],
    };
  },
  methods: {
    addChooseProperty(item) {
      this.choosedProperties.push(item);
    },

    propetiesToApp(someData) {
      this.$emit("getProperties", someData);
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
