<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

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

async function cadastrarEvento() {
  if (enviando.value) return

  enviando.value = true
  erro.value = ''

  try {
    await axios.post('http://localhost:3000/eventos', { ...evento.value })

    await router.push('/')
  } catch {
    erro.value = 'Não foi possível cadastrar. Verifique se a API está rodando.'
  } finally {
    enviando.value = false
  }
}

function obterDataMinima(){
  const amanha = new Date()
  amanha.setDate(amanha.getDate() + 1)

  const ano = amanha.getFullYear()
  let mes = amanha.getMonth() + 1
  let dia = amanha.getDate()

  console.log("Data antes da padronização" + ano + '-' + mes + '-' + dia)

  if(mes < 10){
    mes = '0' + mes 
  }

  if(dia < 10){
    dia = '0' + dia
  }

  console.log("Data depois da padronização" + ano + '-' + mes + '-' + dia)

  return ano + '-' + mes + '-' + dia 
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
                <input id="dataEvento" v-model="evento.data" type="date" :min="obterDataMinima()" required />
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
    </form>

</template>

<style scoped>
h1 {
  max-width: 720px;
  margin: 32px auto 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
  color: #111;
  font-size: 28px;
  line-height: 1.2;
}

form {
  max-width: 720px;
  margin: 0 auto 48px;
}

#cadastrarEvento {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  margin: 0;
  padding: 24px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  background-color: #fff;
}

#cadastrarEvento > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

label {
  font-size: 14px;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
  color: #222;
  font: inherit;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

textarea:focus-visible {
  outline: 2px solid #333;
  outline-offset: 3px;
}

button[type='submit'] {
  align-self: flex-start;
  margin-top: 6px;
  border-color: #222;
  background-color: #222;
  color: #fff;
}

button[type='submit']:hover {
  border-color: #444;
  background-color: #444;
}

form > p {
  margin: 16px 0 0;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  color: #555;
}

form > [role='alert'] {
  border-left: 3px solid #555;
}

@media (max-width: 600px) {
  h1 {
    margin-top: 24px;
    font-size: 24px;
  }

  #cadastrarEvento {
    gap: 16px;
    padding: 18px;
  }

  button[type='submit'] {
    width: 100%;
  }
}
</style>
