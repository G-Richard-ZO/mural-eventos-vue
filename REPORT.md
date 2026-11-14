# Relatório Pós-Seminário Vue

## 1. Progresso nos Checkpoints da Oficina

A dinâmica durante a oficina de implementação foi adaptada de duplas para **3 participantes individuais**. Todos os participantes conseguiram algum progresso durante o desenvolvimento mas não concluíram totalmente as etapas. Ainda assim, houve evolução consistente na absorção dos conceitos:

* **Checkpoint 1 — Cadastro de Evento (`RF3`):**
  * *Progresso observado:* Um participante teve o avanço inicial limitado pela lentidão de inicialização da máquina; o segundo conseguiu estruturar as variáveis reativas (`reactive`) necessárias; e o terceiro avançou até a vinculação bidirecional das variáveis aos campos do formulário (`v-model`).
* **Checkpoint 2 — Detalhe do Evento (`RF4`):**
  * *Progresso observado:* Um participante estruturou as variáveis base do componente, enquanto outro avançou na implementação da função responsável pela manipulação/criação dos eventos.
* **Checkpoint 3 — Interesses com Pinia (`RF5`):**
  * *Progresso observado:* Foi a etapa de maior avanço coletivo da turma; todos os participantes conseguiram estruturar a base da *store* e a lógica inicial, restando apenas a integração final do botão de ação e a exibição do contador reativo no cabeçalho.

**Onde a turma mais travou:** A principal dificuldade se deu em interpretar o código-base pré-existente, mapear o fluxo entre os arquivos (`router`, `views` e `stores`) e traduzir o requisito de negócio para a estrutura antes de começar a codificar.


## 2. Dúvidas abordadas
* **Diferença prática entre `computed` e `watch`:** Um participante confundiu quando utilizar cada um para reagir a alterações de estado. Foi esclarecido que o `computed` serve para **derivar um novo valor visual** a partir de dados existentes (com cache automático, como filtrar a lista de eventos sem alterar o array original), enquanto o `watch` não retorna valores para a tela, servindo para **disparar efeitos colaterais** nos bastidores (como executar uma nova requisição `GET` quando o ID da rota muda).
* **Diferença prática entre `defineProps` e `defineEmits` na comunicação Pai-Filho:** Houve inversão dos conceitos. O `defineProps` atua apenas como canal de leitura para o pai enviar dados ao filho, enquanto o `defineEmits` funciona como um sinalizador para o filho notificar o pai sobre uma ação ocorrida (ex.: clique no botão de interesse), cabendo exclusivamente ao pai efetivar a alteração no estado principal.



## 3. Resultado do Quiz (Kahoot)
* **Desempenho geral:** O aproveitamento agregado da turma foi alto, demonstrando boa absorção dos fundamentos.
* **Questão com mais erros:** *"Como o componente filho (`CardEvento`) avisa o componente pai (`ListaEventos`) que o usuário clicou e marcou interesse?"*
  * *Resposta correta:* Emitindo um evento customizado com `defineEmits` (`emit`), que o componente pai escuta via diretiva `@`.
  * *Erro cometido:* Os participantes marcaram a alternativa que sugeria *"chamar `defineProps` novamente com outro valor"*.
  * *Hipótese sobre o motivo:* Não houve desconhecimento sobre quais ferramentas fazem a comunicação entre componentes, mas uma **inversão conceitual da direção do fluxo de dados** (*one-way data flow*). Como ambas as macros (`defineProps` e `defineEmits`) foram apresentadas em conjunto no mesmo bloco, ocorreu confusão entre o canal de descida de dados (Pai → Filho via *props*) e o canal de subida de eventos (Filho → Pai via *emits*).


## 4. O que o Grupo Mudaria
Os escopos teórico e prático abordaram todos os conceitos utilizados na oficina (`ref`, `computed`, diretivas, `Router` e `Pinia`). Contudo, se apresentássemos novamente, faríamos o seguinte ajuste:

1. **Aprofundar na estrutura preparada para a oficina:** Tirar uns minutos para aprofundar na estrutura e no código que já estava pronto, assim os participantes da oficina teriam um senso de direção mais afiado para a implementação, ganhando um pouco de tempo.
