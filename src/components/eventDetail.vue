<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import axios from 'axios'

/* Variavel para Router */


/* Variaveis para a função de busca */



/* Função para buscar os eventos */

/* Função para formatar a data */

function formatarData(data){
    const dataSeparada = data.split('-')
    return dataSeparada[2] + '/' + dataSeparada[1] + '/' + dataSeparada[0]
}

/* Função para observar a mudança do id e atualizar a rota */
watch(function(){
    return rota.params.id
    },
    buscarEvento,
    {immediate: true}
)

</script>

<template>
    <main class="detalhesEvento">
      <!-- Uso de condicionais -->
    <!-- Para status carregando -->
    <p role="status">
      Carregando evento…
    </p>
    <!-- Para status erro -->
    <p role="alert">
      {{ erro }}
    </p>

    <!-- Para quando encontrou o evento -->
    <article>
      <h1>{{ evento.titulo }}</h1>

      <p>
        <strong>Descrição:</strong>
        
      </p>

      <p>
        <strong>Data:</strong>
        
      </p>

      <p>
        <strong>Local:</strong>
        
      </p>

      <p>
        <strong>Categoria:</strong>
        
      </p>
    </article>

    <!-- Inserir link do Router para voltar para pagina de eventos-->
    
  </main>
    

</template>

<style scoped>
.detalhesEvento {
  max-width: 720px;
  margin: 32px auto;
  padding: 24px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  background-color: #fff;
  overflow-wrap: anywhere;
}

h1{
  margin-top: 0;
  color: #111;
  font-size: 28px;
}

p{
  color: #555;
}

a{
  display: inline-block;
  margin-top: 16px;
  color: #35495e;
}

a:focus-visible{
  outline: 2px solid #35495e;
  outline-offset: 3px;
}

.btVoltar{
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #222;
  cursor: pointer;
  text-decoration: none;
}

.btVoltar:hover {
  border-color: #222;
  background-color: #222;
  color: #fff;
}

.btVoltar:focus-visible{
  outline: 2px solid #333;
  outline-offset: 3px;
}
</style>