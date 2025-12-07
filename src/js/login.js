function handleSubmit(event) {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Simulação de Validação e Envio
    if (!document.getElementById('termos').checked) {
        alert('Você deve concordar com os Termos de Uso.');
        return;
    }

    console.log("Dados do Cadastro:");
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    
    // Aqui você enviaria os dados para o seu servidor (API/Backend)
    alert(`🥳 Cadastro de ${nome} realizado com sucesso! (Simulado)`);

    // Opcional: Limpar o formulário após o envio
    document.getElementById('cadastroForm').reset();