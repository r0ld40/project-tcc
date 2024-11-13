const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    window.alert('novo usario criado com sucesso');
});

cadastro.addEventListener('click', (event) => {
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
    <di class="divLabel">
        <label for="password">Senha:</label>
        <input type="password" id="password">
    </div>
    <button type="submit">Cadastrar</button>
    `
});