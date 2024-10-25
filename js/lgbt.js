const lgbt = [
    {
        "nome": "Princesas mortas não se apaixonam",
        "autor": "Raíssa Selvaticci",
        "classificacao": "4.7",
        "id": "15",
        "genero": "Brochura",
        "preco": "45,00",
        "capa": "../assets/lgbt.png"
    },
    {
        "nome": "Minha versão de você",
        "autor": "Christina Lauren",
        "classificacao": "4.8",
        "id": "16",
        "genero": "Capa dura",
        "preco": "48,00",
        "capa": "../assets/lgbt 2.png"
    },
    {
        "nome": "Heartstopper (VOL.3)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "17",
        "genero": "Capa dura",
        "preco": "46,82",
        "capa": "../assets/lgbt 3.png"
    },
    {
        "nome": "Heartstopper (VOL.4)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "18",
        "genero": "Capa dura",
        "preco": "47,49",
        "capa": "../assets/lgbt 4.png"
    },
    {
        "nome": "Heartstopper (VOL.5)",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "19",
        "genero": "Capa dura",
        "preco": "59,00",
        "capa": "../assets/lgbt 5.png"
    },
    {
        "nome": "Nick e Charlie: Uma novela de Heartstopper",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "20",
        "genero": "Capa dura",
        "preco": "44,90",
        "capa": "../assets/lgbt 6.png"
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
        div.style.backgroundColor = 'white';

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

    ['divLGBT'].forEach((id) => {
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
    renderItems(lgbt, 'divLGBT');
});

window.addEventListener('resize', applyResponsiveLayout);
