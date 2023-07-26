<template>
  <div class="model_properties">
    <div class="title_and_hide">
      <div class="model_properties__title">Свойства в модели</div>
      <div class="model_properties__hide">свернуть всё</div>
    </div>
    <div class="properties">
      <PropertiesList :items="items"></PropertiesList>
    </div>
  </div>
</template>

<script>
import PropertiesList from "./PropertiesList.vue";

export default {
  components: {
    PropertiesList,
  },
  data() {
    return {
      items: [
        {
          isGroup: false,
          groupText: "",
          element: {
            isGroup: false,
            groupText: "",
            text: "Высота",
            id: "Высота",
            name: "Высота",
          },
          children: [],
        },
        {
          isGroup: true,
          groupText: "Группа элементов",
          element: {
            isGroup: true,
            groupText: "Группа элементов",
            element: {
              text: "",
              id: "",
              name: "",
            },
            children: [],
          },
          children: [
            {
              isGroup: true,
              groupText: "Группа2 элементов",
              element: {
                text: "Высота",
                id: "Высота",
                name: "Высота",
              },
              children: [
                {
                  isGroup: false,
                  groupText: "",
                  element: {
                    text: "Ширина2",
                    id: "Ширина2",
                    name: "Ширина2",
                  },
                  children: [],
                },
              ],
            },
            {
              isGroup: false,
              groupText: "",
              element: {
                text: "Ширина",
                id: "Ширина",
                name: "Ширина",
              },
              children: [],
            },
            {
              isGroup: false,
              groupText: "",
              element: {
                text: "Уровень",
                id: "Уровень",
                name: "Уровень",
              },
              children: [],
            },
          ],
        },
        {
          isGroup: false,
          element: {
            groupText: "",
            text: "Айди",
            id: "Айди",
            name: "Айди",
          },
          children: [],
        },
        {
          isGroup: false,
          element: {
            groupText: "",
            text: "Глубина",
            id: "Глубина",
            name: "Глубина",
          },
          children: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.model_properties {
  min-height: 100vh;
  min-width: 267px;
  border: 1px solid black;
}
.title_and_hide {
  padding: 12px 10px;
}
.model_properties__title {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.model_properties__hide {
  color: #436caa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
}

.properties {
  border-top: 1px dashed black;
  padding: 10px;
}
</style>
