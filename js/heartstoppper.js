const Hearts = [
    {
        "nome": "Heartstopper (VOL.1)",
        "texto": "Charlie Spring e Nick Nelson não têm quase nada em comum. Charlie é um aluno dedicado e bastante inseguro por conta do bullying que sofre no colégio desde que se assumiu gay. Já Nick é superpopular, especialmente querido por ser um ótimo jogador de rúgbi. Quando os dois passam a sentar um ao lado do outro toda manhã, uma amizade intensa se desenvolve, e eles ficam cada vez mais próximos.",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "9",
        "genero": "Capa dura",
        "preco": "45.55",
        "capa": "../assets/heartopper.png"
    },
    {
        "nome": "Heartstopper (VOL.2)",
        "texto": "No segundo volume da série Heartstopper, Charlie e Nick precisam entender o que um beijo significa para a relação dos dois — e, principalmente, para eles mesmos. Charlie e Nick são melhores amigos, mas tudo muda depois que eles se beijam em uma festa. Charlie acredita que cometeu um grande erro e arruinou a amizade dos dois para sempre, e Nick está mais confuso do que nunca.",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "10",
        "genero": "Capa dura",
        "preco": "59,13",
        "capa": "../assets/heartopper 2.png"
    },
    {
        "nome": "Heartstopper (VOL.3)",
        "texto": "Depois de entenderem o que sentiam um pelo outro, Charlie e Nick se tornaram oficialmente namorados, e cada dia é uma nova oportunidade para se conhecerem um pouco mais. Mas nem tudo é fácil, principalmente quando se trata de se assumir enquanto casal para o mundo.",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "11",
        "genero": "Capa dura",
        "preco": "46,82",
        "capa": "../assets/heartopper 3.png"
    },
    {
        "nome": "Heartstopper (VOL.4)",
        "texto": "Charlie e Nick já não precisam esconder de ninguém no colégio que estão namorando, e agora, mais do que nunca, Charlie quer finalmente dizer “Eu te amo”. O que parece um gesto simples se torna bem complicado quando sua ansiedade o faz questionar se Nick se sente da mesma forma…",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "12",
        "genero": "Capa dura",
        "preco": "47,49",
        "capa": "../assets/heartopper 4.png"
    },
    {
        "nome": "Heartstopper (VOL.5)",
        "texto": "Nick e Charlie estão mais apaixonados do que nunca. Eles já se declararam um para o outro, começaram a namorar, e Charlie está quase convencendo sua mãe a deixá-lo dormir na casa de Nick… Mas com a partida de Nick para a universidade no próximo ano, será que tudo está prestes a mudar?",
        "autor": "Alice Oseman",
        "classificacao": "4.9",
        "id": "13",
        "genero": "Capa dura",
        "preco": "59,00",
        "capa": "../assets/heartopper 5.png"
    },
    {
        "nome": "Nick e Charlie: Uma novela de Heartstopper",
        "texto": "Todo mundo sabe que Nick e Charlie são inseparáveis. Entre tardes jogando videogame, noites de filmes e conversas infinitas, não há nada que possa abalar o sentimento que um tem pelo outro.Com a partida de Nick para a universidade se aproximando, Charlie fica cada vez mais inseguro, afinal todos dizem que o primeiro amor quase nunca dura para sempre…",
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
