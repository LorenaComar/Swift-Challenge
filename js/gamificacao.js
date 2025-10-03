
// Improved gamification script
const perguntas = {
  "Paleta de Cordeiro": {
    pergunta: "A paleta de cordeiro é retirada de qual parte do animal?",
    opcoes: ["Dianteiro", "Traseiro", "Costela"],
    resposta: "Dianteiro"
  },
  "Wagyu": {
    pergunta: "Qual é a principal característica do Wagyu?",
    opcoes: ["Marmoreio da carne", "Rapidez no crescimento", "Pouca gordura"],
    resposta: "Marmoreio da carne"
  },
  "Pato": {
    pergunta: "Qual prato francês é feito tradicionalmente com peito de pato?",
    opcoes: ["Magret de Canard", "Bouef Bourguignon", "Cassoulet"],
    resposta: "Magret de Canard"
  },
  "Carré Curto": {
    pergunta: "O Carré Curto geralmente é preparado de qual forma clássica?",
    opcoes: ["Assado", "Grelhado", "Cozido"],
    resposta: "Assado"
  },
  "Rã": {
    pergunta: "Em qual culinária é comum encontrar rã como prato típico?",
    opcoes: ["Francesa", "Italiana", "Japonesa"],
    resposta: "Francesa"
  },
  "Picanha Black": {
    pergunta: "A Picanha Black é conhecida principalmente por:",
    opcoes: ["Ser magra", "Ter alto marmoreio", "Vir do dianteiro"],
    resposta: "Ter alto marmoreio"
  },
  "Carré Francês": {
    pergunta: "O Carré Francês é famoso por sua apresentação. O que o caracteriza?",
    opcoes: ["Costelas limpas e expostas", "Corte sem osso", "Carne moída"],
    resposta: "Costelas limpas e expostas"
  },
  "Prime Rib": {
    pergunta: "O Prime Rib é retirado de qual região do boi?",
    opcoes: ["Traseiro", "Costela", "Acém"],
    resposta: "Costela"
  },
  "Coelho": {
    pergunta: "O coelho é muito consumido em qual região do mundo?",
    opcoes: ["Europa", "América do Sul", "Oriente Médio"],
    resposta: "Europa"
  }
};

let score = 0;
let respondidas = [];
let vidas = 3;
let streak = 0;
let timerInterval = null;
let countdown = 20; // seconds per question by default
const maxTime = 20;
const hintPenalty = 5; // seconds
const leaderboardKey = 'swift_leaderboard_v1';

// build map points dynamically so it's consistent with perguntas keys
function buildMapPoints() {
  const map = document.getElementById('huntMap');
  map.innerHTML = '';
  const positions = [
    {k: 'Paleta de Cordeiro', top: '10%', left: '40%'},
    {k: 'Wagyu', top: '10%', left: '72%'},
    {k: 'Pato', top: '28%', left: '90%'},
    {k: 'Carré Curto', top: '50%', left: '80%'},
    {k: 'Rã', top: '75%', left: '65%'},
    {k: 'Picanha Black', top: '75%', left: '45%'},
    {k: 'Carré Francês', top: '65%', left: '25%'},
    {k: 'Prime Rib', top: '45%', left: '10%'},
    {k: 'Coelho', top: '25%', left: '20%'}
  ];

  positions.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'map-point';
    btn.style.top = p.top;
    btn.style.left = p.left;
    btn.dataset.animal = p.k;
    btn.setAttribute('aria-label', p.k);
    btn.innerText = '●';
    btn.addEventListener('click', onMapPointClick);
    map.appendChild(btn);
  });
}

function onMapPointClick(e) {
  const btn = e.currentTarget;
  const animal = btn.dataset.animal;

  if (respondidas.includes(animal)) {
    showToast('⚠️ Você já respondeu esse ponto!');
    return;
  }

  openQuestion(animal);
}

function openQuestion(animal) {
  const q = perguntas[animal];
  document.getElementById('quizPergunta').innerText = q.pergunta;

  const opcoesBox = document.getElementById('quizOpcoes');
  opcoesBox.innerHTML = '';
  q.opcoes.forEach(op => {
    const button = document.createElement('button');
    button.className = 'btn btn-outline-dark m-2 opcao-btn';
    button.style.minWidth = '140px';
    button.innerText = op;
    button.onclick = () => verificarResposta(animal, op, q.resposta);
    opcoesBox.appendChild(button);
  });

  document.getElementById('quizBox').style.display = 'block';
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  countdown = maxTime;
  document.getElementById('timer').innerText = `${countdown}s`;
  timerInterval = setInterval(() => {
    countdown--;
    document.getElementById('timer').innerText = `${countdown}s`;
    if (countdown <= 0) {
      clearInterval(timerInterval);
      onTimeOut();
    }
  }, 1000);
}

function onTimeOut() {
  showToast('⏰ Tempo esgotado! Você perdeu uma vida.');
  vidas -= 1;
  streak = 0;
  updateLives();
  markCurrentPointWrong();
  closeQuestion();
  checkGameOver();
}

function markCurrentPointWrong() {
  // mark the last opened question button as wrong if any
  const last = document.querySelector('.map-point:not(.correct):not(.wrong)');
  if (last) {
    last.classList.add('wrong');
    respondidas.push(last.dataset.animal);
    updateProgress();
  }
}

function verificarResposta(animal, escolha, correta) {
  clearInterval(timerInterval);
  const botoes = document.querySelectorAll('.map-point');
  const botaoAtual = [...botoes].find(b => b.dataset.animal === animal);

  if (escolha === correta) {
    score += 10 + Math.max(0, countdown); // reward remaining seconds
    streak += 1;
    document.getElementById('correctSound').play();
    showToast('✅ Resposta correta! +' + (10 + Math.max(0, countdown)));
    botaoAtual.classList.add('correct');
  } else {
    vidas -= 1;
    streak = 0;
    document.getElementById('wrongSound').play();
    showToast('❌ Resposta errada! A correta é: ' + correta);
    botaoAtual.classList.add('wrong');
  }

  respondidas.push(animal);
  document.getElementById('score').innerText = score;
  document.getElementById('streak').innerText = streak;
  updateLives();

  updateProgress();

  closeQuestion();
  checkGameOver();
}

function closeQuestion() {
  document.getElementById('quizBox').style.display = 'none';
  clearInterval(timerInterval);
}

function updateLives() {
  const vidasEl = document.getElementById('vidas');
  vidasEl.innerText = '❤'.repeat(Math.max(0, vidas));
  if (vidas <= 0) vidasEl.innerText = '💀';
}

function updateProgress() {
  const progresso = (respondidas.length / Object.keys(perguntas).length) * 100;
  document.getElementById('progressBar').style.width = progresso + '%';
}

function checkGameOver() {
  if (respondidas.length === Object.keys(perguntas).length || vidas <= 0) {
    setTimeout(() => finishGame(), 400);
  }
}

function finishGame() {
  // show modal with results
  document.getElementById('finalScore').innerText = `Pontuação: ${score}`;
  const earned = calculateBadges();
  const earnedBadgesEl = document.getElementById('earnedBadges');
  earnedBadgesEl.innerHTML = '';
  earned.forEach(b => {
    const el = document.createElement('span');
    el.className = 'badge bg-success p-2';
    el.innerText = b;
    earnedBadgesEl.appendChild(el);
  });

  const msg = (vidas > 0) ? 'Parabéns! Você completou a caça.' : 'Fim de jogo!';
  document.getElementById('finalMessage').innerText = msg;
  const modal = new bootstrap.Modal(document.getElementById('finalModal'));
  modal.show();

  // populate leaderboard preview
  renderLeaderboard();
}

function calculateBadges() {
  const badges = [];
  if (score >= 80) badges.push('Maestro do Corte');
  if (streak >= 5) badges.push('Sequência Implacável');
  if (Object.keys(perguntas).length === respondidas.length && vidas === 3) badges.push('Perfeito');
  if (score === 0) badges.push('Novato');
  return badges;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const id = 'toast-' + Date.now();
  const toastHtml = `
    <div id="${id}" class="toast align-items-center text-bg-light border-0 show" role="alert">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = toastHtml;
  container.appendChild(wrapper);

  // auto remove after 3s
  setTimeout(() => {
    if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
  }, 3000);
}

function saveToLeaderboard(name, scoreValue) {
  const list = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
  list.push({ name, score: scoreValue, date: new Date().toISOString() });
  list.sort((a,b) => b.score - a.score);
  localStorage.setItem(leaderboardKey, JSON.stringify(list.slice(0,10)));
  renderLeaderboard();
}

function renderLeaderboard() {
  const list = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
  const ol = document.getElementById('leaderboard');
  ol.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} — ${item.score}`;
    ol.appendChild(li);
  });
}

// hint button behaviour
document.getElementById('hintBtn').addEventListener('click', () => {
  if (countdown <= hintPenalty) {
    showToast('Sem tempo suficiente para usar dica!');
    return;
  }
  countdown -= hintPenalty;
  document.getElementById('timer').innerText = `${countdown}s`;
  showToast('Dica aplicada: pense em cortes tradicionais! (-' + hintPenalty + 's)');
});

// save score button in modal
document.getElementById('saveScore').addEventListener('click', () => {
  const name = prompt('Digite seu nome para salvar na leaderboard:', 'Jogador');
  if (!name) return;
  saveToLeaderboard(name, score);
  showToast('Pontuação salva!');
  const modalEl = document.getElementById('finalModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
});

document.getElementById('restartBtn')?.addEventListener('click', () => {
  location.reload();
});

// init
document.addEventListener('DOMContentLoaded', () => {
  buildMapPoints();
  updateLives();
  renderLeaderboard();
  // small accessibility: keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'h') document.getElementById('hintBtn').click();
  });
});


/* --- Integration hooks for shop & missions --- */
function integration_after_correct(){
  // if global function exists, notify mission progress
  try{
    if(window.updateMissionProgress) window.updateMissionProgress(1);
    if(window.generateCoupon && score >= 100){
      // generate a coupon once per game when threshold reached
      if(!sessionStorage.getItem('coupon_given')){
        window.generateCoupon('SWIFT100', 15, 'Bônus por 100+ pontos');
        sessionStorage.setItem('coupon_given','1');
        showToast('🎉 Bônus: cupom SWIFT100 de 15% gerado!');
      }
    }
  }catch(e){console.warn(e);}
}

function integration_after_save_score(name, sc){
  // call main leaderboard save if present to keep single source
  const LEADER_KEY = 'swift_leaderboard_v1';
  const list = JSON.parse(localStorage.getItem(LEADER_KEY) || '[]');
  list.push({ name, score: sc, date: new Date().toISOString() });
  list.sort((a,b)=> b.score - a.score);
  localStorage.setItem(LEADER_KEY, JSON.stringify(list.slice(0,10)));
}
/* patch: call integration_after_correct when correct */
const _orig_verificar = verificarResposta;
if(typeof _orig_verificar === 'function'){
  // override to call integration
  const old = verificarResposta;
  verificarResposta = function(animal, escolha, correta){
    // call original
    old(animal, escolha, correta);
    // if last answer was correct (botao has class 'correct') then integration
    const btns = document.querySelectorAll('.map-point');
    const botaoAtual = [...btns].find(b=>b.dataset.animal===animal);
    if(botaoAtual && botaoAtual.classList.contains('correct')) integration_after_correct();
  }
}
/* hook for save button inside modal */
document.getElementById('saveScore')?.addEventListener('click', ()=>{
  const name = prompt('Digite seu nome para salvar na leaderboard:', 'Jogador');
  if(!name) return;
  integration_after_save_score(name, score);
  showToast('Pontuação salva!');
  const modalEl = document.getElementById('finalModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
});
