<template>
  <div class="dialog" v-if="dialogVisibleFunc" @click="hideDialogFunc">
    <div @click.stop class="dialog__content">
      <label>
        Название свойства
        <input class="input" type="text" id="funcName" v-model="funcName" />
      </label>
      <label>
        Выражение
        <input class="input" type="text" id="funcExpr" v-model="funcExpr" />
      </label>
      <div class="propsAndBtns">
        <div class="prop__list">
          <template v-for="prop in choosedProperties" :key="prop.id">
            <div
              v-if="!prop.isGroup"
              :id="prop.path"
              class="exprItem"
              @click="
                (e) => {
                  funcExpr += e.target.id.replaceAll(', ', '_') + ' ';
                  valuesList.push(prop.path);
                }
              "
            >
              {{ prop.tableName }}
            </div>
            <template v-else>
              <template v-for="p in prop.items" :key="p.path">
                <div
                  :id="p.path"
                  class="exprItem"
                  @click="
                    (e) => {
                      funcExpr += e.target.id.replaceAll(', ', '_') + ' ';
                      valuesList.push(p.path);
                    }
                  "
                >
                  {{ p.tableName }}
                </div>
              </template>
            </template>
          </template>
        </div>
        <div class="btns">
          <div class="btns__row">
            <div class="btn" @click="addToExpr">+</div>
            <div class="btn" @click="addToExpr">-</div>
            <div class="btn" @click="addToExpr">*</div>
            <div class="btn" @click="addToExpr">/</div>
          </div>
          <div class="btns__row">
            <div class="btn" @click="addToExpr">sin</div>
            <div class="btn" @click="addToExpr">cos</div>
            <div class="btn" @click="addToExpr">tan</div>
            <div class="btn" @click="addToExpr">cot</div>
          </div>
          <div class="btns__row">
            <div class="btn" @click="addToExpr">(</div>
            <div class="btn" @click="addToExpr">)</div>
            <div class="btn" @click="addToExpr">**</div>
            <div class="btn">A</div>
          </div>
        </div>
      </div>
      <button class="addGroup" @click.prevent="addFunc">Добавить</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: [],

  data() {
    return { funcName: "", funcExpr: "", valuesList: [] };
  },

  computed: {
    ...mapState({
      dialogVisibleFunc: (state) => state.dialogVisibleFunc,
      choosedProperties: (state) => state.choosedProperties,
      propsToGroup: (state) => state.propsToGroup,
      params: (state) => state.params,
      api: (state) => state.api,
      accessToken: (state) => state.accessToken,
    }),
  },

  methods: {
    ...mapMutations({
      setDialogVisibleFunc: "setDialogVisibleFunc",
      addChoosedProperty: "addChoosedProperty",
      addValueToPosInParams: "addValueToPosInParams",
    }),

    // скрыть модальное окно
    hideDialogFunc() {
      this.setDialogVisibleFunc(false);
    },

    addFunc() {
      const newProp = {
        path: this.funcName,
        name: this.funcName,
        tableName: this.funcName,
        isGroup: false,
      };
      this.addChoosedProperty(newProp);
      this.setDialogVisibleFunc(false);

      let values = {};
      for (let key of Object.keys(this.params)) {
        for (let v of this.valuesList) {
          values[v.replaceAll(", ", "_")] = this.params[key][v];
        }
        console.log(values);

        axios({
          method: "get",
          url: `${
            this.api.getParametricValue1 +
            this.funcExpr.trim() +
            this.api.getParametricValue2 +
            JSON.stringify(values)
          }`,
          params: {},
          data: {},
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
          .then((response) => {
            let res = [key, newProp.name, response.data.value];
            console.log(res);
            this.addValueToPosInParams(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this.funcName = "";
      this.funcExpr = "";
    },

    addToExpr(e) {
      this.funcExpr += e.target.textContent;
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
  width: 1000px;
  margin: auto;
  background-color: #fff;
  min-width: 400px;
  min-height: 250px;
  border-radius: 20px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.companies {
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
}

.metaTree {
  color: #000;
  cursor: pointer;
}

.tree {
  cursor: pointer;
  transition: all 0.2s ease;
}

.tree:hover {
  padding: 5px;
  outline: 2px solid teal;
  transition: all 0.2s ease;
}

#groupName {
  border: 2px solid black;
  border-radius: 6px;
  font-size: 18px;
  padding: 4px 8px;
  margin-bottom: 10px;
}

.groupNameRed {
  outline: solid red;
}

.propsAndBtns {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 100%;
}

.prop__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px dashed black;
  padding: 10px;
  margin-bottom: 10px;
}

.btns {
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border: 1px dashed black;
  padding: 10px;
  margin-bottom: 10px;
}
.btns__row {
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
}
.btn {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ebebeb;
  box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;

  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
}
.addGroup {
  border: 3px solid teal;
  border-radius: 3px;
  width: 50%;
  padding: 10px;
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
