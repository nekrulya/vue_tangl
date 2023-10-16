<template>
  <ul class="parametrs">
    <template v-for="[key, v] of Object.entries(parametrs)" :key="key">
      <li v-if="typeof v === 'object'">
        <div
          class="parentTitle"
          @click="
            (e) => {
              console.log(e);
              e.target.closest('.parentTitle').nextElementSibling.hidden =
                !e.target.closest('.parentTitle').nextElementSibling.hidden;
            }
          "
        >
          {{ key }}
          <img :src="'/img/caret-down.png'" alt="" />
        </div>
        <ParametrsList :parametrs="v" />
      </li>
      <li v-else class="model__item">
        {{ key }}
      </li>
    </template>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["parametrs"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      api: (state) => state.api,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
    }),
    updateParametrsList(e) {
      //   this.setChoosedPositionId(e.target.value);
      //   console.log(e.target);
      //   axios({
      //     method: "get",
      //     url: `${
      //       this.api.parametrsList1 +
      //       this.choosedPositionId +
      //       this.api.parametrsList2 +
      //       this.choosedCatalogId
      //     }`,
      //     params: {},
      //     data: {},
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${this.accessToken}`,
      //     },
      //   })
      //     .then((response) => {
      //       this.setParametrslist(response.data);
      //       console.log(response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
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
