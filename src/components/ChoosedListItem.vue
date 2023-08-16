<template>
  <li class="choosed__item" v-if="choosedItem.isGroup">
    <ul class="choosed__group">
      <img
        class="choosed__item__img"
        src="../assets/delete.png"
        alt="delete"
        @click="deleteChoosedProperty(choosedItem)"
      />
      <span class="choosed__item__text">{{ choosedItem.name }}</span>
      <ChoosedListItem
        v-for="(item, index) in choosedItem.items"
        :choosedItem="item"
        :key="index"
      ></ChoosedListItem>
    </ul>
  </li>
  <li class="choosed__item" v-if="!choosedItem.isGroup">
    <ChoosedItem :choosedItem="choosedItem" @dragstart="dragfunc"></ChoosedItem>
  </li>
</template>

<script>
import ChoosedItem from "./ChoosedItem.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  props: ["choosedItem"],
  components: {
    ChoosedItem,
  },
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
    }),
    deleteItem(item) {
      this.deleteChoosedProperty(item);
      for (item in choosedItem.items) {
        document.querySelector(`#${item.id}`).checked = false;
      }
    },
    dragfunc(e) {
      let selected = e.target;

      let lists = document
        .querySelector(".choosed_properties__list")
        .querySelectorAll(".choosed__item");

      for (let list of lists) {
        list.addEventListener("dragover", function (e) {
          e.preventDefault();
        });
        list.addEventListener("drop", function (e) {
          list.appendChild(selected);
          selected = null;
        });
      }
    },
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
