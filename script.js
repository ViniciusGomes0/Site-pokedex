function search() {
    var query = document.getElementById("search-input").value;
    if (query) {
        alert("Você pesquisou por: " + query);
        // Aqui você pode adicionar lógica para enviar a pesquisa para um servidor ou redirecionar a página
        // Exemplo de redirecionamento: window.location.href = "https://www.exemplo.com/busca?q=" + query;
    } else {
        alert("Por favor, digite algo para pesquisar.");
    }
}