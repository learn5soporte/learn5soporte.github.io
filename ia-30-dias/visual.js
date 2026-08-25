/* ═══════════════════════════════════════════════════════════
   LEARN5 · piezas visuales de la pagina de ventas
   1. la cinta con las 30 herramientas, bajo el diagnostico
   2. la demo: un prompt y lo que sale de ahi
   Se inyectan desde aqui para no engordar el HTML.
   ═══════════════════════════════════════════════════════════ */
(function(){
"use strict";

/* ─────────────── estilos ─────────────── */
var CSS = ''
+'.cinta{padding:var(--s5) 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,255,255,.014);overflow:hidden}'
+'.cinta-t{text-align:center;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--g3);font-weight:600;margin-bottom:var(--s4);padding:0 var(--s3)}'
+'.cinta-w{overflow:hidden;position:relative;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)}'
+'.cinta-p{display:flex;gap:14px;width:max-content;animation:cintaGo 52s linear infinite}'
+'.cinta-w:hover .cinta-p{animation-play-state:paused}'
+'@keyframes cintaGo{from{transform:translateX(0)}to{transform:translateX(-50%)}}'
+'.hz{display:flex;flex-direction:column;align-items:center;gap:9px;width:88px;flex:none}'
+'.hz-i{width:52px;height:52px;border-radius:15px;display:flex;align-items:center;justify-content:center;font-size:23px;background:var(--ink2);border:1px solid var(--line2);box-shadow:0 4px 16px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.06);transition:transform .2s}'
+'.hz:hover .hz-i{transform:translateY(-5px)}'
+'.hz-n{font-size:11.5px;color:var(--g2);text-align:center;line-height:1.3;font-weight:500}'
+'.hz:nth-child(5n+1) .hz-i{border-color:rgba(29,158,117,.5);background:linear-gradient(160deg,rgba(29,158,117,.2),var(--ink2))}'
+'.hz:nth-child(5n+2) .hz-i{border-color:rgba(232,106,75,.5);background:linear-gradient(160deg,rgba(232,106,75,.2),var(--ink2))}'
+'.hz:nth-child(5n+3) .hz-i{border-color:rgba(34,184,207,.5);background:linear-gradient(160deg,rgba(34,184,207,.2),var(--ink2))}'
+'.hz:nth-child(5n+4) .hz-i{border-color:rgba(62,143,255,.5);background:linear-gradient(160deg,rgba(62,143,255,.2),var(--ink2))}'
+'.hz:nth-child(5n+5) .hz-i{border-color:rgba(139,123,245,.5);background:linear-gradient(160deg,rgba(139,123,245,.2),var(--ink2))}'

+'.demo-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:var(--s5) 0 var(--s3)}'
+'.demo-tab{background:rgba(255,255,255,.04);border:1px solid var(--line2);border-radius:100px;padding:8px 16px;color:var(--g2);font-family:inherit;font-size:13.5px;font-weight:500;cursor:pointer;transition:background .15s,border-color .15s,color .15s}'
+'.demo-tab:hover{color:var(--w);border-color:var(--line2)}'
+'.demo-tab.on{background:rgba(62,143,255,.14);border-color:rgba(62,143,255,.45);color:var(--blue-l)}'
+'.demo-caja{background:linear-gradient(180deg,var(--ink2),var(--ink1));border:1px solid var(--line2);border-radius:var(--r2);overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.42)}'
+'.demo-bar{display:flex;align-items:center;gap:7px;padding:11px 16px;background:rgba(0,0,0,.3);border-bottom:1px solid var(--line)}'
+'.demo-bar i{width:10px;height:10px;border-radius:50%;display:block}'
+'.demo-bar .d1{background:#E24B4A}.demo-bar .d2{background:#D4AF37}.demo-bar .d3{background:#1D9E75}'
+'.demo-tit{margin-left:10px;font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--g3)}'
+'.demo-cuerpo{padding:var(--s3)}'
+'.demo-lab{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--g3);font-weight:600;margin-bottom:9px}'
+'.demo-prompt{font-family:"IBM Plex Mono",monospace;font-size:14px;color:var(--w);line-height:1.7;min-height:3.4em;margin-bottom:var(--s3)}'
+'.demo-prompt .fl{display:inline-block;width:8px;height:15px;background:var(--blue);vertical-align:-2px;margin-left:2px;animation:demoFl 1s step-end infinite}'
+'@keyframes demoFl{50%{opacity:0}}'
+'.demo-resp{border-top:1px solid var(--line);padding-top:var(--s3);font-size:14.5px;color:var(--g1);line-height:1.75;opacity:0;transition:opacity .45s ease}'
+'.demo-resp.on{opacity:1}'
+'.demo-resp em{font-style:normal;color:var(--teal-l);background:rgba(29,158,117,.12);border-radius:4px;padding:1px 5px}'
+'.demo-lab2{text-align:center;font-size:12.5px;color:var(--g3);margin:var(--s4) 0 var(--s2)}'
+'.demo-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:var(--s2)}'
+'.dc{background:var(--ink1);border:1px solid var(--line);border-radius:var(--r);padding:var(--s3);opacity:0;transform:translateY(10px);transition:opacity .4s ease,transform .4s ease,border-color .2s}'
+'.dc.on{opacity:1;transform:none}'
+'.dc:hover{border-color:var(--line2)}'
+'.dc-i{font-size:21px;display:block;margin-bottom:10px}'
+'.dc-t{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--g3);font-weight:600;display:block;margin-bottom:6px}'
+'.dc h4{font-family:"Space Grotesk",sans-serif;font-size:14.5px;color:var(--w);font-weight:600;line-height:1.35;margin-bottom:6px}'
+'.dc p{font-size:13px;color:var(--g2);line-height:1.55;margin-bottom:11px}'
+'.dc span.dc-h{display:inline-block;font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--g2);background:rgba(255,255,255,.045);border:1px solid var(--line);border-radius:6px;padding:3px 8px}'
+'@media(prefers-reduced-motion:reduce){.cinta-p{animation:none}.cinta-w{overflow-x:auto}.dc{opacity:1;transform:none}.demo-resp{opacity:1}}';

var st=document.createElement("style");
st.textContent=CSS;
document.head.appendChild(st);

/* ─────────────── 1 · la cinta ─────────────── */
var HERR=[
["🤖","ChatGPT"],["✨","Claude"],["🔮","Gemini"],["🔍","Perplexity"],["📓","NotebookLM"],
["🪟","Copilot"],["🎨","Canva AI"],["🖼️","Leonardo AI"],["🎙️","ElevenLabs"],["🎬","HeyGen"],
["✂️","CapCut AI"],["🎥","Runway"],["⚙️","Make"],["⚡","Zapier"],["🔀","n8n"],
["📋","Notion AI"],["💬","Typebot"],["📊","Gamma"],["🧠","Custom GPTs"],["📁","Claude Projects"],
["🤝","Dify"],["🗣️","Voiceflow"],["🧑‍💼","Lindy"],["🗃️","Airtable AI"],["💭","Chatbase"],
["🔊","Suno AI"],["📝","Otter.ai"],["🕸️","Relevance AI"],["📞","Retell AI"],["📈","AdCreative.ai"]
];

function cinta(){
  var s=document.createElement("section");
  s.className="cinta";
  var chips="";
  for(var v=0;v<2;v++){
    for(var i=0;i<HERR.length;i++){
      chips+='<div class="hz"><span class="hz-i">'+HERR[i][0]+'</span><span class="hz-n">'+HERR[i][1]+'</span></div>';
    }
  }
  s.innerHTML='<p class="cinta-t">30 herramientas · una por día · ninguna te pide programar</p>'
             +'<div class="cinta-w"><div class="cinta-p">'+chips+'</div></div>';
  var p=document.querySelector(".portada");
  if(p)p.insertAdjacentElement("afterend",s);
}

/* ─────────────── 2 · la demo ─────────────── */
var ES={
 ojo:"Lo que sale de ahí",
 tit:"Un prompt. Y de ahí sale el trabajo de una tarde.",
 baja:"Elige un caso y mira lo que produce. Esto es lo que aprendes a montar tú: no es algo que hagamos por ti.",
 tuPrompt:"Tu prompt",
 barra:"Tu asistente · Learn5",
 luego:"Y esto es lo que puedes armar con eso",
 casos:[
 {tab:"Marketing",
  prompt:"Eres el community manager de mi repostería en Miami. Dame 5 publicaciones para esta semana, con el texto listo y qué foto va en cada una.",
  resp:"Semana lista. <em>Lunes</em>: el detrás de cámara del amasado. <em>Martes</em>: tu producto estrella con texto de venta. <em>Miércoles</em>: la reseña de una clienta, con su permiso…",
  cards:[
   ["📸","Instagram","5 publicaciones escritas","Texto, etiquetas y la hora a la que conviene publicar","ChatGPT + Canva AI"],
   ["🎬","Video","Un reel de 30 segundos con guion","Qué dices y qué se ve en cada plano","Runway + CapCut"],
   ["🖼️","Imagen","La foto del producto, generada","Sin sesión de fotos y sin fotógrafo","Leonardo AI"],
   ["📅","Calendario","El mes entero planificado","Y exportado a tu calendario de Google","Notion AI"]]},
 {tab:"Ventas",
  prompt:"Con estas notas de la reunión de hoy, escríbeme la propuesta para el cliente y el correo de seguimiento.",
  resp:"La propuesta va en tres bloques: <em>qué entendí de tu problema</em>, qué propongo y qué cuesta. El correo va aparte, corto, con una sola pregunta al final…",
  cards:[
   ["📄","Propuesta","El documento redactado","Con tu estructura y tu manera de escribir","Claude"],
   ["✉️","Correo","El seguimiento listo para enviar","Corto, con una sola pregunta al final","ChatGPT"],
   ["🔁","Insistencia","Y el recordatorio a los cuatro días","Que sale solo si no te han contestado","Make"],
   ["🗃️","Registro","El cliente anotado en tu tabla","Sin que tengas que copiar nada a mano","Airtable AI"]]},
 {tab:"Papeleo",
  prompt:"Este contrato tiene 45 páginas. Dime qué me obliga, qué me protege y qué me conviene negociar.",
  resp:"Tres cosas te atan: la <em>exclusividad de la cláusula 7</em>, la renovación automática y el aviso de 90 días. Lo que te protege está en la 12…",
  cards:[
   ["📑","Resumen","45 páginas en una carilla","Con el número de página de cada punto, para verificarlo","Claude"],
   ["⚠️","Alertas","Lo que conviene negociar","Señalado y explicado sin jerga de abogado","Claude"],
   ["🔎","Datos","Cada dato con su fuente","Nada inventado: todo con su enlace","Perplexity"],
   ["📓","Cuaderno","Tus documentos, preguntables","Le preguntas y responde solo con lo tuyo","NotebookLM"]]},
 {tab:"Clientes",
  prompt:"Quiero un asistente que responda las preguntas de siempre de mis clientes, con mi tono y mis precios.",
  resp:"Le cargamos tus precios, tus horarios y tus respuestas de siempre. <em>Contesta como contestas tú</em> y te avisa cuando la pregunta se sale del guion…",
  cards:[
   ["💬","Agente","Responde por ti, con tu tono","Precios, horarios y las dudas de siempre","Custom GPTs"],
   ["📲","WhatsApp","Conectado a donde te escriben","Con el mismo número de siempre","Make"],
   ["🔔","Aviso","Te avisa cuando se complica","Solo lo que de verdad necesita tu criterio","Zapier"],
   ["📈","Reporte","Qué te preguntan más","Para saber qué arreglar en el negocio","Notion AI"]]}
 ]
};

var EN={
 ojo:"What comes out of it",
 tit:"One prompt. And out comes an afternoon's work.",
 baja:"Pick a case and watch what it produces. This is what you learn to build yourself — it isn't something we do for you.",
 tuPrompt:"Your prompt",
 barra:"Your assistant · Learn5",
 luego:"And here's what you can put together with that",
 casos:[
 {tab:"Marketing",
  prompt:"You're the community manager for my bakery in Miami. Give me 5 posts for this week, with the copy written and which photo goes with each.",
  resp:"Week's ready. <em>Monday</em>: behind the scenes at the mixer. <em>Tuesday</em>: your star product with sales copy. <em>Wednesday</em>: a customer review, with her permission…",
  cards:[
   ["📸","Instagram","5 posts, written","Copy, hashtags and the best hour to publish","ChatGPT + Canva AI"],
   ["🎬","Video","A 30-second reel with a script","What you say and what's on screen in each shot","Runway + CapCut"],
   ["🖼️","Image","The product photo, generated","No photo shoot, no photographer","Leonardo AI"],
   ["📅","Calendar","The whole month planned out","And exported to your Google Calendar","Notion AI"]]},
 {tab:"Sales",
  prompt:"From these notes from today's meeting, write me the client proposal and the follow-up email.",
  resp:"The proposal comes in three blocks: <em>what I understood about your problem</em>, what I propose and what it costs. The email goes separately, short, with one question at the end…",
  cards:[
   ["📄","Proposal","The document, written","In your structure and your way of writing","Claude"],
   ["✉️","Email","The follow-up ready to send","Short, with a single question at the end","ChatGPT"],
   ["🔁","Nudge","And the reminder four days later","Which only goes out if they haven't replied","Make"],
   ["🗃️","Record","The client logged in your table","Without you copying anything by hand","Airtable AI"]]},
 {tab:"Paperwork",
  prompt:"This contract is 45 pages. Tell me what binds me, what protects me and what's worth negotiating.",
  resp:"Three things tie you down: the <em>exclusivity in clause 7</em>, the automatic renewal and the 90-day notice. What protects you is in clause 12…",
  cards:[
   ["📑","Summary","45 pages on one page","With the page number for each point, so you can check it","Claude"],
   ["⚠️","Flags","What's worth negotiating","Pointed out and explained without lawyer-speak","Claude"],
   ["🔎","Facts","Every figure with its source","Nothing invented: everything linked","Perplexity"],
   ["📓","Notebook","Your documents, ask-able","You ask and it answers only from your files","NotebookLM"]]},
 {tab:"Customers",
  prompt:"I want an assistant that answers my customers' usual questions, in my tone and with my prices.",
  resp:"We load in your prices, your hours and your usual answers. <em>It answers the way you answer</em> and pings you when the question goes off script…",
  cards:[
   ["💬","Agent","Answers for you, in your tone","Prices, hours and the usual questions","Custom GPTs"],
   ["📲","WhatsApp","Connected where people write you","On the same number as always","Make"],
   ["🔔","Alert","It pings you when it gets tricky","Only what genuinely needs your judgment","Zapier"],
   ["📈","Report","What they ask you most","So you know what to fix in the business","Notion AI"]]}
 ]
};

function T(){ return document.documentElement.lang==="en"?EN:ES; }

var actual=0, escribiendo=null, arrancada=false, caja=null;

function pintarCards(c){
 var cont=caja.querySelector(".demo-cards");
 var h="";
 for(var i=0;i<c.cards.length;i++){
   var d=c.cards[i];
   h+='<div class="dc"><span class="dc-i">'+d[0]+'</span><span class="dc-t">'+d[1]+'</span>'
     +'<h4>'+d[2]+'</h4><p>'+d[3]+'</p><span class="dc-h">'+d[4]+'</span></div>';
 }
 cont.innerHTML=h;
 var ds=cont.querySelectorAll(".dc");
 for(var j=0;j<ds.length;j++){
   (function(el,k){ setTimeout(function(){ el.classList.add("on"); },90*k); })(ds[j],j);
 }
}

function correr(i){
 actual=i;
 var t=T(), c=t.casos[i];
 var bs=caja.querySelectorAll(".demo-tab");
 for(var b=0;b<bs.length;b++)bs[b].className="demo-tab"+(b===i?" on":"");

 var salida=caja.querySelector(".demo-txt");
 var resp=caja.querySelector(".demo-resp");
 resp.classList.remove("on");
 salida.textContent="";
 clearInterval(escribiendo);

 var n=0, texto=c.prompt;
 escribiendo=setInterval(function(){
   n+=2;
   salida.textContent=texto.slice(0,n);
   if(n>=texto.length){
     clearInterval(escribiendo);
     salida.textContent=texto;
     setTimeout(function(){
       resp.innerHTML=c.resp;
       resp.classList.add("on");
       pintarCards(c);
     },380);
   }
 },16);
}

function demo(){
 var t=T();
 var s=document.createElement("section");
 s.className="sec no-i18n";
 s.id="demo";
 var tabs="";
 for(var i=0;i<t.casos.length;i++)tabs+='<button class="demo-tab'+(i===0?" on":"")+'" data-i="'+i+'">'+t.casos[i].tab+'</button>';
 s.innerHTML='<div class="wrap">'
  +'<p class="eyebrow demo-ojo">'+t.ojo+'</p>'
  +'<h2 class="h-sec demo-h">'+t.tit+'</h2>'
  +'<p class="p-sec demo-baja">'+t.baja+'</p>'
  +'<div class="demo-tabs">'+tabs+'</div>'
  +'<div class="demo-caja">'
   +'<div class="demo-bar"><i class="d1"></i><i class="d2"></i><i class="d3"></i><span class="demo-tit">'+t.barra+'</span></div>'
   +'<div class="demo-cuerpo">'
    +'<p class="demo-lab">'+t.tuPrompt+'</p>'
    +'<p class="demo-prompt"><span class="demo-txt"></span><span class="fl"></span></p>'
    +'<div class="demo-resp"></div>'
   +'</div>'
  +'</div>'
  +'<p class="demo-lab2">'+t.luego+'</p>'
  +'<div class="demo-cards"></div>'
 +'</div>';

 var ancla=document.getElementById("programa");
 if(ancla)ancla.insertAdjacentElement("beforebegin",s); else document.querySelector("main").appendChild(s);
 caja=s;

 var bs=s.querySelectorAll(".demo-tab");
 for(var k=0;k<bs.length;k++){
   (function(b){ b.onclick=function(){ correr(parseInt(b.getAttribute("data-i"),10)); }; })(bs[k]);
 }

 /* no escribe hasta que se ve */
 if("IntersectionObserver" in window){
   var io=new IntersectionObserver(function(es){
     for(var i=0;i<es.length;i++){
       if(es[i].isIntersecting&&!arrancada){ arrancada=true; correr(0); io.disconnect(); }
     }
   },{threshold:.25});
   io.observe(s);
 }else{ arrancada=true; correr(0); }
}

/* si cambia el idioma, la demo se repinta sola */
window.addEventListener("learn5:idioma",function(){
 if(!caja)return;
 var t=T();
 caja.querySelector(".demo-ojo").textContent=t.ojo;
 caja.querySelector(".demo-h").textContent=t.tit;
 caja.querySelector(".demo-baja").textContent=t.baja;
 caja.querySelector(".demo-lab").textContent=t.tuPrompt;
 caja.querySelector(".demo-tit").textContent=t.barra;
 caja.querySelector(".demo-lab2").textContent=t.luego;
 var bs=caja.querySelectorAll(".demo-tab");
 for(var i=0;i<bs.length;i++)bs[i].textContent=t.casos[i].tab;
 if(arrancada)correr(actual);
});

function arrancar(){ cinta(); demo(); }
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",arrancar);
else arrancar();
})();
