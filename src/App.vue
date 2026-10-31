<script setup>

import { ref } from 'vue'
import RF1 from './components/listEvent.vue'
import FORM from './components/newForm.vue'

const paginaAtual = ref('eventos')

</script>

<template>

  <nav>
    <button @click="paginaAtual = 'eventos'">Eventos disponíveis</button>
    <button @click="paginaAtual = 'form'">Adicionar eventos</button>
  </nav>
  
  <RF1 v-if="paginaAtual === 'eventos'" />
  <FORM v-if="paginaAtual === 'form'" />
</template>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

html, body{
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 100vh;
}

</style>
