function getProduct() {
    const product = JSON.parse(localStorage.getItem('product')) || [];
    return product;
} // Puxa os items salvos no localStorage

function saveProduct(product) {
    localStorage.setItem('product', JSON.stringify(product));
} // salva os itens no localStorage

const allLivros = [
    {
        "nome": "Os dois morrem no final",
        "texto": "exemplo",
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
        "nome": "Bola de três",
        "autor": "Luíza Carolina Silva",
        "classificacao": "4.8",
        "id": "17",
        "genero": "Capa dura",
        "preco": "42,27",
        "capa": "../assets/lgbt 3.png"
    },
    {
        "nome": "Blackout a New York",
        "autor": "Dhanielle Clayton",
        "classificacao": "4.7",
        "id": "18",
        "genero": "Capa comum",
        "preco": "46,10",
        "capa": "../assets/lgbt 4.png"
    },
    {
        "nome": "Garotas (in) Perfeitas ",
        "autor": "Raíssa Selvaticci",
        "classificacao": "4.2",
        "id": "19",
        "genero": "eBook",
        "preco": "10,99",
        "capa": "../assets/lgbt 5.png"
    },
    {
        "nome": "Sempre em frente",
        "autor": "Rainbow Rowell",
        "classificacao": "4.8",
        "id": "20",
        "genero": "eBook",
        "preco": "10.47",
        "capa": "../assets/lgbt 6.png"
    },
]

const formulario = document.getElementById('search');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('input').value.trim();
  const divResultados = document.getElementById('div-resultados');

  if (input === '') {
    divResultados.innerHTML = "Por favor, preencha todos os campos.";
    return;
  }

  const livrosEncontrados = allLivros.filter(livro => 
    livro.nome.toLowerCase().includes(input.toLowerCase())
  );

  const div = document.getElementById('resul');

  if (livrosEncontrados.length > 0) {

    div.innerHTML = `<p style="margin: 20px;">Resultados para "${input}":</p>`;

    divResultados.innerHTML += livrosEncontrados.map(livro => `
        <div style="width: 250px; height: 460px; border: 1px solid; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; background-color: lightblue;">
            <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;">
                <img src="${livro.capa}" alt="${livro.nome}" style="width:150px; height:200px;">
                <h3>${livro.nome}</h3>
                <div style="width: 240px;">
                    <p>Autor: ${livro.autor}</p>
                    <p>Gênero: ${livro.genero}</p>
                    <p>Preço: R$ ${livro.preco.replace('.', ',')}</p>
                </div>
            </div>
            <button onclick='AddToCart(${JSON.stringify(livro)})' style="margin-top: 25px; width:80%;">
                <img src="../assets/cart.png" alt="cart" style="width:25px; height:25px">
            </button>
            <a href="../public/product.html" style="width: 100%; display: flex; justify-content: center;">
                <button onclick='knowMore(${JSON.stringify(livro)})' style="margin-top: 10px; width:80%; height:45px; font-weight: bold; font-size: 18px; color: black;">
                    Saiba mais
                </button>
            </a>
        </div>
    `).join('');
  } else {
    div.innerHTML = "<p style='margin: 20px;'>Nenhum livro encontrado.</p>";
  }

  formulario.reset();
});

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
                    <p style="width: 100%; display: flex; justify-content: center; font-weight: bold;">
                        ${product.texto}
                    </p>
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
