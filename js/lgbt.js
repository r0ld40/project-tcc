const lgbt = [
    {
        "nome": "Princesas mortas não se apaixonam",
        "texto" : "Nascida na família real britânica, Amélia Mountbatten Wales jamais seria uma adolescente comum. Foi por isso que criou Holy, um disfarce perfeito para explorar Londres sem o peso dos deveres reais. A farsa e a realidade vividas pela princesa pareciam incapazes de colidir até conhecer, sob o disfarce de Holy, Roma Borges, brasileira recém-chegada à Inglaterra e filha do detetive-chefe da Scotland Yard",
        "autor": "Raíssa Selvaticci",
        "classificacao": "4.7",
        "id": "15",
        "genero": "Brochura",
        "preco": "45,00",
        "capa": "../assets/lgbt.png"
    },
    {
        "nome": "Minha versão de você",
        "texto": "Há três anos a família de Tanner Scott se mudou da Califórnia para Utah, fazendo com que sua bissexualidade voltasse para o armário. Agora, com apenas mais um semestre até o fim das aulas no colegial e seu tão sonhado futuro em uma universidade longe da família, ele só deseja que o tempo passe mais depressa. Quando Autumn, sua melhor amiga, se inscreve na aula de escrita e o desafia a participar, Tanner não consegue recusar o convite, afinal de contas, quatro meses é tempo mais do que suficiente para escrever um livro, certo?",
        "autor": "Christina Lauren",
        "classificacao": "4.8",
        "id": "16",
        "genero": "Capa dura",
        "preco": "48,00",
        "capa": "../assets/lgbt 2.png"
    },
    {
        "nome": "Bola de três",
        "texto": "Arthur é o astro do time de basquete. Davi está sempre no topo do ranking de notas do terceiro ano. Dois garotos que nunca trocaram uma palavra sequer são atraídos para o universo um do outro por um boato que começa a circular pela escola: o de que Davi está a fim de Arthur.Para tirar essa história a limpo, Arthur vai conversar com Davi e acaba descobrindo, entre muitas outras coisas, que ele também joga basquete. Assim, o mundo dos dois se entrelaça.",
        "autor": "Luíza Carolina Silva",
        "classificacao": "4.8",
        "id": "17",
        "genero": "Capa dura",
        "preco": "42,27",
        "capa": "../assets/lgbt 3.png"
    },
    {
        "nome": "Blackout a New York",
        "texto": "Uma onda de calor causa um apagão em Nova York. Multidões se formam nas ruas, o metrô para de funcionar e o trânsito fica congestionado. Conforme o sol se põe e a escuridão toma conta da cidade, seis jovens casais veem outro tipo de eletricidade surgir no ar…Um primeiro encontro ao acaso. Amigos de longa data. Ex-namorados ressentidos. Duas garotas feitas uma para a outra. Dois garotos escondidos sob máscaras. Um namoro repleto de dúvidas.",
        "autor": "Dhanielle Clayton",
        "classificacao": "4.7",
        "id": "18",
        "genero": "Capa comum",
        "preco": "46,10",
        "capa": "../assets/lgbt 4.png"
    },
    {
        "nome": "Garotas (im) Perfeitas ",
        "texto": "Se o Ensino Médio fosse uma selva, Áustria Fontes seria um leão. Com um boletim cheio de notas impecáveis, rosto digno das capas de revista, um namoro perfeito e a dose de maldade necessária para se manter no topo, nada pode atrapalhar seu último ano no ensino médio — e sua carreira de miss em ascensão. Nada, exceto a morte misteriosa de seu namorado. Como todo garoto rico e popular, Hélia Golucci carregava a admiração e o ódio de toda a escola nas costas. Com uma lista enorme de desavenças, Áustria sabe que qualquer um em American Saint teria bons motivos para matá-lo — ainda que a polícia descarte a hipótese de assassinato",
        "autor": "Raíssa Selvaticci",
        "classificacao": "4.2",
        "id": "19",
        "genero": "eBook",
        "preco": "10,99",
        "capa": "../assets/lgbt 5.png"
    },
    {
        "nome": "Sempre em frente",
        "texto": "Simon Snow é o Escolhido. Segundo as lendas, ele é o feiticeiro que garantirá a paz no Mundo dos Magos. Isso seria extraordinário se Simon não fosse desastrado, esquecido e um feiticeiro pouco habilidoso, incapaz de controlar seus poderes. Ele está no penúltimo ano da Escola de Magia de Watford, e, ao lado de sua melhor amiga Penelope e sua namorada Agatha, já se meteu nas mais variadas aventuras e confusões ― algumas causadas por Baz, seu arqui-inimigo e colega de quarto, outras pelo Oco, um ser maligno que há tempos tenta acabar com Simon.",
        "autor": "Rainbow Rowell",
        "classificacao": "4.8",
        "id": "20",
        "genero": "eBook",
        "preco": "10.47",
        "capa": "../assets/lgbt 6.png"
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
