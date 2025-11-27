// Cart Page JavaScript

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cartItems');
    const cartSummaryDiv = document.getElementById('cartSummary');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="empty-cart">
                <h2>🛒 Your cart is empty</h2>
                <p>Add some candles to your cart to get started!</p>
                <a href="../products/products.html" class="continue-shopping-btn">Continue Shopping</a>
            </div>
        `;
        cartSummaryDiv.innerHTML = '';
        return;
    }

    let cartHTML = '<div class="cart-items-grid">';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
            <div class="cart-item">
                <img src="../../${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p class="cart-item-price">Rs. ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="cart-item-total">
                    <p>Rs. ${itemTotal}</p>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    cartHTML += '</div>';
    cartItemsDiv.innerHTML = cartHTML;

    cartSummaryDiv.innerHTML = `
        <h2>Order Summary</h2>
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>Rs. ${total}</span>
        </div>
        <div class="summary-row">
            <span>Delivery:</span>
            <span>Free</span>
        </div>
        <div class="summary-row total-row">
            <span>Total:</span>
            <span>Rs. ${total}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
        <a href="../products/products.html" class="continue-shopping-link">Continue Shopping</a>
    `;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert('Thank you for your order! 🎉 You will receive your products in two working days');
}

window.addEventListener('DOMContentLoaded', loadCart);
