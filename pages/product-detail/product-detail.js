
function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function showProduct() {
    const id = getId();
    const item = items.find(p => p.id === id);

    if (!item) {
        document.getElementById('box1').innerHTML = '<p>Product not found!</p>';
        return;
    }

    const box1 = document.getElementById('box1');
    box1.innerHTML = `
        <div class="left">
            <img src="../../${item.image}" alt="${item.name}" class="img1">
        </div>
        <div class="right">
            <h1>${item.name}</h1>
            <p class="scent">${item.scent}</p>
            <p class="price">Rs. ${item.price}</p>
            <p class="desc">${item.description}</p>
            <button class="btn1" onclick="add()">🛒 Add to Cart</button>
            
            <div class="details">
                <div class="item">
                    <button class="header" onclick="toggle(this)">
                        Product Details
                        <span class="arrow">▼</span>
                    </button>
                    <div class="content">
                        <p>Hand-poured soy wax candle</p>
                        <p>Burn time: 40-45 hours</p>
                        <p>Weight: 250g</p>
                        <p>Made in Pakistan</p>
                    </div>
                </div>
                
                <div class="item">
                    <button class="header" onclick="toggle(this)">
                        Care Instructions
                        <span class="arrow">▼</span>
                    </button>
                    <div class="content">
                        <p>Trim wick to 1/4 inch before each burn</p>
                        <p>Burn for 2-4 hours at a time</p>
                        <p>Keep away from drafts</p>
                        <p>Never leave unattended</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggle(btn) {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        content.style.display = 'block';
        arrow.textContent = '▲';
    }
}

function add() {
    const id = getId();
    const item = items.find(p => p.id === id);

    if (!item) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

window.addEventListener('DOMContentLoaded', showProduct);
