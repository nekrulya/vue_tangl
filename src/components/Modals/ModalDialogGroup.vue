<template>
  <div class="dialog" v-if="dialogVisibleGroup" @click="hideDialogGroup">
    <div @click.stop class="dialog__content">
      <label>
        Название группы
        <input
          type="text"
          id="groupName"
          v-model="groupName"
          :class="{ groupNameRed: !groupName }"
        />
      </label>
      <ul class="prop__list">
        <template v-for="prop in choosedProperties" :key="prop.id">
          <li v-if="!prop.isGroup" :value="prop.id">
            <input
              type="checkbox"
              :id="prop.id"
              :value="prop.id"
              @change="
                (e) => {
                  e.target.checked ? addProp(prop) : deleteProp(prop);
                }
              "
            />
            {{ prop.tableName }}
          </li>
        </template>
      </ul>
      <button class="addGroup" @click.prevent="addGroup">Добавить</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: [],

  data() {
    return { groupName: "" };
  },

  computed: {
    ...mapState({
      dialogVisibleGroup: (state) => state.dialogVisibleGroup,
      choosedProperties: (state) => state.choosedProperties,
      propsToGroup: (state) => state.propsToGroup,
    }),
  },

  methods: {
    ...mapMutations({
      setDialogVisibleGroup: "setDialogVisibleGroup",
      setChoosedProperties: "setChoosedProperties",
      setPropsToGroup: "setPropsToGroup",
      addPropsToGroup: "addPropsToGroup",
      deletePropsToGroup: "deletePropsToGroup",
      addChoosedProperty: "addChoosedProperty",
      deleteChoosedProperty: "deleteChoosedProperty",
    }),

    // скрыть модальное окно
    hideDialogGroup() {
      this.setDialogVisibleGroup(false);
    },

    addProp(prop) {
      this.addPropsToGroup(prop);
      console.log(this.propsToGroup);
    },

    deleteProp(prop) {
      this.deletePropsToGroup(prop);
    },

    addGroup() {
      const newProp = {
        id: this.groupName,
        name: this.groupName,
        tableName: this.groupName,
        isGroup: true,
        path: this.groupName,
        items: this.propsToGroup,
      };
      for (let p of this.propsToGroup) {
        this.deleteChoosedProperty(p);
        if (document.querySelector(`input[value="${p.path}"]`)) {
          document.querySelector(`input[value="${p.path}"]`).checked = false;
        }
      }
      this.addChoosedProperty(newProp);
      this.setPropsToGroup([]);
      this.groupName = "";
      this.setDialogVisibleGroup(false);
    },
  },
};
</script>

<style scoped>
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

.prop__list {
  border: 1px dashed black;
  padding: 10px;
  margin-bottom: 10px;
}

.addGroup {
  border: 3px solid teal;
  border-radius: 3px;
  width: 50%;
  padding: 10px;
  align-self: center;
}
</style>
