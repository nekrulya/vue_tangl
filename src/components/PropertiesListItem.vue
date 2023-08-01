<template>
  <li v-if="item.isGroup" class="properties__item">
    <div class="text_angle">
      <span class="properties__item__text">{{ item.groupText }}</span>
      <img
        class="angle"
        src="../assets/arrow-down.png"
        alt="open/close"
        @click="hide"
      />
    </div>
    <ul class="properties__list">
      <PropertiesListItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
      ></PropertiesListItem>
    </ul>
  </li>
  <li v-if="!item.isGroup" class="properties__item">
    <ModelPropertiesItem :item="item.element"></ModelPropertiesItem>
  </li>
</template>

<script>
import ModelPropertiesItem from "./ModelPropertiesItem.vue";

export default {
  props: ["item"],
  components: { ModelPropertiesItem },
  data() {
    return {};
  },
  methods: {
    hide(e) {
      let ul = e.target.closest("li").querySelector("ul");
      ul.hidden = !ul.hidden;
    },
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
