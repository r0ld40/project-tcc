const livros = [
    {
        "nome": "Os dois morrem no final",
        "autor": "Adam Silvera",
        "classificacao": "4.7",
        "id": "1",
        "genero": "Brochura",
        "preco": "45.00",
        "capa": "./assets/livro 1.png"
    },
    {
        "nome": "Aritóteles e Dante Descobrem os segredos do universo",
        "autor": "Benjamin Alire Sáenz",
        "classificacao": "4.8",
        "id": "2",
        "genero": "Brochura",
        "preco": "48.00",
        "capa": "./assets/livro 2.png"
    },
    {
        "nome": "Os sete maridos de Evelyn Hugo",
        "autor": "Taylor Jenkins Reid",
        "classificacao": "4.8", 
        "id": "3",
        "genero": "Capa normal ",
        "preco": "42,27",
        "capa": "./assets/livro 3.png"
    },
    {
        "nome": "Luzes do Norte",
        "autor": "Giulianna Domingues",
        "classificacao": "4.7",
        "id": "4",
        "genero": "Capa comum",
        "preco": "46,10",
        "capa": "./assets/livro 4.png"
    },
    {
        "nome": "Rua do medo",
        "autor": "RL.Stine",
        "classificacao": "4.6",
        "id": "5",
        "genero": "Capa dura",
        "preco": "55.74",
        "capa": "./assets/livro 5.png"
    },
    {
        "nome": "O amor não é óbvio",
        "autor": "Elayne Baeta",
        "classificacao": "4.8",
        "id": "6",
        "genero": "Capa comum",
        "preco": "50,64",
        "capa": "./assets/livro 6.png"
    },
];

const Ebooks = [
    {
        "nome": "Outra cor para o Amor",
        "autor": "Mateus Melo",
        "classificacao": "4.2",
        "id": "1",
        "genero": "eBook",
        "preco": "5,99",
        "capa": "./assets/ebook 1.png"
    },
    {
        "nome": "Girls like Girls",
        "autor": "Hayley Kiyoko",
        "classificacao": "4.8",
        "id": "2",
        "genero": "eBook",
        "preco": "10.47",
        "capa": "./assets/ebook 2.png"
    },
];

function getScreenWidth() {
    const width = window.innerWidth;
    return width;
} // Captura o tamanho da tela

function applyResponsiveLayout() {
    const screenWidth = getScreenWidth(); // Captura a largura da tela
    const divLivros = document.getElementById('divLivros');
    const divEbooks = document.getElementById('divEbooks');

    if (screenWidth < 768) {
        divLivros.style.gridTemplateColumns = 'repeat(1, 1fr)';
        divEbooks.style.gridTemplateColumns = 'repeat(1, 1fr)';
    } else {
        divLivros.style.gridTemplateColumns = 'repeat(3, 1fr)';
        divEbooks.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }

    divLivros.style.display = 'grid';
    divLivros.style.gap = '25px'; 

    divEbooks.style.display = 'grid';
    divEbooks.style.gap = '25px';
}

document.addEventListener('DOMContentLoaded', () => {
    applyResponsiveLayout();

    if (applyResponsiveLayout() > 768) {
        // Função para renderizar livros
        livros.forEach((livro) => {
            const livroDiv = document.createElement('div');
            livroDiv.style.border = '1px solid black';
            livroDiv.style.maxWidth = '25vw';
            livroDiv.style.minWidth = '20vw';
            livroDiv.style.height = 'auto';
            livroDiv.style.display = 'flex';
            livroDiv.style.flexDirection = 'column';
            livroDiv.style.alignItems = 'center';
            livroDiv.style.textAlign = 'start';

            const img = document.createElement('img');
            img.src = livro.capa;
            img.alt = `Capa do livro ${livro.nome}`;
            img.style.width = '100%';

            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <h3>${livro.nome}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>${livro.genero}</p>
                <p>Preco: R$ ${livro.preco}</p>
            `;
            infoDiv.style.margin = "5px";
            infoDiv.style.width = "100%";
            infoDiv.style.display = "flex";
            infoDiv.style.flexDirection = "column";
            infoDiv.style.gap = "5px";

            livroDiv.appendChild(img);
            livroDiv.appendChild(infoDiv);
            divLivros.appendChild(livroDiv);
        });

        // Função para renderizar Ebooks
        Ebooks.forEach((ebook) => {
            const ebooksDiv = document.createElement('div');
            ebooksDiv.style.border = '1px solid black';
            ebooksDiv.style.maxWidth = '25vw';
            ebooksDiv.style.minWidth = '20vw';
            ebooksDiv.style.height = 'auto';
            ebooksDiv.style.display = 'flex';
            ebooksDiv.style.flexDirection = 'column';
            ebooksDiv.style.alignItems = 'center';
            ebooksDiv.style.textAlign = 'start';

            const img = document.createElement('img');
            img.src = ebook.capa;
            img.alt = `Capa do ebook ${ebook.nome}`;
            img.style.width = '100%';

            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <h3>${ebook.nome}</h3>
                <p>Autor: ${ebook.autor}</p>
                <p>${ebook.genero}</p>
                <p>Preco: R$ ${ebook.preco}</p>
            `;
            infoDiv.style.width = "100%";
            infoDiv.style.display = "flex";
            infoDiv.style.flexDirection = "column";
            infoDiv.style.gap = "5px";

            ebooksDiv.appendChild(img);
            ebooksDiv.appendChild(infoDiv);
            divEbooks.appendChild(ebooksDiv);
        });
    } else {
        // Função para renderizar livros
        livros.forEach((livro) => {
            const livroDiv = document.createElement('div');
            livroDiv.style.border = '1px solid black';
            livroDiv.style.maxWidth = '18vw';
            livroDiv.style.minWidth = '18vw';
            livroDiv.style.height = 'auto';
            livroDiv.style.display = 'flex';
            livroDiv.style.flexDirection = 'column';
            livroDiv.style.alignItems = 'center';
            livroDiv.style.textAlign = 'start';

            const img = document.createElement('img');
            img.src = livro.capa;
            img.alt = `Capa do livro ${livro.nome}`;
            img.style.width = '100%';

            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <h3>${livro.nome}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>${livro.genero}</p>
                <p>Preco: R$ ${livro.preco}</p>
            `;
            infoDiv.style.margin = "5px";
            infoDiv.style.width = "100%";
            infoDiv.style.display = "flex";
            infoDiv.style.flexDirection = "column";
            infoDiv.style.gap = "5px";

            livroDiv.appendChild(img);
            livroDiv.appendChild(infoDiv);
            divLivros.appendChild(livroDiv);
        });

        // Função para renderizar Ebooks
        Ebooks.forEach((ebook) => {
            const ebooksDiv = document.createElement('div');
            ebooksDiv.style.border = '1px solid black';
            ebooksDiv.style.maxWidth = '30vw';
            ebooksDiv.style.minWidth = '20vw';
            ebooksDiv.style.maxHeight = '80vh';
            ebooksDiv.style.display = 'flex';
            ebooksDiv.style.flexDirection = 'column';
            ebooksDiv.style.alignItems = 'center';
            ebooksDiv.style.textAlign = 'start';

            const img = document.createElement('img');
            img.src = ebook.capa;
            img.alt = `Capa do ebook ${ebook.nome}`;
            img.style.width = '100%';

            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <h3>${ebook.nome}</h3>
                <p>Autor: ${ebook.autor}</p>
                <p>${ebook.genero}</p>
                <p>Preco: R$ ${ebook.preco}</p>
            `;
            infoDiv.style.width = "100%";
            infoDiv.style.display = "flex";
            infoDiv.style.flexDirection = "column";
            infoDiv.style.gap = "5px";

            ebooksDiv.appendChild(img);
            ebooksDiv.appendChild(infoDiv);
            divEbooks.appendChild(ebooksDiv);
        });
    }
});

window.addEventListener('resize', applyResponsiveLayout);
