<template>
  <div class="table_view">
    <table class="res_table">
      <thead class="thead">
        <tr>
          <th rowspan="2">Наименование</th>
          <th colspan="2">Размер</th>
          <th rowspan="2">Общее количество</th>
        </tr>
        <tr>
          <th>Высота</th>
          <th>Ширина</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ОК-1_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>100</td>
        </tr>
        <tr>
          <td>ОК-2_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>25</td>
        </tr>
        <tr>
          <td>ОК-3_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>101</td>
        </tr>
        <tr>
          <td>ОК-4_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>102</td>
        </tr>
        <tr>
          <td>ОК-5_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>103</td>
        </tr>
        <tr>
          <td>ОК-6_1920х1080_(h)</td>
          <td>1920</td>
          <td>1080</td>
          <td>104</td>
        </tr>
      </tbody>
    </table>
    <div class="table_download">Скачать таблицу</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.table_view {
  border: 1px solid black;
  width: 100%;
  min-height: 100vh;
}

.res_table {
  border: 1px solid black;
  border-collapse: collapse;
}

.thead {
  height: 80px;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

.table_download {
  display: inline-block;
  margin: 15px;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: #025a6c;
  color: #fff;
}
</style>
