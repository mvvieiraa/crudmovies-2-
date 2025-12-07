function validateSignup() {
    // 1. Captura de Elementos
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob'); // Novo ID
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // 2. Obtenção de Valores (com trim para limpeza)
    const name = nameInput.value.trim();
    const dob = dobInput.value.trim(); // Data de nascimento
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // --- 3. Lógica de Validação ---

    // 3.1. Validação de Campos Vazios (Todos são obrigatórios)
    if (name === '' || dob === '' || email === '' || password === '') {
        alert('Erro: Por favor, preencha todos os campos do formulário.');
        return false;
    }

    // 3.2. Validação: Formato de Nome (mínimo 3 caracteres, para evitar vazio)
    if (name.length < 3) {
        alert('Erro: O Nome deve ter no mínimo 3 caracteres.');
        return false;
    }

    // 3.3. Validação: Formato de Aniversário (Exemplo básico 00/00/00)
    // Verifica se tem o formato XX/XX/XX (ex: 10/05/98) ou XX/XX/XXXX (ex: 10/05/1998)
    const dobPattern = /^(\d{2}\/\d{2}\/\d{2,4})$/; 
    if (!dobPattern.test(dob)) {
        alert('Erro: O formato da data de aniversário deve ser DD/MM/AA ou DD/MM/AAAA (ex: 01/01/2000).');
        return false;
    }

    // 3.4. Validação: Formato de Email (deve conter @ e .)
    if (!email.includes('@') || !email.includes('.')) {
        alert('Erro: O Email inserido é inválido. Verifique o formato.');
        return false;
    }

    // 3.5. Validação: Senha Mínima de 6 Caracteres
    if (password.length < 6) {
        alert('Erro: A Senha deve ter no mínimo 6 caracteres.');
        return false;
    }

    // Se todas as validações passarem: Sucesso
    alert('Cadastro validado com sucesso! (Simulação de envio)');
    
    // Retorna false para impedir o envio padrão e o recarregamento da página
    return false; 
}