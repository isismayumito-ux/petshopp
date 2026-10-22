function comprar(item, preco) {
    alert("🛍️ Carrinho: " + item + " adicionado!\nValor: R$ " + preco.toFixed(2));
    
    if (preco > 100.00) {
        alert("🎉 Parabéns! Este item tem frete grátis.");
    }
}

function agendar(servico, preco) {
    alert("📅 Agendamento solicitado: " + servico + "\nValor estimado: R$ " + preco.toFixed(2));
}