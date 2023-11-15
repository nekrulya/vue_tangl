<template>
  <li class="item" v-if="choosedItem.isGroup">
    <ul class="group">
      <img
        class="img"
        src="@/assets/delete.png"
        alt="delete"
        @click="deleteChoosedProperty(choosedItem)"
      />
      <span class="text">{{ choosedItem.tableName }}</span>
      <img
        src="@/assets/ungroup.png"
        alt="func"
        class="cp"
        @click="ungroup(choosedItem)"
      />
      <ChoosedListItem
        v-for="(item, index) in choosedItem.items"
        :choosedItem="item"
        :key="index"
        :deleteOption="false"
      ></ChoosedListItem>
    </ul>
  </li>
  <li class="choosed__item" v-if="!choosedItem.isGroup">
    <ChoosedItem
      :choosedItem="choosedItem"
      @dragstart="dragfunc"
      :deleteOption="deleteOption"
    ></ChoosedItem>
  </li>
</template>

<script>
import ChoosedItem from "./ChoosedItem.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["choosedItem", "deleteOption"],

  components: {
    ChoosedItem,
  },

  data() {
    return {};
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

    ungroup(group) {
      let children = group.items;
      for (let child of children) {
        this.addChoosedProperty(child);
        if (document.querySelector(`input[value="${child.path}"]`)) {
          document.querySelector(`input[value="${child.path}"]`).checked = true;
        }
      }
      this.deleteChoosedProperty(group);
    },
  },
};
</script>

<style scoped>
.group {
  border-left: 1px solid black;
  padding-left: 3px;
  position: relative;
  left: -4px;
}
.group:hover {
  transform: scale(1.05);
  transition: 0.1s;
  cursor: pointer;
}
.item {
  min-width: 250px;
}
.item:hover {
  transform: scale(1.05);
  transition: 0.1s;
  cursor: pointer;
}
.img {
  height: 20px;
  margin-right: 4px;
  position: relative;
  top: 2px;
}
.text {
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
  min-width: 22px;
  margin-left: 10px;
}
.cp {
  height: 18px;
  margin-left: 4px;
  position: relative;
  top: 2px;
  cursor: pointer;
}
</style>
