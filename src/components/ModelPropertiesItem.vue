<template>
  <label :for="item.id">
    <input
      type="checkbox"
      :name="item"
      :id="parentItem + '___' + item"
      :value="item"
    />
    {{ item }}
  </label>
</template>

<script>
export default {
  props: ["item", "parentItem"],
  data() {
    return {};
  },
  methods: {},
};
</script>
