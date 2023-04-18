<template>
  <body>

    <img src="../img/img.png" style="float: right; width: 200px; margin-right: 43%; margin-top: 50px;">

    <div>
      <div style="display: flex; justify-content: center; align-items: center; height: 150px">
        <h1 style="text-align: center;">Você está muito próximo de mudar a forma de<br><span
            style="color: #FF1493; text-decoration: underline;">hospedar seu site</span></h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card" style="height: 100%; margin-top: 10px;">
            <div class="card-body">
              <h2><b>Dados pessoais</b><br></h2><br>
              <p>Informe seus dados pessoais para acesso à sua conta</p><br>
              <div>
                <label for="nome">Nome completo:</label>
                <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Informe seu nome completo">
              </div>
              <div>
                <label for="celular">Celular:</label>
                <input type="text" class="form-control" id="celular" v-model="celular" placeholder="(99) 99999-0000">
              </div>
              <div>
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Informe seu e-mail">
              </div>
              <div>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="senha" class="form-control" placeholder="Digite sua senha">
                <p style="color: #696969;  margin-top: -10px;">No mínimo 8 caracteres</p>
              </div>
              <div>
                <label for="confirmaSenha">Confirme a senha:</label>
                <input type="password" id="confirmaSenha" v-model="confirmaSenha" class="form-control"
                  placeholder="Digite sua senha">
              </div>
              <hr>
              <h2><b>Dados do site</b></h2><br>
              <label for="nomeSite">Nome do site:</label>
              <input type="text" class="form-control" id="nomeSite" v-model="nomeSite" placeholder="Meu site">
              <p style="color: #696969;">Exatamente igual o título do seu site</p>
              <hr><br>
              <div style="display: flex; align-items: center;">
                <Checkbox id="flexCheckDefault" label="Default checkbox" v-model="checked" />
                <h6 style="margin-left: 10px;">Ao concluir com seu cadastro você concorda com nossos <u>termos de uso</u>
                  e <u>politicas de privacidade</u>.</h6>
              </div><br><br><br>
              <button type="button" @click="criarConta" style="border: 0px solid black; 
                  background-color: #FF1493; border-radius: 5px; display: block; 
                  margin: 0 auto; font-size: 1.5em; padding: 8px 218px; color: white;">
                Criar conta
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="height: 100%;margin-top: 10px;">
            <div class="card-body">
              <h4 class="card-title text-center" style="color: #696969; font-weight: bold;">Hospedagem 1</h4>
              <div style="text-align:center;">
                <h2 style="color: #FF1493; font-weight: bold;">Grátis</h2>
              </div>
              <p style="color: grey; text-align: center;">você não paga nada para usar<br> sem taxa de setup</p>
              <hr>
              <p style="color: grey; font-size: 1.2em; text-align: center;">Ideal para quem está <br>começando.</p>
              <hr>
              <p style="text-align:center; font-size: 1.3em; font-weight:bold; color:#4F4F4F">Seu site em servidores <u>no
                  <br>Estados Unidos</u>.</p>
              <p>✓ Servidores em nosso data center americanos;</p>
              <p>✓ APS, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2
                (medium trust) ou PHP 5.3,
                5.4, 5.5, 5.6 e 7.0;
              </p>
              <p>✓ 1 usuário de FTP para upload de download;</p>
              <p>✓ 1 contas de e-mails profissionais;</p>
              <p>✓ <u>1 subdomínio</u> gratuito;</p>
              <p style="text-align:center; font-weight:bold; color:#4F4F4F">Suporte 24 horas, 7 dias por semana grátis;
              </p>
              <p style=" font-weight:bold; color:#4F4F4F">Aplicativos disponíveis;</p>
              <p>✓ Wordpress;</p>
              <p>✓ Drupal;</p>
              <p>✓ entre outros...</p>

              <p style="font-weight:bold; color:#C0C0C0">Você ainda tem</p>
              <p style="font-weight:bold; color:#D3D3D3">✓ Webmail RoundCube;</p>
              <p style="font-weight:bold; color:#e9e9e9">✓ AntiSpam;</p>
              <switch-plan-button></switch-plan-button>
              <span
                style="position: absolute; top: -16px; left: 95px; background-color: black; color: white; border-radius: 8px; padding: 3px 15px;">
                PLANO ESCOLHIDO
              </span>
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
import Checkbox from '../components/CheckboxButton.vue';

export default {
  name: 'PlanOne',
  data() {
    return {
      nome: '',
      celular: '',
      email: '',
      senha: '',
      nomeSite: '',
      mensagem: '',
      checked: false
    }
  },
  computed: {
    valid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
  },
  methods: {
    criarConta() {
      axios
        .post('https://fakestoreapi.com/users', {
          name: this.nome,
          email: this.email,
          phone: this.celular,
          password: this.senha,
          confirmaSenha: this.senha,
          website: this.nomeSite,
        })
        .then((response) => {
          console.log(response.data);
          this.mensagem = 'Conta criada com sucesso!';
        })
        .catch((error) => {
          console.log(error);
          this.mensagem = 'Erro ao criar conta';
        });
    }
  },
  components: {
    SwitchPlanButton,
    Checkbox
  }
};
</script>

<style scoped>
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

.card-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 243px;
  font-size: 1.0rem;
  margin-top: 20px;
  border-radius: 6px;
  border: none;
}

.card-body {
  width: 100%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

img {
  float: right;
  margin-right: 720px;
  margin-top: 50px;
}

.align-right {
  text-align: right;
}
</style> 
