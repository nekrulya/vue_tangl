<template>
  <Header></Header>
  <Modals></Modals>
  <Main></Main>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Modals from "@/components/Modals/Modal.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Main,
    Modals,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dialogVisible: (state) => state.dialogVisible,
      accessToken: (state) => state.accessToken,
      isAuth: (state) => state.isAuth,
      username: (state) => state.username,
      api: (state) => state.api,
      companies: (state) => state.companies,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      setIsAyth: "setIsAuth",
      setUsername: "setUsername",
      setCompanies: "setCompanies",
    }),
    logOut() {
      this.setAccessToken("");
      this.setIsAyth(false);
      localStorage.username = "";
      localStorage.accessToken = "";
    },
  },
  mounted() {
    if (localStorage.accessToken) {
      this.setAccessToken(localStorage.accessToken);
    }
    if (localStorage.username) {
      this.setUsername(localStorage.username);
      this.setIsAyth(true);

      // получить список компаний
      axios({
        method: "get",
        url: this.api.companies,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => {
          this.setCompanies(response.data.companies);
        })
        .catch((error) => {
          console.log(error);
          this.logOut();
        });
    }
  },
};
</script>

<style></style>
