/* ====== App: render del catálogo, carrito UI, filtros, búsqueda ====== */

document.addEventListener("DOMContentLoaded", () => {
  // ----- Refs -----
  const grid        = document.getElementById("productGrid");
  const catalogSub  = document.getElementById("catalogSub");
  const catalogEmpty= document.getElementById("catalogEmpty");
  const cartCount   = document.getElementById("cartCount");
  const cartItemsEl = document.getElementById("cartItems");
  const cartEmpty   = document.getElementById("cartEmpty");
  const cartTotal   = document.getElementById("cartTotal");
  const cartPanel   = document.getElementById("cartPanel");
  const cartOverlay = document.getElementById("cartOverlay");
  const searchInput = document.getElementById("searchInput");

  let currentFilter = "all";
  let currentSearch = "";

  // ----- Placeholder (ícono SVG de línea) cuando una imagen no existe -----
  const ICON_PATHS = {
    industrial:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z M7 18h1 M12 18h1 M17 18h1",
    mantenimiento:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    agricola:"M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
  };
  function placeholder(cat){
    const d = ICON_PATHS[cat] || ICON_PATHS.mantenimiento;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='-6 -6 36 36'>
      <rect x='-6' y='-6' width='36' height='36' fill='#f4f5f7'/>
      <path d='${d}' fill='none' stroke='#b8bdc7' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg.replace(/\n\s*/g," "));
  }

  // ----- Render del catálogo -----
  function renderProducts(){
    const list = PRODUCTS.filter(p => {
      const okCat = currentFilter === "all" || p.categoria === currentFilter;
      const okSearch = !currentSearch ||
        (p.nombre + " " + p.desc).toLowerCase().includes(currentSearch);
      return okCat && okSearch;
    });

    grid.innerHTML = list.map(p => {
      const price = p.precio > 0
        ? `${formatMoney(p.precio)} <small>MXN</small>`
        : `<small>Precio a cotizar</small>`;
      const badge = p.badge ? `<span class="product__badge">${p.badge}</span>` : "";
      return `
        <article class="product">
          ${badge}
          <div class="product__img">
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" width="300" height="300" data-ph="${p.categoria}">
          </div>
          <div class="product__body">
            <span class="product__cat">${CATEGORY_LABELS[p.categoria] || ""}${p.sku ? ` · ${p.sku}` : ""}</span>
            <h3 class="product__name">${p.nombre}</h3>
            <p class="product__desc">${p.desc}</p>
            <div class="product__price">${price}</div>
            <button class="btn btn--primary product__add" data-add="${p.id}"><svg class="icon"><use href="#i-cart"/></svg> Agregar al carrito</button>
          </div>
        </article>`;
    }).join("");

    catalogEmpty.hidden = list.length !== 0;
  }

  // ----- Render del carrito -----
  function renderCart(){
    const items = Cart.detailed();
    cartCount.textContent = Cart.count();
    cartTotal.textContent = formatMoney(Cart.total());

    if (items.length === 0){
      cartItemsEl.innerHTML = "";
      cartEmpty.style.display = "block";
    } else {
      cartEmpty.style.display = "none";
      cartItemsEl.innerHTML = items.map(it => `
        <div class="cart-item">
          <img class="cart-item__img" src="${it.imagen}" alt="${it.nombre}" data-ph="${it.categoria}">
          <div class="cart-item__info">
            <div class="cart-item__name">${it.nombre}</div>
            <div class="cart-item__price">${it.precio>0 ? formatMoney(it.precio) : "A cotizar"}</div>
            <div class="cart-item__qty">
              <button data-dec="${it.id}" aria-label="Quitar uno">−</button>
              <span>${it.qty}</span>
              <button data-inc="${it.id}" aria-label="Agregar uno">+</button>
              <button class="cart-item__remove" data-remove="${it.id}">Eliminar</button>
            </div>
          </div>
        </div>`).join("");
    }
  }

  // ----- Abrir / cerrar carrito -----
  function openCart(){ cartPanel.classList.add("is-open"); cartOverlay.classList.add("is-open"); }
  function closeCart(){ cartPanel.classList.remove("is-open"); cartOverlay.classList.remove("is-open"); }

  // ----- Toast -----
  let toastTimer;
  window.showToast = function(text){
    let t = document.querySelector(".toast");
    if (!t){ t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = text;
    t.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-show"), 2200);
  };

  // ----- Filtros (navbar, categorías, footer) -----
  function setFilter(filter){
    currentFilter = filter;
    document.querySelectorAll(".nav-link[data-filter]").forEach(b =>
      b.classList.toggle("is-active", b.dataset.filter === filter));
    renderProducts();
    catalogSub.textContent = filter === "all"
      ? "Soldadoras, generadores, rotomartillos, motosierras y más. Mayoreo y menudeo, con envío a todo México."
      : "Categoría: " + (CATEGORY_LABELS[filter] || filter);
  }

  // ----- Fallback de imágenes: si una foto no carga, usa el placeholder -----
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && img.dataset.ph && !img.dataset.phDone){
      img.dataset.phDone = "1";
      img.src = placeholder(img.dataset.ph);
    }
  }, true);

  // ====== Eventos ======
  // Delegación global para clics
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-add],[data-inc],[data-dec],[data-remove],[data-filter]");
    if (!t) return;

    if (t.dataset.add){
      Cart.add(t.dataset.add);
      showToast("Producto agregado al carrito");
    } else if (t.dataset.inc){
      Cart.increment(t.dataset.inc);
    } else if (t.dataset.dec){
      Cart.decrement(t.dataset.dec);
    } else if (t.dataset.remove){
      Cart.remove(t.dataset.remove);
    } else if (t.dataset.filter){
      setFilter(t.dataset.filter);
      // si viene de categoría/footer, lleva al catálogo
      if (t.classList.contains("cat-card") || t.closest(".footer")){
        document.getElementById("catalogo").scrollIntoView({ behavior:"smooth" });
      }
    }
  });

  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  document.getElementById("cartClear").addEventListener("click", () => Cart.clear());
  document.getElementById("checkoutBtn").addEventListener("click", sendCartToWhatsApp);

  // Búsqueda
  function doSearch(){ currentSearch = searchInput.value.trim().toLowerCase(); renderProducts(); }
  searchInput.addEventListener("input", doSearch);
  document.getElementById("searchBtn").addEventListener("click", () => {
    doSearch();
    document.getElementById("catalogo").scrollIntoView({ behavior:"smooth" });
  });

  // Re-render del carrito cuando cambie
  document.addEventListener("cart:change", renderCart);

  // Año del footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // ----- Init -----
  renderProducts();
  renderCart();
});
