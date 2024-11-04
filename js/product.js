function getProduct() {
    const product = JSON.parse(localStorage.getItem('product')) || [];
    return product;
} // Puxa os items salvos no localStorage

function saveProduct(product) {
    localStorage.setItem('product', JSON.stringify(product));
} // salva os itens no localStorage

function renderItems(product, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    console.log("produto:", product) // Mostra a lista atualizada do localStorage

    const div = document.createElement('div');
    div.style.width = '90%';
    div.style.height = '90%';
    div.style.padding = '10px';
    div.style.textAlign = 'center';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';

    div.innerHTML = `
        <div style="width: 100%;height: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div style="width: 50%; height: 100%; display: flex; justify-content: center;">
                <img src="${product.capa}" alt="${product.nome}" style="width:70%;">
            </div>
            <div style="width: 50%; height: 100%; font-size: 20px; display: flex; justify-content: center; align-items: center;">
                <div style="width: 500px; height: 500px; border: 1px solid; padding: 5px; display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
                    <h3 style="font-size: 30px;">${product.nome}</h3>
                    <div style="width: 100%; display: flex; flex-direction: column; gap: 15px;">
                        <p>Autor: ${product.autor}</p>
                        <p>Gênero: ${product.genero}</p>
                        <p>Preço: R$ ${product.preco.replace('.', ',')}</p>
                    </div>
                    <button onclick='AddToCart(${JSON.stringify(product)})' style="margin-top: 25px; width:80%;">
                        <img src="../assets/cart.png" alt="cart" style="width:25px; height:25px">
                    </button>
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
} // Renderiza a lista de desejos

function AddToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (!exists) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log("Carrinho:",cart)
    window.alert("Seu item foi adicionado com sucesso a sua lista de desejos!")
}

function applyResponsiveLayout() {
    const container = document.getElementById('section-product');
    container.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    applyResponsiveLayout();
    renderItems(getProduct(), 'section-product'); 
});

window.addEventListener('resize', applyResponsiveLayout);
