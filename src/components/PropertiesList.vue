<template>
  <ul class="properties__list">
    <PropertiesListItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :parentItem="parentItem"
    >
    </PropertiesListItem>
  </ul>
</template>

<script>
import PropertiesListItem from "./PropertiesListItem.vue";

export default {
  components: {
    PropertiesListItem,
  },
  props: ["items", "parentItem"],
  data() {
    return {};
  },
};
</script>
