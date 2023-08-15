<template>
  <li class="choosed__item">
    <img
      class="choosed__item__img"
      src="../assets/delete.png"
      alt="delete"
      @click="deleteItem(choosedItem)"
    />
    <div class="choosed__item__text" :id="choosedItem.id">
      {{ choosedItem.name }}
    </div>
    <div class="arrows">
      <img src="../assets/Arrow1.png" alt="arrow Up" />
      <img src="../assets/Arrow2.png" alt="arrow Down" />
    </div>
  </li>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["choosedItem"],
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
    }),
    deleteItem(item) {
      this.deleteChoosedProperty(item);
      document.querySelector(`#${item.id}`).checked = false;
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.choosed__item {
  display: flex;
  width: fit-content;
  align-items: center;
}

.choosed__item__img {
  height: 20px;
  margin-right: 4px;
}

.choosed__item__text {
  padding: 4px 8px;
  background-color: #cfcce2;
  border-radius: 3px;
}

.arrows {
  margin-left: 10px;
  height: 20px;
  width: 22px;
  display: flex;
  justify-content: space-between;
}
</style>
