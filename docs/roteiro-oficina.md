# Roteiro da oficina: Mural de Eventos (45 min, em duplas)

Esta oficina é a parte prática do seminário de Vue. Vocês vão implementar **RF3, RF4 e RF5** do Mural de Eventos do Curso a partir do projeto base.

## Preparação (até 5 min)

```bash
git clone <url-do-repositorio-do-grupo>
cd mural-eventos-vue
git checkout start
npm install
npx json-server api/db.json --port 3000 &
npm run dev
```

- A API fica em `http://localhost:3000/eventos` e a aplicação no endereço que o Vite mostrar no terminal.
- A branch `start` já contém **RF1 e RF2 prontos** e os componentes de RF3 a RF5 criados, mas vazios.
- Versão de Node.js: conforme o `README.md`.

## Regras gerais

- Trabalhem em dupla e **alternem quem digita**.
- Usem **Composition API com `<script setup>`** em todos os componentes.
- Sem bibliotecas de componentes prontos. Usem o CSS do projeto base.
- Acessibilidade básica: todo campo com `<label>` associado, erros ligados ao campo com `aria-describedby`, botões com texto visível, navegação pelo teclado.
- Se travarem, troquem para a branch de solução do checkpoint anterior e sigam em frente:
  `git checkout checkpoint-1` (ou `checkpoint-2`).
- O grupo apresentador circula pela sala. Peçam ajuda levantando a mão.

## Referência rápida da API

| Método | Rota | Uso |
|---|---|---|
| GET | `/eventos` | Lista todos os eventos (RF1) |
| GET | `/eventos/:id` | Retorna um evento ou 404 (RF4) |
| POST | `/eventos` | Cria um evento; o `id` é gerado pela API (RF3) |

| Campo | Tipo | Regras |
|---|---|---|
| id | string | Gerado pela API |
| titulo | string | Obrigatório, mínimo de 5 caracteres |
| descricao | string | Opcional |
| data | string (aaaa-mm-dd) | Obrigatória e futura |
| local | string | Obrigatório |
| categoria | string | Palestra, Workshop, Minicurso ou Hackathon |

---

## Checkpoint 1: formulário de cadastro (RF3)

**Tempo sugerido:** 18 minutos
**Solução:** branch `checkpoint-1`

**Objetivo:** implementar `FormEvento.vue`, na rota `/eventos/novo`, com `v-model`, validação e envio à API.

**Conceitos praticados:** `reactive`, `v-model`, `computed` para os erros, `useRouter`.

**Passos:**

1. Criar um objeto `form` com `reactive` e ligar cada campo com `v-model`. Campos: título, descrição, data, local e categoria.
2. Calcular os erros com um `computed` que valida o formulário a cada alteração:
   - título obrigatório, com no mínimo 5 caracteres;
   - data obrigatória e futura;
   - local obrigatório;
   - categoria obrigatória;
   - descrição é opcional.
3. Exibir cada erro logo abaixo do seu campo com `v-if`, vinculado ao campo com `aria-describedby`.
4. Tratar o envio com `@submit.prevent`. Se não houver erros, enviar com `fetch` (método `POST`, corpo em JSON) para `/eventos`.
5. Após o envio bem-sucedido, redirecionar para a lista com `useRouter().push('/')`.

Dica: `.prevent` equivale a chamar `event.preventDefault()`.

```html
<form @submit.prevent="enviar">
  <!-- campos, labels e mensagens de erro -->
</form>
```

**Está pronto quando:**

- [ ] não é possível enviar o formulário com campos obrigatórios vazios ou com data passada;
- [ ] cada campo inválido mostra sua própria mensagem de erro, abaixo do campo;
- [ ] o novo evento aparece na lista após o cadastro;
- [ ] todos os campos têm `<label>` associado.

---

## Checkpoint 2: página de detalhe (RF4)

**Tempo sugerido:** 12 minutos
**Solução:** branch `checkpoint-2` (acumula o checkpoint 1)

**Objetivo:** implementar a rota `/eventos/:id` com busca do evento pelo parâmetro da URL.

**Conceitos praticados:** rotas dinâmicas, `useRoute`, `watch`, tratamento de 404.

**Passos:**

1. Registrar a rota `/eventos/:id` em `src/router/index.js`.
2. Ler o parâmetro com `useRoute().params.id`.
3. Buscar o evento (`GET /eventos/:id`) e usar `watch` sobre o parâmetro para buscar de novo se o `id` mudar sem o componente ser desmontado.
4. Tratar os três estados: carregando, evento encontrado e evento inexistente.
5. Usar `RouterLink` para o link "Voltar" para a lista, sem recarregar a página.

**Está pronto quando:**

- [ ] o título do card leva ao detalhe sem recarregar a página;
- [ ] acessar `/eventos/999` mostra "Evento não encontrado" e um link para voltar à lista;
- [ ] a página de detalhe tem o link "Voltar" para a lista.

---

## Checkpoint 3: interesses com Pinia (RF5)

**Tempo sugerido:** 15 minutos
**Solução:** branch `checkpoint-3` (acumula os checkpoints 1 e 2)

**Objetivo:** criar uma store global para os eventos de interesse e usá-la no cabeçalho, nos cards e no detalhe.

**Conceitos praticados:** `defineStore` no estilo setup, estado global, `computed` como getter.

**Passos:**

1. Criar `src/stores/interesses.js` com `defineStore('interesses', () => { ... })`.
2. Guardar os ids em um `ref([])` e expor `alternar(id)`, `temInteresse(id)` e um `computed` `total`.
3. Usar a store:
   - no **cabeçalho**, mostrando "Meus interesses: N";
   - no **botão dos cards** e no **detalhe**, alternando entre "Tenho interesse" e "Remover interesse".
4. Abrir as Vue DevTools e ver a store na aba **Pinia**.

**Está pronto quando:**

- [ ] o contador do cabeçalho muda imediatamente ao clicar no botão de um card;
- [ ] o botão alterna entre "Tenho interesse" e "Remover interesse" nos cards e no detalhe;
- [ ] o estado se mantém ao navegar entre lista e detalhe (não precisa persistir ao recarregar).

---

## Desafio extra (para quem terminar antes)

Extrair a busca de eventos para um composable `useEventos()` em `src/composables/`, retornando `{ eventos, carregando, erro }`. Compare com o custom hook do React: o que é igual e o que muda (por exemplo, a ausência das regras de ordem dos hooks)?

## Ao terminar

Avise o grupo apresentador. Cada checkpoint concluído é registrado para o fechamento do seminário.
