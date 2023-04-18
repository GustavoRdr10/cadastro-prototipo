<template>
  <button @click="redirectToSignupPage"
    style="border: 1px solid black; background-color: white; border-radius: 5px; display: block; margin: 0 auto; font-size: 1.5em; padding: 10px 45px;">
    Trocar plano
  </button>
</template>
  
<script>
export default {
  methods: {
    redirectToSignupPage() {
      window.location.href = "/SignupPage";
    }
  }
}
</script>
  