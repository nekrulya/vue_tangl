<template>
  <div class="table_view" v-if="choosedProperties.length > 0">
    <table class="res_table" id="res_table">
      <thead class="thead">
        <tr>
          <!-- <th rowspan="2">Наименование</th> -->
          <th
            v-for="prop in choosedProperties"
            :key="prop.id"
            :rowspan="prop.isGroup ? 1 : 2"
            :colspan="prop.items?.length"
          >
            {{ prop.tableName }}
          </th>
        </tr>
        <tr>
          <template v-for="prop in choosedProperties" :key="prop.id">
            <template v-if="prop.isGroup">
              <th v-for="item in prop.items" :key="item.id">
                {{ item.tableName }}
              </th>
            </template>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paramId in this.params" :key="paramId">
          <!-- <td>{{ paramId.dbname }}</td> -->
          <template v-for="prop in this.choosedProperties" :key="prop">
            <td v-if="!prop.isGroup">
              {{ paramId[prop.name] }}
            </td>
            <template v-if="prop.isGroup">
              <td v-for="prp in prop.items" :key="prp">
                {{ paramId[prp.name] }}
              </td>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
    <div class="table_download" @click="download">Скачать таблицу</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken,
      choosedProperties: (state) => state.choosedProperties,
      params: (state) => state.params,
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    download(e) {
      console.log(e);
      let downloadLink;
      let dataType = "application/vnd.ms-excel";
      let tableID = "res_table";
      let tableSelect = document.getElementById(tableID);
      let tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

      // Specify file name
      let filename =
        prompt("Введите название файла для сохранения", "ВОР") + ".xls";

      // Create download link element
      downloadLink = document.createElement("a");

      document.body.appendChild(downloadLink);

      if (navigator.msSaveOrOpenBlob) {
        let blob = new Blob(["\ufeff", tableHTML], {
          type: dataType,
        });
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        downloadLink.href = "data:" + dataType + ", " + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
      }
    },
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

tbody tr:nth-child(2n) {
  background-color: rgba(0, 0, 255, 0.1);
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

  cursor: pointer;
}
</style>
