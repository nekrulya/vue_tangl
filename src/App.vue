<template>
  <Header></Header>
  <ModalDialog></ModalDialog>
  <Main></Main>
</template>

<script>
import Header from "@/components/Header.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import Main from "@/components/Main.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Header,
    ModalDialog,
    Main,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({
      dialogVisible: (state) => state.dialogVisible,
    }),
  },
};
</script>

<style></style>
