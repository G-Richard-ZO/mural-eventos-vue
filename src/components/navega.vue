<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <nav>
        <img src="/UFMS.png">
        <button @click="router.push('/')">Eventos disponíveis</button>
        <button @click="router.push('/cadastro')">Adicionar eventos</button>
  </nav>
</template>

<style scoped>

nav {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

nav img {
  display: block;
  width: 64px;
  height: auto;
  margin-right: auto;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 16px;
  }

  nav img {
    grid-column: 1 / -1;
    justify-self: center;
    margin-right: 0;
  }

  button {
    padding: 10px 8px;
    font-size: 14px;
  }
}

</style>
