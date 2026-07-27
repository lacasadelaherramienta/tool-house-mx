/* ====== WhatsApp — THE TOOL HOUSE MX (rebuild-v2) ====== */
window.THMX = window.THMX || {};

(function () {
  const WHATSAPP_NUMBER = "524623299168"; // +52 462 329 9168

  function formatMoney(n) {
    return n.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function buildGenericMessage() {
    return "Hola THE TOOL HOUSE MX, me interesa información sobre sus herramientas.";
  }

  // NOTA: la línea "(Catálogo de ejemplo...)" es temporal — quitar en cuanto
  // el catálogo tenga datos reales de producto (ver js/products.js).
  function buildOrderMessage(items, products) {
    const lines = ["Hola THE TOOL HOUSE MX 👋", "Quiero cotizar/pedir lo siguiente:", ""];
    let total = 0;

    items.forEach((item, i) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return;
      const subtotal = product.precio * item.qty;
      total += subtotal;
      lines.push(
        `${i + 1}) ${product.nombre} — SKU ${product.sku}`,
        `   Cantidad: ${item.qty} x ${formatMoney(product.precio)} = ${formatMoney(subtotal)}`,
        ""
      );
    });

    lines.push(`Total estimado: ${formatMoney(total)}`, "");
    lines.push("(Catálogo de ejemplo — favor de confirmar disponibilidad y precio real)");

    return lines.join("\n");
  }

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  window.THMX.WhatsApp = {
    formatMoney,
    buildGenericMessage,
    buildOrderMessage,
    buildWhatsAppUrl,
  };
})();
