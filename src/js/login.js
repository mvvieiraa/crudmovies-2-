console.log("JS carregou!"); // <-- TESTE

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

if (!form) {
    console.error("Formulário NÃO encontrado!");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
        return;
    }

    alert("Login realizado com sucesso!");
    form.submit();
});
