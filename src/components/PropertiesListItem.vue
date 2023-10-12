<template>
  <li v-if="typeof item[1] === 'object'" class="properties__item">
    <div class="text_angle">
      <span class="properties__item__text">{{ item[0] }}</span>
      <img
        class="angle rotate90"
        src="../assets/arrow-down.png"
        alt="open/close"
        @click="hide"
      />
    </div>
    <ul class="properties__list">
      <PropertiesListItem
        v-for="itemo in Object.entries(item[1])"
        :key="itemo[0]"
        :item="itemo"
        :parentItem="item[0]"
      ></PropertiesListItem>
    </ul>
  </li>
  <li v-if="!(typeof item[1] === 'object')" class="properties__item">
    <ModelPropertiesItem
      :item="item[0]"
      :parentItem="parentItem"
    ></ModelPropertiesItem>
  </li>
</template>

<script>
import ModelPropertiesItem from "./ModelPropertiesItem.vue";

export default {
  props: ["item", "parentItem"],
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
.rotate90 {
  transform: rotate(90);
}
</style>
