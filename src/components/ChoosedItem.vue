<template>
  <li class="choosed__item">
    <img class="choosed__item__img" src="../assets/delete.png" alt="delete" />
    <div class="choosed__item__text">{{ choosedItem.text }}</div>
    <div class="arrows">
      <img src="../assets/Arrow1.png" alt="arrow Up" />
      <img src="../assets/Arrow2.png" alt="arrow Down" />
    </div>
  </li>
</template>

<script>
export default {
  props: ["choosedItem"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.choosed__item {
  display: flex;
  width: fit-content;
  margin: 5px 0;
}

.choosed__item__img {
  margin-right: 10px;
}

.arrows {
  margin-left: 10px;
  width: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
