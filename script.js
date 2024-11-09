// EFEITO SCROLL
function scrollToContent(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const conteudo = document.getElementById('conteudo');
    conteudo.scrollIntoView({ behavior: 'smooth' }); // Executa a rolagem suave
}

// EFEITO MUDAR DE ABA

let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Não me abandone (╥_╥)";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})

// BUSCAR CARD

const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const searchTerm   
 = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector('h3').textContent.toLowerCase();

    if (cardTitle.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});