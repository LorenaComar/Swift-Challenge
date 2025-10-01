document.addEventListener("DOMContentLoaded", function () {
    // Validação do formulário de cadastro
    const cadastroForm = document.querySelector(".cadastro-form");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (!nome || !email || !cpf || !telefone || !senha) {
                alert("Por favor, preencha todos os campos do cadastro.");
                return;
            }

            // Ação após validação
            showToast("Cadastro realizado com sucesso!");
            //window.location.href = "index.html";
        });
    }

    // Validação do formulário de login
    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (!email || !senha) {
                alert("Por favor, preencha o e-mail e a senha.");
                return;
            }

            // Ação após validação
            showToast("Login realizado com sucesso!");
            //window.location.href = "index.html";
        });
    }

    function showToast(message) {
    var toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(function(){
    toast.className = toast.className.replace("show", "");
  }, 3000); // 3 segundos
}
});