<template>
  <Header @getProperties="getProperties"></Header>
  <Main :properties="properties"></Main>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      properties: [],
    };
  },
  methods: {
    getProperties(someData) {
      this.properties = someData;
      try {
        console.log(this.properties);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
