function mostrarToast(mensagem, tipo = "sucesso") {
    let toast = document.getElementById("toast");
    toast.textContent = mensagem;

  // Altera a cor conforme o tipo
  toast.className = "show"; // sempre adiciona a classe show
    if (tipo === "erro") {
    toast.style.backgroundColor = "#e74c3c"; // vermelho
    } else {
    toast.style.backgroundColor = "#27ae60"; // verde
    }

    setTimeout(() => {
    toast.className = toast.className.replace("show", "");
    }, 3000);
}   

function tentarLogin() {
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    if (email === "" || senha === "") {
    mostrarToast("Preencha todos os campos!", "erro");
    return;
    }
    mostrarToast("Login Realizado!", "sucesso");
}

function tentarCadastro() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (nome === "" || email === "" || cpf === "" || telefone === "" || senha === "") {
        mostrarToast("Preencha todos os campos!", "erro");
        return;
    }

    // Aqui você pode colocar a lógica para enviar os dados do cadastro
    mostrarToast("Cadastro realizado com sucesso!", "sucesso");
}

document.getElementById('toggleSenha').addEventListener('click', function() {
    const senhaInput = document.getElementById('senha');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
    eyeOpen.classList.add('d-none');
    eyeClosed.classList.remove('d-none');
    } else {
    senhaInput.type = 'password';
    eyeOpen.classList.remove('d-none');
    eyeClosed.classList.add('d-none');
    }
});