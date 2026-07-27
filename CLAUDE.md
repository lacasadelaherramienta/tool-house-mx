# CLAUDE.md — THE TOOL HOUSE MX

> Archivo de contexto del proyecto. Sirve para que Claude (y cualquier colaborador)
> retomen el trabajo sin perder el hilo, aunque avancemos varias cosas en paralelo.
> Mantener este archivo actualizado cuando cambien decisiones o avance el trabajo.

---

## 0. Estado de ramas (IMPORTANTE)

- **`main`** → **v1**, completa y funcional: diseño "neo-industrial spec-sheet"
  (Saira Condensed/Saira/JetBrains Mono, negro/amarillo `#FFC107`), catálogo **real** de
  22 productos extraído del `Catalogo WEB Tool House 2026.pdf` con sus fotos
  (`assets/img/productos/cat-02.png … cat-23.png`). Queda como snapshot comparable,
  no se toca mientras se trabaja en `rebuild-v2`.
- **`rebuild-v2`** (rama actual) → **reconstrucción completa desde cero**: nuevo diseño
  visual, nuevo código (mismos paths de archivo, reescritos), y **catálogo real** de
  22 productos portado desde `main`/v1 (mismos datos y fotos, `assets/img/productos/`).
  Aún **sin mergear a `main`** — está pensada para compararse antes de reemplazar v1.

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

- [x] **Botón de WhatsApp** para que los clientes manden mensaje (pedidos y dudas).
- [x] **Botón "Agregar al carrito"** en cada herramienta/producto.
- [x] **Carrito de compras** para comprar las herramientas en línea.

## 4. Decisiones técnicas (CONFIRMADAS por el cliente)

| Tema | Decisión | Por qué |
|------|----------|---------|
| **Tipo de carrito / pagos** | ✅ Pedido por **WhatsApp**: el carrito arma un mensaje con productos, cantidades y total, y abre WhatsApp con ese texto. El cobro se cierra manualmente. | Ideal para mayoreo (precios negociables, cotizaciones), más barato y rápido de lanzar. Se puede migrar a pago en línea después. |
| **Tecnología** | ✅ **HTML + CSS + JavaScript** puro (sin framework). | Ligero, fácil de subir a cualquier hosting, sin costos ni dependencias. Suficiente para landing + catálogo + carrito. |
| **Catálogo de productos** | ✅ **Lista fija** en un archivo de datos (`products.js`), poblada con los 22 productos reales del cliente (portados a `rebuild-v2`). | Sin base de datos. Fácil de editar a mano. Migrable a panel de administración después. |
| **Persistencia del carrito** | `localStorage` del navegador (clave `thmx_cart`). | El carrito sobrevive recargas sin necesidad de backend. |
| **Hosting sugerido** | Estático (Netlify, Vercel, GitHub Pages o hosting tradicional). | Costo $0 o muy bajo. |

### Mejoras futuras posibles (no en v1/v2)
- Pago en línea real (Mercado Pago / Stripe).
- Panel de administración para editar productos sin tocar código.
- Cálculo de envíos / integración con paquetería.
- SEO y dominio propio.

## 5. Recursos del cliente (imágenes y catálogos)

- **Catálogo real:** 22 productos extraídos del `Catalogo WEB Tool House 2026.pdf`
  (texto + fotos vía PyMuPDF), guardados en `assets/img/productos/cat-02.png … cat-23.png`
  con `sku`, `nombre`, `precio`, `categoria` (industrial 15 / mantenimiento 2 / agrícola 5)
  y `desc`. Ya está portado a `js/products.js` en `rebuild-v2` con el nuevo diseño
  "FIERRO VIVO" (mismos datos y fotos que en `main`/v1).
- **Catálogos PDF de referencia (en el Escritorio):**
  - `Catalogo Burcat Power.pdf`
  - `Catalogo Tool House 2026.pdf` (catálogo propio 2026)
- Otras carpetas en el Escritorio que pueden tener material: `HERRAMIENTA`, `Herramientas`,
  `fotos soldadora base`, `/Users/usuario/Desktop/imagenes burcat ` (100 fotos sin clasificar).

### Datos aún pendientes de confirmar
> ⚠️ Reemplazar los placeholders cuando el cliente los proporcione.

- **Logotipo:** ✅ recibido (círculo gris oscuro + casa naranja + "The Tool House mx"),
  vive en `assets/img/marca/logo.png` — se conserva igual en `rebuild-v2`.
- **Horario de atención / dirección física** en Irapuato.
- **Redes sociales** (Facebook, Instagram, etc.).
- **Métodos de pago aceptados** (transferencia, efectivo, etc.).
- **Políticas de envío y devoluciones.**

## 5.1. Referencia de diseño — "FIERRO VIVO" (rebuild-v2)

> Dirección de diseño nueva para `rebuild-v2`, deliberadamente distinta del "neo-industrial
> spec-sheet" de v1 (negro/amarillo, Saira, blueprint grid). Concepto: taller/ferretería
> mexicana — cálido y terroso en vez de frío tipo cinta de peligro.

- **Paleta:** óxido/naranja terracota `#C1440E`–`#C65D2E` (acento), carbón cálido `#2B2621`
  (base), beige tipo concreto/papel `#EDE6DA` (fondo), gris azulado acero `#5C6B73`
  (etiquetas de categoría).
- **Tipografía:** display geométrico bold **Space Grotesk** (o Archivo Black), cuerpo
  **Work Sans** (o Inter), precios/SKU/specs en slab serif **Roboto Slab** (evoca placas
  metálicas estampadas). Sin repetir Barlow ni Saira (ya usadas en v1).
- **Motivo visual:** placas estampadas con números, textura de lámina corrugada, remaches
  en esquinas de tarjetas, borde de papel gastado, franjas chevron en naranja óxido en vez
  de amarillo precaución.
- **Sombras:** suaves y "asentadas" con bisel tipo estampado, en vez de las sombras duras
  offset de v1 — más cálido, menos agresivo, sigue siendo claramente industrial.

*(La referencia "Jantrik" y el estilo neo-industrial/spec-sheet quedan documentados en el
historial de `main`/v1 si se necesita consultar esa dirección anterior.)*

## 6. Estructura del sitio (rebuild-v2)

```
proyecto landing page/
├── CLAUDE.md            # este archivo (contexto)
├── index.html           # página principal (landing + catálogo + carrito)
├── css/
│   └── styles.css       # estilos — dirección "FIERRO VIVO"
├── js/
│   ├── products.js      # catálogo REAL (22 productos, portados de v1, ver §5)
│   ├── cart.js           # módulo Cart + localStorage (clave thmx_cart)
│   ├── whatsapp.js       # arma el mensaje del pedido y abre WhatsApp
│   └── app.js             # render de catálogo/carrito, filtros, UI
└── assets/
    └── img/
        ├── productos/    # fotos reales (cat-02…cat-23), usadas en el catálogo
        └── marca/         # logo.png (se conserva igual)
```

**Notas de implementación:**
- Cada script se cuelga de un único namespace (`window.THMX`) en vez de globals sueltos.
- Catálogo con fotos reales: `product-card__media` muestra la foto del producto
  (`object-fit:contain`, ya que las fotos extraídas del PDF tienen relación de aspecto
  variable); si una imagen falla al cargar, cae automáticamente al ícono por categoría
  (llave/engrane/planta) como respaldo.
- El carrito persiste en `localStorage` (clave `thmx_cart`, forma `[{id, qty}]`).

### Secciones de la página (index.html)
1. **Header / navbar** con logo y nombre.
2. **Hero** con propuesta de valor (mayoreo y menudeo, envíos a todo México) y CTA a WhatsApp.
3. **Categorías** (Mantenimiento industrial / Agrícola / Industrial).
4. **Catálogo de productos** (real) con tarjetas: foto, nombre, precio, botón "Agregar al carrito".
5. **Carrito** (panel lateral): lista de items, cantidades, total, botón "Pedir por WhatsApp".
6. **Sección de contacto / ubicación** (Irapuato).
7. **Footer** con datos del negocio.
8. **Botón flotante de WhatsApp** siempre visible.

## 7. Detalle de funcionalidades clave

### Botón de WhatsApp
- Botón flotante fijo (esquina inferior derecha) + CTAs en hero y contacto.
- Enlace: `https://wa.me/524623299168?text=<mensaje>` (formato internacional sin signos).
- Mensaje base: "Hola THE TOOL HOUSE MX, me interesa información sobre sus herramientas."

### Agregar al carrito
- Cada producto tiene `id`, `sku`, `nombre`, `precio`, `categoria`, `desc`, `imagen`, `badge`.
- Al hacer clic se agrega al carrito (o incrementa cantidad) y se guarda en `localStorage`.

### Carrito → pedido por WhatsApp
- Muestra productos, cantidades, subtotal y total.
- Permite cambiar cantidades y eliminar items.
- Botón final genera un mensaje itemizado y abre WhatsApp con ese texto prellenado.

## 8. Estado del proyecto / TODO (rebuild-v2)

- [x] Comitear v1 en `main` como snapshot y crear rama `rebuild-v2`.
- [x] Reescribir `CLAUDE.md` con la nueva dirección y estado de ramas.
- [x] Escribir `js/products.js` (12 productos de ejemplo, 4 por categoría).
- [x] Escribir `js/cart.js` (módulo Cart + localStorage, namespace `window.THMX`).
- [x] Escribir `js/whatsapp.js` (builders de mensaje/URL).
- [x] Escribir `js/app.js` (render + eventos).
- [x] Reescribir `index.html` con la nueva estructura y fuentes.
- [x] Reescribir `css/styles.css` con la dirección "FIERRO VIVO" (con skill `frontend-design`).
- [x] Verificar en navegador (desktop 1280px + móvil 375px): WhatsApp flotante, agregar al
  carrito, panel de carrito (cantidades, total, mensaje de pedido), persistencia en
  `localStorage` tras recargar, sin errores de consola.
- [x] Portar los 22 productos reales de v1 (datos + fotos) al catálogo de `rebuild-v2`.
- [ ] Reemplazar placeholders restantes (horario, redes sociales, métodos de pago).
- [ ] Decidir merge de `rebuild-v2` → `main` una vez aprobado por el cliente.
- [ ] Publicar (hosting + dominio).

> Herramienta instalada para procesar PDFs: **PyMuPDF** (`python3 -m pip install --user PyMuPDF`).
> Útil si se decide volver a extraer fotos/textos del catálogo real.

## 9. Notas de trabajo

- Diseño **mobile-first** (la mayoría de clientes entrarán desde el celular).
- Todo el texto de cara al usuario en **español**.
- Mantener este archivo como única fuente de verdad del contexto.

*(Última actualización: 2026-07-27 — catálogo real de 22 productos portado de v1 al rediseño "FIERRO VIVO" en rama `rebuild-v2`.)*
