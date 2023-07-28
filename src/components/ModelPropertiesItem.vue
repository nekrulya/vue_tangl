<template>
  <label :for="item.id">
    <input type="checkbox" :name="item.name" :id="item.id" />
    {{ item.text }}
  </label>
</template>

<script>
export default {
  props: ["item", "parentItem"],
  data() {
    return {};
  },
};
</script>
