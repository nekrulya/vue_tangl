<template>
  <Header></Header>
  <ModalDialog></ModalDialog>
  <ModalDialogGroup></ModalDialogGroup>
  <Main></Main>
</template>

<script>
import Header from "@/components/Header.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import ModalDialogGroup from "@/components/ModalDialogGroup.vue";
import Main from "@/components/Main.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Header,
    ModalDialog,
    ModalDialogGroup,
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
