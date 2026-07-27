/* ====== Catálogo de productos — THE TOOL HOUSE MX ======
 * Datos REALES tomados del "Catálogo WEB Tool House 2026.pdf".
 * Las fotos se extrajeron del mismo PDF a assets/img/productos/ (cat-XX.png).
 *
 * Cómo editar / agregar un producto:
 *   - id:        identificador único (texto corto, sin espacios)
 *   - sku:       código del producto (aparece en el pedido de WhatsApp)
 *   - nombre:    nombre del producto
 *   - precio:    número (sin símbolo $). Usa 0 si el precio es "a cotizar".
 *   - categoria: "industrial" | "mantenimiento" | "agricola"
 *   - desc:      descripción corta
 *   - imagen:    ruta a la foto, ej: "assets/img/productos/cat-02.png"
 *   - badge:     (opcional) etiqueta como "Oferta", "Nuevo", "Mayoreo"
 *
 * Nota: la "Soldadora MMA 250" ($2,500) aparece 3 veces con SKU distinto
 *       (MMA160001 / MMA16002 / MMA160003) → 3 tarjetas separadas (cat-02/04/06).
 */
const PRODUCTS = [
  // ---------- SOLDADURA ----------
  { id:"soldadora-mma250-1", sku:"MMA160001", nombre:"Soldadora MMA 250 Inverter", precio:2500, categoria:"industrial",
    desc:"Inverter 250 A, 110/220 V. Stick ARC para electrodo revestido de 1.6 a 4.0 mm (70/18, 60/13, 60/11) y acero inoxidable.",
    imagen:"assets/img/productos/cat-02.png" },

  { id:"soldadora-mma250-2", sku:"MMA16002", nombre:"Soldadora MMA 250 Inverter", precio:2500, categoria:"industrial",
    desc:"Inverter 250 A, 110/220 V. Stick ARC para electrodo revestido de 1.6 a 4.0 mm (70/18, 60/13, 60/11) y acero inoxidable.",
    imagen:"assets/img/productos/cat-04.png" },

  { id:"soldadora-mma250-3", sku:"MMA160003", nombre:"Soldadora MMA 250 Inverter", precio:2500, categoria:"industrial",
    desc:"Inverter 250 A, 110/220 V. Stick ARC para electrodo revestido de 1.6 a 4.0 mm (70/18, 60/13, 60/11) y acero inoxidable.",
    imagen:"assets/img/productos/cat-06.png" },

  { id:"motosoldadora-bp160w", sku:"BP160W", nombre:"Motosoldadora 160A a gasolina con generador", precio:8900, categoria:"industrial",
    desc:"Ideal para trabajos sin acceso a energía eléctrica. Motor 4 tiempos 236 cc, electrodos 6013 de 2 a 6 mm, generador 1500 W, tanque 7 L. Peso 29 kg.",
    imagen:"assets/img/productos/cat-03.png", badge:"Top" },

  { id:"soldadora-arc250", sku:"ARC250-RA", nombre:"Soldadora ARC 250 Rojo/Azul", precio:2900, categoria:"industrial",
    desc:"Inverter 250 A, 110/220 V. Stick ARC para electrodo revestido de 1.6 a 4.0 mm (70/18, 60/13, 60/11) y acero inoxidable.",
    imagen:"assets/img/productos/cat-07.png" },

  { id:"soldadora-mig-mma", sku:"MIG-MMA-RA", nombre:"Soldadora MIG-MMA 2 en 1 Rojo/Azul", precio:3150, categoria:"industrial",
    desc:"Electrodo y microalambre. Bi-voltaje 120/220 V. 200 A electrodo / 140 A microalambre. Para metal, fierro colado, inoxidable y aluminio. Incluye maletín, pistola Magnum y accesorios.",
    imagen:"assets/img/productos/cat-08.png", badge:"Nuevo" },

  // ---------- GENERADORES ----------
  { id:"generador-bp4500x", sku:"BP-4500X", nombre:"Generador eléctrico 4000 W a gasolina", precio:5900, categoria:"industrial",
    desc:"110/220 V, 50 Hz. Motor a gasolina 7.5 HP, encendido eléctrico. Tanque 15 L (50 min por litro). Peso 46 kg.",
    imagen:"assets/img/productos/cat-05.png" },

  { id:"generador-bp2800", sku:"BP-2800", nombre:"Generador eléctrico 3000 W a gasolina", precio:4700, categoria:"industrial",
    desc:"110/220 V, 50 Hz. Motor a gasolina 7.5 HP, encendido eléctrico. Tanque 15 L (50 min por litro). Peso 43 kg.",
    imagen:"assets/img/productos/cat-11.png" },

  // ---------- HIDROLAVADORAS (mantenimiento) ----------
  { id:"hidrolavadora-180c", sku:"180C", nombre:"Hidrolavadora 180C · 3100 PSI", precio:5000, categoria:"mantenimiento",
    desc:"Potencia 7.5 HP, 3100 PSI. Base metálica con 4 llantas. Incluye manguera de 10 m, 5 boquillas, pistola de alta presión, filtro y kit de servicio.",
    imagen:"assets/img/productos/cat-09.png" },

  { id:"hidrolavadora-180nb", sku:"180NB", nombre:"Hidrolavadora BP-180NB · 3100 PSI", precio:5000, categoria:"mantenimiento",
    desc:"Motor 7.5 HP, 3100 PSI, depósito de jabón/shampoo. Incluye manguera de 10 m, 5 boquillas, pistola Honda de alta presión, filtro y kit de servicio.",
    imagen:"assets/img/productos/cat-10.png" },

  // ---------- DEMOLICIÓN / ROTOMARTILLOS ----------
  { id:"rompedor-1700n", sku:"1700N", nombre:"Martillo demoledor eléctrico 1700 W", precio:4000, categoria:"industrial",
    desc:"120 V, 60 Hz, 14 A. Potencia 1700 W, energía de impacto 65 J, 1900 golpes/min. Peso 16.2 kg. Incluye 2 puntas.",
    imagen:"assets/img/productos/cat-12.png" },

  { id:"rompedor-bp2200", sku:"BP2200", nombre:"Martillo demoledor 2200 W", precio:10000, categoria:"industrial",
    desc:"120 V, 60 Hz, 15 A. Potencia 2200 W, percusión 62 J, 1000 golpes/min. Equipo de uso rudo. Peso 29 kg.",
    imagen:"assets/img/productos/cat-13.png" },

  { id:"rotomartillo-r1600h", sku:"R1600H", nombre:"Rotomartillo y rompedor 42 mm SDS-Max", precio:3100, categoria:"industrial",
    desc:"Modelo R1600H, 127 V, 60 Hz. Potencia 1600 W, 0-560 rpm, 3530 golpes/min, 9 J. Incluye estuche, cincel, broca y punta.",
    imagen:"assets/img/productos/cat-15.png" },

  { id:"rotomartillo-r26n", sku:"R26N", nombre:"Rotomartillo demoledor 26 mm SDS-Plus", precio:1400, categoria:"industrial",
    desc:"127 V, 60 Hz. Potencia 1500 W, impacto 3.5 J. Perforación: metal 13 mm / madera 42 mm / concreto 26 mm. Peso 3.4 kg.",
    imagen:"assets/img/productos/cat-17.png" },

  { id:"rotomartillo-50mb", sku:"50MB", nombre:"Rotomartillo y rompedor 50 mm SDS-Max", precio:4000, categoria:"industrial",
    desc:"Potencia 1600 W, 110-127 V / 60 Hz. Impacto 25 J, 2300 golpes/min. Perforación hormigón hasta 50 mm. Peso 14 kg. Incluye cincel, broca, carbones y maletín.",
    imagen:"assets/img/productos/cat-18.png" },

  // ---------- INALÁMBRICAS / ESMERIL ----------
  { id:"set-makita-tt01", sku:"TT01", nombre:"Set inalámbrico Makita (taladro + impacto + esmeril + llave)", precio:4200, categoria:"industrial",
    desc:"Kit con taladro atornillador 21 V, destornillador de impacto, esmeriladora DGA458 (8500 rpm, disco 115 mm) y llave de impacto DTW190 1/2\". 2 baterías (2 y 4 Ah), cargador, dados, brocas y maletín.",
    imagen:"assets/img/productos/cat-14.png", badge:"Kit" },

  { id:"esmeril-makita-115", sku:"ESM115-800", nombre:"Esmeriladora Makita 115 mm 800 W", precio:1300, categoria:"industrial",
    desc:"127 V, 50/60 Hz. Disco de 115 mm, corte hasta 15 mm, 850 W, 11000 rpm. Botón de bloqueo de disco, interruptor de tecla, protector incorporado. Incluye llave. Peso 2 kg.",
    imagen:"assets/img/productos/cat-16.png" },

  // ---------- AGRÍCOLA: MOTOSIERRAS ----------
  { id:"motosierra-cs5800", sku:"MCS5800", nombre:"Motosierra CS5800 · 58 cc · espada 22\"", precio:1500, categoria:"agricola",
    desc:"Motor 1 cilindro 2 tiempos, 58 cc, 2.4 kW. Espada 22\", cadena 3/8\". 10000 rpm. Peso 7.5 kg. Incluye estuche y bolsa.",
    imagen:"assets/img/productos/cat-19.png" },

  { id:"motosierra-cs5807", sku:"MCS5807", nombre:"Motosierra CS5807 · 58 cc · espada 22\"", precio:1550, categoria:"agricola",
    desc:"Motor 1 cilindro 2 tiempos, 58 cc, 2.4 kW. Espada 22\", cadena 3/8\". 10000 rpm. Peso 7.5 kg. Incluye estuche y bolsa.",
    imagen:"assets/img/productos/cat-20.png" },

  // ---------- AGRÍCOLA: DESBROZADORAS ----------
  { id:"desbrozadora-b52n", sku:"B52N", nombre:"Desbrozadora B52N · 52 cc", precio:1800, categoria:"agricola",
    desc:"Motor gasolina 2T, 52 cc, 2 HP/8000 rpm. Eje recto con varilla reforzada. Disco de 3 puntas e hilo. Incluye arnés, carrete de nailon y juego de llaves. Peso 7.9 kg.",
    imagen:"assets/img/productos/cat-21.png" },

  { id:"desbrozadora-b52", sku:"B52", nombre:"Desbrozadora B52 · 52 cc", precio:1700, categoria:"agricola",
    desc:"Motor gasolina 2T, 52 cc, 2 HP/8000 rpm. Eje recto. Disco de 3 puntas e hilo. Incluye arnés, carrete de nailon y juego de llaves. Peso 7.9 kg.",
    imagen:"assets/img/productos/cat-22.png" },

  { id:"desbrozadora-bmt52", sku:"BMT52", nombre:"Desbrozadora multifuncional BMT52 · 52 cc", precio:2800, categoria:"agricola",
    desc:"Motor gasolina 2T, 52 cc, 2 HP/8000 rpm. Multifuncional. Disco de 3 puntas e hilo. Incluye arnés, carrete de nailon y juego de llaves. Peso 7.9 kg.",
    imagen:"assets/img/productos/cat-23.png", badge:"Multiusos" },
];

/* Nombres legibles de categorías */
const CATEGORY_LABELS = {
  industrial:"Industrial",
  mantenimiento:"Mantenimiento industrial",
  agricola:"Agrícola",
};
