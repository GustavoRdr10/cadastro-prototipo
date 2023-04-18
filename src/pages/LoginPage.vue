<template>
  <body>

    <img src="../img/img.png" style="float: right; width: 200px; margin-right: 43%; margin-top: 50px;">

    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-5">
          <div class="card mt-5 ">
            <div class="card-body">
              <h2 class="card-title">Entre na sua conta</h2>
              <p class="card-text">Para acessar sua conta informe seu e-mail e senha</p>
              <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="email">E-mail:</label>
                  <input id="email" v-model="email" type="email" class="form-control" placeholder="Seu e-mail">
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input id="password" v-model="password" type="password" class="form-control" placeholder="Sua senha">
                </div>
                <p class="card-text align-right">Esqueci minha senha</p>
                <div class="form-group">
                  <button onclick="window.location.href='/AccountPage';"
                    style="border: 0px solid black; background-color: #FF1493; border-radius: 5px; display: block; margin: 0 auto; font-size: 1.5em; padding: 10px 173px; color: white;">
                    FAZER LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-top: 20px;">
      <p class="card-text text-center">Ainda não tem conta? <a href="/SignupPage" class="text-pink">Cadastre-se</a></p>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      loading: false
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
  background-color: #F5FFFA ;
}

label,
input,
button {
  display: block;
  margin-bottom: 8px;
}

div {
  clear: both;
}

.center {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.custom-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 195px;
  font-size: 1.2rem;
  margin-top: 20px;
  border: none;
}

.card {
  margin-top: 150px;
}

.align-right {
  text-align: right;
}

.text-pink {
  color: #FF1493
}
</style>


