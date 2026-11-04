// Pointing to your deployed Vercel API
const PUBLIC_API_URL = "https://organic-smile-public-api.vercel.app/api/products";

// --- 1. Fetch & Display Products on Homepage ---
async function loadStorefrontProducts() {
    const productsGrid = document.getElementById("productsGrid");
    if (!productsGrid) return;

    try {
        const response = await fetch(PUBLIC_API_URL);
        if (!response.ok) throw new Error("Failed to fetch data from API");
        const products = await response.json();
        
        productsGrid.innerHTML = ""; 
        
        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">
                    <i class="fa-solid fa-box-open" style="font-size: 40px; margin-bottom: 15px; color: #C9A961;"></i>
                    <p>لا توجد منتجات مضافة حالياً. تفضل بزيارتنا لاحقاً!</p>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            if (!product.isActive) return; // Skip hidden products
            
            // Format price and image
            const firstSize = product.sizes[0] || "";
            const priceMatch = typeof firstSize === 'string' ? firstSize.match(/-\s*(\d+)/) : null;
            const price = priceMatch ? priceMatch[1] : (firstSize.price || "0");
            const imageUrl = (product.images && product.images.length > 0) ? product.images[0] : "images/placeholder.jpg";
            
            // Build the card
            const card = document.createElement("a");
            card.href = `product.html?name=${encodeURIComponent(product.name)}`;
            card.className = "product-card";
            card.style.textDecoration = "none";
            card.style.color = "inherit";
            card.style.display = "block";
            card.style.background = "#151513";
            card.style.border = "1px solid rgba(201,169,97,.2)";
            card.style.borderRadius = "16px";
            card.style.overflow = "hidden";
            card.style.padding = "15px";
            
            card.innerHTML = `
                <img src="${imageUrl}" alt="${product.name}" loading="lazy" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
                <div>
                    <strong style="display: block; margin-bottom: 8px; font-size: 18px; color: #E5C78B;">${product.name}</strong>
                    <span style="color: #C9A961; font-weight: bold;">يبدأ من ${price} ج.م</span>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading products:", error);
        productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #e62227;">
                <i class="fa-solid fa-server" style="font-size: 40px; margin-bottom: 15px;"></i>
                <p>تعذر الاتصال بقاعدة البيانات. تأكد من إعدادات Vercel و MongoDB Atlas الخاصة بحسابك.</p>
            </div>
        `;
    }
}

// --- 2. Global Cart Logic (Connects to your HTML Cart Modal) ---
let cart = JSON.parse(localStorage.getItem('organicCart')) || [];

function updateCartCount() {
    const countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }
}

// Global function used by product.html to add items to the cart
window.addToCartWithQty = function(name, price, img, qty) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, img, qty });
    }
    localStorage.setItem('organicCart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success notification
    const toast = document.getElementById("toast");
    if (toast) {
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
    }
};

// --- 3. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadStorefrontProducts();
    updateCartCount();
});
