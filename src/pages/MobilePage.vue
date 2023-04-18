<template>
  <body>

    <img src="../img/img.png" style="float: right; width: 200px; margin-right: 43%; margin-top: 50px;">

    <div>
      <div style="display: flex; justify-content: center; align-items: center; height: 150px">
        <h1 style="text-align: center;">Você está muito próximo de mudar sua forma de<br>
          <span style="color: #FF1493; text-decoration: underline;">
            vender online
          </span>
        </h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="card-body">
            <h4 class="card-title text-center" style="color: #696969; font-weight: bold;">Hospedagem 2</h4>
            <div style="text-align:center;">
              <h2 style="color: #FF1493 ;"><span class="currency"></span>499<span class="menor">/mês</span></h2>
            </div>
            <p style="color: grey; font-size: 1.2em; text-align: center;">+ 2,0 % por pedido pago<br>(cobrado diariamente)
            </p>
            <hr>
            <p style="color: grey; font-size: 1.2em; text-align: center;">Ideal para site com mais<br>de 30k de visitas.
            </p>
            <switch-plan-button></switch-plan-button>
            <div class="card" style="height: 100%; margin-top: 10px; padding: 0 10px;">
              <h1>
                <h1>Dados pessoais</h1>
              </h1>
              <p>Informe seus dados pessoais para acesso à sua conta</p>
              <p>Nome completo</p><input type="email" class="form-control" placeholder="Informe seu nome completo">
              <p>Celular</p><input type="tel" class="form-control" placeholder="(99) 99999-0000">
              <p>E-mail</p><input type="email" class="form-control" placeholder="Informe seu e-mail">
              <p>Senha</p><input type="password" id="password" name="password" class="form-control"
                placeholder="Digite sua senha">
              <p style="color: #696969;  margin-top: -10px;">No mínimo 8 caracteres</p>
              <p>Confirme sua senha</p><input type="password" id="password" name="password" class="form-control"
                placeholder="Digite sua senha">
              <hr>
              <h2><b>Dados do site</b></h2><br>
              <p>Nome do seu site</p><input type="text" class="form-control" placeholder="Meu site">
              <p style="color: #696969;">Exatamente igual o título do seu site</p>
              <hr><br>
              <div style="display: flex; align-items: center;">
                <div class="quadrado" style="position: relative;">
                  <span class="flag"
                    style="position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%);">✓</span>
                </div>
                <h6 style="margin-left: 10px;">Ao concluir com seu cadastro você concorda com nossos <u>termos de uso</u>
                  e <u>politicas de privacidade</u>.</h6>
              </div><br><br>
              <button
                style="border: 0px solid black; background-color: #FF1493; border-radius: 5px; display: block; margin: 0 auto; font-size: 1.5em; padding: 8px 95px; color: white; margin-top: -10px;">
                CRIAR CONTA
              </button><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
  
<script>
import axios from 'axios';
import SwitchPlanButton from "@/components/SwitchPlanButton.vue";

export default {
  name: 'PlanOne',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    };
  }, components: {
    SwitchPlanButton,
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
@media only screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }

  header img {
    width: 100%;
    margin-right: 0;
  }

  h1 {
    font-size: 28px;
  }

  .card-body {
    width: 100%;
  }
}

body {
  background-color: #F5FFFA;
  padding-bottom: 120px;
  overflow-x: hidden;
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

.menor {
  font-size: 0.5em;
}

.card-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 243px;
  font-size: 1.0rem;
  margin-top: 20px;
  border-radius: 6px;
  border: none;
}

.quadrado {
  border: 2px solid #FF1493;
  border-radius: 25%;
  width: 23px;
  height: 23px;
}

.flag {
  color: #FF1493;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 195px;
  font-size: 1.2rem;
  margin-top: 20px;
}

.card {
  margin-top: 100px;
}

.currency {
  font-weight: normal;
  /* remove o negrito */
  font-size: 20px;
  /* define o tamanho da fonte */
}

img {
  float: right;
  margin-right: 720px;
  margin-top: 50px;
}

.align-right {
  text-align: right;
}
</style> 
  