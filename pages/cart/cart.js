
function load() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    if (cart.length === 0) {
        box1.innerHTML = `
            <div class="empty">
                <h2>Your cart is empty</h2>
                <p>Add some candles to get started!</p>
                <a href="../products/products.html" class="link1">Continue Shopping</a>
            </div>
        `;
        box2.innerHTML = '';
        return;
    }

    let html = '<div class="items">';

    cart.forEach(item => {
        const total = item.price * item.qty;
        html += `
            <div class="item">
                <img src="../../${item.image}" alt="${item.name}">
                <div class="info">
                    <h3>${item.name}</h3>
                    <p class="price1">Rs. ${item.price}</p>
                </div>
                <div class="qty">
                    <button onclick="change(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="change(${item.id}, 1)">+</button>
                </div>
                <div class="total">
                    <p>Rs. ${total}</p>
                    <button class="btn-remove" onclick="remove(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    box1.innerHTML = html;

    showSummary();
}

function change(id, num) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);

    if (item) {
        item.qty += num;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    load();
}

function remove(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    load();
}

function calc() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function showSummary() {
    const total = calc();
    const box2 = document.getElementById('box2');

    box2.innerHTML = `
        <h2>Order Summary</h2>
        <div class="row">
            <span>Subtotal:</span>
            <span>Rs. ${total}</span>
        </div>
        <div class="row">
            <span>Delivery:</span>
            <span>Free</span>
        </div>
        <div class="row row-total">
            <span>Total:</span>
            <span>Rs. ${total}</span>
        </div>
        <button class="btn2" onclick="checkout()">Proceed to Checkout</button>
        <a href="../products/products.html" class="link2">Continue Shopping</a>
    `;
}

function checkout() {
    alert('Checkout feature coming soon!');
}

window.addEventListener('DOMContentLoaded', load);
