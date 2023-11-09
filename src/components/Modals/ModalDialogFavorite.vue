<template>
  <div class="dialog" v-if="dialogVisibleFav" @click="hideDialogFav">
    <div @click.stop class="dialog__content">
      <h2 class="title">Выберите избранное своство</h2>
      <div class="favs">
        <div class="favs__item" @click="addTotal">Общее количество</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: [],

  data() {
    return { favName: "", favExpr: "" };
  },

  computed: {
    ...mapState({
      dialogVisibleFav: (state) => state.dialogVisibleFav,
      choosedProperties: (state) => state.choosedProperties,
      propsToGroup: (state) => state.propsToGroup,
      params: (state) => state.params,
      api: (state) => state.api,
      accessToken: (state) => state.accessToken,
    }),
  },

  methods: {
    ...mapMutations({
      setDialogVisibleFav: "setDialogVisibleFav",
      addChoosedProperty: "addChoosedProperty",
      addValueToPosInParams: "addValueToPosInParams",
    }),

    // скрыть модальное окно
    hideDialogFav() {
      this.setDialogVisibleFav(false);
    },

    addTotal(e) {
      this.favName = e.target.textContent;
      const newProp = {
        path: this.favName.replaceAll(" ", "_"),
        name: this.favName.replaceAll(" ", "_"),
        tableName: this.favName,
        isGroup: false,
      };
      this.addChoosedProperty(newProp);
      this.setDialogVisibleFav(false);

      let values = {};
      for (let key of Object.keys(this.params)) {
        axios({
          method: "get",
          url: `${this.api.getTotal + key}`,
          params: {},
          data: {},
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
          .then((response) => {
            console.log(response);
            let res = [key, newProp.name, response.data.total];
            console.log(res);
            this.addValueToPosInParams(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this.favName = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap");

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;
}

.dialog__content {
  max-width: 1000px;
  margin: auto;
  background-color: #fff;
  min-width: 400px;
  min-height: 250px;
  border-radius: 20px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}

.favs {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px 5px;
}

.favs__item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed teal;
  margin-bottom: 8px;
  padding: 8px 5px;
  cursor: pointer;
}

.addFav {
  border: 3px solid teal;
  border-radius: 3px;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  align-self: center;
}

.input {
  border: 1px solid teal;
  margin-bottom: 5px;
  padding: 5px 8px;
  width: 100%;
}

.exprItem {
  border: 1px solid teal;
  padding: 5px 8px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
