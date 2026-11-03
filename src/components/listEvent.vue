<script setup>
import CardEvento from "./eventCard.vue"
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useInteressesStores } from '../stores/interesses'

const props = defineProps({
    somenteInteresses: { type: Boolean, default: false },
})

const interesses = useInteressesStores()

const eventos = ref([])
const carregando = ref(true)
const erro = ref('')

const busca = ref('')
const categoriaSelecionada = ref('Todas')
const filtro = ref(false)

const eventosFiltrados = computed(() => {
    const textoBusca = busca.value.trim().toLowerCase()

    return eventos.value.filter((evento) => {
        const correspondeTitulo = evento.titulo.toLowerCase().includes(textoBusca)
        const correspondeCategoria = categoriaSelecionada.value === 'Todas' ||
            evento.categoria === categoriaSelecionada.value
        const correspondeInteresse = !props.somenteInteresses ||
            interesses.temInteresse(evento.id)

        return correspondeTitulo && correspondeCategoria && correspondeInteresse
    }).sort((a, b) => a.data.localeCompare(b.data))
})

function buscarEventos() {
    carregando.value = true
    erro.value = ''

    axios.get('http://localhost:3000/eventos')
        .then(function (resposta) {
            eventos.value = resposta.data
            carregando.value = false
        })
        .catch(function (error) {
            erro.value = 'Não foi possível carregar os eventos. Verifique se a API está em execução.'
            carregando.value = false
            console.error('Erro ao buscar:', error)
        })
}

onMounted(buscarEventos)
</script>

<template>
    <div id="menuEventos">
        <div id="top">
            <h1>{{ props.somenteInteresses ? 'Meus interesses' : 'Eventos' }}</h1>
            <button type="button" @click="filtro = !filtro">
                {{ filtro ? 'Ocultar filtros' : 'Ativar filtros' }}
            </button>
        </div>
        <div v-if="filtro === true" class="filtros">
            <div>
                <label for="busca">Buscar pelo título</label>

                <input id="busca" v-model="busca" type="search" placeholder="Digite o nome do evento" />
            </div>
            <div>
                <label for="categoria">Categoria</label>

                <select id="categoria" v-model="categoriaSelecionada" >
                    <option value="Todas">Todas</option>
                    <option value="Palestra">Palestra</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Minicurso">Minicurso</option>
                    <option value="Hackathon">Hackathon</option>
                </select>
            </div>
        </div>

        <p v-if="carregando" role="status">Carregando eventos…</p>

        <p v-else-if="erro" role="alert">{{ erro }}</p>

        <p v-else-if="eventosFiltrados.length === 0" role="status">
            {{ props.somenteInteresses ? 'Nenhum evento de interesse encontrado.' : 'Nenhum evento encontrado' }}
        </p>



        <ul v-else>
            <CardEvento v-for="evento in eventosFiltrados" :key="evento.id" :evento="evento">
            </CardEvento>
        </ul>
    </div>
</template>

<style scoped>

#menuEventos {
  margin: 32px 0 48px;
}

#top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
}

h1 {
  margin: 0;
  color: #111;
  font-size: 28px;
  line-height: 1.2;
}

ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

#menuEventos > p {
  margin: 0;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  color: #555;
}

#menuEventos > [role='alert'] {
  border-left: 3px solid #555;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #eaeaea;
}

.filtros > div {
  display: flex;
  flex-direction: column;
  flex: 1 1 220px;
  min-width: 0;
  gap: 6px;
}

label {
  font-size: 14px;
  font-weight: bold;
}

input, select {
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
  color: #222;
}

input::placeholder {
  color: #666;
}

@media (max-width: 700px) {
  ul {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 600px) {
  #menuEventos {
    margin-top: 24px;
  }

  h1 {
    font-size: 24px;
  }

  #top button {
    padding: 10px 12px;
    font-size: 14px;
  }

  .filtros {
    padding: 16px;
  }
}

</style>
