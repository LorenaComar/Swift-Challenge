/* main.js - versão corrigida e completa
   Mantive todas as funcionalidades: render, filtros, busca, animações,
   offcanvas do carrinho, modal de boas-vindas, toasts, scroll effects, etc.
*/

/* ============================
   LISTA DE PRODUTOS (mantida)
   ============================ */
const products = [
  { id: 1, name: "Bife de Contrafilé Combo 1Kg", image:"img/contrafile.png", price: 89.90, category: "carne", description: "Contrafilé premium em combo especial de 1kg, ideal para churrascos e grelhados.", badge: "Oferta" },
  { id: 2, name: "Pão Recheado Doce de Leite Swift 300g", image: "img/recheadodocedeleite.png", price: 12.90, category: "outros", description: "Delicioso pão recheado com doce de leite cremoso, perfeito para o café da manhã.", badge: "Novo" },
  { id: 3, name: "Iscas de Frango Swift 300g", image: "img/iscadefrango.png", price: 18.90, category: "frango", description: "Iscas de frango temperadas e prontas para o preparo, práticas e saborosas.", badge: "Popular" },
  { id: 4, name: "Caldo de Mandioca com Costela Swift 350g", image: "img/caldodemandioca.png", price: 15.90, oldPrice: null, category: "outros", description: "Caldo nutritivo de mandioca com pedaços de costela, ideal para refeições reconfortantes.", badge: "Tradicional" },
  { id: 5, name: "Bife de Patinho Swift 1kg", image: "img/bifedepatinho.png", price: 45.90, category: "carne", description: "Bife de patinho macio e suculento, corte versátil para diversas preparações.", badge: "Oferta" },
  { id: 6, name: "Bacon em Cubos Swift 250g", image: "img/baconemcubos.png", price: 22.90, oldPrice: null, category: "carne", description: "Bacon cortado em cubos práticos, ideal para risotos, massas e refogados.", badge: "Prático" },
  { id: 7, name: "Lasanha Bolonhesa Swift 600g", image: "img/lasanhabolonhesa.png", price: 28.90, oldPrice: null, category: "outros", description: "Lasanha congelada com molho bolonhesa tradicional, pronta para assar.", badge: "Congelado" },
  { id: 8, name: "Medalhão de Filé Mignon Suíno Swift 1Kg", image: "img/medalhaosuino.png", price: 65.90, category: "carne", description: "Medalhões de filé mignon suíno premium, corte nobre e extremamente macio.", badge: "Premium" },
  { id: 9, name: "Carne Moída de Patinho Swift", image: "img/carnemoidapatinho.png", price: 24.90, oldPrice: null, category: "carne", description: "Carne moída de patinho fresca, ideal para hambúrgueres, molhos e refogados.", badge: "Fresco" },
  { id: 10, name: "Costela Suína Swift", image: "img/costelasuina.png", price: 32.90, oldPrice: null, category: "carne", description: "Costela suína com osso, perfeita para assados e cozidos demorados.", badge: "Tradicional" },
  { id: 11, name: "Bife de Lombo Suíno Linha Mais 1Kg", image: "img/bifedelombosuino.png", price: 38.90, category: "carne", description: "Bife de lombo suíno da linha premium, corte magro e saboroso.", badge: "Linha Mais" },
  { id: 12, name: "Bife de Alcatra Swift 1kg", image: "img/bifedealcatra.png", price: 78.90, category: "carne", description: "Bife de alcatra premium, um dos cortes mais nobres e saborosos.", badge: "Premium" },
  { id: 13, name: "Farofa Tradicional Swift 400g", image: "img/farofatradicional.png", price: 8.90, oldPrice: null, category: "outros", description: "Farofa tradicional temperada, acompanhamento clássico da culinária brasileira.", badge: "Tradicional" },
  { id: 14, name: "Pedaços de Filé de Salmão Swift 500g", image: "img/pedacosdesalmao.png", price: 89.90, oldPrice: null, category: "peixe", description: "Filé de salmão em pedaços, rico em ômega 3 e proteínas de alta qualidade.", badge: "Saudável" },
  { id: 15, name: "Filé de Tilápia Swift 800g", image: "img/filedetilapia.png", price: 35.90, oldPrice: null, category: "peixe", description: "Filé de tilápia fresco, peixe de sabor suave e textura delicada.", badge: "Fresco" },
  { id: 16, name: "Linguiça Toscana Swift 700g", image: "img/linguicatoscana.png", price: 26.90, oldPrice: null, category: "carne", description: "Linguiça toscana tradicional, temperada com ervas e especiarias selecionadas.", badge: "Artesanal" },
  { id: 17, name: "Medalhão de Filé de Frango com Bacon Swift 500g", image: "img/medalhaodefiledefrango.png", price: 34.90, oldPrice: null, category: "frango", description: "Medalhões de filé de frango envolvidos com bacon, combinação irresistível.", badge: "Especial" },
  { id: 18, name: "Salsicha Hot Dog Swift 500g", image: "img/salsichahotdog.png", price: 14.90, oldPrice: null, category: "carne", description: "Salsicha tipo hot dog, perfeita para lanches rápidos e práticos.", badge: "Prático" },
  { id: 19, name: "Picanha Linha Mais de 1,1Kg a 1,6Kg", image: "img/picanhalinhamais.png", price: 159.90, oldPrice: null, category: "carne", description: "Picanha premium da linha mais, o corte mais desejado para churrascos.", badge: "Premium" },
  { id: 20, name: "Fettuccine com Peito de Peru e Brócolis Swift 350g", image: "img/fettuccinecompeitodeperu.png", price: 19.90, oldPrice: null, category: "outros", description: "Massa fettuccine com peito de peru e brócolis, refeição completa e saudável.", badge: "Saudável" },
  { id: 21, name: "Camarão Pré-cozido Descascado sem Cabeça", image: "img/camaraocozido.png", price: 79.90, oldPrice: null, category: "peixe", description: "Camarão pré-cozido e descascado, pronto para uso em diversas receitas.", badge: "Prático" },
  { id: 22, name: "Carne Moída Swift 1kg", image: "img/carnemoida.png", price: 28.90, oldPrice: null, category: "carne", description: "Carne moída de em embalagem econômica de 1kg.", badge: "Econômico" },
  { id: 23, name: "Kit Feijoada Swift", image: "img/feijoada.png", price: 45.90, oldPrice: null, category: "outros", description: "Kit completo para feijoada com todos os ingredientes tradicionais.", badge: "Completo" },
  { id: 24, name: "Linguiça Tipo Calabresa Defumada Swift 400g", image: "img/linguicadefumada.png", price: 18.90, oldPrice: null, category: "carne", description: "Linguiça calabresa defumada, sabor intenso e marcante.", badge: "Defumado" },
  { id: 25, name: "Cubos de Costela Swift 500g", image: "img/cubosdecostelas.png", price: 35.90, oldPrice: null, category: "carne", description: "Costela cortada em cubos práticos, ideal para ensopados e cozidos.", badge: "Prático" },
  { id: 26, name: "Meio da Asa (Tulipa) Temperada Swift 1Kg", image: "img/meiodaasa.png", price: 22.90, oldPrice: null, category: "frango", description: "Meio da asa de frango temperado, perfeito para assados e grelhados.", badge: "Temperado" },
  { id: 27, name: "Linguiça de Pernil com Queijo Coalho, Tomate Seco e Manjericão Swift", image: "img/linguicacomcoalhada.png", price: 32.90, oldPrice: null, category: "carne", description: "Linguiça gourmet de pernil com queijo coalho, tomate seco e manjericão.", badge: "Gourmet" },
  { id: 28, name: "Posta de Cação Planalto 800g", image: "img/postadecacao.png", price: 42.90, oldPrice: null, category: "peixe", description: "Posta de cação fresca, peixe de carne firme e sabor marcante.", badge: "Fresco" },
  { id: 29, name: "Hambúrguer Gran Reserva Swift", image: "img/hamburguergran.png", price: 24.90, oldPrice: null, category: "carne", description: "Hambúrguer artesanal da linha Gran Reserva, sabor premium.", badge: "Artesanal" },
  { id: 30, name: "Filé de Peito Linha Mais 1kg", image: "img/peitodalinhamais.png", price: 28.90, oldPrice: null, category: "frango", description: "Filé de peito de frango da linha premium, corte magro e versátil.", badge: "Linha Mais" },
  { id: 31, name: "Peito de Frango Temperado Desfiado Swift 400g", image: "img/peitodefrangotemperado.png", price: 16.90, oldPrice: null, category: "frango", description: "Peito de frango temperado e desfiado, pronto para uso em sanduíches e saladas.", badge: "Pronto" }
];

/* ============================
   Estado global
   ============================ */
let filteredProducts = [...products];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* ============================
   Utilitários
   ============================ */
function formatPriceBR(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function saveCartState(newCart) {
  cart = newCart;
  localStorage.setItem('cart', JSON.stringify(cart));
}

/* ============================
   Toast / Feedback visual
   ============================ */
function showAddToCartFeedback(productName) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-check-circle text-success"></i>
      <span style="margin-left:10px">${productName} adicionado ao carrinho!</span>
    </div>
  `;
  toast.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: white;
    padding: 12px 16px;
    border-radius: 10px;
    box-shadow: 0 6px 28px rgba(0,0,0,0.12);
    z-index: 9999;
    transform: translateX(100%);
    transition: transform .25s ease;
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.transform = 'translateX(0)');
  setTimeout(() => { toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, 2600);
}

/* ============================
   Scroll effects / animações
   ============================ */
function setupScrollEffects() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });

  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // IntersectionObserver para .product-card etc.
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
    });
  }, observerOptions);

  document.querySelectorAll('.product-card, .feature-item, .stat-item').forEach(el => observer.observe(el));
}

/* ============================
   Render de produtos (produtos.html)
   ============================ */
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  if (!filteredProducts || filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-info">
          <i class="fas fa-search"></i>
          <h4>Nenhum produto encontrado</h4>
          <p>Tente ajustar os filtros ou buscar por outros termos.</p>
        </div>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4 product-item" data-category="${product.category}">
      <div class="product-card" data-category="${product.category}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
          <h5 class="product-title">${product.name}</h5>
          <p class="product-description">${product.description || ''}</p>
          <div class="product-price">${formatPriceBR(product.price)} ${product.oldPrice ? `<span class="old-price">${formatPriceBR(product.oldPrice)}</span>` : ''}</div>
          <button class="btn-add-cart" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  `).join('');

  // disparar pequenas animações em cascata
  setTimeout(() => {
    document.querySelectorAll('.product-item').forEach((item, index) => setTimeout(() => item.classList.add('fade-in-up'), index * 80));
  }, 80);
}

/* ============================
   Render de resultados (resultado.html)
   ============================ */
function renderResults(query) {
  const resultsGrid = document.getElementById('results');
  if (!resultsGrid) return;

  const q = (query || '').toLowerCase().trim();
  const found = q ? products.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : [];

  if (found.length === 0) {
    resultsGrid.innerHTML = `<p>Nenhum produto encontrado para "<strong>${query}</strong>".</p>`;
    return;
  }

  resultsGrid.innerHTML = found.map(product => `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4 product-item" data-category="${product.category}">
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
          <h5 class="product-title">${product.name}</h5>
          <p class="product-description">${product.description || ''}</p>
          <div class="product-price">${formatPriceBR(product.price)} ${product.oldPrice ? `<span class="old-price">${formatPriceBR(product.oldPrice)}</span>` : ''}</div>
          <button class="btn-add-cart" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================
   Filtrar / Buscar (globais)
   ============================ */
function filterProducts(category) {
  if (category === 'all') filteredProducts = [...products];
  else filteredProducts = products.filter(p => p.category === category);
  renderProducts();
}

function searchProducts(query) {
  const searchTerm = (query || '').toLowerCase().trim();
  if (!searchTerm) filteredProducts = [...products];
  else filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm) ||
    (p.description || '').toLowerCase().includes(searchTerm) ||
    p.category.toLowerCase().includes(searchTerm)
  );
  renderProducts();
}

/* ============================
   Carrinho (globais)
   ============================ */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const current = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = current.find(i => i.id === productId);
  if (existing) existing.quantity += 1;
  else current.push({ ...product, quantity: 1 });

  saveCartState(current);
  updateCartCount();
  renderCart();
  showAddToCartFeedback(product.name);

}

function removeFromCart(productId) {
  let current = JSON.parse(localStorage.getItem('cart')) || [];
  current = current.filter(i => i.id !== productId);
  saveCartState(current);
  updateCartCount();
  renderCart();
}

function clearCart() {
  saveCartState([]);
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const current = JSON.parse(localStorage.getItem('cart')) || [];
  const countEl = document.getElementById('cartCount');
  if (!countEl) return;
  const total = current.reduce((s, i) => s + (i.quantity || 0), 0);
  countEl.textContent = total;
}

function renderCart() {
  const current = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  if (!cartItemsContainer || !cartTotalEl) return;

  cartItemsContainer.innerHTML = '';
  if (current.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-center">Seu carrinho está vazio.</p>';
    cartTotalEl.textContent = 'R$ 0,00';
    return;
  }

  let total = 0;
  current.forEach(item => {
    total += item.price * item.quantity;
    const row = document.createElement('div');
    row.className = 'd-flex align-items-center mb-3';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50" class="me-3 rounded">
      <div class="flex-grow-1">
        <h6 class="mb-0">${item.name}</h6>
        <small>Qtd: ${item.quantity}</small>
      </div>
      <strong class="me-3">${formatPriceBR(item.price * item.quantity)}</strong>
      <button class="btn btn-sm btn-link text-orange" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    `;
    cartItemsContainer.appendChild(row);
  });

  cartTotalEl.textContent = formatPriceBR(total);
}

function getCartInfo() {
  const current = JSON.parse(localStorage.getItem('cart')) || [];
  return {
    items: current,
    totalItems: current.reduce((s, it) => s + (it.quantity || 0), 0),
    totalValue: current.reduce((s, it) => s + (it.price * it.quantity || 0), 0)
  };
}

/* ============================
   Setup Event Listeners globais
   ============================ */
function setupEventListeners() {
  // filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      filterProducts(filter);
    });
  });

  // busca (input) - quando existe
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      // se você quiser busca em tempo real na mesma página
      searchProducts(this.value);
    });
  }

  // form de busca (submit) -> redireciona para resultado.html?q=...
  const searchForm = document.getElementById('searchForm');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const q = searchInput.value.trim();
      if (q) window.location.href = `resultado.html?q=${encodeURIComponent(q)}`;
    });
  }

  // ligar botão Clear do carrinho (se existir)
  const clearBtn = document.getElementById('clearCart');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      clearCart();
    });
  }

  // smooth-scroll para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================
   Modal de boas-vindas (cupom)
   ============================ */
function showWelcomeModalIfNeeded() {
  try {
    if (!sessionStorage.getItem('welcomeModalShown')) {
      const modalEl = document.getElementById('welcomeModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
        sessionStorage.setItem('welcomeModalShown', 'true');
      }
    }
  } catch (err) {
    console.warn('welcome modal: bootstrap não encontrado ou erro', err);
  }
}

/* ============================
   Inicialização 
   ============================ */
document.addEventListener('DOMContentLoaded', function() {
  // Inicial render e listeners
  renderProducts();
  setupEventListeners();
  setupScrollEffects();
  updateCartCount();
  renderCart();
  showWelcomeModalIfNeeded();

  // Se estamos em resultado.html e existe query -> renderResults
  const resultsEl = document.getElementById('results');
  if (resultsEl) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    if (q) renderResults(q);
  }
});

/* ============================
   Expor APIs globais
   ============================ */
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;
window.getCartInfo = getCartInfo;

/* ============================
   Objeto SwiftApp 
   ============================ */
window.SwiftApp = window.SwiftApp || {
  addToCart: function(id) { addToCart(id); },
  removeFromCart: function(id) { removeFromCart(id); },
  clearCart: function() { clearCart(); },
  renderProducts: renderProducts,
  renderResults: renderResults,
  updateCartCount: updateCartCount,
  getCartInfo: getCartInfo
};
