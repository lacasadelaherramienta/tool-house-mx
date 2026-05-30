# CLAUDE.md — THE TOOL HOUSE MX

> Archivo de contexto del proyecto. Sirve para que Claude (y cualquier colaborador)
> retomen el trabajo sin perder el hilo, aunque avancemos varias cosas en paralelo.
> Mantener este archivo actualizado cuando cambien decisiones o avance el trabajo.

---

## 1. Resumen del negocio

- **Nombre comercial:** THE TOOL HOUSE MX
- **Ubicación:** Irapuato, Guanajuato, México.
- **Giro:** Venta de herramientas para:
  - Mantenimiento industrial
  - Uso agrícola
  - Uso industrial en general
- **Modelo de venta:** Principalmente **mayoreo**, pero también **menudeo**.
- **Cobertura:** Toda la República Mexicana (envíos a nivel nacional).
- **Idioma del sitio:** Español (México).
- **WhatsApp del negocio:** `+52 462 329 9168` → formato wa.me: `524623299168`
- **Correo de contacto:** `toolhousemx98@gmail.com`

## 2. Objetivo de la página web

Crear una **landing page / tienda** que permita a los clientes:

1. Conocer el negocio y los productos (herramientas).
2. **Contactar por WhatsApp** para hacer pedidos y aclarar dudas (botón destacado).
3. **Agregar herramientas a un carrito** y comprar en línea.

## 3. Funcionalidades requeridas (del cliente)

- [ ] **Botón de WhatsApp** para que los clientes manden mensaje (pedidos y dudas).
- [ ] **Botón "Agregar al carrito"** en cada herramienta/producto.
- [ ] **Carrito de compras** para comprar las herramientas en línea.

## 4. Decisiones técnicas (CONFIRMADAS por el cliente)

| Tema | Decisión | Por qué |
|------|----------|---------|
| **Tipo de carrito / pagos** | ✅ Pedido por **WhatsApp**: el carrito arma un mensaje con productos, cantidades y total, y abre WhatsApp con ese texto. El cobro se cierra manualmente. | Ideal para mayoreo (precios negociables, cotizaciones), más barato y rápido de lanzar. Se puede migrar a pago en línea después. |
| **Tecnología** | ✅ **HTML + CSS + JavaScript** puro (sin framework). | Ligero, fácil de subir a cualquier hosting, sin costos ni dependencias. Suficiente para landing + catálogo + carrito. |
| **Catálogo de productos** | ✅ **Lista fija** en un archivo de datos (`products.js`), poblada con las imágenes reales del cliente. | Sin base de datos. Fácil de editar a mano. Migrable a panel de administración después. |
| **Persistencia del carrito** | `localStorage` del navegador. | El carrito sobrevive recargas sin necesidad de backend. |
| **Hosting sugerido** | Estático (Netlify, Vercel, GitHub Pages o hosting tradicional). | Costo $0 o muy bajo. |

### Mejoras futuras posibles (no en v1)
- Pago en línea real (Mercado Pago / Stripe).
- Panel de administración para editar productos sin tocar código.
- Buscador y filtros por categoría.
- Cálculo de envíos / integración con paquetería.
- SEO y dominio propio.

## 5. Recursos del cliente (imágenes y catálogos)

> Material que ya proporcionó el cliente. **Vive fuera del proyecto** (en el Escritorio);
> al construir el sitio hay que **copiar** las imágenes seleccionadas a `assets/img/productos/`.

- **Carpeta de fotos de productos:** `/Users/usuario/Desktop/imagenes burcat ` *(¡ojo: el nombre termina con un espacio!)*
  - **100 imágenes** (`.jpg` / `.JPG`). Nombres no descriptivos (UUID e `IMG_####`), aún sin clasificar por producto.
- **Catálogos PDF de referencia (en el Escritorio):**
  - `Catalogo Burcat Power.pdf`
  - `Catalogo Tool House 2026.pdf` (catálogo propio 2026)
- Otras carpetas en el Escritorio que pueden tener material: `HERRAMIENTA`, `Herramientas`, `fotos soldadora base`.

### Datos aún pendientes de confirmar
> ⚠️ Reemplazar los placeholders cuando el cliente los proporcione.

- **Nombres, precios y descripciones** de cada herramienta (las fotos no están etiquetadas).
- **Categorización** de cada imagen (Mantenimiento industrial / Agrícola / Industrial).
- **Logotipo / imágenes de marca.**
- **Colores de marca:** pendiente. Provisional: paleta industrial (negro, amarillo/naranja "construcción", gris).
- **Horario de atención / dirección física** en Irapuato.
- **Redes sociales** (Facebook, Instagram, etc.).
- **Métodos de pago aceptados** (transferencia, efectivo, etc.).
- **Políticas de envío y devoluciones.**

## 5.1. Referencia de diseño (plantilla "Jantrik")

> El cliente eligió como referencia visual la plantilla **Jantrik – Bootstrap4 Template
> for Tools & Equipment Store** (ThemeForest, item 22094940).
> NO se compra ni copia el código; se replica el **look & feel** con HTML/CSS/JS propio.
> Estilo aplicado: estética industrial, acento **amarillo construcción** (`#FFC107`) sobre
> negros (`#1a1d21`) y grises claros. Top bar, header con buscador + carrito con contador,
> navbar de categorías, hero oscuro, cajas de categoría, grid de tarjetas con "Agregar al
> carrito", banner de mayoreo, contacto y footer oscuro de columnas.

## 6. Estructura propuesta del sitio (v1)

```
proyecto landing page/
├── CLAUDE.md            # este archivo (contexto)
├── index.html           # ✅ página principal (landing + catálogo + carrito)
├── css/
│   └── styles.css       # ✅ estilos (estética industrial amarillo/negro)
├── js/
│   ├── products.js      # ✅ datos del catálogo (PRODUCTS) — hoy con ejemplos
│   ├── cart.js          # ✅ lógica del carrito (módulo Cart + localStorage)
│   ├── whatsapp.js      # ✅ arma el mensaje del pedido y abre WhatsApp
│   └── app.js           # ✅ render de catálogo/carrito, filtros, búsqueda, UI
└── assets/
    └── img/
        ├── productos/   # fotos de herramientas (pendiente copiar desde el Escritorio)
        └── marca/       # logo e imágenes de marca (pendiente)
```

**Notas de implementación (v1 ya construida):**
- Catálogo y carrito funcionan 100% en el navegador, sin backend.
- Si una imagen de `assets/img/productos/` no existe, la tarjeta muestra un **placeholder**
  con ícono automáticamente (función `placeholder()` en `app.js`), así que el sitio se ve
  bien aunque aún no se copien las fotos reales.
- El carrito persiste en `localStorage` (clave `thmx_cart`).
- Filtros por categoría (navbar y cajas), búsqueda en vivo, botón flotante de WhatsApp,
  panel lateral de carrito y toast de confirmación: ya implementados.

### Secciones de la página (index.html)
1. **Header / navbar** con logo y nombre.
2. **Hero** con propuesta de valor (mayoreo y menudeo, envíos a todo México) y CTA a WhatsApp.
3. **Categorías** (Mantenimiento industrial / Agrícola / Industrial).
4. **Catálogo de productos** con tarjetas: imagen, nombre, precio, botón "Agregar al carrito".
5. **Carrito** (panel lateral o modal): lista de items, cantidades, total, botón "Pedir por WhatsApp".
6. **Sección de contacto / ubicación** (Irapuato).
7. **Footer** con datos del negocio y redes.
8. **Botón flotante de WhatsApp** siempre visible.

## 7. Detalle de funcionalidades clave

### Botón de WhatsApp
- Botón flotante fijo (esquina inferior derecha) + CTAs en hero y contacto.
- Enlace: `https://wa.me/524623299168?text=<mensaje>` (formato internacional sin signos).
- Mensaje base sugerido: "Hola THE TOOL HOUSE MX, me interesa información sobre sus herramientas."

### Agregar al carrito
- Cada producto tiene `id`, `nombre`, `precio`, `categoria`, `imagen`.
- Al hacer clic se agrega al carrito (o incrementa cantidad) y se guarda en `localStorage`.

### Carrito → pedido por WhatsApp
- Muestra productos, cantidades, subtotal y total.
- Permite cambiar cantidades y eliminar items.
- Botón final genera un mensaje tipo:
  ```
  Hola THE TOOL HOUSE MX, quiero hacer este pedido:
  - 2x Taladro industrial — $X
  - 1x Llave Stilson — $X
  Total: $X
  ```
  y abre WhatsApp con ese texto prellenado.

## 8. Estado del proyecto / TODO

- [x] Definir contexto del proyecto (este `CLAUDE.md`).
- [x] Confirmar decisiones técnicas (carrito WhatsApp, HTML/CSS/JS, lista fija).
- [x] Confirmar WhatsApp (+52 462 329 9168) y ubicar carpeta de imágenes.
- [x] Definir referencia de diseño (plantilla Jantrik — industrial amarillo/negro).
- [x] Maquetar `index.html` y `styles.css` (estructura y diseño base).
- [x] Crear catálogo de ejemplo (`products.js`).
- [x] Implementar lógica del carrito (`cart.js` + `app.js`).
- [x] Implementar botón/mensaje de WhatsApp (`whatsapp.js`).
- [x] **Rediseño visual audaz (neo-industrial)**: tipografía Barlow Condensed + Barlow,
  alto contraste negro/amarillo con bloques de color, sombras duras tipo offset, franja
  de precaución como sello de marca, micro-interacciones "press". Secciones nuevas: band
  de stats (números grandes) y "Cómo comprar" en 3 pasos. La lógica JS (carrito, WhatsApp,
  filtros, búsqueda, placeholders) se conservó intacta. Bug corregido: `overflow-x:hidden`
  en `body` → `overflow-x:clip` (evita un contenedor de scroll paralelo).
- [x] Pruebas en móvil (375px) y escritorio: catálogo, carrito, mensaje de WhatsApp,
  filtros y búsqueda verificados en navegador.
- [ ] Clasificar/seleccionar imágenes y copiarlas a `assets/img/productos/`.
- [ ] Obtener del cliente nombres, precios y categorías reales → editar `products.js`.
- [ ] Reemplazar placeholders (logo, colores, horario, redes).
- [ ] Publicar (hosting + dominio).

## 9. Notas de trabajo

- Diseño **mobile-first** (la mayoría de clientes entrarán desde el celular).
- Todo el texto de cara al usuario en **español**.
- Mantener este archivo como única fuente de verdad del contexto.
```
*(Última actualización: 2026-05-30)*
