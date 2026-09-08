// script.js - shared data and helpers for QuickBite
// Defines restaurantData, menuData, navigation helpers, and cart utilities.

// Sample restaurants (used by restaurants.html and menu.html)
const restaurantData = [
  {
    id: 1,
    name: 'La Bella Pasta',
    image: 'https://placehold.co/600x400/1a2a6c/ffffff?text=La+Bella+Pasta',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: 30,
    priceLevel: 2,
    priceForTwo: 700
  },
  {
    id: 2,
    name: 'Spice Kingdom',
    image: 'https://placehold.co/600x400/1a2a6c/ffffff?text=Spice+Kingdom',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: 25,
    priceLevel: 1,
    priceForTwo: 400
  },
  {
    id: 3,
    name: 'Burger Haven',
    image: 'https://placehold.co/600x400/1a2a6c/ffffff?text=Burger+Haven',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: 20,
    priceLevel: 2,
    priceForTwo: 500
  },
  {
    id: 4,
    name: 'Sushi Paradise',
    image: 'https://placehold.co/600x400/1a2a6c/ffffff?text=Sushi+Paradise',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: 35,
    priceLevel: 3,
    priceForTwo: 1200
  }
];

// Sample menu items (used by menu.html)
const menuData = [
  // La Bella Pasta (id:1)
  { id: 101, restaurantId: 1, category: 'starters', name: 'Bruschetta', description: 'Toasted bread topped with fresh tomatoes, basil and olive oil.', price: 199, image: 'https://placehold.co/300x200/ff7f50/ffffff?text=Bruschetta' },
  { id: 102, restaurantId: 1, category: 'main', name: 'Spaghetti Pomodoro', description: 'Classic spaghetti tossed in fresh tomato sauce.', price: 349, image: 'https://placehold.co/300x200/ff7f50/ffffff?text=Spaghetti' },
  { id: 103, restaurantId: 1, category: 'desserts', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone.', price: 249, image: 'https://placehold.co/300x200/ff7f50/ffffff?text=Tiramisu' },
  { id: 104, restaurantId: 1, category: 'beverages', name: 'Lemonade', description: 'Freshly squeezed lemonade.', price: 99, image: 'https://placehold.co/300x200/ff7f50/ffffff?text=Lemonade' },

  // Spice Kingdom (id:2)
  { id: 201, restaurantId: 2, category: 'starters', name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes.', price: 79, image: 'https://placehold.co/300x200/f4a460/ffffff?text=Samosa' },
  { id: 202, restaurantId: 2, category: 'main', name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry.', price: 399, image: 'https://placehold.co/300x200/f4a460/ffffff?text=Butter+Chicken' },
  { id: 203, restaurantId: 2, category: 'desserts', name: 'Gulab Jamun', description: 'Sweet syrup-soaked dumplings.', price: 149, image: 'https://placehold.co/300x200/f4a460/ffffff?text=Gulab+Jamun' },
  { id: 204, restaurantId: 2, category: 'beverages', name: 'Masala Chai', description: 'Spiced Indian tea.', price: 59, image: 'https://placehold.co/300x200/f4a460/ffffff?text=Masala+Chai' },

  // Burger Haven (id:3)
  { id: 301, restaurantId: 3, category: 'starters', name: 'Fries', description: 'Crispy golden fries.', price: 129, image: 'https://placehold.co/300x200/3cb371/ffffff?text=Fries' },
  { id: 302, restaurantId: 3, category: 'main', name: 'Classic Burger', description: 'Beef patty with lettuce, tomato and cheese.', price: 299, image: 'https://placehold.co/300x200/3cb371/ffffff?text=Burger' },
  { id: 303, restaurantId: 3, category: 'desserts', name: 'Chocolate Shake', description: 'Rich chocolate milkshake.', price: 179, image: 'https://placehold.co/300x200/3cb371/ffffff?text=Shake' },
  { id: 304, restaurantId: 3, category: 'beverages', name: 'Soda', description: 'Chilled fizzy drink.', price: 69, image: 'https://placehold.co/300x200/3cb371/ffffff?text=Soda' },

  // Sushi Paradise (id:4)
  { id: 401, restaurantId: 4, category: 'starters', name: 'Edamame', description: 'Steamed soybeans lightly salted.', price: 149, image: 'https://placehold.co/300x200/6495ed/ffffff?text=Edamame' },
  { id: 402, restaurantId: 4, category: 'main', name: 'Salmon Sushi Platter', description: 'Assorted salmon sushi pieces.', price: 899, image: 'https://placehold.co/300x200/6495ed/ffffff?text=Salmon+Sushi' },
  { id: 403, restaurantId: 4, category: 'desserts', name: 'Mochi', description: 'Sweet rice cake with filling.', price: 179, image: 'https://placehold.co/300x200/6495ed/ffffff?text=Mochi' },
  { id: 404, restaurantId: 4, category: 'beverages', name: 'Green Tea', description: 'Hot green tea.', price: 79, image: 'https://placehold.co/300x200/6495ed/ffffff?text=Green+Tea' }
];

// Navigation helpers
function navigateToMenu(restaurantId) {
  if (!restaurantId) restaurantId = 1;
  window.location.href = `menu.html?id=${encodeURIComponent(restaurantId)}`;
}

function navigateToRestaurants() {
  const location = (document.getElementById('locationInput') || {}).value || '';
  const search = (document.getElementById('foodSearchInput') || {}).value || '';
  const params = new URLSearchParams();
  if (location) params.set('location', location);
  if (search) params.set('search', search);
  const query = params.toString();
  window.location.href = 'restaurants.html' + (query ? ('?' + query) : '');
}

// Cart utilities
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);

  // If floating indicator exists, update it too
  const floating = document.getElementById('floatingCartIndicator');
  if (floating) {
    const indicator = document.getElementById('cartItemsIndicator');
    if (indicator) indicator.textContent = `${total} item${total !== 1 ? 's' : ''} in cart`;
    floating.style.display = total > 0 ? 'flex' : 'none';
  }
}

// A safe addToCart helper that other pages can use if needed
function addItemToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.quantity = (existing.quantity || 0) + (item.quantity || 1);
  else cart.push(Object.assign({ quantity: 1 }, item));
  setCart(cart);
}

// Show add-to-cart animation. Accepts a button element; if not provided, show a minimal toast.
function showAddToCartAnimation(button) {
  if (button && button instanceof Element) {
    const originalText = button.textContent;
    const originalBg = button.style.backgroundColor;
    button.textContent = '✓ Added!';
    button.style.backgroundColor = '#10b981';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = originalBg || '';
    }, 1200);
    return;
  }

  // Fallback toast
  let toast = document.getElementById('qb-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'qb-toast';
    toast.style.position = 'fixed';
    toast.style.right = '20px';
    toast.style.bottom = '20px';
    toast.style.background = 'rgba(0,0,0,0.8)';
    toast.style.color = '#fff';
    toast.style.padding = '10px 14px';
    toast.style.borderRadius = '8px';
    toast.style.zIndex = 9999;
    document.body.appendChild(toast);
  }
  toast.textContent = 'Added to cart';
  toast.style.opacity = '1';
  setTimeout(() => { if (toast) toast.style.opacity = '0'; }, 1400);
}

// Expose helpers to global scope for inline scripts to use
window.restaurantData = restaurantData;
window.menuData = menuData;
window.navigateToMenu = navigateToMenu;
window.navigateToRestaurants = navigateToRestaurants;
window.updateCartCount = updateCartCount;
window.addItemToCart = addItemToCart;
window.showAddToCartAnimation = showAddToCartAnimation;

// Initialize cart count on load
document.addEventListener('DOMContentLoaded', updateCartCount);
