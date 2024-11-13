const form = document.getElementById('form');
const div = document.getElementById('cadastroP');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const perfil = JSON.parse(localStorage.getItem('perfil')) || {};
    const DataBase = JSON.parse(localStorage.getItem('DataBank')) || [];

    const exist = DataBase.find(user => user.email === email && user.password === password);

    if (exist) {
        alert('Login realizado com sucesso!');
        localStorage.setItem('perfil', JSON.stringify(exist));
        redirect();
    } else {
        // Caso de cadastro - verifica se os campos necessários foram preenchidos
        const name = document.getElementById('name') ? document.getElementById('name').value : null;
        
        if (!name || email === '' || password === '') {
            alert('Por favor, preencha todos os campos para cadastro.');
            return;
        }

        perfil.email = email;
        perfil.password = password;
        perfil.name = name;
        perfil.cart = [];
        perfil.id = DataBase.length;

        DataBase.push(perfil);

        localStorage.setItem('perfil', JSON.stringify(perfil));
        localStorage.setItem('DataBank', JSON.stringify(DataBase));

        alert('Cadastro realizado com sucesso!');
        redirect();
    }

    form.reset();
});

cadastro.addEventListener('click', (event) => {
    div.style.display = 'none';
    event.preventDefault();

    form.innerHTML = `
    <a href="./perfil.html">
        <img src="../assets/back.png" alt="back" id="back" width="25px">
    </a>    
    <h1>Cadastro</h1>
    <div class="divLabel">    
        <label for="name">Nome:</label>
        <input type="text" id="name">
    </div>
    <div class="divLabel">
        <label for="email">Email:</label>
        <input type="email" id="email"> 
    </div>
    <div class="divLabel">
        <label for="password">Senha:</label>
        <input type="password" id="password">
    </div>
    <button type="submit">Cadastrar</button>
    `;
});

function redirect() {
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem('perfil');
    alert('Saiu com sucesso!');
    handleLogin();
}

function handleLogin() {
    if (localStorage.getItem('perfil')) {
        div.style.display = 'none';
        const perfil = JSON.parse(localStorage.getItem('perfil'));

        form.innerHTML = `
            <a href="./index.html">
                <img src="../assets/home.png" alt="back" id="back" width="25px">
            </a>   
            <h2>Olá, ${perfil.name}</h2>
            <button onclick="logout()">Sair</button>
        `;
    } else {
        div.style.display = 'flex';
        form.innerHTML = `
            <a href="./index.html">
                <img src="../assets/home.png" alt="back" id="back" width="25px">
            </a>    
            <h1>Login</h1>
            <div class="divLabel">
                <label for="email">Email:</label>
                <input type="email" id="email"> 
            </div>
            <div class="divLabel">
                <label for="password">Senha:</label>
                <input type="password" id="password">
            </div>
            <button type="submit">Entrar</button>
        `;
    }
}

handleLogin();