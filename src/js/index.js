/*
  OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
  e mostrar o cartão correspondente ao que foi selecionado na listagem
      PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
      PASSO 2 - Identificar o evento de clique no elemento da listagem
      PASSO 3 - remover a classe aberto só do cartão que tá aberto
      PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
   cartão abrir
      PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
      PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
const cartoesPokedevs = document.querySelectorAll(".cartao-pokedev");

listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    EsconderCartaoAberto();

    const idPokedevClicado = mostrarCartaoIdPokedev(pokedev);

    removerClasseAtivoPokedev();

    adicionarPokedevNaListagem(idPokedevClicado);
  });
});

function adicionarPokedevNaListagem(idPokedevClicado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevClicado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function removerClasseAtivoPokedev() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoIdPokedev(pokedev) {
    const idPokedevClicado = pokedev.id;
    const idPokedevCartaoParaAbrir = "cartao-" + idPokedevClicado;
    const cartaoPokedevClicado = document.getElementById(idPokedevCartaoParaAbrir);
    cartaoPokedevClicado.classList.add("aberto");
    return idPokedevClicado;
}

function EsconderCartaoAberto() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

