<template>
  <header class="header">
    <div class="header__title">Создание ведомости объемов работ</div>
    <form class="header__form" v-if="!isLoggedIn">
      <label>
        Login
        <input class="header__login" type="text" v-model="login" />
      </label>
      <label>
        Password
        <input class="header__pswd" type="password" v-model="password" />
      </label>
      <button
        class="header_btn"
        @click.prevent="loginTangle(this.login, this.password)"
      >
        Войти
      </button>
    </form>
    <div class="logout" v-if="isLoggedIn">
      <ModalDialog
        v-model:showModal="dialogVisible"
        :companies="companies"
      ></ModalDialog>
      <span>{{ login }}</span>
      <button @click.prevent="this.dialogVisible = true" class="open_modal">
        Настроить
      </button>
      <button @click.prevent="logOut">Выйти</button>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import ModalDialog from "./ModalDialog.vue";

export default {
  props: ["headerTitle"],
  components: {
    ModalDialog,
  },
  data() {
    return {
      login: "",
      password: "",
      isLoggedIn: false,
      companies: [],
      dialogVisible: false,
      accessToken: "",
    };
  },
  methods: {
    async loginTangle() {
      axios({
        method: "post",
        url: "https://auth.tangl.cloud/connect/token",
        params: {},
        data: {
          client_id: "BimTanglValue_External",
          grant_type: "password",
          username: this.login,
          password: this.password,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("accessToken", response.data.access_token);
          this.password = "";
          this.isLoggedIn = localStorage.getItem("isLoggedIn");
          let accessToken = response.data.access_token;
          this.updateCompanies(accessToken);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logOut() {
      this.login = "";
      localStorage.setItem("isLoggedIn", false);
      this.isLoggedIn = false;
      localStorage.setItem("accessToken", "");
    },
    updateCompanies(accessToken) {
      axios({
        method: "get",
        url: "https://auth.tangl.cloud/api/app/company",
        params: {},
        data: {},
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          this.companies = response.data;
          this.accessToken = accessToken;
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

.header__form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  font-size: 18px;
}

.header__login,
.header__pswd {
  background-color: #fff;
  color: #000;
  padding: 5px;
  width: 200px;
  border-radius: 5px;
}

.header_btn {
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
