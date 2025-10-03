// =============================================
// LISTA DE PRODUTOS
// =============================================
const products = [
  {
    id: 1,
    name: "Bife de Contrafilé Combo 1Kg",
    image:"img/contrafile.png" ,
    price: 89.90,
    category: "carne",
    description: "Contrafilé premium em combo especial de 1kg, ideal para churrascos e grelhados.",
    badge: "Oferta"
  },
  {
    id: 2,
    name: "Pão Recheado Doce de Leite Swift 300g",
    image: "img/recheadodocedeleite.png",
    price: 12.90,
    category: "outros",
    description: "Delicioso pão recheado com doce de leite cremoso, perfeito para o café da manhã.",
    badge: "Novo"
  },
  {
    id: 3,
    name: "Iscas de Frango Swift 300g",
    image: "img/iscadefrango.png",
    price: 18.90,
    category: "frango",
    description: "Iscas de frango temperadas e prontas para o preparo, práticas e saborosas.",
    badge: "Popular"
  },
  {
      id: 4,
      name: "Caldo de Mandioca com Costela Swift 350g",
      image: "img/caldodemandioca.png",
      price: 15.90,
      oldPrice: null,
      category: "outros",
      description: "Caldo nutritivo de mandioca com pedaços de costela, ideal para refeições reconfortantes.",
      badge: "Tradicional"
  },
  {
      id: 5,
      name: "Bife de Patinho Swift 1kg",
      image: "img/bifedepatinho.png",
      price: 45.90,
      category: "carne",
      description: "Bife de patinho macio e suculento, corte versátil para diversas preparações.",
      badge: "Oferta"
  },
  {
      id: 6,
      name: "Bacon em Cubos Swift 250g",
      image: "img/baconemcubos.png",
      price: 22.90,
      oldPrice: null,
      category: "carne",
      description: "Bacon cortado em cubos práticos, ideal para risotos, massas e refogados.",
      badge: "Prático"
  },
  {
      id: 7,
      name: "Lasanha Bolonhesa Swift 600g",
      image: "img/lasanhabolonhesa.png",
      price: 28.90,
      oldPrice: null,
      category: "outros",
      description: "Lasanha congelada com molho bolonhesa tradicional, pronta para assar.",
      badge: "Congelado"
  },
  {
      id: 8,
      name: "Medalhão de Filé Mignon Suíno Swift 1Kg",
      image: "img/medalhaosuino.png",
      price: 65.90,
      category: "carne",
      description: "Medalhões de filé mignon suíno premium, corte nobre e extremamente macio.",
      badge: "Premium"
  },
  {
      id: 9,
      name: "Carne Moída de Patinho Swift",
      image: "img/carnemoidapatinho.png",
      price: 24.90,
      oldPrice: null,
      category: "carne",
      description: "Carne moída de patinho fresca, ideal para hambúrgueres, molhos e refogados.",
      badge: "Fresco"
  },
  {
      id: 10,
      name: "Costela Suína Swift",
      image: "img/costelasuina.png",
      price: 32.90,
      oldPrice: null,
      category: "carne",
      description: "Costela suína com osso, perfeita para assados e cozidos demorados.",
      badge: "Tradicional"
  },
  {
      id: 11,
      name: "Bife de Lombo Suíno Linha Mais 1Kg",
      image: "img/bifedelombosuino.png",
      price: 38.90,
      category: "carne",
      description: "Bife de lombo suíno da linha premium, corte magro e saboroso.",
      badge: "Linha Mais"
  },
  {
      id: 12,
      name: "Bife de Alcatra Swift 1kg",
      image: "img/bifedealcatra.png",
      price: 78.90,
      category: "carne",
      description: "Bife de alcatra premium, um dos cortes mais nobres e saborosos.",
      badge: "Premium"
  },
  {
      id: 13,
      name: "Farofa Tradicional Swift 400g",
      image: "img/farofatradicional.png",
      price: 8.90,
      oldPrice: null,
      category: "outros",
      description: "Farofa tradicional temperada, acompanhamento clássico da culinária brasileira.",
      badge: "Tradicional"
  },
  {
      id: 14,
      name: "Pedaços de Filé de Salmão Swift 500g",
      image: "img/pedacosdesalmao.png",
      price: 89.90,
      oldPrice: null,
      category: "peixe",
      description: "Filé de salmão em pedaços, rico em ômega 3 e proteínas de alta qualidade.",
      badge: "Saudável"
  },
  {
      id: 15,
      name: "Filé de Tilápia Swift 800g",
      image: "img/filedetilapia.png",
      price: 35.90,
      oldPrice: null,
      category: "peixe",
      description: "Filé de tilápia fresco, peixe de sabor suave e textura delicada.",
      badge: "Fresco"
  },
  {
      id: 16,
      name: "Linguiça Toscana Swift 700g",
      image: "img/linguicatoscana.png",
      price: 26.90,
      oldPrice: null,
      category: "carne",
      description: "Linguiça toscana tradicional, temperada com ervas e especiarias selecionadas.",
      badge: "Artesanal"
  },
  {
      id: 17,
      name: "Medalhão de Filé de Frango com Bacon Swift 500g",
      image: "img/medalhaodefiledefrango.png",
      price: 34.90,
      oldPrice: null,
      category: "frango",
      description: "Medalhões de filé de frango envolvidos com bacon, combinação irresistível.",
      badge: "Especial"
  },
  {
      id: 18,
      name: "Salsicha Hot Dog Swift 500g",
      image: "img/salsichahotdog.png",
      price: 14.90,
      oldPrice: null,
      category: "carne",
      description: "Salsicha tipo hot dog, perfeita para lanches rápidos e práticos.",
      badge: "Prático"
  },
  {
      id: 19,
      name: "Picanha Linha Mais de 1,1Kg a 1,6Kg",
      image: "img/picanhalinhamais.png",
      price: 159.90,
      category: "carne",
      description: "Picanha premium da linha mais, o corte mais desejado para churrascos.",
      badge: "Premium"
  },
  {
      id: 20,
      name: "Fettuccine com Peito de Peru e Brócolis Swift 350g",
      image: "img/fettuccinecompeitodeperu.png",
      price: 19.90,
      oldPrice: null,
      category: "outros",
      description: "Massa fettuccine com peito de peru e brócolis, refeição completa e saudável.",
      badge: "Saudável"
  },
  {
      id: 21,
      name: "Camarão Pré-cozido Descascado sem Cabeça",
      image: "img/camaraocozido.png",
      price: 79.90,
      oldPrice: null,
      category: "peixe",
      description: "Camarão pré-cozido e descascado, pronto para uso em diversas receitas.",
      badge: "Prático"
  },
  {
      id: 22,
      name: "Carne Moída Swift 1kg",
      image: "img/carnemoida.png",
      price: 28.90,
      oldPrice: null,
      category: "carne",
      description: "Carne moída de em embalagem econômica de 1kg.",
      badge: "Econômico"
  },
  {
      id: 23,
      name: "Kit Feijoada Swift",
      image: "img/feijoada.png",
      price: 45.90,
      oldPrice: null,
      category: "outros",
      description: "Kit completo para feijoada com todos os ingredientes tradicionais.",
      badge: "Completo"
  },
  {
      id: 24,
      name: "Linguiça Tipo Calabresa Defumada Swift 400g",
      image: "img/linguicadefumada.png",
      price: 18.90,
      oldPrice: null,
      category: "carne",
      description: "Linguiça calabresa defumada, sabor intenso e marcante.",
      badge: "Defumado"
  },
  {
      id: 25,
      name: "Cubos de Costela Swift 500g",
      image: "img/cubosdecostelas.png",
      price: 35.90,
      oldPrice: null,
      category: "carne",
      description: "Costela cortada em cubos práticos, ideal para ensopados e cozidos.",
      badge: "Prático"
  },
  {
      id: 26,
      name: "Meio da Asa (Tulipa) Temperada Swift 1Kg",
      image: "img/meiodaasa.png",
      price: 22.90,
      oldPrice: null,
      category: "frango",
      description: "Meio da asa de frango temperado, perfeito para assados e grelhados.",
      badge: "Temperado"
  },
  {
      id: 27,
      name: "Linguiça de Pernil com Queijo Coalho, Tomate Seco e Manjericão Swift",
      image: "img/linguicacomcoalhada.png",
      price: 32.90,
      oldPrice: null,
      category: "carne",
      description: "Linguiça gourmet de pernil com queijo coalho, tomate seco e manjericão.",
      badge: "Gourmet"
  },
  {
      id: 28,
      name: "Posta de Cação Planalto 800g",
      image: "img/postadecacao.png",
      price: 42.90,
      oldPrice: null,
      category: "peixe",
      description: "Posta de cação fresca, peixe de carne firme e sabor marcante.",
      badge: "Fresco"
  },
  {
      id: 29,
      name: "Hambúrguer Gran Reserva Swift",
      image: "img/hamburguergran.png",
      price: 24.90,
      oldPrice: null,
      category: "carne",
      description: "Hambúrguer artesanal da linha Gran Reserva, sabor premium.",
      badge: "Artesanal"
  },
  {
      id: 30,
      name: "Filé de Peito Linha Mais 1kg",
      image: "img/peitodalinhamais.png",
      price: 28.90,
      category: "frango",
      description: "Filé de peito de frango da linha premium, corte magro e versátil.",
      badge: "Linha Mais"
  },
  {
      id: 31,
      name: "Peito de Frango Temperado Desfiado Swift 400g",
      image: "img/peitodefrangotemperado.png",
      price: 16.90,
      oldPrice: null,
      category: "frango",
      description: "Peito de frango temperado e desfiado, pronto para uso em sanduíches e saladas.",
      badge: "Pronto"
  }
];



// Variáveis globais
let filteredProducts = [...products];
let cart = [];

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupScrollEffects();
});

// Renderizar produtos
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
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
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4 product-item fade-in-up" data-category="${product.category}">
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badge">${product.badge}</div>
                </div>
                <div class="product-info">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        R$ ${product.price.toFixed(2).replace('.', ',')}
                        ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
                    </div>
                    <button class="btn btn-primary btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Aplicar animação aos produtos
    setTimeout(() => {
        document.querySelectorAll('.product-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
}

// Configurar event listeners
function setupEventListeners() {
    // Filtros de categoria
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Busca de produtos
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    };
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Filtrar produtos por categoria
function filterProducts(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    renderProducts();
}

// Buscar produtos
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    };
    
    renderProducts();
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showAddToCartFeedback(product.name);
    }
}

// Atualizar contador do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Mostrar feedback ao adicionar produto
function showAddToCartFeedback(productName) {
    // Criar toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle text-success"></i>
            <span>${productName} adicionado ao carrinho!</span>
        </div>
    `;
    
    // Adicionar estilos inline para o toast
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Configurar efeitos de scroll
function setupScrollEffects() {
    // Botão voltar ao topo
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
    });

    
    
    // Scroll suave para o topo
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Animação de elementos ao entrar na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ser animados
    document.querySelectorAll('.product-card, .feature-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// Função para obter informações do carrinho (para uso futuro)
function getCartInfo() {
    return {
        items: cart,
        totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
        totalValue: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
}

// Função para limpar carrinho
function clearCart() {
    cart = [];
    updateCartCount();
}

// Exportar funções para uso global
window.addToCart = addToCart;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;
window.getCartInfo = getCartInfo;
window.clearCart = clearCart;



// =============================================
// OBJETO PRINCIPAL DA APLICAÇÃO
// =============================================
const SwiftApp = {
  init: function() {
    this.loadProducts();
    this.setupEventListeners();
    this.updateCartCount();
    this.renderCart();
    this.showWelcomeModal(); // exibe o cupom na primeira visita
  },

  // Renderizar produtos
  loadProducts: function() {
    const container = document.getElementById("productsGrid");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("col-md-3", "mb-4");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">R$ ${product.price.toFixed(2)}</p>
            <button class="btn btn-primary mt-auto" onclick="SwiftApp.addToCart(${product.id})">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  },

  // Adicionar ao carrinho
  addToCart: function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    this.updateCartCount();
    this.renderCart();

    // ❌ REMOVIDO: abrir carrinho automaticamente
  },

  // Atualizar contador
  updateCartCount: function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const countElement = document.getElementById("cartCount");
    if (countElement) {
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      countElement.textContent = totalItems;
    }
  },

  // Renderizar carrinho
  renderCart: function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");

    if (!cartItemsContainer || !cartTotalElement) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p class="text-center">Seu carrinho está vazio.</p>`;
      cartTotalElement.textContent = "R$ 0,00";
      return;
    }

    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;

      const itemRow = document.createElement("div");
      itemRow.classList.add("d-flex", "align-items-center", "mb-3");

      itemRow.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="50" class="me-3 rounded">
        <div class="flex-grow-1">
          <h6 class="mb-0">${item.name}</h6>
          <small>Qtd: ${item.quantity}</small>
        </div>
        <strong class="me-3">R$ ${(item.price * item.quantity).toFixed(2)}</strong>
        <button class="btn btn-sm btn-link text-orange" onclick="SwiftApp.removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      `;
      cartItemsContainer.appendChild(itemRow);
    });

    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
  },

  // Remover item do carrinho
  removeFromCart: function(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    this.updateCartCount();
    this.renderCart();
  },

  // Eventos extras
  setupEventListeners: function() {
    const clearBtn = document.getElementById("clearCart");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        localStorage.removeItem("cart");
        this.updateCartCount();
        this.renderCart();
      });
    }
  },

  // Mostrar modal de boas-vindas (cupom)
  showWelcomeModal: function() {
    if (!sessionStorage.getItem("welcomeModalShown")) {
      const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
      welcomeModal.show();
      sessionStorage.setItem("welcomeModalShown", "true");
    }
  }
};

/* Pesquisa */
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `resultado.html?q=${encodeURIComponent(query)}`;
      }
    });
  }
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => SwiftApp.init());
