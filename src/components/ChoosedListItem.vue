<template>
  <li class="choosed__item" v-if="typeof choosedItem == 'object'">
    <ul class="choosed__group">
      <img class="choosed__item__img" src="../assets/delete.png" alt="delete" />
      <span class="choosed__item__text">{{ Object.keys(choosedItem)[0] }}</span>
      <ChoosedListItem
        v-for="(item, index) in Object.values(choosedItem)[0]"
        :choosedItem="item"
        :key="index"
      ></ChoosedListItem>
    </ul>
  </li>
  <li class="choosed__item" v-if="typeof choosedItem == 'string'">
    <ChoosedItem :choosedItem="choosedItem"></ChoosedItem>
  </li>
</template>

<script>
import ChoosedItem from "./ChoosedItem.vue";

export default {
  data() {
    return {};
  },
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
.choosed__group:hover {
  transform: scale(1.05);
  transition: 0.1s;
  cursor: pointer;
}
.cont {
  display: flex;
  align-items: center;
}
.choosed__item:hover {
  transform: scale(1.05);
  transition: 0.1s;
  cursor: pointer;
}
.choosed__item__img {
  height: 20px;
  margin-right: 4px;
  position: relative;
  top: 2px;
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
