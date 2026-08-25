/* ═══════════════════════════════════════════════════════════
   LEARN5 · EL PRISMA
   Hero cinematografico de la pagina de ventas.

   La idea: una sola pregunta confusa entra en un prisma de
   vidrio ahumado y sale convertida en cinco haces limpios,
   uno por cada dia del programa. Los haces caen sobre la
   tarjeta del diagnostico y la iluminan.

   Vive DETRAS del contenido: no mueve ni un pixel el embudo.
   ═══════════════════════════════════════════════════════════ */
(function(){
"use strict";

var quieto = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var finoElPuntero = window.matchMedia && window.matchMedia("(pointer: fine)").matches;

/* ── los cinco dias, en su orden y con su color ── */
var DIAS = [
 {c:"29,158,117",  n:"ChatGPT"},
 {c:"232,106,75",  n:"Claude"},
 {c:"34,184,207",  n:"Perplexity"},
 {c:"62,143,255",  n:"NotebookLM"},
 {c:"139,123,245", n:"Gemini"}
];

var CSS = ''
/* ── el escenario ── */
+'.escena{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;'
+'  -webkit-mask-image:linear-gradient(180deg,#000 0,#000 72%,transparent 100%);'
+'  mask-image:linear-gradient(180deg,#000 0,#000 72%,transparent 100%)}'
+'.portada .wrap{position:relative;z-index:2}'
/* el titular vive dentro de la luz: le damos peso para que no se lave */
+'.portada h1{text-shadow:0 2px 30px rgba(8,6,26,.92),0 0 70px rgba(8,6,26,.75)}'

/* ── niebla volumetrica: hace que la luz se lea como luz en el aire ── */
+'.esc-niebla{position:absolute;left:50%;top:-14%;width:1100px;height:760px;'
+'  transform:translateX(-50%);pointer-events:none;'
+'  background:radial-gradient(ellipse 52% 46% at 50% 26%,rgba(120,140,220,.13),transparent 68%);'
+'  filter:blur(30px)}'

/* ── polvo suspendido ── */
+'.esc-polvo{position:absolute;inset:0}'
+'.esc-polvo i{position:absolute;width:2px;height:2px;border-radius:50%;'
+'  background:rgba(210,220,255,.5);animation:motaFlota linear infinite}'
+'@keyframes motaFlota{0%{transform:translateY(0);opacity:0}'
+'  12%{opacity:.55}82%{opacity:.4}100%{transform:translateY(-190px);opacity:0}}'

/* ── el rig de camara: todo lo que se mueve cuelga de aqui ── */
+'.esc-cam{position:absolute;left:50%;top:0;width:0;height:100%;'
+'  transform-style:preserve-3d;will-change:transform,filter}'

/* ── plano de fondo (parallax lento) ── */
+'.esc-fondo{position:absolute;left:0;top:0;will-change:transform}'

/* ── el haz de entrada: una sola pregunta, temblorosa ── */
+'.esc-entrada{position:absolute;left:-560px;top:-330px;width:660px;height:420px;'
+'  background:linear-gradient(118deg,transparent 46.6%,rgba(255,255,255,.5) 49.6%,'
+'  rgba(214,226,255,.9) 50%,rgba(255,255,255,.45) 50.4%,transparent 53.4%);'
+'  filter:blur(1.4px);mix-blend-mode:screen;opacity:.6;'
+'  -webkit-mask-image:linear-gradient(118deg,transparent 4%,#000 62%);'
+'  mask-image:linear-gradient(118deg,transparent 4%,#000 62%);'
+'  animation:hazTiembla 5.5s ease-in-out infinite}'
+'@keyframes hazTiembla{0%,100%{opacity:.52;filter:blur(1.4px)}'
+'  38%{opacity:.72;filter:blur(1.1px)}64%{opacity:.46;filter:blur(1.9px)}}'

/* ── el prisma ── */
+'.esc-prisma{position:absolute;left:-84px;top:76px;width:168px;height:146px;'
+'  transform-style:preserve-3d;will-change:transform}'
+'.pr-cuerpo,.pr-arista,.pr-brillo,.pr-nucleo{position:absolute;inset:0;'
+'  clip-path:polygon(50% 0,100% 100%,0 100%)}'
/* vidrio ahumado */
+'.pr-cuerpo{background:linear-gradient(158deg,rgba(255,255,255,.13),rgba(255,255,255,.03) 44%,'
+'  rgba(62,143,255,.10) 78%,rgba(139,123,245,.13));'
+'  -webkit-backdrop-filter:blur(7px) saturate(1.35);backdrop-filter:blur(7px) saturate(1.35)}'
/* aristas biseladas: un triangulo claro con otro oscuro encima */
+'.pr-arista{background:linear-gradient(126deg,rgba(255,255,255,.62),transparent 26%,'
+'  transparent 62%,rgba(156,197,255,.5));'
+'  -webkit-mask:linear-gradient(#000,#000) content-box exclude,linear-gradient(#000,#000);'
+'  mask:linear-gradient(#000,#000) content-box exclude,linear-gradient(#000,#000);'
+'  padding:1.4px}'
/* el nucleo encendido, donde la luz entra */
+'.pr-nucleo{background:radial-gradient(circle 62px at 50% 84%,rgba(255,255,255,.5),'
+'  rgba(180,205,255,.16) 48%,transparent 76%);mix-blend-mode:screen;opacity:.85}'
/* barrido especular: persigue al cursor por la cara del prisma */
+'.pr-brillo{background:radial-gradient(circle 74px at var(--bx,42%) var(--by,34%),'
+'  rgba(255,255,255,.42),rgba(255,255,255,.07) 46%,transparent 72%);'
+'  mix-blend-mode:screen}'
/* halo alrededor */
+'.pr-halo{position:absolute;left:50%;top:52%;width:330px;height:330px;margin:-165px 0 0 -165px;'
+'  border-radius:50%;pointer-events:none;'
+'  background:radial-gradient(circle,rgba(120,150,255,.20),transparent 62%);filter:blur(22px)}'

/* ── el abanico: cinco haces, uno por dia ── */
+'.esc-abanico{position:absolute;left:0;top:214px;width:0;height:0;will-change:transform}'
+'.esc-abanico i{position:absolute;left:-140px;top:0;width:280px;height:660px;'
+'  transform-origin:50% 0;mix-blend-mode:screen;filter:blur(7px);'
+'  clip-path:polygon(49.1% 0,50.9% 0,80% 100%,20% 100%)}'
+'.esc-abanico i::before{content:"";position:absolute;left:50%;top:0;width:2px;height:52%;'
+'  margin-left:-1px;background:linear-gradient(180deg,rgba(255,255,255,.85),transparent);'
+'  filter:blur(.7px)}'

/* ── el suelo de luz: donde los haces tocan la tarjeta ── */
+'.esc-suelo{position:absolute;left:50%;top:63%;width:760px;height:190px;margin-left:-380px;'
+'  background:radial-gradient(ellipse 50% 42% at 50% 0,rgba(150,175,255,.16),transparent 70%);'
+'  filter:blur(16px);mix-blend-mode:screen}'

+'@media(max-width:760px){'
+'  .esc-prisma{left:-58px;top:52px;width:116px;height:102px}'
+'  .esc-abanico{top:150px}'
+'  .esc-abanico i{filter:blur(9px);height:520px}'
+'  .esc-niebla{width:640px}'
+'}'
+'@media(prefers-reduced-motion:reduce){'
+'  .esc-entrada,.esc-polvo i{animation:none}'
+'}';

function montar(){
  var portada = document.querySelector(".portada");
  if(!portada || document.querySelector(".escena")) return;

  var hoja = document.createElement("style");
  hoja.textContent = CSS;
  document.head.appendChild(hoja);

  /* ── construccion del decorado ── */
  var haces = "";
  for(var i=0;i<DIAS.length;i++){
    var d = DIAS[i];
    haces += '<i data-h="'+i+'" style="background:linear-gradient(180deg,'
          +  'rgba('+d.c+',.95) 0%,rgba('+d.c+',.55) 34%,rgba('+d.c+',0) 92%)"></i>';
  }

  var polvo = "";
  for(var p=0;p<26;p++){
    polvo += '<i style="left:'+(4+Math.random()*92).toFixed(1)+'%;top:'
          +  (24+Math.random()*70).toFixed(1)+'%;animation-duration:'
          +  (11+Math.random()*15).toFixed(1)+'s;animation-delay:-'
          +  (Math.random()*22).toFixed(1)+'s"></i>';
  }

  var esc = document.createElement("div");
  esc.className = "escena no-i18n";
  esc.setAttribute("aria-hidden","true");
  esc.innerHTML =
     '<div class="esc-niebla"></div>'
   + '<div class="esc-polvo">'+polvo+'</div>'
   + '<div class="esc-cam">'
   +   '<div class="esc-fondo"><div class="esc-entrada"></div></div>'
   +   '<div class="esc-abanico">'+haces+'</div>'
   +   '<div class="esc-prisma">'
   +     '<span class="pr-halo"></span>'
   +     '<span class="pr-cuerpo"></span>'
   +     '<span class="pr-nucleo"></span>'
   +     '<span class="pr-brillo"></span>'
   +     '<span class="pr-arista"></span>'
   +   '</div>'
   + '</div>'
   + '<div class="esc-suelo"></div>';

  portada.insertBefore(esc, portada.firstChild);

  var cam     = esc.querySelector(".esc-cam");
  var fondo   = esc.querySelector(".esc-fondo");
  var prisma  = esc.querySelector(".esc-prisma");
  var brillo  = esc.querySelector(".pr-brillo");
  var abanico = esc.querySelector(".esc-abanico");
  var rayos   = esc.querySelectorAll(".esc-abanico i");
  var niebla  = esc.querySelector(".esc-niebla");

  /* apertura base del abanico, en grados */
  var ABRE = [-31,-15.5,0,15.5,31];

  function colocar(mx,my,avance){
    /* CAMARA C · el scroll nos mete a traves del prisma */
    var z = 1 + avance*0.55;
    cam.style.transform = "scale("+z.toFixed(3)+") translateY("+(-avance*70).toFixed(1)+"px)";
    cam.style.filter    = "blur("+(avance*11).toFixed(1)+"px)";
    cam.style.opacity   = Math.max(0, 1 - avance*1.22).toFixed(3);

    /* CAMARA B · parallax por planos */
    niebla.style.transform = "translateX(calc(-50% + "+(mx*-10).toFixed(1)+"px)) translateY("+(my*-7).toFixed(1)+"px)";
    fondo.style.transform  = "translate3d("+(mx*-16).toFixed(1)+"px,"+(my*-11).toFixed(1)+"px,0)";

    /* el prisma se inclina hacia el cursor */
    prisma.style.transform =
       "translate3d("+(mx*22).toFixed(1)+"px,"+(my*13).toFixed(1)+"px,0)"
     + " rotateY("+(mx*17).toFixed(1)+"deg)"
     + " rotateX("+(my*-13).toFixed(1)+"deg)";

    /* el especular barre la cara */
    brillo.style.setProperty("--bx",(50 + mx*30).toFixed(1)+"%");
    brillo.style.setProperty("--by",(40 + my*26).toFixed(1)+"%");

    /* el abanico se abre y se cierra: mover el raton refracta la luz */
    var apertura = 1 + my*0.20 + Math.abs(mx)*0.07;
    abanico.style.transform = "translate3d("+(mx*11).toFixed(1)+"px,0,0) rotate("+(mx*4.5).toFixed(2)+"deg)";
    for(var r=0;r<rayos.length;r++){
      var g = ABRE[r]*apertura;
      rayos[r].style.transform = "rotate("+g.toFixed(2)+"deg) scaleY("+(1+avance*0.5).toFixed(3)+")";
      rayos[r].style.opacity   = (0.62 + Math.max(0,0.30 - Math.abs(g)/150)).toFixed(3);
    }
  }

  /* ── bucle: suavizado por interpolacion, un solo rAF ── */
  var objX=0, objY=0, curX=0, curY=0, avance=0, vivo=false;

  function alto(){ return portada.offsetHeight || 700; }

  function paso(t){
    var s = window.scrollY || 0;
    avance = Math.min(1, s / (alto()*0.9));

    if(finoElPuntero){
      curX += (objX-curX)*0.075;
      curY += (objY-curY)*0.075;
    }else{
      /* sin raton: la camara orbita sola, muy despacio */
      curX = Math.sin(t/5200)*0.62;
      curY = Math.cos(t/6900)*0.42;
    }
    colocar(curX, curY, avance);
    if(vivo) requestAnimationFrame(paso);
  }

  if(quieto){
    colocar(0,0,0);            /* una sola composicion, fija */
  }else{
    vivo = true;
    requestAnimationFrame(paso);

    if(finoElPuntero){
      window.addEventListener("mousemove", function(e){
        objX = (e.clientX/window.innerWidth  - .5)*2;
        objY = (e.clientY/window.innerHeight - .5)*2;
      }, {passive:true});
      window.addEventListener("mouseleave", function(){ objX=0; objY=0; }, {passive:true});
    }

    /* apagamos el bucle cuando el hero sale de pantalla */
    if("IntersectionObserver" in window){
      new IntersectionObserver(function(es){
        var dentro = es[0].isIntersecting;
        if(dentro && !vivo){ vivo=true; requestAnimationFrame(paso); }
        else if(!dentro){ vivo=false; }
      },{threshold:0}).observe(portada);
    }
  }
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",montar);
else montar();
})();
