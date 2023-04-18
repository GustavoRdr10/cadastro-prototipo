<template>
  <body>
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="d-flex">
        <button class="btn btn-lg btn-pink btn-circle mx-3" @click="goToLoginPage">DESKTOP</button>
        <button class="btn btn-lg btn-pink btn-circle mx-3" @click="goToMobilePage">SUGESTÃO MOBILE</button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  methods: {
    goToLoginPage() {
      this.$router.push('/login');
    },
    goToMobilePage() {
      this.$router.push('/MobilePage');
    }
  }
};
</script>

<style scoped>
body {
  background-color: #F5FFFA;
}

.btn-pink {
  background-color: #FF1493 !important;
  color: #FFFFFF !important;
}

.btn-circle {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: none;
}
</style>
