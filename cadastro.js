<script>
const tabCadastro = document.getElementById('tabCadastro');
const tabLogin = document.getElementById('tabLogin');
const formTitulo = document.getElementById('formTitulo');
const botaoSubmit = document.getElementById('botaoSubmit');

const grupoNome = document.getElementById('grupoNome');
const grupoCPF = document.getElementById('grupoCPF');
const grupoTelefone = document.getElementById('grupoTelefone');

tabCadastro.addEventListener('click', () => {
tabCadastro.classList.add('active');
tabLogin.classList.remove('active');

formTitulo.textContent = 'Criar sua conta';
botaoSubmit.textContent = 'Cadastrar';

grupoNome.style.display = 'block';
grupoCPF.style.display = 'block';
grupoTelefone.style.display = 'block';
});

tabLogin.addEventListener('click', () => {
tabLogin.classList.add('active');
tabCadastro.classList.remove('active');

formTitulo.textContent = 'Entrar na sua conta';
botaoSubmit.textContent = 'Entrar';

grupoNome.style.display = 'none';
grupoCPF.style.display = 'none';
grupoTelefone.style.display = 'none';
});
</script>