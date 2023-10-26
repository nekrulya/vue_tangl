<template>
  <ul class="parametrs">
    <template v-for="[key, v] of Object.entries(parametrs)" :key="key">
      <li v-if="typeof v === 'object'" class="parametrsItem">
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
      <li v-else class="model__item">
        <input
          type="checkbox"
          :value="path + ', ' + key"
          :name="key"
          @change="reqParams"
        />
        {{ key }}
      </li>
    </template>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["parametrs", "path"],
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
    reqParams(e) {
      for (let posChild of this.positionChildrenList) {
        axios({
          method: "get",
          url: `${
            this.api.getParamsValue1 +
            posChild.id +
            this.api.getParamsValue2 +
            e.target.value.slice(6)
          }`,
          params: {},
          data: {},
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
          .then((response) => {
            this.addValueToPosInParams([
              posChild.id,
              e.target.value,
              response.data.value,
            ]);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.parentTitle {
  cursor: pointer;
}

.parentTitle img {
  width: 20px;
}
</style>
