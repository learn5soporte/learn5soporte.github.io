/* ══════════════════════════════════════════════════════════════
   1 · CATÁLOGO DE FORMACIÓN · editable sin tocar el maquetado
   `individual:false` = todavía no tiene página propia; va al
   catálogo, que sí existe, en vez de a un enlace inventado.
   ══════════════════════════════════════════════════════════════ */
var CATALOGO = "https://hotmart.com/es/club/learn5/products";
var CURSOS = [
  { titulo:"IA en el Aula",
    bajada:"Integra la IA en tu práctica docente de forma ética y creativa.",
    etiqueta:"Curso online", img:"/assets/curso-1.jpg",
    url:"https://go.hotmart.com/G97993169E?dp=1", individual:true },
  { titulo:"Transforma tu Futuro con IA",
    bajada:"Potencia tu productividad, crea contenido y aplica la IA a tus proyectos y negocios.",
    etiqueta:"Curso completo", img:"/assets/curso-2.jpg",
    url:"https://go.hotmart.com/W103286625X?dp=1", individual:true },
  { titulo:"Domina la IA en 30 Días",
    bajada:"Un plan paso a paso para usar la IA con confianza, propósito y resultados reales.",
    etiqueta:"Programa guiado", img:"/assets/curso-3.jpg",
    url:"https://learn5.pro/ia-30-dias/", individual:true },
  /* El producto real en Hotmart se llama "Educador Digital Total" y son
     11 ebooks, no una guía suelta. El rótulo de la tarjeta viene del arte
     aprobado; pendiente de que Gelkin decida si se renombra. */
  { titulo:"Guía Digital del Educador",
    bajada:"Once guías sobre IA, ciberseguridad, realidad aumentada y futuro del trabajo.",
    etiqueta:"Pack de 11 ebooks", img:"/assets/curso-4.jpg",
    url:"https://go.hotmart.com/X98102417D?dp=1", individual:true }
];

(function pintarCursos(){
  var cont = document.getElementById("listaCursos");
  if(!cont) return;
  function esc(t){ return String(t).replace(/[<>&"]/g, function(c){
    return {"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c]; }); }
  cont.innerHTML = CURSOS.map(function(c){
    var cuerpo =
      '<div class="curso-im">'+
        '<span class="curso-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'+esc(c.etiqueta)+'</span>'+
        '<img src="'+esc(c.img)+'" loading="lazy" width="1160" height="430" alt="">'+
      '</div>'+
      '<div class="curso-tx"><h3>'+esc(c.titulo)+'</h3><p>'+esc(c.bajada)+'</p>'+
      '<span class="curso-fl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span></div>';
    if(!c.url) return '<article class="curso rev" aria-disabled="true">'+cuerpo+'</article>';
    var fuera = c.url.indexOf("http") === 0 && c.url.indexOf("learn5.pro") < 0;
    return '<a class="curso rev" href="'+esc(c.url)+'"'+(fuera?' target="_blank" rel="noopener"':'')+'>'+cuerpo+'</a>';
  }).join("");
})();

/* ══════════════════════════════════════════════════════════════
   2 · NAVEGACIÓN · desplegables y menú móvil accesibles
   ══════════════════════════════════════════════════════════════ */
(function(){
  var menu  = document.getElementById("menu");
  var hamb  = document.querySelector(".hamb");
  var tiras = Array.prototype.slice.call(document.querySelectorAll(".menu .mt"));

  function cerrarSubs(salvo){
    tiras.forEach(function(b){
      if(b === salvo) return;
      b.setAttribute("aria-expanded","false");
      document.getElementById(b.getAttribute("aria-controls")).classList.remove("on");
    });
  }
  tiras.forEach(function(b){
    var panel = document.getElementById(b.getAttribute("aria-controls"));
    b.addEventListener("click", function(){
      var abierto = b.getAttribute("aria-expanded") === "true";
      cerrarSubs(b);
      b.setAttribute("aria-expanded", String(!abierto));
      panel.classList.toggle("on", !abierto);
    });
  });
  document.addEventListener("click", function(e){
    if(!e.target.closest(".menu")) cerrarSubs(null);
  });

  function cerrarMenu(){
    menu.classList.remove("abierto");
    hamb.setAttribute("aria-expanded","false");
    cerrarSubs(null);
  }
  hamb.addEventListener("click", function(){
    var abierto = hamb.getAttribute("aria-expanded") === "true";
    if(abierto){ cerrarMenu(); return; }
    menu.classList.add("abierto");
    hamb.setAttribute("aria-expanded","true");
    var primero = menu.querySelector("a,button");
    if(primero) primero.focus();
  });
  document.addEventListener("keydown", function(e){
    if(e.key !== "Escape") return;
    if(menu.classList.contains("abierto")){ cerrarMenu(); hamb.focus(); }
    else cerrarSubs(null);
  });
  menu.addEventListener("click", function(e){
    /* También los botones que abren modal, no solo los enlaces. */
    if((e.target.closest("a") || e.target.closest("[data-modal]")) &&
       menu.classList.contains("abierto")) cerrarMenu();
  });
})();

/* ══════════════════════════════════════════════════════════════
   3 · ENVÍO DE FORMULARIOS · Web3Forms con FormSubmit de respaldo

   Los tres formularios mandan a Web3Forms, y el correo llega a
   contacto@learn5.tech. Si Web3Forms falla o tarda demasiado, el
   mismo envío se reintenta por FormSubmit sin que el visitante se
   entere. Dos servicios tienen que caerse a la vez para perder un
   mensaje.

   POR QUÉ: el 10-nov-2026 FormSubmit tardó 24,8 s en confirmar un
   envío que sí había entregado. Sigue como red de seguridad, no
   como vía principal.

   PARA ACTIVAR WEB3FORMS: pega la clave en W3F_KEY. Mientras esté
   vacía todo sale por FormSubmit, así que nada deja de funcionar.
   La clave puede ir a la vista: es un alias del correo, no una
   contraseña.
   ══════════════════════════════════════════════════════════════ */
var W3F_KEY    = "";
var W3F_URL    = "https://api.web3forms.com/submit";
var FS_DESTINO = "contacto@learn5.tech";
var FS_URL     = "https://formsubmit.co/ajax/" + FS_DESTINO;
var CORREO     = "contacto@learn5.tech";
var WHATSAPP   = "https://wa.me/17865271196";

/* OJO con el texto de este aviso. FormSubmit a veces recibe el mensaje
   pero tarda 25 s en contestar, así que un corte por tiempo NO significa
   que no haya llegado. Decir "no se ha enviado" provocaría que la gente
   lo mandara tres veces o se fuera creyendo que falló. */
function fallo(aviso){
  aviso.className = "aviso err";
  aviso.innerHTML = "No hemos podido confirmar el envío. Es posible que sí haya llegado, " +
    "así que mejor no lo repitas. Para asegurarte, escríbenos a " +
    '<a href="mailto:'+CORREO+'" style="color:inherit;text-decoration:underline">'+CORREO+'</a> ' +
    'o por <a href="'+WHATSAPP+'" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">WhatsApp</a>.';
}

/* Petición con corte por tiempo: si la red se cuelga, el botón no
   puede quedarse en "Enviando..." para siempre. */
function pedir(url, cuerpo, ms){
  var corte = ("AbortController" in window) ? new AbortController() : null;
  var reloj = corte ? setTimeout(function(){ corte.abort(); }, ms) : null;
  return fetch(url, {
    method:"POST",
    headers:{ "Content-Type":"application/json", Accept:"application/json" },
    body: JSON.stringify(cuerpo),
    signal: corte ? corte.signal : undefined
  }).then(function(r){
    if(reloj) clearTimeout(reloj);
    if(!r.ok) throw new Error("HTTP "+r.status);
    return r.json();
  }).then(function(j){
    /* Los dos servicios devuelven success, uno como booleano y el
       otro como la cadena "true". */
    if(String(j.success) !== "true") throw new Error(j.message || "rechazado");
    return true;
  });
}

function copiar(o){ var c={}; for(var k in o){ if(Object.prototype.hasOwnProperty.call(o,k)) c[k]=o[k]; } return c; }

function viaWeb3Forms(asunto, correoPersona, campos){
  var d = copiar(campos);
  d.access_key = W3F_KEY;
  d.subject    = asunto;
  d.from_name  = "Web Learn5";
  if(correoPersona) d.replyto = correoPersona;
  return pedir(W3F_URL, d, 15000);
}

function viaFormSubmit(asunto, correoPersona, campos){
  var d = copiar(campos);
  d._subject  = asunto;
  d._template = "table";   // correo legible en vez de un volcado
  d._captcha  = "false";   // obligatorio al enviar por AJAX
  if(correoPersona) d._replyto = correoPersona;
  return pedir(FS_URL, d, 35000);
}

/* Web3Forms primero, con 15 s de margen. Si no responde o devuelve
   error, el mismo mensaje sale por FormSubmit antes de darlo por
   perdido. El visitante no ve ninguna de las dos cosas. */
function enviar(asunto, correoPersona, campos){
  if(!W3F_KEY) return viaFormSubmit(asunto, correoPersona, campos);
  return viaWeb3Forms(asunto, correoPersona, campos)
    .catch(function(){ return viaFormSubmit(asunto, correoPersona, campos); });
}

(function(){
  var ultimoFoco = null;

  document.addEventListener("click", function(e){
    var lanza = e.target.closest("[data-modal]");
    if(lanza){
      e.preventDefault();
      var d = document.getElementById("md-" + lanza.getAttribute("data-modal"));
      if(d){ ultimoFoco = lanza; d.showModal(); }
      return;
    }
    var x = e.target.closest("[data-cerrar]");
    if(x){ x.closest("dialog").close(); }
  });

  Array.prototype.forEach.call(document.querySelectorAll("dialog"), function(d){
    d.addEventListener("close", function(){
      if(ultimoFoco) ultimoFoco.focus();
      /* Limpiar el mensaje de error al cerrar: si no, al reabrir el
         formulario aparece el aviso de la vez anterior. Un envío ya
         hecho sí se conserva, para no invitar a mandarlo dos veces. */
      var f = d.querySelector("form");
      if(f && f.getAttribute("data-enviado") !== "si"){
        var a = f.querySelector(".aviso");
        if(a){ a.className = "aviso"; a.textContent = ""; }
      }
      d.scrollTop = 0;
    });
    d.addEventListener("click", function(e){ if(e.target === d) d.close(); });
  });

  var ASUNTOS = {
    reunion:   "Learn5 · Solicitud de reunión",
    propuesta: "Learn5 · Solicitud de propuesta",
    alianza:   "Learn5 · Propuesta de alianza"
  };

  Array.prototype.forEach.call(document.querySelectorAll("form[data-form]"), function(f){
    /* Trampa antispam de Web3Forms: un bot la rellena, una persona no. */
    var trampa = document.createElement("input");
    trampa.type = "checkbox"; trampa.name = "botcheck";
    trampa.style.cssText = "position:absolute;left:-9999px";
    trampa.tabIndex = -1; trampa.setAttribute("aria-hidden","true");
    f.appendChild(trampa);

    f.addEventListener("submit", function(e){
      e.preventDefault();
      var tipo  = f.getAttribute("data-form");
      var aviso = f.querySelector(".aviso");
      var boton = f.querySelector("[type=submit]");
      aviso.className = "aviso";

      var falla = null;
      Array.prototype.forEach.call(f.querySelectorAll("[required]"), function(c){
        if(falla) return;
        var vacio = (c.type === "checkbox") ? !c.checked : !c.value.trim();
        if(vacio) falla = c;
        if(!falla && c.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.value.trim())) falla = c;
      });
      if(falla){
        aviso.className = "aviso err";
        aviso.textContent = (falla.type === "checkbox")
          ? "Necesitamos tu consentimiento para poder responderte."
          : "Revisa los campos obligatorios: falta alguno o el correo no es válido.";
        falla.focus();
        return;
      }
      /* Trampa antispam: si está marcada es un bot. Fingimos normalidad
         y no mandamos nada. */
      if(trampa.checked) return;

      /* El correo que llega lleva estos rótulos, no los nombres
         internos de los campos: se lee de un vistazo. */
      var ETIQUETAS = {
        nombre:"Nombre", email:"Correo", organizacion:"Organización",
        telefono:"Teléfono", disponibilidad:"Disponibilidad",
        categoria:"Categoría", tipo:"Tipo de alianza",
        mensaje:"Mensaje", consent:"Acepta privacidad"
      };
      var datos = {};
      var correoPersona = "";
      Array.prototype.forEach.call(f.elements, function(c){
        if(!c.name || c.name === "botcheck") return;
        if(c.name === "email") correoPersona = c.value.trim();
        datos[ETIQUETAS[c.name] || c.name] =
          (c.type === "checkbox") ? (c.checked ? "sí" : "no") : c.value.trim();
      });
      datos["Formulario"] = tipo;
      var asunto = ASUNTOS[tipo] || "Learn5 · Mensaje desde la web";

      var textoBoton = boton.textContent;
      boton.disabled = true; boton.textContent = "Enviando…";

      /* A los 7 s, si el servicio todavía no ha contestado, avisamos en
         tono neutro. No es un error: el envío sigue en curso. */
      var paciencia = setTimeout(function(){
        aviso.className = "aviso info";
        aviso.textContent = "Seguimos enviándolo. El servicio va lento hoy, dale unos segundos.";
      }, 7000);

      enviar(asunto, correoPersona, datos).then(function(){
        clearTimeout(paciencia);
        /* A partir de aquí el mensaje YA está enviado: ningún error de
           repintado puede convertir un éxito en un fallo. */
        f.setAttribute("data-enviado","si");
        try{
          f.querySelector(".md > p").textContent = "";
          aviso.className = "aviso ok";
          aviso.textContent = "Recibido. Te respondemos desde " + CORREO + ", normalmente el mismo día.";
          Array.prototype.forEach.call(f.querySelectorAll(".campo, .campo-2, .comu-cons"), function(n){ n.style.display = "none"; });
          boton.textContent = "Enviado";
        }catch(err){ /* enviado igualmente */ }
      }).catch(function(){
        clearTimeout(paciencia);
        fallo(aviso);
        /* El botón NO vuelve a habilitarse: como el mensaje puede haber
           llegado igualmente, reenviar solo produciría duplicados. */
        boton.textContent = "No confirmado";
      });
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   4 · DETALLE DE SERVICIOS · un panel abierto cada vez
   ══════════════════════════════════════════════════════════════ */
(function(){
  var botones = Array.prototype.slice.call(document.querySelectorAll(".ben"));
  if(!botones.length) return;
  botones.forEach(function(b){
    var panel = document.getElementById(b.getAttribute("aria-controls"));
    panel.setAttribute("aria-labelledby", panel.id + "-btn");
    b.id = panel.id + "-btn";
    b.addEventListener("click", function(){
      var abierto = b.getAttribute("aria-expanded") === "true";
      botones.forEach(function(o){
        o.setAttribute("aria-expanded","false");
        document.getElementById(o.getAttribute("aria-controls")).hidden = true;
      });
      if(!abierto){
        b.setAttribute("aria-expanded","true");
        panel.hidden = false;
      }
    });
  });
  /* Escape cierra el que esté abierto, como en el resto de la página. */
  document.addEventListener("keydown", function(e){
    if(e.key !== "Escape") return;
    var abierto = botones.filter(function(b){ return b.getAttribute("aria-expanded") === "true"; })[0];
    if(abierto){ abierto.click(); abierto.focus(); }
  });
})();

/* ══════════════════════════════════════════════════════════════
   5 · entradas suaves al hacer scroll
   ══════════════════════════════════════════════════════════════ */
(function(){
  var nodos = document.querySelectorAll(".rev");
  if(!("IntersectionObserver" in window) ||
     window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    for(var i=0;i<nodos.length;i++) nodos[i].classList.add("on");
    return;
  }
  var ob = new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("on"); ob.unobserve(en.target); } });
  }, { rootMargin:"0px 0px -8% 0px", threshold:.08 });
  for(var j=0;j<nodos.length;j++) ob.observe(nodos[j]);
})();
