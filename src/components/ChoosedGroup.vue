<template>
  <li v-if="choosedItem.isGroup" class="choosed__group">
    <div class="cont">
      <img class="choosed__item__img" src="../assets/delete.png" alt="delete" />
      <span class="choosed__item__text">{{ choosedItem.groupText }}</span>
      <div class="arrows">
        <img src="../assets/Arrow1.png" alt="arrow Up" />
        <img src="../assets/Arrow2.png" alt="arrow Down" />
      </div>
    </div>
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

<style scoped>
.choosed__group {
  border-left: 1px solid black;
  padding-left: 3px;
  position: relative;
  left: -4px;
}
.cont {
  display: flex;
  align-items: center;
}
.choosed__item__img {
  height: 20px;
  margin-right: 4px;
}
.choosed__item__text {
  display: inline-block;
  padding: 4px 8px;
  background-color: #8f84d1;
  border-radius: 3px;
}
.arrows {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 22px;
  margin-left: 10px;
}
</style>
