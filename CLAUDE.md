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
- **`rebuild-v2`** (rama actual) → **reconstrucción completa desde cero**: nuevo código
  (mismos paths de archivo, reescritos), **catálogo real** de 22 productos portado desde
  `main`/v1 (mismos datos y fotos, `assets/img/productos/`), logo real, y dirección visual
  inspirada en la plantilla **Jantrik** (amarillo/negro, ver §5.1) — reemplazó a un primer
  intento "FIERRO VIVO" (óxido/carbón) que se descartó dentro de la misma rama.
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
  y `desc`. Ya está portado a `js/products.js` en `rebuild-v2` (mismos datos y fotos que
  en `main`/v1), ahora con el rediseño inspirado en la plantilla Jantrik (§5.1).
- **Catálogos PDF de referencia (en el Escritorio):**
  - `Catalogo Burcat Power.pdf`
  - `Catalogo Tool House 2026.pdf` (catálogo propio 2026)
- Otras carpetas en el Escritorio que pueden tener material: `HERRAMIENTA`, `Herramientas`,
  `fotos soldadora base`, `/Users/usuario/Desktop/imagenes burcat ` (100 fotos sin clasificar).

### Datos aún pendientes de confirmar
> ⚠️ Reemplazar los placeholders cuando el cliente los proporcione.

- **Logotipo:** ✅ recibido y ya presente como archivo en `assets/img/marca/logo.png`
  (círculo negro + casa naranja + "The Tool House mx" en script blanco), 240×240 px
  (redimensionado del original de 1894×1894 px para no servir un PNG pesado en el header).
- **Horario de atención / dirección física** en Irapuato.
- **Redes sociales** (Facebook, Instagram, etc.).
- **Métodos de pago aceptados** (transferencia, efectivo, etc.).
- **Políticas de envío y devoluciones.**

## 5.1. Referencia de diseño — plantilla "Jantrik" (rebuild-v2, dirección actual)

> El cliente compartió de nuevo la plantilla **Jantrik – Bootstrap4 Template for Tools &
> Equipment Store** (ThemeForest, item 22094940) como referencia visual. NO se compra ni
> copia el código; se replica el **look & feel** con HTML/CSS/JS propio (mismo criterio
> usado en v1). Esta dirección **reemplazó** a la anterior "FIERRO VIVO" (óxido/carbón/beige)
> dentro de `rebuild-v2` — FIERRO VIVO queda documentada en el historial de git de esta
> misma rama si se quiere recuperar.

- **Paleta:** amarillo construcción `#FFC107` (acento) sobre negro/gris tinta `#16181c`–
  `#33363c`, fondo claro tipo e-commerce `#f5f6f8` y tarjetas blancas — look de tienda
  clásica, no de taller artesanal.
- **Tipografía:** **Oswald** (condensada, mayúsculas, para títulos/botones/precios/nav) +
  **Work Sans** (cuerpo). Reemplaza a Space Grotesk/Roboto Slab de FIERRO VIVO.
- **Estructura tipo Jantrik:** top bar (ubicación/correo/envíos/teléfono) → header con
  logo + **buscador en vivo** + botón de carrito con contador → navbar de categorías
  (fondo negro, franja activa amarilla) + link "Cotiza a mayoreo" → hero oscuro con CTA
  amarillo → cajas de categoría (borde superior amarillo) → grid de productos en tarjetas
  blancas → banner de mayoreo en bloque amarillo sólido → contacto → footer oscuro de
  columnas con franja chevron amarilla/negra como divisor de marca.
- **Buscador:** filtra el catálogo en vivo por nombre, descripción y SKU (`js/app.js`),
  combinado con el filtro de categoría existente.

## 6. Estructura del sitio (rebuild-v2)

```
proyecto landing page/
├── CLAUDE.md            # este archivo (contexto)
├── index.html           # página principal (landing + catálogo + carrito)
├── css/
│   └── styles.css       # estilos — dirección inspirada en plantilla Jantrik (§5.1)
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
- [x] Escribir `js/cart.js` (módulo Cart + localStorage, namespace `window.THMX`).
- [x] Escribir `js/whatsapp.js` (builders de mensaje/URL).
- [x] Escribir `js/app.js` (render + eventos + búsqueda en vivo).
- [x] Reescribir `index.html` con la estructura tipo Jantrik (topbar, buscador, navbar).
- [x] Portar los 22 productos reales de v1 (datos + fotos) al catálogo de `rebuild-v2`.
- [x] Importar logo real (`assets/img/marca/logo.png`).
- [x] Aplicar dirección visual "Jantrik" (amarillo/negro, Oswald + Work Sans) — reemplaza
  al primer intento "FIERRO VIVO".
- [x] Verificar en navegador (desktop 1280px + móvil 375px): WhatsApp flotante, buscador en
  vivo, agregar al carrito, panel de carrito (cantidades, total, mensaje de pedido),
  persistencia en `localStorage` tras recargar, sin errores de consola.
- [ ] Reemplazar placeholders restantes (horario, redes sociales, métodos de pago).
- [ ] Decidir merge de `rebuild-v2` → `main` una vez aprobado por el cliente.
- [ ] Publicar (hosting + dominio).

> Herramienta instalada para procesar PDFs: **PyMuPDF** (`python3 -m pip install --user PyMuPDF`).
> Útil si se decide volver a extraer fotos/textos del catálogo real.

## 9. Notas de trabajo

- Diseño **mobile-first** (la mayoría de clientes entrarán desde el celular).
- Todo el texto de cara al usuario en **español**.
- Mantener este archivo como única fuente de verdad del contexto.

*(Última actualización: 2026-07-27 — dirección visual de `rebuild-v2` cambiada a la
referencia "Jantrik" (amarillo/negro, topbar + buscador + navbar), reemplazando el primer
intento "FIERRO VIVO"; logo real y catálogo de 22 productos ya integrados.)*
