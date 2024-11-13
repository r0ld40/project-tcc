function getCartItems() {
    const perfil = JSON.parse(localStorage.getItem('perfil')) || [];
    const cart = perfil.cart || [];
    return cart;
} // Puxa os items salvos no localStorage

function saveCartItems(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
} // salva os itens no localStorage

function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    console.log(items) // Mostra a lista atualizada do localStorage

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
            <button onclick='deleteItem("${item.id}")' style="margin-top: 25px; width: 80%; height: 30px;">
                <img src="../assets/delete.png" alt="delete" style="width:25px; height:25px">
            </button>
            <a href="../public/product.html" style="width: 100%;">
                <button onclick='knowMore(${JSON.stringify(item)})' style="margin-top: 10px; width:80%; height:45px; font-weight: bold; font-size: 18px;">
                    Saiba mais
                </button>
            </a>
        `;
        container.appendChild(div);
    });
} // Renderiza a lista de desejos

function knowMore(item) {
    localStorage.setItem('product', JSON.stringify(item));

    let product = JSON.parse(localStorage.getItem('product')) || [];

    console.log(product)
}

function deleteItem(itemId) {
    let cart = getCartItems();
    cart = cart.filter(item => item.id !== itemId); // Remove o item pelo ID
    saveCartItems(cart); // Atualiza o localStorage
    renderItems(cart, 'divDesejos'); // Renderiza a lista
    window.alert("Seu item foi removido com sucesso da sua lista de desejos!")
} // Exclui um item do carrinho

function applyResponsiveLayout() {
    const columns = window.innerWidth < 930 ? 1 : 3;
    const container = document.getElementById('divDesejos');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gap = '25px';
}

document.addEventListener('DOMContentLoaded', () => {
    applyResponsiveLayout();
    renderItems(getCartItems(), 'divDesejos'); 
});

window.addEventListener('resize', applyResponsiveLayout);
