<script setup>
import Flipbook from "flipbook-vue";

const pages = [
  '<div class="page-content">❤️ Hola amor,</div>',
  '<div class="page-content">Desde que llegaste a mi vida,<br>todo es mejor.</div>',
  '<div class="page-content">Eres mi lugar favorito 💌</div>',
  '<div class="page-content">Siempre tuyo,<br><strong>Tu Juan</strong></div>',
];
</script>

<template>
  <div class="letter-wrapper">
    <Flipbook
      :pages="pages"
      :maxShadowOpacity="0.5"
      class="flip-book"
      style="width: 300px; height: 400px"
    />
  </div>
</template>

<style scoped>
.letter-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.page-content {
  font-family: "Quicksand", sans-serif;
  background: white;
  width: 100%;
  height: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  color: #b63426;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
