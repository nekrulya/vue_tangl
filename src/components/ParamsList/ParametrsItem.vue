<template>
  <li class="model__item">
    <label>
      <input
        type="checkbox"
        :value="path + ', ' + name"
        :name="name.replaceAll(' ', '_')"
        @change="reqParams"
        :checked="isChecked"
      />
      {{ name.replaceAll("_", " ") }}
    </label>
  </li>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["path", "name", "isChecked"],

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
      this.$emit("changeIsChecked", { this: this });
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

<style scoped></style>
