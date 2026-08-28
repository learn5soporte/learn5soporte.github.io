/* ═══════════════════════════════════════════════════════════
   LEARN5 · conmutador ES / EN
   Traduce recorriendo los nodos de texto. Un MutationObserver
   vuelve a pasar cada vez que el diagnostico se redibuja, asi
   que las pantallas generadas por JS tambien quedan en ingles.
   ═══════════════════════════════════════════════════════════ */
(function(){
"use strict";

/* --- frases completas: coincidencia exacta del nodo --- */
var D={
"¿Qué te está frenando":"What's holding you back",
"con la IA?":"with AI?",
"Toca la que más se parezca a ti":"Tap the one that sounds most like you",
"Abro ChatGPT y no sé qué pedirle":"I open ChatGPT and go blank",
"Empecé un curso de IA y lo dejé":"I started an AI course and quit",
"Pierdo horas escribiendo lo mismo":"I lose hours writing the same things",
"Todos hablan de IA y yo sigo igual":"Everyone talks about AI, I'm still the same",
"Pruebo herramientas sueltas, sin método":"I try random tools, with no method",
"2 minutos, sin costo y sin tarjeta. Al final te decimos por dónde empezar.":"2 minutes, free, no card. At the end we tell you where to start.",

"Esto es lo que compras":"What you're actually buying",
"No son videos. Es un aula donde haces.":"Not videos. A classroom where you do the work.",
"Cada día tiene su herramienta, sus ejercicios y su reto. Avanzas haciendo, no mirando. Y el avance se guarda: puedes parar el martes y volver el jueves donde ibas.":"Every day has its tool, its exercises and its challenge. You move forward by doing, not watching. And your progress is saved: stop on Tuesday, come back Thursday right where you left off.",
"Una herramienta por día":"One tool a day",
"Cada día tiene identidad propia":"Every day has its own identity",
"Sabes en cuál estás sin leer el título: cada herramienta tiene su color, su símbolo y su sección de introducción.":"You know which day you're in without reading the title: every tool has its own color, its own symbol and its own opening section.",
"Instrucciones que sí funcionan":"Instructions that actually work",
"Documentos largos, en minutos":"Long documents, in minutes",
"Datos que puedes citar":"Facts you can cite",
"Tus documentos, sin inventos":"Your documents, nothing made up",
"La IA donde ya trabajas":"AI where you already work",
"Seis sellos por día":"Six seals a day",
"Sabes exactamente qué te falta":"You know exactly what's left",
"No es una barra que sube porque sí. Cada sello se gana haciendo algo concreto: leer, desarmar el método, construir tu plantilla, acertar los casos, completar el reto.":"It isn't a bar that fills up on its own. Every seal is earned by doing something concrete: reading, taking the method apart, building your template, getting the cases right, finishing the challenge.",
"Constructor":"Builder",
"Sales con tu plantilla, no con apuntes":"You leave with a template, not notes",
"Rellenas los campos con tu caso real y el aula arma el prompt. Lo copias y lo usas ese mismo día.":"You fill in the fields with your real case and the classroom builds the prompt. You copy it and use it that same day.",
"Chispa, tu asistente":"Chispa, your assistant",
"Alguien a quien preguntarle":"Someone to ask",
"Un asistente dentro de la lección que responde las dudas típicas sin que tengas que salir a buscar.":"An assistant inside the lesson that answers the usual questions, so you never have to go looking.",
"Casos reales":"Real cases",
"¿Qué herramienta usarías aquí?":"Which tool would you use here?",
"Situaciones concretas de negocio donde eliges la herramienta. Te dice por qué acertaste o por qué no.":"Real business situations where you pick the tool. It tells you why you got it right, or why you didn't.",

"Cómo funciona":"How it works",
"Quince minutos al día. Sin horarios.":"Fifteen minutes a day. No schedule.",
"No hay clases en vivo ni fechas que perderte. Entras cuando puedes y el aula te espera donde la dejaste.":"No live classes, no dates to miss. You come in when you can and the classroom waits where you left it.",
"Abres el día que toca":"Open the day you're on",
"Una herramienta, una lección. Ya sabes qué vas a aprender y para qué sirve antes de empezar.":"One tool, one lesson. You know what you're going to learn and what it's for before you start.",
"Lo haces mientras lees":"You do it while you read",
"Ejercicios dentro de la propia lección. Al terminar tienes algo tuyo funcionando, no notas en un cuaderno.":"Exercises inside the lesson itself. When you finish you have something of yours working, not notes in a notebook.",
"Lo aplicas a tu trabajo":"You apply it to your work",
"Cada día cierra con un reto sobre tu negocio real. Eso es lo que hace que se quede.":"Every day closes with a challenge about your real business. That's what makes it stick.",

"El programa":"The program",
"30 herramientas, en el orden correcto":"30 tools, in the right order",
"El orden importa más que la cantidad. Cada semana se apoya en la anterior, y ninguna necesita que sepas programar.":"Order matters more than quantity. Each week builds on the one before, and none of it asks you to code.",
"Semana 1 · Fundamentos":"Week 1 · Fundamentals",
"Hablarle bien a la IA":"Talking to AI properly",
"El método que hace que todo lo demás funcione: qué herramienta usar, cuándo, y cómo pedirle las cosas.":"The method that makes everything else work: which tool to use, when, and how to ask for things.",
"Semana 2 · Contenido":"Week 2 · Content",
"Imagen, audio y video":"Image, audio and video",
"Producir material que antes te costaba días o dinero, en una tarde y desde tu computador.":"Producing material that used to cost you days or money, in one afternoon, from your own computer.",
"Semana 3 · Automatización":"Week 3 · Automation",
"Que trabaje solo":"Let it run itself",
"Conectar tus herramientas para que las tareas repetitivas se ejecuten sin ti. Sin escribir código.":"Connecting your tools so the repetitive work runs without you. No code.",
"Semana 4 · Agentes":"Week 4 · Agents",
"Tu propio asistente":"Your own assistant",
"Construyes un agente que atiende, responde y da seguimiento con tus reglas y tu tono.":"You build an agent that handles, answers and follows up using your rules and your tone.",

"Antes de que pagues":"Before you pay",
"Prefiero decirte si no es para ti":"I'd rather tell you if this isn't for you",
"Un reembolso a los tres días le cuesta tiempo a los dos. Mejor lo aclaramos ahora.":"A refund three days in costs us both time. Better to sort it out now.",
"Es para ti si":"It's for you if",
"Tienes un negocio, eres freelance o trabajas por tu cuenta":"You have a business, you freelance or you work for yourself",
"Ya probaste alguna herramienta de IA y te quedaste a medias":"You've tried an AI tool and stopped halfway",
"Puedes dedicarle quince minutos al día, de verdad":"You can give it fifteen minutes a day, honestly",
"Quieres aplicarlo a tu trabajo, no coleccionar certificados":"You want to apply it to your work, not collect certificates",
"No es para ti si":"It's not for you if",
"Buscas ganar dinero con IA sin tener un negocio detrás":"You're looking to make money with AI with no business behind it",
"Esperas que alguien lo haga por ti: aquí haces tú":"You expect someone to do it for you: here, you do the work",
"Quieres teoría sobre cómo funcionan los modelos por dentro":"You want theory on how the models work inside",
"Ahora mismo no tienes ni quince minutos libres al día":"Right now you don't have fifteen free minutes a day",

"Dudas":"Questions",
"Lo que suelen preguntarnos":"What people usually ask",
"¿Necesito saber programar?":"Do I need to know how to code?",
"No. Ninguna de las 30 herramientas pide escribir una sola línea de código. Si sabes usar el correo y el navegador, puedes con esto.":"No. Not one of the 30 tools asks you to write a single line of code. If you can use email and a browser, you can do this.",
"¿Tengo que pagar las herramientas?":"Do I have to pay for the tools?",
"La gran mayoría tiene plan gratuito de sobra para aprender. En las pocas que no, verás un aviso antes de empezar el día y siempre te damos una alternativa gratuita.":"The vast majority have a free plan that's more than enough to learn on. For the few that don't, you'll see a heads-up before the day starts, and we always give you a free alternative.",
"¿Hay clases en vivo o fechas de inicio?":"Are there live classes or start dates?",
"No. Empiezas el mismo día que te inscribes y avanzas a tu ritmo. No hay horarios ni sesiones que perderte.":"No. You start the same day you enroll and move at your own pace. No schedules, no sessions to miss.",
"¿Cuánto tiempo necesito al día?":"How much time do I need each day?",
"Entre quince y veinte minutos, haciendo el ejercicio incluido. Si un día no puedes, el avance queda guardado y retomas donde ibas.":"Fifteen to twenty minutes, doing the exercise included. If you miss a day, your progress is saved and you pick up where you left off.",
"¿Y si no me sirve?":"What if it's not for me?",
"Tienes 7 días para pedir el reembolso completo, sin explicaciones. Escribes a contacto@learn5.tech y te devolvemos el dinero.":"You have 7 days to ask for a full refund, no explanation needed. Write to contacto@learn5.tech and we send the money back.",
"¿Por cuánto tiempo tengo acceso?":"How long do I have access?",
"Seis meses desde que entras. Son seis veces la duración del programa, así que si te atrasas no pasa nada. Aparte del acceso, tienes":"Six months from the day you join. That's six times the length of the program, so falling behind is no problem. On top of the access, you get",
"30 días de soporte directo":"30 days of direct support",
": durante ese mes me escribes y te contesto yo.":": during that month you write to me and I answer you myself.",

"30 herramientas · una por día · ninguna te pide programar":"30 tools · one a day · none of them asks you to code",
"Además de escribir texto, ¿para qué más has usado la IA?":"Besides writing text, what else have you used AI for?",
"Solo texto. No he probado nada más":"Only text. I haven't tried anything else",
"Para crear imágenes o diseños":"To create images or designs",
"Para voz, audio o video":"For voice, audio or video",
"Le he pasado documentos o fotos para que los lea":"I've given it documents or photos to read",
"Varias de estas, pero sin método":"Several of these, but with no method",
"¿Cuál de estas usas más?":"Which of these do you use most?",
"Ninguna en concreto, voy probando":"None in particular, I keep trying things",
"¿En qué sector trabajas?":"What sector do you work in?",
"Bienes raíces":"Real estate",
"Servicios profesionales o consultoría":"Professional services or consulting",
"Comercio, restauración o retail":"Retail, food or hospitality",
"Salud o bienestar":"Health or wellness",
"Educación o formación":"Education or training",
"Otro":"Other",
"¿Trabajas solo o con más gente?":"Do you work alone or with other people?",
"Solo, todo lo hago yo":"Alone. I do everything myself",
"Con dos o tres personas":"With two or three people",
"Tengo un equipo de más de cinco":"I have a team of more than five",
"Sin empleados, pero con clientes fijos":"No employees, but with regular clients",
"Inicio":"Home",
"Privacidad":"Privacy",
"Términos":"Terms",

"Pregunta 1 de 9":"Question 1 of 9",
"Pregunta 2 de 9":"Question 2 of 9",
"Pregunta 3 de 9":"Question 3 of 9",
"Pregunta 4 de 9":"Question 4 of 9",
"Pregunta 5 de 9":"Question 5 of 9",
"Pregunta 6 de 9":"Question 6 of 9",
"Pregunta 7 de 9":"Question 7 of 9",
"Pregunta 8 de 9":"Question 8 of 9",
"Pregunta 9 de 9":"Question 9 of 9",
"Volver":"Back",

"¿Cuál describe mejor tu situación hoy?":"Which one describes you best today?",
"Nunca he usado herramientas de IA en serio":"I've never really used AI tools",
"Uso ChatGPT de vez en cuando, sin método":"I use ChatGPT now and then, with no method",
"La uso casi a diario, pero siento que le saco poco":"I use it almost daily, but I feel I'm barely scratching the surface",
"Ya automatizo cosas y quiero llevarlo más lejos":"I already automate things and want to take it further",
"¿En qué se te va más tiempo cada semana?":"Where does most of your week go?",
"Escribir: correos, propuestas, contenido":"Writing: emails, proposals, content",
"Crear material visual: imágenes, video, presentaciones":"Creating visuals: images, video, presentations",
"Tareas repetitivas: datos, seguimiento, administración":"Repetitive tasks: data, follow-up, admin",
"Atender clientes y responder lo mismo una y otra vez":"Handling clients and answering the same thing over and over",
"¿Qué te ha frenado hasta ahora?":"What's held you back so far?",
"No sé por dónde empezar, hay demasiadas herramientas":"I don't know where to start, there are too many tools",
"Empiezo cursos y nunca los termino":"I start courses and never finish them",
"Creo que necesito saber programar":"I think I need to know how to code",
"No tengo tiempo":"I don't have time",
"¿Cuánto tiempo real puedes dedicarle al día?":"How much time can you realistically give it a day?",
"Menos de 15 minutos":"Less than 15 minutes",
"Entre 15 y 30 minutos":"Between 15 and 30 minutes",
"Entre 30 y 60 minutos":"Between 30 and 60 minutes",
"Más de 1 hora":"More than 1 hour",
"¿A qué te dedicas?":"What do you do?",
"Emprendedor o dueño de negocio":"Founder or business owner",
"Freelance o consultor independiente":"Freelancer or independent consultant",
"Empleado en una empresa":"Employee at a company",
"Docente o formador":"Teacher or trainer",
"Si en 30 días lograras UNA sola cosa, ¿cuál sería?":"If you could achieve ONE thing in 30 days, what would it be?",
"Recuperar horas de mi semana":"Getting hours back in my week",
"Vender más y conseguir clientes":"Selling more and landing clients",
"Crear contenido sin depender de nadie":"Creating content without depending on anyone",
"Tener un agente de IA trabajando para mí":"Having an AI agent working for me",

"El Explorador":"The Explorer",
"El Usuario Intuitivo":"The Intuitive User",
"El Usuario Estancado":"The Stuck User",
"El Constructor":"The Builder",

"Tu semana clave: Semana 1":"Your key week: Week 1",
"Tu semana clave: Semana 2":"Your key week: Week 2",
"Tu semana clave: Semana 3":"Your key week: Week 3",
"Tu semana clave: Semana 4":"Your key week: Week 4",
"Fundamentos y prompting avanzado con ChatGPT y Claude. Vas a construir plantillas reutilizables para correos, propuestas y contenido: el trabajo de escritura deja de empezar desde cero cada vez.":"Fundamentals and advanced prompting with ChatGPT and Claude. You'll build reusable templates for emails, proposals and content: writing stops starting from zero every single time.",
"IA visual y creación de contenido. Canva AI, Leonardo, ElevenLabs y HeyGen: imagen, audio y video en una fracción del tiempo, sin depender de un diseñador para cada pieza.":"Visual AI and content creation. Canva AI, Leonardo, ElevenLabs and HeyGen: image, audio and video in a fraction of the time, without needing a designer for every piece.",
"Automatización sin programar. Make, Zapier y n8n conectan tus herramientas para que las tareas repetitivas se ejecuten solas. Es la semana con mayor retorno de horas.":"Automation without coding. Make, Zapier and n8n connect your tools so the repetitive work runs itself. It's the week that gives back the most hours.",
"Construyes tu propio agente de IA: atención al cliente, seguimiento y ventas funcionando sin que tú estés presente. Sales del programa con un agente operativo, no con apuntes.":"You build your own AI agent: customer service, follow-up and sales running without you there. You leave the program with a working agent, not notes.",

"Tu diagnóstico":"Your diagnostic",
"Tu perfil:":"Your profile:",
"Recibe tu ruta completa + 30 prompts listos para usar":"Get your full roadmap + 30 ready-to-use prompts",
"Te enviamos por correo tu plan de 30 días adaptado a este resultado, junto con nuestra guía de 30 prompts probados. Sin costo.":"We'll email you your 30-day plan built around this result, along with our guide of 30 tested prompts. Free.",
"Acepto recibir mi diagnóstico y correos con contenido sobre IA de Learn5. Puedo darme de baja en cualquier momento. Consulta la":"I agree to receive my diagnostic and emails with AI content from Learn5. I can unsubscribe at any time. See the",
"política de privacidad":"privacy policy",
"Enviarme mi ruta personalizada":"Send me my roadmap",
"Learn5 LLC · Miami, Florida · Nunca compartimos tu correo con terceros.":"Learn5 LLC · Miami, Florida · We never share your email with anyone.",
"Escribe tu nombre para continuar.":"Enter your name to continue.",
"Revisa tu correo, parece que tiene un error.":"Check your email, it looks like there's a typo.",
"Necesitamos tu consentimiento para enviarte el diagnóstico.":"We need your consent to send you the diagnostic.",
"Enviando...":"Sending...",
"No pudimos enviarlo. Escríbenos por":"We couldn't send it. Message us on",
"y te lo mandamos igual.":"and we'll send it over anyway.",

"Listo":"Done",
"Gracias,":"Thank you,",
"Tu ruta personalizada y la guía de 30 prompts van en camino a tu correo. Si en unos minutos no los ves, revisa spam o promociones.":"Your roadmap and the 30-prompt guide are on their way to your inbox. If you don't see them in a few minutes, check spam or promotions.",
"Si quieres el programa completo":"If you want the full program",
"Pago único":"One-time payment",
"La segunda a los 15 días":"Second one on day 15",
"Los 30 días completos, a tu ritmo.":"All 30 days, at your own pace.",
"6 meses de acceso":"6 months of access",
"y":"and",
"conmigo. Garantía de 7 días: si no te sirve, te devolvemos el dinero.":"with me. 7-day guarantee: if it isn't for you, we refund you.",
"Cómo pagar":"How to pay",
"1. Zelle a":"1. Zelle to",
"— Bank of America, a nombre de Learn5 LLC.":"— Bank of America, under Learn5 LLC.",
"2. En el concepto, tu nombre y":"2. In the memo, your name and",
"3. Mandas el comprobante por WhatsApp o correo.":"3. Send the receipt by WhatsApp or email.",
"4. Te damos el acceso en menos de 24 horas.":"4. We give you access in under 24 hours.",
"Quiero inscribirme":"I want to enroll",
"Sin prisa: la ruta que te mandamos ya te sirve aunque no compres nada.":"No rush: the roadmap we send you is worth having even if you never buy a thing.",

"Tu nombre":"Your name",
"Tu correo electrónico":"Your email address",
"Tu número de teléfono (opcional)":"Your phone number (optional)"
};

/* --- trozos: el diagnostico concatena perfil + apunte en un solo nodo --- */
var F={
" Y en bienes raíces esto pesa el doble: las mismas preguntas de precio, disponibilidad y visitas, cada día y a cada contacto.":" And in real estate this weighs double: the same questions about price, availability and viewings, every day, from every contact.",
" En servicios profesionales tu tiempo es el producto, así que cada hora que recuperas es margen directo, no una comodidad.":" In professional services your time is the product, so every hour you get back is margin, not a convenience.",
" En comercio y restauración el cuello de botella casi siempre es el contenido y responder a clientes, y las dos cosas se automatizan.":" In retail and hospitality the bottleneck is almost always content and answering customers, and both of those can be automated.",
" En salud y bienestar el reto no es ir rápido: es que lo que sale suene a ti y no a una máquina. Eso se resuelve con plantillas propias, no con atajos.":" In health and wellness the challenge isn't speed: it's that what comes out sounds like you and not like a machine. That is solved with your own templates, not with shortcuts.",
" En educación la IA no te sustituye: te quita la preparación repetitiva y te devuelve las horas para lo que sí necesita criterio.":" In education AI doesn't replace you: it takes the repetitive prep off your hands and gives you back the hours for what actually needs judgment.",
" Y algo importante: solo has usado texto. La mitad de lo que hoy hace la IA es imagen, voz y video, y esa es la semana 2 entera esperándote.":" And something important: you've only used text. Half of what AI does today is image, voice and video — that's all of week 2 waiting for you.",
" Ya usas IA para imagen, así que tu salto no está ahí: está en conectar lo que haces para que se ejecute solo.":" You already use AI for images, so your jump isn't there: it's in connecting what you do so it runs on its own.",
" Haber probado voz o video te pone por delante de la mayoría. Lo que te falta no es herramienta: es orden y repetición.":" Having tried voice or video puts you ahead of most people. What you're missing isn't a tool: it's order and repetition.",
" Que le pases documentos para que los lea es justo la puerta a NotebookLM, que es el día 4 y el que más sorprende a todo el mundo.":" Handing it documents to read is exactly the door to NotebookLM, which is day 4 and the one that surprises everyone.",
" Has probado de todo un poco, y ese es exactamente el patrón que produce la sensación de no avanzar. No te falta exploración: te falta secuencia.":" You've tried a bit of everything, and that is exactly the pattern that produces the feeling of going nowhere. You don't lack exploration: you lack sequence.",
" Sobre lo que te frena: no es que la IA no sirva, es que le pides como si fuera un buscador. La primera lección es exactamente eso, cómo pedirle para que responda lo que necesitas.":" About what's holding you back: it isn't that AI doesn't work, it's that you ask it like a search engine. The first lesson is exactly that — how to ask so it answers what you actually need.",
" Sobre lo que te frena: escribir lo mismo cada semana se arregla una sola vez. Sales del programa con tus plantillas hechas, no con apuntes.":" About what's holding you back: writing the same thing every week gets fixed once. You leave the program with your templates built, not with notes.",
" Sobre lo que te frena: en esto no se llega tarde. La ventaja no es haber empezado antes, es tener un orden, y ese orden es justo lo que te damos.":" About what's holding you back: you can't be late to this. The advantage isn't starting earlier, it's having an order — and that order is exactly what we give you.",
" Sobre lo que te frena: probar herramientas sueltas es la trampa más común. Aquí van en secuencia, una por día, y cada una se apoya en la anterior.":" About what's holding you back: trying random tools is the most common trap. Here they come in sequence, one a day, each building on the last.",
"Estás en el mejor punto de partida posible: sin vicios ni atajos mal aprendidos. Tu riesgo no es la falta de capacidad, es perderte entre las 300 herramientas que aparecen cada mes. Necesitas una secuencia, no un catálogo.":"You're at the best possible starting point: no bad habits, no half-learned shortcuts. Your risk isn't ability, it's getting lost among the 300 tools that show up every month. You need a sequence, not a catalog.",
"Ya le perdiste el miedo a la IA, pero la usas como buscador y no como sistema. El salto no está en usar más herramientas, sino en aprender a estructurar lo que le pides.":"You've lost your fear of AI, but you use it like a search engine instead of a system. The jump isn't using more tools, it's learning to structure what you ask for.",
"Este es el perfil más común y el más frustrante: usas IA todos los días y aun así sientes que no avanzas. El problema casi nunca es la herramienta, es que repites el mismo prompt básico. Te falta convertir lo que haces en plantillas y flujos reutilizables.":"This is the most common profile and the most frustrating: you use AI every day and still feel stuck. The problem is almost never the tool, it's that you repeat the same basic prompt. What's missing is turning what you do into reusable templates and flows.",
"Ya pasaste la etapa de aprender herramientas sueltas. Tu siguiente frontera es conectar sistemas: que las cosas ocurran solas sin que tengas que abrir una pestaña. Ahí es donde la IA deja de ahorrarte minutos y empieza a ahorrarte días.":"You're past the stage of learning tools one at a time. Your next frontier is connecting systems: things happening on their own without you opening a tab. That's where AI stops saving you minutes and starts saving you days.",
" Sobre lo que más te ha frenado: por eso el programa es de 1 herramienta al día en sesiones cortas, diseñado para que termines, no solo para que empieces.":" About what's held you back most: that's exactly why the program is 1 tool a day in short sessions, designed so you finish, not just start.",
" Y no, no necesitas programar: ninguna de las 30 herramientas requiere escribir una sola línea de código.":" And no, you don't need to code: none of the 30 tools requires writing a single line of code.",
" Con 15 a 20 minutos al día avanzas sin problema: el campus está disponible 24/7 y no hay horarios fijos.":" With 15 to 20 minutes a day you'll move along just fine: the campus is open 24/7 and there are no fixed schedules.",
" Por eso el programa va en orden: una herramienta por día, en secuencia, sin que tengas que decidir qué sigue.":" That's why the program runs in order: one tool a day, in sequence, without you having to decide what comes next."
};

/* --- lo que vive fuera del texto: titulo, enlaces, etiquetas --- */
var META={
es:{titulo:"¿Qué te está frenando con la IA? · Diagnóstico gratuito | Learn5",
    wa:"https://wa.me/17865271196?text=Hola%2C%20quiero%20info%20de%20IA%20en%2030%20D%C3%ADas",
    waAlta:"https://wa.me/17865271196?text=Hola%2C%20acabo%20de%20hacer%20el%20diagn%C3%B3stico%20y%20quiero%20inscribirme%20en%20IA%20en%2030%20D%C3%ADas",
    aria:"Escríbenos por WhatsApp"},
en:{titulo:"What's holding you back with AI? · Free diagnostic | Learn5",
    wa:"https://wa.me/17865271196?text=Hi%2C%20I%27d%20like%20info%20about%20AI%20in%2030%20Days",
    waAlta:"https://wa.me/17865271196?text=Hi%2C%20I%20just%20took%20the%20diagnostic%20and%20I%27d%20like%20to%20enroll%20in%20AI%20in%2030%20Days",
    aria:"Message us on WhatsApp"}
};

/* --- diccionarios inversos, para volver al espanol --- */
var R={},RF={},k;
for(k in D)R[D[k]]=k;
for(k in F)RF[F[k]]=k;

var idioma="es", ocupado=false;

function pasada(dic,frag){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false),n,lista=[];
  while((n=w.nextNode()))lista.push(n);
  for(var i=0;i<lista.length;i++){
    var nodo=lista[i], p=nodo.parentNode;
    if(!p||!p.closest||p.closest("script,style,.lang,.no-i18n"))continue;
    var v=nodo.nodeValue, t=v.trim();
    if(!t)continue;
    if(Object.prototype.hasOwnProperty.call(dic,t)){
      (function(destino){ nodo.nodeValue=v.replace(t,function(){return destino;}); })(dic[t]);
      continue;
    }
    var nuevo=v, cambio=false;
    for(var f in frag){ if(nuevo.indexOf(f)>-1){ nuevo=nuevo.split(f).join(frag[f]); cambio=true; } }
    if(cambio)nodo.nodeValue=nuevo;
  }
  var campos=document.querySelectorAll("input[placeholder]");
  for(var j=0;j<campos.length;j++){
    var ph=campos[j].getAttribute("placeholder");
    if(Object.prototype.hasOwnProperty.call(dic,ph))campos[j].setAttribute("placeholder",dic[ph]);
  }
}

function remate(l){
  var m=META[l];
  document.documentElement.lang=l;
  document.title=m.titulo;
  var wa=document.querySelector("a.wa");
  if(wa){ wa.href=m.wa; wa.setAttribute("aria-label",m.aria); }
  var alta=document.querySelector(".oferta a.qbtn");
  if(alta)alta.href=m.waAlta;
  var bs=document.querySelectorAll(".lang button");
  for(var i=0;i<bs.length;i++)bs[i].className=(bs[i].getAttribute("data-idioma")===l?"on":"");
}

function poner(l){
  if(l!=="es"&&l!=="en")return;
  if(l===idioma){ remate(l); return; }
  ocupado=true;
  if(l==="en")pasada(D,F); else pasada(R,RF);
  idioma=l;
  remate(l);
  try{ localStorage.setItem("learn5_idioma",l); }catch(e){}
  try{ window.dispatchEvent(new CustomEvent("learn5:idioma",{detail:l})); }catch(e){}
  setTimeout(function(){ ocupado=false; },0);
}

/* el diagnostico se redibuja con innerHTML: volvemos a pasar */
var espera=null;
var obs=new MutationObserver(function(cambios){
  if(ocupado||idioma!=="en")return;
  var vale=false;
  for(var i=0;i<cambios.length;i++){
    var t=cambios[i].target;
    var e=(t.nodeType===1)?t:t.parentNode;
    if(e&&e.closest&&!e.closest(".no-i18n")){ vale=true; break; }
  }
  if(!vale)return;
  clearTimeout(espera);
  espera=setTimeout(function(){
    ocupado=true;
    pasada(D,F);
    remate("en");
    ocupado=false;
  },60);
});

function arrancar(){
  var bs=document.querySelectorAll(".lang button");
  for(var i=0;i<bs.length;i++){
    (function(b){ b.onclick=function(){ poner(b.getAttribute("data-idioma")); }; })(bs[i]);
  }
  obs.observe(document.body,{childList:true,subtree:true,characterData:true});

  var guardado=null;
  try{ guardado=localStorage.getItem("learn5_idioma"); }catch(e){}
  if(guardado){ poner(guardado); return; }

  /* sin eleccion previa: solo pasamos a ingles si el navegador no lleva espanol */
  var idiomas=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||"es"];
  var hayEspanol=false;
  for(var j=0;j<idiomas.length;j++){ if(String(idiomas[j]).toLowerCase().indexOf("es")===0)hayEspanol=true; }
  if(!hayEspanol)poner("en");
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",arrancar);
else arrancar();

window.learn5Idioma=poner;
})();
