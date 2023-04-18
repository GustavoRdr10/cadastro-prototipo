<template>
  <button class="card-button" @click="redirectToUrl">{{ text }}</button>
</template>
  
<script>
export default {
  name: 'CardButton',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    redirectToUrl() {
      window.location.href = this.url;
    },
  },
};
</script>
  
<style scoped>
.card-button {
  background-color: #FF1493;
  color: white;
  padding: 10px 10px;
  font-size: 1.0rem;
  margin-top: 20px;
  border-radius: 6px;
  border: none;

}
</style>
  