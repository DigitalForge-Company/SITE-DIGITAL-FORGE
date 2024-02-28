const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const empresa = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const senha = document.querySelector("input[type='password']").value;

    // Validação de dados

    if (!empresa || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    // Fazer login com API

    // Redirecionar para o dashboard

    alert("Login efetuado com sucesso!");
});
