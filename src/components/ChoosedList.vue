<template>
  <ul class="choosed_list">
    <ChoosedListItem
      v-for="(choosedItem, index) in choosedItems"
      :key="index"
      :choosedItem="choosedItem"
    ></ChoosedListItem>
  </ul>
</template>

<script>
import ChoosedListItem from "./ChoosedListItem.vue";

export default {
  components: {
    ChoosedListItem,
  },
  props: ["choosedItems"],
  data() {
    return {};
  },
};
</script>
