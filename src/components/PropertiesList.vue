<template>
  <ul class="properties__list">
    <PropertiesListItem v-for="item in items" :key="item.key" :item="item">
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
