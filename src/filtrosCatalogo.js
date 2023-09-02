const catalogoProdutos = document.getElementById('container-produto');

function esconderMasculinos() {
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName('masculino'));

    for(const produto of produtosMasculinos) {
        produto.classList.add("hidden");
    }
}

function esconderFemininos() {
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName('feminino'));

    for(const produto of produtosFemininos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById('exibir-femininos').addEventListener("click", esconderMasculinos);
    document.getElementById('exibir-masculinos').addEventListener("click", esconderFemininos);
}

// parei em 54m