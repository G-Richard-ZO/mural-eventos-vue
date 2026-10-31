<script setup>
import { ref } from 'vue'
import axios from 'axios'

function criarFormulario() {
  return {
    titulo: '',
    descricao: '',
    data: '',
    local: '',
    categoria: '',
  }
}

const evento = ref(criarFormulario())
const enviando = ref(false)
const erro = ref('')
const sucesso = ref('')

async function cadastrarEvento() {
  if (enviando.value) return

  enviando.value = true
  erro.value = ''
  sucesso.value = ''

  try {
    await axios.post('http://localhost:3000/eventos', { ...evento.value })

    sucesso.value = 'Evento cadastrado com sucesso!'
    evento.value = criarFormulario()
  } catch {
    erro.value = 'Não foi possível cadastrar. Verifique se a API está rodando.'
  } finally {
    enviando.value = false
  }
}
</script>

<template>

    <h1>Cadastrar novo evento</h1>
    <form @submit.prevent="cadastrarEvento">
        <fieldset id="cadastrarEvento">
            <div>
                <label for="tituloEvento">Nome do evento:</label>
                <input id="tituloEvento" v-model.trim="evento.titulo" required />
            </div>

            <div>
                <label for="descricaoEvento">Descrição do evento:</label>
                <textarea
                id="descricaoEvento"
                v-model.trim="evento.descricao"
                rows="5"
                ></textarea>
            </div>

            <div>
                <label for="dataEvento">Data do evento:</label>
                <input id="dataEvento" v-model="evento.data" type="date" required />
            </div>

            <div>
                <label for="localEvento">Local do evento:</label>
                <input id="localEvento" v-model.trim="evento.local" required />
            </div>

            <div>
                <label for="categoriaEvento">Categoria do evento:</label>
                <select id="categoriaEvento" v-model="evento.categoria" required>
                <option disabled value="">Selecione a categoria</option>
                <option value="Palestra">Palestra</option>
                <option value="Workshop">Workshop</option>
                <option value="Minicurso">Minicurso</option>
                <option value="Hackathon">Hackathon</option>
                </select>
            </div>

            <button type="submit">
                {{ enviando ? 'Cadastrando...' : 'Cadastrar evento' }}
            </button>
        </fieldset>
        

        <!--Confirmação visual-->
        <p v-if="erro" role="alert">{{ erro }}</p>
        <p v-if="sucesso" role="status">{{ sucesso }}</p>
    </form>

</template>

<style scoped>
</style>