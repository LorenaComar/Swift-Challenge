const chatbox = document.querySelector('.robo-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const roboContainer = document.getElementById('roboContainer');
const closeChat = document.getElementById('closeChat');
const chatFloatBtn = document.getElementById('chatFloatBtn');


function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add(sender === 'bot' ? 'message-bot' : 'message-user');
    div.textContent = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function showInitialMessage() {
    
    if(chatbox.childElementCount === 0) {
        addMessage('Olá! 👋 Bem-vindo ao nosso chat! Estou aqui para te ajudar no que precisar. 😊', 'bot');
        addMessage('Em que posso ajudar?', 'bot');
    }
}


function handleUserMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;

    addMessage(msg, 'user');
    userInput.value = '';

    
    const botReply = 'Nosso suporte de atendimento também está disponível através do Whatsapp (11) 5555-9999';
    setTimeout(() => addMessage(botReply, 'bot'), 100); // resposta rápida
}


sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keydown', e => { if(e.key === 'Enter') handleUserMessage(); });


window.addEventListener('load', () => {
    roboContainer.style.display = 'flex';
    chatFloatBtn.style.display = 'none';
    showInitialMessage(); 
});


closeChat.addEventListener('click', () => {
    roboContainer.style.display = 'none';
    chatFloatBtn.style.display = 'flex';
});


chatFloatBtn.addEventListener('click', () => {
    roboContainer.style.display = 'flex';
    chatFloatBtn.style.display = 'none';
    showInitialMessage(); 
});
