// Product Detail Page JavaScript

function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

function findProduct(id) {
    return products.find(product => product.id === id);
}

function addToCart(productId) {
    const product = findProduct(productId);
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
    alert('✅ ' + product.name + ' added to cart!');
}

window.addEventListener('DOMContentLoaded', function () {
    const productId = getProductId();
    const product = findProduct(productId);

    if (!product) {
        document.getElementById('productDetail').innerHTML = '<p>Product not found!</p>';
        return;
    }

    const detailContainer = document.getElementById('productDetail');
    detailContainer.innerHTML = `
        <div class="product-detail-left">
            <img src="../../${product.image}" alt="${product.name}" class="main-product-image">
        </div>
        
        <div class="product-detail-right">
            <h1>${product.name}</h1>
            <p class="product-scent">Scent: ${product.scent}</p>
            <p class="product-price">Rs. ${product.price}</p>
            <p class="product-description">${product.description}</p>
            
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                🛒 Add to Cart
            </button>
            
            <div class="product-details-accordion">
                <div class="detail-item">
                    <button class="detail-header" onclick="toggleDetail(this)">
                        <span>Scent Notes</span>
                        <span class="arrow">▼</span>
                    </button>
                    <div class="detail-content">
                        <p>${product.scentNotes.join(', ')}</p>
                    </div>
                </div>
                
                <div class="detail-item">
                    <button class="detail-header" onclick="toggleDetail(this)">
                        <span>Burn Time</span>
                        <span class="arrow">▼</span>
                    </button>
                    <div class="detail-content">
                        <p>${product.burnTime}</p>
                    </div>
                </div>
                
                <div class="detail-item">
                    <button class="detail-header" onclick="toggleDetail(this)">
                        <span>Wax Type</span>
                        <span class="arrow">▼</span>
                    </button>
                    <div class="detail-content">
                        <p>${product.waxType} - Natural, eco-friendly and clean burning</p>
                    </div>
                </div>
                
                <div class="detail-item">
                    <button class="detail-header" onclick="toggleDetail(this)">
                        <span>Best Room</span>
                        <span class="arrow">▼</span>
                    </button>
                    <div class="detail-content">
                        <p>${product.bestRoom}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});

function toggleDetail(button) {
    const detailItem = button.parentElement;
    const content = detailItem.querySelector('.detail-content');
    const arrow = button.querySelector('.arrow');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        content.style.display = 'block';
        arrow.textContent = '▲';
    }
}
