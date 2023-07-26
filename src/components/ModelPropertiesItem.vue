<template>
  <li class="properties__item">
    <label :for="item.id">
      <input type="checkbox" :name="item.name" :id="item.id" />
      {{ item.text }}
    </label>
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
};
</script>
