<template>
  <li v-if="choosedItem.isGroup" class="choosed__item">
    <span class="choosed__item__text">{{ choosedItem.groupText }}</span>
    <ul class="choosed_list">
      <ChoosedGroup
        v-for="child in choosedItem.children"
        :key="child.id"
        :choosedItem="child"
      ></ChoosedGroup>
    </ul>
  </li>
  <ChoosedItem
    v-if="!choosedItem.isGroup"
    :choosedItem="choosedItem.element"
  ></ChoosedItem>
</template>

<script>
import ChoosedItem from "./ChoosedItem.vue";

export default {
  props: ["choosedItem"],
  components: {
    ChoosedItem,
  },
};
</script>
