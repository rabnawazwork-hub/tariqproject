
// Welcome message
window.onload = function() {
    console.log("Welcome to Scentoria!");
}

// Form validation for feedback page
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name == "") {
        alert("Please enter your name!");
        return false;
    }
    
    if (email == "") {
        alert("Please enter your email!");
        return false;
    }
    
    alert("Thank you " + name + " for your feedback!");
    return true;
}

// Social media click function for blog page
function showSocial(platform) {
    alert("Follow us on " + platform + "!\nComing soon...");
}

//click effect to featured products
document.addEventListener('DOMContentLoaded', function() {
    // Get all featured product items
    var products = document.querySelectorAll('.featured li');
    
    // Add click event to each product
    for (var i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function() {
            alert("You clicked on: " + this.textContent);
        });
    }
    
    // animation to hero section
    var hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(function() {
            hero.style.opacity = '1';
        }, 100);
    }
});

// show current time in footer
function showTime() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes();
    alert("Current time: " + time);
}

// Change background color of table rows on click
document.addEventListener('DOMContentLoaded', function() {
    var rows = document.querySelectorAll('table tr');
    
    for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', function() {
            this.style.backgroundColor = '#FFE4B5';
        });
    }
});
