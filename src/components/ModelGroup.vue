<template>
  <li v-if="item.isGroup" class="properties__item">
    <div class="text_angle">
      <span class="properties__item__text">{{ item.groupText }}</span>
      <img class="angle" src="../assets/arrow-down.png" alt="open/close" />
    </div>
    <ul class="properties__list">
      <ModelGroup
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :isVisible="isVisible"
      ></ModelGroup>
    </ul>
  </li>
  <ModelPropertiesItem
    v-if="!item.isGroup"
    v-show="isVisible"
    :item="item.element"
  ></ModelPropertiesItem>
</template>

<script>
import ModelPropertiesItem from "./ModelPropertiesItem.vue";

export default {
  props: ["item", "isVisible"],
  components: {
    ModelPropertiesItem,
  },
};
</script>

<style scoped>
.angle {
  height: 30px;
  position: relative;
  top: -5px;
}
.text_angle {
  display: flex;
  justify-content: space-between;

  max-width: fit-content;
}
</style>
