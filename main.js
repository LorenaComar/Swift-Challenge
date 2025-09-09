// =============================================
// OBJETO PRINCIPAL DA APLICAÇÃO
// =============================================
const SwiftApp = {
    // Inicializar a aplicação
    init: function() {
        this.setupEventListeners();
        this.loadProducts();
        this.updateCartCount();
        this.showWelcomeModal();
        
        // Verificar se há tema salvo no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-sun"></i>';
        }
    },
    
    // Configurar event listeners
    setupEventListeners: function() {
        // Alternador de tema claro/escuro
        document.getElementById('themeSwitch').addEventListener('click', this.toggleTheme);
        
        // Botão voltar ao topo
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Busca de produtos
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', this.filterProducts);
        }
    },
    
    // Carregar produtos no grid
    loadProducts: function() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card product-card h-100">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title product-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text product-price">R$ ${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary mt-auto add-to-cart" data-id="${product.id}">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            productsGrid.innerHTML += productCard;
        });
        
        // Adicionar event listeners aos botões do carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                this.addToCart(productId);
            });
        });
    },
    
    // Filtrar produtos com base na busca
    filterProducts: function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="col-12 text-center">
                    <p>Nenhum produto encontrado.</p>
                </div>
            `;
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card product-card h-100">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title product-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text product-price">R$ ${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary mt-auto add-to-cart" data-id="${product.id}">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            productsGrid.innerHTML += productCard;
        });
        
        // Adicionar event listeners aos botões do carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                SwiftApp.addToCart(productId);
            });
        });
    },
    
    // Alternar entre tema claro e escuro
    toggleTheme: function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-moon"></i>';
        }
    },
    
    // Mostrar modal de boas-vindas
    showWelcomeModal: function() {
        if (!sessionStorage.getItem('welcomeModalShown')) {
            const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
            welcomeModal.show();
            sessionStorage.setItem('welcomeModalShown', 'true');
        }
    },
    
    // Adicionar produto ao carrinho
    addToCart: function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        this.updateCartCount();
    },

    // Atualizar contador do carrinho
    updateCartCount: function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }
};
// =============================================
// OBJETO PRINCIPAL DA APLICAÇÃO
// =============================================
const SwiftApp = {
    // Inicializar a aplicação
    init: function() {
        this.setupEventListeners();
        this.loadProducts();
        this.updateCartCount();
        this.showWelcomeModal();
        
        // Verificar se há tema salvo no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-sun"></i>';
        }
    },
    
    // Configurar event listeners
    setupEventListeners: function() {
        // Alternador de tema claro/escuro
        document.getElementById('themeSwitch').addEventListener('click', this.toggleTheme);
        
        // Botão voltar ao topo
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Busca de produtos
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', this.filterProducts);
        }
    },
    
    // Carregar produtos no grid
    loadProducts: function() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card product-card h-100">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title product-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text product-price">R$ ${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary mt-auto add-to-cart" data-id="${product.id}">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            productsGrid.innerHTML += productCard;
        });
        
        // Adicionar event listeners aos botões do carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                this.addToCart(productId);
            });
        });
    },
    
    // Filtrar produtos com base na busca
    filterProducts: function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="col-12 text-center">
                    <p>Nenhum produto encontrado.</p>
                </div>
            `;
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card product-card h-100">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title product-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text product-price">R$ ${product.price.toFixed(2)}</p>
                            <button class="btn btn-primary mt-auto add-to-cart" data-id="${product.id}">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            productsGrid.innerHTML += productCard;
        });
        
        // Adicionar event listeners aos botões do carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                SwiftApp.addToCart(productId);
            });
        });
    },
    
    // Alternar entre tema claro e escuro
    toggleTheme: function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            document.getElementById('themeSwitch').innerHTML = '<i class="fas fa-moon"></i>';
        }
    },
    
    // Mostrar modal de boas-vindas
    showWelcomeModal: function() {
        if (!sessionStorage.getItem('welcomeModalShown')) {
            const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
            welcomeModal.show();
            sessionStorage.setItem('welcomeModalShown', 'true');
        }
    },
    
    // Adicionar produto ao carrinho
    addToCart: function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        this.updateCartCount();
    },

    // Atualizar contador do carrinho
    updateCartCount: function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }
};
