
// Unified main.js: cart, products, leaderboard preview, missions, coupons, theme
const PRODUCTS = [
  { id: 'p1', title: 'Picanha Black', price: 69.9 },
  { id: 'p2', title: 'Wagyu - Fatias', price: 129.9 },
  { id: 'p3', title: 'Carré Francês', price: 89.9 }
];

const CART_KEY = 'swift_cart_v1';
const COUPONS_KEY = 'swift_coupons_v1';
const MISSION_KEY = 'swift_mission_v1';
const LEADER_KEY = 'swift_leaderboard_v1';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); }

function addToCart(productId){
  const cart = getCart();
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return;
  const existing = cart.find(i=>i.id===productId);
  if(existing) existing.qty += 1; else cart.push({id: p.id, title: p.title, price: p.price, qty:1});
  saveCart(cart);
  alert('Adicionado ao carrinho: ' + p.title);
}

function removeFromCart(productId){
  let cart = getCart();
  cart = cart.filter(i=>i.id!==productId);
  saveCart(cart);
  renderCartPage();
}

function updateCartCount(){
  const c = getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('#cartCount').forEach(el=>el.innerText = c);
}

function renderProducts(){
  const container = document.getElementById('productList');
  if(!container) return;
  container.innerHTML = '';
  PRODUCTS.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-3';
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">R$ ${p.price.toFixed(2)}</p>
          <div class="mt-auto">
            <button class="btn btn-success" onclick="addToCart('${p.id}')">Adicionar</button>
          </div>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

function renderCartPage(){
  const el = document.getElementById('cartItems');
  if(!el) return;
  const cart = getCart();
  if(cart.length===0){ el.innerHTML = '<p>Seu carrinho está vazio.</p>'; document.getElementById('cartTotal').innerText = '0.00'; return; }
  let html = '<ul class="list-group">';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    html += `<li class="list-group-item d-flex justify-content-between align-items-center">
      <div><strong>${item.title}</strong><br>R$ ${item.price.toFixed(2)} x ${item.qty}</div>
      <div><button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.id}')">Remover</button></div>
    </li>`;
  });
  html += '</ul>';
  el.innerHTML = html;
  document.getElementById('cartTotal').innerText = total.toFixed(2);
}

// coupons generation & application
function generateCoupon(code, percent, note){
  const list = JSON.parse(localStorage.getItem(COUPONS_KEY) || '[]');
  list.push({code, percent, note, used:false, date: new Date().toISOString()});
  localStorage.setItem(COUPONS_KEY, JSON.stringify(list));
}

function applyCoupon(code){
  const list = JSON.parse(localStorage.getItem(COUPONS_KEY) || '[]');
  const c = list.find(x=>x.code === code && !x.used);
  if(!c) return { ok:false, message: 'Cupom inválido ou já utilizado.' };
  // apply: mark used (for demo we mark but do not persist detailed checkout flow)
  c.used = true; localStorage.setItem(COUPONS_KEY, JSON.stringify(list));
  return { ok:true, percent:c.percent, message: `Cupom aplicado: ${c.percent}%` };
}

// missions daily
function getTodayKey(){ return new Date().toISOString().slice(0,10); }
function getMission(){
  const key = MISSION_KEY + '_' + getTodayKey();
  const saved = JSON.parse(localStorage.getItem(key) || 'null');
  if(saved) return saved;
  // create mission randomly
  const missions = [
    { text: 'Responda 3 perguntas no jogo', type:'play', target:3, reward:15 },
    { text: 'Complete a caça sem perder vidas', type:'play_perfect', target:1, reward:25 },
    { text: 'Conquiste um badge hoje', type:'badge', target:1, reward:20 }
  ];
  const m = missions[Math.floor(Math.random()*missions.length)];
  localStorage.setItem(key, JSON.stringify({ ...m, progress:0, completed:false }));
  return JSON.parse(localStorage.getItem(key));
}
function updateMissionProgress(delta){
  const key = MISSION_KEY + '_' + getTodayKey();
  const m = JSON.parse(localStorage.getItem(key));
  if(!m || m.completed) return;
  m.progress = Math.min((m.progress||0) + delta, m.target);
  if(m.progress >= m.target){ m.completed = true; generateCoupon('SWIFT10', 10, 'Recompensa missão diária'); alert('Missão completa! Você ganhou um cupom SWIFT10 (10%)'); }
  localStorage.setItem(key, JSON.stringify(m));
  renderMission();
}
function renderMission(){
  const m = getMission();
  const el = document.getElementById('missaoText');
  if(!el) return;
  el.innerText = `${m.text} — Progresso: ${m.progress||0}/${m.target} ${m.completed ? '(Concluída)' : ''}`;
}

// leaderboard preview (home)
function renderLeaderboardPreview(){
  const list = JSON.parse(localStorage.getItem(LEADER_KEY) || '[]');
  const ol = document.getElementById('leaderboardHome');
  if(!ol) return;
  ol.innerHTML = '';
  list.slice(0,5).forEach(it => {
    const li = document.createElement('li'); li.innerText = `${it.name} — ${it.score}`; ol.appendChild(li);
  });
}

// theme switch simple
document.getElementById('themeSwitch')?.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
});

// hook up coupon apply on cart page
document.getElementById('applyCoupon')?.addEventListener('click', ()=>{
  const code = document.getElementById('cupomInput').value.trim();
  if(!code){ alert('Digite o código'); return; }
  const res = applyCoupon(code);
  alert(res.message);
  renderCartPage();
});

// checkout demo
document.getElementById('checkout')?.addEventListener('click', ()=>{
  const totalEl = document.getElementById('cartTotal');
  if(!totalEl) return;
  alert('Compra finalizada! (demo)');
  localStorage.removeItem(CART_KEY);
  updateCartCount();
  renderCartPage();
});

// startup
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount();
  renderProducts();
  renderCartPage();
  renderLeaderboardPreview();
  renderMission();
  // small integration: when a question is answered correctly in gamificacao, it can call updateMissionProgress from there.
  // To allow that, main gamificacao script will call window.updateMissionProgress when an answer is correct.
  window.updateMissionProgress = updateMissionProgress;
  window.generateCoupon = generateCoupon; // allow gamification to create direct coupons when score threshold reached
});
