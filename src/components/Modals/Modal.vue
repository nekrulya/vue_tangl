<template>
  <ModalDialog></ModalDialog>
  <ModalDialogGroup></ModalDialogGroup>
  <ModalDialogFunc></ModalDialogFunc>
  <ModalDialogFavorite></ModalDialogFavorite>
</template>

<script>
import ModalDialog from "@/components/Modals/ModalDialog.vue";
import ModalDialogGroup from "@/components/Modals/ModalDialogGroup.vue";
import ModalDialogFunc from "@/components/Modals/ModalDialogFunc.vue";
import ModalDialogFavorite from "@/components/Modals/ModalDialogFavorite.vue";

export default {
  components: {
    ModalDialog,
    ModalDialogGroup,
    ModalDialogFunc,
    ModalDialogFavorite,
  },
};
</script>
