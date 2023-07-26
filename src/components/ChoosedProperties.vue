<template>
  <div class="choosed_properties">
    <div class="title_and_buttons">
      <div class="choosed_properties__title">Свойства в таблице</div>
      <div class="choosed_properties__buttons">
        <img src="../assets/group.png" alt="group" />
        <img src="../assets/func.png" alt="func" />
        <img src="../assets/saved.png" alt="saved" />
      </div>
    </div>
    <div class="choosed_properties__list">
      <ChoosedList :choosedItems="choosedItems"></ChoosedList>
    </div>
  </div>
</template>

<script>
import ChoosedList from "./ChoosedList.vue";

export default {
  components: {
    ChoosedList,
  },
  data() {
    return {
      choosedItems: [
        {
          isGroup: false,
          groupText: "",
          element: {
            isGroup: false,
            groupText: "",
            text: "Наименование",
            id: 1,
          },
          children: [],
        },
        {
          isGroup: true,
          groupText: "Размеры",
          element: {
            isGroup: false,
            groupText: "",
            text: "Размеры",
            id: 2,
          },
          children: [
            {
              isGroup: false,
              groupText: "",
              element: {
                isGroup: false,
                groupText: "",
                text: "Высота",
                id: 3,
              },
              children: [],
            },
            {
              isGroup: false,
              groupText: "",
              element: {
                isGroup: false,
                groupText: "",
                text: "Ширина",
                id: 3,
              },
              children: [],
            },
          ],
        },
        {
          isGroup: false,
          groupText: "",
          element: {
            isGroup: false,
            groupText: "",
            text: "Общее количество",
            id: 4,
          },
          children: [],
        },
      ],
    };
  },
};
</script>
