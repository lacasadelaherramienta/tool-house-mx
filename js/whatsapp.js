/* ====== Generación del pedido por WhatsApp ====== */

const WHATSAPP_NUMBER = "524623299168"; // +52 462 329 9168

function formatMoney(n){
  return "$" + n.toLocaleString("es-MX", { minimumFractionDigits:2, maximumFractionDigits:2 });
}

/* Construye el mensaje del pedido a partir del carrito y abre WhatsApp */
function sendCartToWhatsApp(){
  const items = Cart.detailed();
  if (items.length === 0){
    showToast("Tu carrito está vacío");
    return;
  }

  let msg = "Hola THE TOOL HOUSE MX, quiero hacer este pedido:\n\n";
  items.forEach(it => {
    const sku = it.sku ? ` [${it.sku}]` : "";
    const linea = it.precio > 0
      ? `• ${it.qty}x ${it.nombre}${sku} — ${formatMoney(it.precio * it.qty)}`
      : `• ${it.qty}x ${it.nombre}${sku} — (precio a cotizar)`;
    msg += linea + "\n";
  });
  msg += `\nTotal estimado: ${formatMoney(Cart.total())}`;
  msg += "\n\n¿Me confirman precio, disponibilidad y costo de envío? Gracias.";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
