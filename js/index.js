const livros = [
    {
        "nome": "Os dois morrem no final",
        "autor": "Adam Silvera",
        "classificacao": "4.7",
        "id": "1",
        "genero": "Brochura",
        "preco": "45.00",
        "capa": "../assets/livro 1.png"
    },
    {
        "nome": "Aritóteles e Dante Descobrem os segredos do universo",
        "autor": "Benjamin Alire Sáenz",
        "classificacao": "4.8",
        "id": "2",
        "genero": "Brochura",
        "preco": "48.00",
        "capa": "../assets/livro 2.png"
    },
    {
        "nome": "Os sete maridos de Evelyn Hugo",
        "autor": "Taylor Jenkins Reid",
        "classificacao": "4.8", 
        "id": "3",
        "genero": "Capa normal ",
        "preco": "42,27",
        "capa": "../assets/livro 3.png"
    },
    {
        "nome": "Luzes do Norte",
        "autor": "Giulianna Domingues",
        "classificacao": "4.7",
        "id": "4",
        "genero": "Capa comum",
        "preco": "46,10",
        "capa": "../assets/livro 4.png"
    },
    {
        "nome": "Rua do medo",
        "autor": "RL.Stine",
        "classificacao": "4.6",
        "id": "5",
        "genero": "Capa dura",
        "preco": "55.74",
        "capa": "../assets/livro 5.png"
    },
    {
        "nome": "O amor não é óbvio",
        "autor": "Elayne Baeta",
        "classificacao": "4.8",
        "id": "6",
        "genero": "Capa comum",
        "preco": "50,64",
        "capa": "../assets/livro 6.png"
    },
];

const Ebooks = [
    {
        "nome": "Outra cor para o Amor",
        "autor": "Mateus Melo",
        "classificacao": "4.2",
        "id": "7",
        "genero": "eBook",
        "preco": "5.99",
        "capa": "../assets/ebook 1.png"
    },
    {
        "nome": "Girls like Girls",
        "autor": "Hayley Kiyoko",
        "classificacao": "4.8",
        "id": "8",
        "genero": "eBook",
        "preco": "10.47",
        "capa": "../assets/ebook 2.png"
    },
];

function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach((item) => {
        const div = document.createElement('div');
        div.style.width = '250px';
        div.style.height = '400px';
        div.style.border = '1px solid';
        div.style.padding = '10px';
        div.style.textAlign = 'center';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';

        div.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
                <img src="${item.capa}" alt="${item.nome}" style="width:150px; height:200px;">
                <h3>${item.nome}</h3>
                <div style="width: 240px;">
                    <p>Autor: ${item.autor}</p>
                    <p>Gênero: ${item.genero}</p>
                    <p>Preço: R$ ${item.preco.replace('.', ',')}</p>
                </div>
            </div>
            <button onclick='AddToCart(${JSON.stringify(item)})' style="margin-top: 25px;">
                <img src="../assets/cart.png" alt="cart" style="width:25px; height:25px">
            </button>
        `;
        container.appendChild(div);
    });
}

function AddToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (!exists) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log(cart)
}

function applyResponsiveLayout() {
    const columns = window.innerWidth < 930 ? 1 : 3;

    ['divLivros', 'divEbooks'].forEach((id) => {
        const container = document.getElementById(id);
        if (container) {
            container.style.display = 'grid';
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            container.style.gap = '25px';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyResponsiveLayout();
    renderItems(livros, 'divLivros');
    renderItems(Ebooks, 'divEbooks');
});

window.addEventListener('resize', applyResponsiveLayout);
