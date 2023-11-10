<template>
  <li class="item">
    <img
      class="img"
      src="../assets/delete.png"
      alt="delete"
      @click="deleteItem(choosedItem)"
      v-if="deleteOption"
    />
    <div class="text" :id="choosedItem.path" v-if="!this.isEditing">
      {{ choosedItem.tableName.replaceAll("_", " ") }}
    </div>
    <input
      type="text"
      v-else
      class="inputEdit"
      :value="choosedItem.name"
      @keydown.enter="changePropName"
    />
    <div class="arrows">
      <img src="../assets/edit.png" alt="edit prop" @click="editProp" />
    </div>
  </li>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["choosedItem", "deleteOption"],

  data() {
    return { isEditing: false };
  },

  methods: {
    ...mapMutations({
      deleteChoosedProperty: "deleteChoosedProperty",
    }),

    deleteItem(item) {
      this.deleteChoosedProperty(item);
      if (document.querySelector(`input[value="${item.path}"]`)) {
        document.querySelector(`input[value="${item.path}"]`).checked = false;
      }
    },

    editProp() {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
    },

    changePropName(e) {
      this.choosedItem.tableName = e.target.value;
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  width: fit-content;
  align-items: center;
}

.img {
  height: 20px;
  margin-right: 4px;
}

.text {
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

.inputEdit {
  border: 2px solid black;
  width: 50px;
}
</style>
