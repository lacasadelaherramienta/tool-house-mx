/* ====== Catálogo de productos ======
 * PRODUCTOS DE EJEMPLO — se reemplazarán por los reales del cliente.
 *
 * Cómo editar / agregar un producto:
 *   - id:        identificador único (texto corto, sin espacios)
 *   - nombre:    nombre del producto
 *   - precio:    número (sin símbolo $). Usa 0 si el precio es "a cotizar".
 *   - categoria: "industrial" | "mantenimiento" | "agricola"
 *   - desc:      descripción corta
 *   - imagen:    ruta a la foto, ej: "assets/img/productos/taladro.jpg"
 *                (si no existe, se muestra un recuadro con ícono automáticamente)
 *   - badge:     (opcional) etiqueta como "Oferta", "Nuevo", "Mayoreo"
 */
const PRODUCTS = [
  { id:"taladro-perc", nombre:"Taladro percutor 1/2\" 750W", precio:1290, categoria:"industrial", desc:"Ideal para concreto, metal y madera. Uso rudo.", imagen:"assets/img/productos/taladro.jpg", badge:"Nuevo" },
  { id:"esmeril-ang", nombre:"Esmeriladora angular 4-1/2\" 850W", precio:890, categoria:"industrial", desc:"Para corte y desbaste. Disco de 115 mm.", imagen:"assets/img/productos/esmeril.jpg" },
  { id:"juego-dados", nombre:"Juego de dados 1/2\" 40 pzas", precio:1150, categoria:"mantenimiento", desc:"Cromo vanadio. Estuche organizador.", imagen:"assets/img/productos/dados.jpg", badge:"Oferta" },
  { id:"llave-stilson", nombre:"Llave Stilson 14\"", precio:340, categoria:"mantenimiento", desc:"Mango reforzado para tubería y plomería.", imagen:"assets/img/productos/stilson.jpg" },
  { id:"multimetro", nombre:"Multímetro digital", precio:420, categoria:"mantenimiento", desc:"Voltaje, corriente y continuidad. Pantalla LCD.", imagen:"assets/img/productos/multimetro.jpg" },
  { id:"machete", nombre:"Machete 18\" con funda", precio:180, categoria:"agricola", desc:"Acero templado, mango ergonómico.", imagen:"assets/img/productos/machete.jpg" },
  { id:"aspersor", nombre:"Aspersora de mochila 20 L", precio:650, categoria:"agricola", desc:"Para fumigación y riego. Correas acolchadas.", imagen:"assets/img/productos/aspersor.jpg", badge:"Mayoreo" },
  { id:"pala-recta", nombre:"Pala recta con cabo", precio:230, categoria:"agricola", desc:"Hoja de acero, mango de madera resistente.", imagen:"assets/img/productos/pala.jpg" },
  { id:"juego-desarm", nombre:"Juego de desarmadores 6 pzas", precio:210, categoria:"mantenimiento", desc:"Planos y de cruz. Mango antiderrapante.", imagen:"assets/img/productos/desarmadores.jpg" },
  { id:"compresor", nombre:"Compresor de aire 25 L 2HP", precio:3200, categoria:"industrial", desc:"Para herramienta neumática y pintura.", imagen:"assets/img/productos/compresor.jpg" },
  { id:"soldadora", nombre:"Soldadora inversora 200A", precio:2450, categoria:"industrial", desc:"Compacta y portátil. Electrodo y TIG.", imagen:"assets/img/productos/soldadora.jpg", badge:"Nuevo" },
  { id:"carretilla", nombre:"Carretilla reforzada 6 ft³", precio:1100, categoria:"agricola", desc:"Llanta neumática, bandeja de acero.", imagen:"assets/img/productos/carretilla.jpg" },
];

/* Nombres legibles de categorías */
const CATEGORY_LABELS = {
  industrial:"Industrial",
  mantenimiento:"Mantenimiento industrial",
  agricola:"Agrícola",
};
