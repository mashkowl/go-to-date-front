<script setup lang="ts"></script>

<template>
  <section class="home-page">
    <div class="home-page__container">
      <img class="flower flower__1" src="../assets/flower-1.svg" alt="flower" />
      <img class="flower flower__2" src="../assets/flower-2.svg" alt="flower" />
      <img class="flower flower__3" src="../assets/flower-3.svg" alt="flower" />
      <img class="flower flower__4" src="../assets/flower-4.svg" alt="flower" />
      <img class="flower flower__5" src="../assets/flower-5.svg" alt="flower" />
      <img class="flower flower__6" src="../assets/flower-6.svg" alt="flower" />
      <RouterLink :to="{ name: 'CreateDate' }"
        >Пригласить на свидание</RouterLink
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-page {
  height: 100dvh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
}

a {
  background: $pink-2;
  padding: 12px 24px;
  border-radius: 8px;
  color: $white-ultra;
  @include accent-body;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  z-index: 2;
  position: relative;

  &:hover {
    box-shadow: 0 0 35px $pink-3;
    //animation: heartBeat 0.7s ease-in-out;
  }
}

@keyframes heartBeat {
  0% {
    padding: 12px 24px;
  }

  10% {
    padding: 15px 27px;
    font-size: 22px;
  }

  30% {
    padding: 18px 30px;
    font-size: 25px;
  }

  40% {
    padding: 15px 27px;
    font-size: 22px;
  }

  50% {
    padding: 12px 24px;
    font-size: 20px;
  }

  70% {
    padding: 15px 27px;
    font-size: 22px;
  }

  80% {
    padding: 18px 30px;
    font-size: 25px;
  }

  90% {
    padding: 15px 27px;
    font-size: 22px;
  }

  100% {
    padding: 12px 24px;
    font-size: 20px;
  }
}

.flower {
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;

  &__1 {
    opacity: 1;
    left: -30px;
    bottom: -4px;
    transform: rotate(-45deg);
    animation: flower-1 1s ease-in-out;
  }

  &__2 {
    opacity: 1;
    right: -31px;
    bottom: -10px;
    transform: rotate(61deg);
    animation: flower-2 1s ease-in-out;
  }

  &__3 {
    opacity: 1;
    left: 15px;
    bottom: 30px;
    transform: rotate(-9deg);
    animation: flower-3 1s ease-in-out;
  }

  &__4 {
    opacity: 1;
    right: 15px;
    bottom: 30px;
    transform: rotate(9deg);
    animation: flower-4 1s ease-in-out;
  }

  &__5 {
    opacity: 1;
    left: 77px;
    bottom: 30px;
    transform: rotate(13deg);
    animation: flower-5 1s ease-in-out;
  }

  &__6 {
    opacity: 1;
    right: 77px;
    bottom: 30px;
    transform: rotate(-7deg);
    animation: flower-6 1s ease-in-out;
  }
}

@keyframes flower-1 {
  0% {
    opacity: 0;
    left: 0;
    bottom: 0;
  }
}

@keyframes flower-2 {
  0% {
    opacity: 0;
    right: 0;
    bottom: 0;
  }
}

@keyframes flower-3 {
  0% {
    opacity: 0;
    left: 15px;
    bottom: 0;
  }
}

@keyframes flower-4 {
  0% {
    opacity: 0;
    right: 15px;
    bottom: 0;
  }
}

@keyframes flower-5 {
  0% {
    opacity: 0;
    right: 77px;
    bottom: 0;
  }
}

@keyframes flower-6 {
  0% {
    opacity: 0;
    right: 77px;
    bottom: 0;
  }
}
</style>
