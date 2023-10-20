<template>
  <ul class="choosed_list">
    <draggable v-model="choosedProperties">
      <ChoosedListItem
        v-for="(choosedItem, index) in choosedItems"
        :key="index"
        :choosedItem="choosedItem"
      ></ChoosedListItem>
    </draggable>
  </ul>
</template>

<script>
import ChoosedListItem from "./ChoosedListItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ChoosedListItem,
    draggable: VueDraggableNext,
  },
  methods: {
    ...mapMutations({
      setChoosedProperties: "setChoosedProperties",
    }),
  },
  computed: {
    ...mapState({
      choosedProperties: (state) => state.choosedProperties,
    }),
    ...mapGetters({
      getChoosedProperties: "getChoosedProperties",
    }),
    choosedProperties: {
      get() {
        return this.getChoosedProperties;
      },
      set(value) {
        this.setChoosedProperties(value);
      },
    },
  },
  props: ["choosedItems"],
  data() {
    return {};
  },
};
</script>
