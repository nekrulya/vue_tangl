<template>
  <ul class="parametrs">
    <template v-for="[key, v] of Object.entries(parametrs)" :key="key">
      <li v-if="typeof v === 'object'" class="parametrsItem">
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
        <input type="checkbox" @click="addChoosedProperty" :value="key" />
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
