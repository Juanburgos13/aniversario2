<!-- App.vue actualizado -->
<script setup>
import { ref } from "vue";
import Envelope from "./components/Envelope.vue";
import MessageCard from "./components/MessageCard.vue";

const showEnvelope = ref(true);
</script>

<template>
  <div class="app-container">
    <Envelope v-if="showEnvelope" @envelope-opened="showEnvelope = false" />
    <MessageCard v-else />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #ffecec, #fff3f3);
  font-family: "Segoe Print", cursive;
}
</style>
