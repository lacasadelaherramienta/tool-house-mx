/* ====== Catálogo imprimible — THE TOOL HOUSE MX (rebuild-v2) ======
 * Lee los mismos datos de js/products.js (window.THMX.PRODUCTS) que usa
 * el catálogo web: no hay una segunda lista de productos que mantener.
 */
document.addEventListener("DOMContentLoaded", () => {
  const { PRODUCTS, CATEGORY_LABELS } = window.THMX;
  const { WhatsApp } = window.THMX;

  const CATEGORY_ORDER = ["industrial", "mantenimiento", "agricola"];
  const CATEGORY_ICON = {
    industrial: "i-factory",
    mantenimiento: "i-gear",
    agricola: "i-sprout",
  };

  const list = document.getElementById("pcatList");
  const dateEl = document.getElementById("pcatDate");
  const downloadBtn = document.getElementById("pcatDownload");

  function formatPrice(n) {
    return n > 0 ? WhatsApp.formatMoney(n) : "A cotizar";
  }

  function renderItem(p) {
    const icon = CATEGORY_ICON[p.categoria] || "i-wrench";
    const media = p.imagen
      ? `<img class="pcat-item__photo" src="${p.imagen}" alt="${p.nombre}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
         <svg class="pcat-item__icon" style="display:none"><use href="#${icon}"/></svg>`
      : `<svg class="pcat-item__icon"><use href="#${icon}"/></svg>`;

    return `
    <article class="pcat-item">
      <div class="pcat-item__media">${media}</div>
      <div class="pcat-item__body">
        <p class="pcat-item__meta">SKU ${p.sku}${p.badge ? ` · ${p.badge}` : ""}</p>
        <h3 class="pcat-item__name">${p.nombre}</h3>
        <p class="pcat-item__desc">${p.desc}</p>
      </div>
      <div class="pcat-item__price">${formatPrice(p.precio)}</div>
    </article>`;
  }

  function render() {
    list.innerHTML = CATEGORY_ORDER.map((cat) => {
      const items = PRODUCTS.filter((p) => p.categoria === cat);
      if (items.length === 0) return "";
      return `
      <section class="pcat-section">
        <h2 class="pcat-section__title">${CATEGORY_LABELS[cat]}</h2>
        <div class="pcat-grid">${items.map(renderItem).join("")}</div>
      </section>`;
    }).join("");
  }

  if (dateEl) {
    const hoy = new Date().toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    dateEl.textContent = `Catálogo generado el ${hoy}`;
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => window.print());
  }

  render();
});
