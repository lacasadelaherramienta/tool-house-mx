/* ====== App — THE TOOL HOUSE MX (rebuild-v2) ====== */
document.addEventListener("DOMContentLoaded", () => {
  const { PRODUCTS, CATEGORY_LABELS } = window.THMX;
  const { Cart } = window.THMX;
  const { WhatsApp } = window.THMX;

  const grid = document.getElementById("productGrid");
  const catalogEmpty = document.getElementById("catalogEmpty");
  const cartToggle = document.getElementById("cartToggle");
  const cartCount = document.getElementById("cartCount");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartPanel = document.getElementById("cartPanel");
  const cartClose = document.getElementById("cartClose");
  const cartItemsEl = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const cartClearBtn = document.getElementById("cartClear");
  const filterButtons = document.querySelectorAll("[data-filter]");

  const CATEGORY_ICON = {
    industrial: "i-factory",
    mantenimiento: "i-gear",
    agricola: "i-sprout",
  };

  let activeFilter = "all";

  function formatMoney(n) {
    return WhatsApp.formatMoney(n);
  }

  function renderCatalog() {
    const items = PRODUCTS.filter(
      (p) => activeFilter === "all" || p.categoria === activeFilter
    );

    grid.innerHTML = items
      .map((p) => {
        const icon = CATEGORY_ICON[p.categoria] || "i-wrench";
        const media = p.imagen
          ? `<img class="product-card__photo" src="${p.imagen}" alt="${p.nombre}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
             <svg class="product-card__icon" style="display:none"><use href="#${icon}"/></svg>`
          : `<svg class="product-card__icon"><use href="#${icon}"/></svg>`;
        return `
        <article class="product-card" data-id="${p.id}">
          ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ""}
          <div class="product-card__media">
            ${media}
          </div>
          <div class="product-card__body">
            <p class="product-card__cat">${CATEGORY_LABELS[p.categoria]} · ${p.sku}</p>
            <h3 class="product-card__name">${p.nombre}</h3>
            <p class="product-card__desc">${p.desc}</p>
            <div class="product-card__foot">
              <span class="product-card__price">${formatMoney(p.precio)}</span>
              <button class="btn btn--add" data-add="${p.id}">Agregar al carrito</button>
            </div>
          </div>
        </article>`;
      })
      .join("");

    catalogEmpty.hidden = items.length !== 0;
  }

  function renderCart() {
    const items = Cart.getItems();
    cartCount.textContent = Cart.count();

    if (items.length === 0) {
      cartItemsEl.innerHTML = "";
      cartEmpty.hidden = false;
    } else {
      cartEmpty.hidden = true;
      cartItemsEl.innerHTML = items
        .map((item) => {
          const p = PRODUCTS.find((prod) => prod.id === item.id);
          if (!p) return "";
          return `
          <div class="cart-item" data-id="${p.id}">
            <div class="cart-item__info">
              <p class="cart-item__name">${p.nombre}</p>
              <p class="cart-item__price">${formatMoney(p.precio)}</p>
            </div>
            <div class="cart-item__qty">
              <button class="qty-btn" data-decrement="${p.id}" aria-label="Restar">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" data-increment="${p.id}" aria-label="Sumar">+</button>
            </div>
            <button class="cart-item__remove" data-remove="${p.id}" aria-label="Quitar">✕</button>
          </div>`;
        })
        .join("");
    }

    cartTotal.textContent = formatMoney(Cart.getTotal(PRODUCTS));
  }

  function openCart() {
    cartPanel.classList.add("is-open");
    cartOverlay.classList.add("is-open");
  }

  function closeCart() {
    cartPanel.classList.remove("is-open");
    cartOverlay.classList.remove("is-open");
  }

  // ----- Eventos -----
  grid.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    if (!addBtn) return;
    Cart.add(addBtn.dataset.add, 1);
  });

  cartItemsEl.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-increment]");
    const dec = e.target.closest("[data-decrement]");
    const rem = e.target.closest("[data-remove]");
    if (inc) {
      const item = Cart.getItems().find((it) => it.id === inc.dataset.increment);
      Cart.setQty(inc.dataset.increment, (item ? item.qty : 0) + 1);
    } else if (dec) {
      const item = Cart.getItems().find((it) => it.id === dec.dataset.decrement);
      Cart.setQty(dec.dataset.decrement, (item ? item.qty : 0) - 1);
    } else if (rem) {
      Cart.remove(rem.dataset.remove);
    }
  });

  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  cartClearBtn.addEventListener("click", () => Cart.clear());

  checkoutBtn.addEventListener("click", () => {
    const items = Cart.getItems();
    if (items.length === 0) return;
    const message = WhatsApp.buildOrderMessage(items, PRODUCTS);
    window.open(WhatsApp.buildWhatsAppUrl(message), "_blank", "noopener");
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.toggle("is-active", b.dataset.filter === activeFilter));
      renderCatalog();
      document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.addEventListener("cart:change", renderCart);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  Cart.init();
  renderCatalog();
  renderCart();
});
