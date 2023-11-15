<template>
  <ul class="models">
    <li v-for="folder in folders" :key="folder.name">
      <span>{{ folder.name }}</span>
      <ul v-if="folder.folders.length">
        <ProjectFolders :folders="folder.folders" />
      </ul>
      <ul>
        <li
          v-for="model in folder.models"
          :key="model.id"
          :value="model.id"
          @click="updateCatalogs"
          class="model__item"
        >
          {{ model.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: ["folders"],

  data() {
    return {};
  },

  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      choosedModelId: (state) => state.choosedModelId,
      api: (state) => state.api,
    }),
  },

  methods: {
    ...mapMutations({
      setChoosedModelId: "setChoosedModelId",
      setCatalogs: "setCatalogs",
      setChoosedProperties: "setChoosedProperties",
    }),

    updateCatalogs(e) {
      this.setChoosedModelId(e.target.value);
      this.setChoosedProperties([]);
      axios({
        method: "get",
        url: `${this.api.catalogs + this.choosedModelId}`,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.setCatalogs(response.data.catalogs);
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
