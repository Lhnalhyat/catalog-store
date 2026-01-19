const products = [
  {
    id: 1,
    name: "ساعة ذكية",
    price: 350,
    image: "https://images.unsplash.com/photo-1516575150278-77136aed6920"
  },
  {
    id: 2,
    name: "سماعة بلوتوث",
    price: 220,
    image: "https://images.unsplash.com/photo-1585386959984-a4155228f1c1"
  },
  {
    id: 3,
    name: "نظارة شمسية",
    price: 180,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  }
];

const catalog = document.getElementById("catalog");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${p.image}">
    <div class="product-content">
      <h3>${p.name}</h3>
      <div class="price">${p.price} د.ل</div>
      <button class="btn" onclick="viewProduct(${p.id})">عرض التفاصيل</button>
      <button class="btn secondary" onclick="addToCart(${p.id})">أضف إلى السلة</button>
    </div>
  `;
  catalog.appendChild(card);
});

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت إضافة المنتج إلى السلة");
}
