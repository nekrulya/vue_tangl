<template>
  <li v-if="item.isGroup" class="properties__item">
    <span class="properties__item__text">{{ item.groupText }}</span>
    <ul class="properties__list">
      <ModelGroup
        v-for="child in item.children"
        :key="child.id"
        :item="child"
      ></ModelGroup>
    </ul>
  </li>
  <ModelPropertiesItem
    v-if="!item.isGroup"
    :item="item.element"
  ></ModelPropertiesItem>
</template>

<script>
import ModelPropertiesItem from "./ModelPropertiesItem.vue";

export default {
  props: ["item"],
  components: {
    ModelPropertiesItem,
  },
};
</script>
