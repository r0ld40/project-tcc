// Função para buscar os dados do JSON
const array = async () => {
    try {
        const response = await fetch("./Livros.json");
        if (!response.ok) {
            throw new Error(`Erro ao buscar o JSON: ${response.statusText}`);
        }
        const data = await response.json(); // Converte a resposta para JSON
        return data;
    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
};

// Carregar e exibir os livros após o DOM ser carregado
document.addEventListener('DOMContentLoaded', async () => {
    const divLivros = document.getElementById('divLivros');

    divLivros.style.display = "flex";

    try {
        const livros = await array(); 
        if (livros) {
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
        } else {
            divLivros.innerText = 'Nenhum livro encontrado.';
        }
    } catch (error) {
        divLivros.innerText = 'Erro ao carregar os livros.';
        console.error(error);
    }
});


// Mostra o array no console
array().then((data) => console.log(data));
