/* ====== Carrito — THE TOOL HOUSE MX (rebuild-v2) ====== */
window.THMX = window.THMX || {};

(function () {
  const STORAGE_KEY = "thmx_cart";

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:change", { detail: { items } }));
  }

  let items = load();

  const Cart = {
    init() {
      save(items);
    },

    add(id, qty = 1) {
      const line = items.find((it) => it.id === id);
      if (line) {
        line.qty += qty;
      } else {
        items.push({ id, qty });
      }
      save(items);
    },

    remove(id) {
      items = items.filter((it) => it.id !== id);
      save(items);
    },

    setQty(id, qty) {
      if (qty <= 0) {
        this.remove(id);
        return;
      }
      const line = items.find((it) => it.id === id);
      if (line) {
        line.qty = qty;
        save(items);
      }
    },

    clear() {
      items = [];
      save(items);
    },

    getItems() {
      return items.slice();
    },

    count() {
      return items.reduce((sum, it) => sum + it.qty, 0);
    },

    getTotal(products) {
      return items.reduce((sum, it) => {
        const product = products.find((p) => p.id === it.id);
        return product ? sum + product.precio * it.qty : sum;
      }, 0);
    },
  };

  window.THMX.Cart = Cart;
})();
