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
      <span>{{ login }}</span>
      <button @click.prevent="logOut">Выйти</button>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  props: ["headerTitle"],
  data() {
    return {
      login: "",
      password: "",
      isLoggedIn: false,
    };
  },
  methods: {
    updateLogInfo() {
      this.password = "";
      this.isLoggedIn = localStorage.getItem("isLoggedIn");
    },
    loginTangle() {
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
        .then(function (response) {
          console.log("Ответ сервера успешно получен!");
          console.log(response.data);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("access_token", response.data.access_token);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.updateLogInfo();
    },
    logOut() {
      this.login = "";
      localStorage.setItem("isLoggedIn", false);
      this.isLoggedIn = false;
      localStorage.setItem("access_token", "");
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
}
.logout span {
  margin-right: 15px;
}
</style>
