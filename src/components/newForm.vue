<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
/*  Declaração do router */

/*  Função para criar o formulário */

/* Variaveis para declarar o formulário, controlar o estado do envio e mensagem de erro */

/*  Função para enviar o formulário para a api via utilizando o axios*/

/*  Função para obter a data minima do formulário */
function obterDataMinima(){
  const amanha = new Date()
  amanha.setDate(amanha.getDate() + 1)

  const ano = amanha.getFullYear()
  let mes = amanha.getMonth() + 1
  let dia = amanha.getDate()

  console.log("Data antes da padronização" + ano + '-' + mes + '-' + dia)

  if(mes < 10){mes = '0' + mes}

  if(dia < 10){dia = '0' + dia}

  return ano + '-' + mes + '-' + dia 
}

/* Script para controlar quais campos foram acessados */


/*  Script para checar os campos */
const erros = computed(function() {
  const mensagens = {
    titulo: '',
    data: '',
    local: '',
    categoria: '',
  }

  const categorias = ['Palestra', 'Workshop', 'Minicurso', 'Hackathon']

  if(form.titulo.trim() === ''){
    mensagens.titulo = 'O titulo não pode estar vazio.'
  }

  if(form.data.trim() === ''){
    mensagens.data = 'A data não pode estar vazia.'
  }else if(dataMinima.value > form.data){
     mensagens.data = 'A data deve ser uma data futura, posterior a hoje.'
  }

  if (form.local.trim() === '') {
    mensagens.local = 'O local do evento não pode estar vazio.'
  }

  if (!categorias.includes(form.categoria)) {
    mensagens.categoria = 'Selecione uma das categorias.'
  }

  return mensagens
})


function mostrarErro(campo) {
  const mostrar = acessados.value[campo] || tentativaDeEnvio.value
  const possuiErro = erros.value[campo] !== ''

  return mostrar && possuiErro
}

</script>

<template>

    <h1>Cadastrar novo evento</h1>
    <form novalidate>
        <fieldset id="cadastrarEvento">
            <!-- Nas tags para enviar os dados de campos de texto utilizar .trim() ao final para não enviar espaços em branco-->
            <div>
                <label for="tituloEvento">Nome do evento:</label>
                <input id="tituloEvento" type="text" |tag para enviar o titulo| @blur="acessados.titulo = true" :aria-invalid="mostrarErro('titulo')" aria-describedby="erroTitulo" required />
                <p |tag| id="erroTitulo" class="erroCampo" aria-live="polite">
                  {{ erros.titulo }}
                </p>
            </div>

            <div>
                <label for="descricaoEvento">Descrição do evento:</label>
                <textarea
                id="descricaoEvento"
                |tag|
                rows="5"
                ></textarea>
            </div>

            <div>
                <label for="dataEvento">Data do evento:</label>
                <input id="dataEvento" |tag| type="date" :min="dataMinima" @blur="acessados.data = true" :aria-invalid="mostrarErro('data')" aria-describedby="erroData" required />
                <p |tag| id="erroData" class="erroCampo" aria-live="polite">
                  {{ erros.data }}
                </p>  
            </div>

            <div>
                <label for="localEvento">Local do evento:</label>
                <input id="localEvento" type="text" @blur="acessados.local = true" :aria-invalid="mostrarErro('local')" aria-describedby="erroLocal" required />
                <p id="erroLocal" class="erroCampo" aria-live="polite">
                  {{ erros.local }}
                </p>
            </div>

            <div>
                <label for="categoriaEvento">Categoria do evento:</label>
                <select id="categoriaEvento" @blur="acessados.categoria = true" :aria-invalid="mostrarErro('categoria')" aria-describedby="erroCategoria" required>
                <option disabled value="">Selecione a categoria</option>
                <option value="Palestra">Palestra</option>
                <option value="Workshop">Workshop</option>
                <option value="Minicurso">Minicurso</option>
                <option value="Hackathon">Hackathon</option>
                </select>
                <p id="erroCategoria" class="erroCampo" aria-live="polite">
                  {{ erros.categoria }}
                </p>
            </div>

            <button type="submit">
                {{ enviando ? 'Cadastrando...' : 'Cadastrar evento' }}
            </button>
        </fieldset>
        

        <!--Confirmação visual-->
        <p role="alert">{{ erro }}</p>
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

.erroCampo {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #b42318;
}

input[aria-invalid="true"], select[aria-invalid="true"], textarea[aria-invalid="true"] {
  border-color: #b42318;
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