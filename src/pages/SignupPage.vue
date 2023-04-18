<template>
  <body>

    <img src="../img/img.png" style="float: right; width: 200px; margin-right: 43%; margin-top: 50px;">

    <div style="display: flex; justify-content: center; align-items: center; height: 150px">
      <h1 style="text-align: center;">Você está muito próximo de mudar a forma de<br><span
          style="color: #FF1493; text-decoration: underline;">hospedar seu site</span></h1>
    </div>
    <div class="escolhaPlano">
      <p>Escolha seu plano</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-2">
        <div class="card" style="margin-top: 20px;">
          <div class="card-body">
            <h5 class="card-title">Hospedagem 1</h5>
            <h2>Grátis</h2>
            <p class="card-text">Você não paga nada para usar sem taxa de setup</p>
            <hr>
            <p class="card-text">Ideal para quem esta começando.</p>
            <hr>
            <card-button url="/PlanOne" text="ESCOLHER ESSE PLANO" />
            <p style="text-align:center; font-weight:bold; color:#4F4F4F; margin-top: 20px;">Seu site em servidores <u>no
                Estados
                Unidos</u>.
            </p>
            <p>✓ Servidores em nossos data center</p>
            <p>✓ APS, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2
              (medium trust) ou PHP 5.3,
              5.4, 5.5, 5.6 e 7.0;
            </p>
            <p>✓ 1 usuário de FTP e e-mails profissionais;</p>
            <p>✓ 1 contas de e-mails profissionais;</p>
            <p>✓ <u>1 subdomínio</u> gratuito;</p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Suporte 24 horas, 7 dias por semana grátis;
            </p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Aplicativos disponíveis;</p>
            <p>✓ Wordpress;</p>
            <p>✓ Drupal;</p>
            <p>✓ entre outros...</p>
            <p style="font-weight:bold; color:#4F4F4F">Você ainda tem</p>
            <p>✓ Webmail RoundCube;</p>
            <p>✓ AntiSpam;</p>
            <p>✓ Painel de gerenciamento de DNS;</p>
            <p>✓ Configuração de PHP personalizáveis;</p>
            <p>✓ Certificado SSL Grátis;</p>
            <p>✓ Transferência ilimitada.</p>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card" style="margin-top: 20px;">
          <div class="card-body">
            <h5 class="card-title">Hospedagem 2</h5>
            <h2><span class="currency">R$</span>499/mês</h2>
            <p class="card-text">cobrado mensalmente sem taxa de setup</p>
            <hr>
            <p class="card-text">Ideal para site com mais de 30k de visitas.</p>
            <hr>
            <card-button url="/PlanTwo" text="ESCOLHER ESSE PLANO" />
            <p style="text-align:center; font-weight:bold; color:#4F4F4F; margin-top: 20px;">Seu site em servidores <u>no
                Estados Unidos</u>.
            </p>
            <p>✓ Servidores em nosso de São Paulo;</p>
            <p>✓ APS, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2
              (medium trust) ou PHP 5.3,
              5.4, 5.5, 5.6 e 7.0;
            </p>
            <p>✓ 10 usuário de FTP para upload de download;</p>
            <p>✓ 30 contas de e-mails profissionais;</p>
            <p>✓ <u>10 bdomínio</u> gratuito;</p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Suporte 24 horas, 7 dias por semana grátis;
            </p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Aplicativos disponíveis;</p>
            <p>✓ Wordpress;</p>
            <p>✓ Drupal;</p>
            <p>✓ entre outros...</p>
            <p style="font-weight:bold; color:#4F4F4F">Migração Gratuita;</p>
            <p>✓ Migramos todos seus sites para nossos servidores;</p>
            <p style="font-weight:bold; color:#4F4F4F">Você ainda tem</p>
            <p>✓ Webmail RoundCube;</p>
            <p>✓ AntiSpam;</p>
            <p>✓ Painel de controle web;</p>
            <p>✓ Configurações de PHP personalizáveis;</p>
            <p>✓ Certificado SSL Grátis;</p>
            <p>✓ Transferência ilimitada.</p>
            <div style="position: relative; top: -1430px; left: 38px;">
              <span style="background-color: #32CD32; color: white; border-radius: 8px; padding: 3px 15px;">
                MAIS USADO
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card" style="margin-top: 20px;">
          <div class="card-body">
            <h5 class="card-title">Hospedagem 3</h5>
            <h2><span class="currency">R$</span>999/mês</h2>
            <p class="card-text">cobrado mensalmente sem taxa de setup</p>
            <hr>
            <p class="card-text">Ideal para site com mais de 60k de visitas.</p>
            <hr>
            <card-button url="/PlanTree" text="ESCOLHER ESSE PLANO" />
            <p style="text-align:center; font-weight:bold; color:#4F4F4F; margin-top: 20px;">Seu site em servidores <u>no
                Brasil</u>.</p>
            <p>✓ Servidores em nosso de São Paulo;</p>
            <p>✓ APS, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2
              (medium trust) ou PHP 5.3,
              5.4, 5.5, 5.6 e 7.0;
            </p>
            <p>✓ <u>Ilimitados</u>usuários de FTP para upload ou download;</p>
            <p>✓ <u>Ilimitadas</u>contas de e-mails profissionais;</p>
            <p>✓ <u>50 bdomínio</u>gratuito;</p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Suporte 24 horas, 7 dias por semana grátis;
            </p>
            <p style="text-align:center; font-weight:bold; color:#4F4F4F">Aplicativos disponíveis;</p>
            <p>✓ Wordpress;</p>
            <p>✓ Drupal;</p>
            <p>✓ entre outros...</p>
            <p style="font-weight:bold; color:#4F4F4F">Migração Gratuita;</p>
            <p>✓ Migramos todos seus sites para nossos servidores;</p>
            <p style="font-weight:bold; color:#4F4F4F">Você ainda tem</p>
            <p>✓ Webmail RoundCube;</p>
            <p>✓ AntiSpam;</p>
            <p>✓ Painel de gerenciamento de DNS;</p>
            <p>✓ Configuração de PHP personalizáveis;</p>
            <p>✓ Certificado SSL Grátis;</p>
            <p>✓ Transferência ilimitada.</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import CardButton from '@/components/PlanButton.vue'

export default {
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      plano: ''
    }
  },
  components: {
    CardButton,
  },
  methods: {
    submitForm() {
      // Adicione aqui a lógica para enviar os dados do formulário para a API
    }
  }
}
</script>
  
<style scoped>
body {
  background-color: #F5FFFA;
  padding-bottom: 120px;
  overflow-x: hidden;
}

div {
  clear: both;
}

h5.card-title {
  color: #696969;
  font-weight: bold;
  text-align: center;
}

h2 {
  color: #FF1493;
  font-size: 35px;
  margin-top: 25px;
  font-weight: bold;
  text-align: center;
}

hr {
  border: none;
  /* remove a borda padrão */
  border-top: 1px solid #696969;
  /* adiciona uma borda sólida na cor cinza */
  height: 1px;
  /* ajusta a altura da linha */
  margin: 20px 0;
  /* adiciona uma margem acima e abaixo da linha */
}

.card-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 10px;
  font-size: 1.0rem;
  margin-top: 20px;
  border-radius: 6px;
  border: none;
}

.currency {
  font-weight: normal;
  /* remove o negrito */
  font-size: 20px;
  /* define o tamanho da fonte */
}


.escolhaPlano {
  text-align: center;
  font-weight: bold;
}

.card-text {
  text-align: center;
  color: #696969;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

img {
  float: right;
  margin-right: 720px;
  margin-top: 50px;
  ;
}

input,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #0062cc;
}
</style>
  