// Obtém referências aos elementos HTML
const chatbox = document.querySelector('.robo-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const closeButton = document.querySelector('.close-button'); // Obtém o botão de fechar
const roboContainer = document.querySelector('.robo-container'); // Obtém o contêiner principal

// Função para adicionar uma mensagem à caixa de chat
function addMessage(text, sender) {
    // Cria uma nova div para a mensagem
    const messageDiv = document.createElement('div');
    // Adiciona a classe CSS correta, 'message-bot' ou 'message-user'
    messageDiv.classList.add(sender === 'bot' ? 'message-bot' : 'message-user');
    // Define o texto da mensagem
    messageDiv.textContent = text;
    // Adiciona a mensagem ao final da conversa
    chatbox.appendChild(messageDiv);
    // Rola a conversa para o final
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Resposta inicial do chatbot
function showInitialMessage() {
    // Exibe a primeira mensagem após um pequeno atraso (0.5s)
    setTimeout(() => {
        addMessage('Olá! 👋 Bem-vindo ao nosso chat! Estou aqui para te ajudar no que precisar. 😊', 'bot');
        
        // Exibe a segunda mensagem após mais 1 segundo
        setTimeout(() => {
            addMessage('Como você gostaria de ser chamado?', 'bot');
        }, 1000);
    }, 500);
}

// Lógica para processar a resposta do usuário
function handleUserMessage() {
    // Pega o valor do campo de entrada e remove espaços extras
    const userMessage = userInput.value.trim();
    // Se a mensagem estiver vazia, não faz nada
    if (userMessage === '') return;

    // Adiciona a mensagem do usuário na tela
    addMessage(userMessage, 'user');
    // Limpa o campo de entrada
    userInput.value = '';

    // Lógica de resposta do chatbot (simplificada)
    let botResponse = '';
    
    if (userMessage.toLowerCase().includes('olá') || userMessage.toLowerCase().includes('oi')) {
        botResponse = 'Olá! Que bom que você está aqui. O que posso fazer por você?';
    } else if (userMessage.toLowerCase().includes('nome')) {
        botResponse = 'Eu sou um bot, não tenho nome, mas fui criado para te ajudar!';
    } else {
        botResponse = 'Hmm, não entendi. Por favor, reformule sua pergunta.';
    }

    // Adiciona a resposta do bot na tela após um pequeno atraso (1s)
    setTimeout(() => {
        addMessage(botResponse, 'bot');
    }, 1000);
}

// Fica "ouvindo" eventos do usuário
// Quando o botão de enviar é clicado, a função handleUserMessage é executada
sendButton.addEventListener('click', handleUserMessage);

// Quando a tecla "Enter" é pressionada no campo de entrada, a função é executada
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserMessage();
    }
});

// Quando a página é carregada, a função de boas-vindas é executada
window.addEventListener('load', showInitialMessage);

// --- Lógica para fechar o chat ---
if (closeButton && roboContainer) {
    closeButton.addEventListener('click', () => {
        roboContainer.style.display = 'none';
    });
}