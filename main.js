// =============================================
// SIMULAÇÃO DE PRODUTOS (mock)
// =============================================
const products = [
  { id: 1, name: "Picanha Premium", price: 89.90, image: "https://picsum.photos/200?random=1" },
  { id: 2, name: "Filet Mignon", price: 99.90, image: "https://picsum.photos/200?random=2" },
  { id: 3, name: "Costela Bovina", price: 39.90, image: "https://picsum.photos/200?random=3" },
  { id: 4, name: "Alcatra", price: 49.90, image: "https://picsum.photos/200?random=4" }
];

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

// Inicializar
document.addEventListener("DOMContentLoaded", () => SwiftApp.init());
