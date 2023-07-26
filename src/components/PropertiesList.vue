<template>
  <ul class="properties__list">
    <ModelGroup
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    ></ModelGroup>
  </ul>
</template>

<script>
import ModelGroup from "./ModelGroup.vue";

export default {
  components: {
    ModelGroup,
  },
  props: ["items"],
  data() {
    return {};
  },
};
</script>
