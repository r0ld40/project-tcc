const Hearts = [
    {
        "nome": "Heartstopper (VOL.1)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "9",
        "genero": "Capa dura",
        "preco": "45.55",
        "capa": "../assets/heartopper.png"
    },
    {
        "nome": "Heartstopper (VOL.2)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "10",
        "genero": "Capa dura",
        "preco": "59,13",
        "capa": "../assets/heartopper 2.png"
    },
    {
        "nome": "Heartstopper (VOL.3)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "11",
        "genero": "Capa dura",
        "preco": "46,82",
        "capa": "../assets/heartopper 3.png"
    },
    {
        "nome": "Heartstopper (VOL.4)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "12",
        "genero": "Capa dura",
        "preco": "47,49",
        "capa": "../assets/heartopper 4.png"
    },
    {
        "nome": "Heartstopper (VOL.5)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "13",
        "genero": "Capa dura",
        "preco": "59,00",
        "capa": "../assets/heartopper 5.png"
    },
    {
        "nome": "Nick e Charlie: Uma novela de Heartstopper",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "14",
        "genero": "Capa dura",
        "preco": "44,90",
        "capa": "../assets/heartopper 6.png"
    },
];

function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach((item) => {
        const div = document.createElement('div');
        div.style.width = '250px';
        div.style.height = '460px';
        div.style.border = '1px solid';
        div.style.padding = '10px';
        div.style.textAlign = 'center';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.backgroundColor = 'lightblue';

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
            <button onclick='AddToCart(${JSON.stringify(item)})' style="margin-top: 25px; width:80%;">
                <img src="../assets/cart.png" alt="cart" style="width:25px; height:25px">
            </button>
            <a href="../public/product.html" style="width: 100%;">
                <button onclick='knowMore(${JSON.stringify(item)})' style="margin-top: 10px; width:80%; height:45px; font-weight: bold; font-size: 18px;">
                    Saiba mais
                </button>
            </a>
        `;
        container.appendChild(div);
    });
}

function knowMore(item) {
    localStorage.setItem('product', JSON.stringify(item));

    let product = JSON.parse(localStorage.getItem('product')) || [];

    console.log(product)
}

function AddToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (!exists) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log(cart)
    window.alert("Seu item foi adicionado com sucesso a sua lista de desejos!")
}

function applyResponsiveLayout() {
    const columns = window.innerWidth < 930 ? 1 : 3;

    ['divHearts'].forEach((id) => {
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
    renderItems(Hearts, 'divHearts');
});

window.addEventListener('resize', applyResponsiveLayout);
