// ============================================================
// PATCH TAREAS OMAR — 40 tareas nuevas + crear tarea + fix importar
// Añadir al final de js/app.js
// ============================================================

// ─── 40 TAREAS NUEVAS (5 por posición × 6 + 10 extra repartidas) ───
const TAREAS_NUEVAS = [

  // ══════════ CENTRAL (5) ══════════
  {
    id:'n_ce1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'DE', color:'#0C447C', bg:'#E6F1FB',
    t:'Cobertura al lateral en 2v2',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El central practica cubrir al lateral cuando este salta a presionar al extremo, manteniendo el equilibrio defensivo.',
    des:'Espacio 25x20m. Lateral salta al extremo en banda. Central debe cerrar la posición del lateral sin perder de vista al delantero. 2v2 con central + lateral vs extremo + delantero.',
    var:'Añadir pase directo al delantero cuando el central sale. Central con límite de 2 pasos al cubrir.',
    preg:[
      {p:'¿Cuándo decidiste cerrar la posición del lateral, antes o después de que saltara?', razon:'Entrena la anticipación del movimiento del compañero.'},
      {p:'¿Mantuviste al delantero rival dentro de tu campo visual mientras cubría?', razon:'Trabaja la atención dividida en situaciones defensivas complejas.'},
      {p:'¿En qué momento dejaste de cubrir al lateral y volviste a tu posición base?', razon:'Define el criterio de cuándo termina la cobertura.'}
    ],
    mics:['Cobertura a P2','Cobertura a P4','Segundo P4 equilibra dentro si el otro P4 salta']
  },
  {
    id:'n_ce2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Pase largo para cambiar el juego',
    j:'4-5', d:'12min', i:'Media',
    desc:'El central practica el pase largo diagonal para cambiar el punto de ataque cuando la presión cierra un lado.',
    des:'Espacio 40x30m. Central con balón. Lateral cercano presionado. El central lee si hay opción de pase corto o debe cambiar el juego con pase largo al lateral opuesto. Un presionador en cada lado.',
    var:'Limitar tiempo de decisión a 3 segundos. Añadir pivote como opción de seguridad entre los dos laterales. Central solo puede dar 1 pase corto antes de cambiar.',
    preg:[
      {p:'¿Cómo supiste que el lado cercano estaba cerrado y había que cambiar?', razon:'Identifica la señal que activa el cambio de orientación.'},
      {p:'¿Tu pase largo fue directo o en diagonal? ¿Por qué esa decisión?', razon:'Trabaja la conciencia de la trayectoria del pase en función del espacio.'},
      {p:'¿El receptor al que diste el cambio estaba preparado o te esperó?', razon:'Introduce la coordinación entre pase largo y movimiento del receptor.'}
    ],
    mics:['Capacidad de pases largos','Pases fuera-dentro','Esconder pase para abrir nuevas líneas']
  },
  {
    id:'n_ce3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'TD', color:'#D85A30', bg:'#FAECE7',
    t:'Reacción inmediata tras pérdida de balón',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El central practica la transición defensiva: pasar de tener el balón a presionar al poseedor en menos de 2 segundos.',
    des:'Espacio 20x15m. Central tiene el balón. Rival intercepta. Central debe iniciar presión inmediata sobre el nuevo poseedor antes de que dé un pase. Si el poseedor da un pase limpio, punto para el rival.',
    var:'Central debe llegar a distancia de tackling en 3 pasos máximo. Añadir segundo rival que apoya al poseedor. Central con restricción: no puede ir a por el balón, solo tapar líneas.',
    preg:[
      {p:'¿Cuántos pasos tardaste en reaccionar después de perder el balón?', razon:'Cuantifica el tiempo de reacción para hacerlo consciente.'},
      {p:'¿Fuiste a presionar al poseedor o cerraste la línea de pase más peligrosa?', razon:'Diferencia entre presión al poseedor y cierre de línea.'},
      {p:'¿En qué momento del partido real es más importante esta reacción inmediata?', razon:'Conecta el ejercicio con situaciones reales del partido.'}
    ],
    mics:['Acoso por lado erróneo','Frecuencia de pasos alta para reaccionar rápido','Pase de primeras a contrapresión']
  },
  {
    id:'n_ce4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Central', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Atraer presión para liberar compañero',
    j:'4-5', d:'12min', i:'Media',
    desc:'El central aprende a conducir hacia el presionador para atraerlo y crear el espacio para el pase al compañero libre.',
    des:'Espacio 25x20m. Central con balón. Delantero rival presiona. Central conduce hacia él (no huye) para fijarle y luego da el pase al pivote o lateral que queda libre detrás de la presión.',
    var:'Limitar la conducción del central a 5 metros. Añadir segundo presionador. El pase tras atraer debe ser en profundidad, no de vuelta.',
    preg:[
      {p:'¿Cuándo notaste que el presionador estaba comprometido y podías pasar?', razon:'Identifica el momento de apertura de la línea de pase.'},
      {p:'¿Condujiste hacia el presionador de verdad o giraste antes de que llegara?', razon:'Diferencia entre fijación real y fijación parcial.'},
      {p:'¿Tu compañero estaba en buena posición para recibir cuando le diste el balón?', razon:'Conecta la fijación individual con la disponibilidad colectiva.'}
    ],
    mics:['Atraer presión desde parado','Conducción hacia atrás para atraer presión','Calibrar para modificar al rival mientras conduzco']
  },
  {
    id:'n_ce5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'DE', color:'#0C447C', bg:'#E6F1FB',
    t:'Defensa del juego aéreo en área',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El central practica los duelos aéreos defensivos: carrera, salto, uso de brazos y despeje controlado.',
    des:'Espacio: área de penalti. Centros laterales desde banda. Central debe disputar el balón aéreo con delantero rival marcando de cerca. Trabajar: carrera hacia atrás con pies de perfil, salto con impulso de brazos, despeje hacia afuera.',
    var:'Delantero con ventaja posicional (llega antes). Centros rasantes para trabajar anticipación. 2 centrales coordinando quién salta y quién cubre.',
    preg:[
      {p:'¿Tu carrera hacia atrás te permitió llegar al punto de caída del balón antes que el delantero?', razon:'Evalúa el posicionamiento previo al duelo aéreo.'},
      {p:'¿Usaste los brazos para protegerte o para impulsarte? ¿Cuándo es cada uno?', razon:'Diferencia entre uso defensivo y ofensivo de los brazos en el juego aéreo.'},
      {p:'¿Despeiste hacia dónde querías o hacia donde salió?', razon:'Introduce la intencionalidad en el despeje defensivo.'}
    ],
    mics:['Juego aéreo: carrera hacia atrás y pies de perfil','Juego aéreo: utilización de brazos para impulsarse','Manos atrás en área']
  },

  // ══════════ LATERAL (5) ══════════
  {
    id:'n_la1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'OF', color:'#085041', bg:'#E1F5EE',
    t:'Centro desde 3/4 sin superar',
    j:'4-5', d:'12min', i:'Media',
    desc:'El lateral practica centrar desde posición de 3/4 sin necesidad de superar al defensor, leyendo cuándo centrar de primeras.',
    des:'Espacio 35x25m. Lateral recibe en posición de 3/4. Defensor le cierra. Lateral decide: centrar de primeras, conducir para ganar ángulo o invertir. Delantero y extremo en el área para rematar.',
    var:'Limitar a 2 toques antes de centrar. Defensor más agresivo: obliga a decidir más rápido. Añadir segundo atacante entrando desde segunda altura.',
    preg:[
      {p:'¿Cuándo decidiste centrar sin conducir más? ¿Qué viste que te indicó ese momento?', razon:'Identifica la señal que activa el centro de primeras.'},
      {p:'¿Tu centro buscó el primer palo, el segundo o el punto de penalti?', razon:'Trabaja la intencionalidad y la zona objetivo del centro.'},
      {p:'¿El defensor comprometió su posición antes de que centraras? ¿Cómo lo aprovechaste?', razon:'Conecta la lectura del defensor con la decisión de centrar.'}
    ],
    mics:['Centros desde 3/4','Centros de primeras para no perder tiempo','Centro desde línea de fondo']
  },
  {
    id:'n_la2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'OF', color:'#085041', bg:'#E1F5EE',
    t:'Doblada interior en intervalo central-lateral',
    j:'4-5', d:'12min', i:'Media-Alta',
    desc:'El lateral practica la doblada por dentro cuando el extremo fija en banda y el intervalo interior queda libre.',
    des:'Espacio 30x25m. Extremo fija al lateral rival en banda exterior. El lateral del equipo ataca el intervalo entre el central y el lateral rival. Interior le apoya. 3v2 con lateral + extremo + interior vs lateral + central rivales.',
    var:'El lateral que dobla por dentro tiene 2 toques máximo al recibir. El extremo debe mantener fijado al defensor durante al menos 3 segundos. Añadir finalización.',
    preg:[
      {p:'¿Cuándo arrancaste a doblar por dentro? ¿Qué señal usaste del extremo?', razon:'Identifica el momento de activación del movimiento.'},
      {p:'¿El intervalo por el que entraste estaba libre o tuviste que crear espacio?', razon:'Diferencia entre leer el espacio disponible y generarlo.'},
      {p:'¿Llegaste con ventaja o el central ya te cubría cuando recibiste?', razon:'Evalúa si el timing y la trayectoria fueron correctos.'}
    ],
    mics:['Doblada interior en intervalo CT-LT para recibir o movilizar','Pisar posiciones interiores para fijar','Pisar posiciones interiores para recibir']
  },
  {
    id:'n_la3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'DE', color:'#085041', bg:'#E1F5EE',
    t:'Cierre en el centro lateral desde lado opuesto',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El lateral del lado contrario practica el cierre al segundo palo cuando el balón está en banda opuesta.',
    des:'Espacio: mitad campo + área. Balón en banda derecha. Lateral izquierdo debe cerrar el segundo palo del área antes de que llegue el centro. Trabaja: perfil diagonal, lectura de la trayectoria del centro, control del par.',
    var:'Centro con trayectoria cambiante. Segundo atacante que ataca el segundo palo. Lateral con restricción: no puede entrar al área hasta que el balón esté en el aire.',
    preg:[
      {p:'¿Cuándo empezaste a moverte hacia el segundo palo — al ver que iban a centrar o antes?', razon:'Evalúa la anticipación del movimiento de cierre.'},
      {p:'¿Tu perfil al llegar al área te permitía ver el balón y al atacante simultáneamente?', razon:'Trabaja el posicionamiento corporal en el cierre.'},
      {p:'¿Priorizaste llegar al segundo palo o marcar al atacante que venía a esa zona?', razon:'Define la jerarquía de atención: espacio vs marcaje.'}
    ],
    mics:['Cierre en centro lateral opuesto: control del par','Cierre en centro lateral opuesto: perfil diagonal','Preferencial defensa de área sobre centrador']
  },
  {
    id:'n_la4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Lateral', fase:'OF', color:'#085041', bg:'#E1F5EE',
    t:'Control abierto para progresar en banda',
    j:'4-5', d:'10min', i:'Media',
    desc:'El lateral practica el control abierto orientado hacia adelante para ganar metros en banda sin necesidad de regatear.',
    des:'Espacio 30x15m (banda lateral). Lateral recibe pase del central con rival que llega desde atrás. Debe orientar el primer control hacia adelante para ganar espacio antes de que el rival llegue. Trabajar orientación del control según la posición del defensor.',
    var:'Defensor que llega más rápido: menos tiempo para el control. Añadir extremo como opción de pase tras el control. Control con pierna no dominante.',
    preg:[
      {p:'¿Hacia dónde orientaste el control? ¿Fue hacia donde había espacio o hacia donde querías?', razon:'Diferencia entre control reactivo e intencional.'},
      {p:'¿Miraste la posición del defensor antes del control o después?', razon:'Introduce el escaneo previo a la recepción para el lateral.'},
      {p:'¿Cuándo el defensor llegaba muy rápido, cambiaste la dirección del control?', razon:'Adaptación del control según la presión.'}
    ],
    mics:['Control abierto con pase fuera','Control abierto con regate dentro','Control para progresar']
  },
  {
    id:'n_la5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'TD', color:'#D85A30', bg:'#FAECE7',
    t:'Repliegue y vuelta al bloque tras subida',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El lateral practica la transición defensiva tras haber subido: volver al bloque antes de que el rival llegue a su zona.',
    des:'Espacio 40x25m. Lateral sube en ataque. Pérdida de balón simulada (señal del entrenador). Lateral tiene que regresar a su posición defensiva antes de que el extremo rival reciba y llegue a su zona. Cronometrar el tiempo de repliegue.',
    var:'Extremo rival arranca en el momento exacto de la pérdida. Lateral debe elegir: replegarme rápido o presionar primero. Añadir central que le indica cuándo y por dónde volver.',
    preg:[
      {p:'¿Cuánto tardaste en regresar a tu posición defensiva? ¿Fue suficiente?', razon:'Cuantifica el tiempo de repliegue para crear referencia.'},
      {p:'¿Volviste por el mismo carril por el que subiste o cambiaste de trayectoria?', razon:'Trabaja la ruta óptima de repliegue.'},
      {p:'¿Miraste dónde estaba el extremo rival mientras regresabas?', razon:'Introduce la atención al rival mientras se repliega.'}
    ],
    mics:['Volver al bloque defensivo si nos superan','Saltos lejos: chocar en retorno','Defender carreras del rival']
  },

  // ══════════ PIVOTE (5) ══════════
  {
    id:'n_pi1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'OF', color:'#633806', bg:'#FAEEDA',
    t:'Aparecer a espaldas de la línea de presión',
    j:'4-5', d:'12min', i:'Media',
    desc:'El pivote practica descolgarse para aparecer detrás de la línea de presión rival cuando el equipo está en construcción.',
    des:'Espacio 30x20m. Dos centrales construyen con un presionador encima. El pivote debe leer el momento para descolgarse detrás del presionador y recibir entre líneas. Si aparece demasiado pronto, el presionador le sigue.',
    var:'Añadir segundo presionador que puede seguir al pivote si se descuelga. Pivote con límite de 2 toques tras recibir. El pivote debe dar el pase hacia adelante siempre tras recibir.',
    preg:[
      {p:'¿Cuándo decidiste descolgarte? ¿Esperaste a que el presionador comprometiera su posición?', razon:'Identifica el momento óptimo del movimiento.'},
      {p:'¿El presionador te siguió cuando bajaste o se quedó con los centrales?', razon:'Lee si el movimiento del pivote creó el espacio deseado.'},
      {p:'Cuando recibiste entre líneas, ¿ya tenías decidido a quién ibas a jugar?', razon:'Conecta el movimiento de desmarcarse con la decisión posterior.'}
    ],
    mics:['Aparecer a espaldas de líneas de presión rivales','Descolgarse para recibir o atraer','Fijar, atraer y arrastrar rivales para facilitar líneas de pase']
  },
  {
    id:'n_pi2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'OF', color:'#633806', bg:'#FAEEDA',
    t:'Repetir pase para mover al rival',
    j:'4-5', d:'10min', i:'Media',
    desc:'El pivote practica la combinación de devolver el balón al central y moverse para recibir de nuevo desde otro ángulo, modificando la posición del rival.',
    des:'Espacio 20x20m. Pivote + central + lateral vs 1 presionador sobre el pivote. Pivote recibe, devuelve al central, se mueve a otra posición y vuelve a pedir. El objetivo es que el presionador pierda la referencia en el movimiento.',
    var:'2 presionadores. El central solo puede devolver al pivote, no tiene otras opciones. Pivote debe moverse mínimo 5 metros antes de volver a pedir.',
    preg:[
      {p:'¿Cuándo devolviste el balón, te moviste inmediatamente o esperaste?', razon:'El timing del movimiento tras la devolución es clave para perder al marcador.'},
      {p:'¿El presionador te perdió en el movimiento o siguió contigo?', razon:'Evalúa si el movimiento fue efectivo para crear la nueva línea de pase.'},
      {p:'¿A qué posición te moviste y por qué esa y no otra?', razon:'Introduce la intencionalidad en el movimiento de recolocación.'}
    ],
    mics:['Repetir pase con P4 para modificar al rival','Movimiento para siguiente jugada','Ofrecer pases de seguridad']
  },
  {
    id:'n_pi3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'DE', color:'#633806', bg:'#FAEEDA',
    t:'Basculaciones y coberturas a interiores',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El pivote practica las basculaciones defensivas para ayudar al interior cuando este es superado o cuando el balón cambia de lado.',
    des:'Espacio 25x20m. 3v3 con pivote + 2 interiores vs 3 atacantes. Cuando el balón cambia de lado, el pivote debe bascular y cubrir al interior del lado fuerte. Trabajar distancia de cobertura y momento del movimiento.',
    var:'Añadir central que ayuda si el pivote falla. Pivote con restricción: no puede ir al balón, solo cubrir líneas. Velocidad de circulación aumentada.',
    preg:[
      {p:'¿Cuándo empezaste a bascular — cuando el balón salió o cuando ya llegó al otro lado?', razon:'Evalúa si la basculación fue anticipada o reactiva.'},
      {p:'¿A qué distancia te colocas del interior al que cubres? ¿Por qué esa distancia?', razon:'Trabaja la distancia de cobertura óptima.'},
      {p:'¿Hubo situaciones donde cubriste al interior pero dejaste libre el espacio central?', razon:'Conecta la cobertura al interior con el riesgo de dejar el centro libre.'}
    ],
    mics:['Basculaciones y coberturas a interiores','Cobertura a lateral','Compensar una posible pérdida']
  },
  {
    id:'n_pi4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Pivote', fase:'OF', color:'#633806', bg:'#FAEEDA',
    t:'Control con alejada para girar',
    j:'4-5', d:'10min', i:'Media',
    desc:'El pivote practica el control con alejada para crear espacio y girarse cuando recibe de espaldas al rival.',
    des:'Espacio 15x15m. Pivote recibe de espaldas con defensor detrás. Debe hacer control con alejada para crear el espacio suficiente para girar y encarar. El defensor presiona pero no puede quitarle el balón en el primer toque.',
    var:'Defensor más agresivo: puede presionar desde el primer toque. Limitar el espacio: el pivote no puede alejarse más de 3 metros. Añadir opción de dar el pase sin girar si el defensor está muy encima.',
    preg:[
      {p:'¿Hacia qué lado alejaste el balón con el control? ¿Lo decidiste antes o al recibir?', razon:'Introduce la anticipación de la dirección del control con alejada.'},
      {p:'¿Conseguiste espacio suficiente para girar o el defensor llegó antes?', razon:'Evalúa si la alejada fue suficientemente grande.'},
      {p:'¿Cuándo el defensor llegaba muy rápido, cambiaste de plan y diste el pase sin girar?', razon:'Trabaja la decisión alternativa cuando el giro no es posible.'}
    ],
    mics:['Control con alejada','Control dejando pasar el balón','Perfil recibiendo de espaldas para poder jugar fácil']
  },
  {
    id:'n_pi5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'DE', color:'#633806', bg:'#FAEEDA',
    t:'Evitar recepciones en plataforma del rival',
    j:'4-5', d:'12min', i:'Media-Alta',
    desc:'El pivote practica reducir distancia para evitar que el mediocentro rival reciba en posición cómoda de cara a la portería.',
    des:'Espacio 25x20m. Pivote defensor intenta evitar que el mediocentro rival reciba con tiempo y espacio suficiente para girar. No puede entrar al cuerpo: solo tapar líneas de pase y reducir distancia.',
    var:'El mediocentro rival se mueve constantemente. Pivote solo tiene permiso de saltar si el pase ya salió. 2 pivotes coordinando coberturas.',
    preg:[
      {p:'¿A qué distancia te colocabas del mediocentro rival para tapar la línea sin comprometerte?', razon:'Identifica la distancia óptima de presión sin riesgo.'},
      {p:'¿Cuándo el mediocentro se movió para desmarcarse, le seguiste o mantuviste posición?', razon:'Diferencia entre marcaje individual y cobertura de zona.'},
      {p:'¿Hubo momentos en que te acercaste demasiado y te superaron por detrás?', razon:'Identifica el error más común de la presión excesiva.'}
    ],
    mics:['Reducir distancia para evitar recepciones en plataforma','Tapar línea de pase estático','Evitar recepciones que permitan enfrentar línea defensiva con ventaja']
  },

  // ══════════ INTERIOR (5) ══════════
  {
    id:'n_in1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'OF', color:'#3C3489', bg:'#EEEDFE',
    t:'Lateralizarse para recibir y girar',
    j:'4-5', d:'12min', i:'Media',
    desc:'El interior practica lateralizarse hacia la banda para recibir con espacio y luego atacar el intervalo o dar continuidad.',
    des:'Espacio 25x20m. Interior parte del centro. Se lateraliza hacia banda para recibir del central. Al recibir, decide: entrar al intervalo con conducción, pase al extremo o devolver y moverse. Defensor que le sigue.',
    var:'Defensor no puede seguirle a la banda: solo puede cubrir el intervalo. Añadir límite de 2 toques tras recibir en banda. Interior debe volver al centro tras cada acción.',
    preg:[
      {p:'¿Tu movimiento lateral creó el espacio que querías o el defensor llegó contigo?', razon:'Evalúa si el movimiento fue efectivo para crear el espacio.'},
      {p:'Cuando recibiste en banda, ¿ya habías decidido qué hacer antes de que llegara el balón?', razon:'Introduce la anticipación de la decisión en el movimiento de desmarcarse.'},
      {p:'¿Cuándo el defensor no te siguió a banda, ¿lo aprovechaste para recibir con más comodidad?', razon:'Lee la reacción del rival al propio movimiento.'}
    ],
    mics:['Lateralizarse para recibir','Desdoble por fuera','Control con alejada para girar hacia línea defensiva']
  },
  {
    id:'n_in2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'OF', color:'#3C3489', bg:'#EEEDFE',
    t:'Conducción horizontal para provocar saltos',
    j:'4-5', d:'12min', i:'Media-Alta',
    desc:'El interior practica la conducción horizontal para que el rival tenga que decidir entre seguir o dejar espacio, creando incertidumbre defensiva.',
    des:'Espacio 30x20m. 3v2 con 2 interiores + pivote vs 2 defensores. Interior conduce horizontalmente hacia el otro interior. El defensor debe decidir si seguirle o mantenerse. El interior lee la decisión del defensor y actúa: si el defensor sigue, pasa. Si no sigue, continúa.',
    var:'Interior con límite de 4 metros de conducción horizontal. Añadir un tercer defensor que cubre el espacio. Conducción solo con pierna no dominante.',
    preg:[
      {p:'¿El defensor te siguió en la conducción o se quedó cubriendo el espacio?', razon:'Lee la reacción del defensor a la conducción.'},
      {p:'¿Cuándo decidiste pasar y cuándo seguiste conduciendo? ¿Qué te lo indicó?', razon:'Identifica el criterio de decisión durante la conducción.'},
      {p:'¿Tu conducción creó el espacio para el otro interior o solo te moviste tú?', razon:'Conecta el movimiento individual con el beneficio colectivo.'}
    ],
    mics:['Conducciones horizontales para provocar dudas en saltos','Conducción para fijar línea defensiva','Desmarques a intervalos de la línea defensiva']
  },
  {
    id:'n_in3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'DE', color:'#3C3489', bg:'#EEEDFE',
    t:'Trayectoria de acoso cerrando medio',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El interior practica la trayectoria correcta de presión: no ir directo al poseedor sino en diagonal cerrando el centro.',
    des:'Espacio 25x20m. Interior sale a presionar al central rival que tiene el balón. Debe hacerlo en trayectoria diagonal que cierre el pase al pivote rival (el pase más peligroso). No presionar en línea recta.',
    var:'Central rival pasa al pivote si el interior va en línea recta (penalización). Dos interiores coordinando presiones. Central rival con más opciones de pase.',
    preg:[
      {p:'¿Tu trayectoria de presión cerró el pase al pivote o lo dejaste abierto?', razon:'Evalúa si la trayectoria fue la correcta.'},
      {p:'¿El central rival tuvo que cambiar su decisión de pase porque cerraste el centro?', razon:'Conecta la presión con el cambio de decisión del rival.'},
      {p:'¿Cuándo llegas al central rival por la trayectoria diagonal, llegas en posición de quitarle el balón o solo para presionar?', razon:'Diferencia entre presión y recuperación de balón.'}
    ],
    mics:['Trayectoria de acoso cerrando líneas de pase','Transición defensiva en diagonal cerrando medio','Vigilancias ofensivas']
  },
  {
    id:'n_in4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Interior', fase:'OF', color:'#3C3489', bg:'#EEEDFE',
    t:'Redondeo a descarga del delantero',
    j:'4-5', d:'12min', i:'Media',
    desc:'El interior practica llegar en redondeo al balón cuando el delantero descarga de espaldas, para rematar o dar continuidad.',
    des:'Espacio 25x20m. Delantero recibe de espaldas y descarga al interior que llega en redondeo. Interior decide: rematar, conducir o dar continuidad al pivote. Trabajar la trayectoria curva de llegada al balón.',
    var:'Central rival que cierra el redondeo. Interior debe llegar en redondeo por el lado izquierdo y derecho en series alternadas. Delantero descarga antes de que el central llegue.',
    preg:[
      {p:'¿Tu trayectoria de llegada fue en línea recta o en curva? ¿Por qué importa?', razon:'Introduce la ventaja de la trayectoria curva para llegar al balón con mejor posición.'},
      {p:'¿Cuando recibiste la descarga, ¿tenías el cuerpo orientado para rematar o hacia atrás?', razon:'Trabaja la orientación corporal en la llegada al balón.'},
      {p:'¿Cuándo llegaste tarde al redondeo, ¿qué cambiarías para llegar antes la próxima vez?', razon:'Metacognición del timing del movimiento.'}
    ],
    mics:['Redondeo a descarga de P9','Apoyos y desmarques contrarios a la basculación del rival','Atacar la segunda profundidad']
  },
  {
    id:'n_in5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'OF', color:'#3C3489', bg:'#EEEDFE',
    t:'Pase con mensaje para activar movimiento',
    j:'4-5', d:'10min', i:'Media',
    desc:'El interior practica el pase con orientación (no solo dar el balón) para indicar al receptor hacia dónde debe moverse.',
    des:'Espacio 25x20m. Interior pasa al extremo, delantero o pivote. El pase debe tener orientación (al pie cerca, al pie lejos, al espacio adelante) que indique al receptor qué acción hacer. El receptor ejecuta según la orientación del pase.',
    var:'El que recibe el pase verbaliza qué mensaje leyó antes de ejecutar. Interior solo puede dar 1 pase por turno. Añadir defensor que presiona según el mensaje del pase.',
    preg:[
      {p:'¿Tu pase al extremo iba al pie cercano o al pie lejano? ¿Qué quisiste decirle con eso?', razon:'Introduce la intencionalidad del mensaje en el pase.'},
      {p:'¿El receptor ejecutó lo que querías transmitirle con el pase?', razon:'Evalúa si el mensaje fue claro y bien interpretado.'},
      {p:'¿Hay situaciones donde es mejor no dar mensaje y dejar decidir al receptor?', razon:'Introduce el concepto de pase neutral vs pase con información.'}
    ],
    mics:['Pase con mensaje','Devolución y moverse para abrir línea de pase','Apoyo de fijación para abrir espacio']
  },

  // ══════════ EXTREMO (5) ══════════
  {
    id:'n_ex1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Desmarque fuera-dentro para liberar lateral',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El extremo practica el movimiento hacia dentro para liberar el espacio en banda y que el lateral pueda subir con ventaja.',
    des:'Espacio 30x25m. Extremo en banda. Lateral detrás quiere subir. Extremo se mueve hacia dentro llevando al defensor. Lateral sube al espacio liberado y recibe. 3v2 con extremo + lateral + pivote vs lateral rival + central rival.',
    var:'Defensor no puede seguir al extremo si entra al centro (zona prohibida). Añadir interior que ataca el espacio que deja el extremo. El extremo debe volver a banda si la combinación no sale.',
    preg:[
      {p:'¿Tu movimiento hacia dentro llevó realmente al defensor contigo o se quedó cubriendo la banda?', razon:'Lee si el movimiento creó el efecto deseado.'},
      {p:'¿Cuándo te moviste hacia dentro, el lateral ya estaba arrancando o tuvo que esperar?', razon:'Trabaja la sincronización del movimiento con el lateral.'},
      {p:'Si el defensor no te sigue cuando vas al centro, ¿qué decides hacer tú?', razon:'Introduce la adaptación cuando el movimiento señuelo no funciona.'}
    ],
    mics:['Desmarque fuera-dentro para liberar subida de lateral','Generar pasillos','Hundir a la defensa para liberar la frontal']
  },
  {
    id:'n_ex2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Control con alejada en banda para encarar',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El extremo practica el control orientado en banda para quedar en posición de encarar al defensor y atacar el 1v1.',
    des:'Espacio 25x15m (banda). Extremo recibe pase con defensor que llega desde detrás o de lado. El control debe orientarle hacia adelante, hacia la línea de fondo o hacia dentro según la posición del defensor. Trabaja 3 situaciones diferentes.',
    var:'Defensor llega desde diferentes ángulos en cada repetición. Control solo con pie exterior. Añadir segunda opción (pase) para cuando el control no crea la ventaja.',
    preg:[
      {p:'Antes de recibir, ¿miraste dónde estaba el defensor para saber hacia dónde orientar el control?', razon:'Introduce el escaneo previo específico del extremo en banda.'},
      {p:'¿Tu control te puso en posición de encarar o el defensor llegó antes?', razon:'Evalúa si la orientación del control fue la correcta.'},
      {p:'¿Cuándo el defensor venía de frente, hacia qué lado orientaste el control? ¿Por qué ese lado?', razon:'Identifica la preferencia y la lógica del control según la posición del defensor.'}
    ],
    mics:['Control con alejada en banda para encarar','Dejar correr para superar','Recorte hacia atrás para superar']
  },
  {
    id:'n_ex3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Recibir en amplitud y jugar dentro de primeras',
    j:'4-5', d:'12min', i:'Media',
    desc:'El extremo practica recibir en máxima amplitud para fijar al defensor y dar el balón hacia dentro de primeras para mantener la continuidad.',
    des:'Espacio 30x25m. Extremo recibe en la posición más abierta posible. Defensor que le cierra. Extremo da el balón de primeras al interior o pivote que llega desde dentro. El objetivo no es superar: es dar continuidad sin perder tiempo.',
    var:'Extremo con 1 toque máximo. Defensor que presiona antes de que llegue el pase. Añadir 2ª opción: si el interior no está disponible, el extremo conduce.',
    preg:[
      {p:'¿Tu posición de máxima amplitud obligó al defensor a alejarse de los compañeros interiores?', razon:'Conecta la amplitud individual con el beneficio espacial colectivo.'},
      {p:'¿Diste el balón hacia dentro de primeras o tuviste que controlar antes? ¿Por qué?', razon:'Diferencia entre recibir preparado para dar de primeras y necesitar controlar.'},
      {p:'¿El interior al que diste el balón llegó al espacio que se había creado?', razon:'Evalúa si la combinación fue efectiva.'}
    ],
    mics:['Arrancar en máxima amplitud para fijar y recibir dentro','Recibir en amplitud y jugar dentro de primeras para dar continuidad','Esperar en segunda altura']
  },
  {
    id:'n_ex4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Extremo', fase:'DE', color:'#993C1D', bg:'#FAECE7',
    t:'Repliegue inmediato tras pérdida en banda',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El extremo practica iniciar el repliegue en el instante exacto en que pierde el balón, sin esperar a verlo alejarse.',
    des:'Espacio 30x20m. Extremo en ataque con balón. Rival intercepta (señal del entrenador). Extremo tiene 2 segundos para iniciar el repliegue. Si no empieza en ese tiempo, el equipo rival puntúa. Trabajar la reacción inmediata como hábito.',
    var:'Sin señal: extremo debe leer la pérdida por sí mismo. Añadir central que espera en la línea defensiva y necesita que el extremo vuelva para equilibrar. Cronometrar el tiempo de repliegue en cada repetición.',
    preg:[
      {p:'¿Cuándo empezaste a replegarte — al perder el balón o cuando ya se habían alejado 5 metros?', razon:'Identifica el punto exacto de activación del repliegue.'},
      {p:'¿Tu repliegue fue corriendo o andando? ¿Hizo diferencia?', razon:'Introduce la intensidad del repliegue como factor determinante.'},
      {p:'¿Miraste hacia dónde iba el balón mientras regresabas o solo corriste de vuelta?', razon:'Trabaja la atención doble durante el repliegue.'}
    ],
    mics:['Iniciar persecución en forma de repliegue tras ser superado','Fusiones en línea anterior (usualmente línea defensiva)','Cerrar líneas de pase']
  },
  {
    id:'n_ex5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Remolque fuera-dentro para entrar al área',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El extremo practica el remolque fuera-dentro: ir por fuera del defensor y entrar al área por dentro cuando recibe en profundidad.',
    des:'Espacio 30x25m. Extremo recibe pase en profundidad con defensor a su lado. Debe hacer el remolque: fintar ir por fuera y entrar por dentro (o al revés). Defensor que intenta cortarle. Finalización con portero.',
    var:'Defensor que anticipa el remolque habitual: extremo debe cambiar de lado. Solo remolque con pierna no dominante. Añadir lateral que apoya si el remolque no sale.',
    preg:[
      {p:'¿El defensor mordió el señuelo del remolque o ya sabía por dónde ibas?', razon:'Evalúa si el remolque fue efectivo para engañar al defensor.'},
      {p:'¿Usaste el cuerpo para proteger el balón mientras hacías el remolque?', razon:'Introduce la protección del balón durante la acción técnica.'},
      {p:'¿Cuándo el defensor ya sabía tu remolque habitual, ¿cambiaste de lado? ¿Funcionó?', razon:'Trabaja la adaptación del recurso técnico cuando el rival lo anticipa.'}
    ],
    mics:['Remolque fuera-dentro','Si vengo es porque voy','Si voy es porque vengo']
  },

  // ══════════ DELANTERO (5) ══════════
  {
    id:'n_de1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'OF', color:'#A32D2D', bg:'#FCEBEB',
    t:'Cruzarse por delante del central para ganar posición',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El delantero practica el movimiento de cruzarse por delante del central en el momento exacto para ganar la posición antes del centro lateral.',
    des:'Espacio: área + banda. Centro lateral desde banda. Delantero debe cruzarse por delante del central rival en el momento exacto para ganar la posición antes del balón. Trabajar timing del cruce y uso del cuerpo.',
    var:'Central que físicamente le impide el cruce. Delantero debe hacer señuelo antes del cruce real. 2v2 con dos delanteros vs dos centrales.',
    preg:[
      {p:'¿En qué momento del centro te cruzaste por delante del central? ¿Fue pronto, en el momento exacto o tarde?', razon:'El timing del cruce es determinante para ganar la posición.'},
      {p:'¿Usaste el cuerpo para protegerte del central o solo correr?', razon:'Introduce el uso físico para ganar la posición en el duelo.'},
      {p:'¿Cuándo el central se anticipaba a tu cruce, ¿tenías un movimiento alternativo?', razon:'Trabaja la adaptación cuando el movimiento planificado no funciona.'}
    ],
    mics:['Cruzarse por delante de par para ganar posición','Atacar espalda de centrales en centro lateral','Desmarque de atrás hacia delante en centro lateral']
  },
  {
    id:'n_de2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'OF', color:'#A32D2D', bg:'#FCEBEB',
    t:'Juego de espaldas y protección del balón',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El delantero practica recibir de espaldas, proteger el balón con el cuerpo y decidir: girar, descargar o esperar apoyos.',
    des:'Espacio 20x15m. Delantero recibe de espaldas al central. Dos opciones de descarga (interior izquierdo y derecho). El delantero debe mantener el balón bajo presión hasta que un compañero esté disponible. Central puede presionar físicamente.',
    var:'Central muy agresivo: solo 2 segundos máximo antes de descargar. Delantero debe girar al menos una vez antes de descargar. 2v1: dos centrales que presionan.',
    preg:[
      {p:'¿Usaste el cuerpo para proteger el balón o lo alejaste con el pie? ¿Cuándo cada opción?', razon:'Diferencia entre protección con el cuerpo y control con alejada.'},
      {p:'¿Cuándo decidiste descargar y cuándo intentaste girarte? ¿Qué te condicionó?', razon:'Identifica el criterio de decisión bajo presión física.'},
      {p:'¿El compañero al que descargaste estaba en buena posición para continuar?', razon:'Conecta la descarga del delantero con la disponibilidad del apoyo.'}
    ],
    mics:['Juego de espaldas','Utilizar el cuerpo para generar espacio','Descolgarse para rematar en segunda altura']
  },
  {
    id:'n_de3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'OF', color:'#A32D2D', bg:'#FCEBEB',
    t:'Esperar en fuera de juego para activarse',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El delantero practica mantenerse en posición adelantada (controlando el fuera de juego) y activarse en el momento exacto en que el balón va a banda.',
    des:'Espacio: mitad campo ofensivo. Delantero se mantiene en línea de fuera de juego mientras el balón está en zona central. Cuando el balón va a banda, arranca para recibir en profundidad. Central que administra el fuera de juego.',
    var:'Sin señal verbal del entrenador: el delantero lee el momento por sí mismo. Añadir segundo delantero que coordina los desmarques. Tempo diferente: a veces el balón va a banda rápido, otras lento.',
    preg:[
      {p:'¿Cuándo arrancaste: cuando el balón iba a banda o cuando ya llegó a banda?', razon:'El timing del arranque determina si se llega con ventaja o en fuera de juego.'},
      {p:'¿Miraste la posición del último defensor antes de arrancar?', razon:'Introduce la lectura de la línea defensiva para controlar el fuera de juego.'},
      {p:'¿Hubo momentos en que arrancaste demasiado pronto y quedaste en fuera de juego?', razon:'Analiza el error más común del delantero en esta situación.'}
    ],
    mics:['Esperar en fuera de juego para activarse cuando el balón va a banda','Generar pasillos: separarse del último o alejarse del intervalo','Desmarque desde segunda altura']
  },
  {
    id:'n_de4', _src:'nuevas', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Delantero', fase:'OF', color:'#A32D2D', bg:'#FCEBEB',
    t:'Pie de apoyo enfocado a portería para rematar',
    j:'4-5', d:'10min', i:'Media',
    desc:'El delantero practica la técnica del pie de apoyo orientado a portería antes del remate, para mejorar la precisión y potencia.',
    des:'Espacio: área de penalti. Distintos tipos de pase al delantero: al pie, en profundidad, en altura. En cada recepción, el delantero debe colocar el pie de apoyo orientado a portería antes de rematar. Trabajar la automatización del gesto técnico.',
    var:'Pases desde distintos ángulos: obliga a reorientar el pie de apoyo cada vez. Añadir portero. Rematar con pierna no dominante también.',
    preg:[
      {p:'¿Tu pie de apoyo apuntaba hacia la portería cuando remataste o lo tenías de lado?', razon:'Toma de conciencia del gesto técnico del pie de apoyo.'},
      {p:'¿Cuándo el pase llegaba desde un ángulo raro, conseguiste orientar bien el pie de apoyo?', razon:'Trabaja la adaptación del gesto técnico a situaciones variadas.'},
      {p:'¿Notas diferencia en la precisión del remate cuando el pie de apoyo está bien o mal colocado?', razon:'Conecta el gesto técnico con el resultado del remate.'}
    ],
    mics:['Pie de apoyo enfocado a portería para finalizar','Descolgarse para rematar en segunda altura','Atacar espalda de centrales con desmarque']
  },
  {
    id:'n_de5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'DE', color:'#D85A30', bg:'#FAECE7',
    t:'Cerrar líneas de pase entre centrales',
    j:'4-5', d:'10min', i:'Media-Alta',
    desc:'El delantero practica la presión táctica: no ir al central con balón sino cerrar la línea de pase al otro central para forzar el pase largo.',
    des:'Espacio 30x20m. Dos centrales construyen. Delantero presiona: debe cerrar la línea de pase entre ellos sin ir directamente al poseedor. Si el central consigue dar un pase cómodo al otro, punto rival. Si da pase largo o pierde, punto al equipo del delantero.',
    var:'Añadir pivote como opción de pase corto. Dos delanteros coordinando la presión. Central con límite de 5 segundos antes de pasar.',
    preg:[
      {p:'¿Tu posición cerraba la línea de pase al otro central o solo te acercabas al poseedor?', razon:'Diferencia entre presionar al poseedor y cerrar la línea.'},
      {p:'¿El central tuvo que dar un pase largo o peor porque cerraste el pase corto?', razon:'Evalúa si la presión táctica fue efectiva.'},
      {p:'¿Cuándo el central te esperaba parado, qué hacías para no dejar que esperara cómodo?', razon:'Introduce el movimiento de la presión para no dejar al central estático.'}
    ],
    mics:['Cerrar líneas de pase entre jugadores de la línea defensiva rival','Iniciador de presiones','Como jugador superado: acoso a espaldas']
  },

  // ══════════ 5 EXTRA (mixtas posición/transiciones) ══════════
  {
    id:'n_mix1', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'TO', color:'#D85A30', bg:'#FAECE7',
    t:'Ruptura a la espalda en transición ofensiva',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El lateral practica arrancar a la espalda de la defensa rival en el momento exacto de la recuperación del balón.',
    des:'Espacio 35x25m. Equipo defiende. Al recuperar el balón (señal), el lateral tiene 3 segundos para arrancar a la espalda del rival. El pivote busca el pase largo. Lateral debe llegar antes que el defensor rival.',
    var:'Defensor rival que marca al lateral y sale con él. Lateral solo tiene 1 toque si recibe. Pivote con tiempo limitado: 2 segundos para encontrar al lateral.',
    preg:[
      {p:'¿Arrancaste en el momento exacto de la recuperación o esperaste a ver el pase?', razon:'El timing del arranque es determinante en la transición.'},
      {p:'¿Leíste que el defensor estaba descolocado antes de arrancar?', razon:'Introduce la lectura de la desorganización defensiva rival.'},
      {p:'¿Cuándo el pase largo no llegó, ¿cómo te recolocaste para seguir siendo opción?', razon:'Trabaja la gestión de la acción cuando la primera opción no se ejecuta.'}
    ],
    mics:['Rupturas a la espalda de la línea defensiva','Control abierto con pase dentro','Superar líneas rivales con conducción y pase']
  },
  {
    id:'n_mix2', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'TO', color:'#E07B00', bg:'#FAEEDA',
    t:'Ofrecer apoyo inmediato tras recuperación',
    j:'4-5', d:'10min', i:'Media-Alta',
    desc:'El pivote practica ser el primero en ofrecer el pase de seguridad en el momento de la recuperación del balón.',
    des:'Espacio 25x20m. 4v4. Cuando el equipo del pivote recupera el balón, el pivote tiene 2 segundos para estar disponible como primera opción de pase. El poseedor debe poder darle el balón siempre que quiera en esos 2 segundos.',
    var:'El pivote solo tiene 1 toque al recibir. Añadir presionador que va específicamente al pivote. Pivote empieza siempre alejado del balón y debe acercarse en 2 segundos.',
    preg:[
      {p:'¿Estabas disponible en los 2 primeros segundos tras la recuperación?', razon:'Evalúa si el movimiento de disponibilidad fue lo suficientemente rápido.'},
      {p:'¿Cuándo ofreciste el apoyo, tu posición era útil o estabas en zona de presión?', razon:'Introduce la calidad de la posición del apoyo, no solo la disponibilidad.'},
      {p:'¿En qué momentos del partido el apoyo inmediato del pivote es más importante?', razon:'Conecta el ejercicio con situaciones reales del partido.'}
    ],
    mics:['Ofrecer pases de seguridad','Reconocerse como 3er hombre','Recibir bajo presión']
  },
  {
    id:'n_mix3', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'TO', color:'#3C3489', bg:'#EEEDFE',
    t:'Atacar la segunda profundidad en transición',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El interior practica atacar el espacio que queda detrás del bloque rival cuando el equipo recupera y el rival aún no está organizado.',
    des:'Espacio 35x25m. Equipo defiende en bloque bajo. Al recuperar, el interior tiene 4 segundos para atacar el espacio entre líneas rivales antes de que se reorganicen. El pivote busca el pase.',
    var:'Defensor que bloquea la llegada del interior. Interior con límite de 2 toques al recibir. Añadir extremo que ataca simultáneamente por banda.',
    preg:[
      {p:'¿Miraste el espacio disponible mientras tu equipo aún defendía (antes de recuperar)?', razon:'Introduce la anticipación del movimiento ofensivo durante la fase defensiva.'},
      {p:'¿Atacaste el espacio entre el mediocentro y el central rival, o corriste sin dirección clara?', razon:'Diferencia entre atacar un espacio específico y correr de forma instintiva.'},
      {p:'¿Llegaste al espacio con tiempo suficiente para recibir cómodo o ya llegaba el defensor?', razon:'Evalúa si el timing del movimiento fue el correcto.'}
    ],
    mics:['Atacar la segunda profundidad','Apoyos y desmarques contrarios a la basculación del rival','Recibir en cuadrados para superar línea de medios con el pase']
  },
  {
    id:'n_mix4', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'TD', color:'#A32D2D', bg:'#FCEBEB',
    t:'Presión inmediata como iniciador',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El delantero practica iniciar la presión en el momento de la pérdida para ser el primer filtro defensivo.',
    des:'Espacio 30x20m. 4v4. Cuando el delantero pierde el balón o su equipo lo pierde, el delantero tiene 2 segundos para presionar al poseedor rival. El resto del equipo ajusta según la presión del delantero.',
    var:'El delantero pierde intencionalmente para practicar la reacción. El defensor espera al delantero: practica anticipación del pase de seguridad. Añadir condición: si el delantero no presiona en 2 segundos, el rival puntúa.',
    preg:[
      {p:'¿Cuándo iniciaste la presión, lo hiciste cerrando alguna línea de pase o solo yendo al poseedor?', razon:'Diferencia entre presión inteligente y presión instintiva.'},
      {p:'¿El rival pudo circular el balón con comodidad porque no presionaste a tiempo?', razon:'Conecta la presión del delantero con la capacidad de circulación rival.'},
      {p:'¿Cuándo el rival anticipaba tu presión y la jugaba de primeras, ¿cómo reaccionabas?', razon:'Trabaja la adaptación cuando el rival no cae en la trampa de la presión.'}
    ],
    mics:['Iniciador de presiones','Cerrar líneas de pase entre jugadores de la línea defensiva rival','Como jugador superado: evitar relaciones hacia atrás que cambien el sentido']
  },
  {
    id:'n_mix5', _src:'nuevas', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'TD', color:'#993C1D', bg:'#FAECE7',
    t:'Basculación defensiva desde lado débil',
    j:'4-5', d:'10min', i:'Alta',
    desc:'El extremo del lado contrario practica la basculación defensiva para cerrar al pivote rival cuando el balón está en la banda opuesta.',
    des:'Espacio 30x20m. Balón en banda derecha. Extremo izquierdo debe bascular hacia el pivote rival para cerrar el pase interior. Si el pivote recibe con comodidad, punto rival. Trabajar posición de intercepción sin ir a por el balón.',
    var:'Pivote rival que se mueve para evitar la cobertura. Extremo con límite: no puede cruzar la línea central. Dos extremos coordinando la basculación de ambos lados.',
    preg:[
      {p:'¿Tu basculación cerró realmente la línea de pase al pivote o solo te acercaste?', razon:'Evalúa la eficacia de la posición de basculación.'},
      {p:'¿Cuánto tiempo tardaste en bascular desde tu posición de amplitud hasta la cobertura del pivote?', razon:'Introduce la velocidad de la basculación como factor clave.'},
      {p:'¿Cuándo el pivote rival se movió para desmarcar, ¿seguiste cubriéndole o mantuviste posición?', razon:'Diferencia entre marcaje individual y cobertura de zona en la basculación.'}
    ],
    mics:['Basculación cerrando a pivote rival siendo extremo de lado débil','Defensa de centro desde lado opuesto','Cerrar líneas de pase']
  },
];

// ─── INTEGRAR TAREAS NUEVAS EN getAllTareas ───
(function() {
  function patchGetAllTareas() {
    var _orig = window.getAllTareas;
    if(!_orig) return setTimeout(patchGetAllTareas, 200);
    window.getAllTareas = function() {
      var base = _orig();
      var nuevas = TAREAS_NUEVAS.map(function(t) { return Object.assign({}, t); });
      return base.concat(nuevas);
    };
  }
  setTimeout(patchGetAllTareas, 300);
})();

// ─── FIX IMPORTAR TAREA ───
// El bug: confirmarImportTarea añade a TAREAS[] pero renderTareas usa getAllTareas()
// que incluye _src. La tarea importada necesita _src:'custom'
window.confirmarImportTarea = function() {
  const p = window._parsedImportTarea;
  if(!p) return;

  const existing = loadTareasCustomArr();
  const maxId = Math.max(0, ...existing.map(t => typeof t.id === 'number' ? t.id : 0));
  const newId = 'imp_' + Date.now();

  const newTarea = {
    id: newId,
    _src: 'custom',
    pos: p.pos,
    fase: p.fase,
    t: p.titulo || 'Tarea importada',
    j: '4-6',
    d: '15min',
    i: 'Media',
    desc: p.desc,
    des: p.des,
    var: p.var,
    preg: p.preg.map(texto => ({p: texto, razon: ''})),
    mics: p.mics,
  };

  // Guardar en localStorage
  try {
    existing.push(newTarea);
    localStorage.setItem('tareas_custom', JSON.stringify(existing));
  } catch(e) { showToast('Error al guardar'); return; }

  if(typeof closeModal === 'function') closeModal('modal-import-tarea');
  if(typeof renderTareas === 'function') renderTareas();
  showToast('✓ Tarea "' + newTarea.t + '" importada correctamente');

  const mdEl = document.getElementById('import-md');
  const prevEl = document.getElementById('import-preview');
  if(mdEl) mdEl.value = '';
  if(prevEl) prevEl.innerHTML = '';
  window._parsedImportTarea = null;
};

// ─── CREAR TAREA DESDE CERO ───
window.abrirCrearTarea = function() {
  // Crear modal si no existe
  if(!document.getElementById('modal-crear-tarea')) {
    const m = document.createElement('div');
    m.id = 'modal-crear-tarea';
    m.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:1000;align-items:center;justify-content:center;padding:1rem;';
    const SI = 'width:100%;height:36px;border:0.5px solid var(--border2);border-radius:var(--radius-sm,8px);padding:0 10px;font-size:12px;background:var(--bg,#0d1117);color:var(--text,#e6edf3);outline:none;margin-bottom:8px;box-sizing:border-box;';
    const TA = 'width:100%;border:0.5px solid var(--border2);border-radius:var(--radius-sm,8px);padding:8px;font-size:12px;background:var(--bg,#0d1117);color:var(--text,#e6edf3);resize:vertical;font-family:inherit;outline:none;margin-bottom:8px;box-sizing:border-box;';
    m.innerHTML = `<div style="background:var(--bg2,#161b22);border:0.5px solid var(--border,#30363d);border-radius:var(--radius,12px);width:100%;max-width:540px;max-height:90vh;overflow-y:auto;padding:1.5rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
        <div style="font-size:15px;font-weight:700;">Nueva tarea</div>
        <button onclick="closeModal('modal-crear-tarea')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:20px;">×</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <div>
          <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Posición</label>
          <select id="ct-pos" style="${SI}"><option>Central</option><option>Lateral</option><option>Pivote</option><option>Interior</option><option>Extremo</option><option>Delantero</option></select>
        </div>
        <div>
          <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Fase</label>
          <select id="ct-fase" style="${SI}"><option value="OF">Fase ofensiva</option><option value="DE">Fase defensiva</option><option value="TO">T. ofensiva</option><option value="TD">T. defensiva</option></select>
        </div>
      </div>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Título *</label>
      <input id="ct-titulo" placeholder="Nombre de la tarea" style="${SI}">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px;">
        <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Jugadores</label><input id="ct-j" placeholder="4-6" style="${SI}margin-bottom:0;"></div>
        <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Duración</label><input id="ct-d" placeholder="15min" style="${SI}margin-bottom:0;"></div>
        <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Intensidad</label><input id="ct-i" placeholder="Media" style="${SI}margin-bottom:0;"></div>
      </div>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;margin-top:8px;">Descripción breve *</label>
      <textarea id="ct-desc" rows="2" placeholder="Qué entrena esta tarea..." style="${TA}"></textarea>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Desarrollo (espacio, normas, estructura)</label>
      <textarea id="ct-des" rows="3" placeholder="Espacio: 20x15m. Número de jugadores y rol de cada uno..." style="${TA}"></textarea>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Variantes</label>
      <textarea id="ct-var" rows="2" placeholder="Limitar toques, añadir presionador..." style="${TA}"></textarea>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Preguntas para el jugador (una por línea)</label>
      <textarea id="ct-pregs" rows="3" placeholder="¿Cuándo decidiste...?\n¿Qué viste antes de...?" style="${TA}"></textarea>
      <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Microconceptos trabajados (uno por línea)</label>
      <textarea id="ct-mics" rows="2" placeholder="Escaneos\nPerfil recibiendo de espaldas" style="${TA}"></textarea>
      <div style="display:flex;gap:8px;margin-top:.5rem;">
        <button onclick="closeModal('modal-crear-tarea')" style="flex:1;height:40px;background:none;border:0.5px solid var(--border2);border-radius:var(--radius-sm,8px);color:var(--text2);cursor:pointer;font-family:inherit;">Cancelar</button>
        <button onclick="guardarNuevaTarea()" style="flex:2;height:40px;background:linear-gradient(135deg,#1D9E75,#0f6e56);border:none;border-radius:var(--radius-sm,8px);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;">Crear tarea</button>
      </div>
    </div>`;
    document.body.appendChild(m);
  }
  document.getElementById('modal-crear-tarea').style.display = 'flex';
};

window.guardarNuevaTarea = function() {
  const titulo = document.getElementById('ct-titulo')?.value.trim();
  const desc   = document.getElementById('ct-desc')?.value.trim();
  if(!titulo || !desc) { showToast('El título y la descripción son obligatorios'); return; }

  const newTarea = {
    id: 'custom_' + Date.now(),
    _src: 'custom',
    pos:  document.getElementById('ct-pos')?.value || 'Central',
    fase: document.getElementById('ct-fase')?.value || 'OF',
    t:    titulo,
    j:    document.getElementById('ct-j')?.value.trim() || '4-6',
    d:    document.getElementById('ct-d')?.value.trim() || '15min',
    i:    document.getElementById('ct-i')?.value.trim() || 'Media',
    desc,
    des:  document.getElementById('ct-des')?.value.trim() || '',
    var:  document.getElementById('ct-var')?.value.trim() || '',
    preg: (document.getElementById('ct-pregs')?.value || '').split('\n').filter(Boolean).map(p => ({p, razon:''})),
    mics: (document.getElementById('ct-mics')?.value || '').split('\n').filter(Boolean),
  };

  try {
    const stored = loadTareasCustomArr();
    stored.push(newTarea);
    localStorage.setItem('tareas_custom', JSON.stringify(stored));
  } catch(e) { showToast('Error al guardar'); return; }

  closeModal('modal-crear-tarea');
  if(typeof renderTareas === 'function') renderTareas();
  showToast('✓ Tarea "' + newTarea.t + '" creada');

  // Limpiar formulario
  ['ct-titulo','ct-desc','ct-des','ct-var','ct-pregs','ct-mics'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
};

// ─── BOTÓN "ASIGNAR A JUGADOR" en el modal de tarea ───
// Sobreescribir openTareaUnificada para añadir botón de asignar
const _origOpenTareaUnificada = window.openTareaUnificada;
window.openTareaUnificada = function(id, src) {
  if(_origOpenTareaUnificada) _origOpenTareaUnificada(id, src);
  // Añadir botón de asignar si no existe ya
  setTimeout(function() {
    const modal = document.getElementById('mdt');
    if(!modal) return;
    if(modal.querySelector('#btn-asignar-jugador')) return;
    const btn = document.createElement('button');
    btn.id = 'btn-asignar-jugador';
    btn.onclick = function() { abrirAddTareaJugador(id, src || 'nuevas'); };
    btn.style.cssText = 'width:100%;height:40px;margin-top:8px;background:linear-gradient(135deg,rgba(29,158,117,0.15),rgba(55,138,221,0.1));border:0.5px solid rgba(29,158,117,0.4);border-radius:var(--radius-sm,8px);color:#1D9E75;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;';
    btn.textContent = '📤 Asignar a jugador';
    const body = modal.querySelector('.modal-body') || modal.querySelector('[style*="overflow-y"]');
    if(body) body.appendChild(btn);
    else modal.appendChild(btn);
  }, 100);
};

// ─── MOSTRAR BOTÓN CREAR TAREA en la página de tareas ───
(function() {
  function addCrearBtn() {
    const tcb = document.getElementById('tcb');
    if(!tcb || document.getElementById('btn-crear-tarea')) return;
    const btn = document.createElement('button');
    btn.id = 'btn-crear-tarea';
    btn.onclick = window.abrirCrearTarea;
    btn.style.cssText = 'height:32px;padding:0 14px;background:rgba(29,158,117,0.12);border:0.5px solid rgba(29,158,117,0.35);border-radius:var(--radius-sm,8px);color:#1D9E75;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;margin-left:8px;';
    btn.textContent = '+ Crear tarea';
    tcb.parentNode.insertBefore(btn, tcb.nextSibling);
  }

  // Aplicar cuando se carga la página de tareas
  setTimeout(function() {
    var _origRenderTareas = window.renderTareas;
    window.renderTareas = function() {
      if(_origRenderTareas) _origRenderTareas();
      setTimeout(addCrearBtn, 100);
    };
    addCrearBtn();
  }, 500);
})();

console.log('✅ Patch tareas Omar cargado: 40 tareas nuevas, crear tarea, fix importar, asignar a jugador');

// ─── MEJORAR TAB TAREAS DEL MODAL DEL JUGADOR ───
(function() {
  function patchRenderDT() {
    var _origRenderDT = window.renderDT;
    if(!_origRenderDT) return setTimeout(patchRenderDT, 300);

    window.renderDT = function(tab) {
      if(tab !== 'tareas') { _origRenderDT(tab); return; }

      var id = state.currentJugador;
      var j = state.jugadores.find(function(x){ return x.id === id; });
      var body = document.getElementById('djbody');
      if(!j || !body) return;

      var objs = getObjJugador(id);
      var allT = getAllTareas();

      // Tareas relacionadas por microconceptos
      var microsObjetivo = objs.map(function(o){ return o.texto; });
      var tareasRel = allT.filter(function(t) {
        var mics = (t.mics||[]).map(function(m){ return m.toLowerCase(); });
        return microsObjetivo.some(function(obj) {
          return mics.some(function(m) {
            return m.includes(obj.toLowerCase().slice(0,12)) || obj.toLowerCase().slice(0,12).includes(m.slice(0,12));
          });
        });
      });

      // Tareas ya asignadas (notas_video con prefijo TAREA ASIGNADA)
      var tareasAsignadas = (state.notasVideo||[]).filter(function(n){
        return n.jugador_id === id && n.texto && n.texto.indexOf('TAREA ASIGNADA:') === 0;
      });

      var CARD = 'background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:.75rem;';

      var html = '';

      // ── HEADER con info ──
      html += '<div style="background:linear-gradient(135deg,rgba(29,158,117,.08),rgba(55,138,221,.05));border:0.5px solid rgba(29,158,117,.2);border-radius:var(--radius);padding:.875rem;margin-bottom:1rem;">';
      html += '<div style="font-size:13px;font-weight:600;margin-bottom:2px;">Tareas de ' + j.nombre + '</div>';
      html += '<div style="font-size:11px;color:var(--text2);">' + j.posicion + ' · ' + objs.length + ' objetivo' + (objs.length!==1?'s':'') + ' activos</div>';
      html += '</div>';

      // ── TABS INTERNOS ──
      html += '<div style="display:flex;gap:6px;margin-bottom:1rem;" id="tareas-subtabs">';
      html += '<button onclick="switchTareasTab(\'relacionadas\')" id="stab-rel" style="flex:1;height:32px;border-radius:var(--radius-sm);font-size:11px;font-weight:700;background:rgba(29,158,117,0.15);color:#1D9E75;border:0.5px solid rgba(29,158,117,0.3);cursor:pointer;font-family:inherit;">🎯 Relacionadas</button>';
      html += '<button onclick="switchTareasTab(\'buscar\')" id="stab-bus" style="flex:1;height:32px;border-radius:var(--radius-sm);font-size:11px;font-weight:700;background:none;color:var(--text3);border:0.5px solid var(--border2);cursor:pointer;font-family:inherit;">📚 Biblioteca</button>';
      html += '<button onclick="switchTareasTab(\'asignadas\')" id="stab-asi" style="flex:1;height:32px;border-radius:var(--radius-sm);font-size:11px;font-weight:700;background:none;color:var(--text3);border:0.5px solid var(--border2);cursor:pointer;font-family:inherit;">✓ Asignadas</button>';
      html += '</div>';

      // ── PANEL RELACIONADAS ──
      html += '<div id="panel-relacionadas">';
      if(!tareasRel.length) {
        html += '<div style="text-align:center;padding:2rem;color:var(--text3);"><div style="font-size:24px;margin-bottom:8px;">📋</div><div style="font-size:13px;margin-bottom:5px;">Sin tareas relacionadas</div><div style="font-size:11px;">Añade objetivos basados en microconceptos para ver sugerencias</div></div>';
      } else {
        html += '<div style="font-size:10px;color:var(--text3);margin-bottom:.75rem;">' + tareasRel.length + ' tarea' + (tareasRel.length!==1?'s':'') + ' sugeridas por los objetivos activos</div>';
        tareasRel.forEach(function(t) {
          var catColor = t.color||'#888'; var catBg = t.bg||'var(--bg2)';
          var fase = FASES.find(function(f){ return f.id===t.fase; });
          html += '<div style="' + CARD + 'border-left:3px solid ' + catColor + ';">';
          html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px;">';
          html += '<div style="font-size:13px;font-weight:600;flex:1;line-height:1.4;">' + (t.t||t.titulo||'') + '</div>';
          if(t.catLabel) html += '<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:' + catBg + ';color:' + catColor + ';white-space:nowrap;flex-shrink:0;">' + t.catLabel + '</span>';
          html += '</div>';
          html += '<div style="font-size:11px;color:var(--text2);line-height:1.5;margin-bottom:8px;">' + (t.desc||'') + '</div>';
          html += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">';
          if(t.pos) html += '<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:var(--bg2);color:var(--text2);">' + t.pos + '</span>';
          if(fase) html += '<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:' + (catBg||'var(--bg2)') + ';color:' + catColor + ';">' + fase.label + '</span>';
          html += '<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:var(--bg2);color:var(--text3);">' + (t.j||'') + ' jug · ' + (t.d||'') + '</span>';
          html += '</div>';
          // Microconceptos
          if((t.mics||[]).length) {
            html += '<div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:8px;">';
            t.mics.forEach(function(m) { html += '<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:#EEEDFE;color:#3C3489;">' + m + '</span>'; });
            html += '</div>';
          }
          html += '<div style="display:flex;gap:6px;">';
          html += '<button onclick="verTareaJugador(\'' + t.id + '\',\'' + (t._src||'base') + '\')" style="flex:1;height:30px;background:none;border:0.5px solid var(--border2);border-radius:var(--radius-sm);color:var(--text2);font-size:11px;cursor:pointer;font-family:inherit;">Ver tarea</button>';
          html += '<button onclick="asignarTareaJugador(\'' + t.id + '\',\'' + (t._src||'base') + '\',\'' + id + '\')" style="flex:2;height:30px;background:rgba(29,158,117,0.12);border:0.5px solid rgba(29,158,117,0.35);border-radius:var(--radius-sm);color:#1D9E75;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;">📤 Asignar a ' + j.nombre.split(' ')[0] + '</button>';
          html += '</div>';
          html += '</div>';
        });
      }
      html += '</div>';

      // ── PANEL BIBLIOTECA (buscar) ──
      html += '<div id="panel-buscar" style="display:none;">';
      html += '<div style="margin-bottom:.875rem;">';
      html += '<input id="tarea-buscar-q" oninput="filtrarTareasJugador(\'' + id + '\')" placeholder="Buscar tarea por nombre..." style="width:100%;height:36px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 12px;font-size:12px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box;margin-bottom:6px;">';
      html += '<div style="display:flex;gap:6px;">';
      ['Central','Lateral','Pivote','Interior','Extremo','Delantero'].forEach(function(pos) {
        var active = pos === j.posicion;
        html += '<button onclick="filtrarTareasJugadorPos(\'' + pos + '\',\'' + id + '\',this)" style="padding:3px 8px;border-radius:99px;font-size:10px;font-weight:700;background:' + (active?'rgba(124,111,240,.15)':'none') + ';color:' + (active?'#7C6FF0':'var(--text3)') + ';border:0.5px solid ' + (active?'rgba(124,111,240,.4)':'var(--border2)') + ';cursor:pointer;font-family:inherit;">' + pos + '</button>';
      });
      html += '</div></div>';
      html += '<div id="biblioteca-lista"></div>';
      html += '</div>';

      // ── PANEL ASIGNADAS ──
      html += '<div id="panel-asignadas" style="display:none;">';
      if(!tareasAsignadas.length) {
        html += '<div style="text-align:center;padding:2rem;color:var(--text3);"><div style="font-size:24px;margin-bottom:8px;">📋</div><div style="font-size:13px;">Sin tareas asignadas todavía</div><div style="font-size:11px;margin-top:4px;">Usa la pestaña Relacionadas o Biblioteca para asignar</div></div>';
      } else {
        html += '<div style="font-size:10px;color:var(--text3);margin-bottom:.75rem;">' + tareasAsignadas.length + ' tarea' + (tareasAsignadas.length!==1?'s':'') + ' asignadas</div>';
        tareasAsignadas.forEach(function(n) {
          var lines = n.texto.split('\n').filter(Boolean);
          var titulo = (lines[0]||'').replace('TAREA ASIGNADA: ','');
          var meta = lines[1]||'';
          var fecha = new Date(n.fecha+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short'});
          html += '<div style="' + CARD + 'border-left:3px solid #7C6FF0;">';
          html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px;">';
          html += '<div style="font-size:13px;font-weight:600;flex:1;">' + titulo + '</div>';
          html += '<button onclick="eliminarTareaAsignada(\'' + n.id + '\',\'' + id + '\')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;padding:0;flex-shrink:0;">×</button>';
          html += '</div>';
          if(meta) html += '<div style="font-size:10px;color:var(--text3);margin-bottom:4px;">' + meta + '</div>';
          html += '<div style="font-size:10px;color:var(--text3);">Asignada el ' + fecha + '</div>';
          html += '</div>';
        });
      }
      // Botón crear tarea personalizada para este jugador
      html += '<div style="' + CARD + 'border:0.5px dashed var(--border2);">';
      html += '<div style="font-size:12px;font-weight:600;margin-bottom:6px;">✏️ Crear tarea personalizada</div>';
      html += '<div style="font-size:11px;color:var(--text2);margin-bottom:8px;">Escribe una tarea a medida para ' + j.nombre.split(' ')[0] + ' esta semana</div>';
      html += '<textarea id="tarea-custom-texto" rows="3" placeholder="Ej: Trabajar la anticipación en los pases interiores. Ejercicio de 4v2 focalizando en leer el pase antes de que salga..." style="width:100%;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:8px;font-size:12px;background:var(--bg);color:var(--text);resize:none;font-family:inherit;outline:none;margin-bottom:8px;box-sizing:border-box;"></textarea>';
      html += '<button onclick="asignarTareaPersonalizada(\'' + id + '\')" style="width:100%;height:36px;background:rgba(124,111,240,0.12);border:0.5px solid rgba(124,111,240,0.35);border-radius:var(--radius-sm);color:#7C6FF0;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;">Asignar tarea personalizada</button>';
      html += '</div>';
      html += '</div>';

      body.innerHTML = html;

      // Cargar biblioteca con posición del jugador por defecto
      window._tareasJugadorPos = j.posicion;
      window._tareasJugadorId  = id;
      renderBibliotecaTareas(id, j.posicion, '');
    };
  }
  setTimeout(patchRenderDT, 400);
})();

// ── Cambiar subtab ──
window.switchTareasTab = function(tab) {
  ['relacionadas','buscar','asignadas'].forEach(function(t) {
    var panel = document.getElementById('panel-' + t);
    var btn   = document.getElementById('stab-' + t.slice(0,3));
    if(!panel || !btn) return;
    var active = t === tab;
    panel.style.display = active ? 'block' : 'none';
    btn.style.background   = active ? 'rgba(29,158,117,0.15)' : 'none';
    btn.style.color        = active ? '#1D9E75' : 'var(--text3)';
    btn.style.borderColor  = active ? 'rgba(29,158,117,0.3)' : 'var(--border2)';
  });
  if(tab === 'buscar') renderBibliotecaTareas(window._tareasJugadorId, window._tareasJugadorPos, '');
};

// ── Renderizar biblioteca ──
window.renderBibliotecaTareas = function(jugId, posFilter, q) {
  var cont = document.getElementById('biblioteca-lista');
  if(!cont) return;
  var allT = getAllTareas();
  var lista = allT.filter(function(t) {
    var matchPos = !posFilter || t.pos === posFilter;
    var matchQ   = !q || (t.t||'').toLowerCase().includes(q.toLowerCase()) || (t.desc||'').toLowerCase().includes(q.toLowerCase());
    return matchPos && matchQ && t.t;
  });

  if(!lista.length) { cont.innerHTML = '<div style="text-align:center;padding:1.5rem;color:var(--text3);font-size:12px;">Sin tareas con ese filtro.</div>'; return; }

  var j = state.jugadores.find(function(x){ return x.id === jugId; });
  var nombre = j ? j.nombre.split(' ')[0] : 'jugador';

  cont.innerHTML = lista.map(function(t) {
    var catColor = t.color||'#888'; var catBg = t.bg||'var(--bg2)';
    var micCount = (t.mics||[]).length;
    return '<div style="background:var(--bg);border:0.5px solid var(--border);border-left:3px solid ' + catColor + ';border-radius:var(--radius);padding:.875rem;margin-bottom:8px;">' +
      '<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:5px;">' +
        '<div style="font-size:12px;font-weight:600;flex:1;line-height:1.4;">' + (t.t||t.titulo||'') + '</div>' +
        (t.catLabel ? '<span style="font-size:9px;padding:2px 6px;border-radius:99px;background:' + catBg + ';color:' + catColor + ';white-space:nowrap;flex-shrink:0;">' + t.catLabel + '</span>' : '') +
      '</div>' +
      '<div style="font-size:11px;color:var(--text2);line-height:1.5;margin-bottom:7px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">' + (t.desc||'') + '</div>' +
      (micCount ? '<div style="font-size:10px;color:var(--text3);margin-bottom:7px;">' + micCount + ' microconcepto' + (micCount!==1?'s':'') + '</div>' : '') +
      '<div style="display:flex;gap:6px;">' +
        '<button onclick="verTareaJugador(\'' + t.id + '\',\'' + (t._src||'base') + '\')" style="flex:1;height:28px;background:none;border:0.5px solid var(--border2);border-radius:var(--radius-sm);color:var(--text2);font-size:10px;cursor:pointer;font-family:inherit;">Ver</button>' +
        '<button onclick="asignarTareaJugador(\'' + t.id + '\',\'' + (t._src||'base') + '\',\'' + jugId + '\')" style="flex:2;height:28px;background:rgba(29,158,117,0.12);border:0.5px solid rgba(29,158,117,0.35);border-radius:var(--radius-sm);color:#1D9E75;font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;">📤 Asignar a ' + nombre + '</button>' +
      '</div>' +
    '</div>';
  }).join('');
};

window.filtrarTareasJugador = function(jugId) {
  var q = document.getElementById('tarea-buscar-q')?.value || '';
  renderBibliotecaTareas(jugId, window._tareasJugadorPos, q);
};

window.filtrarTareasJugadorPos = function(pos, jugId, btn) {
  window._tareasJugadorPos = pos;
  document.querySelectorAll('#panel-buscar button[onclick^="filtrarTareasJugadorPos"]').forEach(function(b) {
    b.style.background  = 'none';
    b.style.color       = 'var(--text3)';
    b.style.borderColor = 'var(--border2)';
  });
  if(btn) {
    btn.style.background  = 'rgba(124,111,240,.15)';
    btn.style.color       = '#7C6FF0';
    btn.style.borderColor = 'rgba(124,111,240,.4)';
  }
  var q = document.getElementById('tarea-buscar-q')?.value || '';
  renderBibliotecaTareas(jugId, pos, q);
};

// ── Ver tarea (abre modal existente) ──
window.verTareaJugador = function(id, src) {
  if(typeof openTareaUnificada === 'function') openTareaUnificada(id, src);
};

// ── Asignar tarea de biblioteca ──
window.asignarTareaJugador = async function(tareaId, src, jugId) {
  var t = getAllTareas().find(function(x){ return String(x.id)===String(tareaId); });
  if(!t) { showToast('Tarea no encontrada'); return; }
  var texto = 'TAREA ASIGNADA: ' + (t.t||t.titulo||'Tarea') +
    '\n\nPosición: ' + (t.pos||'—') + ' | ' + (t.j||'') + ' jugadores | ' + (t.d||'') +
    '\n\nDesarrollo: ' + (t.des||t.desarrollo||'—') +
    '\n\nPreguntas: ' + (t.preg||[]).map(function(p){ return typeof p==='object'?p.p:p; }).join(' · ');
  var db = window.getDB();
  if(!db) { showToast('Error de conexión'); return; }
  var res = await db.from('notas_video').insert({jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto:texto}).select();
  if(res.error) { showToast('Error: '+res.error.message); return; }
  if(!state.notasVideo) state.notasVideo = [];
  state.notasVideo.unshift(res.data[0]);
  showToast('✓ Tarea asignada a ' + (state.jugadores.find(function(j){return j.id===jugId;})||{}).nombre?.split(' ')[0]);
  renderDT('tareas');
};

// ── Asignar tarea personalizada ──
window.asignarTareaPersonalizada = async function(jugId) {
  var texto = document.getElementById('tarea-custom-texto')?.value.trim();
  if(!texto) { showToast('Escribe la tarea primero'); return; }
  var db = window.getDB();
  if(!db) { showToast('Error de conexión'); return; }
  var textoFinal = 'TAREA ASIGNADA: Tarea personalizada\n\n' + texto;
  var res = await db.from('notas_video').insert({jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto:textoFinal}).select();
  if(res.error) { showToast('Error: '+res.error.message); return; }
  if(!state.notasVideo) state.notasVideo = [];
  state.notasVideo.unshift(res.data[0]);
  showToast('✓ Tarea personalizada asignada');
  renderDT('tareas');
};

// ── Eliminar tarea asignada ──
window.eliminarTareaAsignada = async function(notaId, jugId) {
  if(!confirm('¿Eliminar esta tarea asignada?')) return;
  var db = window.getDB();
  await db.from('notas_video').delete().eq('id', notaId);
  state.notasVideo = (state.notasVideo||[]).filter(function(n){ return n.id !== notaId; });
  showToast('Tarea eliminada');
  renderDT('tareas');
};

// ─── FIX 1: getDB() — siempre usa el cliente correcto de app.js ───
// DB_REF es el cliente de app.js que ya tiene el schema correcto
// _patchDB se crea solo como fallback si DB_REF no está disponible
window.getDB = function() {
  if(window.DB_REF) return window.DB_REF;
  if(window._patchDB) return window._patchDB;
  if(window.supabase) {
    window._patchDB = window.supabase.createClient(
      'https://ghxwdauwrzupjmrujcns.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U'
    );
    return window._patchDB;
  }
  return null;
};

// ─── FIX 2: Reescribir asignarTareaJugador con DB correcto ───
window.asignarTareaJugador = async function(tareaId, src, jugId) {
  var t = getAllTareas().find(function(x){ return String(x.id)===String(tareaId); });
  if(!t) { showToast('Tarea no encontrada'); return; }
  var db = window.getDB();
  if(!db) { showToast('Cargando conexión, espera...'); setTimeout(function(){ asignarTareaJugador(tareaId,src,jugId); }, 1200); return; }
  var texto = 'TAREA ASIGNADA: ' + (t.t||t.titulo||'Tarea') +
    '\n\nPosición: ' + (t.pos||'—') + ' | ' + (t.j||'') + ' jugadores | ' + (t.d||'') +
    '\n\nDesarrollo: ' + (t.des||t.desarrollo||'—') +
    '\n\nPreguntas: ' + (t.preg||[]).map(function(p){ return typeof p==='object'?p.p:p; }).join(' · ');
  var res = await db.from('notas_video').insert({jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto:texto}).select();
  if(res.error) { showToast('Error: '+res.error.message); return; }
  if(!state.notasVideo) state.notasVideo = [];
  state.notasVideo.unshift(res.data[0]);
  var j = state.jugadores.find(function(x){return x.id===jugId;});
  showToast('✓ Tarea asignada a ' + (j ? j.nombre.split(' ')[0] : 'jugador'));
  renderDT('tareas');
};

// ─── FIX 3: Reescribir asignarTareaPersonalizada con DB correcto ───
window.asignarTareaPersonalizada = async function(jugId) {
  var texto = document.getElementById('tarea-custom-texto')?.value.trim();
  if(!texto) { showToast('Escribe la tarea primero'); return; }
  var db = window.getDB();
  if(!db) { showToast('Sin conexión'); return; }
  var textoFinal = 'TAREA ASIGNADA: Tarea personalizada\n\n' + texto;
  var res = await db.from('notas_video').insert({jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto:textoFinal}).select();
  if(res.error) { showToast('Error: '+res.error.message); return; }
  if(!state.notasVideo) state.notasVideo = [];
  state.notasVideo.unshift(res.data[0]);
  showToast('✓ Tarea personalizada asignada');
  renderDT('tareas');
};

// ─── FIX 4: Reescribir eliminarTareaAsignada con DB correcto ───
window.eliminarTareaAsignada = async function(notaId, jugId) {
  if(!confirm('¿Eliminar esta tarea asignada?')) return;
  var db = window.getDB();
  if(!db) { showToast('Sin conexión'); return; }
  await db.from('notas_video').delete().eq('id', notaId);
  state.notasVideo = (state.notasVideo||[]).filter(function(n){ return n.id !== notaId; });
  showToast('Tarea eliminada');
  renderDT('tareas');
};

// ─── FIX 5: Modal de tarea centrado al abrir desde modal de jugador ───
var _origVerTareaJugador = window.verTareaJugador;
window.verTareaJugador = function(id, src) {
  if(typeof openTareaUnificada === 'function') {
    openTareaUnificada(id, src);
    // Asegurar que el modal mdt se muestra correctamente sobre el modal del jugador
    setTimeout(function() {
      var mdt = document.getElementById('mdt');
      if(mdt) {
        mdt.style.zIndex = '2000';
        mdt.style.alignItems = 'center';
        mdt.style.justifyContent = 'center';
        // Asegurar que el contenido no desborda a la izquierda
        var inner = mdt.querySelector('.modal-inner') || mdt.firstElementChild;
        if(inner) {
          inner.style.maxWidth = '560px';
          inner.style.width = '100%';
          inner.style.margin = '0 auto';
        }
      }
    }, 50);
  }
};

// ─── PANEL LATERAL DE JUGADORES EN CALENDARIO DEL ANALISTA ───

// ─── PANEL LATERAL DE JUGADORES EN CALENDARIO DEL ANALISTA ───
(function() {
  function patchCalendario() {
    var _origRenderCal = window.renderCalendario;
    if(!_origRenderCal) return setTimeout(patchCalendario, 400);
    window.renderCalendario = function() {
      _origRenderCal();
      setTimeout(injectJugadoresPanel, 100);
    };
  }
  setTimeout(patchCalendario, 600);

  function injectJugadoresPanel() {
    var calPage = document.getElementById('page-calendario');
    if(!calPage) return;
    if(calPage.querySelector('#panel-jugadores-cal')) return;

    var panel = document.createElement('div');
    panel.id = 'panel-jugadores-cal';
    panel.style.cssText = 'position:fixed;right:0;top:60px;width:280px;height:calc(100vh - 60px);background:var(--bg2,#161b22);border-left:0.5px solid var(--border,#30363d);overflow-y:auto;z-index:100;transform:translateX(100%);transition:transform .25s ease;padding:1rem;';
    panel.innerHTML = buildJugadoresPanelShell();
    document.body.appendChild(panel);

    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'btn-toggle-jug-cal';
    toggleBtn.onclick = function() { toggleJugadoresPanel(); };
    toggleBtn.style.cssText = 'position:fixed;right:16px;bottom:80px;z-index:200;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#1D9E75,#378ADD);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4);';
    toggleBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
    calPage.appendChild(toggleBtn);
  }

  function buildJugadoresPanelShell() {
    return '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">' +
      '<div style="font-size:13px;font-weight:700;">Jugadores</div>' +
      '<button onclick="toggleJugadoresPanel()" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:18px;">\xd7</button>' +
    '</div>' +
    '<div style="font-size:10px;color:var(--text3);margin-bottom:.875rem;">Pulsa un jugador para asignarle objetivos, tareas o notas del d\xeda</div>' +
    '<div id="panel-jug-lista"><div style="text-align:center;padding:1rem;color:var(--text3);font-size:12px;">Cargando...</div></div>';
  }

  window.toggleJugadoresPanel = function() {
    var panel = document.getElementById('panel-jugadores-cal');
    if(!panel) return;
    var isOpen = panel.style.transform === 'translateX(0px)' || panel.style.transform === 'translateX(0%)' || panel.style.transform === 'translateX(0)';
    if(isOpen) {
      panel.style.transform = 'translateX(100%)';
    } else {
      panel.style.transform = 'translateX(0)';
      cargarJugadoresPanel();
    }
  };

  function cargarJugadoresPanel() {
    var db = window.getDB();
    var cont = document.getElementById('panel-jug-lista');
    if(!cont) return;
    if(!db) { cont.innerHTML = '<div style="font-size:12px;color:var(--text3);padding:.5rem;">Sin conexi\xf3n</div>'; return; }

    cont.innerHTML = '<div style="text-align:center;padding:1rem;color:var(--text3);font-size:12px;">Cargando jugadores...</div>';

    db.from('jugadores').select('*').order('nombre').then(function(res) {
      var jugs = res.data || [];
      window._jugadoresCache = jugs;

      if(!jugs.length) {
        cont.innerHTML = '<div style="font-size:12px;color:var(--text3);text-align:center;padding:1rem;">Sin jugadores todav\xeda</div>';
        return;
      }

      var TIPOS = { Central:'\u26f9', Lateral:'\u26a1', Pivote:'\u25ce', Interior:'\u2197', Extremo:'\u25b6', Delantero:'\u26bd' };
      var AV = window.AV_COLORS || {};
      var html = '';

      jugs.forEach(function(j) {
        var pc = AV[j.posicion] || {bg:'#1a2040', color:'#8090d0'};
        var ico = TIPOS[j.posicion] || '\u26bd';
        var jid = '\'' + j.id + '\'';
        html += '<div onclick="abrirJugadorDia(' + jid + ')" style="display:flex;align-items:center;gap:10px;padding:.75rem;border-radius:10px;background:var(--bg,#0d1117);border:0.5px solid var(--border,#30363d);margin-bottom:6px;cursor:pointer;">';
        html += '<div style="width:38px;height:38px;border-radius:50%;background:' + pc.bg + ';color:' + pc.color + ';display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;">' + ico + '</div>';
        html += '<div style="flex:1;min-width:0;">';
        html += '<div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + j.nombre + '</div>';
        html += '<div style="font-size:10px;color:var(--text3);">' + (j.posicion||'') + (j.equipo?' \xb7 '+j.equipo:'') + '</div>';
        html += '</div><div style="font-size:18px;color:var(--text3);">\u203a</div>';
        html += '</div>';
      });
      cont.innerHTML = html;
    });
  }

  window.abrirJugadorDia = function(jugId) {
    var cache = window._jugadoresCache || [];
    var j = cache.find(function(x){ return x.id === jugId; });
    if(!j) {
      // Si no está en caché, cargar desde DB
      var db = window.getDB();
      if(db) {
        db.from('jugadores').select('*').eq('id', jugId).single().then(function(res) {
          if(res.data) { window._jugadoresCache.push(res.data); abrirJugadorDia(jugId); }
        });
      }
      return;
    }

    var existingModal = document.getElementById('modal-jug-dia');
    if(existingModal) existingModal.remove();

    var hoy = new Date().toISOString().slice(0,10);
    var SI = 'width:100%;height:36px;border:0.5px solid var(--border2,#21262d);border-radius:8px;padding:0 10px;font-size:12px;background:var(--bg,#0d1117);color:var(--text,#e6edf3);outline:none;margin-bottom:8px;box-sizing:border-box;';
    var TA = 'width:100%;border:0.5px solid var(--border2,#21262d);border-radius:8px;padding:8px;font-size:12px;background:var(--bg,#0d1117);color:var(--text,#e6edf3);resize:none;font-family:inherit;outline:none;margin-bottom:8px;box-sizing:border-box;';
    var iniciales = j.nombre.split(' ').map(function(w){return w[0]||'';}).join('').slice(0,2).toUpperCase();
    var AV = window.AV_COLORS || {};
    var pc = AV[j.posicion] || {bg:'#1a2040', color:'#8090d0'};
    var nombre1 = j.nombre.split(' ')[0];
    var jidJson = '\'' + jugId + '\'';

    var modal = document.createElement('div');
    modal.id = 'modal-jug-dia';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:1000;display:flex;align-items:center;justify-content:center;padding:1rem;';

    modal.innerHTML = '<div style="background:var(--bg2,#161b22);border:0.5px solid var(--border,#30363d);border-radius:12px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;padding:1.5rem;">' +
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem;">' +
        '<div style="width:40px;height:40px;border-radius:50%;background:' + pc.bg + ';color:' + pc.color + ';display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;">' + iniciales + '</div>' +
        '<div><div style="font-size:15px;font-weight:700;">' + j.nombre + '</div><div style="font-size:11px;color:var(--text3);">' + (j.posicion||'') + '</div></div>' +
        '<button onclick="document.getElementById(\'modal-jug-dia\').remove()" style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--text3);font-size:22px;">\xd7</button>' +
      '</div>' +

      '<label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Fecha</label>' +
      '<input type="date" id="jd-fecha" value="' + hoy + '" style="' + SI + '">' +

      '<div style="display:flex;gap:6px;margin-bottom:1rem;">' +
        '<button onclick="switchJugDiaTab(\'objetivo\')" id="jdt-objetivo" style="flex:1;height:30px;border-radius:8px;font-size:10px;font-weight:700;background:rgba(29,158,117,0.15);color:#1D9E75;border:0.5px solid rgba(29,158,117,0.3);cursor:pointer;font-family:inherit;">\ud83c\udfaf Objetivo</button>' +
        '<button onclick="switchJugDiaTab(\'tarea\')" id="jdt-tarea" style="flex:1;height:30px;border-radius:8px;font-size:10px;font-weight:700;background:none;color:var(--text3);border:0.5px solid var(--border2);cursor:pointer;font-family:inherit;">\ud83d\udccb Tarea</button>' +
        '<button onclick="switchJugDiaTab(\'nota\')" id="jdt-nota" style="flex:1;height:30px;border-radius:8px;font-size:10px;font-weight:700;background:none;color:var(--text3);border:0.5px solid var(--border2);cursor:pointer;font-family:inherit;">\ud83d\uddd2 Nota</button>' +
      '</div>' +

      '<div id="jdp-objetivo">' +
        '<div style="font-size:11px;color:var(--text2);margin-bottom:8px;">Foco del d\xeda para ' + nombre1 + ' \u2014 aparece destacado en su semana</div>' +
        '<textarea id="jd-objetivo-txt" rows="3" placeholder="Ej: Hoy trabaja la anticipaci\xf3n en los duelos 1v1..." style="' + TA + '"></textarea>' +
        '<select id="jd-tipo" style="' + SI + '">' +
          '<option value="entreno">\ud83d\udcaa Entrenamiento</option>' +
          '<option value="partido">\u26bd Partido</option>' +
          '<option value="descanso">\ud83d\ude34 Descanso</option>' +
        '</select>' +
        '<button onclick="guardarObjetivoDia(' + jidJson + ')" style="width:100%;height:40px;background:linear-gradient(135deg,#1D9E75,#0f6e56);border:none;border-radius:8px;color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;">Guardar en su semana</button>' +
      '</div>' +

      '<div id="jdp-tarea" style="display:none;">' +
        '<div style="font-size:11px;color:var(--text2);margin-bottom:8px;">Asigna una tarea de la biblioteca o escribe una personalizada</div>' +
        '<input id="jd-tarea-q" oninput="buscarTareasDia(' + jidJson + ')" placeholder="Buscar tarea..." style="' + SI + '">' +
        '<div id="jd-tarea-lista" style="max-height:180px;overflow-y:auto;margin-bottom:8px;"></div>' +
        '<div style="font-size:10px;color:var(--text3);margin-bottom:5px;">O escribe una tarea personalizada:</div>' +
        '<textarea id="jd-tarea-custom" rows="2" placeholder="Describe la tarea..." style="' + TA + '"></textarea>' +
        '<button onclick="guardarTareaDia(' + jidJson + ')" style="width:100%;height:40px;background:rgba(124,111,240,0.15);border:0.5px solid rgba(124,111,240,0.4);border-radius:8px;color:#7C6FF0;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;">Asignar tarea</button>' +
      '</div>' +

      '<div id="jdp-nota" style="display:none;">' +
        '<div style="font-size:11px;color:var(--text2);margin-bottom:8px;">Nota de sesi\xf3n o comentario para ' + nombre1 + '</div>' +
        '<textarea id="jd-nota-txt" rows="4" placeholder="Notas del entrenamiento, observaciones del partido..." style="' + TA + '"></textarea>' +
        '<button onclick="guardarNotaDia(' + jidJson + ')" style="width:100%;height:40px;background:rgba(55,138,221,0.15);border:0.5px solid rgba(55,138,221,0.4);border-radius:8px;color:#378ADD;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;">Guardar nota</button>' +
      '</div>' +
    '</div>';

    document.body.appendChild(modal);
    modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
    setTimeout(function(){ buscarTareasDia(jugId); }, 100);
  };

  window.switchJugDiaTab = function(tab) {
    ['objetivo','tarea','nota'].forEach(function(t) {
      var p = document.getElementById('jdp-'+t);
      var b = document.getElementById('jdt-'+t);
      if(!p||!b) return;
      var act = t===tab;
      p.style.display = act ? 'block' : 'none';
      b.style.background  = act ? 'rgba(29,158,117,0.15)' : 'none';
      b.style.color       = act ? '#1D9E75' : 'var(--text3)';
      b.style.borderColor = act ? 'rgba(29,158,117,0.3)' : 'var(--border2,#21262d)';
    });
  };

  window.buscarTareasDia = function(jugId) {
    var q    = (document.getElementById('jd-tarea-q')||{}).value || '';
    var cont = document.getElementById('jd-tarea-lista');
    if(!cont) return;
    var cache = window._jugadoresCache || [];
    var j    = cache.find(function(x){ return x.id===jugId; });
    var pos  = j ? j.posicion : '';
    var allT = window.getAllTareas ? window.getAllTareas() : [];
    var lista = allT.filter(function(t){
      return t.t && (t.pos===pos || q) &&
        (!q || (t.t||'').toLowerCase().includes(q.toLowerCase()));
    }).slice(0, 8);

    if(!lista.length) { cont.innerHTML = '<div style="font-size:11px;color:var(--text3);padding:.5rem;">Sin resultados</div>'; return; }

    var html = '';
    lista.forEach(function(t) {
      var tid = '\'' + String(t.id) + '\'';
      var src = '\'' + (t._src || 'base') + '\'';
      html += '<div onclick="seleccionarTareaDia(' + tid + ',' + src + ')" style="display:flex;align-items:center;gap:8px;padding:.5rem;border-radius:6px;background:var(--bg,#0d1117);border:0.5px solid var(--border,#30363d);margin-bottom:4px;cursor:pointer;">';
      html += '<div style="flex:1;font-size:12px;font-weight:500;">' + (t.t||'') + '</div>';
      html += '<div style="font-size:10px;color:var(--text3);">' + (t.pos||'') + '</div>';
      html += '</div>';
    });
    cont.innerHTML = html;
  };

  window._tareaSelDia = null;
  window.seleccionarTareaDia = function(id, src) {
    var t = window.getAllTareas ? window.getAllTareas().find(function(x){ return String(x.id)===String(id); }) : null;
    if(!t) return;
    window._tareaSelDia = t;
    var q = document.getElementById('jd-tarea-q');
    if(q) q.value = t.t;
    var lista = document.getElementById('jd-tarea-lista');
    if(lista) lista.innerHTML = '<div style="background:rgba(29,158,117,0.1);border:0.5px solid rgba(29,158,117,0.3);border-radius:6px;padding:.625rem;font-size:12px;font-weight:600;color:#1D9E75;">\u2713 ' + t.t + '</div>';
  };

  window.guardarObjetivoDia = async function(jugId) {
    var fecha = (document.getElementById('jd-fecha')||{}).value || new Date().toISOString().slice(0,10);
    var foco  = ((document.getElementById('jd-objetivo-txt')||{}).value||'').trim();
    var tipo  = (document.getElementById('jd-tipo')||{}).value || 'entreno';
    if(!foco) { showToast('Escribe el objetivo primero'); return; }
    var db = window.getDB();
    if(!db) { showToast('Sin conexi\xf3n'); return; }
    var res = await db.from('calendario_semana').select('id').eq('jugador_id',jugId).eq('fecha',fecha).maybeSingle();
    var err;
    if(res.data) {
      ({error:err} = await db.from('calendario_semana').update({foco:foco,tipo:tipo}).eq('id',res.data.id));
    } else {
      ({error:err} = await db.from('calendario_semana').insert({jugador_id:jugId,fecha:fecha,tipo:tipo,foco:foco,hora:'',notas:''}));
    }
    if(err) { showToast('Error: '+err.message); return; }
    var cache = window._jugadoresCache || [];
    var j = cache.find(function(x){return x.id===jugId;});
    showToast('\u2713 Objetivo guardado para ' + (j?j.nombre.split(' ')[0]:'jugador'));
    document.getElementById('modal-jug-dia') && document.getElementById('modal-jug-dia').remove();
    if(typeof renderCalendario === 'function') renderCalendario();
  };

  window.guardarTareaDia = async function(jugId) {
    var fecha  = (document.getElementById('jd-fecha')||{}).value || new Date().toISOString().slice(0,10);
    var custom = ((document.getElementById('jd-tarea-custom')||{}).value||'').trim();
    var db = window.getDB();
    if(!db) { showToast('Sin conexi\xf3n'); return; }
    var texto;
    if(window._tareaSelDia) {
      var t = window._tareaSelDia;
      texto = 'TAREA ASIGNADA: ' + (t.t||'Tarea') +
        '\n\nPosici\xf3n: ' + (t.pos||'\u2014') + ' | ' + (t.j||'') + ' jugadores | ' + (t.d||'') +
        '\n\nDesarrollo: ' + (t.des||t.desarrollo||'\u2014') +
        '\n\nPreguntas: ' + (t.preg||[]).map(function(p){ return typeof p==='object'?p.p:p; }).join(' \xb7 ');
      window._tareaSelDia = null;
    } else if(custom) {
      texto = 'TAREA ASIGNADA: Tarea personalizada\n\n' + custom;
    } else {
      showToast('Selecciona o escribe una tarea'); return;
    }
    var res = await db.from('notas_video').insert({jugador_id:jugId,fecha:fecha,texto:texto}).select();
    if(res.error) { showToast('Error: '+res.error.message); return; }
    var cache = window._jugadoresCache || [];
    var j = cache.find(function(x){return x.id===jugId;});
    showToast('\u2713 Tarea asignada a ' + (j?j.nombre.split(' ')[0]:'jugador'));
    document.getElementById('modal-jug-dia') && document.getElementById('modal-jug-dia').remove();
  };

  window.guardarNotaDia = async function(jugId) {
    var fecha = (document.getElementById('jd-fecha')||{}).value || new Date().toISOString().slice(0,10);
    var nota  = ((document.getElementById('jd-nota-txt')||{}).value||'').trim();
    if(!nota) { showToast('Escribe la nota primero'); return; }
    var db = window.getDB();
    if(!db) { showToast('Sin conexi\xf3n'); return; }
    var res = await db.from('notas_video').insert({jugador_id:jugId,fecha:fecha,texto:nota}).select();
    if(res.error) { showToast('Error: '+res.error.message); return; }
    var cache = window._jugadoresCache || [];
    var j = cache.find(function(x){return x.id===jugId;});
    showToast('\u2713 Nota guardada para ' + (j?j.nombre.split(' ')[0]:'jugador'));
    document.getElementById('modal-jug-dia') && document.getElementById('modal-jug-dia').remove();
  };

})();
