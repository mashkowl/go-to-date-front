<script setup lang="ts">
import Form from "../modules/createDate/components/Form.vue";
</script>

<template>
  <section class="create-date">
    <h1>Опиши свидание</h1>

    <Form />

    <img class="cloud cloud_top" src="../assets/cloud.png" alt="cloud" />

    <img class="cloud cloud_bottom" src="../assets/cloud.png" alt="cloud" />
  </section>
</template>

<style scoped lang="scss">
.create-date {
  padding: 24px;
  background: $pink-1;
  height: 100dvh;
  width: 100vw;
  position: relative;

  h1 {
    @include h1;
    color: $pink-3;
    text-align: center;
  }

  h1,
  form {
    position: relative;
    z-index: 3;
  }
}

.cloud {
  position: absolute;
  width: 500px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &_top {
    top: -15px;
    transform: rotate(180deg) translateX(50%);
    animation: appearance-top 0.7s ease-in-out;
  }

  &_bottom {
    bottom: -15px;
    animation: appearance-bottom 0.7s ease-in-out;
  }
}

@keyframes appearance-top {
  0% {
    opacity: 0;
    top: -100%;
  }

  100% {
    top: -15px;
    opacity: 1;
  }
}

@keyframes appearance-bottom {
  0% {
    opacity: 0;
    bottom: -100%;
  }

  100% {
    bottom: -15px;
    opacity: 1;
  }
}
</style>
