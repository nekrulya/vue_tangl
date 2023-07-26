<template>
  <main class="main">
    <div class="content">
      <ModelProperties></ModelProperties>
      <ChoosedProperties></ChoosedProperties>
      <FinalTable></FinalTable>
    </div>
  </main>
</template>

<script>
import ModelProperties from "./ModelProperties.vue";
import ChoosedProperties from "./ChoosedProperties.vue";
import FinalTable from "./FinalTable.vue";

export default {
  components: {
    ModelProperties,
    ChoosedProperties,
    FinalTable,
  },
  data() {
    return {};
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
