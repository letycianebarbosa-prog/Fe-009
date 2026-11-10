
// BUG 1
function baixarCatalogo() {
    alert("Catálogo enviado com sucesso! Verifique sua caixa de entrada.");
}

// BUG 2
document.getElementById("leitor").addEventListener("change", saudarLeitor);

function saudarLeitor() {
    let campo = document.getElementById("leitor");
    let nome = campo.value;

    if (nome) {
        alert("Olá, " + nome + "! Que bom ter você na Lumina.");
    }
}

// BUG 3
document.getElementById("card-clube").addEventListener("mouseenter", destacarClube);

document.getElementById("card-clube").addEventListener("mouseleave", restaurarClube);

function destacarClube() {
    this.style.background = "#fef3c7";
    this.style.borderColor = "#d97706";
}

function restaurarClube() {
    this.style.background = "#ffffff";
    this.style.borderColor = "#e2e8f0";
}

// BUG 4
function aplicarCupomDesconto(valor) {
    const taxaDesconto = 0.15;
    let desconto = valor * taxaDesconto;
    let valorFinal = valor - desconto;
    return valorFinal;
}

function calcularCupom() {
    let valor = parseFloat(document.getElementById("valor-livro").value);
    let total = aplicarCupomDesconto(valor);

    document.getElementById("resultado-cupom").textContent =
        "Total com desconto: R$ " + total.toFixed(2);
}

document.getElementById("btn-cupom").addEventListener("click", calcularCupom);

// BUG 5
function contarCaracteresResenha(texto) {
    let contagem = 0;

    for (let i = 0; i < texto.length && i < 150; i++) {
        contagem = contagem + 1;
    }

    return contagem;
}

function atualizarContadorResenha() {
    let texto = document.getElementById("resenha").value;
    let total = contarCaracteresResenha(texto);
    let elemento = document.getElementById("contador-resenha");

    elemento.textContent = total + " / 150";

    console.log("Contador da resenha: " + total + " (esperado: " + texto.length + ")");
}

document.getElementById("resenha").addEventListener("input", atualizarContadorResenha);
