<script setup>
import { ref } from "vue";

import foto1 from "../assets/juntos1.jpg";
import foto2 from "../assets/juntos2.jpg";
import foto3 from "../assets/ella.jpeg";
import foto4 from "../assets/tiamu.png";
import foto5 from "../assets/juntoAMiSobrino.jpeg";
import foto6 from "../assets/acostados.jpeg";
import foto7 from "../assets/no.jpeg";

const messages = [
  {
    html: `
      <p><strong>❤️ Hola amor se que tenemos problemas,</strong><br>
      Pero hoy quiero decirte lo mucho que significas para mí.<br><br>
      Desde que llegaste a mi vida, cada momento ha sido más especial.<br>
      Tu presencia transforma los días comunes en recuerdos inolvidables.</p>
      Las palabras sobran y solo Dios sabe lo muchisimo que te amo eres mi vida y te extraño mucho
      No quiero perderte amor.</p>
    `,
    image: foto1,
    alt: "Recuerdo juntos",
  },
  {
    html: `
      <p>🌟 Tus ojos son la cosa mas hermosa que e visto.<br><br>
      Me encanta la forma en que me miras, cómo me haces sentir en casa con solo una palabra ya que para mi casa no es un lugar mi lugar feliz si no estas tu en el.<br><br>
      Eres esa parte de mi mundo que da sentido a todo TE AMO MI SOL☀️.<br><br>
      Gracias por ser tú, por regalarme tanto amor sincero.</p>
    `,
    image: foto2,
    alt: "Tu sonrisa",
  },
  {
    html: `
      <p>💌 Gracias por estar a mi lado.<br><br>
      En las buenas y en las malas, tenerte cerca lo hace todo más fácil.<br>
      Quiero que sepas que siempre estaré aquí para ti, con todo mi amor y mi entrega.<br><br>

      Siempre quise que sea de la misma forma y siempre quise ser tu lugar seguro me averguenzo de no tratarte de la forma en que mereces me averguenzo de cumplirte todas mi promesas PERDON
    `,
    image: foto3,
    alt: "Te amo",
  },
  {
    html: `
      <p>💌 QUERIA ESTAR CONTIGO Y VER A MI AHIJADA CRECER JUNTO CON MI SOBRINO.<br><br>


        perdon
    `,
    image: foto5,
    alt: "Te amo",
  },
  {
    html: `
      <p>💌 Te extrano tanto que siento que me arde el pecho.<br><br>


        perdon
    `,
    image: foto6,
    alt: "Te amo",
  },
  {
    html: `
      <p>💌 No te rindas antes nosotros ese seria el camino facil<br><br>

        perdon
    `,
    image: foto7,
    alt: "Te amo",
  },
  {
    html: `
      <p>💌 AUN ASI TE DIGO QUE PODEMOS CAMBIAR Y MEJORAR.<br><br>
      NO SERA FACIL PERO CREO QUE ESTAMOS CADA VEZ MAS CERCA DE HACER NUESTRO PERFECTO.<br>
      Pero si no quieres lo acepetare aun que le dire a todo que eres una mentirosa por que me prometista una niña con tus ojos y un varoncito tambien😭.<br><br>

      te amo mi amor siempre seras tu la mujer que me hizo creer en el amor que me hizo mejorar aun si ya no me quieres te esperare a que vuelvas te escribo esto con los ojos llorosos y con el dolor de que no quieras
      pero respetare lo que decidas solo que no se como continuar sin ti bien lo dice romeo me enseñaste a querer pero no a estar sin ti 
      <strong>Siempre tuyo,</strong><br>Juan ✨</p>
    `,
    image: foto4,
    alt: "Te amo",
  },
];

const currentIndex = ref(0);

function nextMessage() {
  if (currentIndex.value < messages.length - 1) {
    currentIndex.value++;
  }
}

function previousMessage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
</script>

<template>
  <div class="paper-wrapper">
    <transition name="fade" mode="out-in">
      <div class="paper" :key="currentIndex">
        <div v-html="messages[currentIndex].html" class="text-content" />

        <img
          :src="messages[currentIndex].image"
          :alt="messages[currentIndex].alt"
          class="card-image"
        />

        <div class="heart-decoration">❤️</div>
      </div>
    </transition>

    <button
      class="nav-button left"
      @click="previousMessage"
      v-if="currentIndex > 0"
    >
      ◀
    </button>

    <button
      class="nav-button right"
      @click="nextMessage"
      v-if="currentIndex < messages.length - 1"
    >
      ▶
    </button>
  </div>
</template>

<style scoped>
.paper-wrapper {
  position: relative;
  width: 100%;
  max-width: 360px; /* iPhone 15 safe zone */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
}

.paper {
  background: #fffdf9;
  border: 2px solid #deb7a0;
  padding: 1.5rem 1.5rem;
  border-radius: 6px;
  font-family: "Segoe Print", "Quicksand", cursive;
  font-size: 1.05rem;
  color: #7a2e1d;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  width: 100%;
  line-height: 1.75;
  background-image: linear-gradient(
    to bottom,
    rgba(222, 183, 160, 0.06) 1px,
    transparent 1px
  );
  background-size: 100% 28px;
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.text-content {
  width: 100%;
}

.card-image {
  margin-top: 1rem;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  max-height: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Corazón decorativo animado */
.heart-decoration {
  position: absolute;
  bottom: 10px;
  right: 12px;
  font-size: 1.3rem;
  animation: heartbeat 1.2s infinite ease-in-out;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}

/* Botones de navegación */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #e3a59e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
}

.nav-button:hover {
  background: #d97d74;
}

.nav-button.left {
  left: -46px;
}

.nav-button.right {
  right: -46px;
}

/* Transición de carta */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
