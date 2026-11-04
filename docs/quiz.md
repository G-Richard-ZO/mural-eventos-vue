# Quiz: Vue (5 questões)

Seminário: Vue - Reatividade automática, Single File Components e adoção progressiva
Formato: múltipla escolha aplicada no Kahoot. As questões testam conceitos, não sintaxe decorada.

As alternativas seguem a ordem das cores do Kahoot: A (vermelho), B (azul), C (amarelo), D (verde).

---

## Questão 1: ref ou reactive?

Um aluno escreveu `const { nome } = estado`, sendo `estado` um objeto `reactive`. O que acontece quando `estado.nome` muda?

- A) `nome` continua acompanhando o objeto e atualiza sozinho
- B) `nome` fica com uma cópia e deixa de acompanhar o objeto
- C) O Vue mostra um erro e interrompe o programa
- D) O Vue refaz a desestruturação a cada mudança

**Gabarito: B**

**Justificativa:** ao desestruturar, `nome` recebe uma cópia do valor (uma string, que é primitivo) e deixa de passar pelo Proxy do `reactive`. O Vue não rastreia mais essa variável, e nenhum erro é lançado, o que torna o problema difícil de perceber. A correção é `toRefs(estado)`, que cria um `ref` ligado a cada propriedade, ou usar `ref` como padrão. A alternativa C está errada porque o código roda normalmente, e a D descreve um comportamento que o Vue não tem.

---

## Questão 2: computed

Qual é a forma mais adequada de obter a lista de eventos filtrada pelo texto da busca?

- A) Um `computed`, que calcula a lista a partir da busca e dos eventos
- B) Um `onMounted` que filtra a lista quando a página abre
- C) Um `watch` que reescreve a lista a cada tecla digitada
- D) Um segundo `ref`, copiado à mão a cada tecla digitada

**Gabarito: A**

**Justificativa:** a lista filtrada é um valor **derivado** de outros dados (a busca e os eventos). É para isso que serve o `computed`: ele rastreia suas dependências, guarda o resultado em cache e só recalcula quando a busca ou a lista mudam. O `onMounted` (B) roda uma única vez, então a lista não acompanharia a digitação. O `watch` (C) serve para efeitos colaterais, como buscar dados, e não para derivar valores. O segundo `ref` (D) cria uma cópia que precisa ser sincronizada manualmente e pode sair de sincronia.

---

## Questão 3: v-model

O que o `v-model` faz em um campo de texto?

- A) Mostra o valor do dado no campo, mas só em um sentido
- B) Envia o texto digitado para a API a cada tecla
- C) Valida o texto e mostra a mensagem de erro
- D) Mantém o campo e o dado sincronizados nos dois sentidos

**Gabarito: D**

**Justificativa:** o `v-model` faz o two-way binding: quando a variável muda, o campo é atualizado; quando a pessoa digita, a variável é atualizada. Por baixo, num campo de texto, ele equivale a `:value="busca"` mais `@input="busca = $event.target.value"`. No React isso exige `value` e `onChange` em cada campo. A alternativa A descreve só o `:value` (v-bind), e B e C são responsabilidades de outro código (fetch e validação), que o `v-model` não executa.

---

## Questão 4: props e emit

Como o `CardEvento` (filho) avisa a lista (pai) que a pessoa clicou em "Tenho interesse"?

- A) Alterando diretamente a prop que recebeu do pai
- B) Chamando `defineProps` de novo com outro valor
- C) Emitindo um evento com `emit`, que o pai escuta
- D) Recarregando a página para o pai perceber

**Gabarito: C**

**Justificativa:** no Vue os dados descem por props e os eventos sobem por `emit`. O filho declara o evento com `defineEmits` e o dispara com `emit('interesse', props.evento.id)`; o pai escuta com `@interesse="alternar"`. A prop é somente leitura para o filho, então alterá-la (A) quebra o fluxo de dados. `defineProps` (B) apenas declara quais props o componente recebe, e recarregar a página (D) destruiria o estado da SPA.

---

## Questão 5: Pinia

O cabeçalho, os cards e o detalhe precisam do mesmo contador e não são pai e filho. Qual a melhor solução?

- A) Passar props por todos os componentes do caminho
- B) Criar uma store do Pinia que os três usam
- C) Guardar um `ref` separado dentro de cada componente
- D) Usar `watch` em cada componente para copiar o valor

**Gabarito: B**

**Justificativa:** a store do Pinia é a solução oficial de estado global: uma única fonte de dados compartilhada. Ela usa os mesmos `ref` e `computed` dos componentes, e qualquer componente chama `useInteresses()` para ler ou alterar os mesmos dados, sem relação de pai e filho. Passar props por todos os níveis (A) é trabalhoso e frágil. Um `ref` em cada componente (C) cria cópias independentes, e copiar valores com `watch` (D) é uma sincronização manual que complica o código e pode falhar.
