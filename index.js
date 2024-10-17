const livros = [
    {
        "nome": "nome",
        "autor": "autor",
        "id": "1",
        "genero": "1",
        "preco": "1",
        "capa": "./assets/image 1.png"
    },
    {
        "nome": "nome 2",
        "autor": "autor 2",
        "id": "2",
        "genero": "2",
        "preco": "2",
        "capa": "./assets/image 1.png"
    },
    {
        "nome": "nome 3",
        "autor": "autor 3",
        "id": "3",
        "genero": "3",
        "preco": "3.45",
        "capa": "./assets/image 1.png"
    }
]; // Puxa a Lista de livros

document.addEventListener('DOMContentLoaded', async () => {
    const divLivros = document.getElementById('divLivros');

    divLivros.style.display = "flex";
    livros.forEach((livro) => {
        const livroDiv = document.createElement('div');
        livroDiv.style.border = '2px solid black';
        livroDiv.style.height = 'auto';
        livroDiv.style.display = 'flex';
        livroDiv.style.flexDirection = 'column';
        livroDiv.style.alignItems = 'start';
        livroDiv.style.justifyContent = 'space-between';

        const img = document.createElement('img');
        img.src = livro.capa;
        img.alt = `Capa do livro ${livro.capa}`;
        img.style.width = '190px';
        img.style.height = '240px';

        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
            <h3>${livro.nome}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>ID: ${livro.id}</p>
            <p>Genero: ${livro.genero}</p>
            <p>Preco: R$ ${livro.preco}</p>
        `;
        infoDiv.style.margin = "5px";

        livroDiv.appendChild(img);
        livroDiv.appendChild(infoDiv);
        divLivros.appendChild(livroDiv);
    });
}); // Carrega os Livros em "Livros mais populares"
