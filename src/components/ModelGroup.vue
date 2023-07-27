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
  props: ["item", "showAll"],
  components: {
    ModelPropertiesItem,
  },
};
</script>

<style scoped>
.angle {
  height: 25px;
  position: relative;
  top: -3px;
}
.text_angle {
  display: flex;
  justify-content: space-between;
  max-width: fit-content;
}
.properties__list {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
