/* ====== Catálogo de productos — THE TOOL HOUSE MX (rebuild-v2) ======
 * CATÁLOGO DE EJEMPLO — productos reales pendientes de proporcionar por el cliente.
 * No usar en producción hasta reemplazar por datos reales (nombres, precios, fotos).
 * El catálogo real de 22 productos extraído del PDF del cliente sigue disponible
 * en la rama `main` (v1) por si se decide portarlo a este diseño.
 *
 * Schema por producto:
 *   - id:        identificador único (texto corto, sin espacios)
 *   - sku:       código del producto (aparece en el pedido de WhatsApp)
 *   - nombre:    nombre del producto (prefijo "[Ejemplo]" mientras sea placeholder)
 *   - precio:    número (sin símbolo $)
 *   - categoria: "industrial" | "mantenimiento" | "agricola"
 *   - desc:      descripción corta
 *   - imagen:    null hasta tener foto real (se usa ícono placeholder por categoría)
 *   - badge:     "EJEMPLO" mientras el dato sea placeholder
 */
window.THMX = window.THMX || {};

window.THMX.CATEGORY_LABELS = {
  industrial: "Industrial",
  mantenimiento: "Mantenimiento",
  agricola: "Agrícola",
};

window.THMX.PRODUCTS = [
  // ---------- INDUSTRIAL ----------
  { id:"ph-001", sku:"PLACEHOLDER-001", nombre:"[Ejemplo] Taladro industrial", precio:1899, categoria:"industrial",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-002", sku:"PLACEHOLDER-002", nombre:"[Ejemplo] Esmeriladora angular", precio:1099, categoria:"industrial",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-003", sku:"PLACEHOLDER-003", nombre:"[Ejemplo] Compresor de aire", precio:3299, categoria:"industrial",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-004", sku:"PLACEHOLDER-004", nombre:"[Ejemplo] Soldadora inverter", precio:2500, categoria:"industrial",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },

  // ---------- MANTENIMIENTO ----------
  { id:"ph-005", sku:"PLACEHOLDER-005", nombre:"[Ejemplo] Juego de llaves combinadas", precio:649, categoria:"mantenimiento",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-006", sku:"PLACEHOLDER-006", nombre:"[Ejemplo] Multímetro digital", precio:399, categoria:"mantenimiento",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-007", sku:"PLACEHOLDER-007", nombre:"[Ejemplo] Juego de desarmadores", precio:299, categoria:"mantenimiento",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-008", sku:"PLACEHOLDER-008", nombre:"[Ejemplo] Pistola de grasa", precio:459, categoria:"mantenimiento",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },

  // ---------- AGRÍCOLA ----------
  { id:"ph-009", sku:"PLACEHOLDER-009", nombre:"[Ejemplo] Desbrozadora de gasolina", precio:2799, categoria:"agricola",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-010", sku:"PLACEHOLDER-010", nombre:"[Ejemplo] Aspersora de mochila", precio:899, categoria:"agricola",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-011", sku:"PLACEHOLDER-011", nombre:"[Ejemplo] Motosierra", precio:3499, categoria:"agricola",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
  { id:"ph-012", sku:"PLACEHOLDER-012", nombre:"[Ejemplo] Kit de riego por goteo", precio:549, categoria:"agricola",
    desc:"Descripción de ejemplo — reemplazar con datos reales del cliente.", imagen:null, badge:"EJEMPLO" },
];
