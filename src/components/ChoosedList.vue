<template>
  <ul class="choosed_list">
    <draggable v-model="choosedProperties" @end="log">
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
    log(e) {
      let temp = [...this.choosedProperties];
      let a = temp[e.oldIndex];
      temp[e.oldIndex] = temp[e.newIndex];
      temp[e.newIndex] = a;

      this.setChoosedProperties(temp);
    },
  },
  computed: {
    ...mapState({
      choosedProperties: (state) => state.choosedProperties,
    }),
  },

  props: ["choosedItems"],
  data() {
    return {};
  },
};
</script>
