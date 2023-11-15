<template>
  <div class="choosed_properties">
    <div class="title_and_buttons">
      <div class="title">Свойства в таблице</div>
      <div class="buttons">
        <img
          src="@/assets/group.png"
          alt="group"
          @click="openGroupCreate"
          class="cp"
        />
        <img
          src="@/assets/func.png"
          alt="func"
          @click="openFuncCreate"
          class="cp"
        />
        <img
          src="@/assets/saved.png"
          alt="saved"
          class="cp"
          @click="openFavCreate"
        />
      </div>
    </div>
    <div class="list">
      <ChoosedList :choosedItems="choosedProperties"></ChoosedList>
    </div>
  </div>
</template>

<script>
import ChoosedList from "@/components/ChoosedParamsList/ChoosedList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ChoosedList,
  },

  props: [],

  data() {
    return {};
  },

  computed: {
    ...mapState({
      choosedProperties: (state) => state.choosedProperties,
    }),
  },

  methods: {
    ...mapMutations({
      setDialogVisibleGroup: "setDialogVisibleGroup",
      setDialogVisibleFunc: "setDialogVisibleFunc",
      setDialogVisibleFav: "setDialogVisibleFav",
    }),

    openGroupCreate() {
      this.setDialogVisibleGroup(true);
    },

    openFuncCreate() {
      this.setDialogVisibleFunc(true);
    },

    openFavCreate() {
      this.setDialogVisibleFav(true);
    },
  },
};
</script>

<style scoped>
.choosed_properties {
  min-height: 100vh;
  min-width: 300px;
  border: 1px solid black;
}
.title_and_buttons {
  padding: 12px 10px;
}
.title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.buttons {
  margin-top: 10px;
  display: flex;
  width: 35%;
  justify-content: space-between;
}
.list {
  border-top: 1px dashed black;
  padding: 10px 10px 10px 0;
}
.cp {
  cursor: pointer;
}
</style>
