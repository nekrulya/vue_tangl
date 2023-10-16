<template>
  <div class="model_properties" @change="choosePropety">
    <div class="title_and_hide">
      <div class="model_properties__title">Свойства в модели</div>
      <div class="model_properties__hide" @click="hideAll">свернуть всё</div>
    </div>
    <div class="properties">
      <ParametrsList :parametrs="parametrs" />
    </div>
  </div>
</template>

<script>
import ParametrsList from "@/components/ParametrsList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ParametrsList,
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
    }),
  },
  props: ["parametrs"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
    }),
    choosePropety(e) {
      e.target.checked
        ? this.addChoosedProperty({
            name: e.target.value,
            id: e.target.id,
            isGroup: false,
          })
        : this.deleteChoosedProperty({
            name: e.target.value,
            id: e.target.id,
            isGroup: false,
          });
    },
    hideAll(e) {
      const uls = document.querySelectorAll(".parametrs");
      for (let i = 1; i < uls.length; i++) {
        uls[i].hidden = true;
      }
    },
  },
};
</script>

<style scoped>
.model_properties {
  height: 100vh;
  min-width: 400px;
  width: max-content;
  border: 1px solid black;
}
.title_and_hide {
  padding: 12px 10px;
}
.model_properties__title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.model_properties__hide {
  color: #436caa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;

  cursor: pointer;
}

.properties {
  border-top: 1px dashed black;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 85px);
}
</style>
