<template>
  <ul class="parametrs">
    <template v-for="[key, v] of Object.entries(parametrs)" :key="key">
      <li
        v-if="typeof v === 'object' && !v.hasOwnProperty('isChecked')"
        class="parametrsItem"
      >
        <div
          class="parentTitle"
          @click="
            (e) => {
              e.target.closest('.parentTitle').nextElementSibling.hidden =
                !e.target.closest('.parentTitle').nextElementSibling.hidden;
            }
          "
        >
          {{ key }}

          <img :src="'/img/caret-down.png'" alt="" />
        </div>
        <ParametrsList :parametrs="v" :path="path + ', ' + key" />
      </li>
      <ParametrsItem v-else :path="path" :name="key" />

      <!-- <li v-else class="model__item">
        <input
          type="checkbox"
          :value="path + ', ' + key"
          :name="key.replaceAll(' ', '_')"
          @change="reqParams"
        />
        {{ key.replaceAll("_", " ") }}
      </li> -->
    </template>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ParametrsItem from "@/components/ParamsList/ParametrsItem.vue";

export default {
  props: ["parametrs", "path"],

  components: { ParametrsItem },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      choosedPositionId: (state) => state.choosedPositionId,
      api: (state) => state.api,
      positionChildrenList: (state) => state.positionChildrenList,
    }),
  },

  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      addValueToPosInParams: "addValueToPosInParams",
    }),

    changeIsChecked(t) {
      console.log(this.v.isChecked);
    },

    // reqParams(e) {
    //   for (let posChild of this.positionChildrenList) {
    //     axios({
    //       method: "get",
    //       url: `${
    //         this.api.getParamsValue1 +
    //         posChild.id +
    //         this.api.getParamsValue2 +
    //         e.target.value.slice(6)
    //       }`,
    //       params: {},
    //       data: {},
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${this.accessToken}`,
    //       },
    //     })
    //       .then((response) => {
    //         this.addValueToPosInParams([
    //           posChild.id,
    //           e.target.value,
    //           response.data.value,
    //         ]);
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    // },
  },
};
</script>

<style scoped>
.parentTitle {
  cursor: pointer;
}

.parentTitle img {
  width: 17px;
  position: relative;
  top: 3px;
}
</style>
