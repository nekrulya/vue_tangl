<template>
  <ul class="chosed_list">
    <draggable v-model="choosedProperties" @end="dragEnd">
      <ChoosedListItem
        v-for="(choosedItem, index) in choosedItems"
        :key="index"
        :choosedItem="choosedItem"
        :deleteOption="true"
      ></ChoosedListItem>
    </draggable>
  </ul>
</template>

<script>
import ChoosedListItem from "./ChoosedListItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["choosedItems"],

  components: {
    ChoosedListItem,
    draggable: VueDraggableNext,
  },

  data() {
    return {};
  },

  methods: {
    ...mapMutations({
      setChoosedProperties: "setChoosedProperties",
    }),

    dragEnd(e) {
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
};
</script>
