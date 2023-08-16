<template>
  <div class="choosed_properties">
    <div class="title_and_buttons">
      <div class="choosed_properties__title">Свойства в таблице</div>
      <div class="choosed_properties__buttons">
        <img src="../assets/group.png" alt="group" @click="openGroupCreate" />
        <img src="../assets/func.png" alt="func" />
        <img src="../assets/saved.png" alt="saved" />
      </div>
    </div>
    <div class="choosed_properties__list">
      <ChoosedList :choosedItems="choosedProperties"></ChoosedList>
    </div>
  </div>
</template>

<script>
import ChoosedList from "./ChoosedList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ChoosedList,
  },
  computed: {
    ...mapState({
      choosedProperties: (state) => state.choosedProperties,
    }),
  },
  props: [],
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
      setDialogVisibleGroup: "setDialogVisibleGroup",
    }),
    addGroup() {
      this.addChoosedProperty({
        name: "без названия",
        id: null,
        isGroup: true,
        items: [
          { name: "1", id: null, isGroup: false },
          { name: "2", id: null, isGroup: false },
          { name: "3", id: null, isGroup: false },
        ],
      });
    },
    openGroupCreate() {
      this.setDialogVisibleGroup(true);
    },
  },
};
</script>

<style scoped>
.choosed_properties {
  min-height: 100vh;
  min-width: 267px;
  border: 1px solid black;
}
.title_and_buttons {
  padding: 12px 10px;
}
.choosed_properties__title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.choosed_properties__buttons {
  margin-top: 10px;
  display: flex;
  width: 35%;
  justify-content: space-between;
}
.choosed_properties__list {
  border-top: 1px dashed black;
  padding: 10px 10px 10px 0;
}
</style>
