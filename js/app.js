// ─── CONFIGURACIÓN ───
const SUPABASE_URL = 'https://ghxwdauwrzupjmrujcns.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U';

// ─── CONSTANTES ───
const POSICIONES = ['Central','Lateral','Pivote','Interior','Extremo','Delantero'];
const AV_COLORS = {
  Central:{bg:'#E6F1FB',color:'#0C447C'}, Lateral:{bg:'#E1F5EE',color:'#085041'},
  Pivote:{bg:'#FAEEDA',color:'#633806'}, Interior:{bg:'#EEEDFE',color:'#3C3489'},
  Extremo:{bg:'#FAECE7',color:'#993C1D'}, Delantero:{bg:'#FCEBEB',color:'#A32D2D'},
};
const FASES = [
  {id:'OF',label:'Fase ofensiva',cls:'badge-of',dot:'#1D9E75'},
  {id:'DE',label:'Fase defensiva',cls:'badge-de',dot:'#378ADD'},
  {id:'TO',label:'Transición ofensiva',cls:'badge-to',dot:'#E07B00'},
  {id:'TD',label:'Transición defensiva',cls:'badge-td',dot:'#D85A30'},
];
const FOLDER_ICONS = {Central:'🛡',Lateral:'⚡',Pivote:'◎',Interior:'↗',Extremo:'▶',Delantero:'⚽'};

const ASPECTOS = {
  MCB:['Ubicación en espacios','Aspecto técnico: pases','Aspecto técnico: controles','Toma de decisiones con balón','Desmarques y movilidad','Personalidad','Duelos ganados'],
  MSB:['Posición defensiva','Presión al poseedor','Coberturas y ayudas','Anticipación','Duelos individuales','Concentración','Activación tras pérdida'],
  TDA:['Reacción tras recuperación','Velocidad de transición','Apoyo al portador','Aprovechamiento del espacio','Limpiar zona'],
  TAD:['Reacción tras pérdida','Repliegue','Presión inmediata','Organización defensiva','Falta táctica'],
};

const MICROS_BASE=[['Central','DE','1vs1 girando al revés para no perder tiempo'],['Central','DE','Acoso por lado erróneo'],['Central','DE','Anticipación'],['Central','DE','Capacidad de tackle y ganar balón'],['Central','DE','Cobertura a P2'],['Central','DE','Cobertura a P4'],['Central','DE','Defensa de área: primer central primer palo'],['Central','DE','Defensa de área: segundo central en línea con el primero'],['Central','DE','Defensa de pared'],['Central','DE','Defensa de rupturas'],['Central','DE','Desequilibrar con choque previo'],['Central','DE','Desactivación sin referencia'],['Central','DE','Despeje hacia atrás en centro lateral'],['Central','DE','Frecuencia de pasos alta para reaccionar rápido'],['Central','DE','Hacer entrada siendo último'],['Central','DE','Ir a rechace de portero'],['Central','DE','Juego aéreo: carrera hacia atrás y pies de perfil'],['Central','DE','Juego aéreo: dejando espacio para llegar en carrera'],['Central','DE','Juego aéreo: utilización de brazos para impulsarse'],['Central','DE','Manos atrás en área'],['Central','DE','P4 alejado a balón cubriendo por detrás'],['Central','DE','Perfilamientos para proteger espalda'],['Central','DE','Ponerse de frente en área ante opción de tiro'],['Central','DE','Preferenciar área sobre centrador'],['Central','DE','Romper línea defensiva para tapar tiro en frontal'],['Central','DE','Saltar a penúltimo siendo último'],['Central','DE','Salto a cuadrados sin permitir giro'],['Central','DE','Saltos lejos: chocar en retorno'],['Central','DE','Saltos lejos: evitar giro sobre la posición que abandonamos'],['Central','DE','Saltos lejos: frenar lateralizado'],['Central','DE','Segundo P4 equilibra dentro si el otro P4 salta'],['Central','DE','Segundo P4 equilibra línea y mantiene fuera de juego'],['Central','DE','Uso de brazos para frenar carrera'],['Central','OF','Apoyo de progresión si se puede superar primera línea'],['Central','OF','Apoyo de seguridad por detrás'],['Central','OF','Atraer presión desde parado'],['Central','OF','Calibrar para modificar al rival mientras conduzco'],['Central','OF','Capacidad de pases largos'],['Central','OF','Conducción hacia atrás para atraer presión'],['Central','OF','Conducción hacia intervalos para fijar y abrir pases'],['Central','OF','Conducciones para fijar'],['Central','OF','Conducciones para superar'],['Central','OF','Esconder pase para abrir nuevas líneas'],['Central','OF','Mensaje de pase'],['Central','OF','Pase de primeras a contrapresión'],['Central','OF','Pases fuera-dentro'],['Central','OF','Reconocer cuándo repetir pase para modificar al rival'],['Central','OF','Reconocerse como hombre libre en progresión'],['Central','OF','Romper líneas con pase'],['Central','OF','Superar línea de presión con pared'],['Lateral','DE','Anticipar solo si no hay amenaza a espaldas'],['Lateral','DE','Bloquear disparos con pierna natural'],['Lateral','DE','Cerrar pase filtrante liberando pase pasante'],['Lateral','DE','Cierre en centro lateral opuesto: control del par'],['Lateral','DE','Cierre en centro lateral opuesto: perfil diagonal'],['Lateral','DE','Cierre en centro lateral opuesto: tocar a par si es en carrera'],['Lateral','DE','Defender carreras del rival'],['Lateral','DE','Defensa de dobladas por dentro: cada jugador sigue a su marca'],['Lateral','DE','Defensa de dobladas por fuera 1vs2'],['Lateral','DE','Defensa de dobladas por fuera 2vs2'],['Lateral','DE','Defensa de pared: evitar giros'],['Lateral','DE','Defensa de pared: seguir jugador y no balón'],['Lateral','DE','Desplazar posición a intermedias si compañero salta'],['Lateral','DE','Dominar giros: giro hacia dentro para perder menos tiempo'],['Lateral','DE','Ir a rechace de portero en tiro rival'],['Lateral','DE','Perfil enfrentado de cara a P4 para cerrar pase filtrante'],['Lateral','DE','Perfil enfrentado: controlar fuera de juego'],['Lateral','DE','Perfil enfrentado: giro rápido'],['Lateral','DE','Perfiles: distancias respecto a extremo'],['Lateral','DE','Perfiles: posición corporal'],['Lateral','DE','Preferencial defensa de área sobre centrador'],['Lateral','DE','Proteger espalda con perfil'],['Lateral','DE','Romper línea para bloquear disparos'],['Lateral','DE','Romper línea para cortar pase'],['Lateral','DE','Salto a recepción en banda solo si tenemos espalda cubierta'],['Lateral','DE','Saltos a espalda de rival en diagonal o tocando para que no gire'],['Lateral','DE','Saltos lejos: chocar en retorno'],['Lateral','DE','Saltos lejos: evitar giro sobre posición que abandonamos'],['Lateral','DE','Saltos lejos: frenar lateralizado'],['Lateral','DE','Volver al bloque defensivo si nos superan'],['Lateral','OF','Capacidad de desborde 1v1 a su par'],['Lateral','OF','Centro desde línea de fondo'],['Lateral','OF','Centros de primeras para no perder tiempo'],['Lateral','OF','Centros desde 3/4'],['Lateral','OF','Como compensador: en línea con P4-P5 o por delante con P6'],['Lateral','OF','Control abierto con pase dentro'],['Lateral','OF','Control abierto con pase fuera'],['Lateral','OF','Control abierto con regate dentro'],['Lateral','OF','Control hacia atrás'],['Lateral','OF','Control para progresar'],['Lateral','OF','Doblada exterior tras fijación de extremo'],['Lateral','OF','Doblada interior en intervalo CT-LT para recibir o movilizar'],['Lateral','OF','Pared para recibir dentro'],['Lateral','OF','Pared por fuera'],['Lateral','OF','Pase de primeras'],['Lateral','OF','Pisar posiciones interiores para fijar'],['Lateral','OF','Pisar posiciones interiores para recibir'],['Lateral','OF','Rupturas a la espalda de la línea defensiva'],['Lateral','OF','Superar líneas rivales con conducción y pase'],['Pivote','DE','Apoyo a P4 ante posible pérdida, siempre cerca'],['Pivote','DE','Ayudas a lateral 2vs2'],['Pivote','DE','Basculaciones y coberturas a interiores'],['Pivote','DE','Cobertura a lateral'],['Pivote','DE','Compensar una posible pérdida'],['Pivote','DE','Defensa de llegadas de 2ª línea rival y punto de penalti'],['Pivote','DE','Evitar escapadas del rival'],['Pivote','DE','Evitar recepciones que permitan enfrentar línea defensiva con ventaja'],['Pivote','DE','Fusiones en línea defensiva'],['Pivote','DE','Reducir distancia para evitar recepciones en plataforma'],['Pivote','DE','Salto para condicionar decisión rival'],['Pivote','DE','Salto tapando línea de pase'],['Pivote','DE','Tapar línea de pase estático'],['Pivote','DE','Transición defensiva acoso a poseedor'],['Pivote','OF','Aparecer a espaldas de líneas de presión rivales'],['Pivote','OF','Conducir para superar'],['Pivote','OF','Control con alejada'],['Pivote','OF','Control dejando pasar el balón'],['Pivote','OF','Descolgarse para recibir o atraer'],['Pivote','OF','Esconder pase'],['Pivote','OF','Escaneos'],['Pivote','OF','Fijar, atraer y arrastrar rivales para facilitar líneas de pase'],['Pivote','OF','Movimiento para siguiente jugada'],['Pivote','OF','Ofrecer pases de seguridad'],['Pivote','OF','Perfil recibiendo de espaldas para poder jugar fácil'],['Pivote','OF','Recibir bajo presión'],['Pivote','OF','Reconocerse como 3er hombre'],['Pivote','OF','Repetir pase con P4 para modificar al rival'],['Pivote','OF','Salidas de 3 entre centrales o lateralizado'],['Pivote','OF','Superar con el pase'],['Interior','DE','Agresividad tras control hacia atrás'],['Interior','DE','Coberturas a P2'],['Interior','DE','Coberturas a P6'],['Interior','DE','Defensa de dobladas junto a P2'],['Interior','DE','Defensa de pared'],['Interior','DE','Transición defensiva en diagonal cerrando medio'],['Interior','DE','Trayectoria de acoso cerrando líneas de pase'],['Interior','DE','Vigilancias ofensivas'],['Interior','OF','Apoyo de fijación para abrir espacio'],['Interior','OF','Apoyos y desmarques contrarios a la basculación del rival'],['Interior','OF','Atacar la segunda profundidad'],['Interior','OF','Como compensador: atender subidas de P2 y P11'],['Interior','OF','Conducciones horizontales para provocar dudas en saltos'],['Interior','OF','Conducción para fijar línea defensiva'],['Interior','OF','Control con alejada para girar hacia línea defensiva'],['Interior','OF','Control hacia atrás para alargar saltos'],['Interior','OF','Descenso en apoyo para provocar saltos'],['Interior','OF','Desdoble por fuera'],['Interior','OF','Desmarques a intervalos de la línea defensiva'],['Interior','OF','Devolución y moverse para abrir línea de pase'],['Interior','OF','Lateralizarse para recibir'],['Interior','OF','Pase con mensaje'],['Interior','OF','Percepción de espacios antes de recibir'],['Interior','OF','Recibir a costados de medios para superar con control'],['Interior','OF','Recibir en cuadrados para superar línea de medios con el pase'],['Interior','OF','Reconocerse como 3er hombre ante balón directo a punta de espaldas'],['Interior','OF','Redondeo a descarga de P9'],['Extremo','DE','Basculación cerrando a pivote rival siendo extremo de lado débil'],['Extremo','DE','Cerrar líneas de pase'],['Extremo','DE','Cobertura a lateral'],['Extremo','DE','Defensa de centro desde lado opuesto'],['Extremo','DE','Defensa de dobladas junto a P2'],['Extremo','DE','Distribución de marcas'],['Extremo','DE','Fusiones en línea anterior (usualmente línea defensiva)'],['Extremo','DE','Iniciar persecución en forma de repliegue tras ser superado'],['Extremo','OF','Arrancar en máxima amplitud para fijar y recibir dentro'],['Extremo','OF','Atacar espalda de segundo central'],['Extremo','OF','Centro sin superar'],['Extremo','OF','Control con alejada en banda para encarar'],['Extremo','OF','Dejar correr para superar'],['Extremo','OF','Desmarque fuera-dentro para liberar subida de lateral'],['Extremo','OF','Desmarque por espalda de lateral'],['Extremo','OF','Desmarque por espalda de lateral en centro lateral'],['Extremo','OF','Esperar en segunda altura'],['Extremo','OF','Fijar y soltar en el momento exacto que nos doblan'],['Extremo','OF','Generar arrastres'],['Extremo','OF','Generar pasillos'],['Extremo','OF','Hundir a la defensa para liberar la frontal'],['Extremo','OF','Ir a segunda jugada tras peinada'],['Extremo','OF','Pared'],['Extremo','OF','Recibir en amplitud y jugar dentro de primeras para dar continuidad'],['Extremo','OF','Recorte hacia atrás para superar'],['Extremo','OF','Redondeo'],['Extremo','OF','Remolque fuera-dentro'],['Extremo','OF','Si vengo es porque voy'],['Extremo','OF','Si voy es porque vengo'],['Delantero','DE','Cerrar líneas de pase entre jugadores de la línea defensiva rival'],['Delantero','DE','Como jugador superado: acoso a espaldas'],['Delantero','DE','Como jugador superado: evitar relaciones hacia atrás que cambien el sentido'],['Delantero','DE','Fusiones en línea de medios'],['Delantero','DE','Iniciador de presiones'],['Delantero','OF','Atacar espalda de centrales con desmarque'],['Delantero','OF','Atacar espalda de centrales en centro lateral'],['Delantero','OF','Cruzarse por delante de par para ganar posición'],['Delantero','OF','Dejar correr balón para superar'],['Delantero','OF','Descolgarse para rematar en segunda altura'],['Delantero','OF','Desmarque de atrás hacia delante en centro lateral'],['Delantero','OF','Desmarque desde segunda altura'],['Delantero','OF','Desmarques para provocar arrastres'],['Delantero','OF','Esperar en fuera de juego para activarse cuando el balón va a banda'],['Delantero','OF','Generar pasillos: separarse del último o alejarse del intervalo'],['Delantero','OF','Juego de espaldas'],['Delantero','OF','Pie de apoyo enfocado a portería para finalizar'],['Delantero','OF','Si vengo es porque voy'],['Delantero','OF','Utilizar el cuerpo para generar espacio']];

const TAREAS=[{id:1,pos:'Central',fase:'OF',t:'Salida de balón bajo presión alta',j:'4-6',d:'15min',i:'Media',desc:'El central conduce, atrae y libera al pivote o lateral en el hueco generado ante presión del delantero.',des:'Espacio 20x15m. Central sale con balón. Delantero presiona. Decide: conducción hacia intervalo o apoyo de seguridad atrás.',var:'Añadir segundo presionador. Limitar a 3 toques.',preg:['¿Hacia dónde condujiste y por qué?','¿Cuándo decidiste que era el momento de pasar?','¿Viste el hueco antes o lo creaste conduciendo?'],mics:['Conducción hacia intervalos para fijar','Apoyo de seguridad por detrás','Reconocerse como hombre libre']},{id:2,pos:'Central',fase:'DE',t:'Salto a cuadrados sin perder espalda',j:'4-5',d:'12min',i:'Alta',desc:'El central practica cuándo saltar a interceptar recepciones de espalda sin exponer el espacio.',des:'Espacio 20x20m. Pivote rival intenta dar al delantero de espaldas. Central decide: saltar o esperar.',var:'Añadir amenaza de ruptura. Cambiar ángulo del pase.',preg:['¿Cuándo decidiste saltar y qué señal usaste?','¿Cubriste tú el espacio o esperaste al compañero?'],mics:['Salto a cuadrados','Perfilamientos para proteger espalda','Cobertura a P2']},{id:3,pos:'Lateral',fase:'OF',t:'Doblada exterior con timing de extremo',j:'5-7',d:'15min',i:'Media-Alta',desc:'El lateral sube en el momento exacto en que el extremo fija al lateral rival.',des:'Espacio 30x20m. Extremo recibe en banda. Lateral lee el 1v1 y decide cuándo subir.',var:'Añadir presión en la subida. Extremo con instrucción de invertir.',preg:['¿Cuándo decidiste subir?','¿Qué señal te dio el extremo?'],mics:['Doblada exterior tras fijación','Rupturas a la espalda','Control abierto']},{id:4,pos:'Pivote',fase:'OF',t:'Escaneo y recepción entre líneas',j:'5-6',d:'15min',i:'Media',desc:'El pivote practica los escaneos antes de recibir para orientar el primer control.',des:'Rondo 4v2. El pivote siempre poseedor exterior. Antes de cada recepción debe hacer escaneo visible.',var:'Limitar a 2 toques. Añadir presión al pivote.',preg:['¿Qué viste antes de que te llegara el balón?','¿Tu control orientó hacia donde querías?'],mics:['Escaneos','Perfil recibiendo de espaldas','Control con alejada']},{id:5,pos:'Interior',fase:'OF',t:'Descenso en apoyo para provocar saltos',j:'5-7',d:'15min',i:'Media-Alta',desc:'El interior practica bajar a recibir para provocar que el rival salte con él, liberando el espacio a su espalda.',des:'Espacio 25x20m. Interior baja a recibir. Si el rival le sigue: controla hacia atrás y abre línea a la espalda.',var:'Añadir extremo como opción de ruptura.',preg:['¿El rival siguió tu movimiento? ¿Cómo lo leíste?','¿Cuándo controlaste hacia atrás y por qué?'],mics:['Descenso en apoyo para provocar saltos','Control hacia atrás para alargar saltos']},{id:6,pos:'Extremo',fase:'OF',t:'Fijar al lateral y soltar en la doblada',j:'5-6',d:'15min',i:'Alta',desc:'El extremo mantiene al lateral fijado hasta el momento exacto en que llega la doblada.',des:'Espacio 20x25m. Extremo recibe con lateral encima. Interior baja a doblar.',var:'Si la doblada no llega, 1v1. Finalización.',preg:['¿Cuándo supiste que era el momento de soltarla?','¿Mantuviste al lateral fijo o se fue antes?'],mics:['Fijar y soltar al ser doblado','Generar arrastres','Remolque fuera-dentro']},{id:7,pos:'Delantero',fase:'OF',t:'Si vengo es porque voy',j:'4-5',d:'12min',i:'Alta',desc:'El delantero practica que cada bajada a recibir tiene una continuación inmediata en profundidad.',des:'Espacio 20x25m. Delantero baja a recibir del pivote. Al controlar, continúa en profundidad.',var:'Añadir central que marca. Limitar a 1 toque.',preg:['¿Cuándo bajaste, ya sabías hacia dónde ibas después?','¿Tu movimiento liberó espacio para alguien?'],mics:['Si vengo es porque voy','Desmarques para provocar arrastres']}];

const PSES={ap:[{t:'¿Cómo crees que fue el partido?',h:'Deja que hable sin interrumpir.'},{t:'¿Qué crees que hiciste bien?',h:'Importante que empiece por lo positivo.'},{t:'¿Hay algo que crees que puedes mejorar?',h:'Si él lo identifica antes de ver el vídeo, la sesión ya está funcionando.'}],OF:{Central:[{t:'¿En qué momentos tuviste espacio para conducir y no lo aprovechaste?',h:'Busca conducciones hacia intervalos para fijar.',c:'Conducción hacia intervalos'},{t:'Cuando recibiste con presión, ¿hacia dónde decidiste jugar?',h:'Trabaja apoyo de seguridad y apoyo de progresión.',c:'Apoyo de seguridad'}],Lateral:[{t:'¿Cuándo subiste en ataque, cómo decidiste si ir por fuera o entrar por dentro?',h:'Trabaja doblada exterior vs doblada interior.',c:'Doblada exterior / Doblada interior'}],Pivote:[{t:'¿Cuándo te descolgaste a recibir, qué miraste antes de pedir el balón?',h:'Trabaja escaneos y percepción antes de recibir.',c:'Escaneos'}],Interior:[{t:'¿Cuándo bajaste a apoyar al pivote, provocaste que el rival saltara contigo?',h:'Trabaja descenso en apoyo para provocar saltos.',c:'Descenso en apoyo para provocar saltos'}],Extremo:[{t:'Cuando te doblaron, ¿la soltaste en el momento exacto o esperaste demasiado?',h:'Trabaja fijar y soltar en el momento exacto.',c:'Fijar y soltar al ser doblado'}],Delantero:[{t:'Cuando viniste a recibir, ¿ibas con intención de continuar en profundidad?',h:'Trabaja si vengo es porque voy.',c:'Si vengo es porque voy'}]},DE:{Central:[{t:'¿Cuándo saltaste a presionar, dejaste la espalda cubierta o libre?',h:'Trabaja saltos lejos y equilibrio del segundo central.',c:'Saltos lejos / Equilibrio defensivo'}],Lateral:[{t:'¿Cuándo el extremo recibió, ya tenías el perfil correcto?',h:'Trabaja perfiles y distancia respecto al extremo.',c:'Perfiles defensivos'}],Pivote:[{t:'¿Cuándo tapaste la línea de pase, fue antes de que mirara el rival?',h:'Trabaja tapar línea de pase.',c:'Tapar línea de pase'}],Interior:[{t:'¿Cuándo el rival controló hacia atrás, fuiste agresivo o esperaste?',h:'Trabaja agresividad tras control hacia atrás.',c:'Agresividad tras control hacia atrás'}],Extremo:[{t:'Cuando te superaron, ¿iniciaste el repliegue de inmediato?',h:'Trabaja repliegue inmediato.',c:'Repliegue tras ser superado'}],Delantero:[{t:'¿Cuándo iniciaste la presión, qué línea de pase cerraste?',h:'Trabaja iniciador de presiones.',c:'Iniciador de presiones'}]},TO:{Central:[{t:'Tras recuperar el balón, ¿cuánto tardaste en decidir?',h:'La TO empieza en el momento de recuperación.',c:'Salida rápida tras recuperación'}],Lateral:[{t:'Cuando el equipo recuperó, ¿arrancaste en profundidad o esperaste?',h:'El lateral debe leer si hay espacio a su espalda.',c:'Rupturas a la espalda'}],Pivote:[{t:'Al recuperar el balón, ¿fuiste el primero en ofrecer apoyo?',h:'El pivote es clave en la transición.',c:'Ofrecer pases de seguridad'}],Interior:[{t:'Tras recuperar, ¿atacaste el espacio que se abrió o esperaste?',h:'El interior debe leer el espacio.',c:'Atacar la segunda profundidad'}],Extremo:[{t:'Cuando el equipo recuperó, ¿ya estabas en posición para recibir?',h:'El extremo debe anticipar la recuperación.',c:'Arranque en profundidad'}],Delantero:[{t:'Al recuperar el equipo, ¿arrancaste antes de que te dieran el balón?',h:'El delantero debe arrancar en el momento de recuperación.',c:'Si vengo es porque voy'}]},TD:{Central:[{t:'¿Cuántos pasos tardaste en reaccionar tras la pérdida?',h:'La reacción debe ser inmediata.',c:'Presión inmediata tras pérdida'}],Lateral:[{t:'¿Replegar o presionar? ¿Cómo lo decidiste?',h:'El lateral debe evaluar la distancia al balón.',c:'Volver al bloque defensivo'}],Pivote:[{t:'Al perder el balón, ¿acosaste al poseedor o te reorganizaste?',h:'El pivote es el primer filtro en la TD.',c:'Transición defensiva acoso a poseedor'}],Interior:[{t:'¿Tu trayectoria en la TD cerró el espacio central o lo dejaste libre?',h:'El interior debe cerrar el centro en la TD.',c:'Transición defensiva en diagonal'}],Extremo:[{t:'Al perder el balón, ¿cuánto tardaste en iniciar el repliegue?',h:'El extremo debe ser el primero en replegarse.',c:'Repliegue inmediato'}],Delantero:[{t:'Al perder el balón, ¿iniciaste la presión o te desconectaste?',h:'El delantero inicia la presión en la TD.',c:'Iniciador de presiones'}]},cl:['¿Con qué te quedas de la sesión de hoy?','¿Hay algo que no habías visto antes de verlo en el vídeo?','¿Qué es lo primero que quieres intentar en el próximo entrenamiento?','¿Cómo explicarías a un compañero lo que hemos trabajado hoy?']};
const FCMAP={OF:{l:'Fase ofensiva',bg:'#E1F5EE',cl:'#085041',ic:'↗'},DE:{l:'Fase defensiva',bg:'#E6F1FB',cl:'#0C447C',ic:'↙'},TO:{l:'T. ofensiva',bg:'#FAEEDA',cl:'#633806',ic:'⚡'},TD:{l:'T. defensiva',bg:'#FAECE7',cl:'#993C1D',ic:'⚡'}};

// ─── ESTADO ───
let DB = null;
let state = {
  jugadores:[], objetivos:[], observaciones:[], notasVideo:[],
  microconceptos:[], informesPartido:[],
  currentPage:'inicio', currentJugador:null,
  filtros:{jugadores:{pos:'Todas',q:''},micros:{pos:'',fase:'',q:''},tareas:{pos:'',fase:''}},
  folderState:{},
};

// ─── INIT ───
async function init() {
  try {
    DB = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    await loadAll();
  } catch(e) {
    console.error('Error conectando con Supabase:', e);
    showToast('Error de conexión. Comprueba la configuración.');
  }
}

async function loadAll() {
  const [j,o,obs,n,m,inf,cl] = await Promise.all([
    DB.from('jugadores').select('*').order('created_at',{ascending:false}),
    DB.from('objetivos').select('*').order('created_at',{ascending:false}),
    DB.from('observaciones').select('*').order('fecha',{ascending:false}),
    DB.from('notas_video').select('*').order('fecha',{ascending:false}),
    DB.from('microconceptos').select('*').order('titulo'),
    DB.from('informes_partido').select('*').order('fecha',{ascending:false}),
    DB.from('clips_informe').select('*').order('created_at',{ascending:false}),
  ]);
  state.jugadores = j.data||[];
  state.objetivos = o.data||[];
  state.observaciones = obs.data||[];
  state.notasVideo = n.data||[];
  state.microconceptos = m.data||[];
  state.informesPartido = inf.data||[];
  state.clipsInforme = cl.data||[];
  const cjRes = await DB.from('clips_jugador').select('*').order('created_at');
  state.clipsJugador = cjRes.data||[];
  const plRes = await DB.from('planes_partido').select('*').order('created_at',{ascending:false});
  state.planesPartido = plRes.data||[];
  // Cargar clips de microconceptos
  try {
    const { data: mcData } = await DB.from('clips_microconcepto').select('*').order('created_at');
    state.micClips = mcData || [];
  } catch(e) { state.micClips = []; }
  await loadEventos();
  if(state.microconceptos.length===0) await seedMicros();
  renderPage(state.currentPage);
  hideLoading();
}

async function seedMicros() {
  const inserts = MICROS_BASE.map(b=>({titulo:b[2],descripcion:'',posicion:b[0],fase:b[1],referencia:'',video_url:''}));
  const {data} = await DB.from('microconceptos').insert(inserts).select();
  state.microconceptos = data||[];
}

// ─── NAV ───
function goTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.page===page));
  document.querySelectorAll('.page').forEach(el=>el.classList.toggle('active',el.id==='page-'+page));
  renderPage(page);
}

function renderPage(page) {
  if(page==='inicio') renderInicio();
  else if(page==='jugadores') renderJugadores();
  else if(page==='micros') renderMicros();
  else if(page==='tareas') renderTareas();
  else if(page==='calendario') { renderCalendario(); }
  else if(page==='evolucion') fillEvSel();
  else if(page==='sesion') fillReunSel();
  else if(page==='ia') {
    const sel = document.getElementById('ia-jug');
    if(sel && state.jugadores.length) {
      sel.innerHTML = '<option value="">Sin jugador específico</option>' +
        state.jugadores.map(j => '<option value="'+j.id+'">'+j.nombre+' · '+j.posicion+'</option>').join('');
    }
  }
}

// ─── HELPERS ───
function initials(n){return n.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();}
function fmtDate(d){if(!d)return '';const p=d.split('-');return`${p[2]}/${p[1]}/${p[0]}`;}
function getFaseBadge(f){const fc=FASES.find(x=>x.id===f);return fc?`<span class="badge ${fc.cls}">${fc.label}</span>`:'';}
function getDriveEmbed(url){
  if(!url)return null;
  if(url.includes('supabase.co/storage'))return url;
  const m=url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)||url.match(/id=([a-zA-Z0-9_-]+)/);
  return m?`https://drive.google.com/file/d/${m[1]}/preview`:null;
}
function renderVideoPlayer(url){
  if(!url)return`<div class="video-placeholder"><span style="font-size:22px;">▶</span><span>Sin clip adjunto todavía</span></div>`;
  if(url.includes('supabase.co/storage'))return`<video controls style="width:100%;border-radius:8px;margin-bottom:1.25rem;max-height:300px;background:#000;" src="${url}"></video>`;
  const eu=getDriveEmbed(url);
  return eu?`<div class="video-frame"><iframe src="${eu}" allowfullscreen allow="autoplay"></iframe></div>`:`<div class="video-placeholder"><span style="font-size:22px;">▶</span><span>Enlace no válido</span></div>`;
}
function ssBadge(s){if(!s)return{l:'Sin programar',col:'var(--text3)'};const t=new Date();t.setHours(0,0,0,0);if(new Date(s)<t)return{l:'Pendiente revisión',col:'#E07B00'};return{l:`Sesión: ${fmtDate(s)}`,col:'#1D9E75'};}
function showToast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),3000);}
function hideLoading(){const el=document.getElementById('loading-overlay');if(el)el.style.display='none';}
function openModal(id){document.getElementById(id).style.display='flex';}
function closeModal(id){document.getElementById(id).style.display='none';const v=document.querySelector(`#${id} .video-frame`)||document.querySelector(`#${id} #dmv`);if(v)v.innerHTML='';}
function getObjJugador(jid){return state.objetivos.filter(o=>o.jugador_id===jid);}
function getObsJugador(jid){return state.observaciones.filter(o=>o.jugador_id===jid);}
function getNotasJugador(jid){return state.notasVideo.filter(n=>n.jugador_id===jid);}
function getInformesJugador(jid){return state.informesPartido.filter(i=>i.jugador_id===jid).sort((a,b)=>b.fecha.localeCompare(a.fecha));}

// ─── INICIO ───
function renderInicio(){
  const now=new Date();const h=now.getHours();
  document.getElementById('greeting').textContent=`${h<14?'Buenos días':h<21?'Buenas tardes':'Buenas noches'}, Omar.`;
  document.getElementById('hdate').textContent=now.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
  document.getElementById('stat-jugadores').textContent=state.jugadores.length;
  document.getElementById('stat-objetivos').textContent=state.objetivos.length;
  document.getElementById('stat-micros').textContent=state.microconceptos.length;
  document.getElementById('stat-obs').textContent=state.observaciones.length;

  // Sesiones pendientes — diseño mejorado
  const pend=state.jugadores.filter(j=>j.sesion_fecha).sort((a,b)=>a.sesion_fecha.localeCompare(b.sesion_fecha));
  document.getElementById('hpend').innerHTML=pend.length?pend.map(j=>{
    const ss=ssBadge(j.sesion_fecha);
    const pc=AV_COLORS[j.posicion]||{bg:'#eee',color:'#666'};
    const inf=getInformesJugador(j.id)[0];
    const nota=inf?parseFloat(inf.nota_decimal)||0:0;
    const nc=nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
    return`<div onclick="openJug('${j.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:var(--bg);border:0.5px solid var(--border);margin-bottom:7px;cursor:pointer;transition:border-color .15s;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div class="avatar" style="width:36px;height:36px;font-size:12px;font-weight:700;background:${pc.bg};color:${pc.color};flex-shrink:0;">${initials(j.nombre)}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${j.nombre}</div>
        <div style="font-size:10px;color:var(--text2);">${j.posicion}${j.equipo?' · '+j.equipo:''}</div>
      </div>
      ${nota?`<div style="width:32px;height:32px;border-radius:50%;background:${nc}15;color:${nc};border:1.5px solid ${nc}40;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">${nota.toFixed(1)}</div>`:''}
      <span style="font-size:9px;padding:3px 8px;border-radius:99px;background:${ss.col}20;color:${ss.col};font-weight:700;white-space:nowrap;flex-shrink:0;">${ss.l}</span>
    </div>`;
  }).join(''):'<div style="font-size:12px;color:var(--text3);padding:1.5rem;text-align:center;background:var(--bg2);border-radius:10px;">No hay sesiones programadas.</div>';

  // Últimos informes — nuevo bloque
  const hInf=document.getElementById('h-informes');
  if(hInf){
    const allInf=[...state.informesPartido].sort((a,b)=>b.fecha.localeCompare(a.fecha)).slice(0,3);
    hInf.innerHTML=allInf.length?allInf.map(inf=>{
      const nota=parseFloat(inf.nota_decimal)||0;
      const nc=nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
      const jug=state.jugadores.find(x=>x.id===inf.jugador_id);
      return`<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:var(--bg);border:0.5px solid var(--border);margin-bottom:7px;">
        ${nota?`<div style="width:36px;height:36px;border-radius:50%;background:${nc}12;color:${nc};border:1.5px solid ${nc}40;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:13px;font-weight:800;line-height:1;">${nota.toFixed(1)}</span><span style="font-size:7px;color:${nc};letter-spacing:.04em;">/10</span></div>`:''}
        <div style="flex:1;min-width:0;">
          <div style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${jug?jug.nombre:'Jugador'} · ${inf.partido||'Partido'}</div>
          <div style="font-size:10px;color:var(--text2);">${fmtDate(inf.fecha)}${inf.resultado?' · '+inf.resultado:''}</div>
        </div>
        <button onclick="generarInformeVisual('${inf.jugador_id}','${inf.id}')" style="background:#1a1a2e;color:#fff;border:none;border-radius:6px;padding:4px 10px;font-size:10px;cursor:pointer;font-weight:600;flex-shrink:0;">PDF</button>
      </div>`;
    }).join(''):'<div style="font-size:12px;color:var(--text3);padding:1.5rem;text-align:center;background:var(--bg2);border-radius:10px;">Sin informes todavía.</div>';
  }
}

// ─── JUGADORES ───
function renderJugadores(){
  const q=(document.getElementById('jq')?.value||'').toLowerCase();
  const fp=document.getElementById('jfp')?.value||'';
  document.getElementById('jptabs').innerHTML=['Todas',...POSICIONES].map(p=>`<button class="pos-pill${state.filtros.jugadores.pos===p?' active':''}" onclick="setJP('${p}')">${p}</button>`).join('');
  let f=state.jugadores.filter(j=>(!q||j.nombre.toLowerCase().includes(q)||(j.equipo||'').toLowerCase().includes(q))&&(state.filtros.jugadores.pos==='Todas'||j.posicion===state.filtros.jugadores.pos));
  document.getElementById('jcb').textContent=`${f.length} jugador${f.length!==1?'es':''}`;
  const g=document.getElementById('jgrid');
  if(!f.length){g.innerHTML='<div class="empty">No hay jugadores. Añade el primero.</div>';return;}
  g.innerHTML=f.map(j=>{
    const pc=AV_COLORS[j.posicion]||{bg:'#eee',color:'#666'};
    const ss=ssBadge(j.sesion_fecha);
    const objs=getObjJugador(j.id);
    const informes=getInformesJugador(j.id);
    const ultimoInf=informes[0];
    const nota=ultimoInf?parseFloat(ultimoInf.nota_decimal)||0:0;
    const nc=nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
    const notaPct=Math.round((nota/10)*100);
    return`<div class="card" onclick="openJug('${j.id}')" style="position:relative;overflow:hidden;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="position:relative;flex-shrink:0;">
          ${j.foto_jugador?`<img src="${j.foto_jugador}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:top;" onerror="this.style.display='none'">`:''}
          <div class="avatar" style="width:40px;height:40px;font-size:13px;font-weight:700;background:${pc.bg};color:${pc.color};${j.foto_jugador?'display:none;':''}">${initials(j.nombre)}</div>
          ${j.logo_club?`<img src="${j.logo_club}" style="position:absolute;bottom:-2px;right:-2px;width:16px;height:16px;object-fit:contain;border-radius:3px;background:#fff;" onerror="this.style.display='none'">`:''}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${j.nombre}</div>
          <div style="font-size:10px;color:var(--text2);">${j.posicion}${j.equipo?' · '+j.equipo:''}${j.categoria?' · '+j.categoria:''}</div>
        </div>
        ${nota?`<div style="width:34px;height:34px;border-radius:50%;background:${nc}12;color:${nc};border:1.5px solid ${nc}40;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:11px;font-weight:800;line-height:1;">${nota.toFixed(1)}</span></div>`:''}
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px;">
        ${objs.length?`<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:#EEEDFE;color:#3C3489;font-weight:700;">${objs.length} obj.</span>`:''}
        ${informes.length?`<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:var(--bg2);color:var(--text2);">${informes.length} informe${informes.length!==1?'s':''}</span>`:''}
        <span style="font-size:9px;padding:2px 7px;border-radius:99px;background:${ss.col}18;color:${ss.col};font-weight:600;">${ss.l}</span>
      </div>
      ${nota?`<div style="height:3px;background:var(--border);border-radius:99px;overflow:hidden;margin-bottom:8px;"><div style="width:${notaPct}%;height:3px;background:${nc};border-radius:99px;transition:width .4s;"></div></div>`:'<div style="height:3px;margin-bottom:8px;"></div>'}
      <button onclick="event.stopPropagation();copiarURLJugador('${j.id}')" style="background:none;border:0.5px solid rgba(124,111,240,.35);border-radius:99px;padding:4px 10px;font-size:10px;cursor:pointer;color:#7C6FF0;width:100%;font-family:inherit;transition:background .12s;" onmouseover="this.style.background='rgba(124,111,240,.08)'" onmouseout="this.style.background='none'">🔗 Copiar enlace del jugador</button>
    </div>`;
  }).join('');
}
function setJP(p){state.filtros.jugadores.pos=p;renderJugadores();}

async function saveJugador(){
  const nombre=document.getElementById('npn').value.trim();if(!nombre){alert('Nombre obligatorio');return;}
  let logo_club='';
  const lf=document.getElementById('j-logo-file');
  if(lf&&lf.files&&lf.files[0]){
    const reader=new FileReader();
    logo_club=await new Promise(res=>{reader.onload=e=>res(e.target.result);reader.readAsDataURL(lf.files[0]);});
  }
  let foto_jugador = '';
  const ff2=document.getElementById('j-foto-file');
  if(ff2&&ff2.files&&ff2.files[0]){
    const r2=new FileReader();
    foto_jugador=await new Promise(res=>{r2.onload=e=>res(e.target.result);r2.readAsDataURL(ff2.files[0]);});
  }
  const data={nombre,posicion:document.getElementById('npp').value,equipo:document.getElementById('npe').value.trim(),categoria:document.getElementById('npc').value,sesion_fecha:document.getElementById('nps').value||null,logo_club,foto_jugador,email_jugador:document.getElementById('npe-mail')?.value.trim()||''};
  const{data:res,error}=await DB.from('jugadores').insert(data).select();
  if(error){showToast('Error al guardar');return;}
  state.jugadores.unshift(res[0]);
  closeModal('mnj');renderJugadores();renderInicio();showToast('Jugador añadido');
}

function openJug(id){
  state.currentJugador=id;
  const j=state.jugadores.find(x=>x.id===id);if(!j)return;
  const pc=AV_COLORS[j.posicion]||{bg:'#eee',color:'#666'};
  const av=document.getElementById('djav');
  av.textContent=initials(j.nombre);
  av.style.cssText=`width:44px;height:44px;font-size:14px;font-weight:500;border-radius:50%;background:${pc.bg};color:${pc.color};display:flex;align-items:center;justify-content:center;`;
  document.getElementById('djn').textContent=j.nombre;
  document.getElementById('djm').textContent=`${j.posicion} · ${j.equipo||''} · ${j.categoria||''}`;
  document.getElementById('djdel').onclick=()=>{if(confirm('¿Eliminar jugador?')){state.jugadores=state.jugadores.filter(x=>x.id!==id);state.objetivos=state.objetivos.filter(o=>o.jugador_id!==id);state.observaciones=state.observaciones.filter(o=>o.jugador_id!==id);state.notasVideo=state.notasVideo.filter(n=>n.jugador_id!==id);DB.from('jugadores').delete().eq('id',id);closeModal('mdj');renderJugadores();renderInicio();}};
  switchDT('obj');openModal('mdj');
}

function switchDT(tab){
  document.querySelectorAll('#mdj .dtab').forEach((el,i)=>el.classList.toggle('active',['obj','clips','informe','historial','tareas','plan','seguimiento','analisis'][i]===tab));
  renderDT(tab);
}

function renderDT(tab){
  const id=state.currentJugador;const j=state.jugadores.find(x=>x.id===id);
  const body=document.getElementById('djbody');if(!j)return;
  const av=AV_COLORS[j.posicion]||{bg:'#1a2040',color:'#8090d0'};

  // ── ESTILOS COMUNES ──
  const SI='width:100%;height:36px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box;';
  const TA='width:100%;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:10px;font-size:12px;background:var(--bg);color:var(--text);resize:vertical;font-family:inherit;outline:none;line-height:1.6;box-sizing:border-box;';
  const CARD='background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:.875rem;';
  const SEC_TITLE='font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.75rem;';

  // ─── TAB OBJETIVOS ───
  if(tab==='obj'){
    const objs=getObjJugador(id);
    const FASE_CFG={OF:{dot:'#1D9E75',bg:'#E1F5EE',color:'#085041',cls:'badge-of'},DE:{dot:'#378ADD',bg:'#E6F1FB',color:'#0C447C',cls:'badge-de'},TO:{dot:'#E07B00',bg:'#FAEEDA',color:'#633806',cls:'badge-to'},TD:{dot:'#D85A30',bg:'#FAECE7',color:'#993C1D',cls:'badge-td'},GEN:{dot:'#7C6FF0',bg:'#EEEDFE',color:'#3C3489',cls:''}};
    const objsHtml = objs.length ? objs.map(o=>{
      const fc=FASE_CFG[o.fase]||FASE_CFG.GEN;
      return '<div style="background:var(--bg);border:0.5px solid '+fc.dot+'30;border-left:3px solid '+fc.dot+';border-radius:var(--radius-sm);padding:.875rem;margin-bottom:6px;display:flex;align-items:flex-start;gap:10px;">'+
        '<div style="flex:1;"><div style="font-size:13px;margin-bottom:5px;line-height:1.4;">'+o.texto+'</div>'+
        '<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:'+fc.bg+';color:'+fc.color+';">'+(o.fase==='OF'?'Fase ofensiva':o.fase==='DE'?'Fase defensiva':o.fase==='TO'?'T. ofensiva':o.fase==='TD'?'T. defensiva':'General')+'</span></div>'+
        '<button onclick="delObj(\"'+o.id+'\")" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;padding:0;line-height:1;">×</button></div>';
    }).join('') :
    '<div style="text-align:center;padding:2rem;color:var(--text3);font-size:13px;">Sin objetivos todavía.<br><span style="font-size:11px;">Añade el primero arriba.</span></div>';

    const objsCountHtml = objs.length ? '<div style="'+SEC_TITLE+'margin-top:.5rem;">'+objs.length+' objetivo'+(objs.length!==1?'s':'')+' activos</div>' : '';

    body.innerHTML = '<div style="'+CARD+'">'+
      '<div style="'+SEC_TITLE+'">Selecciona microconcepto a mejorar</div>'+
      '<div style="font-size:11px;color:var(--text2);margin-bottom:.75rem;">Toca el microconcepto para añadirlo como objetivo</div>'+
      '<div id="micro-obj-selector" style="max-height:200px;overflow-y:auto;margin-bottom:.875rem;padding-right:4px;">Cargando...</div>'+
      '<div style="border-top:0.5px solid var(--border);padding-top:.875rem;">'+
        '<div style="'+SEC_TITLE+'">O escribe un objetivo personalizado</div>'+
        '<textarea id="obt" placeholder="Escribe el objetivo..." style="'+TA+'height:50px;margin-bottom:8px;"></textarea>'+
      '</div>'+
      '<select id="obf" style="'+SI+'margin-bottom:8px;">'+
        '<option value="OF">⬆ Fase ofensiva</option>'+
        '<option value="DE">⬇ Fase defensiva</option>'+
        '<option value="TO">⚡ Transición ofensiva</option>'+
        '<option value="TD">🔄 Transición defensiva</option>'+
        '<option value="GEN">◎ General</option>'+
      '</select>'+
      '<button class="btn" style="width:100%;" onclick="addObj()">+ Añadir objetivo</button>'+
    '</div>'+objsCountHtml+objsHtml;
    setTimeout(()=>renderObjMicroSelector(id), 50);
  }

  // ─── TAB PARTIDOS ───
  if(tab==='partidos'){
    const obs=getObsJugador(id);
    const informes=getInformesJugador(id);
    const allPartidos=[...obs.map(o=>({...o,_tipo:'rapido'})),...informes.map(i=>({...i,_tipo:'completo'}))].sort((a,b)=>b.fecha.localeCompare(a.fecha));
    body.innerHTML=`
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Registrar partido</div>
        <input id="obpa" placeholder="Nombre del partido (vs Alzira J8)" style="${SI}margin-bottom:8px;">
        <input type="date" id="obs-fecha" value="${new Date().toISOString().slice(0,10)}" style="${SI}margin-bottom:10px;">
        <div style="display:flex;gap:6px;margin-bottom:10px;">
          <button id="modo-rapido-btn" onclick="setModoPartido('rapido')" class="btn" style="flex:1;font-size:11px;height:32px;">⚡ Nota rápida</button>
          <button id="modo-completo-btn" onclick="setModoPartido('completo')" class="btn-outline" style="flex:1;font-size:11px;height:32px;">📊 Informe completo</button>
        </div>
        <div id="modo-rapido">
          <textarea id="obta" placeholder="Qué observaste en este partido..." style="${TA}height:80px;margin-bottom:8px;"></textarea>
          <button class="btn" style="width:100%;" onclick="addObs()">Guardar nota rápida</button>
        </div>
        <div id="modo-completo" style="display:none;">
          <div style="font-size:12px;color:var(--text2);margin-bottom:8px;line-height:1.5;">El informe completo incluye valoración con estrellas por fase, microconceptos y nota global.</div>
          <button class="btn" style="width:100%;background:linear-gradient(135deg,#1D9E75,#378ADD);" onclick="abrirInformeCompleto('${id}')">Abrir informe completo →</button>
        </div>
      </div>
      <div style="${SEC_TITLE}margin-top:.5rem;">${allPartidos.length} partido${allPartidos.length!==1?'s':''} registrados</div>
      ${allPartidos.length ? allPartidos.map(p=>{
        if(p._tipo==='rapido'){return`<div style="${CARD}padding:.875rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;">
            <div><div style="font-size:13px;font-weight:500;">${p.partido}</div><div style="font-size:10px;color:var(--text3);margin-top:1px;">${fmtDate(p.fecha)} · <span style="background:var(--bg2);padding:1px 7px;border-radius:99px;">Nota rápida</span></div></div>
            <button onclick="delObs('${p.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;">×</button>
          </div>
          <div style="font-size:12px;color:var(--text2);line-height:1.6;">${p.texto}</div>
        </div>`;}
        const nota=parseFloat(p.nota_decimal)||0;
        const nc=nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
        const clips=getClipsInforme(p.id);
        return`<div style="${CARD}padding:.875rem;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            ${nota?`<div style="width:38px;height:38px;border-radius:50%;background:${nc}18;color:${nc};border:1.5px solid ${nc}40;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">${nota.toFixed(1)}</div>`:''}
            <div style="flex:1;min-width:100px;"><div style="font-size:13px;font-weight:500;">${p.partido}</div><div style="font-size:10px;color:var(--text3);margin-top:1px;">${fmtDate(p.fecha)}${p.rival?' · vs '+p.rival:''}${p.resultado?' · '+p.resultado:''} · <span style="background:#EEEDFE;color:#3C3489;padding:1px 7px;border-radius:99px;">Informe</span></div></div>
            <div style="display:flex;gap:5px;flex-wrap:wrap;">
              <button onclick="verInforme('${p.id}')" class="btn-outline" style="font-size:10px;height:26px;padding:0 8px;">Ver</button>
              <button onclick="abrirGestorClips('${p.id}','${id}')" style="background:rgba(124,111,240,.12);border:0.5px solid rgba(124,111,240,.3);border-radius:var(--radius-sm);padding:0 8px;height:26px;font-size:10px;cursor:pointer;color:#7C6FF0;">▶${clips.length?' ('+clips.length+')':''}</button>
              <button onclick="exportarInformePDF('${p.id}')" style="background:rgba(29,158,117,.12);border:0.5px solid rgba(29,158,117,.3);border-radius:var(--radius-sm);padding:0 8px;height:26px;font-size:10px;cursor:pointer;color:#1D9E75;">PDF</button>
              <button onclick="deleteInforme('${p.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;">×</button>
            </div>
          </div>
          ${p.mcb?`<div style="font-size:11px;color:var(--text2);margin-top:7px;padding-top:7px;border-top:0.5px solid var(--border);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.mcb}</div>`:''}
        </div>`;
      }).join('') : `<div style="text-align:center;padding:2rem;color:var(--text3);font-size:13px;">Sin partidos todavía.</div>`}`;
  }

  // ─── TAB SESIÓN VÍDEO ───
  if(tab==='sesion'){
    const notas=getNotasJugador(id);
    const ultimaNota = notas[0];
    body.innerHTML=`
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Próxima sesión</div>
        <input type="date" id="vidf" value="${j.sesion_fecha||''}" style="${SI}margin-bottom:8px;">
        <button class="btn" style="width:100%;" onclick="setSes()">Guardar fecha</button>
      </div>
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Generar guión de sesión</div>
        <div style="font-size:12px;color:var(--text2);margin-bottom:10px;line-height:1.5;">Genera preguntas adaptadas a la posición y microconceptos de ${j.nombre}.</div>
        <select id="ses-fase-jug" style="${SI}margin-bottom:8px;">
          <option value="AMBAS">Ofensiva y defensiva</option>
          <option value="OF">Solo ofensiva</option>
          <option value="DE">Solo defensiva</option>
          <option value="TO">T. ofensiva</option>
          <option value="TD">T. defensiva</option>
        </select>
        <button class="btn" style="width:100%;background:linear-gradient(135deg,#7C6FF0,#5548d4);" onclick="genSesJugModal('${id}')">▶ Generar guión</button>
      </div>
      ${ultimaNota?`<div style="${CARD}background:linear-gradient(135deg,rgba(29,158,117,.06),rgba(55,138,221,.04));border-left:3px solid #1D9E75;">
        <div style="${SEC_TITLE}color:#085041;">Última sesión · ${fmtDate(ultimaNota.fecha)}</div>
        <div style="font-size:13px;line-height:1.7;">${ultimaNota.texto}</div>
      </div>`:''}
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Nueva nota de sesión</div>
        <textarea id="nota" placeholder="Qué se trabajó, cómo reaccionó, qué quedó pendiente, qué preguntó el jugador..." style="${TA}height:90px;margin-bottom:8px;"></textarea>
        <button class="btn" style="width:100%;" onclick="addNota()">Guardar nota</button>
      </div>
      ${notas.length>1?`<div style="${SEC_TITLE}margin-top:.5rem;">Historial de sesiones</div>
        ${notas.slice(1).map(n=>`<div style="${CARD}padding:.875rem;"><div style="font-size:10px;color:var(--text3);margin-bottom:5px;">${fmtDate(n.fecha)}</div><div style="font-size:12px;line-height:1.6;color:var(--text2);">${n.texto}</div></div>`).join('')}`:''}`;

    // Mostrar guión si hay uno pendiente
    if(window._guionPendiente && window._guionPendienteJug===id) {
      const guionDiv=document.createElement('div');
      guionDiv.innerHTML=window._guionPendiente;
      body.appendChild(guionDiv);
    }
  }

  // ─── TAB CLIPS ───
  if(tab==='clips'){
    const clipsJug = (state.clipsJugador||[]).filter(c => String(c.jugador_id) === String(id));
    const TIPO_CFG = {
      mejorar:   {bg:'#FAECE7', color:'#993C1D', label:'△ A mejorar',      desc:'Aspectos que necesita trabajar'},
      positivo:  {bg:'#E1F5EE', color:'#085041', label:'✓ Puntos fuertes', desc:'Lo que hace bien'},
      referencia:{bg:'#FAEEDA', color:'#633806', label:'★ Referencias élite', desc:'Ejemplos de jugadores profesionales'},
    };

    let html = '<div style="'+CARD+'border-left:3px solid #1D9E75;">'+
      '<div style="font-size:12px;font-weight:700;margin-bottom:4px;">Añadir clip al jugador</div>'+
      '<div style="font-size:11px;color:var(--text2);margin-bottom:.875rem;">Los clips aparecen directamente en la app del jugador</div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">'+
        '<div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Categoría</label>'+
        '<select id="clip-jug-tipo" style="'+SI+'">'+
          '<option value="mejorar">△ A mejorar</option>'+
          '<option value="positivo">✓ Punto fuerte</option>'+
          '<option value="referencia">★ Referencia élite</option>'+
        '</select></div>'+
        '<div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Título</label>'+
        '<input type="text" id="clip-jug-titulo" placeholder="Ej: Anticipación vs Alzira" style="'+SI+'"></div>'+
      '</div>'+
      '<input type="file" id="clip-jug-file" accept="video/*" style="width:100%;font-size:11px;margin-bottom:6px;">'+
      '<div style="font-size:10px;color:var(--text3);margin-bottom:5px;">O enlace de Google Drive:</div>'+
      '<input type="text" id="clip-jug-url" placeholder="https://drive.google.com/..." style="'+SI+'margin-bottom:8px;">'+
      '<button class="btn" style="width:100%;" onclick="subirClipJugadorDirecto(\''+id+'\')">↑ Subir clip</button>'+
    '</div>';

    // Mostrar por categoría
    const tipos = ['mejorar','positivo','referencia'];
    let hayClips = false;
    tipos.forEach(tipo => {
      const clips = clipsJug.filter(c => c.tipo === tipo);
      if(!clips.length) return;
      hayClips = true;
      const tc = TIPO_CFG[tipo];
      html += '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:'+tc.color+';margin-bottom:.5rem;margin-top:1rem;display:flex;align-items:center;gap:6px;">'+
        '<div style="width:3px;height:14px;border-radius:2px;background:'+tc.color+';"></div>'+
        tc.label+' ('+clips.length+')'+
      '</div>';
      clips.forEach(c => {
        let videoHtml = '';
        if(c.url) {
          const m2 = c.url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || c.url.match(/id=([a-zA-Z0-9_-]+)/);
          if(m2) videoHtml = '<div style="width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;"><iframe src="https://drive.google.com/file/d/'+m2[1]+'/preview" width="100%" height="100%" style="border:none;" allowfullscreen allow="autoplay"></iframe></div>';
          else if(c.url.includes('supabase.co')) videoHtml = '<video controls playsinline style="width:100%;border-radius:8px;max-height:200px;background:#000;" src="'+c.url+'"></video>';
          else videoHtml = '<video controls playsinline style="width:100%;border-radius:8px;max-height:200px;background:#000;" src="'+c.url+'"></video>';
        }
        html += '<div style="'+CARD+'padding:.875rem;margin-bottom:8px;border-left:3px solid '+tc.color+'30;">'+
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">'+
            '<div style="display:flex;align-items:center;gap:7px;">'+
              '<span style="font-size:9px;padding:2px 8px;border-radius:99px;background:'+tc.bg+';color:'+tc.color+';font-weight:700;">'+tc.label+'</span>'+
              (c.titulo?'<span style="font-size:12px;font-weight:600;">'+c.titulo+'</span>':'')+ 
            '</div>'+
            '<button onclick="eliminarClipJugadorDirecto(\''+c.id+'\',\''+id+'\')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:18px;line-height:1;">×</button>'+
          '</div>'+
          videoHtml+
        '</div>';
      });
    });

    if(!hayClips) {
      html += '<div style="text-align:center;padding:2.5rem 1rem;color:var(--text3);">'+
        '<div style="font-size:32px;margin-bottom:10px;opacity:.4;">▶</div>'+
        '<div style="font-size:13px;font-weight:600;margin-bottom:5px;">Sin clips todavía</div>'+
        '<div style="font-size:11px;line-height:1.6;">Sube clips de los 3 tipos.<br>Aparecerán al instante en la app del jugador.</div>'+
      '</div>';
    }

    body.innerHTML = html;
    return;
  }


  // ─── TAB INFORME ───
  if(tab==='informe'){
    const informes=getInformesJugador(id);
    const objs=getObjJugador(id);
    const micList=state.microconceptos.filter(m=>m.posicion===j.posicion);
    const micOptions=micList.map(m=>`<option value="${m.titulo}">${m.titulo}</option>`).join('');
    const faseHdr=(code,label,color,bg)=>`<div style="background:${bg};color:${color};font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;display:inline-block;margin-bottom:.75rem;">${code} · ${label}</div>`;

    function starsRow(fase,count){return Array.from({length:count},(_,i)=>`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:12px;flex:1;color:var(--text2);">${ASPECTOS[fase][i]}</div>
        <div style="display:flex;gap:2px;">${[1,2,3,4,5].map(s=>`<span onclick="setStar('${fase}',${i},${s})" data-fase="${fase}" data-idx="${i}" data-val="${s}" style="font-size:22px;cursor:pointer;color:#ddd;transition:color .1s;" class="star">★</span>`).join('')}</div>
      </div>`).join('');}

    body.innerHTML=`
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Datos del partido</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
          <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Partido *</label><input id="inf-partido" placeholder="vs Alzira J8" style="${SI}"></div>
          <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Fecha</label><input type="date" id="inf-fecha" value="${new Date().toISOString().slice(0,10)}" style="${SI}"></div>
          <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Rival</label><input id="inf-rival" placeholder="Rival" style="${SI}"></div>
          <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Resultado</label><input id="inf-resultado" placeholder="2-1" style="${SI}"></div>
        </div>
        <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.875rem;display:flex;align-items:center;gap:14px;margin-bottom:12px;">
          <div style="width:52px;height:52px;border-radius:50%;background:var(--bg);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span id="nota-global" style="font-size:20px;font-weight:700;color:var(--text3);">—</span>
          </div>
          <div><div style="font-size:11px;font-weight:600;color:var(--text2);">Nota global automática</div><div style="font-size:10px;color:var(--text3);margin-top:1px;">Se calcula con la media de tus estrellas</div></div>
        </div>
      </div>

      ${[{k:'MCB',l:'Momento con balón',c:'#1D9E75',bg:'#E1F5EE',n:7},{k:'MSB',l:'Momento sin balón',c:'#378ADD',bg:'#E6F1FB',n:7},{k:'TDA',l:'Transición def→ata',c:'#E07B00',bg:'#FAEEDA',n:5},{k:'TAD',l:'Transición ata→def',c:'#D85A30',bg:'#FAECE7',n:5}].map(f=>`
        <div style="background:var(--bg);border:0.5px solid ${f.c}30;border-radius:var(--radius);padding:1rem;margin-bottom:.875rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem;">
            ${faseHdr(f.k,f.l,f.c,f.bg+'80')}
            <span style="font-size:12px;font-weight:600;color:${f.c};" id="avg-${f.k}"></span>
          </div>
          ${starsRow(f.k,f.n)}
          <textarea id="inf-${f.k.toLowerCase()}" placeholder="Observaciones sobre ${f.l}..." style="${TA}height:60px;margin-top:8px;"></textarea>
        </div>`).join('')}

      ${objs.length?`<div style="${CARD}">
        <div style="${SEC_TITLE}">Objetivos del jugador</div>
        ${objs.map((o,i)=>{const fi=FASES.find(f=>f.id===o.fase);return`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid var(--border);flex-wrap:wrap;gap:6px;">
            <div style="flex:1;min-width:120px;"><div style="font-size:12px;">${o.texto}</div>${fi?`<span class="badge ${fi.cls}" style="margin-top:3px;">${fi.label}</span>`:''}</div>
            <div style="display:flex;gap:2px;">${[1,2,3,4,5].map(s=>`<span onclick="setStar('OBJ',${i},${s})" data-fase="OBJ" data-idx="${i}" data-val="${s}" style="font-size:22px;cursor:pointer;color:#ddd;" class="star">★</span>`).join('')}</div>
          </div>`;}).join('')}
      </div>`:''}

      <div style="${CARD}">
        <div style="${SEC_TITLE}">Microconceptos observados</div>
        <select id="inf-mic-sel" onchange="addMicTag()" style="${SI}margin-bottom:8px;"><option value="">Selecciona microconcepto...</option>${micOptions}</select>
        <div id="inf-mic-tags" style="display:flex;flex-wrap:wrap;gap:5px;min-height:20px;"></div>
      </div>
      <div style="${CARD}">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
          <div>
            <div style="font-size:10px;font-weight:700;color:#3fb950;margin-bottom:4px;">✓ Fortalezas del jugador</div>
            <textarea id="inf-positivos" rows="3" placeholder="Lo que hizo bien en este partido..." style="${TA}border-color:rgba(63,185,80,0.3);"></textarea>
          </div>
          <div>
            <div style="font-size:10px;font-weight:700;color:#f85149;margin-bottom:4px;">△ Aspectos a mejorar</div>
            <textarea id="inf-mejoras" rows="3" placeholder="Lo que debe trabajar..." style="${TA}border-color:rgba(248,81,73,0.3);"></textarea>
          </div>
        </div>
      </div>
      <div style="${CARD}">
        <div style="${SEC_TITLE}">Notas privadas</div>
        <textarea id="inf-notas" placeholder="Contexto del partido, condiciones, observaciones extra..." style="${TA}height:70px;"></textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:.5rem;">
        <button class="btn" style="height:44px;font-size:13px;" onclick="saveInforme()">Guardar informe</button>
        <button onclick="generarInformeVisual('${id}')" style="height:44px;font-size:13px;background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;border:1px solid rgba(255,255,255,.15);border-radius:var(--radius-sm);cursor:pointer;font-family:inherit;font-weight:600;letter-spacing:.02em;">📄 Generar informe PDF</button>
      </div>

      ${informes.length?`<div style="${SEC_TITLE}margin-top:1.5rem;">${informes.length} informe${informes.length!==1?'s':''} anteriores</div>
        ${informes.map(inf=>{const nota=parseFloat(inf.nota_decimal)||0;const nc=nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';const clips=getClipsInforme(inf.id);return`
          <div style="${CARD}padding:.875rem;">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
              ${nota?`<div style="width:38px;height:38px;border-radius:50%;background:${nc}18;color:${nc};border:1.5px solid ${nc}40;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">${nota.toFixed(1)}</div>`:''}
              <div style="flex:1;"><div style="font-size:13px;font-weight:500;">${inf.partido}</div><div style="font-size:10px;color:var(--text3);">${fmtDate(inf.fecha)}${inf.rival?' · vs '+inf.rival:''}${inf.resultado?' · '+inf.resultado:''}</div></div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;">
                <button onclick="verInforme('${inf.id}')" class="btn-outline" style="font-size:10px;height:26px;padding:0 8px;">Ver</button>
                <button onclick="generarInformeVisual('${id}','${inf.id}')" style="background:rgba(26,26,46,.8);color:#a0c4ff;border:0.5px solid rgba(160,196,255,.3);border-radius:var(--radius-sm);padding:0 8px;height:26px;font-size:10px;cursor:pointer;">📄 PDF</button>
                <button onclick="abrirGestorClips('${inf.id}','${id}')" style="background:rgba(124,111,240,.12);border:0.5px solid rgba(124,111,240,.3);border-radius:var(--radius-sm);padding:0 8px;height:26px;font-size:10px;cursor:pointer;color:#7C6FF0;">▶${clips.length?' ('+clips.length+')':''}</button>
                <button onclick="exportarInformePDF('${inf.id}')" style="background:rgba(29,158,117,.12);border:0.5px solid rgba(29,158,117,.3);border-radius:var(--radius-sm);padding:0 8px;height:26px;font-size:10px;cursor:pointer;color:#1D9E75;">PDF</button>
                <button onclick="deleteInforme('${inf.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;">×</button>
              </div>
            </div>
          </div>`;}).join('')}`:''}`;

    window._stars={MCB:new Array(7).fill(0),MSB:new Array(7).fill(0),TDA:new Array(5).fill(0),TAD:new Array(5).fill(0),OBJ:new Array(objs.length).fill(0)};
    window._objIds=objs.map(o=>o.id);
    window._micTags=[];
  }

  // ─── TAB TAREAS ───
  // ─── TAB HISTORIAL ───
  if(tab==='historial'){
    const informes = getInformesJugador(id);
    const obs = getObsJugador(id);

    if(!informes.length && !obs.length) {
      body.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text3);"><div style="font-size:32px;margin-bottom:10px;">📁</div><div style="font-size:14px;font-weight:500;margin-bottom:5px;">Sin historial todavía</div><div style="font-size:12px;">Los informes y notas de partidos aparecerán aquí</div></div>';
      return;
    }

    let html = '';

    if(informes.length) {
      html += '<div style="'+SEC_TITLE+'margin-bottom:1rem;">'+informes.length+' Informe'+(informes.length!==1?'s':'')+' guardado'+(informes.length!==1?'s':'')+'</div>';
      informes.forEach(inf => {
        const nota = parseFloat(inf.nota_decimal) || 0;
        const nc = nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
        const clips = getClipsInforme(inf.id);
        let starsData = {};
        try { starsData = inf.estrellas_json ? JSON.parse(inf.estrellas_json) : {}; } catch(e){}
        const avgFase = (k) => { const v=(starsData[k]||[]).filter(x=>x>0); return v.length ? (v.reduce((a,b)=>a+b,0)/v.length).toFixed(1) : null; };
        const fasesCfg = [{k:'MCB',c:'#1D9E75'},{k:'MSB',c:'#378ADD'},{k:'TDA',c:'#E07B00'},{k:'TAD',c:'#D85A30'}];

        html += '<div style="'+CARD+'border-left:3px solid '+nc+';margin-bottom:12px;">';
        // Header del informe
        html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">';
        if(nota) html += '<div style="width:52px;height:52px;border-radius:50%;background:'+nc+'12;color:'+nc+';border:2px solid '+nc+'40;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;font-family:inherit;"><span style="font-size:18px;font-weight:800;line-height:1;">'+nota.toFixed(1)+'</span><span style="font-size:8px;color:'+nc+';letter-spacing:.05em;">/10</span></div>';
        html += '<div style="flex:1;">';
        html += '<div style="font-size:14px;font-weight:600;">'+inf.partido+'</div>';
        html += '<div style="font-size:11px;color:var(--text3);margin-top:2px;">'+fmtDate(inf.fecha)+(inf.rival?' · vs '+inf.rival:'')+(inf.resultado?' · '+inf.resultado:'')+'</div>';
        html += '</div>';
        // Botones
        html += '<div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end;">';
        html += '<button onclick="generarInformeVisual(&quot;'+id+'&quot;,&quot;'+inf.id+'&quot;)" style="background:#1a1a2e;color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:10px;cursor:pointer;font-family:inherit;font-weight:600;letter-spacing:.04em;white-space:nowrap;">📄 PDF</button>';
        html += '<div style="display:flex;gap:4px;">';
        html += '<button onclick="abrirGestorClips(&quot;'+inf.id+'&quot;,&quot;'+id+'&quot;)" style="background:rgba(124,111,240,.1);border:0.5px solid rgba(124,111,240,.3);border-radius:5px;padding:4px 8px;font-size:10px;cursor:pointer;color:#7C6FF0;font-family:inherit;">▶ Clips'+(clips.length?' ('+clips.length+')':'')+'</button>';
        html += '<button onclick="deleteInforme(&quot;'+inf.id+'&quot;)" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:14px;padding:4px;">×</button>';
        html += '</div></div>';
        html += '</div>'; // end header row

        // Barras por fase
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px;">';
        fasesCfg.forEach(f => {
          const avg = avgFase(f.k);
          if(!avg) return;
          const pct = Math.round((parseFloat(avg)/5)*100);
          html += '<div>';
          html += '<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3);margin-bottom:2px;"><span>'+f.k+'</span><span style="color:'+f.c+';font-weight:600;">'+avg+'</span></div>';
          html += '<div style="height:4px;background:var(--border);border-radius:99px;"><div style="width:'+pct+'%;height:4px;background:'+f.c+';border-radius:99px;"></div></div>';
          html += '</div>';
        });
        html += '</div>';

        // Observaciones resumen
        if(inf.mcb || inf.msb) {
          html += '<div style="font-size:11px;line-height:1.6;color:var(--text2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">'+(inf.mcb||inf.msb||'')+'</div>';
        }

        html += '</div>'; // end card
      });
    }

    if(obs.length) {
      html += '<div style="'+SEC_TITLE+'margin-top:1rem;margin-bottom:.75rem;">Notas rápidas</div>';
      obs.forEach(o => {
        html += '<div style="'+CARD+'padding:.875rem;margin-bottom:8px;">';
        html += '<div style="font-size:10px;color:var(--text3);margin-bottom:4px;">'+fmtDate(o.fecha)+' · '+o.partido+'</div>';
        html += '<div style="font-size:12px;line-height:1.6;">'+o.texto+'</div>';
        html += '<button onclick="delObs(&quot;'+o.id+'&quot;)" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:11px;margin-top:4px;padding:0;">Eliminar</button>';
        html += '</div>';
      });
    }

    body.innerHTML = html;
    return;
  }

  if(tab==='tareas'){
    const objs=getObjJugador(id);
    const microsObjetivo = objs.map(o=>o.texto);
    const allT = getAllTareas();
    const tareasRel = allT.filter(t=>{
      const mics = (t.mics||[]).map(m=>m.toLowerCase());
      return microsObjetivo.some(obj=>mics.some(m=>m.includes(obj.toLowerCase().slice(0,12))||obj.toLowerCase().slice(0,12).includes(m.slice(0,12))));
    });

    let tareasHtml = '';
    if(tareasRel.length) {
      tareasHtml = tareasRel.map(t=>{
        const catColor=t.color||'#888'; const catBg=t.bg||'var(--bg2)';
        return '<div style="background:var(--bg);border:0.5px solid var(--border);border-left:3px solid '+catColor+';border-radius:var(--radius);padding:1rem;margin-bottom:.75rem;">'+
          '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px;">'+
          '<div style="font-size:13px;font-weight:500;flex:1;">'+t.t+'</div>'+
          (t.catLabel?'<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:'+catBg+';color:'+catColor+';">'+t.catLabel+'</span>':'')+
          '</div><div style="font-size:11px;color:var(--text2);line-height:1.5;margin-bottom:8px;">'+(t.desc||'')+'</div>'+
          '<div style="display:flex;gap:6px;flex-wrap:wrap;">'+
          '<button onclick="openTareaUnificada(\''+t.id+'\',\''+( t._src||'base')+'\');" class="btn-outline" style="font-size:10px;height:26px;padding:0 10px;">Ver tarea</button>'+
          '<button onclick="editarTarea(\''+t.id+'\',\''+( t._src||'base')+'\')" style="background:rgba(124,111,240,.12);border:0.5px solid rgba(124,111,240,.3);border-radius:var(--radius-sm);height:26px;padding:0 10px;font-size:10px;cursor:pointer;color:#7C6FF0;font-family:inherit;">✏ Editar</button>'+
          '</div></div>';
      }).join('');
      tareasHtml = '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.75rem;">'+tareasRel.length+' tarea'+(tareasRel.length!==1?'s':'')+' relacionadas</div>'+tareasHtml;
    } else {
      tareasHtml = '<div style="text-align:center;padding:1.5rem;color:var(--text3);"><div style="font-size:24px;margin-bottom:8px;">📋</div><div style="font-size:13px;margin-bottom:5px;">Sin tareas relacionadas todavía</div><div style="font-size:11px;">Añade objetivos basados en microconceptos para ver tareas sugeridas</div></div>';
    }

    body.innerHTML =
      '<div style="background:linear-gradient(135deg,rgba(29,158,117,.08),rgba(55,138,221,.05));border:0.5px solid rgba(29,158,117,.2);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;">'+
      '<div style="font-size:12px;font-weight:600;margin-bottom:3px;">Tareas para los objetivos de '+j.nombre+'</div>'+
      '<div style="font-size:11px;color:var(--text2);">'+j.posicion+' · '+objs.length+' objetivo'+(objs.length!==1?'s':'')+' activos</div></div>'+
      tareasHtml+
      '<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.875rem;margin-top:1rem;">'+
      '<div style="font-size:11px;color:var(--text2);margin-bottom:6px;">¿No encuentras lo que buscas? Busca en la biblioteca completa:</div>'+
      '<button class="btn-outline" style="width:100%;font-size:12px;" onclick="closeModal(\'mdj\');goTo(\'tareas\')">Ver biblioteca completa de tareas →</button></div>';
  }

  if(tab==='plan'){
    renderPlanSection();
  }

  if(tab==='seguimiento'){
    renderSeguimientoSection();
  }

  if(tab==='analisis'){
    body.innerHTML = '<div style="padding:1rem;color:var(--text2);font-size:12px;">Cargando análisis...</div>';
    renderAnalisisTab();
    return;
  }
}

function setModoPartido(modo) {
  document.getElementById('modo-rapido').style.display = modo==='rapido' ? 'block' : 'none';
  document.getElementById('modo-completo').style.display = modo==='completo' ? 'block' : 'none';
  document.getElementById('modo-rapido-btn').className = modo==='rapido' ? 'btn' : 'btn-outline';
  document.getElementById('modo-completo-btn').className = modo==='completo' ? 'btn' : 'btn-outline';
  if(modo==='completo') {
    const partido = document.getElementById('obpa')?.value.trim();
    if(partido) document.getElementById('sespartido').value = partido;
  }
}

function abrirInformeCompleto(jugId) {
  // Abre el tab de informe dentro del mismo modal
  switchDT('informe');
}

async function delObs(id) {
  await DB.from('observaciones').delete().eq('id', id);
  state.observaciones = state.observaciones.filter(o=>o.id!==id);
  renderDT('partidos');
  renderInicio();
}

function genSesJug(jugId) {
  // Redirige al generador de sesión principal con el jugador ya seleccionado
  closeModal('mdj');
  goTo('sesion');
  setTimeout(()=>{
    const sel = document.getElementById('sesjug');
    if(sel) { sel.value = jugId; onSJ(); }
  }, 150);
}


async function addObj(){const txt=document.getElementById('obt')?.value.trim();if(!txt)return;const{data,error}=await DB.from('objetivos').insert({jugador_id:state.currentJugador,texto:txt,fase:document.getElementById('obf').value}).select();if(error){showToast('Error');return;}state.objetivos.unshift(data[0]);document.getElementById('obt').value='';renderDT('obj');renderInicio();}
async function delObj(oid){await DB.from('objetivos').delete().eq('id',oid);state.objetivos=state.objetivos.filter(o=>o.id!==oid);renderDT('obj');}
async function addObs(){const txt=document.getElementById('obta')?.value.trim();if(!txt)return;const{data,error}=await DB.from('observaciones').insert({jugador_id:state.currentJugador,partido:document.getElementById('obpa').value.trim()||'Partido',fecha:new Date().toISOString().slice(0,10),texto:txt}).select();if(error){showToast('Error');return;}state.observaciones.unshift(data[0]);document.getElementById('obta').value='';document.getElementById('obpa').value='';renderDT('obs');renderInicio();}
async function setSes(){const fecha=document.getElementById('vidf')?.value;await DB.from('jugadores').update({sesion_fecha:fecha||null}).eq('id',state.currentJugador);const j=state.jugadores.find(x=>x.id===state.currentJugador);if(j)j.sesion_fecha=fecha||null;renderInicio();showToast('Fecha guardada');}
async function addNota(){const txt=document.getElementById('nota')?.value.trim();if(!txt)return;const{data,error}=await DB.from('notas_video').insert({jugador_id:state.currentJugador,fecha:new Date().toISOString().slice(0,10),texto:txt}).select();if(error){showToast('Error');return;}state.notasVideo.unshift(data[0]);document.getElementById('nota').value='';renderDT('vid');}

// ─── MICROS ───
function renderMicros(){
  const q=(document.getElementById('mq')?.value||'').toLowerCase();
  const fp=document.getElementById('mfp')?.value||'';
  const ff=document.getElementById('mff')?.value||'';
  let h='';
  POSICIONES.forEach(pc=>{
    const av=AV_COLORS[pc];const ic=FOLDER_ICONS[pc];
    if(fp&&fp!==pc)return;
    const mp=state.microconceptos.filter(m=>m.posicion===pc&&(!ff||m.fase===ff)&&(!q||m.titulo.toLowerCase().includes(q)||(m.referencia||'').toLowerCase().includes(q)));
    if(!mp.length)return;
    const op=state.folderState[pc]!==false;
    h+=`<div class="folder"><div class="folder-header" onclick="tC('${pc}')"><div class="folder-icon" style="background:${av.bg};color:${av.color};">${ic}</div><div class="folder-name">${pc}</div><div class="folder-count">${mp.length}</div><span style="font-size:12px;color:var(--text3);">${op?'▲':'▼'}</span></div><div class="folder-body${op?' open':''}">`;
    FASES.forEach(fc=>{
      const mf=mp.filter(m=>m.fase===fc.id).sort((a,b)=>a.titulo.localeCompare(b.titulo,'es'));if(!mf.length)return;
      const sk=pc+'-'+fc.id;const so=state.folderState[sk]!==false;
      h+=`<div class="subfolder-header" onclick="tSF('${sk}')"><span class="badge ${fc.cls}">${fc.label}</span><div style="flex:1;"></div><span style="font-size:11px;color:var(--text3);">${mf.length}</span><span style="font-size:10px;color:var(--text3);margin-left:6px;">${so?'▲':'▼'}</span></div><div class="subfolder-body${so?' open':''}">`;
      mf.forEach(m=>{const hasClip=m.video_url||getMicClips(m.id).length>0;h+=`<div class="concept-row" onclick="openMic('${m.id}')"><div class="concept-dot" style="background:${fc.dot};"></div><div class="concept-name">${m.titulo}</div>${hasClip?'<span class="badge badge-green" style="font-size:10px;padding:2px 6px;">▶</span>':''}</div>`;});
      h+=`</div>`;
    });
    h+=`</div></div>`;
  });
  document.getElementById('micros-content').innerHTML=h||'<div class="empty">Sin resultados.</div>';
}
function tC(k){state.folderState[k]=state.folderState[k]===false?undefined:false;renderMicros();}
function tSF(k){state.folderState[k]=state.folderState[k]===false?undefined:false;renderMicros();}
function expandAll(){state.folderState={};renderMicros();}
function collapseAll(){POSICIONES.forEach(p=>{state.folderState[p]=false;FASES.forEach(f=>{state.folderState[p+'-'+f.id]=false;});});renderMicros();}

function openMic(id){
  const m=state.microconceptos.find(x=>x.id===id);if(!m)return;
  const fc=FASES.find(f=>f.id===m.fase);
  document.getElementById('dm-title').textContent=m.titulo;
  document.getElementById('dm-desc').textContent=m.descripcion||'Sin descripción todavía.';
  document.getElementById('dm-ref').textContent=m.referencia||'Sin referencia de partido todavía.';
  document.getElementById('dm-tags').innerHTML=`${fc?`<span class="badge ${fc.cls}">${fc.label}</span>`:''}<span class="badge badge-pos">${m.posicion}</span>`;
  document.getElementById('dm-del').onclick=()=>{if(confirm('¿Eliminar?')){state.microconceptos=state.microconceptos.filter(x=>x.id!==id);DB.from('microconceptos').delete().eq('id',id);closeModal('modal-micro-detail');renderMicros();}};

  // Carrusel de clips
  const carruselEl = document.getElementById('dm-carrusel');
  if(carruselEl) carruselEl.innerHTML = renderMicCarrusel(id);

  // Panel de gestión de clips — resetear id y renderizar
  const panelEl = document.getElementById('dm-clips-panel');
  if(panelEl) {
    // Restaurar id fijo primero (por si el id cambió en una apertura anterior)
    panelEl.id = 'dm-clips-panel';
    panelEl.id = 'mic-clips-panel-' + id;
    renderMicClipsPanel(id);
  } else {
    // Buscar por id dinámico anterior
    const panelByDynId = document.querySelector('[id^="mic-clips-panel-"]');
    if(panelByDynId) {
      panelByDynId.id = 'mic-clips-panel-' + id;
      renderMicClipsPanel(id);
    }
  }

  document.querySelector('#modal-micro-detail').__currentId=id;
  // Botón editar
  const editMicBtn = document.getElementById('dm-edit');
  if(editMicBtn) editMicBtn.onclick = () => { closeModal('modal-micro-detail'); editarMicro(id); };
  openModal('modal-micro-detail');
}

async function saveMicro(){
  const titulo=document.getElementById('mc-titulo').value.trim();if(!titulo){alert('Título obligatorio');return;}
  let video_url=document.getElementById('mc-video').value.trim();
  const fi=document.getElementById('mc-video-file');
  if(fi&&fi.files&&fi.files[0]){showToast('Subiendo vídeo...');const u=await uploadVideoClip(fi.files[0]);if(u)video_url=u;}
  const data={titulo,descripcion:document.getElementById('mc-desc').value.trim(),posicion:document.getElementById('mc-pos').value,fase:document.getElementById('mc-fase').value,referencia:document.getElementById('mc-ref').value.trim(),video_url};
  const{data:res,error}=await DB.from('microconceptos').insert(data).select();
  if(error){showToast('Error');return;}
  state.microconceptos.push(res[0]);state.microconceptos.sort((a,b)=>a.titulo.localeCompare(b.titulo,'es'));
  closeModal('modal-nuevo-micro');renderMicros();showToast('Microconcepto añadido');
}

async function saveClip(){
  const id=document.querySelector('#modal-micro-detail').__currentId;if(!id)return;
  let video_url=document.getElementById('dm-video-url').value.trim();
  const fi=document.getElementById('dm-video-file');
  if(fi&&fi.files&&fi.files[0]){if(fi.files[0].size>50*1024*1024){showToast('El archivo supera 50MB');return;}showToast('Subiendo vídeo...');const u=await uploadVideoClip(fi.files[0]);if(u)video_url=u;else return;}
  if(!video_url){showToast('Selecciona un archivo o pega un enlace');return;}
  const{error}=await DB.from('microconceptos').update({video_url}).eq('id',id);
  if(error){showToast('Error');return;}
  const m=state.microconceptos.find(x=>String(x.id)===String(id));if(m)m.video_url=video_url;
  document.getElementById('dm-video').innerHTML=renderVideoPlayer(video_url);
  document.getElementById('dm-video-file').value='';document.getElementById('dm-video-url').value='';
  showToast('Clip guardado');renderMicros();
}

async function uploadVideoClip(file){
  const ext=file.name.split('.').pop();const filename=`clip_${Date.now()}.${ext}`;
  const{data,error}=await DB.storage.from('clips').upload(filename,file,{cacheControl:'3600',upsert:false,contentType:file.type});
  if(error){showToast('Error subiendo vídeo: '+error.message);return null;}
  const{data:urlData}=DB.storage.from('clips').getPublicUrl(filename);
  return urlData.publicUrl;
}


// ─── TAREAS CADETE ADICIONALES ───
const TAREAS_CADETE = [
  {
    id:'c1', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'DE', color:'#0C447C', bg:'#E6F1FB',
    t:'Anticipación al pase entre líneas',
    j:'4-6', d:'15min', i:'Alta',
    desc:'El central practica leer cuándo saltar a interceptar el pase al delantero de espaldas sin exponer su zona.',
    des:'Espacio 30x20m. Pivote rival intenta dar al delantero de espaldas. Central lee la trayectoria y decide: saltar a interceptar o esperar manteniendo posición.',
    var:'Añadir segundo central que cubre si el primero salta. Aumentar velocidad del pase. Central con restricción de 1 paso hacia adelante.',
    preg:[
      {p:'¿Qué señal del poseedor te indicó que iba a pasar al delantero?', razon:'Entrena la lectura de señales del rival antes de la acción.'},
      {p:'Cuando saltaste y no llegaste, ¿qué dejaste libre?', razon:'Conecta la decisión con la consecuencia táctica.'},
      {p:'¿Cuándo fue más efectivo esperar que saltar?', razon:'Desarrolla el criterio de cuándo actuar y cuándo no.'},
    ],
    mics:['Anticipación','Salto a cuadrados sin perder espalda','Perfilamientos para proteger espalda']
  },
  {
    id:'c2', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Salida de tres con central lateralizado',
    j:'5-7', d:'15min', i:'Media',
    desc:'El central practica salir del bloque incorporándose como tercer hombre en la salida de balón.',
    des:'Espacio 35x25m. Portero + 2 centrales + pivote. El central que no tiene el balón se lateraliza para crear el triángulo. Delantero rival presiona.',
    var:'Añadir segundo presionador. Limitar a 3 toques. Central que se lateraliza debe llegar a banda antes del pase.',
    preg:[
      {p:'¿Cuándo decidiste lateralizarte, antes o después de que el portero cogiera el balón?', razon:'Introduce la anticipación en la salida de balón.'},
      {p:'¿Tu movimiento creó el espacio que necesitaba el pivote?', razon:'Conecta el movimiento individual con el beneficio colectivo.'},
      {p:'¿Qué hacía el delantero rival que te condicionó dónde ir?', razon:'Entrena la lectura del rival para tomar decisiones de posicionamiento.'},
    ],
    mics:['Salidas de 3 entre centrales o lateralizado','Apoyo de seguridad por detrás','Conducción hacia intervalos para fijar']
  },
  {
    id:'c3', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'OF', color:'#085041', bg:'#E1F5EE',
    t:'Timing de la doblada exterior',
    j:'5-7', d:'15min', i:'Alta',
    desc:'El lateral practica subir en el momento exacto en que el extremo fija al lateral rival, sin adelantarse ni retrasarse.',
    des:'Espacio 30x25m. Extremo recibe en banda con lateral rival encima. El lateral de su equipo lee el 1v1 del extremo y decide cuándo arrancar para doblar por fuera.',
    var:'El extremo da una señal visual antes de fijar. Añadir presión en la subida del lateral. Si la doblada no llega, el lateral vuelve al bloque.',
    preg:[
      {p:'¿En qué momento exacto del 1v1 del extremo decidiste salir?', razon:'El cadete puede identificar el momento preciso de la fijación.'},
      {p:'¿Llegaste con ventaja o el lateral rival ya te cubría?', razon:'Evalúa si el timing fue correcto.'},
      {p:'¿Qué harías diferente para llegar con más ventaja la próxima vez?', razon:'Metacognición del timing. El cadete ya puede autorregular.'},
    ],
    mics:['Doblada exterior tras fijación de extremo','Rupturas a la espalda de la línea defensiva','Control abierto con pase fuera']
  },
  {
    id:'c4', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'DE', color:'#085041', bg:'#E1F5EE',
    t:'Defensa del extremo en perfil cerrado',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El lateral practica el perfil correcto frente al extremo para cerrar el pase interior y forzar hacia la banda.',
    des:'Espacio 20x20m. 1v1 lateral vs extremo. El lateral debe mantener perfil que cierre la línea de pase al interior. Si el extremo va a banda, puede intentar el 1v1. Si va interior, el lateral tiene posición ventajosa.',
    var:'Añadir interior al que el extremo puede dar si supera al lateral. Limitar espacio de banda. 2v2 con lateral + central vs extremo + interior.',
    preg:[
      {p:'¿Tu perfil al inicio del 1v1 cerraba el interior o la banda?', razon:'Toma de conciencia del posicionamiento inicial.'},
      {p:'¿Cuándo el extremo fue hacia la banda, ya lo habías leído antes de que se moviera?', razon:'Introduce la lectura anticipada del movimiento del rival.'},
      {p:'¿En qué situaciones preferirías dejarle ir a banda en vez de intentar quitarle el balón?', razon:'Decisión táctica avanzada. El cadete puede razonar cuándo ceder espacio.'},
    ],
    mics:['Perfiles: posición corporal','Perfiles: distancias respecto a extremo','Proteger espalda con perfil']
  },
  {
    id:'c5', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'OF', color:'#633806', bg:'#FAEEDA',
    t:'Escaneo y orientación antes de recibir',
    j:'5-6', d:'15min', i:'Media',
    desc:'El pivote practica hacer escaneos sistemáticos antes de cada recepción para orientar el primer control hacia la mejor opción.',
    des:'Rondo 5v2 en espacio 15x15m. El pivote siempre es poseedor exterior. Norma: debe girar la cabeza visiblemente antes de cada recepción. Si no lo hace, el equipo pierde la posesión.',
    var:'El pivote siempre interior del rondo. Añadir un defensor que presiona al pivote al recibir. Limitar a 2 toques.',
    preg:[
      {p:'¿Qué información recogiste en el último escaneo antes de recibir?', razon:'Verbalizar la información recogida consolida el hábito del escaneo.'},
      {p:'¿Tu primer control fue hacia donde mirabas o cambiaste de opción al recibir?', razon:'Conecta el escaneo con la ejecución. Si cambian, ¿por qué?'},
      {p:'¿En qué momentos no pudiste escanear? ¿Qué lo impidió?', razon:'Identifica las condiciones del juego que dificultan el escaneo.'},
    ],
    mics:['Escaneos','Perfil recibiendo de espaldas para poder jugar fácil','Control con alejada']
  },
  {
    id:'c6', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Pivote', fase:'DE', color:'#633806', bg:'#FAEEDA',
    t:'Tapar línea de pase anticipando posición',
    j:'4-6', d:'12min', i:'Media-Alta',
    desc:'El pivote practica colocarse para tapar la línea de pase al jugador más peligroso antes de que el rival mire hacia él.',
    des:'Espacio 25x20m. 4v4 con estructura. El pivote defensor debe identificar qué pase busca el rival y tapar esa línea antes de que el poseedor gire la cabeza hacia ella.',
    var:'El entrenador señala al jugador que el pivote debe tapar. El pivote puede saltar si tapa bien. 2 pivotes que se coordinan.',
    preg:[
      {p:'¿Cuándo decidiste qué línea de pase tapar? ¿Miraste primero al poseedor o a los compañeros del rival?', razon:'Introduce la lectura de la intención del poseedor.'},
      {p:'¿Hubo momentos en que tapaste la línea correcta pero llegaste tarde? ¿Por qué?', razon:'Diferencia entre buena lectura y mala ejecución del timing.'},
      {p:'¿Cuándo tapaste una línea, el poseedor tuvo que buscar otra opción peor?', razon:'Conecta la acción defensiva con el beneficio colectivo.'},
    ],
    mics:['Tapar línea de pase estático','Salto tapando línea de pase','Reducir distancia para evitar recepciones en plataforma']
  },
  {
    id:'c7', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'OF', color:'#3C3489', bg:'#EEEDFE',
    t:'Recibir en cuadrado para superar línea de medios',
    j:'5-7', d:'15min', i:'Media-Alta',
    desc:'El interior practica recibir en espacios intermedios con orientación de cuerpo que le permita girar y superar la línea de medios con el pase.',
    des:'Espacio 30x25m con dos líneas marcadas. 5v4. El interior debe recibir entre las dos líneas con perfil que le permita jugar hacia adelante. Si recibe de frente sin perfil, el punto es del rival.',
    var:'Añadir defensor específico que marca al interior. Limitar a 2 toques tras recibir. El interior debe dar el pase hacia adelante en menos de 3 segundos.',
    preg:[
      {p:'¿Tu perfil al recibir te permitía ver la línea defensiva rival o te daba la espalda?', razon:'Toma de conciencia del posicionamiento corporal al recibir.'},
      {p:'¿Cuándo recibiste con buen perfil, ¿tenías ya decidido a quién ibas a jugar antes de que llegara el balón?', razon:'Introduce la decisión anticipada. El cadete ya puede procesar antes de recibir.'},
      {p:'¿Qué microconcepto de los que trabajamos crees que se aplicó más en este ejercicio?', razon:'Metacognición táctica. Conecta el ejercicio con el aprendizaje explícito.'},
    ],
    mics:['Recibir en cuadrados para superar línea de medios con el pase','Percepción de espacios antes de recibir','Control con alejada para girar hacia línea defensiva']
  },
  {
    id:'c8', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Si vengo es porque voy — falso movimiento',
    j:'4-6', d:'15min', i:'Alta',
    desc:'El extremo practica el movimiento de bajada a recibir como señuelo para continuar en profundidad cuando el lateral rival le sigue.',
    des:'Espacio 25x30m. Extremo vs lateral rival. El extremo baja a recibir del pivote. Si el lateral le sigue, continúa en profundidad para recibir en la espalda. Si el lateral no sigue, recibe y encara.',
    var:'Añadir central que cubre la espalda. El extremo tiene 1 toque si recibe en profundidad. 2v2 con extremo + delantero vs lateral + central.',
    preg:[
      {p:'¿El lateral rival te siguió en tu bajada? ¿Cómo lo notaste?', razon:'Lectura de la reacción del rival al propio movimiento.'},
      {p:'¿En qué momento cambiaste de dirección, antes o después de que llegara el balón al pivote?', razon:'Introduce el timing del movimiento en relación al pase.'},
      {p:'¿Cuándo el lateral no te siguió, qué decidiste hacer y por qué?', razon:'Adaptación de la decisión según la reacción del rival.'},
    ],
    mics:['Si vengo es porque voy','Desmarque por espalda de lateral','Generar arrastres']
  },
  {
    id:'c9', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Delantero', fase:'OF', color:'#A32D2D', bg:'#FCEBEB',
    t:'Desmarque en diagonal para atacar espalda de central',
    j:'4-5', d:'12min', i:'Alta',
    desc:'El delantero practica el desmarque en diagonal para explotar el espacio entre el central y el lateral cuando el balón está en banda.',
    des:'Espacio 30x25m. Lateral con balón en banda. Delantero en posición de espera frente a los centrales. Cuando el lateral recibe, el delantero arranca en diagonal para explotar el espacio entre central y lateral rival.',
    var:'Añadir central que sigue al delantero. Balón en banda opuesta primero. Finalización con portero.',
    preg:[
      {p:'¿Cuándo arrancaste: cuando el lateral recibió el balón o antes?', razon:'Introduce el timing del desmarque en relación a la acción del compañero.'},
      {p:'¿Tu diagonal iba hacia dónde había espacio o hacia donde querías tú ir?', razon:'Diferencia entre el desmarque intuitivo y el desmarque inteligente.'},
      {p:'¿En qué momento del partido real usarías exactamente este movimiento?', razon:'Transferencia del ejercicio al partido. El cadete ya puede hacer esta conexión.'},
    ],
    mics:['Atacar espalda de centrales con desmarque','Desmarque desde segunda altura','Generar pasillos: separarse del último o alejarse del intervalo']
  },
];

// ─── TAREAS ───
function getAllTareas() {
  const base = TAREAS.map(t => ({...t, _src:'base'}));
  const cadete = TAREAS_CADETE.map(t => ({...t, _src:'cadete'}));
  const barca = (typeof TAREAS_BARCA !== 'undefined' ? TAREAS_BARCA : []).map(t => ({...t, _src:'barca'}));
  const omar = (typeof TAREAS_OMAR !== 'undefined' ? TAREAS_OMAR : []).map(t => ({...t, _src:'omar'}));
  const plantillas = PLANTILLAS_CAT.map(p => ({
    id: p.id, _src:'plantilla', t: p.titulo, pos: '', fase: '',
    cat: p.cat, catLabel: p.catLabel, edad: p.edad,
    j:'4-5', d:'15min', i:'Variable',
    desc: p.desc, des: p.desarrollo, var: p.variantes,
    preg: p.preguntas.map(q=>q.p||q),
    mics: [], color: p.color, bg: p.bg, neurociencia: p.neurociencia,
    _isPlantilla: true
  }));
  const custom = loadTareasCustomArr();
  return [...base, ...cadete, ...barca, ...omar, ...plantillas, ...custom];
}

function loadTareasCustomArr() {
  try { return JSON.parse(localStorage.getItem('tareas_custom')||'[]'); } catch(e) { return []; }
}

function renderTareas(){
  const fp = document.getElementById('tfp')?.value||'';
  const ff = document.getElementById('tff')?.value||'';
  const fc = document.getElementById('tfc')?.value||'';

  let all = getAllTareas();
  let list = all.filter(t =>
    (!fp || t.pos === fp) &&
    (!ff || t.fase === ff) &&
    (!fc || t.cat === fc)
  );

  document.getElementById('tcb').textContent = `${list.length} tarea${list.length!==1?'s':''}`;
  const g = document.getElementById('tgrid');
  if(!list.length){ g.innerHTML='<div class="empty">Sin tareas con ese filtro.</div>'; return; }

  const CAT_COLORS = {benjamin:'#085041',alevin:'#633806',infantil:'#0C447C',cadete:'#993C1D',juvenil:'#3C3489'};
  const CAT_BGS = {benjamin:'#E1F5EE',alevin:'#FAEEDA',infantil:'#E6F1FB',cadete:'#FAECE7',juvenil:'#EEEDFE'};

  g.innerHTML = list.map(t => {
    const fase = FASES.find(f=>f.id===t.fase);
    const catColor = t.color || CAT_COLORS[t.cat] || 'var(--text2)';
    const catBg = t.bg || CAT_BGS[t.cat] || 'var(--bg2)';
    const micCount = (t.mics||[]).length;
    const pregCount = Array.isArray(t.preg) ? t.preg.length : 0;
    return `<div class="card" onclick="openTareaUnificada('${t.id}','${t._src||'base'}')">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="font-size:13px;font-weight:500;line-height:1.4;flex:1;">${t.t}</div>
        ${t.catLabel?`<span style="font-size:9px;padding:2px 7px;border-radius:99px;background:${catBg};color:${catColor};white-space:nowrap;flex-shrink:0;">${t.catLabel}</span>`:''}
      </div>
      <div style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${t.desc}</div>
      <div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:6px;">
        ${t.pos?`<span class="badge badge-pos">${t.pos}</span>`:''}
        ${fase?`<span class="badge ${fase.cls}">${fase.label}</span>`:''}
        ${t.edad?`<span class="badge badge-gray">👶 ${t.edad}</span>`:''}
        <span class="badge badge-gray">${t.j} jug · ${t.d}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);">
        <span>${micCount} microconceptos</span>
        <span>${pregCount} preguntas</span>
      </div>
    </div>`;
  }).join('');
}

function openTareaUnificada(id, src) {
  // Buscar en todas las fuentes
  let t = null;
  if(src==='base') t = TAREAS.find(x=>String(x.id)===String(id));
  if(src==='cadete') t = TAREAS_CADETE.find(x=>String(x.id)===String(id));
  if(src==='barca') t = TAREAS_BARCA.find(x=>String(x.id)===String(id));
  if(src==='omar') t = TAREAS_OMAR.find(x=>String(x.id)===String(id));
  if(src==='plantilla') t = PLANTILLAS_CAT.find(x=>String(x.id)===String(id));
  if(src==='custom') t = loadTareasCustomArr().find(x=>String(x.id)===String(id));
  if(!t) { // fallback buscar en todos
    t = getAllTareas().find(x=>String(x.id)===String(id));
  }
  if(!t) return;

  const fase = FASES.find(f=>f.id===t.fase);
  const catColor = t.color || '#888';
  const catBg = t.bg || 'var(--bg2)';
  const pregs = Array.isArray(t.preg) ? t.preg : [];
  const mics = Array.isArray(t.mics) ? t.mics : [];

  document.getElementById('dtt').textContent = t.t||t.titulo||'';
  document.getElementById('dtmeta').innerHTML = `
    ${t.pos?`<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.pos}</div><div style="font-size:9px;color:var(--text3);">Posición</div></div>`:''}
    ${t.catLabel?`<div style="background:${catBg};border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;color:${catColor};">${t.catLabel}</div><div style="font-size:9px;color:var(--text3);">${t.edad||'Edad'}</div></div>`:''}
    <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.j||'—'}</div><div style="font-size:9px;color:var(--text3);">Jugadores</div></div>
    <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.d||'—'}</div><div style="font-size:9px;color:var(--text3);">Duración</div></div>
    <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.i||'—'}</div><div style="font-size:9px;color:var(--text3);">Intensidad</div></div>`;

  document.getElementById('dtd').textContent = t.desc||'';
  document.getElementById('dtdes').textContent = t.des||t.desarrollo||'';
  document.getElementById('dtvar').textContent = t.var||t.variantes||'';

  // Preguntas con razon si la tienen
  document.getElementById('dtpregs').innerHTML = pregs.map((p,i) => {
    const texto = typeof p === 'object' ? p.p : p;
    const razon = typeof p === 'object' ? p.razon : null;
    return `<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:8px 10px;margin-bottom:5px;border-left:3px solid #1D9E75;">
      <div style="font-size:12px;">${texto}</div>
      ${razon?`<div style="font-size:10px;color:var(--text3);margin-top:4px;font-style:italic;">💡 ${razon}</div>`:''}
    </div>`;
  }).join('');

  document.getElementById('dtmics').innerHTML = mics.map(m=>
    `<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#EEEDFE;color:#3C3489;display:inline-block;margin:2px;">${m}</span>`
  ).join('');

  // Base neurocientífica si es plantilla
  const neuroEl = document.getElementById('dt-neuro');
  if(neuroEl) {
    if(t.neurociencia) {
      neuroEl.innerHTML = `<div style="background:${catBg}80;border-left:3px solid ${catColor};border-radius:0 8px 8px 0;padding:.875rem;margin-bottom:1rem;"><div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:${catColor};margin-bottom:5px;">Base neurocientífica</div><div style="font-size:12px;line-height:1.7;">${t.neurociencia}</div></div>`;
    } else {
      neuroEl.innerHTML = '';
    }
  }

  // Botón editar en el modal de tarea
  const editBtn = document.getElementById('dt-edit-btn');
  if(editBtn) {
    editBtn.onclick = () => { closeModal('mdt'); editarTarea(id, src); };
    editBtn.style.display = (src==='custom'||src==='base'||src==='cadete'||src==='barca') ? 'block' : 'none';
  }
  openModal('mdt');
}
function openTarea(id){
  const t=TAREAS.find(x=>x.id===id);if(!t)return;
  const fc=FASES.find(f=>f.id===t.fase);
  document.getElementById('dtt').textContent=t.t;
  document.getElementById('dtmeta').innerHTML=`<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.pos}</div><div style="font-size:9px;color:var(--text3);">Posición</div></div><div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.j}</div><div style="font-size:9px;color:var(--text3);">Jugadores</div></div><div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.d}</div><div style="font-size:9px;color:var(--text3);">Duración</div></div><div style="background:var(--bg2);border-radius:var(--radius-sm);padding:7px;text-align:center;"><div style="font-size:12px;font-weight:500;">${t.i}</div><div style="font-size:9px;color:var(--text3);">Intensidad</div></div>`;
  document.getElementById('dtd').textContent=t.desc;
  document.getElementById('dtdes').textContent=t.des;
  document.getElementById('dtvar').textContent=t.var;
  document.getElementById('dtpregs').innerHTML=t.preg.map(p=>`<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:8px 10px;margin-bottom:5px;border-left:3px solid #1D9E75;font-size:12px;">${p}</div>`).join('');
  document.getElementById('dtmics').innerHTML=t.mics.map(m=>`<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#EEEDFE;color:#3C3489;display:inline-block;margin:2px;">${m}</span>`).join('');
  // Botón editar en el modal de tarea
  const editBtn = document.getElementById('dt-edit-btn');
  if(editBtn) {
    editBtn.onclick = () => { closeModal('mdt'); editarTarea(id, src); };
    editBtn.style.display = (src==='custom'||src==='base'||src==='cadete'||src==='barca') ? 'block' : 'none';
  }
  openModal('mdt');
}

// ─── EVOLUCIÓN ───
function fillEvSel(){
  const sel=document.getElementById('evsel');sel.innerHTML='<option value="">Selecciona jugador...</option>';
  state.jugadores.forEach(j=>sel.innerHTML+=`<option value="${j.id}">${j.nombre} · ${j.posicion}</option>`);
}
function rEv(){
  const id=document.getElementById('evsel').value;
  const cont=document.getElementById('evcont');
  if(!id){cont.innerHTML='<div class="empty">Selecciona un jugador para ver su evolución.</div>';return;}
  const j=state.jugadores.find(x=>x.id===id);if(!j)return;
  const pc=AV_COLORS[j.posicion]||{bg:'#eee',color:'#666'};
  const obs=getObsJugador(id);const objs=getObjJugador(id);
  const informes=getInformesJugador(id);
  function sc(txt){const t=txt.toLowerCase();let p=0,n=0;['bien','bueno','mejoró','positiv','aplica'].forEach(k=>{if(t.includes(k))p++;});['dificultad','flojo','sigue sin','mal'].forEach(k=>{if(t.includes(k))n++;});return{p:Math.max(1,p),n};}
  const scores=[...obs].reverse().map(o=>sc(o.texto));
  const totalPos=scores.reduce((a,s)=>a+s.p,0);
  const trend=obs.length>=2?(scores[scores.length-1].p>=scores[0].p?'↑ Sube':'↓ Baja'):'→ Estable';
  const tc=trend.includes('Sube')?'#1D9E75':trend.includes('Baja')?'#D85A30':'#E07B00';
  const notaMedia=informes.filter(i=>i.nota_decimal).length?
    (informes.filter(i=>i.nota_decimal).reduce((a,i)=>a+parseFloat(i.nota_decimal),0)/informes.filter(i=>i.nota_decimal).length).toFixed(1):null;

  cont.innerHTML=`
    <div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;display:flex;align-items:center;gap:10px;">
      ${j.logo_club?`<img src="${j.logo_club}" style="width:40px;height:40px;object-fit:contain;border-radius:4px;">`:''}
      <div class="avatar" style="width:40px;height:40px;font-size:13px;font-weight:500;background:${pc.bg};color:${pc.color};">${initials(j.nombre)}</div>
      <div><div style="font-size:15px;font-weight:500;">${j.nombre}</div><div style="font-size:11px;color:var(--text2);margin-top:2px;">${j.posicion} · ${j.equipo||''}</div></div>
    </div>
    <div class="stats">
      <div class="stat"><div class="stat-num">${obs.length}</div><div class="stat-label">Partidos</div></div>
      <div class="stat"><div class="stat-num">${objs.length}</div><div class="stat-label">Objetivos</div></div>
      <div class="stat"><div class="stat-num">${informes.length}</div><div class="stat-label">Informes</div></div>
      ${notaMedia?`<div class="stat"><div class="stat-num" style="color:#1D9E75;">${notaMedia}</div><div class="stat-label">Nota media</div></div>`:''}
      <div class="stat"><div class="stat-num" style="font-size:14px;color:${tc};">${trend}</div><div class="stat-label">Tendencia</div></div>
    </div>

    ${informes.length?`<div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;">
      <div style="font-size:12px;font-weight:500;margin-bottom:.875rem;">Notas por partido</div>
      ${informes.slice(0,6).map(inf=>{const n=parseFloat(inf.nota_decimal)||0;const nc=n>=8?'#1D9E75':n>=6?'#E07B00':'#D85A30';return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;"><div style="font-size:11px;color:var(--text2);min-width:80px;">${fmtDate(inf.fecha)}</div><div style="flex:1;height:6px;background:var(--bg2);border-radius:99px;"><div style="width:${n*10}%;height:6px;background:${nc};border-radius:99px;"></div></div><div style="font-size:12px;font-weight:600;color:${nc};min-width:32px;">${n?n.toFixed(1):'—'}</div></div>`;}).join('')}
    </div>`:''}
    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;">
      <div style="font-size:12px;font-weight:500;margin-bottom:.875rem;">Progreso por objetivo</div>
      ${objs.length?objs.map((o,i)=>{const pct=Math.max(10,Math.min(100,Math.round((obs.length/(obs.length+2))*100))-i*12);const fc=FASES.find(f=>f.id===o.fase);const col=fc?fc.dot:'#888';return`<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><div style="font-size:11px;flex:1;line-height:1.4;">${o.texto} ${getFaseBadge(o.fase)}</div><div style="width:80px;height:5px;background:var(--bg2);border-radius:99px;flex-shrink:0;"><div style="width:${pct}%;height:5px;border-radius:99px;background:${col};"></div></div><div style="font-size:10px;color:var(--text2);min-width:26px;text-align:right;">${pct}%</div></div>`;}).join(''):'<div style="font-size:12px;color:var(--text3);">Sin objetivos.</div>'}
    </div>
    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;">
      <div style="font-size:12px;font-weight:500;margin-bottom:.875rem;">Línea de tiempo</div>
      <div class="timeline">${obs.length?obs.map(o=>{const s=sc(o.texto);const dc=s.p>s.n?'#1D9E75':'#E07B00';return`<div class="tl-item"><div class="tl-dot" style="background:${dc};"></div><div><div class="tl-fecha">${fmtDate(o.fecha)}</div><div class="tl-partido">${o.partido}</div><div class="tl-texto">${o.texto}</div></div></div>`;}).join(''):'<div style="font-size:12px;color:var(--text3);">Sin observaciones.</div>'}</div>
    </div>`;
}

// ─── SESIÓN VÍDEO ───
function fillReunSel(){
  const sel=document.getElementById('reun-jug');
  if(!sel) return;
  sel.innerHTML='<option value="">Selecciona jugador...</option>';
  state.jugadores.forEach(j=>sel.innerHTML+=`<option value="${j.id}">${j.nombre} · ${j.posicion}</option>`);
}

function onReunJugChange(){
  const jugId=document.getElementById('reun-jug')?.value;
  if(!jugId) return;
  loadReunHistorial(jugId);
}

function switchReunTab(tab,btn){
  ['cuestionario','conclusiones','historial'].forEach(t=>{
    const el=document.getElementById('reun-tab-'+t);
    if(el) el.style.display=t===tab?'block':'none';
    const b=document.getElementById('reuntab-'+t);
    if(b){
      b.style.background=t===tab?'rgba(88,166,255,0.15)':'none';
      b.style.color=t===tab?'#58a6ff':'var(--text3)';
      b.style.borderColor=t===tab?'rgba(88,166,255,0.3)':'var(--border2)';
    }
  });
  const jugId=document.getElementById('reun-jug')?.value;
  if(tab==='historial'&&jugId) loadReunHistorial(jugId);
}

async function generarCuestionarioAnalistaIA(){
  const jugId=document.getElementById('reun-jug')?.value;
  if(!jugId){ showToast('Selecciona un jugador primero'); return; }
  const jug=state.jugadores.find(x=>x.id===jugId);
  const btn=document.getElementById('btn-gen-cues');
  if(btn){ btn.textContent='⏳ Generando...'; btn.disabled=true; }

  const [r1,r2,r3,r4]=await Promise.all([
    DB.from('psico_mensual').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(1),
    DB.from('psico_diario').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(14),
    DB.from('informes_partido').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(4),
    DB.from('nutricion_log').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(7)
  ]);

  const moodMed=r2.data?.length?(r2.data.reduce((a,b)=>a+(b.mood||0),0)/r2.data.length).toFixed(1):'N/A';
  const ctx=`Jugador: ${jug.nombre} · ${jug.posicion}
Cuestionario mensual: ${JSON.stringify(r1.data?.[0]||{})}
Bienestar: mood medio ${moodMed}/5, ${r2.data?.length||0} registros
Informes: ${r3.data?.map(i=>`[${i.fecha}] nota:${i.nota_global}`).join(', ')||'Sin informes'}
Nutrición: ${r4.data?.length||0} días registrados`;

  try{
    const prompt=`Eres el asistente de Omar Cortés Ferrero, analista de fútbol.
Datos del jugador este mes:
${ctx}

Genera exactamente 8 preguntas profundas y personalizadas para la reunión mensual.
Detecta patrones, contradicciones o señales de alerta en los datos.
Responde SOLO con JSON: {"preguntas":["pregunta1","pregunta2",...]}`;

    const res=await fetch('https://ghxwdauwrzupjmrujcns.supabase.co/functions/v1/smart-api',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U'},
      body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:1000,messages:[{role:'user',content:prompt}]})
    });
    const data=await res.json();
    const txt=data.content?.[0]?.text||'{}';
    const clean=txt.replace(/```json|```/g,'').trim();
    const parsed=JSON.parse(clean);
    const preguntas=parsed.preguntas||[];

    const lista=document.getElementById('reun-preguntas-lista');
    if(lista){
      lista.innerHTML=preguntas.map((p,i)=>`
        <div style="margin-bottom:14px;">
          <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:5px;">${i+1}. ${p}</div>
          <textarea rows="2" id="reun-resp-${i}" placeholder="Tu observación..." style="width:100%;background:var(--bg3);border:0.5px solid var(--border2);border-radius:8px;padding:8px;font-size:12px;color:var(--text);resize:none;font-family:inherit;outline:none;box-sizing:border-box;"></textarea>
        </div>`).join('');
      document.getElementById('reun-cuestionario-result').style.display='block';
      window._reunPreguntas=preguntas;
    }
  }catch(e){ showToast('Error IA: '+e.message); }
  if(btn){ btn.textContent='✨ Generar cuestionario con IA'; btn.disabled=false; }
}

async function guardarCuestionarioReunion(){
  const jugId=document.getElementById('reun-jug')?.value;
  if(!jugId){ showToast('Selecciona jugador'); return; }
  const preguntas=window._reunPreguntas||[];
  const respuestas=preguntas.map((_,i)=>({
    pregunta:preguntas[i],
    respuesta:document.getElementById(`reun-resp-${i}`)?.value.trim()||''
  }));
  const {error}=await DB.from('reuniones').insert({
    jugador_id:jugId,fecha:new Date().toISOString().slice(0,10),
    tipo:'cuestionario',contenido:JSON.stringify(respuestas)
  });
  if(error){ showToast('Error: '+error.message); return; }
  document.getElementById('reun-cues-msg').style.display='block';
  setTimeout(()=>document.getElementById('reun-cues-msg').style.display='none',3000);
  showToast('✅ Cuestionario guardado');
}

async function guardarConclusionesReunion(){
  const jugId=document.getElementById('reun-jug')?.value;
  const titulo=document.getElementById('reun-titulo')?.value.trim();
  const texto=document.getElementById('reun-conclusiones-texto')?.value.trim();
  if(!jugId){ showToast('Selecciona jugador'); return; }
  if(!texto){ showToast('Escribe las conclusiones'); return; }
  const {error}=await DB.from('reuniones').insert({
    jugador_id:jugId,fecha:new Date().toISOString().slice(0,10),
    tipo:'conclusiones',titulo:titulo||'Reunión '+new Date().toISOString().slice(0,7),contenido:texto
  });
  if(error){ showToast('Error: '+error.message); return; }
  document.getElementById('reun-titulo').value='';
  document.getElementById('reun-conclusiones-texto').value='';
  document.getElementById('reun-conc-msg').style.display='block';
  setTimeout(()=>document.getElementById('reun-conc-msg').style.display='none',3000);
  showToast('✅ Conclusiones guardadas');
  loadReunHistorial(jugId);
}

async function generarResumenPostReunion(){
  const jugId=document.getElementById('reun-jug')?.value;
  if(!jugId){ showToast('Selecciona jugador primero'); return; }
  const jug=state.jugadores.find(x=>x.id===jugId);
  const btn=document.getElementById('btn-gen-res');
  if(btn){ btn.textContent='⏳ Generando...'; btn.disabled=true; }

  const [r1,r2,r3]=await Promise.all([
    DB.from('reuniones').select('*').eq('jugador_id',jugId).eq('tipo','conclusiones').order('fecha',{ascending:false}).limit(1),
    DB.from('psico_mensual').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(1),
    DB.from('psico_diario').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(14)
  ]);
  const moodMed=r3.data?.length?(r3.data.reduce((a,b)=>a+(b.mood||0),0)/r3.data.length).toFixed(1):'N/A';
  const ctx=`Jugador: ${jug.nombre} · ${jug.posicion}
Conclusiones reunión: ${r1.data?.[0]?.contenido||'Sin conclusiones'}
Cuestionario mensual: ${JSON.stringify(r2.data?.[0]||{})}
Mood medio 2 semanas: ${moodMed}/5`;

  try{
    const prompt=`Eres el asistente de Omar Cortés Ferrero, analista de fútbol.
Genera un resumen post-reunión conciso (máx 250 palabras):
1. Estado actual del jugador (2-3 líneas)
2. Puntos clave trabajados (3-4 bullets)
3. Qué vigilar el próximo mes (2-3 puntos)
Sé directo. Sin florituras.

${ctx}`;
    const res=await fetch('https://ghxwdauwrzupjmrujcns.supabase.co/functions/v1/smart-api',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U'},
      body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:800,messages:[{role:'user',content:prompt}]})
    });
    const data=await res.json();
    const txt=data.content?.[0]?.text||'Error';
    document.getElementById('reun-resumen-texto').textContent=txt;
    document.getElementById('reun-resumen-result').style.display='block';
    window._reunResumenTexto=txt;
  }catch(e){ showToast('Error IA: '+e.message); }
  if(btn){ btn.textContent='🧠 Generar resumen con IA'; btn.disabled=false; }
}

async function guardarResumenReunion(){
  const jugId=document.getElementById('reun-jug')?.value;
  if(!jugId||!window._reunResumenTexto){ showToast('Genera el resumen primero'); return; }
  const {error}=await DB.from('reuniones').insert({
    jugador_id:jugId,fecha:new Date().toISOString().slice(0,10),
    tipo:'resumen_ia',contenido:window._reunResumenTexto
  });
  if(error){ showToast('Error: '+error.message); return; }
  showToast('✅ Resumen guardado');
  loadReunHistorial(jugId);
}

async function loadReunHistorial(jugId){
  if(!jugId) return;
  const {data}=await DB.from('reuniones').select('*').eq('jugador_id',jugId).order('fecha',{ascending:false}).limit(20);
  const el=document.getElementById('reun-historial-lista');
  if(!el) return;
  if(!data||!data.length){ el.innerHTML='<div style="text-align:center;padding:2rem;color:var(--text3);font-size:13px;">Sin reuniones todavía.</div>'; return; }
  const porFecha={};
  data.forEach(r=>{ if(!porFecha[r.fecha]) porFecha[r.fecha]=[]; porFecha[r.fecha].push(r); });
  el.innerHTML=Object.keys(porFecha).sort((a,b)=>b.localeCompare(a)).map(fecha=>{
    const items=porFecha[fecha];
    const tipos=items.map(i=>i.tipo);
    return `<div style="border:0.5px solid var(--border2);border-radius:10px;padding:14px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:700;">${fecha}</span>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${tipos.includes('cuestionario')?'<span style="font-size:10px;background:rgba(88,166,255,0.15);color:#58a6ff;padding:2px 8px;border-radius:4px;">📋 Cuestionario</span>':''}
          ${tipos.includes('conclusiones')?'<span style="font-size:10px;background:rgba(163,113,247,0.15);color:#a371f7;padding:2px 8px;border-radius:4px;">📝 Conclusiones</span>':''}
          ${tipos.includes('resumen_ia')?'<span style="font-size:10px;background:rgba(210,153,34,0.15);color:#d29922;padding:2px 8px;border-radius:4px;">🧠 Resumen IA</span>':''}
        </div>
      </div>
      ${items.filter(i=>i.tipo==='conclusiones').map(i=>`
        <div style="font-size:12px;background:var(--bg3);padding:10px;border-radius:8px;margin-bottom:6px;">
          ${i.titulo?`<div style="font-size:11px;font-weight:700;margin-bottom:4px;">${i.titulo}</div>`:''}
          <div style="color:var(--text3);">${(i.contenido||'').substring(0,200)}${(i.contenido||'').length>200?'...':''}</div>
        </div>`).join('')}
      ${items.filter(i=>i.tipo==='resumen_ia').map(i=>`
        <div style="font-size:12px;background:rgba(210,153,34,0.05);border:0.5px solid rgba(210,153,34,0.2);padding:10px;border-radius:8px;">
          <div style="font-size:11px;font-weight:700;color:#d29922;margin-bottom:4px;">Resumen IA</div>
          <div style="color:var(--text3);">${(i.contenido||'').substring(0,300)}${(i.contenido||'').length>300?'...':''}</div>
        </div>`).join('')}
    </div>`;
  }).join('');
}


function genSes(){
  const pos=document.getElementById('sespos').value;
  const fase=document.getElementById('sesfase').value;
  const partido=document.getElementById('sespartido').value.trim()||'Partido';
  const jugId=document.getElementById('sesjug').value;
  const nombre=jugId?(state.jugadores.find(x=>x.id===jugId)||{}).nombre||'Jugador':'Jugador';
  let html=`<div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;"><div><div style="font-size:14px;font-weight:500;">Sesión · ${nombre}</div><div style="font-size:11px;color:var(--text2);margin-top:2px;">${pos} · ${partido} · ${fmtDate(new Date().toISOString().slice(0,10))}</div></div><button class="btn-outline" style="font-size:11px;" onclick="window.print()">Imprimir / PDF</button></div>`;
  html+=`<div class="ses-fase"><div class="ses-fase-title"><div class="ses-fase-icon" style="background:var(--bg2);">◎</div>Apertura</div>`;
  html+=PSES.ap.map(p=>`<div class="pregunta-item"><div class="pregunta-texto">${p.t}</div><div class="pregunta-hint">${p.h}</div></div>`).join('');
  html+=`</div>`;
  const fases=fase==='AMBAS'?['OF','DE']:[fase];
  fases.forEach(f=>{
    const pr=(PSES[f]||{})[pos]||[];if(!pr.length)return;
    const fc=FCMAP[f];
    html+=`<div class="ses-fase"><div class="ses-fase-title"><div class="ses-fase-icon" style="background:${fc.bg};color:${fc.cl};">${fc.ic}</div>${fc.l}</div>`;
    html+=pr.map((p,i)=>`<div class="pregunta-item"><div style="font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:2px;">Pregunta ${i+1}</div><div class="pregunta-texto">${p.t}</div><div class="pregunta-hint">${p.h}</div><span class="pregunta-concepto">${p.c}</span></div>`).join('');
    html+=`</div>`;
  });
  html+=`<div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;border-left:3px solid #1D9E75;"><div style="font-size:10px;color:#085041;font-weight:500;text-transform:uppercase;letter-spacing:.05em;margin-bottom:7px;">Preguntas de cierre</div>${PSES.cl.map(p=>`<div style="font-size:12px;line-height:1.6;margin-bottom:4px;padding-left:8px;border-left:2px solid #9FE1CB;">${p}</div>`).join('')}</div>`;
  html+=`<div style="font-size:10px;color:var(--text3);text-align:center;margin-top:.875rem;">Sesión preparada por Omar Cortés Ferrero · Analista Individual</div>`;
  document.getElementById('sesres').innerHTML=html;
  document.getElementById('sesres').scrollIntoView({behavior:'smooth'});
}

// ─── URL JUGADOR ───
function copiarURLJugador(jugId) {
  const base = window.location.origin + window.location.pathname.replace('index.html','').replace(/\/[^/]*$/, '/');
  const url = `${base}jugador.html?id=${jugId}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast('URL copiada. Envíasela al jugador por WhatsApp ✓');
  }).catch(() => {
    prompt('Copia esta URL y envíasela al jugador:', url);
  });
}

// ─── EXPORTAR ───
function exportarDatos(){
  const data={fecha:new Date().toISOString(),jugadores:state.jugadores,objetivos:state.objetivos,observaciones:state.observaciones,notasVideo:state.notasVideo,microconceptos:state.microconceptos,informesPartido:state.informesPartido};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=`omar-analista-${new Date().toISOString().slice(0,10)}.json`;
  a.click();URL.revokeObjectURL(url);showToast('Datos exportados');
}

window.addEventListener('load', () => {
  loadTareasCustom();
  init();
});

// ─── PLANTILLAS POR CATEGORÍA ───
const PLANTILLAS_CAT = [
  // ── BENJAMÍN ──
  {
    id:'ben1', cat:'benjamin', catLabel:'Benjamín', edad:'8-10 años',
    titulo:'El laberinto de pases',
    emoji:'🎮',
    enfoque:'Juego y descubrimiento. Sin conceptos tácticos. Aprendizaje por experiencia directa.',
    neurociencia:'A esta edad la corteza prefrontal está en desarrollo temprano. El niño aprende por ensayo-error y emoción, no por instrucción abstracta. Las preguntas deben ser sobre lo que acaba de vivir, concretas y en presente.',
    desc:'El equipo intenta hacer el máximo de pases seguidos sin que el rival intercepte.',
    desarrollo:'Rondo 4vs1 en espacio 10x10m. Se cuenta cada pase correcto en voz alta. El equipo intenta batir su propio récord. El entrenador anima pero no da instrucciones tácticas.',
    variantes:'4vs2. Espacio más pequeño. Pases con la pierna mala. Un jugador con los ojos cerrados.',
    preguntas:[
      {p:'¿Cuántos pases hicisteis? ¿Podéis hacer más la próxima vez?', razon:'Activa la memoria episódica reciente. El número concreto les da un reto claro.'},
      {p:'¿Qué pasó cuando el balón llegó a alguien que estaba solo?', razon:'Observación directa del entorno. No pedimos análisis, solo que recuerden lo que vieron.'},
      {p:'¿Qué fue lo más difícil? ¿Y lo más divertido?', razon:'Conecta la experiencia emocional con el aprendizaje. La emoción fija mejor la memoria a esta edad.'},
    ],
    color:'#085041', bg:'#E1F5EE'
  },
  {
    id:'ben2', cat:'benjamin', catLabel:'Benjamín', edad:'8-10 años',
    titulo:'El cazador y la presa',
    emoji:'🏃',
    enfoque:'Juego y descubrimiento. Coordinación y lectura básica del espacio.',
    neurociencia:'Los lóbulos parietales, responsables de la coordinación del movimiento, son los primeros en madurar. Esta es la etapa ideal para trabajar movimiento y espacio sin carga cognitiva.',
    desc:'El portador con balón debe llegar al otro lado del campo sin que le toquen.',
    desarrollo:'Espacio 20x15m. Un portador con balón intenta llegar al otro extremo. Un defensor sin balón intenta tocarle. Si le tocan, cambian roles. Sin instrucciones de ruta.',
    variantes:'Dos defensores. Añadir zonas seguras intermedias. Portador sin balón primero para trabajar velocidad.',
    preguntas:[
      {p:'¿Por dónde fuiste? ¿Por qué fuiste por ahí?', razon:'Primera pregunta de toma de decisiones. Muy concreta, referida a lo que acaba de pasar.'},
      {p:'¿Conseguiste engañar al defensor? ¿Cómo lo hiciste?', razon:'El niño verbaliza su propia estrategia. Sin saberlo, está construyendo conciencia táctica básica.'},
      {p:'Si lo haces otra vez, ¿cambiarías algo?', razon:'Introduce la idea de mejorar sin presión. La corteza prefrontal empieza a anticipar a esta edad de forma elemental.'},
    ],
    color:'#085041', bg:'#E1F5EE'
  },
  {
    id:'ben3', cat:'benjamin', catLabel:'Benjamín', edad:'8-10 años',
    titulo:'El territorio',
    emoji:'🗺️',
    enfoque:'Juego posicional básico. El niño descubre el espacio sin que se lo expliquen.',
    neurociencia:'El aprendizaje implícito, que es automático y sin verbalización consciente, es dominante hasta los 10-12 años. El niño aprende mejor descubriendo que escuchando explicaciones.',
    desc:'Cada equipo defiende su zona e intenta conquistar la del rival llevando el balón hasta ella.',
    desarrollo:'Espacio 25x20m dividido en dos zonas. 4vs4. Para conquistar la zona rival el equipo debe llevar el balón andando hasta el fondo del campo contrario. El que llega gana un punto.',
    variantes:'Añadir porteros. Zonas más pequeñas. Obligar a dar 3 pases antes de poder conquistar.',
    preguntas:[
      {p:'¿Cuándo ibais todos juntos apilados, funcionó? ¿Y cuando os separasteis?', razon:'El niño descubre el concepto de amplitud sin que nadie le hable de amplitud.'},
      {p:'¿Había sitios del campo donde casi nunca iba nadie? ¿Para qué servían?', razon:'Observación del espacio libre. Primer paso hacia la comprensión de los espacios.'},
      {p:'¿Qué haríais diferente si jugaseis otra vez?', razon:'Metacognición elemental. A esta edad ya pueden hacer ajustes simples si la pregunta es concreta.'},
    ],
    color:'#085041', bg:'#E1F5EE'
  },
  // ── ALEVÍN ──
  {
    id:'ale1', cat:'alevin', catLabel:'Alevín', edad:'10-12 años',
    titulo:'El pase y voy',
    emoji:'↗️',
    enfoque:'Introducción al movimiento sin balón. El niño empieza a pensar en el compañero.',
    neurociencia:'Entre los 10 y 12 años el niño abandona el egocentrismo y empieza a procesar situaciones desde la perspectiva del compañero. Es el momento ideal para introducir conceptos de colectivo.',
    desc:'Tras cada pase, el que lo da debe moverse a otro sitio antes de poder recibir de nuevo.',
    desarrollo:'Espacio 20x15m. 5vs2. Norma: quien pasa debe moverse antes de poder tocar el balón otra vez. Si se queda parado y lo piden, el punto lo gana el equipo defensor.',
    variantes:'Ampliar a 6vs3. Añadir restricción de toques. El movimiento debe ser hacia adelante.',
    preguntas:[
      {p:'¿Qué pasaba cuando después de pasar te quedabas parado?', razon:'El niño conecta causa y efecto en el juego colectivo. Empieza a ver las consecuencias de su acción para el equipo.'},
      {p:'¿En qué momento fue más fácil recibir el balón? ¿Dónde estabas?', razon:'Introduce la percepción del espacio libre como concepto, pero desde la experiencia propia.'},
      {p:'¿Viste alguna vez a un compañero que necesitaba que te movieras pero no lo hiciste? ¿Qué pasó?', razon:'Empatía táctica básica. A esta edad ya pueden ponerse en el lugar del compañero.'},
    ],
    color:'#633806', bg:'#FAEEDA'
  },
  {
    id:'ale2', cat:'alevin', catLabel:'Alevín', edad:'10-12 años',
    titulo:'Salvar al compañero',
    emoji:'🤝',
    enfoque:'Cobertura y ayuda. El niño aprende que defender es un acto colectivo.',
    neurociencia:'La memoria de trabajo alcanza rendimiento adulto cerca de los 9 años. Los alevines ya pueden mantener en mente la posición de varios compañeros y rivales simultáneamente.',
    desc:'Cuando un compañero es superado, otro debe ayudar inmediatamente sin que se lo pidan.',
    desarrollo:'Espacio 20x20m. 3vs3+portero. Norma especial: si un rival supera a un defensor, otro defensor tiene 3 segundos para aparecer y ayudar. Si nadie ayuda en ese tiempo, el atacante tiene vía libre.',
    variantes:'4vs4. El ayudante debe llegar antes de que el rival haga 3 toques. Añadir zonas donde la ayuda no puede llegar.',
    preguntas:[
      {p:'¿Cuándo viste que un compañero necesitaba ayuda? ¿Cómo lo supiste?', razon:'Activa la lectura del juego. El niño empieza a procesar señales del entorno más allá del balón.'},
      {p:'¿Hubo momentos en que nadie ayudó? ¿Qué pasó después?', razon:'Conecta la falta de cobertura con la consecuencia. Aprendizaje por consecuencia natural del juego.'},
      {p:'¿Es difícil estar pendiente del balón y de tus compañeros al mismo tiempo?', razon:'Introduce la idea de atención dividida. Reconocer la dificultad es el primer paso para superarla.'},
    ],
    color:'#633806', bg:'#FAEEDA'
  },
  {
    id:'ale3', cat:'alevin', catLabel:'Alevín', edad:'10-12 años',
    titulo:'El pasillo',
    emoji:'🚪',
    enfoque:'Espacios y profundidad. Introducción al concepto de pasar entre líneas.',
    neurociencia:'A los 10-12 años el niño puede empezar a anticipar movimientos del rival de forma básica. Las preguntas de predicción simple activan la corteza prefrontal sin saturarla.',
    desc:'El equipo en posesión gana puntos pasando el balón a través de un pasillo central sin que lo intercepten.',
    desarrollo:'Espacio 25x20m. En el centro hay un pasillo de 5m de ancho marcado con conos. 4vs4. El equipo gana 1 punto extra si consigue dar un pase que cruce el pasillo y llega a un compañero al otro lado.',
    variantes:'Hacer el pasillo más estrecho. Añadir un defensor que solo puede estar dentro del pasillo. Dos pasillos.',
    preguntas:[
      {p:'¿Cuándo conseguisteis pasar por el pasillo? ¿Qué hicisteis antes de ese pase?', razon:'El niño empieza a identificar las acciones previas que crean la oportunidad. Pensamiento causal elemental.'},
      {p:'¿Cómo os colocasteis para que fuera más fácil pasar por el centro?', razon:'Primera pregunta de posicionamiento colectivo. El niño verbaliza una solución táctica básica.'},
      {p:'¿El defensor del pasillo siempre estaba en el mismo sitio? ¿Lo aprovechasteis?', razon:'Lectura del rival. Introduce la idea de leer al oponente para tomar decisiones.'},
    ],
    color:'#633806', bg:'#FAEEDA'
  },
  // ── INFANTIL ──
  {
    id:'inf1', cat:'infantil', catLabel:'Infantil', edad:'12-14 años',
    titulo:'Crear y ocupar el espacio',
    emoji:'📐',
    enfoque:'Amplitud y profundidad. El jugador empieza a entender por qué se mueve, no solo cómo.',
    neurociencia:'A los 12-14 años la corteza prefrontal ya permite razonamiento hipotético básico: "si hago esto, pasará aquello". Las preguntas pueden ir un paso más allá del presente inmediato.',
    desc:'El equipo en posesión debe tener siempre un jugador en cada zona del campo antes de poder rematar.',
    desarrollo:'Campo dividido en 6 zonas. 6vs6. Para poder finalizar, el equipo debe tener al menos un jugador en 4 de las 6 zonas en el momento del tiro. Si no, el gol no cuenta.',
    variantes:'Reducir a 3 zonas obligatorias. Añadir que no puede haber dos jugadores en la misma zona. Norma de toque máximo.',
    preguntas:[
      {p:'¿Hubo momentos en que el equipo estaba muy junto? ¿Qué pasaba entonces?', razon:'El jugador conecta la concentración espacial con la pérdida de opciones. Primer paso hacia el concepto de amplitud.'},
      {p:'¿Cómo sabías cuándo moverte a otra zona? ¿Qué miraste?', razon:'Introduce la percepción previa a la acción. Los 12-14 años ya pueden verbalizar lo que leen antes de decidir.'},
      {p:'¿Alguna vez estabas en una buena zona pero nadie te pasó? ¿Por qué crees que pasó eso?', razon:'Empatía táctica avanzada. El jugador empieza a entender las limitaciones del compañero.'},
    ],
    color:'#0C447C', bg:'#E6F1FB'
  },
  {
    id:'inf2', cat:'infantil', catLabel:'Infantil', edad:'12-14 años',
    titulo:'Presión coordinada',
    emoji:'⚡',
    enfoque:'Defensa en bloque y presión. El jugador aprende cuándo y por qué presionar.',
    neurociencia:'La memoria de trabajo y la inhibición de respuestas mejoran notablemente a los 12-14 años. El jugador puede contener el impulso de ir al balón y esperar el momento correcto.',
    desc:'El equipo defensor practica presionar en el momento exacto, no antes ni después.',
    desarrollo:'Espacio 30x20m. 5vs5. El equipo defensor tiene una señal acordada (palmada del entrenador o un grito) que indica el momento de presionar. Hasta esa señal deben mantener el bloque sin ir al balón.',
    variantes:'El jugador que decide cuándo presionar es el propio equipo sin señal externa. Añadir zona de presión permitida.',
    preguntas:[
      {p:'¿Cuándo fue más efectiva la presión: cuando ibais todos a la vez o cuando uno iba solo?', razon:'El jugador descubre por experiencia la importancia de la presión coordinada.'},
      {p:'¿Hubo momentos en que quisiste ir al balón pero te aguantaste? ¿Fue difícil? ¿Valió la pena?', razon:'Activa la reflexión sobre la inhibición de impulsos. Conecta el autocontrol con el resultado.'},
      {p:'¿Cómo sabías cuándo era el buen momento para presionar si no había señal?', razon:'Introduce la lectura autónoma del juego. Los 12-14 años están en el límite de poder leer cuándo presionar.'},
    ],
    color:'#0C447C', bg:'#E6F1FB'
  },
  // ── CADETE ──
  {
    id:'cad1', cat:'cadete', catLabel:'Cadete', edad:'14-16 años',
    titulo:'Progresión por intervalos',
    emoji:'↗',
    enfoque:'Ocupación de espacios entre líneas. El jugador entiende el concepto de intervalo.',
    neurociencia:'A los 14-16 años la corteza prefrontal permite planificación estratégica y razonamiento hipotético complejo. El jugador puede analizar situaciones antes de que ocurran y verbalizar su proceso de decisión.',
    desc:'El equipo en posesión practica progresar usando los espacios entre las líneas rivales.',
    desarrollo:'Espacio 35x25m. 7vs7 con dos equipos estructurados en líneas. El equipo atacante gana puntos cada vez que un jugador recibe entre las líneas rivales y se gira. El defensor debe mantener las líneas compactas.',
    variantes:'Añadir límite de toques en las líneas. El receptor entre líneas debe dar un pase de cara antes de 2 toques. Añadir porteros y finalización.',
    preguntas:[
      {p:'¿Cuándo conseguiste recibir entre líneas? ¿Qué hiciste antes de pedir el balón?', razon:'El cadete puede verbalizar la secuencia de acciones previas. Introduce el concepto de desmarque preparatorio.'},
      {p:'¿Cuándo el rival mantenía bien las líneas, qué alternativa encontraste?', razon:'Resolución de problemas táctica. El cadete ya puede buscar soluciones cuando la primera opción está cerrada.'},
      {p:'¿Hay algún microconcepto de los que trabajamos que crees que se aplica directamente aquí?', razon:'Metacognición táctica. Conectar el juego con el aprendizaje explícito de conceptos.'},
    ],
    color:'#993C1D', bg:'#FAECE7'
  },
  {
    id:'cad2', cat:'cadete', catLabel:'Cadete', edad:'14-16 años',
    titulo:'Transición ofensiva organizada',
    emoji:'⚡',
    enfoque:'Transición defensa-ataque. El jugador aprende a leer el momento de recuperación.',
    neurociencia:'La capacidad de inhibir la respuesta impulsiva y planificar la acción tras recuperar mejora significativamente a los 14-16 años. El jugador puede empezar a anticipar la transición antes de recuperar el balón.',
    desc:'Tras recuperar el balón, el equipo practica la transición rápida y organizada antes de que el rival se reorganice.',
    desarrollo:'Espacio 40x30m. 6vs6. Cuando un equipo recupera, tiene 6 segundos para avanzar más allá de la línea de medio campo. Si lo consigue, gana 1 punto. Si marca gol en esos 6 segundos, gana 3 puntos.',
    variantes:'Reducir a 4 segundos. Añadir un jugador neutral que siempre juega con el equipo en transición. Obligar a dar un pase hacia adelante antes de cruzar el medio.',
    preguntas:[
      {p:'¿Cuándo sabías antes de recuperar el balón que ibas a poder hacer la transición?', razon:'Anticipa el pensamiento predictivo. Los cadetes ya pueden anticipar la transición mientras defienden.'},
      {p:'¿Qué señales del rival te indicaban que había espacio para atacar rápido?', razon:'Lectura del rival desorganizado. Introduce el concepto de aprovechamiento de la desorganización defensiva.'},
      {p:'¿Qué microconcepto tuyo de posición crees que es clave en la transición ofensiva?', razon:'Conecta el aprendizaje individual con el colectivo. El cadete puede relacionar su rol con el juego de equipo.'},
    ],
    color:'#993C1D', bg:'#FAECE7'
  },
  // ── JUVENIL ──
  {
    id:'juv1', cat:'juvenil', catLabel:'Juvenil', edad:'16-18 años',
    titulo:'Análisis táctico en tiempo real',
    emoji:'🧠',
    enfoque:'Comprensión del juego. El jugador toma decisiones y las analiza autónomamente.',
    neurociencia:'La corteza prefrontal está en fase final de maduración. El juvenil puede razonar hipotéticamente, anticipar consecuencias complejas y autoevaluar sus decisiones con precisión.',
    desc:'El jugador para el juego cuando considera que ha tomado una decisión especialmente buena o mala, y explica por qué.',
    desarrollo:'Partido libre 8vs8. Cualquier jugador puede gritar "pausa" en cualquier momento. Al parar, explica qué vio, qué decidió y por qué. El equipo debate durante 30 segundos. Luego continúa el juego.',
    variantes:'Solo puede parar el entrenador para preguntar al jugador. Limitar a 3 pausas por equipo. Grabar las pausas para verlas después.',
    preguntas:[
      {p:'¿Cuándo pausaste el juego, ya habías tomado la decisión antes de recibir el balón o la tomaste al recibirlo?', razon:'Metacognición del proceso de decisión. El juvenil puede distinguir entre decisión anticipada y reactiva.'},
      {p:'¿Hubo situaciones donde sabías cuál era la mejor opción pero no pudiste ejecutarla? ¿Por qué?', razon:'Diferencia entre conocimiento táctico y ejecución. Fundamental para el desarrollo de la autonomía.'},
      {p:'¿Si pudieras cambiar algo de tu posicionamiento antes de recibir el balón, qué cambiarías y por qué?', razon:'Retroalimentación anticipatoria. El nivel más alto de metacognición táctica que puede alcanzar un jugador en formación.'},
    ],
    color:'#3C3489', bg:'#EEEDFE'
  },
  {
    id:'juv2', cat:'juvenil', catLabel:'Juvenil', edad:'16-18 años',
    titulo:'Juego de posición con roles específicos',
    emoji:'🎯',
    enfoque:'Comprensión del juego por posición. Cada jugador entiende su función en el sistema.',
    neurociencia:'A los 16-18 años el cerebro puede mantener múltiples variables simultáneas y gestionar la complejidad táctica. Las preguntas pueden conectar el rol individual con el colectivo.',
    desc:'Cada jugador tiene un rol específico y debe explicar cómo su posición afecta al resto del equipo.',
    desarrollo:'Partido posicional 8vs8 con estructura definida. Cada jugador conoce sus 3 microconceptos principales de su posición. El entrenador para el juego periódicamente y pregunta a un jugador concreto.',
    variantes:'El propio jugador para el juego y explica. Los compañeros evalúan si la explicación es correcta. Añadir un cuaderno donde cada jugador anota su autocrítica al terminar.',
    preguntas:[
      {p:'¿Cómo condicionó tu posicionamiento la toma de decisiones de tus compañeros más cercanos?', razon:'Comprensión sistémica del juego. El juvenil ya puede entender cómo su posición afecta las opciones de los demás.'},
      {p:'¿En qué momentos del partido sentiste que estabas aplicando conscientemente lo que hemos trabajado en sesión?', razon:'Transferencia del aprendizaje explícito al partido. El indicador más claro de comprensión real del juego.'},
      {p:'¿Qué aspecto de tu juego crees que debes seguir trabajando? ¿Por qué?', razon:'Autonomía en el aprendizaje. El jugador identifica sus propias necesidades sin que el analista las señale.'},
    ],
    color:'#3C3489', bg:'#EEEDFE'
  },
];

// ─── RENDER PLANTILLAS ───
function renderPlantillas() {
  const fp = document.getElementById('pfp')?.value || '';
  const fc = document.getElementById('pfc')?.value || '';
  let list = PLANTILLAS_CAT.filter(p => (!fp || p.cat === fp) && (!fc || p.cat === fc));

  const CATS = [
    {id:'benjamin', label:'Benjamín', edad:'8-10', color:'#085041', bg:'#E1F5EE'},
    {id:'alevin',   label:'Alevín',   edad:'10-12', color:'#633806', bg:'#FAEEDA'},
    {id:'infantil', label:'Infantil', edad:'12-14', color:'#0C447C', bg:'#E6F1FB'},
    {id:'cadete',   label:'Cadete',   edad:'14-16', color:'#993C1D', bg:'#FAECE7'},
    {id:'juvenil',  label:'Juvenil',  edad:'16-18', color:'#3C3489', bg:'#EEEDFE'},
  ];

  const g = document.getElementById('pgrid');
  if(!g) return;

  if(!list.length) { g.innerHTML = '<div class="empty">Sin plantillas con ese filtro.</div>'; return; }

  let html = '';
  CATS.forEach(cat => {
    const items = list.filter(p => p.cat === cat.id);
    if(!items.length) return;
    html += items.map(p => `
      <div class="card" onclick="openPlantilla('${p.id}')">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <div style="background:${p.bg};color:${p.color};font-size:10px;font-weight:700;padding:3px 8px;border-radius:4px;">${p.catLabel}</div>
          <div style="font-size:10px;color:var(--text3);">${p.edad}</div>
        </div>
        <div style="font-size:22px;margin-bottom:6px;">${p.emoji}</div>
        <div style="font-size:13px;font-weight:500;margin-bottom:5px;line-height:1.4;">${p.titulo}</div>
        <div style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.desc}</div>
        <div style="font-size:10px;color:${p.color};background:${p.bg};padding:4px 8px;border-radius:4px;line-height:1.5;">${p.enfoque}</div>
      </div>`).join('');
  });

  g.innerHTML = html;
}

function openPlantilla(id) {
  const p = PLANTILLAS_CAT.find(x => x.id === id);
  if(!p) return;

  document.getElementById('dpt').textContent = p.titulo;
  document.getElementById('dpbody').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:1.25rem;">
      <div style="font-size:32px;">${p.emoji}</div>
      <div>
        <div style="background:${p.bg};color:${p.color};font-size:10px;font-weight:700;padding:3px 8px;border-radius:4px;display:inline-block;margin-bottom:4px;">${p.catLabel} · ${p.edad}</div>
        <div style="font-size:13px;color:var(--text2);line-height:1.5;">${p.enfoque}</div>
      </div>
    </div>

    <div style="background:${p.bg}80;border-left:3px solid ${p.color};border-radius:0 8px 8px 0;padding:.875rem;margin-bottom:1.25rem;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:${p.color};margin-bottom:5px;">Base neurociéntifica</div>
      <div style="font-size:12px;line-height:1.7;color:var(--text);">${p.neurociencia}</div>
    </div>

    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:.875rem;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text2);margin-bottom:.75rem;">Descripción</div>
      <div style="font-size:13px;line-height:1.7;">${p.desc}</div>
    </div>

    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:.875rem;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text2);margin-bottom:.75rem;">Desarrollo</div>
      <div style="font-size:13px;line-height:1.7;">${p.desarrollo}</div>
    </div>

    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:.875rem;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text2);margin-bottom:.75rem;">Variantes</div>
      <div style="font-size:13px;line-height:1.7;">${p.variantes}</div>
    </div>

    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:1rem;margin-bottom:.875rem;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text2);margin-bottom:.875rem;">Preguntas para el jugador</div>
      ${p.preguntas.map((q,i) => `
        <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:10px 12px;margin-bottom:8px;border-left:3px solid ${p.color};">
          <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:3px;">Pregunta ${i+1}</div>
          <div style="font-size:13px;font-weight:500;margin-bottom:5px;">${q.p}</div>
          <div style="font-size:11px;color:var(--text2);line-height:1.5;font-style:italic;">💡 ${q.razon}</div>
        </div>`).join('')}
    </div>

    <div style="font-size:10px;color:var(--text3);text-align:center;margin-top:1rem;">Plantilla basada en neurociencia del desarrollo cognitivo por edades · Omar Cortés Ferrero</div>`;

  openModal('modal-plantilla');
}

// ─── IMPORTAR TAREA DESDE MARKDOWN ───
function parseTareaMarkdown(md) {
  try {
    const lines = md.split('\n');
    let posicion = '', fase = '', titulo = '', desc = '', des = '', varText = '', pregs = [], mics = [];
    let section = '';

    for(let line of lines) {
      const t = line.trim();
      if(!t) continue;

      // Cabecera: Posición y Fase
      if(t.toLowerCase().startsWith('posición:') || t.toLowerCase().startsWith('posicion:')) {
        posicion = t.split(':').slice(1).join(':').trim();
        continue;
      }
      if(t.toLowerCase().startsWith('fase:')) {
        fase = t.split(':').slice(1).join(':').trim();
        continue;
      }
      if(t.toLowerCase().startsWith('categoría:') || t.toLowerCase().startsWith('categoria:')) {
        continue; // ignoramos categoría por ahora
      }

      // Título principal (# o ##)
      if(t.startsWith('## ') || (t.startsWith('# ') && !t.startsWith('### '))) {
        titulo = t.replace(/^#+\s/, '').trim();
        continue;
      }

      // Secciones
      if(t === '### DESCRIPCIÓN' || t === '### DESCRIPCION') { section = 'desc'; continue; }
      if(t === '### DESARROLLO') { section = 'des'; continue; }
      if(t === '### VARIANTES') { section = 'var'; continue; }
      if(t === '### PREGUNTAS PARA EL JUGADOR') { section = 'pregs'; continue; }
      if(t === '### MICROCONCEPTOS TRABAJADOS') { section = 'mics'; continue; }

      // Contenido por sección
      if(section === 'desc') desc += (desc ? ' ' : '') + t;
      if(section === 'des') des += (des ? ' ' : '') + t;
      if(section === 'var') varText += (varText ? ' ' : '') + t;
      if(section === 'pregs' && (t.startsWith('- ') || t.startsWith('* ') || /^\d+\./.test(t))) {
        pregs.push(t.replace(/^[-*]\s|^\d+\.\s/, '').trim());
      }
      if(section === 'mics' && (t.startsWith('- ') || t.startsWith('* ') || /^\d+\./.test(t))) {
        mics.push(t.replace(/^[-*]\s|^\d+\.\s/, '').trim());
      }
    }

    // Normalizar fase al código interno
    const faseMap = {
      'fase ofensiva': 'OF', 'ofensiva': 'OF', 'of': 'OF',
      'fase defensiva': 'DE', 'defensiva': 'DE', 'de': 'DE',
      'transición ofensiva': 'TO', 'transicion ofensiva': 'TO', 'to': 'TO', 'tda': 'TO', 'td-a': 'TO',
      'transición defensiva': 'TD', 'transicion defensiva': 'TD', 'td': 'TD', 'tad': 'TD', 'ta-d': 'TD',
    };
    const faseKey = faseMap[fase.toLowerCase()] || 'OF';

    // Normalizar posición
    const posMap = {
      'central': 'Central', 'laterales': 'Lateral', 'lateral': 'Lateral',
      'pivote': 'Pivote', 'pivotes': 'Pivote',
      'interior': 'Interior', 'interiores': 'Interior',
      'extremo': 'Extremo', 'extremos': 'Extremo',
      'delantero': 'Delantero', 'delanteros': 'Delantero',
    };
    const posKey = posMap[posicion.toLowerCase()] || posicion;

    return { titulo, desc, des, var: varText, preg: pregs, mics, pos: posKey, fase: faseKey, ok: true };
  } catch(e) {
    return { ok: false, error: e.message };
  }
}

function previewTareaImport() {
  const md = document.getElementById('import-md').value.trim();
  if(!md) { showToast('Pega el markdown de la tarea primero'); return; }

  const parsed = parseTareaMarkdown(md);
  const preview = document.getElementById('import-preview');

  if(!parsed.ok) {
    preview.innerHTML = `<div style="color:#A32D2D;padding:.875rem;background:#FCEBEB;border-radius:var(--radius-sm);">Error al leer el markdown: ${parsed.error}</div>`;
    return;
  }

  const fc = FASES.find(f => f.id === parsed.fase);
  const faseLabel = fc ? fc.label : parsed.fase;

  preview.innerHTML = `
    <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:1rem;margin-bottom:1rem;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.75rem;">Vista previa de la tarea importada</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:8px;">${parsed.titulo || '(Sin título)'}</div>
      <div style="display:flex;gap:6px;margin-bottom:.875rem;flex-wrap:wrap;">
        <span class="badge badge-pos">${parsed.pos}</span>
        ${fc?`<span class="badge ${fc.cls}">${faseLabel}</span>`:''}
      </div>
      ${parsed.desc?`<div style="margin-bottom:.75rem;"><div class="sl">Descripción</div><div style="font-size:12px;line-height:1.7;">${parsed.desc}</div></div>`:''}
      ${parsed.des?`<div style="margin-bottom:.75rem;"><div class="sl">Desarrollo</div><div style="font-size:12px;line-height:1.7;">${parsed.des}</div></div>`:''}
      ${parsed.var?`<div style="margin-bottom:.75rem;"><div class="sl">Variantes</div><div style="font-size:12px;line-height:1.7;">${parsed.var}</div></div>`:''}
      ${parsed.preg.length?`<div style="margin-bottom:.75rem;"><div class="sl">Preguntas (${parsed.preg.length})</div>${parsed.preg.map(p=>`<div style="background:var(--bg);border-radius:4px;padding:6px 9px;margin-bottom:4px;border-left:3px solid #1D9E75;font-size:12px;">${p}</div>`).join('')}</div>`:''}
      ${parsed.mics.length?`<div><div class="sl">Microconceptos (${parsed.mics.length})</div><div style="display:flex;flex-wrap:wrap;gap:4px;">${parsed.mics.map(m=>`<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#EEEDFE;color:#3C3489;">${m}</span>`).join('')}</div></div>`:''}
    </div>
    <button class="btn" style="width:100%;" onclick="confirmarImportTarea()">Confirmar e importar tarea</button>`;

  window._parsedImportTarea = parsed;
}

function confirmarImportTarea() {
  const p = window._parsedImportTarea;
  if(!p) return;

  const newId = Math.max(0, ...TAREAS.map(t => typeof t.id === 'number' ? t.id : 0)) + 1 + Date.now() % 10000;
  const newTarea = {
    id: newId,
    pos: p.pos,
    fase: p.fase,
    t: p.titulo || 'Tarea importada',
    j: '4-6',
    d: '15min',
    i: 'Media',
    desc: p.desc,
    des: p.des,
    var: p.var,
    preg: p.preg,
    mics: p.mics,
  };

  TAREAS.push(newTarea);

  // Guardar en storage para persistencia
  try {
    const stored = JSON.parse(localStorage.getItem('tareas_custom') || '[]');
    stored.push(newTarea);
    localStorage.setItem('tareas_custom', JSON.stringify(stored));
  } catch(e) {}

  closeModal('modal-import-tarea');
  renderTareas();
  showToast(`Tarea "${newTarea.t}" importada correctamente ✓`);
  document.getElementById('import-md').value = '';
  document.getElementById('import-preview').innerHTML = '';
  window._parsedImportTarea = null;
}

// Cargar tareas custom al inicio
function loadTareasCustom() {
  try {
    const stored = JSON.parse(localStorage.getItem('tareas_custom') || '[]');
    stored.forEach(t => {
      if(!TAREAS.find(x => x.id === t.id)) TAREAS.push(t);
    });
  } catch(e) {}
}

// ─── URL DEL JUGADOR ───
function copiarUrlJugador(id) {
  const base = window.location.origin + window.location.pathname.replace('index.html','').replace(/\/[^/]*$/, '/');
  const url = `${base}jugador.html?id=${id}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast('URL copiada. Pégala en WhatsApp al jugador ✓');
  }).catch(() => {
    prompt('Copia esta URL y envíasela al jugador:', url);
  });
}

// ─── CLIPS DE INFORME ───

function getClipsInforme(infId) {
  return state.clipsInforme.filter(c => c.informe_id === infId);
}

async function subirClipInforme(infId, jugId, file, titulo, tipo) {
  showToast('Subiendo clip...');
  const ext = file.name.split('.').pop();
  const filename = `informe_${infId}_${Date.now()}.${ext}`;
  const { data, error } = await DB.storage.from('clips').upload(filename, file, {
    cacheControl: '3600', upsert: false, contentType: file.type,
  });
  if(error) { showToast('Error subiendo clip: ' + error.message); return null; }
  const { data: urlData } = DB.storage.from('clips').getPublicUrl(filename);
  return urlData.publicUrl;
}

async function guardarClipInforme(infId, jugId) {
  const fileInput = document.getElementById(`clip-file-${infId}`);
  const tituloEl = document.getElementById(`clip-titulo-${infId}`);
  const tipoEl = document.getElementById(`clip-tipo-${infId}`);
  const driveEl = document.getElementById(`clip-drive-${infId}`);

  let url = driveEl?.value.trim() || '';

  if(fileInput?.files?.[0]) {
    const uploaded = await subirClipInforme(infId, jugId, fileInput.files[0], tituloEl?.value || '', tipoEl?.value || 'general');
    if(!uploaded) return;
    url = uploaded;
  }

  if(!url) { showToast('Selecciona un archivo o pega un enlace'); return; }

  const { data, error } = await DB.from('clips_informe').insert({
    informe_id: infId,
    jugador_id: jugId,
    titulo: tituloEl?.value.trim() || 'Clip del partido',
    tipo: tipoEl?.value || 'general',
    url,
  }).select();

  if(error) { showToast('Error: ' + error.message); return; }
  state.clipsInforme.unshift(data[0]);
  renderClipsInforme(infId, jugId);
  showToast('Clip añadido. El jugador ya puede verlo en su panel ✓');
  try { await DB.from('notificaciones').insert({jugador_id, tipo:'clip', leida:false}); } catch(e) {}
}

async function eliminarClip(clipId, infId, jugId) {
  if(!confirm('¿Eliminar este clip?')) return;
  await DB.from('clips_informe').delete().eq('id', clipId);
  state.clipsInforme = state.clipsInforme.filter(c => c.id !== clipId);
  renderClipsInforme(infId, jugId);
  showToast('Clip eliminado');
}

function renderClipsInforme(infId, jugId) {
  const cont = document.getElementById(`clips-cont-${infId}`);
  if(!cont) return;
  const clips = getClipsInforme(infId);
  const TIPOS = {
    general: { label: 'General', color: '#7C6FF0', bg: '#EEEDFE' },
    positivo: { label: '✓ Positivo', color: '#085041', bg: '#E1F5EE' },
    mejorar: { label: '△ A mejorar', color: '#993C1D', bg: '#FAECE7' },
    referencia: { label: '★ Referencia', color: '#633806', bg: '#FAEEDA' },
  };

  cont.innerHTML = `
    <!-- SUBIR NUEVO CLIP -->
    <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.875rem;margin-bottom:1rem;">
      <div style="font-size:11px;font-weight:500;margin-bottom:8px;color:var(--text2);">Añadir clip a este informe</div>
      <input type="text" id="clip-titulo-${infId}" placeholder="Título del clip (ej: Desmarque min.23)" style="width:100%;height:32px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);margin-bottom:7px;outline:none;">
      <select id="clip-tipo-${infId}" style="width:100%;height:32px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);margin-bottom:7px;">
        <option value="general">General</option>
        <option value="positivo">✓ Positivo — lo que hizo bien</option>
        <option value="mejorar">△ A mejorar — lo que debe corregir</option>
        <option value="referencia">★ Referencia — ejemplo a seguir</option>
      </select>
      <div style="font-size:11px;color:var(--text3);margin-bottom:5px;">Subir desde PC (MP4, hasta 50MB):</div>
      <input type="file" id="clip-file-${infId}" accept="video/mp4,video/*" style="width:100%;font-size:12px;margin-bottom:7px;">
      <div style="font-size:11px;color:var(--text3);margin-bottom:5px;">O pegar enlace Google Drive:</div>
      <input type="text" id="clip-drive-${infId}" placeholder="https://drive.google.com/..." style="width:100%;height:32px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);margin-bottom:8px;outline:none;">
      <button class="btn" style="width:100%;height:32px;font-size:12px;" onclick="guardarClipInforme('${infId}','${jugId}')">Añadir clip</button>
    </div>

    <!-- CLIPS EXISTENTES -->
    ${clips.length ? clips.map(c => {
      const tipo = TIPOS[c.tipo] || TIPOS.general;
      const isDrive = c.url.includes('drive.google.com');
      const embedUrl = isDrive ? c.url.replace('/view', '/preview').replace(/\/file\/d\/([^/]+).*/, '/file/d/$1/preview') : c.url;
      return `<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.875rem;margin-bottom:.75rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem;">
          <div style="display:flex;align-items:center;gap:7px;">
            <span style="font-size:10px;padding:2px 8px;border-radius:99px;background:${tipo.bg};color:${tipo.color};">${tipo.label}</span>
            <span style="font-size:12px;font-weight:500;">${c.titulo}</span>
          </div>
          <button onclick="eliminarClip('${c.id}','${infId}','${jugId}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;">✕</button>
        </div>
        ${isDrive
          ? `<div style="width:100%;aspect-ratio:16/9;border-radius:var(--radius-sm);overflow:hidden;background:#000;"><iframe src="${embedUrl}" width="100%" height="100%" style="border:none;" allowfullscreen allow="autoplay"></iframe></div>`
          : `<video controls style="width:100%;border-radius:var(--radius-sm);max-height:220px;background:#000;" src="${c.url}"></video>`
        }
      </div>`;
    }).join('') : '<div style="font-size:12px;color:var(--text3);text-align:center;padding:.5rem 0;">Sin clips todavía. Añade el primero arriba.</div>'}`;
}

// Añadir sección de clips en verInforme del analista
function abrirGestorClips(infId, jugId) {
  const modal = document.getElementById('modal-clips-informe');
  const jug = state.jugadores.find(x => x.id === jugId);
  const inf = state.informesPartido.find(x => x.id === infId);
  if(!modal || !inf) return;
  document.getElementById('clips-modal-title').textContent = `Clips · ${inf.partido}`;
  document.getElementById('clips-cont-${infId}') || modal.querySelector('#clips-main-cont').setAttribute('id', `clips-cont-${infId}`);
  modal.querySelector('#clips-main-cont').id = `clips-cont-${infId}`;
  modal.dataset.infId = infId;
  modal.dataset.jugId = jugId;
  openModal('modal-clips-informe');
  renderClipsInforme(infId, jugId);
}

// ─── CALENDARIO ───
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DIAS_SEMANA = ['L','M','X','J','V','S','D'];

let calState = { year: new Date().getFullYear(), month: new Date().getMonth() };

async function loadEventos() {
  try {
    const { data } = await DB.from('eventos_calendario').select('*').order('fecha');
    state.eventos = data || [];
  } catch(e) { state.eventos = []; }
}

function renderCalendario() {
  const { year, month } = calState;
  const firstDay = new Date(year, month, 1).getDay();
  const startDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Header
  document.getElementById('cal-mes').textContent = `${MESES[month]} ${year}`;

  // Eventos del mes
  const eventosDelMes = (state.eventos||[]).filter(e => {
    const d = new Date(e.fecha);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  // Construir grid
  let cells = '';
  // Días vacíos al inicio
  for(let i = 0; i < startDay; i++) cells += '<div></div>';

  for(let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const evDia = eventosDelMes.filter(e => e.fecha === dateStr);
    const dots = evDia.map(e => {
      const col = e.tipo === 'partido' ? '#D85A30' : e.tipo === 'sesion' ? '#7C6FF0' : '#1D9E75';
      return `<div style="width:5px;height:5px;border-radius:50%;background:${col};"></div>`;
    }).join('');
    cells += `<div onclick="openDiaCal('${dateStr}')" style="aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;font-weight:${isToday?'700':'400'};color:${isToday?'var(--bg)':'var(--text)'};background:${isToday?'var(--text)':'transparent'};border:0.5px solid ${isToday?'transparent':'var(--border)'};transition:background .15s;" onmouseover="this.style.background=this.style.background||'var(--bg2)'" onmouseout="this.style.background='${isToday?'var(--text)':'transparent'}'">
      <span>${d}</span>
      <div style="display:flex;gap:2px;">${dots}</div>
    </div>`;
  }

  document.getElementById('cal-grid').innerHTML = cells;

  // Lista de eventos del mes
  const listaEl = document.getElementById('cal-eventos-lista');
  if(!eventosDelMes.length) {
    listaEl.innerHTML = '<div style="font-size:12px;color:var(--text3);padding:.5rem 0;">Sin eventos este mes.</div>';
  } else {
    const sorted = [...eventosDelMes].sort((a,b) => a.fecha.localeCompare(b.fecha));
    listaEl.innerHTML = sorted.map(e => {
      const col = e.tipo === 'partido' ? '#D85A30' : e.tipo === 'sesion' ? '#7C6FF0' : '#1D9E75';
      const icon = e.tipo === 'partido' ? '⚽' : e.tipo === 'sesion' ? '▶' : '📋';
      const d = new Date(e.fecha + 'T12:00:00');
      return `<div style="display:flex;align-items:center;gap:10px;padding:.625rem 0;border-bottom:0.5px solid var(--border);">
        <div style="width:36px;height:36px;border-radius:var(--radius-sm);background:${col}20;color:${col};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">${icon}</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:500;">${e.titulo}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:1px;">${d.toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short'})}${e.hora?' · '+e.hora:''}</div>
        </div>
        <button onclick="eliminarEvento('${e.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;padding:4px;">✕</button>
      </div>`;
    }).join('');
  }
}

function calPrev() { if(calState.month===0){calState.month=11;calState.year--;}else{calState.month--;} renderCalendario(); }
function calNext() { if(calState.month===11){calState.month=0;calState.year++;}else{calState.month++;} renderCalendario(); }
function calHoy() { calState.year=new Date().getFullYear();calState.month=new Date().getMonth(); renderCalendario(); }

function openDiaCal(dateStr) {
  document.getElementById('ev-fecha').value = dateStr;
  document.getElementById('ev-titulo').value = '';
  document.getElementById('ev-hora').value = '';
  document.getElementById('ev-tipo').value = 'entrenamiento';
  document.getElementById('ev-notas').value = '';
  document.getElementById('ev-fecha-display').textContent = new Date(dateStr+'T12:00:00').toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
  openModal('modal-nuevo-evento');
}

async function guardarEvento() {
  const titulo = document.getElementById('ev-titulo').value.trim();
  if(!titulo) { showToast('El título es obligatorio'); return; }
  const data = {
    titulo,
    fecha: document.getElementById('ev-fecha').value,
    hora: document.getElementById('ev-hora').value || null,
    tipo: document.getElementById('ev-tipo').value,
    notas: document.getElementById('ev-notas').value.trim(),
  };
  const { data: res, error } = await DB.from('eventos_calendario').insert(data).select();
  if(error) { showToast('Error: ' + error.message); return; }
  state.eventos = [...(state.eventos||[]), res[0]];
  closeModal('modal-nuevo-evento');
  renderCalendario();
  showToast('Evento añadido ✓');
}

async function eliminarEvento(id) {
  await DB.from('eventos_calendario').delete().eq('id', id);
  state.eventos = (state.eventos||[]).filter(e => e.id !== id);
  renderCalendario();
}

// ─── NOTIFICACIONES ───
async function marcarNotificacion(jugId) {
  try {
    await DB.from('notificaciones').insert({ jugador_id: jugId, leida: false, fecha: new Date().toISOString() });
  } catch(e) {}
}

// ─── EXPORTAR PDF ───
async function exportarInformePDF(infId) {
  const inf = state.informesPartido.find(x => x.id === infId);
  if(!inf) return;
  const jug = state.jugadores.find(x => x.id === inf.jugador_id);
  if(!jug) return;

  const nota = parseFloat(inf.nota_decimal) || parseInt(inf.valoracion) || 0;
  const nc = nota>=8?'#1D9E75':nota>=6?'#E07B00':'#D85A30';
  const nl = nota>=8?'Muy bueno':nota>=6?'Correcto':nota>=4?'Regular':'A mejorar';

  let starsData = {};
  try { starsData = inf.estrellas_json ? JSON.parse(inf.estrellas_json) : {}; } catch(e) {}

  function avgF(key) {
    const vals = (starsData[key]||[]).filter(v=>v>0);
    return vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : null;
  }

  function barHtml(pct, color) {
    return `<div style="width:100%;height:8px;background:#f0f0f0;border-radius:99px;margin:4px 0;">
      <div style="width:${pct}%;height:8px;background:${color};border-radius:99px;"></div>
    </div>`;
  }

  function faseSection(key, label, color, texto) {
    const avg = avgF(key);
    if(!avg && !texto) return '';
    const pct = avg ? Math.round((parseFloat(avg)/5)*100) : 0;
    return `<div style="border:1px solid ${color}40;border-radius:8px;padding:12px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div style="background:${color}20;color:${color};font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;">${key.replace('TDA','TD-A').replace('TAD','TA-D')}</div>
        <div style="font-size:11px;font-weight:500;">${label}</div>
        ${avg?`<div style="font-size:13px;font-weight:700;color:${color};">${avg}/5</div>`:''}
      </div>
      ${avg?barHtml(pct,color):''}
      ${texto?`<div style="font-size:11px;line-height:1.6;color:#333;margin-top:6px;">${texto}</div>`:''}
    </div>`;
  }

  const logoHtml = jug.logo_club
    ? `<img src="${jug.logo_club}" style="width:50px;height:50px;object-fit:contain;border-radius:4px;">`
    : `<div style="width:50px;height:50px;border:1px dashed #ccc;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#999;">Logo</div>`;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Informe ${jug.nombre} · ${inf.partido}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a1a; background: #fff; padding: 32px; max-width: 700px; margin: 0 auto; }
    .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; }
    .nota-box { display: flex; align-items: center; gap: 14px; background: #f7f7f5; border-radius: 10px; padding: 14px; margin-bottom: 16px; }
    .nota-circle { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; flex-shrink: 0; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
    .box-pos { background: #E1F5EE; border-radius: 8px; padding: 10px; }
    .box-neg { background: #FAECE7; border-radius: 8px; padding: 10px; }
    .footer { margin-top: 24px; padding-top: 12px; border-top: 1px solid #ddd; display: flex; justify-content: space-between; font-size: 10px; color: #999; }
    @media print { body { padding: 20px; } }
  </style></head><body>
  <div class="header">
    <div style="display:flex;align-items:center;gap:12px;">${logoHtml}
      <div>
        <div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#666;">Informe Técnico Individual</div>
        <div style="font-size:20px;font-weight:700;margin-top:2px;">${jug.nombre}</div>
        <div style="font-size:11px;color:#666;margin-top:2px;">${jug.posicion} · ${jug.equipo||''} · ${jug.categoria||''}</div>
      </div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:11px;color:#666;">${new Date(inf.fecha+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'})}</div>
      <div style="font-size:13px;font-weight:600;margin-top:2px;">${inf.partido}</div>
      ${inf.rival?`<div style="font-size:11px;color:#666;">vs ${inf.rival}</div>`:''}
      ${inf.resultado?`<div style="font-size:13px;font-weight:600;color:#1a1a1a;">Resultado: ${inf.resultado}</div>`:''}
    </div>
  </div>

  <div class="nota-box">
    <div class="nota-circle" style="background:${nc}20;color:${nc};border:2px solid ${nc}40;">${nota?nota.toFixed(1):'—'}</div>
    <div>
      <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#666;">Nota global</div>
      <div style="font-size:16px;font-weight:600;color:${nc};margin-top:2px;">${nota?nl:'Sin valorar'}</div>
      <div style="font-size:10px;color:#666;margin-top:2px;">Media ponderada de todas las fases · Temporada 2025/26</div>
    </div>
  </div>

  ${faseSection('MCB','Momento con balón','#1D9E75',inf.mcb)}
  ${faseSection('MSB','Momento sin balón','#378ADD',inf.msb)}
  ${faseSection('TDA','Transición defensa → ataque','#E07B00',inf.tda)}
  ${faseSection('TAD','Transición ataque → defensa','#D85A30',inf.tad)}

  ${(inf.positivos||inf.mejoras)?`<div class="grid2">
    ${inf.positivos?`<div class="box-pos"><div style="font-size:9px;font-weight:700;color:#085041;text-transform:uppercase;margin-bottom:5px;">✓ Aspectos positivos</div><div style="font-size:11px;line-height:1.6;color:#085041;">${inf.positivos}</div></div>`:'<div></div>'}
    ${inf.mejoras?`<div class="box-neg"><div style="font-size:9px;font-weight:700;color:#993C1D;text-transform:uppercase;margin-bottom:5px;">△ A mejorar</div><div style="font-size:11px;line-height:1.6;color:#993C1D;">${inf.mejoras}</div></div>`:'<div></div>'}
  </div>`:''}

  ${inf.objetivos_trabajados?`<div style="border:1px solid #eee;border-radius:8px;padding:12px;margin-bottom:10px;">
    <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#666;margin-bottom:8px;">Objetivos del jugador</div>
    ${inf.objetivos_trabajados.split(' | ').filter(Boolean).map(o=>`<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;font-size:11px;"><div style="width:5px;height:5px;border-radius:50%;background:#1D9E75;flex-shrink:0;"></div>${o}</div>`).join('')}
  </div>`:''}

  ${inf.microconceptos_obs?`<div style="border:1px solid #eee;border-radius:8px;padding:12px;margin-bottom:10px;">
    <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#666;margin-bottom:8px;">Microconceptos observados</div>
    <div style="display:flex;flex-wrap:wrap;gap:5px;">${inf.microconceptos_obs.split(',').filter(Boolean).map(m=>`<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#EEEDFE;color:#3C3489;">${m.trim()}</span>`).join('')}</div>
  </div>`:''}

  ${inf.notas?`<div style="background:#f7f7f5;border-left:3px solid #1a1a1a;border-radius:0 8px 8px 0;padding:10px;margin-bottom:10px;">
    <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#666;margin-bottom:5px;">Notas del analista</div>
    <div style="font-size:11px;line-height:1.7;font-style:italic;">${inf.notas}</div>
  </div>`:''}

  <div class="footer">
    <span>Informe elaborado por <strong>Omar Cortés Ferrero</strong> · Analista Individual de Fútbol Base</span>
    <span>${new Date().toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'})}</span>
  </div>
  </body></html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if(win) {
    win.onload = () => { setTimeout(() => { win.print(); URL.revokeObjectURL(url); }, 500); };
  }
  showToast('PDF abierto. Usa Ctrl+P o el diálogo de impresión para guardar.');
}


// ─── CARRUSEL DE CLIPS POR MICROCONCEPTO ───
// Tabla: clips_microconcepto (id, micro_id, titulo, url, tipo, created_at)

function getMicClips(microId) {
  return (state.micClips||[]).filter(c => String(c.micro_id)===String(microId));
}

function renderMicCarrusel(microId) {
  const m = state.microconceptos.find(x => x.id === microId);
  const extraClips = getMicClips(microId);

  // Construir lista completa: video_url principal + clips adicionales
  const allClips = [];
  if(m && m.video_url) {
    allClips.push({ url: m.video_url, titulo: 'Clip principal', tipo: 'referencia', _main: true });
  }
  extraClips.forEach(c => allClips.push(c));

  if(!allClips.length) {
    return `<div style="background:var(--bg2);border-radius:var(--radius-sm);aspect-ratio:16/9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--text3);">
      <span style="font-size:32px;opacity:.4;">▶</span>
      <span style="font-size:12px;">Sin clips todavía</span>
    </div>`;
  }

  const TIPO_CFG = {
    positivo: {bg:'#E1F5EE', color:'#085041', label:'✓ Positivo'},
    mejorar:  {bg:'#FAECE7', color:'#993C1D', label:'△ A mejorar'},
    referencia:{bg:'#FAEEDA',color:'#633806', label:'★ Referencia'},
    general:  {bg:'#EEEDFE', color:'#3C3489', label:'◎ General'},
  };

  const slideId = 'carrusel-' + microId;
  const total = allClips.length;

  const slides = allClips.map((c, i) => {
    const tc = TIPO_CFG[c.tipo] || TIPO_CFG.general;
    const videoHtml = renderVideoClipItem(c);
    return '<div class="carrusel-slide" data-idx="'+i+'" style="display:'+(i===0?'block':'none')+';">'+
      '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">'+
        '<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:'+tc.bg+';color:'+tc.color+';">'+tc.label+'</span>'+
        (c.titulo ? '<span style="font-size:11px;font-weight:500;color:var(--text2);">'+c.titulo+'</span>' : '')+
        (total > 1 ? '<span style="font-size:10px;color:var(--text3);margin-left:auto;">'+(i+1)+'/'+total+'</span>' : '')+
      '</div>'+
      videoHtml+
    '</div>';
  }).join('');

  const dots = total > 1 ? allClips.map((_,i) =>
    '<button onclick="carruselGo(&quot;'+slideId+'&quot;,'+i+')" id="'+slideId+'-dot-'+i+'" '+
    'style="width:'+(i===0?'20px':'7px')+';height:7px;border-radius:99px;background:'+(i===0?'var(--text)':'var(--border2)')+';border:none;cursor:pointer;transition:all .2s;padding:0;"></button>'
  ).join('') : '';

  return '<div id="'+slideId+'" style="position:relative;">'+
    slides+
    (total > 1 ? '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">'+
      '<button onclick="carruselPrev(&quot;'+slideId+'&quot;,'+total+')" style="background:var(--bg2);border:0.5px solid var(--border);border-radius:6px;width:32px;height:32px;cursor:pointer;font-size:16px;color:var(--text2);">‹</button>'+
      '<div style="display:flex;gap:5px;align-items:center;">'+dots+'</div>'+
      '<button onclick="carruselNext(&quot;'+slideId+'&quot;,'+total+')" style="background:var(--bg2);border:0.5px solid var(--border);border-radius:6px;width:32px;height:32px;cursor:pointer;font-size:16px;color:var(--text2);">›</button>'+
    '</div>' : '')+
  '</div>';
}

function renderVideoClipItem(c) {
  if(!c.url) return '';
  if(c.url.includes('supabase.co/storage')) {
    return `<video controls playsinline style="width:100%;border-radius:8px;max-height:220px;background:#000;" src="${c.url}"></video>`;
  }
  const m = c.url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || c.url.match(/id=([a-zA-Z0-9_-]+)/);
  if(m) return `<div style="width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;"><iframe src="https://drive.google.com/file/d/${m[1]}/preview" width="100%" height="100%" style="border:none;" allowfullscreen allow="autoplay"></iframe></div>`;
  return `<video controls playsinline style="width:100%;border-radius:8px;max-height:220px;background:#000;" src="${c.url}"></video>`;
}

function carruselGo(id, idx) {
  const container = document.getElementById(id);
  if(!container) return;
  const slides = container.querySelectorAll('.carrusel-slide');
  slides.forEach((s,i) => s.style.display = i===idx ? 'block' : 'none');
  slides.forEach((_,i) => {
    const dot = document.getElementById(`${id}-dot-${i}`);
    if(dot) { dot.style.width = i===idx?'20px':'7px'; dot.style.background = i===idx?'var(--text)':'var(--border2)'; }
  });
  container._idx = idx;
}

function carruselNext(id, total) {
  const container = document.getElementById(id);
  const cur = container?._idx || 0;
  carruselGo(id, (cur+1)%total);
}

function carruselPrev(id, total) {
  const container = document.getElementById(id);
  const cur = container?._idx || 0;
  carruselGo(id, (cur-1+total)%total);
}

async function addMicClip(microId) {
  const fileInput = document.getElementById(`mc-clip-file-${microId}`);
  const urlInput = document.getElementById(`mc-clip-url-${microId}`);
  const tituloInput = document.getElementById(`mc-clip-titulo-${microId}`);
  const tipoInput = document.getElementById(`mc-clip-tipo-${microId}`);

  let url = urlInput?.value.trim() || '';

  if(fileInput?.files?.[0]) {
    if(fileInput.files[0].size > 50*1024*1024) { showToast('El archivo supera 50MB'); return; }
    showToast('Subiendo clip...');
    const uploaded = await uploadVideoClip(fileInput.files[0]);
    if(!uploaded) return;
    url = uploaded;
  }

  if(!url) { showToast('Selecciona archivo o pega enlace'); return; }

  const clips = getMicClips(microId);
  const mForCheck = state.microconceptos.find(x=>x.id===microId);
  const mainSlot = mForCheck?.video_url ? 1 : 0;
  if(clips.length >= (3 - mainSlot)) { showToast('Máximo de clips adicionales alcanzado'); return; }

  const { data, error } = await DB.from('clips_microconcepto').insert({
    micro_id: microId,
    titulo: tituloInput?.value.trim() || '',
    tipo: tipoInput?.value || 'general',
    url,
  }).select();

  if(error) { showToast('Error: '+error.message); return; }
  if(!state.micClips) state.micClips = [];
  state.micClips.push(data[0]);

  // Actualizar carrusel principal Y panel de clips
  const carruselEl = document.getElementById('dm-carrusel');
  if(carruselEl) carruselEl.innerHTML = renderMicCarrusel(microId);
  renderMicClipsPanel(microId);

  // Actualizar badge en la lista de microconceptos
  renderMicros();

  if(fileInput) fileInput.value = '';
  if(urlInput) urlInput.value = '';
  if(tituloInput) tituloInput.value = '';
  showToast('Clip añadido ✓');
}

async function deleteMicClip(clipId, microId) {
  if(!confirm('¿Eliminar este clip?')) return;
  await DB.from('clips_microconcepto').delete().eq('id', clipId);
  state.micClips = (state.micClips||[]).filter(c=>c.id!==clipId);
  const carruselElDel = document.getElementById('dm-carrusel');
  if(carruselElDel) carruselElDel.innerHTML = renderMicCarrusel(microId);
  renderMicClipsPanel(microId);
  renderMicros();
  showToast('Clip eliminado');
}

function renderMicClipsPanel(microId) {
  const panel = document.getElementById(`mic-clips-panel-${microId}`);
  if(!panel) return;
  const clips = getMicClips(microId);
  const SI = 'width:100%;height:32px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);margin-bottom:6px;outline:none;';

  const m2 = state.microconceptos.find(x => x.id === microId);
  const hasMain = !!(m2 && m2.video_url);
  const totalSlots = 3;
  const usedSlots = (hasMain ? 1 : 0) + clips.length;
  const availSlots = totalSlots - clips.length; // slots adicionales disponibles

  panel.innerHTML = `
    <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text2);margin-bottom:10px;">
      Clips adicionales (${clips.length}/${totalSlots - (hasMain?1:0)})
      ${hasMain ? '<span style="font-size:10px;color:var(--text3);font-weight:400;text-transform:none;letter-spacing:0;"> · El clip principal está arriba</span>' : ''}
    </div>

    ${clips.map((c,i) => `
      <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.75rem;margin-bottom:8px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${c.tipo==='positivo'?'#E1F5EE':c.tipo==='mejorar'?'#FAECE7':'#EEEDFE'};color:${c.tipo==='positivo'?'#085041':c.tipo==='mejorar'?'#993C1D':'#3C3489'};">${c.tipo==='positivo'?'✓ Positivo':c.tipo==='mejorar'?'△ Mejorar':'★ Ref'}</span>
            <span style="font-size:12px;">${c.titulo||'Clip '+(i+1)}</span>
          </div>
          <button onclick="deleteMicClip('${c.id}','${microId}')" style="background:none;border:none;cursor:pointer;color:var(--text3);">✕</button>
        </div>
        ${renderVideoClipItem(c)}
      </div>`).join('')}

    ${clips.length < (hasMain ? 2 : 3) ? `
      <div style="background:var(--bg2);border-radius:var(--radius-sm);padding:.875rem;border:0.5px dashed var(--border2);">
        <div style="font-size:11px;color:var(--text3);margin-bottom:7px;">Añadir clip ${clips.length+1} de 3</div>
        <input type="text" id="mc-clip-titulo-${microId}" placeholder="Título del clip" style="${SI}">
        <select id="mc-clip-tipo-${microId}" style="${SI}">
          <option value="general">General</option>
          <option value="positivo">✓ Positivo — lo que hace bien</option>
          <option value="mejorar">△ A mejorar — lo que debe corregir</option>
          <option value="referencia">★ Referencia — ejemplo élite</option>
        </select>
        <input type="file" id="mc-clip-file-${microId}" accept="video/*" style="width:100%;font-size:11px;margin-bottom:6px;">
        <div style="font-size:10px;color:var(--text3);margin-bottom:5px;">O enlace Drive:</div>
        <input type="text" id="mc-clip-url-${microId}" placeholder="https://drive.google.com/..." style="${SI}">
        <button class="btn" style="width:100%;height:32px;font-size:12px;" onclick="addMicClip('${microId}')">Añadir clip</button>
      </div>` : '<div style="font-size:11px;color:var(--text3);text-align:center;padding:.5rem;">Máximo 3 clips alcanzado</div>'}`;
}

// ─── SISTEMA MICROCONCEPTO → TAREA ───
// Cada microconcepto tiene tareas asociadas por nombre clave

const MICRO_TAREA_RELACION = {
  // CENTRAL
  'Anticipación': ['c1','b_ant1'],
  'Salto a cuadrados sin perder espalda': ['c1'],
  'Conducción hacia intervalos para fijar': ['c2','b_cond1'],
  'Apoyo de seguridad por detrás': ['c2'],
  'Salidas de 3 entre centrales o lateralizado': ['c2'],
  // LATERAL
  'Doblada exterior tras fijación de extremo': ['c3','b_dob1'],
  'Rupturas a la espalda de la línea defensiva': ['c3'],
  'Perfiles: posición corporal': ['c4'],
  'Perfiles: distancias respecto a extremo': ['c4'],
  // PIVOTE
  'Escaneos': ['c5','b_esc1'],
  'Control con alejada': ['c5'],
  'Perfil recibiendo de espaldas para poder jugar fácil': ['c5'],
  'Tapar línea de pase estático': ['c6'],
  'Salto tapando línea de pase': ['c6'],
  // INTERIOR
  'Recibir en cuadrados para superar línea de medios con el pase': ['c7'],
  'Percepción de espacios antes de recibir': ['c7','b_perc1'],
  'Descenso en apoyo para provocar saltos': ['b_desc1'],
  // EXTREMO
  'Si vengo es porque voy': ['c8','b_svc1'],
  'Generar arrastres': ['c8'],
  'Fijar y soltar al ser doblado': ['b_fij1'],
  // DELANTERO
  'Atacar espalda de centrales con desmarque': ['c9','b_des1'],
  'Desmarque desde segunda altura': ['c9'],
  'Si vengo es porque voy': ['b_svc1'],
};

// Tareas basadas en método Barça Innovation Hub
// Las 4 palancas: tiempo, espacio, oponentes, información
// Grupos de 4-5 jugadores siempre

const TAREAS_BARCA = [
  {
    id:'b_ant1', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Central', fase:'DE', color:'#0C447C', bg:'#E6F1FB',
    t:'Leer la intención del pase (anticipación)',
    j:'4', d:'12min', i:'Media',
    desc:'El central aprende a leer la postura del poseedor para anticipar la dirección del pase antes de que salga.',
    des:'4 jugadores. Espacio 20x15m. 2vs1+central. El poseedor decide entre dos opciones. El central debe anticipar leyendo la postura corporal del poseedor, no el balón.',
    var:'Palanca tiempo: limitar decisión del poseedor a 2s. Palanca información: poseedor de espaldas al central.',
    neurociencia:'A los 12-14 años la corteza prefrontal permite razonamiento predictivo básico. El jugador puede aprender a leer señales previas a la acción si se le da feedback inmediato.',
    preg:[{p:'¿Qué miraste del poseedor antes de que pasara el balón?',razon:'Identifica qué señal usa para anticipar.'},{p:'¿Cuándo acertaste en la anticipación, ¿qué viste diferente?',razon:'Consolida el aprendizaje de la señal correcta.'},{p:'¿Hay alguna postura del poseedor que ya reconoces como señal?',razon:'Metacognición de la lectura del juego.'}],
    mics:['Anticipación','Salto a cuadrados sin perder espalda']
  },
  {
    id:'b_cond1', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Central', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Conducción hacia intervalo para abrir pase',
    j:'4', d:'15min', i:'Media-Alta',
    desc:'El central conduce hacia el intervalo para fijar al presionador y abrir la línea de pase al pivote o lateral.',
    des:'4 jugadores. Espacio 25x20m. Central con balón + pivote + 2 presionadores. El central conduce provocando que los presionadores cierren, creando el hueco para el pivote.',
    var:'Palanca espacio: reducir el campo. Palanca oponentes: añadir tercer presionador.',
    neurociencia:'La conducción intencional como herramienta táctica requiere corteza prefrontal desarrollada. El cadete ya puede conducir CON un objetivo en mente, no solo para avanzar.',
    preg:[{p:'¿Tu conducción fue hacia donde había presión o hacia donde estaba el hueco?',razon:'Diferencia entre conducción reactiva e intencional.'},{p:'¿En qué momento supiste que el pivote estaba libre?',razon:'Conecta la conducción con la lectura del compañero.'},{p:'¿Cuántos pasos necesitaste hasta que el presionador comprometió su posición?',razon:'Cuantifica la acción para hacerla consciente.'}],
    mics:['Conducción hacia intervalos para fijar','Apoyo de seguridad por detrás']
  },
  {
    id:'b_dob1', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Lateral', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Doblada exterior con señal del extremo',
    j:'4', d:'15min', i:'Alta',
    desc:'El lateral aprende a leer cuándo el extremo ha fijado al rival para doblar en el momento exacto.',
    des:'4 jugadores. Espacio 30x20m. Lateral + extremo vs lateral rival + central rival. El extremo recibe y hace 1v1. El lateral lee cuándo doblar. Si anticipa, el defensor cubre. Si llega tarde, no hay ventaja.',
    var:'Palanca tiempo: el lateral tiene 3 segundos para decidir. Palanca información: el extremo no puede mirar al lateral antes de doblar.',
    neurociencia:'La sincronización de dos jugadores requiere lectura del movimiento del compañero. A los 14-16 años el cerebro ya puede procesar simultaneamente acción del rival y movimiento del compañero.',
    preg:[{p:'¿Cuándo saliste, ¿el extremo ya tenía fijado al lateral o saliste antes?',razon:'Evalúa si el timing fue correcto.'},{p:'¿Qué señal del extremo te indicó que era el momento de arrancar?',razon:'Identifica la señal de sincronización que usó.'},{p:'¿Qué hiciste cuando la doblada no llegó a tiempo?',razon:'Gestión de la acción fallida. El jugador debe saber qué hacer si no funciona.'}],
    mics:['Doblada exterior tras fijación de extremo','Rupturas a la espalda de la línea defensiva']
  },
  {
    id:'b_esc1', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Pivote', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Escaneo sistemático antes de recibir',
    j:'4', d:'12min', i:'Media',
    desc:'El pivote practica girar la cabeza antes de cada recepción para tener información antes de que llegue el balón.',
    des:'4 jugadores en cuadrado 12x12m. Rondo 3vs1. El pivote siempre es poseedor. Norma: antes de recibir debe hacer un movimiento de cabeza visible. Si no lo hace, cambia de rol.',
    var:'Palanca información: el que pasa no puede dar pista verbal. Palanca tiempo: el pivote tiene 1 toque tras recibir.',
    neurociencia:'El escaneo sistemático es una habilidad perceptiva que debe automatizarse antes de los 14 años. A los 12-14 es el momento ideal: el cerebro tiene capacidad de procesamiento pero la automatización todavía es flexible.',
    preg:[{p:'¿Cuántos escaneos hiciste antes de que te llegara el balón?',razon:'Cuantifica para hacer el hábito consciente.'},{p:'¿Qué viste en tu último escaneo que usaste al recibir?',razon:'Conecta el escaneo con la decisión posterior.'},{p:'¿Hubo momentos donde no pudiste escanear? ¿Por qué?',razon:'Identifica qué condiciones del juego dificultan el escaneo.'}],
    mics:['Escaneos','Perfil recibiendo de espaldas para poder jugar fácil','Control con alejada']
  },
  {
    id:'b_perc1', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Interior', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Percepción del espacio libre antes de recibir',
    j:'4', d:'12min', i:'Media',
    desc:'El interior aprende a identificar dónde está el espacio libre antes de pedir el balón para orientar el primer control.',
    des:'4 jugadores. Espacio 20x15m con zonas marcadas. Interior recibe de central con rival encima. Antes de pedir el balón debe señalar con el brazo hacia dónde va a controlar. Si señala la zona con rival, pierde punto.',
    var:'Palanca espacio: zonas más pequeñas. Palanca oponentes: segundo rival. Palanca tiempo: señalar en 1 segundo.',
    neurociencia:'La percepción espacial previa a la recepción es una función ejecutiva que madura entre los 12 y 15 años. Este ejercicio fuerza la verbalización motriz, que consolida el circuito neuronal.',
    preg:[{p:'¿Señalaste la zona correcta antes de que llegara el balón?',razon:'Evalúa si la percepción fue anterior a la acción.'},{p:'¿Cuándo el rival se movió, cambiaste de zona?',razon:'Introduce la percepción dinámica: el espacio cambia.'},{p:'¿Hubo momentos donde señalaste una zona pero controlaste hacia otra? ¿Qué pasó?',razon:'Diferencia entre intención y ejecución.'}],
    mics:['Percepción de espacios antes de recibir','Recibir en cuadrados para superar línea de medios con el pase']
  },
  {
    id:'b_desc1', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Interior', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Bajada a recibir para provocar el salto del rival',
    j:'4', d:'15min', i:'Alta',
    desc:'El interior practica bajar a recibir con la intención de arrastrar al rival y abrir el espacio detrás.',
    des:'4 jugadores. Espacio 25x20m. Interior + extremo vs mediocentro rival + lateral rival. Interior baja a recibir. Si el rival le sigue, controla hacia atrás y abre al extremo por la espalda. Si no le sigue, gira y enfrenta.',
    var:'Palanca oponentes: el medio rival tiene instrucción de seguir siempre. Palanca tiempo: el interior tiene 2 toques al recibir.',
    neurociencia:'El movimiento como herramienta táctica (no solo para recibir) requiere comprensión sistémica del juego. Esta capacidad emerge a los 14-16 años con el desarrollo de la corteza prefrontal dorsolateral.',
    preg:[{p:'¿El rival te siguió en la bajada? ¿Cómo lo leíste?',razon:'Lectura de la reacción del rival a tu movimiento.'},{p:'¿Cuándo controlaste hacia atrás, el extremo ya arrancaba o tuvo que esperar?',razon:'Sincronización del movimiento con el compañero.'},{p:'¿Qué harías diferente si el rival aprende a no seguirte?',razon:'Adaptación táctica. El cadete ya puede pensar en la respuesta a la respuesta del rival.'}],
    mics:['Descenso en apoyo para provocar saltos','Control hacia atrás para alargar saltos']
  },
  {
    id:'b_svc1', cat:'benjamín', catLabel:'Benjamín', edad:'8-10',
    pos:'Delantero', fase:'OF', color:'#085041', bg:'#E1F5EE',
    t:'Si vengo, es porque voy — el juego del espía',
    j:'4', d:'10min', i:'Media',
    desc:'El delantero descubre que cuando baja a recibir puede continuar en profundidad, como si fuera un espía que finge ir en una dirección.',
    des:'4 jugadores. Espacio 20x20m. 2vs1 más delantero. El delantero baja a tocar el cono central (fintar bajar) y continúa en profundidad. El central intenta darle cuando continúa. Sin instrucciones tácticas.',
    var:'Sin cono: el delantero decide libremente. Añadir portero. Cambiar roles cada 2 minutos.',
    neurociencia:'A los 8-10 años el aprendizaje motor se produce por descubrimiento, no por instrucción. El juego del espía activa motivación intrínseca y aprendizaje implícito sin carga cognitiva abstracta.',
    preg:[{p:'¿Conseguiste engañar al defensor? ¿Cómo?',razon:'El niño verbaliza su propio truco sin que nadie se lo enseñe.'},{p:'¿Cuándo fue más difícil engañarle?',razon:'Introduce la dificultad como información, no como fracaso.'},{p:'¿Qué harías diferente para que funcione mejor?',razon:'Primera metacognición simple. El niño propone su propia solución.'}],
    mics:['Si vengo es porque voy','Desmarques para provocar arrastres']
  },
  {
    id:'b_fij1', cat:'cadete', catLabel:'Cadete', edad:'14-16',
    pos:'Extremo', fase:'OF', color:'#993C1D', bg:'#FAECE7',
    t:'Fijar al lateral y soltar en el momento exacto',
    j:'4', d:'15min', i:'Alta',
    desc:'El extremo practica mantener al lateral fijado sin ceder la pelota hasta que llegue el apoyo, soltando en el momento preciso.',
    des:'4 jugadores. Espacio 20x25m. Extremo vs lateral rival + interior que dobla. Extremo recibe con lateral encima. Debe fijar al lateral en 1v1 hasta que el interior llega a doblar. Si suelta antes, el lateral puede cubrir la doblada.',
    var:'Palanca tiempo: el interior tarda más en llegar. Palanca oponentes: segundo defensor cubre la doblada.',
    neurociencia:'El control del tiempo de la acción colectiva requiere integración de información propia (balón, cuerpo) con información externa (compañero, rival). Esta capacidad de procesamiento dual madura plenamente en la cadete.',
    preg:[{p:'¿Cuándo soltaste el balón al interior, ¿todavía tenías al lateral fijado o ya se había movido?',razon:'Evalúa si el timing fue correcto.'},{p:'¿Usaste el cuerpo para mantener la fijación o solo el balón?',razon:'Introduce el concepto de fijar con el cuerpo, no solo con el movimiento del balón.'},{p:'¿En qué momento del 1v1 notaste que era el instante exacto para soltar?',razon:'Metacognición del timing. El cadete puede identificar la señal que usa.'}],
    mics:['Fijar y soltar al ser doblado','Generar arrastres']
  },
  {
    id:'b_des1', cat:'infantil', catLabel:'Infantil', edad:'12-14',
    pos:'Delantero', fase:'OF', color:'#0C447C', bg:'#E6F1FB',
    t:'Desmarque diagonal para atacar la espalda',
    j:'4', d:'12min', i:'Alta',
    desc:'El delantero aprende a hacer el desmarque diagonal para explotar el espacio entre central y lateral cuando el balón está en banda.',
    des:'4 jugadores. Espacio 25x20m. Lateral con balón + delantero vs 2 defensas. El delantero espera en segunda altura y arranca en diagonal cuando el lateral recibe. Los defensas deben decidir si siguen al delantero o mantienen posición.',
    var:'Palanca tiempo: el lateral no puede esperar más de 3 segundos. Palanca espacio: reducir zona de finalización.',
    neurociencia:'El desmarque intencional (no reactivo) requiere anticipación del momento del pase. A los 12-14 años el jugador puede aprender a leer la postura del pasador como señal de arranque.',
    preg:[{p:'¿Cuándo arrancaste: antes o después de que el lateral mirara hacia ti?',razon:'Introduce la lectura del compañero como señal de arranque.'},{p:'¿Tu desmarque iba hacia donde había espacio libre?',razon:'Diferencia entre el desmarque instintivo y el intencional.'},{p:'¿El defensor te siguió? ¿Y eso ayudó al equipo de alguna forma?',razon:'Introduce la idea de que el desmarque fallido puede crear espacio para otros.'}],
    mics:['Atacar espalda de centrales con desmarque','Desmarque desde segunda altura']
  },
];

// ─── OBTENER TAREAS PARA UN MICROCONCEPTO ───
function getTareasParaMicro(microTitulo) {
  const ids = MICRO_TAREA_RELACION[microTitulo] || [];
  if(!ids.length) {
    // Búsqueda por nombre en todas las tareas
    const allT = getAllTareas();
    return allT.filter(t => (t.mics||[]).some(m => m.toLowerCase().includes(microTitulo.toLowerCase().slice(0,15))));
  }
  return TAREAS_BARCA.filter(t => ids.includes(t.id));
}

// ─── VISTA DE TAREAS PARA OBJETIVOS DEL JUGADOR ───
function renderTareasParaJugador(jugId) {
  const jug = state.jugadores.find(x=>x.id===jugId);
  if(!jug) return '';
  const objs = getObjJugador(jugId);
  if(!objs.length) return '<div style="font-size:12px;color:var(--text3);">Sin objetivos. Añade objetivos al jugador para ver tareas relacionadas.</div>';

  let html = '';
  objs.forEach(obj => {
    const microNombre = obj.texto;
    const tareas = getTareasParaMicro(microNombre);
    if(!tareas.length) return;

    const fi = FASES.find(f=>f.id===obj.fase);
    html += `<div style="margin-bottom:1.5rem;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:.875rem;">
        <div style="width:8px;height:8px;border-radius:50%;background:${fi?.dot||'#888'};flex-shrink:0;"></div>
        <div style="font-size:13px;font-weight:600;">${microNombre}</div>
        ${fi?`<span class="badge ${fi.cls}">${fi.label}</span>`:''}
      </div>
      <div style="display:grid;grid-template-columns:1fr;gap:8px;">
        ${tareas.map(t=>{
          const catColor=t.color||'var(--text2)';
          const catBg=t.bg||'var(--bg2)';
          return `<div class="card" style="border-left:3px solid ${catColor};cursor:pointer;" onclick="openTareaUnificada('${t.id}','${t._src||'cadete'}')">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:6px;">
              <div style="font-size:13px;font-weight:500;">${t.t}</div>
              ${t.catLabel?`<span style="font-size:9px;padding:2px 6px;border-radius:99px;background:${catBg};color:${catColor};white-space:nowrap;">${t.catLabel}</span>`:''}
            </div>
            <div style="font-size:11px;color:var(--text2);line-height:1.5;margin-bottom:6px;">${t.desc}</div>
            <div style="font-size:10px;color:var(--text3);">${t.j} jug · ${t.d} · ${t.i}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });

  return html || '<div style="font-size:12px;color:var(--text3);">No hay tareas específicas para estos objetivos todavía.</div>';
}

// ─── GENERADOR DE GUIÓN DENTRO DEL MODAL DEL JUGADOR ───
async function genSesJugModal(jugId) {
  const j = state.jugadores.find(x=>x.id===jugId);
  if(!j) return;
  const fase = document.getElementById('ses-fase-jug')?.value || 'AMBAS';
  const objs = getObjJugador(jugId);
  const microsPos = state.microconceptos.filter(m=>m.posicion===j.posicion);

  let html = `<div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-top:1rem;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
      <div style="font-size:13px;font-weight:600;">Guión · ${j.nombre} · ${j.posicion}</div>
      <button onclick="window.print()" class="btn-outline" style="font-size:11px;height:28px;padding:0 10px;">🖨 Imprimir</button>
    </div>`;

  // Apertura
  html += `<div style="background:linear-gradient(135deg,rgba(124,111,240,.08),rgba(55,138,221,.05));border-radius:var(--radius-sm);padding:.875rem;margin-bottom:1rem;">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#7C6FF0;margin-bottom:.625rem;">◎ Apertura</div>
    ${PSES.ap.map(p=>`<div style="padding:6px 0;border-bottom:0.5px solid var(--border);">
      <div style="font-size:12px;font-weight:500;">${p.t}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px;font-style:italic;">${p.h}</div>
    </div>`).join('')}
  </div>`;

  // Fases
  const fases = fase === 'AMBAS' ? ['OF','DE'] : [fase];
  const FCFG = {OF:{l:'Fase ofensiva',c:'#1D9E75',bg:'rgba(29,158,117,.08)'},DE:{l:'Fase defensiva',c:'#378ADD',bg:'rgba(55,138,221,.08)'},TO:{l:'T. ofensiva',c:'#E07B00',bg:'rgba(224,123,0,.08)'},TD:{l:'T. defensiva',c:'#D85A30',bg:'rgba(216,90,48,.08)'}};

  fases.forEach(f => {
    const pr = (PSES[f]||{})[j.posicion]||[];
    if(!pr.length) return;
    const fc = FCFG[f];
    html += `<div style="background:${fc.bg};border-radius:var(--radius-sm);padding:.875rem;margin-bottom:.75rem;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${fc.c};margin-bottom:.625rem;">${fc.l}</div>
      ${pr.map((p,i)=>`<div style="padding:7px 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:10px;color:var(--text3);margin-bottom:2px;">Pregunta ${i+1}</div>
        <div style="font-size:12px;font-weight:500;">${p.t}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px;font-style:italic;">${p.h}</div>
        <span style="font-size:10px;padding:2px 7px;border-radius:99px;background:${fc.c}15;color:${fc.c};margin-top:4px;display:inline-block;">${p.c}</span>
      </div>`).join('')}
    </div>`;
  });

  // Objetivos del jugador en la sesión
  if(objs.length) {
    html += `<div style="background:rgba(245,166,35,.08);border-radius:var(--radius-sm);padding:.875rem;margin-bottom:.75rem;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#E07B00;margin-bottom:.625rem;">🎯 Preguntas sobre sus objetivos</div>
      ${objs.slice(0,3).map(o=>`<div style="padding:6px 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:12px;font-weight:500;">¿Cómo crees que trabajaste "${o.texto}" en este partido?</div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px;font-style:italic;">Deja que el jugador evalúe primero su propio objetivo antes de verlo en vídeo.</div>
      </div>`).join('')}
    </div>`;
  }

  // Cierre
  html += `<div style="background:rgba(29,158,117,.05);border-radius:var(--radius-sm);padding:.875rem;">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#1D9E75;margin-bottom:.625rem;">✓ Cierre</div>
    ${PSES.cl.map(p=>`<div style="font-size:12px;padding:5px 0;border-bottom:0.5px solid var(--border);">${p}</div>`).join('')}
  </div>`;

  html += `</div>`;

  // Mostrar en el body de sesión
  const existing = document.getElementById('guion-generado-modal');
  if(existing) existing.remove();
  const div = document.createElement('div');
  div.id = 'guion-generado-modal';
  div.innerHTML = html;
  document.getElementById('djbody').appendChild(div);
  div.scrollIntoView({behavior:'smooth'});
}

// ─── EDITAR TAREA ───
function editarTarea(id, src) {
  let t = getAllTareas().find(x=>String(x.id)===String(id) && x._src===src);
  if(!t) return;
  document.getElementById('edit-tarea-id').value = id;
  document.getElementById('edit-tarea-src').value = src;
  document.getElementById('edit-t-titulo').value = t.t||'';
  document.getElementById('edit-t-desc').value = t.desc||'';
  document.getElementById('edit-t-des').value = t.des||'';
  document.getElementById('edit-t-var').value = t.var||'';
  document.getElementById('edit-t-j').value = t.j||'4-5';
  document.getElementById('edit-t-d').value = t.d||'15min';
  document.getElementById('edit-t-i').value = t.i||'Media';
  const pregs = Array.isArray(t.preg) ? t.preg.map(p=>typeof p==='object'?p.p:p).join('\n') : '';
  document.getElementById('edit-t-pregs').value = pregs;
  document.getElementById('edit-t-mics').value = (t.mics||[]).join('\n');
  openModal('modal-edit-tarea');
}

function guardarEdicionTarea() {
  const id = document.getElementById('edit-tarea-id').value;
  const src = document.getElementById('edit-tarea-src').value;
  const updates = {
    t: document.getElementById('edit-t-titulo').value.trim(),
    desc: document.getElementById('edit-t-desc').value.trim(),
    des: document.getElementById('edit-t-des').value.trim(),
    var: document.getElementById('edit-t-var').value.trim(),
    j: document.getElementById('edit-t-j').value.trim(),
    d: document.getElementById('edit-t-d').value.trim(),
    i: document.getElementById('edit-t-i').value.trim(),
    preg: document.getElementById('edit-t-pregs').value.split('\n').filter(Boolean).map(p=>({p,razon:''})),
    mics: document.getElementById('edit-t-mics').value.split('\n').filter(Boolean),
  };

  // Guardar en localStorage como custom (sobrescribe si ya existe)
  const stored = loadTareasCustomArr();
  const existing = stored.findIndex(x=>String(x.id)===String(id));
  if(existing>=0) { stored[existing] = {...stored[existing], ...updates}; }
  else { stored.push({...updates, id:'edited_'+id+'_'+Date.now(), _src:'custom', pos:'', fase:''}); }
  localStorage.setItem('tareas_custom', JSON.stringify(stored));

  closeModal('modal-edit-tarea');
  renderTareas();
  showToast('Tarea guardada ✓');
}

// ─── EDITAR MICROCONCEPTO ───
function editarMicro(id) {
  const m = state.microconceptos.find(x=>x.id===id);
  if(!m) return;
  document.getElementById('edit-micro-id').value = id;
  document.getElementById('edit-m-titulo').value = m.titulo||'';
  document.getElementById('edit-m-desc').value = m.descripcion||'';
  document.getElementById('edit-m-ref').value = m.referencia||'';
  document.getElementById('edit-m-pos').value = m.posicion||'Central';
  document.getElementById('edit-m-fase').value = m.fase||'OF';
  openModal('modal-edit-micro');
}

async function guardarEdicionMicro() {
  const id = document.getElementById('edit-micro-id').value;
  const updates = {
    titulo: document.getElementById('edit-m-titulo').value.trim(),
    descripcion: document.getElementById('edit-m-desc').value.trim(),
    referencia: document.getElementById('edit-m-ref').value.trim(),
    posicion: document.getElementById('edit-m-pos').value,
    fase: document.getElementById('edit-m-fase').value,
  };
  const {error} = await DB.from('microconceptos').update(updates).eq('id',id);
  if(error){showToast('Error: '+error.message);return;}
  const m = state.microconceptos.find(x=>x.id===id);
  if(m) Object.assign(m, updates);
  closeModal('modal-edit-micro');
  renderMicros();
  showToast('Microconcepto actualizado ✓');
}

// ─── ESTRELLAS (restaurado) ───
function setStar(fase, idx, val) {
  if(!window._stars) window._stars = {};
  if(!window._stars[fase]) window._stars[fase] = [];
  window._stars[fase][idx] = val;
  // Actualizar color de todas las estrellas de esa fila
  document.querySelectorAll(`.star[data-fase="${fase}"][data-idx="${idx}"]`).forEach(s => {
    s.style.color = parseInt(s.dataset.val) <= val ? '#F5A623' : '#ddd';
  });
  // Actualizar media de la fase
  const vals = (window._stars[fase] || []).filter(v => v > 0);
  const avg = vals.length ? (vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(1) : null;
  const avgEl = document.getElementById('avg-' + fase);
  if(avgEl) avgEl.textContent = avg ? avg + '/5' : '';
  // Actualizar nota global
  calcNotaGlobal();
}

function calcNotaGlobal() {
  const fases = ['MCB','MSB','TDA','TAD'];
  let sum = 0, cnt = 0;
  fases.forEach(f => {
    const vals = (window._stars[f] || []).filter(v => v > 0);
    if(vals.length) { sum += vals.reduce((a,b) => a+b, 0); cnt += vals.length; }
  });
  const nota = cnt > 0 ? ((sum/cnt) * 2).toFixed(1) : null;
  const el = document.getElementById('nota-global');
  if(el) {
    el.textContent = nota || '—';
    const n = parseFloat(nota);
    el.style.color = n >= 8 ? '#1D9E75' : n >= 6 ? '#E07B00' : n >= 4 ? '#D85A30' : 'var(--text3)';
  }
  return nota ? parseFloat(nota) : null;
}

// ─── MIC TAGS EN INFORME (restaurado) ───
function addMicTag() {
  const sel = document.getElementById('inf-mic-sel');
  const val = sel?.value.trim();
  if(!val) return;
  if(!window._micTags) window._micTags = [];
  if(window._micTags.includes(val)) { sel.value = ''; return; }
  window._micTags.push(val);
  renderMicTags();
  sel.value = '';
}

function removeMicTag(val) {
  window._micTags = (window._micTags || []).filter(t => t !== val);
  renderMicTags();
}

function renderMicTags() {
  const c = document.getElementById('inf-mic-tags');
  if(!c) return;
  c.innerHTML = (window._micTags || []).map(t =>
    `<span style="font-size:11px;padding:4px 10px;border-radius:99px;background:#EEEDFE;color:#3C3489;display:inline-flex;align-items:center;gap:5px;">
      ${t}
      <button onclick="removeMicTag('${t.replace(/'/g,"\\'")}');event.stopPropagation();" style="background:none;border:none;cursor:pointer;color:#3C3489;font-size:13px;padding:0;line-height:1;">×</button>
    </span>`
  ).join('');
}

// ─── OBJETIVOS DESDE MICROCONCEPTOS ───
function renderObjMicroSelector(jugId) {
  const j = state.jugadores.find(x=>x.id===jugId);
  if(!j) return;
  const pos = j.posicion;
  const micros = state.microconceptos.filter(m=>m.posicion===pos).sort((a,b)=>a.titulo.localeCompare(b.titulo,'es'));
  const fases = [
    {id:'OF',label:'Fase ofensiva',dot:'#1D9E75'},
    {id:'DE',label:'Fase defensiva',dot:'#378ADD'},
    {id:'TO',label:'T. ofensiva',dot:'#E07B00'},
    {id:'TD',label:'T. defensiva',dot:'#D85A30'},
    {id:'GEN',label:'General',dot:'#7C6FF0'},
  ];

  // Agrupar por fase
  let html = '';
  fases.forEach(f => {
    const mf = micros.filter(m=>m.fase===f.id);
    if(!mf.length) return;
    html += `<div style="margin-bottom:.75rem;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${f.dot};margin-bottom:5px;">${f.label}</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        ${mf.map(m=>`<button onclick="seleccionarMicroObj('${m.titulo.replace(/'/g,"\\'")}','${f.id}')" style="font-size:11px;padding:4px 10px;border-radius:99px;background:${f.dot}15;color:${f.dot};border:0.5px solid ${f.dot}40;cursor:pointer;font-family:inherit;transition:all .15s;" onmouseover="this.style.background='${f.dot}30'" onmouseout="this.style.background='${f.dot}15'">${m.titulo}</button>`).join('')}
      </div>
    </div>`;
  });

  const panel = document.getElementById('micro-obj-selector');
  if(panel) panel.innerHTML = html;
}

function seleccionarMicroObj(titulo, fase) {
  const input = document.getElementById('obt');
  const select = document.getElementById('obf');
  if(input) input.value = titulo;
  if(select) select.value = fase;
  // Resaltar el botón seleccionado
  showToast(`"${titulo}" seleccionado → pulsa Añadir objetivo`);
}

// ─── AÑADIR TAREA A JUGADOR DESDE SECCIÓN TAREAS ───
function abrirAddTareaJugador(tareaId, tareaSrc) {
  const t = getAllTareas().find(x=>String(x.id)===String(tareaId) && x._src===tareaSrc);
  if(!t) return;

  // Mostrar modal de selección de jugador
  const jugadores = state.jugadores;
  if(!jugadores.length) { showToast('No hay jugadores. Añade uno primero.'); return; }

  const sel = `<div style="padding:1rem;">
    <div style="font-size:13px;font-weight:600;margin-bottom:.875rem;">Añadir "${t.t}" a jugador</div>
    <select id="add-tarea-jug-sel" style="width:100%;height:36px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);margin-bottom:10px;">
      <option value="">Selecciona jugador...</option>
      ${jugadores.map(j=>`<option value="${j.id}">${j.nombre} · ${j.posicion}</option>`).join('')}
    </select>
    <div style="display:flex;gap:8px;">
      <button class="btn-outline" onclick="closeModal('modal-add-tarea-jug')" style="flex:1;">Cancelar</button>
      <button class="btn" onclick="confirmarAddTareaJugador('${tareaId}','${tareaSrc}')" style="flex:1;">Añadir</button>
    </div>
  </div>`;

  document.getElementById('add-tarea-jug-body').innerHTML = sel;
  openModal('modal-add-tarea-jug');
}

async function confirmarAddTareaJugador(tareaId, tareaSrc) {
  const jugId = document.getElementById('add-tarea-jug-sel')?.value;
  if(!jugId) { showToast('Selecciona un jugador'); return; }
  const t = getAllTareas().find(x=>String(x.id)===String(tareaId));
  if(!t) return;
  // Guardar como nota de sesión del jugador
  const texto = `TAREA ASIGNADA: ${t.t}\n\nPosición: ${t.pos||'—'} | Categoría: ${t.catLabel||'—'} | ${t.j} jugadores | ${t.d}\n\nDesarrollo: ${t.des||t.desarrollo||'—'}\n\nPreguntas: ${(t.preg||[]).map(p=>typeof p==='object'?p.p:p).join(' · ')}`;
  const {error} = await DB.from('notas_video').insert({jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto}).select();
  if(error){showToast('Error: '+error.message);return;}
  const nota = {jugador_id:jugId, fecha:new Date().toISOString().slice(0,10), texto};
  state.notasVideo.unshift(nota);
  closeModal('modal-add-tarea-jug');
  showToast('Tarea asignada al jugador ✓ (aparece en su Sesión)');
}


// ═══════════════════════════════════════════════════
// GENERADOR DE INFORME VISUAL PREMIUM
// ═══════════════════════════════════════════════════

function generarInformeVisual(jugId, infId) {
  const jug = state.jugadores.find(x => x.id === jugId);
  if(!jug) return;

  // Usar informe específico o el último
  let inf = infId
    ? state.informesPartido.find(x => x.id === infId)
    : getInformesJugador(jugId)[0];

  // Si no hay informe guardado, construir desde el formulario activo
  if(!inf) {
    const partido = document.getElementById('inf-partido')?.value.trim();
    if(!partido) { showToast('Guarda el informe primero o abre uno existente'); return; }
    const nota = calcNotaGlobal();
    inf = {
      partido,
      fecha: document.getElementById('inf-fecha')?.value || new Date().toISOString().slice(0,10),
      rival: document.getElementById('inf-rival')?.value.trim() || '',
      resultado: document.getElementById('inf-resultado')?.value.trim() || '',
      nota_decimal: nota,
      estrellas_json: JSON.stringify(window._stars || {}),
      mcb: document.getElementById('inf-mcb')?.value.trim() || '',
      msb: document.getElementById('inf-msb')?.value.trim() || '',
      tda: document.getElementById('inf-tda')?.value.trim() || '',
      tad: document.getElementById('inf-tad')?.value.trim() || '',
      microconceptos_obs: (window._micTags || []).join(', '),
      objetivos_trabajados: '',
      notas: document.getElementById('inf-notas')?.value.trim() || '',
    };
  }

  const nota = parseFloat(inf.nota_decimal) || 0;
  const nc = nota >= 8 ? '#1D9E75' : nota >= 6 ? '#E07B00' : '#D85A30';
  const nl = nota >= 8 ? 'SOBRESALIENTE' : nota >= 6 ? 'CORRECTO' : nota >= 4 ? 'EN PROGRESO' : 'A MEJORAR';

  let starsData = {};
  try { starsData = inf.estrellas_json ? JSON.parse(inf.estrellas_json) : {}; } catch(e) {}

  function avgF(key) {
    const vals = (starsData[key] || []).filter(v => v > 0);
    return vals.length ? vals.reduce((a,b) => a+b,0) / vals.length : 0;
  }

  function starsHtml(val, color) {
    return [1,2,3,4,5].map(s =>
      `<span style="color:${s <= Math.round(val) ? '#F5A623' : '#ddd'};font-size:16px;">★</span>`
    ).join('');
  }

  function barHtml(pct, color) {
    return `<div style="width:100%;height:6px;background:#eee;border-radius:99px;margin-top:5px;">
      <div style="width:${Math.round(pct)}%;height:6px;background:${color};border-radius:99px;"></div>
    </div>`;
  }

  const fases = [
    {key:'MCB', label:'CON BALÓN',           color:'#1D9E75', texto: inf.mcb},
    {key:'MSB', label:'SIN BALÓN',           color:'#378ADD', texto: inf.msb},
    {key:'TDA', label:'TRANS. OFENSIVA',     color:'#E07B00', texto: inf.tda},
    {key:'TAD', label:'TRANS. DEFENSIVA',    color:'#D85A30', texto: inf.tad},
  ];

  // Fortalezas y mejoras — SOLO lo que escribió el analista
  const fortalezas = inf.positivos ? inf.positivos.split('\n').filter(Boolean) : [];
  const mejoras = inf.mejoras ? inf.mejoras.split('\n').filter(Boolean) : [];
  const objs = getObjJugador(jugId);

  const micros = (inf.microconceptos_obs || '').split(',').filter(Boolean).map(m => m.trim());
  const fechaFormateada = new Date((inf.fecha||'') + 'T12:00:00').toLocaleDateString('es-ES', {day:'numeric', month:'long', year:'numeric'});

  // Logo academia
  const logoAcademia = `<div style="display:flex;align-items:center;gap:6px;">
    <div style="width:32px;height:32px;border-radius:50%;background:#1a1a2e;display:flex;align-items:center;justify-content:center;font-size:14px;">⚽</div>
    <div style="line-height:1.2;"><div style="font-size:9px;font-weight:800;letter-spacing:.12em;color:#1a1a2e;">ANALISTA</div><div style="font-size:9px;color:#666;letter-spacing:.08em;">INDIVIDUAL</div></div>
  </div>`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Informe ${jug.nombre} · ${inf.partido || ''}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Barlow:wght@400;500;600&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; }
  body { font-family:'Barlow', sans-serif; background:#f0ede8; color:#1a1a1a; min-height:100vh; }

  .page {
    width:794px; min-height:1123px; margin:0 auto;
    background:#fff; position:relative; overflow:hidden;
  }

  /* HEADER */
  .header {
    display:grid;
    grid-template-columns:1fr auto;
    min-height:240px;
    background:#1a1a2e;
    position:relative;
    overflow:hidden;
  }
  .header::before {
    content:''; position:absolute; top:0; left:0; right:0; bottom:0;
    background:radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.08) 0%, transparent 60%);
  }
  .header-left {
    padding:36px 36px 28px;
    display:flex; flex-direction:column; justify-content:flex-end;
    position:relative; z-index:1;
  }
  .header-badge {
    font-family:'Barlow Condensed', sans-serif;
    font-size:10px; font-weight:700; letter-spacing:.18em;
    color:rgba(255,255,255,.4); text-transform:uppercase;
    margin-bottom:10px;
  }
  .header-name {
    font-family:'Barlow Condensed', sans-serif;
    font-size:52px; font-weight:800; letter-spacing:-.01em;
    color:#fff; line-height:.95; text-transform:uppercase;
    margin-bottom:10px;
  }
  .header-meta {
    font-family:'Barlow Condensed', sans-serif;
    font-size:14px; font-weight:400; color:rgba(255,255,255,.55);
    letter-spacing:.04em; text-transform:uppercase;
    line-height:1.8;
  }
  .header-right {
    width:280px; position:relative; overflow:hidden;
  }
  .player-photo {
    width:100%; height:100%; object-fit:cover; object-position:top center;
    display:block;
  }
  .player-photo-placeholder {
    width:100%; height:100%;
    background:linear-gradient(135deg,#0f3460,#16213e);
    display:flex; align-items:center; justify-content:center;
  }
  .photo-initials {
    font-family:'Barlow Condensed', sans-serif;
    font-size:72px; font-weight:800; color:rgba(255,255,255,.15);
    text-transform:uppercase;
  }
  /* Gradiente sobre la foto */
  .header-right::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(to right, #1a1a2e 0%, transparent 40%);
    pointer-events:none;
  }

  /* NOTA GLOBAL */
  .nota-strip {
    background:#1a1a2e;
    padding:0 36px 24px;
    display:flex; align-items:center; gap:20px;
  }
  .nota-circle {
    width:72px; height:72px; border-radius:50%;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    flex-shrink:0; border:2px solid;
  }
  .nota-num {
    font-family:'Barlow Condensed', sans-serif;
    font-size:28px; font-weight:800; line-height:1;
  }
  .nota-label {
    font-family:'Barlow Condensed', sans-serif;
    font-size:16px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:#fff; margin-left:4px;
  }
  .nota-sub { font-size:11px; color:rgba(255,255,255,.4); margin-top:2px; letter-spacing:.04em; }
  .partido-info {
    margin-left:auto; text-align:right;
    font-family:'Barlow Condensed', sans-serif;
  }
  .partido-name { font-size:18px; font-weight:700; color:#fff; letter-spacing:.02em; }
  .partido-meta { font-size:12px; color:rgba(255,255,255,.4); margin-top:3px; letter-spacing:.04em; }

  /* CONTENIDO */
  .content { padding:28px 36px; }

  /* FASES */
  .fases-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:24px; }
  .fase-card {
    border-radius:10px; padding:16px;
    border:1px solid;
  }
  .fase-tag {
    font-family:'Barlow Condensed', sans-serif;
    font-size:9px; font-weight:800; letter-spacing:.14em;
    padding:3px 9px; border-radius:99px; display:inline-block; margin-bottom:10px;
  }
  .fase-avg {
    font-family:'Barlow Condensed', sans-serif;
    font-size:22px; font-weight:800; float:right; margin-top:-4px;
  }
  .fase-texto {
    font-size:11px; line-height:1.6; color:#444; margin-top:10px;
    clear:both;
  }

  /* FORTALEZAS / MEJORAS */
  .dos-cols { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; }
  .col-title {
    font-family:'Barlow Condensed', sans-serif;
    font-size:10px; font-weight:800; letter-spacing:.14em;
    text-transform:uppercase; margin-bottom:10px;
    display:flex; align-items:center; gap:6px;
  }
  .col-title::before {
    content:''; display:inline-block;
    width:3px; height:14px; border-radius:2px;
  }
  .col-item {
    display:flex; align-items:flex-start; gap:8px;
    font-size:12px; line-height:1.5; margin-bottom:8px; color:#333;
  }
  .col-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; margin-top:5px; }

  /* OBJETIVOS */
  .obj-section { margin-bottom:24px; }
  .section-title {
    font-family:'Barlow Condensed', sans-serif;
    font-size:10px; font-weight:800; letter-spacing:.14em;
    text-transform:uppercase; color:#888; margin-bottom:12px;
    display:flex; align-items:center; gap:8px;
  }
  .section-title::after {
    content:''; flex:1; height:1px; background:#eee;
  }
  .obj-row {
    display:flex; align-items:center; justify-content:space-between;
    padding:7px 0; border-bottom:1px solid #f0f0f0;
  }
  .obj-text { font-size:12px; color:#333; flex:1; }
  .obj-fase {
    font-size:9px; font-weight:700; letter-spacing:.08em;
    padding:2px 7px; border-radius:99px; margin:0 10px; flex-shrink:0;
  }

  /* MICROS */
  .mic-pills { display:flex; flex-wrap:wrap; gap:5px; }
  .mic-pill {
    font-size:10px; padding:4px 10px; border-radius:99px;
    background:#EEEDFE; color:#3C3489; font-weight:500;
  }

  /* NOTAS */
  .notas-box {
    background:#f7f7f5; border-left:3px solid #1a1a2e;
    border-radius:0 8px 8px 0; padding:14px 16px;
    margin-bottom:24px;
  }
  .notas-text { font-size:12px; line-height:1.7; color:#444; font-style:italic; }

  /* FOOTER */
  .footer {
    padding:16px 36px;
    border-top:1px solid #eee;
    display:flex; align-items:center; justify-content:space-between;
    margin-top:auto;
  }
  .footer-analista { font-size:10px; color:#999; }
  .footer-analista strong { color:#333; font-weight:600; }

  /* LOGOS */
  .logos-row {
    display:flex; align-items:center; gap:16px;
    padding:0 36px 20px;
  }

  /* PRINT */
  @media print {
    body { background:#fff; }
    .page { box-shadow:none; margin:0; }
    .no-print { display:none !important; }
  }
</style>
</head>
<body>

<!-- BOTÓN IMPRIMIR -->
<div class="no-print" style="text-align:center;padding:16px;background:#f0ede8;">
  <button onclick="window.print()" style="background:#1a1a2e;color:#fff;border:none;border-radius:8px;padding:10px 28px;font-size:13px;cursor:pointer;font-family:inherit;font-weight:600;letter-spacing:.04em;">↓ DESCARGAR PDF</button>
  <div style="font-size:11px;color:#999;margin-top:6px;">En el diálogo de impresión → Guardar como PDF</div>
</div>

<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="header-left">
      <div class="header-badge">Informe Técnico Individual · ${fechaFormateada}</div>
      <div class="header-name">${jug.nombre}</div>
      <div class="header-meta">
        ${jug.posicion}<br>
        ${jug.equipo || ''} ${jug.categoria ? '· '+jug.categoria : ''}
      </div>
    </div>
    <div class="header-right">
      ${jug.foto_jugador
        ? `<img class="player-photo" src="${jug.foto_jugador}" alt="${jug.nombre}">`
        : `<div class="player-photo-placeholder"><div class="photo-initials">${jug.nombre.split(' ').map(w=>w[0]).join('').slice(0,2)}</div></div>`
      }
    </div>
  </div>

  <!-- NOTA + PARTIDO -->
  <div class="nota-strip">
    <div class="nota-circle" style="border-color:${nc}60;background:${nc}15;">
      <span class="nota-num" style="color:${nc};">${nota ? nota.toFixed(1) : '—'}</span>
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:8px;color:${nc};letter-spacing:.08em;">/ 10</span>
    </div>
    <div>
      <div class="nota-label">${nl}</div>
      <div class="nota-sub">Nota global · Media ponderada de las 4 fases</div>
    </div>
    <div class="partido-info">
      <div class="partido-name">${inf.partido || ''}</div>
      <div class="partido-meta">${inf.rival ? 'vs '+inf.rival : ''}${inf.resultado ? ' · '+inf.resultado : ''}</div>
    </div>
  </div>

  <!-- LOGOS -->
  <div class="logos-row" style="background:#1a1a2e;padding-bottom:24px;">
    ${jug.logo_club ? `<img src="${jug.logo_club}" style="height:40px;object-fit:contain;" onerror="this.style.display='none'">` : ''}
    <div style="flex:1;"></div>
    <div style="text-align:right;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:.15em;color:rgba(255,255,255,.35);">OMAR CORTÉS FERRERO</div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;color:rgba(255,255,255,.25);letter-spacing:.1em;">ANALISTA INDIVIDUAL · FÚTBOL BASE</div>
    </div>
  </div>

  <div class="content">

    <!-- FASES -->
    <div class="section-title">Valoración por fases</div>
    <div class="fases-grid">
      ${fases.map(f => {
        const avg = avgF(f.key);
        const pct = avg ? Math.round((avg/5)*100) : 0;
        return avg > 0 || f.texto ? `<div class="fase-card" style="border-color:${f.color}25;background:${f.color}05;">
          <div>
            <span class="fase-tag" style="background:${f.color}15;color:${f.color};">${f.label}</span>
            ${avg > 0 ? `<span class="fase-avg" style="color:${f.color};">${avg.toFixed(1)}<span style="font-size:13px;color:#bbb;">/5</span></span>` : ''}
          </div>
          ${avg > 0 ? `<div style="display:flex;gap:1px;margin-bottom:4px;">${starsHtml(avg, f.color)}</div>${barHtml(pct, f.color)}` : ''}
          ${f.texto ? `<div class="fase-texto">${f.texto}</div>` : ''}
        </div>` : '';
      }).filter(Boolean).join('')}
    </div>

    <!-- FORTALEZAS Y MEJORAS -->
    ${(fortalezas.length || mejoras.length) ? `
    <div class="dos-cols">
      <div>
        <div class="col-title" style="color:#1D9E75;">
          <span style="background:#1D9E75;width:3px;height:14px;border-radius:2px;"></span>
          Fortalezas
        </div>
        ${fortalezas.map(f => `<div class="col-item"><div class="col-dot" style="background:#1D9E75;"></div><span>${f}</span></div>`).join('') || '<div style="font-size:11px;color:#bbb;font-style:italic;">Sin registrar</div>'}
      </div>
      <div>
        <div class="col-title" style="color:#D85A30;">
          <span style="background:#D85A30;width:3px;height:14px;border-radius:2px;"></span>
          Aspectos a mejorar
        </div>
        ${mejoras.map(m => `<div class="col-item"><div class="col-dot" style="background:#D85A30;"></div><span>${m}</span></div>`).join('') || '<div style="font-size:11px;color:#bbb;font-style:italic;">Sin registrar</div>'}
      </div>
    </div>` : ''}

    <!-- OBJETIVOS -->
    ${objs.length ? `
    <div class="obj-section">
      <div class="section-title">Objetivos del jugador</div>
      ${objs.map((o,i) => {
        const v = (starsData.OBJ || [])[i] || 0;
        const fi = FASES.find(f => f.id === o.fase);
        const col = fi ? (fi.dot || '#888') : '#888';
        return `<div class="obj-row">
          <div class="obj-text">${o.texto}</div>
          ${fi ? `<span class="obj-fase" style="background:${col}15;color:${col};">${fi.label}</span>` : ''}
          <div>${starsHtml(v, '#F5A623')}</div>
        </div>`;
      }).join('')}
    </div>` : ''}

    <!-- MICROCONCEPTOS -->
    ${micros.length ? `
    <div style="margin-bottom:24px;">
      <div class="section-title">Microconceptos observados</div>
      <div class="mic-pills">
        ${micros.map(m => `<span class="mic-pill">${m}</span>`).join('')}
      </div>
    </div>` : ''}

    <!-- NOTAS -->
    ${inf.notas ? `
    <div class="notas-box">
      <div style="font-size:9px;font-weight:800;letter-spacing:.14em;color:#999;text-transform:uppercase;margin-bottom:6px;">Notas del analista</div>
      <div class="notas-text">${inf.notas}</div>
    </div>` : ''}

  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-analista">Informe elaborado por <strong>Omar Cortés Ferrero</strong> · Analista Individual de Fútbol Base</div>
    <div style="font-size:10px;color:#bbb;">${fechaFormateada}</div>
  </div>

</div>

<script>
// Auto print al cargar
window.addEventListener('load', () => {
  setTimeout(() => window.print(), 800);
});
</script>
</body>
</html>`;

  // Abrir en nueva pestaña
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if(!win) {
    showToast('Permite ventanas emergentes para ver el informe');
    // Fallback: descarga directa
    const a = document.createElement('a');
    a.href = url;
    a.download = `Informe_${jug.nombre.replace(/ /g,'_')}_${inf.partido || 'partido'}.html`;
    a.click();
  }
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

// ─── GUARDAR INFORME DE PARTIDO ───
async function saveInforme() {
  const jugId = state.currentJugador;
  const jug = state.jugadores.find(x => x.id === jugId);
  if(!jug) return;

  const partido = document.getElementById('inf-partido')?.value.trim();
  if(!partido) { showToast('Escribe el nombre del partido'); return; }

  const nota = calcNotaGlobal();
  const stars = window._stars || {};
  const micTags = window._micTags || [];
  const objIds = window._objIds || [];

  // Construir texto de objetivos trabajados
  const objs = getObjJugador(jugId);
  const objTextos = objs.map((o,i) => {
    const v = (stars.OBJ||[])[i]||0;
    return v > 0 ? o.texto + ' (' + v + '★)' : null;
  }).filter(Boolean).join(', ');

  const data = {
    jugador_id: jugId,
    partido,
    fecha: document.getElementById('inf-fecha')?.value || new Date().toISOString().slice(0,10),
    rival: document.getElementById('inf-rival')?.value.trim() || '',
    resultado: document.getElementById('inf-resultado')?.value.trim() || '',
    nota_decimal: nota || null,
    estrellas_json: JSON.stringify(stars),
    mcb: document.getElementById('inf-mcb')?.value.trim() || '',
    msb: document.getElementById('inf-msb')?.value.trim() || '',
    tda: document.getElementById('inf-tda')?.value.trim() || '',
    tad: document.getElementById('inf-tad')?.value.trim() || '',
    microconceptos_obs: micTags.join(', '),
    objetivos_trabajados: objTextos,
    notas: document.getElementById('inf-notas')?.value.trim() || '',
    positivos: document.getElementById('inf-positivos')?.value.trim() || '',
    mejoras: document.getElementById('inf-mejoras')?.value.trim() || '',
  };

  showToast('Guardando...');
  const { data: saved, error } = await DB.from('informes_partido').insert(data).select();
  if(error) { showToast('Error: ' + error.message); return; }

  // Añadir al estado local
  state.informesPartido.unshift(saved[0]);

  // Limpiar formulario
  window._stars = {};
  window._micTags = [];
  document.querySelectorAll('.star').forEach(s => s.style.color = '#ddd');
  document.getElementById('inf-partido').value = '';
  document.getElementById('inf-rival').value = '';
  document.getElementById('inf-resultado').value = '';
  document.getElementById('nota-global').textContent = '—';
  document.getElementById('nota-global').style.color = 'var(--text3)';
  ['mcb','msb','tda','tad','notas'].forEach(k => {
    const el = document.getElementById('inf-'+k);
    if(el) el.value = '';
  });
  document.getElementById('inf-mic-tags').innerHTML = '';
  ['avg-MCB','avg-MSB','avg-TDA','avg-TAD'].forEach(k => {
    const el = document.getElementById(k);
    if(el) el.textContent = '';
  });

  showToast('✓ Informe guardado');
  renderInicio();

  // Ir al historial para ver el informe guardado
  setTimeout(() => switchDT('historial'), 400);
}

// ─── ELIMINAR INFORME ───
async function deleteInforme(infId) {
  if(!confirm('¿Eliminar este informe?')) return;
  await DB.from('informes_partido').delete().eq('id', infId);
  state.informesPartido = state.informesPartido.filter(x => x.id !== infId);
  renderInicio();
  // Refrescar la pestaña activa
  const tab = document.querySelector('#mdj .dtab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
  if(tab) renderDT(tab);
  else renderDT('historial');
  showToast('Informe eliminado');
}

// ─── VER INFORME (resumen modal) ───
function verInforme(infId) {
  const inf = state.informesPartido.find(x => x.id === infId);
  if(!inf) return;
  const jugId = inf.jugador_id;
  // Ir al historial y hacer scroll al informe
  switchDT('historial');
  setTimeout(() => {
    const el = document.querySelector(`[data-inf-id="${infId}"]`);
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}

// ─── TAREAS DE OMAR (marzo 2026) ───
const TAREAS_OMAR = [
  // BLOQUE A — POSESIÓN 3 CUADRADOS EN VERTICAL
  {
    id:'omar_01a', cat:'cadete', catLabel:'Defensas', edad:'Todas',
    pos:'Central', fase:'OF', color:'#378ADD', bg:'#E6F1FB',
    t:'Posesión 3 cuadrados en vertical — Defensas',
    j:'4-5', d:'4min', i:'Media',
    desc:'Circular el balón entre tres cuadrados verticales con salida limpia desde zona baja. Entrena la toma de decisión del defensa con balón bajo presión.',
    des:'4-5 jugadores. Tres cuadrados de 6x6 alineados verticalmente. El jugador del cuadrado inferior tiene el balón (central o lateral). Un jugador presiona (rota cada 2 min). El balón debe pasar obligatoriamente por el cuadrado medio — no se puede saltar un cuadrado. Si el presionador roba, el que lo perdió pasa a presionar. Series de 4 minutos.',
    var:'Máximo 2 toques en cuadrado inferior (simula presión alta rival). El jugador del cuadrado medio debe orientar el cuerpo antes de recibir. Añadir segundo presionador: 2v3 simultáneo.',
    neurociencia:'La construcción bajo presión activa los circuitos de toma de decisión en condiciones de estrés. Repetir el patrón (recibir-escanear-decidir) en espacio reducido mieliniza la respuesta rápida.',
    preg:[
      {p:'Cuando tienes el balón en el cuadrado inferior con presión encima, ¿qué miras primero — el compañero del medio o el del alto?', razon:'Identifica la jerarquía de escaneo del jugador.'},
      {p:'¿Cómo te posicionas en el cuadrado medio para que el que tiene el balón pueda encontrarte siempre?', razon:'Trabaja la disponibilidad y el perfil de recepción.'},
      {p:'Cuando el presionador te cierra, ¿qué decides — conservar, volver atrás o arriesgar el pase al siguiente?', razon:'Metacognición de la decisión bajo presión.'}
    ],
    mics:['Apoyo de seguridad por detrás','Conducción hacia intervalos para fijar','Salida de balón bajo presión','Orientación corporal en recepción']
  },
  {
    id:'omar_01b', cat:'cadete', catLabel:'Medios', edad:'Todas',
    pos:'Pivote', fase:'OF', color:'#E07B00', bg:'#FAEEDA',
    t:'Posesión 3 cuadrados en vertical — Medios',
    j:'4-5', d:'4min', i:'Media',
    desc:'El cuadrado central es la zona de decisión. El medio que recibe ahí lee si progresar o conservar. Entrena la recepción entre líneas y la decisión inmediata.',
    des:'4-5 jugadores. Tres cuadrados de 7x7 alineados verticalmente. El jugador del cuadrado central es el protagonista: recibe desde abajo y decide si conservar, devolver o progresar al cuadrado alto. Un jugador presiona en el cuadrado central únicamente. El balón debe pasar siempre por el cuadrado central — no hay pase directo de bajo a alto. Series de 4 minutos. Rotación del presionador cada 2 minutos.',
    var:'El jugador del cuadrado central solo tiene 2 toques antes de decidir. El presionador puede salir del cuadrado central para interceptar el pase de llegada. Condición: el pase al cuadrado alto debe ser en profundidad, nunca lateral.',
    neurociencia:'La decisión entre progresión y conservación activa el córtex prefrontal dorsolateral. El entrenamiento repetido en este dilema construye automatismos de lectura del espacio disponible.',
    preg:[
      {p:'Antes de recibir en el cuadrado central, ¿ya tienes decidido lo que vas a hacer o decides cuando el balón llega?', razon:'Evalúa si el escaneo previo es efectivo.'},
      {p:'¿Cuándo decides devolver el balón hacia abajo y cuándo progresas hacia arriba? ¿Qué ves para tomar esa decisión?', razon:'Identifica los indicadores visuales que usa para decidir.'},
      {p:'Cuando el presionador te anticipa el pase de llegada, ¿cómo cambias tu posición para seguir siendo opción?', razon:'Adaptación táctica en tiempo real.'}
    ],
    mics:['Escaneos','Perfil recibiendo de espaldas para poder jugar fácil','Recibir en cuadrados para superar línea de medios con el pase','Decisión de progresión vs conservación']
  },
  {
    id:'omar_01c', cat:'cadete', catLabel:'Ofensivos', edad:'Todas',
    pos:'Delantero', fase:'OF', color:'#FF3366', bg:'#FCEBEB',
    t:'Posesión 3 cuadrados en vertical — Ofensivos',
    j:'4-5', d:'4min', i:'Media-Alta',
    desc:'El cuadrado alto es la zona de finalización. El jugador que recibe ahí gira, protege y crea. Entrena recepción de espaldas, giro y asociación rápida en zona de ataque.',
    des:'4-5 jugadores. Tres cuadrados de 7x7 alineados verticalmente. El jugador del cuadrado alto es el delantero referencia: recibe desde el medio, protege y asocia. Un jugador hace de defensor en el cuadrado alto — presión desde atrás. Completar 5 pases en el cuadrado alto después de que el balón haya llegado desde abajo. Si el defensor recupera, el que perdió pasa a defender. Series de 4 minutos.',
    var:'El delantero del cuadrado alto solo puede girar hacia un lado (trabaja el giro hacia el lado débil). El defensor puede interceptar el pase de llegada. Añadir segundo defensor en cuadrado alto: 2v3, protección y asociación bajo presión real.',
    neurociencia:'La recepción de espaldas y el giro bajo presión requieren integración propioceptiva y visual simultánea. La repetición en espacio limitado automatiza el "feel" del defensor detrás.',
    preg:[
      {p:'Cuando el balón está en el cuadrado inferior, ¿ya estás preparando tu movimiento de recepción o esperas a que el pase salga?', razon:'Evalúa la anticipación del movimiento.'},
      {p:'Cuando recibes con el defensor encima, ¿qué parte de tu cuerpo usas primero para proteger el balón?', razon:'Analiza la técnica instintiva de protección.'},
      {p:'¿Cuándo decides girar y cuándo decides asociar de vuelta? ¿Qué te da esa información?', razon:'Metacognición de la lectura del defensor.'}
    ],
    mics:['Atacar espalda de centrales con desmarque','Si vengo es porque voy','Recepción de espaldas y protección del balón','Giro bajo presión defensiva']
  },

  // BLOQUE B — POSESIÓN TRES ZONAS CON SALIDA CONDICIONADA
  {
    id:'omar_02a', cat:'cadete', catLabel:'Defensas', edad:'Todas',
    pos:'Central', fase:'OF', color:'#378ADD', bg:'#E6F1FB',
    t:'Posesión tres zonas con salida condicionada — Defensas',
    j:'4-5', d:'5min', i:'Media',
    desc:'Posesión en tres zonas reducidas. Entrena la salida de balón hacia zona media — la decisión más difícil para un defensa: cuándo y cómo progresar cuando hay presión encima.',
    des:'4-5 jugadores. Campo de 20x15 pasos dividido en 3 zonas de 20x5. El balón empieza siempre en Zona A. Para puntuar, el balón debe llegar a Zona C habiendo pasado por Zona B. Un jugador presiona en Zona A. 1 punto por cada vez que el balón llega limpio a Zona C. Series de 5 minutos.',
    var:'Máximo 3 toques en Zona A. El pase de Zona A a Zona B debe ser obligatoriamente al pie del compañero — no al espacio. Añadir segundo presionador en Zona B para replicar presión media rival.',
    neurociencia:'La progresión por fases obliga al jugador a construir un mapa mental del espacio disponible antes de actuar. Entrena la visión periférica y la toma de decisión secuencial.',
    preg:[
      {p:'Cuando tienes el balón en Zona A con presión encima, ¿qué opción buscas primero?', razon:'Jerarquía de opciones del defensa con balón.'},
      {p:'¿Cómo sabes que es el momento de intentar llegar a Zona B? ¿Qué tiene que pasar antes?', razon:'Identifica el indicador de progresión.'},
      {p:'Si el compañero de Zona B no está disponible, ¿qué haces? ¿Conservas, cambias el juego o buscas otra vía?', razon:'Gestión de la opción alternativa.'}
    ],
    mics:['Apoyo de seguridad por detrás','Conducción hacia intervalos para fijar','Salida de balón estructurada desde zona defensiva','Cambio de orientación cuando la opción directa está cerrada']
  },
  {
    id:'omar_02b', cat:'cadete', catLabel:'Medios', edad:'Todas',
    pos:'Interior', fase:'OF', color:'#A855F7', bg:'#EEEDFE',
    t:'Posesión tres zonas con salida condicionada — Medios',
    j:'4-5', d:'5min', i:'Media',
    desc:'La Zona B es el territorio del medio. Recibe desde atrás y decide si mantener o progresar. Entrena la lectura de cuándo el espacio en Zona C está disponible para dar el pase final.',
    des:'4-5 jugadores. Campo de 20x18 pasos dividido en 3 zonas de 20x6. El medio protagonista vive en Zona B. Recibe desde Zona A y decide progresar a Zona C o conservar. Un jugador presiona en Zona B. Para puntuar: secuencia A→B→C completada. El medio de Zona B tiene que ser el nexo obligatorio. Series de 5 minutos.',
    var:'El medio de Zona B solo tiene 3 toques para decidir. El presionador puede salir de Zona B para interceptar el pase de llegada. Condición avanzada: el pase a Zona C solo es válido si el receptor está en movimiento cuando recibe.',
    neurociencia:'El medio entre líneas necesita procesar dos informaciones simultáneas: lo que hay detrás (Zona A) y lo que hay delante (Zona C). Esta doble visión se entrena con repetición y feedback inmediato.',
    preg:[
      {p:'¿Miras Zona C antes de recibir en Zona B o solo después de tener el balón?', razon:'Evalúa si el escaneo es pre o post recepción.'},
      {p:'¿Cuándo decides que Zona C no está disponible y conservas? ¿Qué señal te lo dice?', razon:'Identifica el indicador de no-progresión.'},
      {p:'Cuando devuelves a Zona A, ¿es porque no había opción o porque no te atreviste a arriesgar?', razon:'Diferencia entre decisión táctica y limitación mental.'}
    ],
    mics:['Escaneos','Percepción de espacios antes de recibir','Lectura de líneas de pase desde zona media','Timing de la progresión']
  },
  {
    id:'omar_02c', cat:'cadete', catLabel:'Ofensivos', edad:'Todas',
    pos:'Extremo', fase:'OF', color:'#FF6B35', bg:'#FAECE7',
    t:'Posesión tres zonas con salida condicionada — Ofensivos',
    j:'4-5', d:'5min', i:'Media-Alta',
    desc:'La Zona C es su zona — pero solo pueden atacarla si el balón ha pasado por Zona B. Entrena el movimiento previo del atacante para crear el espacio para recibir en condiciones de finalizar.',
    des:'4-5 jugadores. Campo de 20x18 pasos dividido en 3 zonas de 20x6. Los atacantes trabajan principalmente en Zona C. Un jugador en Zona B hace de enlace. Un defensor en Zona C presiona. Para puntuar: recepción en Zona C con el cuerpo orientado hacia adelante y pase o remate en un máximo de 2 toques. Series de 5 minutos.',
    var:'El atacante de Zona C debe hacer un movimiento de alejamiento antes de pedir el balón (desmarque de ruptura). El defensor de Zona C puede salir a interceptar el pase de llegada. Solo puntúa si el remate o pase final es con el pie no dominante.',
    neurociencia:'El desmarque previo a la recepción activa el sistema motor planificado — el atacante programa el movimiento de recepción antes de que el balón salga. Entrena la anticipación motriz.',
    preg:[
      {p:'¿Cuándo y cómo haces el movimiento para crear el espacio en Zona C?', razon:'Identifica la señal que activa el desmarque.'},
      {p:'Cuando el balón llega a Zona B, ¿ya estás en posición o todavía te estás moviendo?', razon:'Evalúa el timing del movimiento previo.'},
      {p:'Si el defensor te anticipa el espacio, ¿tienes un movimiento alternativo o te quedas parado?', razon:'Adaptabilidad del desmarque.'}
    ],
    mics:['Rupturas a la espalda de la línea defensiva','Desmarque desde segunda altura','Generar arrastres','Movimiento previo a la recepción en profundidad']
  },

  // BLOQUE C — TRANSICIONES EN TRES CARRILES
  {
    id:'omar_03a', cat:'cadete', catLabel:'Defensas', edad:'Todas',
    pos:'Central', fase:'TD', color:'#D85A30', bg:'#FAECE7',
    t:'Transiciones en tres carriles — Defensas',
    j:'4-5', d:'6min', i:'Alta',
    desc:'Transición defensiva. Un defensa ataca al espacio y otro defiende un 1v1 inmediato cuando termina. Replica el momento más exigente: pasar de atacar a defender sin tiempo de recuperación.',
    des:'4-5 jugadores en parejas rotantes (uno ataca, uno defiende, resto espera). El atacante sale en sprint a un cono de 15 pasos, da la vuelta y viene hacia mini-portería. El defensor sale en sprint diagonal a un cono exterior y vuelve — cuando regresa, el atacante ya viene con balón. 1v1: el defensor frena al atacante que llega con ventaja de posición. El que defiende bien suma 1 punto. Rotación tras cada 1v1. Series de 6 minutos.',
    var:'Sin sprint previo: transición directa, menos fatiga, más foco en la técnica defensiva del 1v1. El cono del defensor más alejado: más ventaja para el atacante. Condición: el defensor no puede entrar en el área hasta que el atacante haya superado la línea central.',
    neurociencia:'La transición ataque→defensa bajo fatiga activa los mecanismos de inhibición cognitiva — el jugador debe frenar el impulso ofensivo y activar el modo defensivo. Se entrena con repetición y bajo carga física real.',
    preg:[
      {p:'Cuando llegas al 1v1 después del sprint, ¿frenas bien antes de encarar al atacante o llegas con demasiada inercia?', razon:'Evalúa el control motor bajo fatiga.'},
      {p:'¿Qué parte del cuerpo del atacante miras para anticipar hacia dónde va?', razon:'Identifica los indicadores visuales del defensor.'},
      {p:'Cuando estás cansado, ¿qué cambia en tu manera de defender el 1v1?', razon:'Metacognición de la resistencia técnica.'}
    ],
    mics:['Transición de ataque a defensa','1v1 defensivo bajo fatiga','Frenada y posicionamiento defensivo tras sprint','Resistencia técnica bajo fatiga']
  },
  {
    id:'omar_03b', cat:'cadete', catLabel:'Medios', edad:'Todas',
    pos:'Pivote', fase:'TO', color:'#00D4AA', bg:'rgba(0,212,170,0.08)',
    t:'Transiciones en tres carriles — Medios',
    j:'4-5', d:'5min', i:'Alta',
    desc:'Combina un 2v2 en zona central con transición inmediata al perder o recuperar. El medio entrena la velocidad de lectura del cambio de fase.',
    des:'4-5 jugadores. Espacio de 20x15 pasos con dos mini-porterías. 2v2 central. El quinto jugador es comodín con el equipo que tiene el balón. Cuando hay gol o el balón sale, el que perdió activa transición defensiva: tiene 3 segundos para volver a su posición. El equipo que recupera no puede esperar — ataca inmediatamente. Series de 5 minutos continuos.',
    var:'Sin tiempo de recuperación: el ataque del rival empieza en el instante exacto de la recuperación. El comodín solo puede tocar el balón una vez por posesión. Gol válido solo si hay al menos un compañero en posición de ataque.',
    neurociencia:'El cambio de fase (ataque↔defensa) es el momento de mayor carga cognitiva en el fútbol. Entrenar específicamente ese instante de transición activa la flexibilidad cognitiva y los mecanismos de inhibición/activación.',
    preg:[
      {p:'¿En qué momento exacto decides que has perdido el balón y hay que defender?', razon:'Identifica el indicador de cambio de fase.'},
      {p:'Cuando recuperas el balón, ¿tu primera mirada es al compañero más cercano o al espacio más libre?', razon:'Jerarquía visual en la transición ofensiva.'},
      {p:'¿Eres más rápido en la transición ofensiva o en la defensiva? ¿Por qué crees que hay diferencia?', razon:'Autoconocimiento táctico.'}
    ],
    mics:['Velocidad de lectura del cambio de fase','Transición ofensiva: de defender a atacar en 1-2 acciones','Reacción tras recuperación','Reacción tras pérdida']
  },
  {
    id:'omar_03c', cat:'cadete', catLabel:'Ofensivos', edad:'Todas',
    pos:'Delantero', fase:'TO', color:'#FF3366', bg:'#FCEBEB',
    t:'Transiciones en tres carriles — Ofensivos',
    j:'4-5', d:'6min', i:'Alta',
    desc:'Transición ofensiva. El atacante recibe el balón después de un sprint y tiene que atacar el 1v1 o crear la superioridad inmediata. Replica el contraataque real.',
    des:'4-5 jugadores. Espacio de 25x20 pasos con portería grande. El atacante sale en sprint a un cono de 20 pasos, da la vuelta y recibe del compañero. El defensor sale en sprint diagonal — llega ligeramente tarde. 1v1 con portero: el atacante tiene ventaja posicional. Si hay 5 jugadores: dos atacantes salen, uno recibe y uno apoya — 2v1 con portero. Series de 6 minutos con rotación.',
    var:'El atacante solo tiene 4 segundos desde que recibe para finalizar. El defensor sale al mismo tiempo que el atacante (mismo cansancio, mayor igualdad). Variante 2v1: el segundo atacante viene desde banda — el que recibe decide si asocia o va solo.',
    neurociencia:'El contraataque exige la máxima velocidad de procesamiento — cuerpo en fatiga, espacio disponible, defensor descolocado, portero a leer. La repetición bajo estas condiciones entrena la decisión automática en el momento del contraataque.',
    preg:[
      {p:'Cuando recibes el balón después del sprint, ¿ya sabes lo que vas a hacer antes de que llegue el balón?', razon:'Evalúa si la anticipación cognitiva supera la fatiga física.'},
      {p:'En el 1v1 con el defensor cansado, ¿qué tipo de regate o movimiento te funciona mejor? ¿Por qué?', razon:'Autoconocimiento del repertorio ofensivo.'},
      {p:'En la variante 2v1, ¿cuándo decides que es mejor ir solo y cuándo dar el pase?', razon:'Lectura de la superioridad numérica.'}
    ],
    mics:['Ataque al espacio tras transición','Si vengo es porque voy','Finalización bajo fatiga','Decisión de ir solo vs asociar en superioridad']
  },
];

// ─── PLAN DE PARTIDO (desde app analista → va al jugador) ───

function renderPlanSection() {
  const id = state.currentJugador;
  if(!id) return;
  const planes = (state.planesPartido||[]).filter(p => p.jugador_id === id);
  const body = document.getElementById('djbody');
  if(!body) return;
  const SI='width:100%;height:36px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box;';
  const TA='width:100%;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:10px;font-size:12px;background:var(--bg);color:var(--text);resize:vertical;font-family:inherit;outline:none;line-height:1.6;box-sizing:border-box;';
  const CARD='background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:.875rem;';
  body.innerHTML=`
    <div style="${CARD}">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.875rem;">Nuevo plan de partido</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
        <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Fecha</label><input type="date" id="plan-fecha" style="${SI}" value="${new Date().toISOString().slice(0,10)}"></div>
        <div><label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Rival</label><input type="text" id="plan-rival" placeholder="Nombre del rival" style="${SI}"></div>
      </div>
      <div style="font-size:10px;color:var(--text3);margin-bottom:6px;">Puntos del plan (uno por línea)</div>
      <textarea id="plan-items" placeholder="Trabaja la anticipación bajo presión&#10;Busca el espacio entre pivote e interior&#10;En transición, sprint inmediato al espacio..." style="${TA}height:110px;margin-bottom:8px;"></textarea>
      <div style="font-size:10px;color:var(--text3);margin-bottom:6px;">Notas adicionales</div>
      <textarea id="plan-notas" placeholder="Contexto, rival, condiciones del partido..." style="${TA}height:55px;margin-bottom:10px;"></textarea>
      <button class="btn" style="width:100%;background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;letter-spacing:.03em;" onclick="savePlanPartido('${id}')">📤 Enviar plan al jugador</button>
    </div>
    ${planes.length?`<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.75rem;">Planes anteriores</div>
    ${planes.map(p=>`<div style="${CARD}padding:.875rem;"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;"><div style="font-size:13px;font-weight:600;">${p.rival||'Partido'}</div><div style="font-size:10px;color:var(--text3);">${p.fecha||''}</div></div>${(p.items||[]).map((item,i)=>`<div style="display:flex;gap:8px;padding:5px 0;border-bottom:0.5px solid var(--border);"><div style="color:var(--blue);font-size:11px;font-weight:700;min-width:18px;">${i+1}</div><div style="font-size:12px;color:var(--text2);">${item}</div></div>`).join('')}</div>`).join('')}`:''}`;
}

async function savePlanPartido(jugId) {
  const fecha=document.getElementById('plan-fecha')?.value;
  const rival=document.getElementById('plan-rival')?.value.trim()||'';
  const itemsRaw=document.getElementById('plan-items')?.value.trim()||'';
  const notas=document.getElementById('plan-notas')?.value.trim()||'';
  if(!itemsRaw){showToast('Escribe al menos un punto del plan');return;}
  const items=itemsRaw.split('\n').filter(Boolean);
  const{data,error}=await DB.from('planes_partido').insert({jugador_id:jugId,fecha,rival,items,notas}).select();
  if(error){showToast('Error: '+error.message);return;}
  if(!state.planesPartido)state.planesPartido=[];
  state.planesPartido.unshift(data[0]);
  showToast('✓ Plan enviado al jugador');
  renderPlanSection();
}

// ─── EDITAR JUGADOR ───
function abrirEditarJugador() {
  const id = state.currentJugador;
  const j = state.jugadores.find(x => x.id === id);
  if(!j) return;
  document.getElementById('ej-nombre').value = j.nombre||'';
  document.getElementById('ej-pos').value = j.posicion||'Central';
  document.getElementById('ej-equipo').value = j.equipo||'';
  document.getElementById('ej-cat').value = j.categoria||'Cadete';
  document.getElementById('ej-sesion').value = j.sesion_fecha||'';
  document.getElementById('ej-email').value = j.email_jugador||'';
  openModal('modal-edit-jug');
}

async function guardarEdicionJugador() {
  const id = state.currentJugador;
  const j = state.jugadores.find(x => x.id === id);
  if(!j) return;

  const nombre = document.getElementById('ej-nombre').value.trim();
  if(!nombre) { showToast('El nombre es obligatorio'); return; }

  const updates = {
    nombre,
    posicion: document.getElementById('ej-pos').value,
    equipo: document.getElementById('ej-equipo').value.trim(),
    categoria: document.getElementById('ej-cat').value,
    sesion_fecha: document.getElementById('ej-sesion').value || null,
    email_jugador: document.getElementById('ej-email').value.trim(),
  };

  // Foto nueva
  const fotoFile = document.getElementById('ej-foto')?.files?.[0];
  if(fotoFile) {
    const r = new FileReader();
    updates.foto_jugador = await new Promise(res => { r.onload = e => res(e.target.result); r.readAsDataURL(fotoFile); });
  }

  // Logo nuevo
  const logoFile = document.getElementById('ej-logo')?.files?.[0];
  if(logoFile) {
    const r2 = new FileReader();
    updates.logo_club = await new Promise(res => { r2.onload = e => res(e.target.result); r2.readAsDataURL(logoFile); });
  }

  const { error } = await DB.from('jugadores').update(updates).eq('id', id);
  if(error) { showToast('Error: ' + error.message); return; }

  // Actualizar estado local
  Object.assign(j, updates);
  closeModal('modal-edit-jug');

  // Actualizar header del modal
  const pc = AV_COLORS[j.posicion]||{bg:'#eee',color:'#666'};
  document.getElementById('djn').textContent = j.nombre;
  document.getElementById('djm').textContent = `${j.posicion} · ${j.equipo||''} · ${j.categoria||''}`;

  renderJugadores();
  renderInicio();
  showToast('✓ Jugador actualizado');

  // Mostrar confirmación de email si se puso
  if(updates.email_jugador) {
    setTimeout(() => showToast(`✓ Vinculado con ${updates.email_jugador}`), 1500);
  }
}

// ─── SUBIR CLIP DESDE LA FICHA DEL JUGADOR ───
async function subirClipJugador(jugId) {
  const microId = document.getElementById('clip-jug-micro')?.value;
  const tipo = document.getElementById('clip-jug-tipo')?.value || 'mejorar';
  const titulo = document.getElementById('clip-jug-titulo')?.value.trim() || '';
  const fileInput = document.getElementById('clip-jug-file');
  let url = document.getElementById('clip-jug-url')?.value.trim() || '';

  if(!microId) { showToast('Selecciona un microconcepto'); return; }

  if(fileInput?.files?.[0]) {
    if(fileInput.files[0].size > 50*1024*1024) { showToast('El archivo supera 50MB'); return; }
    showToast('Subiendo clip...');
    const uploaded = await uploadVideoClip(fileInput.files[0]);
    if(!uploaded) return;
    url = uploaded;
  }

  if(!url) { showToast('Selecciona un archivo o pega un enlace'); return; }

  const { data, error } = await DB.from('clips_microconcepto').insert({
    micro_id: microId, titulo, tipo, url
  }).select();

  if(error) { showToast('Error: ' + error.message); return; }
  if(!state.micClips) state.micClips = [];
  state.micClips.push(data[0]);

  if(fileInput) fileInput.value = '';
  document.getElementById('clip-jug-url').value = '';
  document.getElementById('clip-jug-titulo').value = '';

  showToast('✓ Clip subido — visible en la app del jugador');
  renderDT('clips');
}

async function eliminarClipJugador(clipId, jugId) {
  if(!confirm('¿Eliminar este clip?')) return;
  await DB.from('clips_microconcepto').delete().eq('id', clipId);
  state.micClips = (state.micClips||[]).filter(c => c.id !== clipId);
  showToast('Clip eliminado');
  renderDT('clips');
}

// ─── CLIPS DIRECTOS DEL JUGADOR ───

async function subirClipJugadorDirecto(jugId) {
  const tipo = document.getElementById('clip-jug-tipo')?.value || 'mejorar';
  const titulo = document.getElementById('clip-jug-titulo')?.value.trim() || '';
  const fileInput = document.getElementById('clip-jug-file');
  let url = document.getElementById('clip-jug-url')?.value.trim() || '';

  if(fileInput?.files?.[0]) {
    if(fileInput.files[0].size > 50*1024*1024) { showToast('El archivo supera 50MB'); return; }
    showToast('Subiendo clip...');
    const uploaded = await uploadVideoClip(fileInput.files[0]);
    if(!uploaded) { showToast('Error al subir'); return; }
    url = uploaded;
  }

  if(!url) { showToast('Selecciona un archivo o pega un enlace de Drive'); return; }

  const { data, error } = await DB.from('clips_jugador').insert({
    jugador_id: jugId,
    tipo,
    titulo,
    url,
  }).select();

  if(error) { showToast('Error: ' + error.message); return; }

  if(!state.clipsJugador) state.clipsJugador = [];
  state.clipsJugador.push(data[0]);

  if(fileInput) fileInput.value = '';
  document.getElementById('clip-jug-url').value = '';
  document.getElementById('clip-jug-titulo').value = '';

  showToast('✓ Clip subido — ya visible en la app del jugador');
  renderDT('clips');
}

async function eliminarClipJugadorDirecto(clipId, jugId) {
  if(!confirm('¿Eliminar este clip?')) return;
  await DB.from('clips_jugador').delete().eq('id', clipId);
  state.clipsJugador = (state.clipsJugador||[]).filter(c => c.id !== clipId);
  renderDT('clips');
  showToast('Clip eliminado');
}

// ─── CHAT ANALISTA ───
function renderChatAnalista() {
  const id = state.currentJugador;
  const j = state.jugadores.find(x => x.id === id);
  if(!j) return;
  const body = document.getElementById('djbody');
  if(!body) return;

  body.innerHTML = `
    <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);overflow:hidden;">
      <div style="padding:10px 14px;border-bottom:0.5px solid var(--border);">
        <div style="font-size:12px;font-weight:700;">Chat con ${j.nombre}</div>
        <div style="font-size:10px;color:var(--text2);">Los mensajes son privados</div>
      </div>
      <div id="analista-chat-msgs" style="min-height:280px;max-height:380px;overflow-y:auto;padding:1rem;"></div>
      <div style="padding:10px;border-top:0.5px solid var(--border);display:flex;gap:8px;">
        <input type="text" id="analista-chat-input" placeholder="Escribe un mensaje..." onkeydown="if(event.key==='Enter')enviarMensajeAnalista('${id}')" style="flex:1;height:36px;background:var(--bg2);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 12px;font-size:12px;color:var(--text);outline:none;">
        <button onclick="enviarMensajeAnalista('${id}')" style="width:36px;height:36px;border-radius:var(--radius-sm);background:linear-gradient(135deg,#1D9E75,#0f6e56);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>`;

  cargarMensajesAnalista(id);
  if(window._chatInterval) clearInterval(window._chatInterval);
  window._chatInterval = setInterval(() => cargarMensajesAnalista(id), 10000);
}

async function cargarMensajesAnalista(jugId) {
  const { data } = await DB.from('mensajes_chat')
    .select('*')
    .eq('jugador_id', jugId)
    .order('created_at', {ascending: true})
    .limit(50);

  const cont = document.getElementById('analista-chat-msgs');
  if(!cont) return;

  const msgs = data || [];
  if(!msgs.length) {
    cont.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text3);font-size:12px;">Sin mensajes todavía. Empieza la conversación.</div>';
    return;
  }

  cont.innerHTML = msgs.map(m => {
    const esAnalista = m.autor === 'analista';
    const fecha = new Date(m.created_at).toLocaleString('es-ES', {day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
    return `<div style="display:flex;flex-direction:column;align-items:${esAnalista?'flex-end':'flex-start'};margin-bottom:8px;">
      <div style="max-width:80%;padding:8px 12px;border-radius:${esAnalista?'14px 4px 14px 14px':'4px 14px 14px 14px'};background:${esAnalista?'rgba(29,158,117,0.2)':'var(--bg2)'};border:0.5px solid ${esAnalista?'rgba(29,158,117,0.3)':'var(--border2)'};">
        <div style="font-size:12px;line-height:1.6;">${m.texto}</div>
      </div>
      <div style="font-size:9px;color:var(--text3);margin-top:2px;padding:0 4px;">${esAnalista?'Tú':m.autor} · ${fecha}</div>
    </div>`;
  }).join('');
  cont.scrollTop = cont.scrollHeight;
}

async function enviarMensajeAnalista(jugId) {
  const input = document.getElementById('analista-chat-input');
  if(!input) return;
  const texto = input.value.trim();
  if(!texto) return;
  input.value = '';
  const { error } = await DB.from('mensajes_chat').insert({
    jugador_id: jugId,
    autor: 'analista',
    texto
  });
  if(error) { showToast('Error al enviar'); return; }
  cargarMensajesAnalista(jugId);
}

// ─── CALENDARIO SEMANAL (analista → jugador) ───

function renderCalendarioSection() {
  const id = state.currentJugador;
  if(!id) return;
  const body = document.getElementById('djbody');
  if(!body) return;

  // Calcular semana actual (lunes a domingo)
  const hoy = new Date();
  const dow = hoy.getDay() === 0 ? 6 : hoy.getDay() - 1; // 0=lunes
  const lunes = new Date(hoy); lunes.setDate(hoy.getDate() - dow);
  const dias = [];
  for(let i = 0; i < 7; i++) {
    const d = new Date(lunes); d.setDate(lunes.getDate() + i);
    dias.push(d);
  }

  const NOMBRES = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  const TIPOS = {
    entreno: {color:'#3fb950', bg:'rgba(63,185,80,0.12)', label:'Entreno'},
    partido: {color:'#58a6ff', bg:'rgba(88,166,255,0.12)', label:'Partido'},
    descanso:{color:'#484f58', bg:'rgba(72,79,88,0.12)',   label:'Descanso'},
    otros:   {color:'#d29922', bg:'rgba(210,153,34,0.12)', label:'Otros'},
  };

  const SI = 'width:100%;height:34px;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box;';
  const TA = 'width:100%;border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:8px;font-size:12px;background:var(--bg);color:var(--text);resize:none;font-family:inherit;outline:none;line-height:1.5;box-sizing:border-box;';

  // Cargar eventos de la semana
  const fechaLunes = lunes.toISOString().slice(0,10);
  const fechaDomingo = dias[6].toISOString().slice(0,10);

  DB.from('calendario_semana')
    .select('*')
    .eq('jugador_id', id)
    .gte('fecha', fechaLunes)
    .lte('fecha', fechaDomingo)
    .then(({data}) => {
      const eventos = data || [];
      const porFecha = {};
      eventos.forEach(e => { porFecha[e.fecha] = e; });

      let html = `
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.875rem;">
          Semana del ${lunes.toLocaleDateString('es-ES',{day:'numeric',month:'short'})} al ${dias[6].toLocaleDateString('es-ES',{day:'numeric',month:'short'})}
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:1rem;">`;

      dias.forEach((d, i) => {
        const fecha = d.toISOString().slice(0,10);
        const ev = porFecha[fecha];
        const tc = ev ? (TIPOS[ev.tipo]||TIPOS.entreno) : null;
        const esHoy = fecha === hoy.toISOString().slice(0,10);
        html += `<div onclick="abrirDiaCalendario('${fecha}','${id}')" style="cursor:pointer;border-radius:8px;padding:6px 4px;text-align:center;border:0.5px solid ${esHoy?'rgba(255,255,255,0.25)':ev?tc.color+'40':'var(--border)'};background:${ev?tc.bg:'var(--bg)'};transition:all .15s;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='${esHoy?'rgba(255,255,255,0.25)':ev?tc.color+'40':'var(--border)'}'">
          <div style="font-size:9px;color:var(--text3);margin-bottom:2px;">${NOMBRES[i]}</div>
          <div style="font-size:13px;font-weight:${esHoy?'800':'600'};color:${esHoy?'#fff':'var(--text)'};">${d.getDate()}</div>
          ${ev ? `<div style="width:6px;height:6px;border-radius:50%;background:${tc.color};margin:3px auto 0;"></div>` : '<div style="height:9px;"></div>'}
        </div>`;
      });

      html += '</div>';

      // Detalle de cada día con evento
      dias.forEach((d, i) => {
        const fecha = d.toISOString().slice(0,10);
        const ev = porFecha[fecha];
        if(!ev) return;
        const tc = TIPOS[ev.tipo]||TIPOS.entreno;
        html += `<div style="background:var(--bg);border:0.5px solid ${tc.color}40;border-left:3px solid ${tc.color};border-radius:var(--radius-sm);padding:.875rem;margin-bottom:8px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${ev.foco||ev.notas?'8px':'0'};">
            <div>
              <span style="font-size:9px;padding:2px 7px;border-radius:99px;background:${tc.bg};color:${tc.color};font-weight:700;">${tc.label}</span>
              <span style="font-size:12px;font-weight:600;margin-left:8px;">${NOMBRES[i]} ${d.getDate()}</span>
              ${ev.hora?`<span style="font-size:10px;color:var(--text2);margin-left:6px;">⏰ ${ev.hora}</span>`:''}
              ${ev.rival?`<span style="font-size:11px;color:${tc.color};margin-left:6px;">vs ${ev.rival}</span>`:''}
            </div>
            <button onclick="eliminarEvento('${ev.id}','${id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;padding:2px 6px;">×</button>
          </div>
          ${ev.foco?`<div style="font-size:11px;color:var(--text2);line-height:1.6;border-top:0.5px solid var(--border);padding-top:6px;"><span style="color:${tc.color};font-weight:700;">Foco: </span>${ev.foco}</div>`:''}
          ${ev.notas?`<div style="font-size:11px;color:var(--text3);line-height:1.5;margin-top:4px;">${ev.notas}</div>`:''}
        </div>`;
      });

      // Formulario añadir evento
      html += `
        <div style="background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;margin-top:.5rem;" id="cal-form-wrapper">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.875rem;">Añadir a la semana</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
            <div>
              <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Día</label>
              <select id="cal-fecha" style="${SI}">
                ${dias.map((d,i)=>`<option value="${d.toISOString().slice(0,10)}">${NOMBRES[i]} ${d.getDate()}</option>`).join('')}
              </select>
            </div>
            <div>
              <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Tipo</label>
              <select id="cal-tipo" style="${SI}" onchange="toggleCalRival()">
                <option value="entreno">Entrenamiento</option>
                <option value="partido">Partido</option>
                <option value="descanso">Descanso</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
            <div>
              <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Hora</label>
              <input type="time" id="cal-hora" style="${SI}">
            </div>
            <div id="cal-rival-wrap">
              <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Rival</label>
              <input type="text" id="cal-rival" placeholder="Nombre del rival" style="${SI}">
            </div>
          </div>
          <div style="margin-bottom:8px;">
            <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Foco / Objetivos del entrenamiento</label>
            <textarea id="cal-foco" rows="2" placeholder="Trabajar la anticipación, mejorar la salida de balón..." style="${TA}"></textarea>
          </div>
          <div style="margin-bottom:10px;">
            <label style="font-size:10px;color:var(--text3);display:block;margin-bottom:3px;">Notas adicionales</label>
            <textarea id="cal-notas" rows="1" placeholder="Opcional..." style="${TA}"></textarea>
          </div>
          <button onclick="guardarEventoCalendario('${id}')" class="btn" style="width:100%;">Guardar en el calendario del jugador</button>
        </div>`;

      body.innerHTML = html;
    });
}

function toggleCalRival() {
  const tipo = document.getElementById('cal-tipo')?.value;
  const wrap = document.getElementById('cal-rival-wrap');
  if(wrap) wrap.style.display = tipo === 'partido' ? 'block' : 'none';
}

function abrirDiaCalendario(fecha, jugId) {
  const sel = document.getElementById('cal-fecha');
  if(sel) sel.value = fecha;
  const form = document.getElementById('cal-form-wrapper');
  if(form) form.scrollIntoView({behavior:'smooth', block:'nearest'});
}

async function guardarEventoCalendario(jugId) {
  const fecha = document.getElementById('cal-fecha')?.value;
  const tipo = document.getElementById('cal-tipo')?.value || 'entreno';
  const hora = document.getElementById('cal-hora')?.value || '';
  const rival = document.getElementById('cal-rival')?.value.trim() || '';
  const foco = document.getElementById('cal-foco')?.value.trim() || '';
  const notas = document.getElementById('cal-notas')?.value.trim() || '';

  if(!fecha) { showToast('Selecciona un día'); return; }

  // Si ya hay evento ese día, actualizarlo
  const { data: existing } = await DB.from('calendario_semana')
    .select('id').eq('jugador_id', jugId).eq('fecha', fecha).single();

  let error;
  if(existing) {
    ({error} = await DB.from('calendario_semana')
      .update({tipo, hora, rival, foco, notas})
      .eq('id', existing.id));
  } else {
    ({error} = await DB.from('calendario_semana')
      .insert({jugador_id: jugId, fecha, tipo, hora, rival, foco, notas}));
  }

  if(error) { showToast('Error: '+error.message); return; }
  showToast('✓ Calendario actualizado');
  renderCalendarioSection();
}

async function eliminarEvento(evId, jugId) {
  if(!confirm('¿Eliminar este evento?')) return;
  await DB.from('calendario_semana').delete().eq('id', evId);
  showToast('Evento eliminado');
  renderCalendarioSection();
}

// ─── SEGUIMIENTO DEL JUGADOR (nutrición + bienestar) ───

async function renderSeguimientoSection() {
  const id = state.currentJugador;
  const j = state.jugadores.find(x => x.id === id);
  if(!j) return;
  const body = document.getElementById('djbody');
  if(!body) return;

  body.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text3);">Cargando seguimiento...</div>';

  const hace14 = new Date(); hace14.setDate(hace14.getDate() - 14);
  const fechaMin = hace14.toISOString().slice(0,10);

  let nutRes, psicoRes, ppRes;
  try {
    [nutRes, psicoRes, ppRes] = await Promise.all([
      DB.from('nutricion_log').select('*').eq('jugador_id', id).gte('fecha', fechaMin).order('fecha', {ascending:false}),
      DB.from('psico_diario').select('*').eq('jugador_id', id).gte('fecha', fechaMin).order('fecha', {ascending:false}),
      DB.from('psico_partido').select('*').eq('jugador_id', id).order('fecha', {ascending:false}).limit(5),
    ]);
  } catch(e) {
    nutRes = {data:[]}; psicoRes = {data:[]}; ppRes = {data:[]};
  }

  const nutLogs = nutRes.data || [];
  const psicoDiario = psicoRes.data || [];
  const psicoPartido = ppRes.data || [];

  const CARD = 'background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1rem;margin-bottom:.875rem;';
  const EMOJIS = ['','😞','😐','🙂','😊','🔥'];

  // ── KPIs RESUMEN ──
  const avgMood = psicoDiario.length ? (psicoDiario.reduce((a,b)=>a+(b.mood||0),0)/psicoDiario.length).toFixed(1) : '—';
  const avgEnergia = psicoDiario.length ? Math.round(psicoDiario.reduce((a,b)=>a+(b.energia||0),0)/psicoDiario.length) : '—';
  const diasNut = nutLogs.length;

  let html = `
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:1rem;">
    <div style="background:rgba(163,113,247,0.08);border:0.5px solid rgba(163,113,247,0.2);border-radius:10px;padding:.75rem;text-align:center;">
      <div style="font-size:22px;font-weight:800;color:#a371f7;">${avgMood}</div>
      <div style="font-size:9px;color:var(--text2);margin-top:2px;">Mood 14d</div>
    </div>
    <div style="background:rgba(63,185,80,0.08);border:0.5px solid rgba(63,185,80,0.2);border-radius:10px;padding:.75rem;text-align:center;">
      <div style="font-size:22px;font-weight:800;color:#3fb950;">${avgEnergia}</div>
      <div style="font-size:9px;color:var(--text2);margin-top:2px;">Energía media</div>
    </div>
    <div style="background:rgba(210,153,34,0.08);border:0.5px solid rgba(210,153,34,0.2);border-radius:10px;padding:.75rem;text-align:center;">
      <div style="font-size:22px;font-weight:800;color:#d29922;">${diasNut}</div>
      <div style="font-size:9px;color:var(--text2);margin-top:2px;">Días nutrición</div>
    </div>
  </div>`;

  // ── NUTRICIÓN ──
  html += `<div style="${CARD}">
    <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#d29922;margin-bottom:.875rem;">🥗 Nutrición — últimos 14 días</div>`;

  if(!nutLogs.length) {
    html += '<div style="font-size:12px;color:var(--text3);text-align:center;padding:1rem;">Sin registros de nutrición todavía.<br><span style="font-size:11px;">El jugador debe guardar días desde su app.</span></div>';
  } else {
    nutLogs.forEach(d => {
      const fecha = new Date(d.fecha+'T12:00:00').toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short'});
      const lineas = (d.texto||'').split('\n');
      const comidas = lineas.filter(l => l.length > 5 && !l.startsWith('---') && !l.startsWith('MACRO') && !l.startsWith('OBJETIVO') && !l.startsWith('TIPO'));
      const macroLinea = lineas.find(l => l.startsWith('MACROS:'));
      const tipoLinea = lineas.find(l => l.startsWith('TIPO_DIA:'));
      const tipo = tipoLinea ? tipoLinea.replace('TIPO_DIA:','').trim() : 'entreno';
      const tcc = {partido:{c:'#58a6ff',l:'⚽'},descanso:{c:'#484f58',l:'😴'},entreno:{c:'#3fb950',l:'💪'}};
      const tc = tcc[tipo] || tcc.entreno;

      html += `<div style="padding:.75rem 0;border-bottom:0.5px solid var(--border);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <b style="font-size:12px;">${fecha}</b>
          <span style="font-size:9px;padding:2px 8px;border-radius:99px;background:${tc.c}20;color:${tc.c};font-weight:700;">${tc.l} ${tipo}</span>
        </div>`;

      if(macroLinea) {
        const kcalM = macroLinea.match(/(\d+)kcal/);
        const protM = macroLinea.match(/Prot:\s*(\d+)/);
        const carbM = macroLinea.match(/Carb:\s*(\d+)/);
        const grasM = macroLinea.match(/Gras:\s*(\d+)/);
        const aguaM = macroLinea.match(/Agua:\s*(\d+)/);

        html += '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px;">';
        if(kcalM) html += `<span style="background:rgba(210,153,34,0.12);color:#d29922;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:600;">${kcalM[1]} kcal</span>`;
        if(protM) {
          const pct = j.peso ? Math.min(100, Math.round((parseInt(protM[1])/(j.peso*1.6))*100)) : 0;
          const col = pct>=80?'#a371f7':pct>=50?'#d29922':'#f85149';
          html += `<span style="background:${col}20;color:${col};padding:2px 8px;border-radius:99px;font-size:10px;">${pct>=80?'🟢':'🔴'} ${protM[1]}g prot</span>`;
        }
        if(carbM) html += `<span style="background:rgba(88,166,255,0.12);color:#58a6ff;padding:2px 8px;border-radius:99px;font-size:10px;">${carbM[1]}g carb</span>`;
        if(grasM) html += `<span style="background:rgba(248,81,73,0.1);color:#f85149;padding:2px 8px;border-radius:99px;font-size:10px;">${grasM[1]}g gras</span>`;
        if(aguaM) {
          const agua = parseInt(aguaM[1]);
          const colA = agua>=7?'#3fb950':agua>=5?'#d29922':'#f85149';
          html += `<span style="background:${colA}20;color:${colA};padding:2px 8px;border-radius:99px;font-size:10px;">${agua>=7?'🟢':'🔴'} ${agua} vasos</span>`;
        }
        html += '</div>';
      }

      if(comidas.length) {
        html += `<div style="font-size:11px;color:var(--text2);line-height:1.6;">${comidas.slice(0,3).join(' · ')}</div>`;
      }
      html += '</div>';
    });
  }
  html += '</div>';

  // ── BIENESTAR DIARIO ──
  html += `<div style="${CARD}">
    <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#a371f7;margin-bottom:.875rem;">🧠 Bienestar diario — últimos 14 días</div>`;

  if(!psicoDiario.length) {
    html += '<div style="font-size:12px;color:var(--text3);text-align:center;padding:1rem;">Sin registros de bienestar todavía.<br><span style="font-size:11px;">El jugador debe rellenar el check-in diario.</span></div>';
  } else {
    // Mini gráfica de barras mood últimos 7 días
    const ultimos7 = psicoDiario.slice(0,7).reverse();
    html += '<div style="display:flex;align-items:flex-end;gap:4px;height:60px;margin-bottom:12px;">';
    ultimos7.forEach(d => {
      const h = (d.mood||0)*12;
      const col = d.mood>=4?'#3fb950':d.mood>=3?'#d29922':'#f85149';
      const fecha = new Date(d.fecha+'T12:00:00').getDate();
      html += `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
        <div style="font-size:11px;">${EMOJIS[d.mood]||'?'}</div>
        <div style="width:100%;height:${h}px;background:${col};border-radius:4px 4px 0 0;min-height:4px;"></div>
        <div style="font-size:8px;color:var(--text3);">${fecha}</div>
      </div>`;
    });
    html += '</div>';

    // Listado detallado
    psicoDiario.slice(0,7).forEach(d => {
      const fecha = new Date(d.fecha+'T12:00:00').toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short'});
      const moodCol = d.mood>=4?'#3fb950':d.mood>=3?'#d29922':'#f85149';
      html += `<div style="padding:.625rem 0;border-bottom:0.5px solid var(--border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
          <span style="font-size:20px;">${EMOJIS[d.mood]||'—'}</span>
          <div style="flex:1;">
            <div style="font-size:12px;font-weight:600;">${fecha}</div>
            <div style="display:flex;gap:10px;font-size:10px;color:var(--text2);margin-top:1px;">
              <span>Energía: <b style="color:${d.energia>=7?'#3fb950':d.energia>=4?'#d29922':'#f85149'}">${d.energia||'—'}/10</b></span>
              <span>Estrés: <b style="color:${(d.estres||0)>=7?'#f85149':(d.estres||0)>=4?'#d29922':'#3fb950'}">${d.estres||'—'}/10</b></span>
            </div>
          </div>
        </div>
        ${d.mejor?`<div style="font-size:11px;color:var(--text2);padding-left:30px;">✓ ${d.mejor}</div>`:''}
        ${d.dificil?`<div style="font-size:11px;color:var(--text3);padding-left:30px;">△ ${d.dificil}</div>`:''}
      </div>`;
    });
  }
  html += '</div>';

  // ── VALORACIONES POST-PARTIDO ──
  if(psicoPartido.length) {
    html += `<div style="${CARD}">
      <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#58a6ff;margin-bottom:.875rem;">⚽ Valoraciones psicológicas post-partido</div>`;

    const PP_LABELS = {
      ansiedad:'Ansiedad',nervios:'Nervios',concentra:'Concentración',
      frustrac:'Frustración',enfado:'Enfado',miedo:'Miedo al error',
      personalidad:'Personalidad',confianza:'Confianza',
      rendimiento:'Bajo presión',presente:'Al presente'
    };

    psicoPartido.forEach(pp => {
      let stars = {};
      try { stars = JSON.parse(pp.estrellas||'{}'); } catch(e) {}
      const vals = Object.values(stars).filter(v=>v>0);
      const media = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : null;
      const fecha = new Date(pp.fecha+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short'});
      const nc = media>=4?'#3fb950':media>=3?'#d29922':'#f85149';

      html += `<div style="padding:.875rem 0;border-bottom:0.5px solid var(--border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          ${media?`<div style="width:36px;height:36px;border-radius:50%;background:${nc}15;color:${nc};border:1.5px solid ${nc}40;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;">${media}</div>`:''}
          <div>
            <div style="font-size:13px;font-weight:700;">${pp.partido||'Partido'}</div>
            <div style="font-size:10px;color:var(--text2);">${fecha}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px;">
          ${Object.keys(stars).filter(k=>stars[k]>0).map(k=>{
            const v=stars[k]; const pct=Math.round((v/5)*100);
            const col=v>=4?'#3fb950':v>=3?'#d29922':'#f85149';
            return `<div>
              <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3);margin-bottom:2px;">
                <span>${PP_LABELS[k]||k}</span><span style="color:${col};font-weight:600;">${v}/5</span>
              </div>
              <div style="height:4px;background:var(--border);border-radius:99px;overflow:hidden;">
                <div style="width:${pct}%;height:4px;background:${col};border-radius:99px;"></div>
              </div>
            </div>`;
          }).join('')}
        </div>
        ${pp.altero?`<div style="font-size:11px;color:var(--text2);margin-top:4px;"><b>Alteraciones:</b> ${pp.altero}</div>`:''}
        ${pp.mejorar?`<div style="font-size:11px;color:var(--text3);margin-top:3px;"><b>Mejora:</b> ${pp.mejorar}</div>`:''}
      </div>`;
    });
    html += '</div>';
  }

  if(!nutLogs.length && !psicoDiario.length && !psicoPartido.length) {
    html = '<div style="text-align:center;padding:3rem 1rem;color:var(--text3);"><div style="font-size:40px;margin-bottom:12px;">📊</div><div style="font-size:14px;font-weight:600;margin-bottom:6px;">Sin datos todavía</div><div style="font-size:12px;line-height:1.6;">El jugador debe rellenar la nutrición<br>y el bienestar diario desde su app.</div></div>';
  }

  body.innerHTML = html;
}


// ═══════════════════════════════════════════════════
// MÓDULO IA — ANÁLISIS DE PARTIDO Y PREGUNTAS DINÁMICAS
// ═══════════════════════════════════════════════════

// ─── 1. ANALIZAR PARTIDO CON IA ───
async function analizarConIA() {
  const jugId = document.getElementById('ia-jug')?.value || '';
  const pos = document.getElementById('ia-pos')?.value || '';
  const partido = document.getElementById('ia-partido')?.value.trim() || '';
  const notas = document.getElementById('ia-notas')?.value.trim() || '';

  if(!notas) { showToast('Escribe tus observaciones del partido primero'); return; }

  const jug = jugId ? state.jugadores.find(x => x.id === jugId) : null;
  const objs = jugId ? getObjJugador(jugId) : [];
  const micros = state.microconceptos.filter(m => !pos || m.posicion === (jug?.posicion || pos));
  const microsList = micros.map(m => m.titulo).join(', ');

  const resultEl = document.getElementById('ia-result');
  resultEl.innerHTML = `
    <div style="background:var(--bg2);border-radius:var(--radius);padding:2rem;text-align:center;border:0.5px solid var(--border);">
      <div style="font-size:28px;margin-bottom:10px;">🧠</div>
      <div style="font-size:13px;font-weight:600;margin-bottom:5px;">Analizando con tu metodología...</div>
      <div style="font-size:11px;color:var(--text3);">La IA está leyendo tus observaciones</div>
    </div>`;

  const prompt = `Eres Omar Cortés Ferrero, analista individual de fútbol base con metodología propia basada en microconceptos tácticos por posición.

DATOS DEL PARTIDO:
- Jugador: ${jug ? jug.nombre + ' (' + jug.posicion + ')' : 'Posición: ' + pos}
- Partido: ${partido || 'Sin especificar'}
- Objetivos actuales del jugador: ${objs.map(o => o.texto).join(', ') || 'No definidos'}
- Microconceptos disponibles en la biblioteca: ${microsList}

OBSERVACIONES DEL ANALISTA:
${notas}

Analiza estas observaciones y devuelve un JSON con esta estructura exacta:
{
  "resumen": "Resumen ejecutivo de 2-3 frases del partido",
  "mcb": "Análisis del momento con balón (2-3 frases concretas)",
  "msb": "Análisis del momento sin balón (2-3 frases concretas)",
  "tda": "Análisis de la transición defensiva→ataque (1-2 frases)",
  "tad": "Análisis de la transición ataque→defensa (1-2 frases)",
  "estrellasEstimadas": {"MCB": 3.5, "MSB": 3.0, "TDA": 2.5, "TAD": 3.0},
  "notaGlobal": 6.5,
  "microconceptosDetectados": ["micro1", "micro2", "micro3"],
  "fortalezas": ["fortaleza1", "fortaleza2"],
  "mejoras": ["mejora1", "mejora2"],
  "patronesDetectados": "Si hay patrones recurrentes menciónalos, sino di null",
  "preguntasParaSesion": ["¿Pregunta 1 adaptada al jugador?", "¿Pregunta 2?", "¿Pregunta 3?"]
}

IMPORTANTE: Devuelve SOLO el JSON, sin texto antes ni después. Los microconceptosDetectados deben ser de la biblioteca proporcionada.`;

  try {
    const response = await fetch('https://ghxwdauwrzupjmrujcns.supabase.co/functions/v1/smart-api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    // Si la API devuelve error, mostrarlo
    if(data.error) {
      resultEl.innerHTML = '<div style="color:#f85149;padding:1rem;background:rgba(248,81,73,0.08);border-radius:8px;">Error API: ' + JSON.stringify(data.error) + '</div>';
      return;
    }
    const text = data.content?.[0]?.text || '';
    if(!text) {
      resultEl.innerHTML = '<div style="color:#f85149;padding:1rem;background:rgba(248,81,73,0.08);border-radius:8px;">Sin respuesta. Respuesta completa: ' + JSON.stringify(data).slice(0,200) + '</div>';
      return;
    }
    let parsed;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      resultEl.innerHTML = '<div style="color:#f85149;padding:1rem;background:rgba(248,81,73,0.08);border-radius:8px;">Error JSON. Respuesta IA: ' + text.slice(0,300) + '</div>';
      return;
    }

    renderResultadoIA(parsed, jugId, jug, partido, pos);

  } catch(e) {
    resultEl.innerHTML = `<div style="color:#f85149;padding:1rem;background:rgba(248,81,73,0.08);border-radius:8px;">Error de conexión con la IA: ${e.message}</div>`;
  }
}

function renderResultadoIA(data, jugId, jug, partido, pos) {
  const resultEl = document.getElementById('ia-result');
  const nc = data.notaGlobal >= 7 ? '#3fb950' : data.notaGlobal >= 5 ? '#d29922' : '#f85149';
  const FASES = [
    {key:'MCB', label:'Con balón', color:'#3fb950', texto: data.mcb},
    {key:'MSB', label:'Sin balón', color:'#58a6ff', texto: data.msb},
    {key:'TDA', label:'Trans. Ofensiva', color:'#d29922', texto: data.tda},
    {key:'TAD', label:'Trans. Defensiva', color:'#f85149', texto: data.tad},
  ];

  const CARD = 'background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:.875rem;';

  let html = `
  <div style="background:linear-gradient(135deg,rgba(124,111,240,.1),rgba(29,158,117,.06));border:0.5px solid rgba(124,111,240,.25);border-radius:var(--radius);padding:1.25rem;margin-bottom:1rem;display:flex;align-items:center;gap:16px;">
    <div style="width:60px;height:60px;border-radius:50%;background:${nc}20;color:${nc};border:2px solid ${nc}50;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
      <span style="font-size:20px;font-weight:800;line-height:1;">${data.notaGlobal?.toFixed(1)}</span>
      <span style="font-size:9px;">/10</span>
    </div>
    <div style="flex:1;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(124,111,240,.8);margin-bottom:4px;">🤖 Análisis IA</div>
      <div style="font-size:13px;line-height:1.6;">${data.resumen}</div>
    </div>
  </div>`;

  // 4 fases
  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">`;
  FASES.forEach(f => {
    const avg = data.estrellasEstimadas?.[f.key] || 0;
    const pct = Math.round((avg/5)*100);
    html += `<div style="background:${f.color}08;border:0.5px solid ${f.color}25;border-left:3px solid ${f.color};border-radius:0 8px 8px 0;padding:.875rem;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:10px;font-weight:700;text-transform:uppercase;color:${f.color};">${f.label}</span>
        ${avg ? `<span style="font-size:13px;font-weight:700;color:${f.color};">${avg}/5</span>` : ''}
      </div>
      ${avg ? `<div style="height:4px;background:rgba(0,0,0,.1);border-radius:99px;margin-bottom:8px;"><div style="width:${pct}%;height:4px;background:${f.color};border-radius:99px;"></div></div>` : ''}
      <div style="font-size:11px;line-height:1.6;color:var(--text2);">${f.texto || ''}</div>
    </div>`;
  });
  html += `</div>`;

  // Fortalezas y mejoras
  if(data.fortalezas?.length || data.mejoras?.length) {
    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">`;
    if(data.fortalezas?.length) {
      html += `<div style="${CARD}border-left:3px solid #3fb950;margin-bottom:0;">
        <div style="font-size:10px;font-weight:700;color:#3fb950;margin-bottom:8px;">✓ FORTALEZAS</div>
        ${data.fortalezas.map(f => `<div style="font-size:12px;line-height:1.6;padding:4px 0;border-bottom:0.5px solid var(--border);">• ${f}</div>`).join('')}
      </div>`;
    }
    if(data.mejoras?.length) {
      html += `<div style="${CARD}border-left:3px solid #f85149;margin-bottom:0;">
        <div style="font-size:10px;font-weight:700;color:#f85149;margin-bottom:8px;">△ A MEJORAR</div>
        ${data.mejoras.map(m => `<div style="font-size:12px;line-height:1.6;padding:4px 0;border-bottom:0.5px solid var(--border);">• ${m}</div>`).join('')}
      </div>`;
    }
    html += `</div>`;
  }

  // Microconceptos detectados
  if(data.microconceptosDetectados?.length) {
    html += `<div style="${CARD}">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--text3);margin-bottom:.75rem;">Microconceptos detectados</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        ${data.microconceptosDetectados.map(m => `<span style="font-size:11px;padding:3px 10px;border-radius:99px;background:#EEEDFE;color:#3C3489;">${m}</span>`).join('')}
      </div>
    </div>`;
  }

  // Patrones detectados
  if(data.patronesDetectados && data.patronesDetectados !== 'null') {
    html += `<div style="${CARD}background:rgba(210,153,34,0.06);border-color:rgba(210,153,34,0.3);border-left:3px solid #d29922;">
      <div style="font-size:10px;font-weight:700;color:#d29922;margin-bottom:6px;">📈 PATRÓN DETECTADO</div>
      <div style="font-size:12px;line-height:1.6;">${data.patronesDetectados}</div>
    </div>`;
  }

  // Preguntas para la sesión
  if(data.preguntasParaSesion?.length) {
    html += `<div style="${CARD}border-left:3px solid #7C6FF0;">
      <div style="font-size:10px;font-weight:700;color:#7C6FF0;margin-bottom:.75rem;">💬 PREGUNTAS PARA LA SESIÓN DE VÍDEO</div>
      ${data.preguntasParaSesion.map((p,i) => `<div style="background:var(--bg2);border-radius:6px;padding:8px 12px;margin-bottom:6px;border-left:3px solid #1D9E75;">
        <span style="font-size:10px;color:var(--text3);">Pregunta ${i+1}</span>
        <div style="font-size:12px;margin-top:2px;">${p}</div>
      </div>`).join('')}
    </div>`;
  }

  // Botón guardar informe
  if(jugId) {
    const dataStr = encodeURIComponent(JSON.stringify(data));
    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:.5rem;">
      <button onclick="guardarInformeDesdeIA('${jugId}','${encodeURIComponent(partido)}','${encodeURIComponent(pos)}')" class="btn" style="height:44px;">💾 Guardar como informe</button>
      <button onclick="copiarPreguntasIA()" class="btn-outline" style="height:44px;">📋 Copiar preguntas</button>
    </div>`;
    window._lastIAResult = data;
  }

  resultEl.innerHTML = html;
}

async function guardarInformeDesdeIA(jugId, partidoEnc, posEnc) {
  const data = window._lastIAResult;
  if(!data || !jugId) return;
  const partido = decodeURIComponent(partidoEnc);

  const stars = {
    MCB: new Array(7).fill(0).map((_,i) => i < Math.round(data.estrellasEstimadas?.MCB || 0) * 1.4 ? Math.round(data.estrellasEstimadas?.MCB || 0) : 0),
    MSB: new Array(7).fill(0).map((_,i) => i < Math.round(data.estrellasEstimadas?.MSB || 0) * 1.4 ? Math.round(data.estrellasEstimadas?.MSB || 0) : 0),
    TDA: new Array(5).fill(Math.round(data.estrellasEstimadas?.TDA || 0)),
    TAD: new Array(5).fill(Math.round(data.estrellasEstimadas?.TAD || 0)),
    OBJ: []
  };

  const infData = {
    jugador_id: jugId,
    partido: partido || 'Partido',
    fecha: new Date().toISOString().slice(0,10),
    nota_decimal: data.notaGlobal || null,
    estrellas_json: JSON.stringify(stars),
    mcb: data.mcb || '',
    msb: data.msb || '',
    tda: data.tda || '',
    tad: data.tad || '',
    microconceptos_obs: (data.microconceptosDetectados || []).join(', '),
    positivos: (data.fortalezas || []).join('\n'),
    mejoras: (data.mejoras || []).join('\n'),
    notas: 'Informe generado por IA a partir de observaciones del analista.',
  };

  const { data: saved, error } = await DB.from('informes_partido').insert(infData).select();
  if(error) { showToast('Error: ' + error.message); return; }
  state.informesPartido.unshift(saved[0]);
  showToast('✓ Informe guardado en el jugador');
  renderInicio();
}

function copiarPreguntasIA() {
  const data = window._lastIAResult;
  if(!data?.preguntasParaSesion) return;
  const texto = data.preguntasParaSesion.map((p,i) => `${i+1}. ${p}`).join('\n');
  navigator.clipboard.writeText(texto).then(() => showToast('✓ Preguntas copiadas al portapapeles'));
}

// ─── 2. PREGUNTAS DINÁMICAS EN SESIÓN DE VÍDEO ───
async function genSesConIA() {
  const jugId = document.getElementById('sesjug')?.value || '';
  const pos = document.getElementById('sespos')?.value || '';
  const fase = document.getElementById('sesfase')?.value || 'AMBAS';
  const partido = document.getElementById('sespartido')?.value.trim() || '';

  const jug = jugId ? state.jugadores.find(x => x.id === jugId) : null;
  const objs = jugId ? getObjJugador(jugId) : [];
  const informes = jugId ? getInformesJugador(jugId) : [];
  const ultimoInf = informes[0];

  // Construir contexto del jugador
  let contextoJugador = '';
  if(ultimoInf) {
    let starsData = {};
    try { starsData = ultimoInf.estrellas_json ? JSON.parse(ultimoInf.estrellas_json) : {}; } catch(e) {}
    function avgF(k) { const v=(starsData[k]||[]).filter(x=>x>0); return v.length?(v.reduce((a,b)=>a+b,0)/v.length).toFixed(1):null; }
    contextoJugador = `Último partido (${ultimoInf.partido}): MCB ${avgF('MCB')}/5, MSB ${avgF('MSB')}/5, TDA ${avgF('TDA')}/5, TAD ${avgF('TAD')}/5. Nota: ${ultimoInf.nota_decimal}/10.`;
    if(ultimoInf.mcb) contextoJugador += ` Con balón: ${ultimoInf.mcb.slice(0,100)}`;
    if(ultimoInf.msb) contextoJugador += ` Sin balón: ${ultimoInf.msb.slice(0,100)}`;
  }

  const resEl = document.getElementById('sesres');
  resEl.innerHTML = `<div style="padding:2rem;text-align:center;"><div style="font-size:28px;margin-bottom:10px;">🧠</div><div style="font-size:13px;">Generando preguntas personalizadas...</div></div>`;

  const prompt = `Eres Omar Cortés Ferrero, analista individual de fútbol base. Vas a preparar el guión de una sesión de vídeo con un jugador específico.

JUGADOR: ${jug ? jug.nombre : 'Jugador'} — ${jug?.posicion || pos}
PARTIDO A ANALIZAR: ${partido || 'Partido de esta semana'}
FASE A TRABAJAR: ${fase === 'AMBAS' ? 'Ofensiva y Defensiva' : fase}
OBJETIVOS DEL JUGADOR: ${objs.map(o => o.texto).join(', ') || 'No definidos aún'}
CONTEXTO DEL ÚLTIMO PARTIDO: ${contextoJugador || 'Sin datos previos'}

Genera un guión de sesión de vídeo completo y personalizado. Devuelve un JSON:
{
  "apertura": [
    {"pregunta": "texto", "hint": "para qué sirve esta pregunta"}
  ],
  "fasePrincipal": [
    {"pregunta": "texto", "hint": "contexto", "microconcepto": "concepto relacionado"}
  ],
  "objetivos": [
    {"objetivo": "texto del objetivo", "pregunta": "pregunta específica sobre este objetivo"}
  ],
  "cierre": ["pregunta de cierre 1", "pregunta de cierre 2", "pregunta de cierre 3"]
}

Las preguntas deben ser Socráticas — que el jugador descubra, no que el analista explique. Basadas en lo que pasó en este partido concreto. Máximo 3 preguntas por sección.`;

  try {
    const response = await fetch('https://ghxwdauwrzupjmrujcns.supabase.co/functions/v1/smart-api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeHdkYXV3cnp1cGptcnVqY25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODUxMDgsImV4cCI6MjA4OTM2MTEwOH0.2P4HGtD6hS6W8t4kzhnFxu8KH5S62ZooQHvDCwlfh8U' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    let parsed;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      resEl.innerHTML = `<div style="color:#f85149;padding:1rem;">Error al procesar respuesta. Inténtalo de nuevo.</div>`;
      return;
    }

    renderGuionIA(parsed, jug, partido, pos, fase);

  } catch(e) {
    resEl.innerHTML = `<div style="color:#f85149;padding:1rem;">Error: ${e.message}</div>`;
  }
}

function renderGuionIA(data, jug, partido, pos, fase) {
  const resEl = document.getElementById('sesres');
  const nombre = jug ? jug.nombre : 'Jugador';
  const posicion = jug?.posicion || pos;
  const CARD = 'background:var(--bg);border:0.5px solid var(--border);border-radius:var(--radius);padding:1.25rem;margin-bottom:.875rem;';

  let html = `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:8px;">
    <div>
      <div style="font-size:15px;font-weight:700;">Guión · ${nombre} · ${posicion}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:2px;">${partido} · Generado por IA · ${new Date().toLocaleDateString('es-ES')}</div>
    </div>
    <div style="display:flex;gap:6px;">
      <button onclick="window.print()" class="btn-outline" style="font-size:11px;height:32px;">🖨 Imprimir</button>
    </div>
  </div>`;

  // Apertura
  if(data.apertura?.length) {
    html += `<div style="${CARD}border-left:3px solid #7C6FF0;">
      <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#7C6FF0;margin-bottom:.875rem;">◎ Apertura</div>
      ${data.apertura.map((p,i) => `<div style="padding:.625rem 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:10px;color:var(--text3);margin-bottom:2px;">Pregunta ${i+1}</div>
        <div style="font-size:13px;font-weight:500;">${p.pregunta}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:3px;font-style:italic;">${p.hint}</div>
      </div>`).join('')}
    </div>`;
  }

  // Fase principal
  if(data.fasePrincipal?.length) {
    html += `<div style="${CARD}border-left:3px solid #1D9E75;">
      <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#1D9E75;margin-bottom:.875rem;">⚽ Análisis del partido</div>
      ${data.fasePrincipal.map((p,i) => `<div style="padding:.625rem 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:10px;color:var(--text3);margin-bottom:2px;">Pregunta ${i+1}</div>
        <div style="font-size:13px;font-weight:500;">${p.pregunta}</div>
        ${p.hint ? `<div style="font-size:11px;color:var(--text3);margin-top:3px;font-style:italic;">${p.hint}</div>` : ''}
        ${p.microconcepto ? `<span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#EEEDFE;color:#3C3489;display:inline-block;margin-top:5px;">${p.microconcepto}</span>` : ''}
      </div>`).join('')}
    </div>`;
  }

  // Objetivos del jugador
  if(data.objetivos?.length) {
    html += `<div style="${CARD}border-left:3px solid #d29922;">
      <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#d29922;margin-bottom:.875rem;">🎯 Sus objetivos en este partido</div>
      ${data.objetivos.map(o => `<div style="padding:.625rem 0;border-bottom:0.5px solid var(--border);">
        <div style="font-size:11px;color:var(--text3);margin-bottom:3px;">Objetivo: ${o.objetivo}</div>
        <div style="font-size:13px;font-weight:500;">${o.pregunta}</div>
      </div>`).join('')}
    </div>`;
  }

  // Cierre
  if(data.cierre?.length) {
    html += `<div style="${CARD}border-left:3px solid #3fb950;">
      <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#3fb950;margin-bottom:.875rem;">✓ Cierre</div>
      ${data.cierre.map((p,i) => `<div style="font-size:13px;padding:6px 0;border-bottom:0.5px solid var(--border);">${p}</div>`).join('')}
    </div>`;
  }

  resEl.innerHTML = html;
}

// ─── NAVEGACIÓN IA: integrado en renderPage ───

// ─── TAB ANÁLISIS SEMANAL (app analista) ───
async function renderAnalisisTab() {
  const id = state.currentJugador;
  const j = state.jugadores.find(x => x.id === id);
  if(!j) return;
  const body = document.getElementById('djbody');
  body.innerHTML = '<div style="padding:1rem;color:var(--text2);">Cargando...</div>';

  const { data: items } = await DB.from('analisis_semanal')
    .select('*').eq('jugador_id', j.id)
    .order('fecha', { ascending: false });

  const list = items || [];

  let html = `
    <div style="margin-bottom:1.25rem;">
      <div style="font-size:12px;font-weight:700;margin-bottom:.75rem;color:var(--text2);">Nuevo análisis para ${j.nombre}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <div>
          <div style="font-size:10px;color:var(--text3);margin-bottom:4px;">Título</div>
          <input id="anal-titulo" placeholder="Ej: Análisis jornada 12" style="width:100%;height:36px;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;color:var(--text);font-family:inherit;outline:none;">
        </div>
        <div>
          <div style="font-size:10px;color:var(--text3);margin-bottom:4px;">Fecha</div>
          <input id="anal-fecha" type="date" value="${new Date().toISOString().slice(0,10)}" style="width:100%;height:36px;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;color:var(--text);font-family:inherit;outline:none;">
        </div>
      </div>
      <div style="font-size:10px;color:var(--text3);margin-bottom:4px;">URL del vídeo de análisis (Google Drive, YouTube...)</div>
      <input id="anal-video" placeholder="https://drive.google.com/..." style="width:100%;height:36px;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:0 10px;font-size:12px;color:var(--text);font-family:inherit;outline:none;margin-bottom:10px;">
      <button onclick="guardarAnalisisSemanal('${j.id}')" class="btn" style="width:100%;height:38px;font-size:12px;">
        ✓ Subir análisis
      </button>
    </div>`;

  if(list.length) {
    html += '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:.75rem;">Análisis anteriores</div>';
    list.forEach(item => {
      const fecha = new Date((item.fecha||'')+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short',year:'numeric'});
      html += `<div style="background:var(--bg2);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:.75rem;margin-bottom:.5rem;display:flex;align-items:center;gap:10px;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:600;">${item.titulo||'Análisis semanal'}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:2px;">${fecha}</div>
        </div>
        ${item.video_url ? '<a href="'+item.video_url+'" target="_blank" style="font-size:10px;color:var(--blue);text-decoration:none;flex-shrink:0;">▶ Ver</a>' : ''}
        <button onclick="eliminarAnalisis('${item.id}')" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:16px;padding:0 4px;">×</button>
      </div>`;
    });
  } else {
    html += '<div style="text-align:center;padding:2rem;color:var(--text3);font-size:12px;">Sin análisis subidos todavía</div>';
  }

  body.innerHTML = html;
}

async function guardarAnalisisSemanal(jugId) {
  const titulo    = document.getElementById('anal-titulo')?.value.trim();
  const fecha     = document.getElementById('anal-fecha')?.value;
  const video_url = document.getElementById('anal-video')?.value.trim();

  if(!titulo) { showToast('Escribe un título'); return; }
  if(!video_url) { showToast('Añade la URL del vídeo'); return; }

  const { error } = await DB.from('analisis_semanal').insert({
    jugador_id: jugId, titulo, fecha, video_url
  });

  if(error) { showToast('Error al guardar'); console.error(error); return; }
  showToast('✓ Análisis subido');
  renderAnalisisTab();
}

async function eliminarAnalisis(id) {
  if(!confirm('¿Eliminar este análisis?')) return;
  await DB.from('analisis_semanal').delete().eq('id', id);
  renderAnalisisTab();
}
