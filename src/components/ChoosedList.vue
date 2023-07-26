<template>
  <ul class="choosed_list">
    <ChoosedGroup
      v-for="(choosedItem, index) in choosedItems"
      :key="index"
      :choosedItem="choosedItem"
    ></ChoosedGroup>
  </ul>
</template>

<script>
import ChoosedGroup from "./ChoosedGroup.vue";

export default {
  components: {
    ChoosedGroup,
  },
  props: ["choosedItems"],
  data() {
    return {};
  },
};
</script>
