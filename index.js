const array = async () => {
    try {
        const response = await fetch("./Livros.json");
        if (!response.ok) {
            throw new Error(`Erro ao buscar o JSON: ${response.statusText}`);
        }
        const data = await response.json(); // Converte para objeto/array
        return data; // Retorna o array de livros
    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
};

// Exibe os dados ao carregar o DOM
document.addEventListener('DOMContentLoaded', async () => {
    const divLivros = document.getElementById('divLivros');
    try {
        const livros = await array(); // Chama a função e espera a resposta
        if (livros) {
            // Itera pelo array e exibe os itens no HTML
            livros.forEach((livro) => {
                const p = document.createElement('p');
                p.innerText = `Título: ${livro.nome}, ID: ${livro.id}`;
                divLivros.appendChild(p);
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
