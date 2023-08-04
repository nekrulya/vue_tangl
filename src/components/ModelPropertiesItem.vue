<template>
  <label :for="item.id">
    <input type="checkbox" :name="item" :id="item" :value="item" />
    {{ item }}
  </label>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {},
};
</script>
