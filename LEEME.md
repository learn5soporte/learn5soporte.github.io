# Learn5 · homepage V2 · entorno de desarrollo

**No está publicado.** Vive solo en esta carpeta. La web de producción (`learn5.pro`) sigue intacta.

```
LEARN5-WEB-NUEVA/
├── index.html          65 KB · la página entera, autocontenida
├── LEEME.md            este archivo
└── assets/            380 KB · 6 imágenes
    ├── hero-banda.jpg             2048×586  (banda completa del hero)
    ├── curso-1.jpg … curso-4.jpg   928×344 cada una
    └── institucional-edificio.jpg 1254×588
```

`hero-astronauta.jpg` quedó obsoleto: el hero ya no es una figura recortada.

**Para verlo:** doble clic en `index.html`. Se abre en el navegador y funciona todo — no hay que instalar ni compilar nada.

---

## Por qué un solo archivo y no React

El prompt maestro sugería React/Vite o Next.js. No lo hice, y es una decisión deliberada:

Tu sitio entero son archivos estáticos en GitHub Pages, y tú publicas **arrastrando archivos a la web de GitHub**. Un proyecto con React necesita `npm install`, un paso de compilación y una tubería de despliegue que hoy no puedes operar tú solo. El propio prompt pedía «un stack estable y sencillo» y «no añadir dependencias pesadas».

Un HTML autocontenido se sube igual que el resto de tu sitio, carga más rápido y no se rompe cuando nadie lo mantiene. La arquitectura sigue permitiendo añadir después `formacion.html`, `soluciones.html`, `alianzas.html`, `comunidad.html` y `contacto.html` compartiendo el mismo sistema de diseño.

---

## 1 · Qué botones funcionan de verdad

| Botón | Qué hace hoy |
|---|---|
| Explorar formación / Quiero comenzar | Baja a Formación destacada. **Funciona** |
| Ver los 30 días · rutas · anclas del menú | Navegación interna. **Funciona** |
| Domina la IA en 30 Días | Abre `learn5.pro/ia-30-dias/`. **Funciona** |
| IA en el Aula · Transforma tu Futuro · Guía Digital | Abren el catálogo de Hotmart. **Funciona**, pero no es página propia |
| Catálogo completo / Ver todos los programas | Hotmart. **Funciona** |
| Clase Futura (Recursos y Comunidad) | Newsletter de LinkedIn. **Funciona** |
| Redes sociales y WhatsApp del pie | **Funcionan** |
| Correo y teléfono | **Funcionan** |
| **Agendar reunión / Hablar con un asesor** | Abre el formulario, valida y **envía** a contacto@learn5.tech. Recoge también la franja horaria |
| **Solicitar una propuesta** | Formulario B2B completo, valida y **envía** |
| **Conversemos sobre una alianza** | Formulario de alianzas, valida y **envía** |
| **Suscribirme a Clase Futura** | Abre el boletín en LinkedIn. **Funciona** |

Ningún botón simula una operación que no ocurre. Si el envío falla de verdad, lo dice y ofrece correo y WhatsApp.

## 2 · Integraciones pendientes

1. **Confirmar FormSubmit.** Los tres formularios ya envían a `contacto@learn5.tech` vía FormSubmit (sin cuenta, sin servidor). El primer envío dispara un correo de confirmación: hay que pulsar el enlace una vez y queda activo para siempre.
2. **Alias de FormSubmit.** Después de confirmar te dan un alias aleatorio. Cambiar `FS_DESTINO` en el `index.html` por ese alias evita dejar la dirección a la vista de los robots. Una sola línea.
3. **Agenda.** Por decisión tuya no hay calendario de reservas: el formulario recoge la franja horaria y tú propones hora. Si algún día quieres reservas automáticas, Cal.com conectado a tu Google Calendar.
4. **Páginas propias de los tres programas** que hoy van al catálogo de Hotmart.
5. **`og:image`** — falta el arte social de 1200×630. Sin él, al compartir el enlace no sale tarjeta.
6. **Logotipo oficial.** El de la cabecera y el favicon son provisionales, hechos con texto. El prompt pedía no inventar uno definitivo.

## 3 · Diferencias visuales que siguen pendientes

Todas tienen la misma causa: **el arte aprobado es una composición de 1024×1536 px**. Los gráficos recortados de ahí son de baja resolución y traen el texto incrustado.

1. **La banda del hero** es el arte real, recortado de la composición y ampliado a 2048×586. Le borré los dos textos incrustados (el bloque de la izquierda y el lema de la derecha) rellenando el fondo por interpolación; en esas zonas no queda rastro, pero son píxeles reconstruidos, no originales. Al ser una ampliación ×2 de un arte de 1024 px, en pantallas muy grandes se nota blanda. Necesito el archivo original.
2. **Las cuatro portadas de formación** son la banda superior de cada tarjeta del arte, recortada por encima de los títulos para que no salieran duplicados. Son franjas apaisadas, más bajas que en el arte.
3. **El edificio institucional** viene de un recorte de 418×196 px.
4. **Las ilustraciones de Aprende, Transforma e Innova** NO son recortes: las dibujé en SVG imitando el estilo del arte, porque los originales traían el título dentro. Son nítidas a cualquier tamaño y pesan nada, pero son interpretación mía, no el arte exacto.
5. **Las ondas del cierre y el resplandor de la banda navy** también son SVG propios, por el mismo motivo.

**Lo que necesito para cerrar la fidelidad:** los seis gráficos en alta resolución y sin texto — astronauta con planeta, las tres ilustraciones de caminos, las cuatro portadas de curso, el edificio y el motivo de las ondas.

## 4 · Comprobado

- Blanco dominante, navy, cyan y turquesa. **Cero morado, violeta o magenta** (verificado recorriendo todos los colores del archivo)
- **Professor AI ausente** de toda la implementación
- **Franja navy de Alianzas exactamente entre Instituciones y Experiencia y confianza**
- Orden de secciones idéntico al arte
- Un solo `<h1>`, HTML semántico, `alt` descriptivos, foco visible, `prefers-reduced-motion`
- Menú móvil accesible: se cierra con Escape, devuelve el foco, estado correcto en `aria-expanded`
- Desplegables reales en Formación, Soluciones, Comunidad y Recursos
- **Recursos ya no apunta a Experiencia y confianza**: ahora despliega Clase Futura y la Guía Digital
- Ninguna ancla rota, HTML equilibrado, JavaScript sin errores
- Las 6 imágenes referenciadas existen y cargan

## 5 · Sin validar

- **La cifra de +700 educadores** viene de tu web actual. Confírmala antes de publicar.
- «Alcance en Latinoamérica y Estados Unidos» y «Alianzas académicas y estratégicas» se mantienen como categorías, sin número ni nombres, para no afirmar acuerdos no confirmados.
- No hay testimonios, logos de terceros ni porcentajes.
