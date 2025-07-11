<script setup>
import { ref } from "vue";
import MessageCard from "./MessageCard.vue";

const emit = defineEmits(["envelope-opened"]);
const isOpen = ref(false);
const slideCard = ref(false);
const hideEnvelope = ref(false);

function openEnvelope() {
  if (isOpen.value) return;
  isOpen.value = true;

  setTimeout(() => {
    slideCard.value = true; // Empieza a sacar la carta
    setTimeout(() => {
      // Oculta el sobre después de que la carta esté visible un rato
      hideEnvelope.value = true;
      emit("envelope-opened");
    }, 1500); // Tiempo aumentado para que la carta aparezca bien
  }, 1000);
}
</script>

<template>
  <div class="main-container">
    <h2 class="welcome-text">
      📬 ¡Hola te hice esta carta con mucho amor! 🤍✉️
    </h2>

    <div class="envelope-wrapper" @click="openEnvelope">
      <transition name="fade-scale">
        <div v-if="!hideEnvelope" class="envelope" :class="{ open: isOpen }">
          <!-- Texto simulado en el sobre -->
          <div class="envelope-text">
            <p>To: <strong>Minerva Pineda. 🤍✉️</strong></p>
            <br />
            <p>From: <strong>Juan Burgos.</strong></p>
          </div>

          <div class="stamp">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="90" height="90" rx="10" fill="white" />
              <path
                d="M50 30C44 20 30 30 40 45C50 60 60 45 70 30C60 25 56 20 50 30Z"
                fill="#c62828"
              />
            </svg>
          </div>

          <!-- Carta -->
          <div class="letter" :class="{ pulled: slideCard }">
            <MessageCard />
            <p class="emoji-footer">🎉✨😊</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-family: "Segoe Print", cursive;
}

.welcome-text {
  font-size: 1.2rem;
  color: #d64d45;
  margin-bottom: 12px;
  user-select: none;
}

.envelope-wrapper {
  width: 320px;
  height: 220px;
  perspective: 800px;
  cursor: pointer;
  user-select: none;
}

.envelope {
  position: relative;
  width: 100%;
  height: 100%;
  background: #cc4c3c;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(198, 64, 64, 0.6);
  transform-style: preserve-3d;
  transition: transform 1.2s ease-in-out;
  overflow: visible;
  backface-visibility: hidden; /* Oculta reverso */
}

.envelope.open {
  transform: rotateY(180deg); /* Giro horizontal */
}

/* Texto personalizado dentro del sobre */
.envelope-text {
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  z-index: 2;
}

.stamp {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  z-index: 4;
}
.stamp svg {
  width: 100%;
  height: 100%;
}

.letter {
  position: absolute;
  top: 25%;
  left: 50%;
  width: 90%;
  /* Carta girada para estar del lado trasero del sobre */
  transform: translate(-50%, 100%) rotateY(180deg);
  transition: transform 1.2s ease-in-out, opacity 1s ease;
  opacity: 0;
  z-index: 3;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.letter.pulled {
  /* Cuando se "jala" la carta, aparece y se posiciona bien */
  transform: translate(-50%, -60%) rotateY(0deg);
  opacity: 1;
}

.emoji-footer {
  margin-top: 12px;
  font-size: 1.5rem;
  text-align: center;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
