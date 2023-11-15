<template>
  <ul class="properties__list">
    <PropertiesListItem
      v-for="item in items"
      :key="item[0]"
      :item="item"
      :parentItem="typeof item[1] == 'object' ? item[0] : 'Main'"
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
  props: ["items"],
  data() {
    return {};
  },
  methods: {},
};
</script>
