/* ====== Lógica del carrito (con persistencia en localStorage) ====== */

const Cart = (() => {
  const KEY = "thmx_cart";
  let items = load();

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }
  function save(){
    localStorage.setItem(KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:change"));
  }

  function findProduct(id){ return PRODUCTS.find(p => p.id === id); }

  function add(id){
    const existing = items.find(i => i.id === id);
    if (existing) existing.qty += 1;
    else items.push({ id, qty:1 });
    save();
  }
  function setQty(id, qty){
    const it = items.find(i => i.id === id);
    if (!it) return;
    it.qty = qty;
    if (it.qty <= 0) remove(id);
    else save();
  }
  function increment(id){ setQty(id, (items.find(i=>i.id===id)?.qty || 0) + 1); }
  function decrement(id){ setQty(id, (items.find(i=>i.id===id)?.qty || 0) - 1); }
  function remove(id){ items = items.filter(i => i.id !== id); save(); }
  function clear(){ items = []; save(); }

  function count(){ return items.reduce((n, i) => n + i.qty, 0); }
  function total(){
    return items.reduce((sum, i) => {
      const p = findProduct(i.id);
      return sum + (p ? p.precio * i.qty : 0);
    }, 0);
  }
  /* Devuelve items enriquecidos con datos del producto */
  function detailed(){
    return items.map(i => ({ ...findProduct(i.id), qty:i.qty }))
                .filter(i => i.id);
  }

  return { add, remove, setQty, increment, decrement, clear, count, total, detailed, items:()=>items };
})();
