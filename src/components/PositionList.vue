<template>
  <ul class="models">
    <template v-for="pos in positions" :key="pos.id">
      <li v-if="pos.children.length" :value="pos.id">
        <span>{{ pos.name }}</span>
        <ul v-if="pos.children.length">
          <PositionList :positions="pos.children" />
        </ul>
      </li>
      <li
        v-else
        :value="pos.id"
        @click="updateParametrsList"
        class="model__item"
      >
        {{ pos.name }}
      </li>
    </template>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["positions"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      choosedPositionId: (state) => state.choosedPositionId,
      parametrsList: (state) => state.parametrsList,
      api: (state) => state.api,
      choosedCatalogId: (state) => state.choosedCatalogId,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      setChoosedPositionId: "setChoosedPositionId",
      setParametrsList: "setParametrsList",
      setFilteredParametrsList: "setFilteredParametrsList",
    }),
    updateParametrsList(e) {
      this.setChoosedPositionId(e.target.value);
      console.log(e.target);
      axios({
        method: "get",
        url: `${
          this.api.parametrsList1 +
          this.choosedPositionId +
          this.api.parametrsList2 +
          this.choosedCatalogId
        }`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setParametrsList(response.data);
          this.setFilteredParametrsList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.model__item {
  cursor: pointer;
}
</style>
