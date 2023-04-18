<template>
  <body>

    <img src="../img/img.png" class="account-img">

    <div>
      <button @click="showMenu = !showMenu" class="menu-button" style="border: none">J</button>
      <h1 class="account-title">Olá João,</h1>
      <p class="account-description">Seja bem vindo a sua conta de hospedagem.</p>
      <div class="account-info">
        <img src="../img/video.jpg" class="account-video-img"><br>
        <p class="account-help-link">Caso tenha alguma dúvida, <u>visite nossa central de ajuda.</u></p>
      </div>
      <div v-if="showMenu" class="account-menu">
        <p><a href="/" @click="logout">Sair</a></p>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AccountPage',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      showMenu: false
    };
  },
  computed: {
    valid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', {
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        // redirecionar para a página de finalização de cadastro
      } catch (error) {
        console.error(error);
      }
      this.loading = false;
    }
  }
};
</script>
<style scoped>
body {
  background-color: #F5FFFA;
}

.account-img {
  float: right;
  width: 200px;
  margin-right: 85%;
  margin-top: 50px;
}

.menu-button {
  position: absolute;
  top: 80px;
  right: 5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #DCDCDC;
}

.account-title {
  text-align: left;
  padding-left: 220px;
}

.account-description {
  text-align: right;
  padding-right: 980px;
}

.account-info {
  display: flex;
  flex-direction: column;
}

.account-video-img {
  margin-left: auto;
  margin-right: 100px;
  margin-top: 10px;
}

.account-help-link {
  margin-left: 205px;
}

.account-menu a {
  position: absolute;
  top: 135px;
  color: black;
  text-decoration: none;
  left: 1393px;
  background-color: #F5FFFA;
  padding: 10px;
}
</style>