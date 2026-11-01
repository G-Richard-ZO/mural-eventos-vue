<script setup>

const paginaAtual = defineModel('pagina')

</script>

<template>
    <nav>
    <button @click="paginaAtual = 'eventos'">Eventos disponíveis</button>
    <button @click="paginaAtual = 'form'">Adicionar eventos</button>
  </nav>
</template>

<style scoped>

</style>