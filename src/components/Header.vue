<template>
  <header class="header">
    <div class="title">Создание ведомости объемов работ</div>
    <form class="form" v-if="!isAuth">
      <label>
        Login
        <input class="login" type="text" v-model="login" />
      </label>
      <label>
        Password
        <input class="pswd" type="password" v-model="password" />
      </label>
      <button
        class="btn"
        @click.prevent="loginTangle(this.login, this.password)"
      >
        Войти
      </button>
    </form>
    <div class="logout" v-else>
      <span>{{ this.username }}</span>
      <button @click.prevent="openModal" class="open_modal">Настроить</button>
      <button @click.prevent="this.logout(1)">Выйти</button>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {
      login: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.isAuth,
      username: (state) => state.username,
      companies: (state) => state.companies,
      accessToken: (state) => state.accessToken,
      dialogVisible: (state) => state.dialogVisible,
      api: (state) => state.api,
    }),
  },
  methods: {
    ...mapMutations({
      setAccessToken: "setAccessToken",
      setIsAyth: "setIsAuth",
      setUsername: "setUsername",
      setCompanies: "setCompanies",
      setDialogVisible: "setDialogVisible",
      logout: "logout",
    }),

    // войти в аккаунт
    async loginTangle() {
      axios({
        method: "post",
        url: this.api.login,
        params: {},
        data: {
          username: this.login,
          password: this.password,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          console.log(response.data);
          this.password = "";
          this.setAccessToken(response.data.access_token);
          this.setIsAyth(true);
          this.setUsername(response.data.username);
          this.updateCompanies(this.accessToken);
          localStorage.accessToken = this.accessToken;
          localStorage.username = this.username;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // выйти из аккаунта
    // logOut() {
    //   this.login = "";
    //   this.setAccessToken("");
    //   this.setIsAyth(false);
    //   localStorage.username = "";
    //   localStorage.accessToken = "";
    // },

    // открыть модальное окно выбора
    openModal() {
      this.setDialogVisible(true);
    },

    // получить список компаний
    updateCompanies(accessToken) {
      axios({
        method: "get",
        url: this.api.companies,
        params: {},
        data: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          this.setCompanies(response.data.companies);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.header {
  height: fit-content;
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #025a6c;
  padding: 10px 30px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  font-size: 18px;
}

.login,
.pswd {
  background-color: #fff;
  color: #000;
  padding: 5px;
  width: 200px;
  border-radius: 5px;
}

.btn {
  background-color: rgba(89, 233, 225, 0.5);
  width: 200px;
  border-radius: 5px;
  padding: 5px;
}

.logout {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
}
</style>
