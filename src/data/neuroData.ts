import {
  NeuroNode,
  NeuroEdge,
  Flashcard,
  TimelineMilestone,
  HominidStageItem,
  MacLeanBrainItem,
  SelectivePressureItem,
  DarwinPostulateItem
} from '../types';

/* =========================================================================
   1. NODOS DEL GRAFO INTERACTIVO DE CONOCIMIENTO (VIS.JS)
      Exclusivamente con toda la información del apunte de Desarrollo del SN
   ========================================================================= */
export const neuroNodes: NeuroNode[] = [
  // Raíz Principal
  {
    id: 1,
    label: "Desarrollo del SN",
    period: "Eje Principal de Estudio",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Estudio integral del desarrollo del Sistema Nervioso a través de dos grandes ejes: el Desarrollo Ontogenético (dentro de la misma especie) y el Desarrollo Filogenético (comparación y evolución entre especies). Nota esencial: Solo el reino Animalia tiene sistema nervioso; Plantae y Fungi tienen terminaciones sensoriales descentralizadas.",
    exam: "Dos ramas de estudio: Ontogenético (misma especie) y Filogenético (entre otras especies). Solo el reino Animalia tiene SN.",
    colorGroup: "#2b553c"
  },

  // Ejes principales y Nota de los Reinos
  {
    id: 2,
    label: "Desarrollo Ontogenético",
    period: "Dentro de la misma especie",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Consiste en comparar y estudiar el desarrollo del Sistema Nervioso dentro de la misma especie.",
    exam: "Definición exacta: Comparar y estudiar dentro de la misma especie.",
    colorGroup: "#205b76"
  },
  {
    id: 3,
    label: "Desarrollo Filogenético",
    period: "Con otras especies",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Consiste en estudiar y comparar el Sistema Nervioso con otras especies a lo largo de la evolución biológica.",
    exam: "Definición exacta: Estudiar y comparar el SN con otras especies.",
    colorGroup: "#2b553c"
  },
  {
    id: 4,
    label: "Reino Animalia vs. Plantae y Fungi",
    period: "Exclusividad del SN",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Regla biológica fundamental: Solo el reino Animalia tiene sistema nervioso; los reinos Plantae y Fungi tienen terminaciones sensoriales descentralizadas.",
    exam: "Tip clave: Solo el reino Animalia tiene sistema nervioso; Plantae y Fungi tienen terminaciones sensoriales descentralizadas.",
    colorGroup: "#944920"
  },
  {
    id: 5,
    label: "Concepto de Especie",
    period: "Aislamiento Reproductivo",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos. Los miembros de una especie no pueden generar descendencia fértil con los de otra especie.",
    exam: "Grupo aislado reproductivamente: sus miembros no pueden generar descendencia fértil con los de otra especie.",
    colorGroup: "#205b76"
  },
  {
    id: 6,
    label: "Origen de la Vida en el Agua",
    period: "Organismos Unicelulares",
    category: "Bases del Desarrollo",
    group: "bases",
    desc: "Se considera que la vida se originó en el agua en organismos unicelulares, punto de partida para la evolución filogenética.",
    exam: "Origen evolutivo: En el agua, en organismos unicelulares.",
    colorGroup: "#205b76"
  },

  // Organización Neuronal y Encefalización en el Desarrollo Filogenético
  {
    id: 7,
    label: "1. Ganglios sin Integrador Central",
    period: "Control Segmental Inicial",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "El desarrollo filogenético implica inicialmente la organización de las neuronas en grupos formando ganglios con control segmental, pero sin un integrador central.",
    exam: "Primera etapa organizativa: Neuronas en grupos inicialmente en ganglios con control segmental pero sin integrador central.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 8,
    label: "2. Agrupación Integradora Central",
    period: "Centralización Inicial",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "En el siguiente paso evolutivo del desarrollo filogenético se forma una agrupación integradora central.",
    exam: "Segunda etapa: Se forma una agrupación integradora central.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 9,
    label: "3. Estructuras Básicas del Cerebro",
    period: "Base Cerebral",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "A partir de la agrupación integradora central se desarrollan las estructuras básicas del cerebro.",
    exam: "Tercera etapa: Se desarrollan las estructuras básicas del cerebro.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 10,
    label: "4. Desarrollo del Prosencéfalo",
    period: "Adición Paulatina",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "Se agregan estructuras paulatinamente hasta desarrollar el prosencéfalo.",
    exam: "Cuarta etapa: Se agregan estructuras paulatinamente hasta desarrollar el prosencéfalo.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 11,
    label: "5. Áreas Terciarias (PTO y Prefrontales)",
    period: "Ganancia Humana (Prefrontal = 1/4)",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "La adquisición de las áreas terciarias es la ganancia en el ser humano, tanto la PTO [Parieto-Tempo-Occipital] como las prefrontales. Estas últimas (las prefrontales) abarcan 1/4 del total del cerebro.",
    exam: "Ganancia en el ser humano: Adquisición de áreas terciarias PTO (Parieto-Tempo-Occipital) y prefrontales (abarcan 1/4 del total del cerebro).",
    colorGroup: "#944920"
  },
  {
    id: 12,
    label: "Encefalización",
    period: "Organismo Centralizado",
    category: "Organización Neuronal y Encefalización",
    group: "organizacion",
    desc: "Procesos de incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado.",
    exam: "Definición de Encefalización: Procesos de incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado.",
    colorGroup: "#2b553c"
  },

  // Escala Filogenética Animal (Bi-cordados -> Homínidos)
  {
    id: 13,
    label: "Animales Bi-cordados",
    period: "Doble Línea Nerviosa",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Existen animales bi-cordados con una doble línea nerviosa que evolucionaron en animales cordados con una única línea nerviosa.",
    exam: "Bi-cordados: Poseen una doble línea nerviosa y evolucionaron hacia animales cordados con una única línea nerviosa.",
    colorGroup: "#704812"
  },
  {
    id: 14,
    label: "Seres Cordados",
    period: "Única Línea y Médula Espinal",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Evolucionaron con una única línea nerviosa; se agrupan las neuronas a lo largo de la médula espinal y se denominan seres cordados.",
    exam: "Seres cordados: Única línea nerviosa donde se agrupan las neuronas a lo largo de la médula espinal.",
    colorGroup: "#704812"
  },
  {
    id: 15,
    label: "Vertebrados",
    period: "Esqueleto Protector",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Ahora hay un esqueleto que rodea y protege la médula espinal y se denominan: Vertebrados.",
    exam: "Vertebrados: Aparición de un esqueleto que rodea y protege la médula espinal.",
    colorGroup: "#704812"
  },
  {
    id: 16,
    label: "Peces Óseos",
    period: "Primeros Vertebrados",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Los primeros vertebrados son los peces óseos.",
    exam: "Primeros vertebrados en el agua: Los peces óseos.",
    colorGroup: "#205b76"
  },
  {
    id: 17,
    label: "Anfibios",
    period: "Al salir del agua",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Los primeros vertebrados son los peces óseos y al salir del agua se les denomina: Anfibio.",
    exam: "Transición acuático-terrestre: Al salir del agua se les denomina Anfibio.",
    colorGroup: "#205b76"
  },
  {
    id: 18,
    label: "Reptiles",
    period: "Independencia del agua",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Cuando se independizan del agua ahora son reptiles.",
    exam: "Cuando logran independizarse completamente del agua ahora son Reptiles.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 19,
    label: "Mamíferos",
    period: "Lactancia y Sistema Límbico Complejo",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Cuando dejan de poner huevos y las hembras empiezan a amamantar a sus crías se convierten en Mamíferos; además desarrollan un sistema límbico complejo.",
    exam: "Dejan de poner huevos, las hembras amamantan a sus crías y desarrollan un sistema límbico complejo.",
    colorGroup: "#944920"
  },
  {
    id: 20,
    label: "Orden Primates",
    period: "El tamaño no explica por sí solo",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Dentro de los mamíferos se encuentran los primates. En la evolución del cerebro en los primates, el tamaño del cerebro no explica por sí solo la evolución.",
    exam: "Orden dentro de los mamíferos. Regla clave: En primates, el tamaño del cerebro no explica por sí solo la evolución.",
    colorGroup: "#2b553c"
  },
  {
    id: 21,
    label: "Familia Homínidos",
    period: "Sin cola • Visión estereoscópica y tricrómica",
    category: "Escala Filogenética Animal",
    group: "filogenia",
    desc: "Nosotros somos una familia dentro de la orden de los primates: los homínidos. Características distintivas: Primates sin cola, y cuentan con visión estereoscópica y tricrómica.",
    exam: "Homínidos: Familia dentro de la orden primates. Son primates sin cola, con visión estereoscópica y tricrómica.",
    colorGroup: "#2b553c"
  },

  // Teoría de los 3 tipos de cerebros según MacLean
  {
    id: 22,
    label: "Teoría de los 3 Cerebros (MacLean)",
    period: "Modelo Triuno de MacLean",
    category: "Teoría de MacLean (3 Cerebros)",
    group: "maclean",
    desc: "Teoría de los 3 tipos de cerebros según MacLean que clasifica la evolución funcional cerebral en tres niveles: Reptiliano (Impulsivo), Paleo-Mamífero (Afectivo) y Neo-mamífero (Racional).",
    exam: "MacLean: 1) Reptiliano = Impulsivo, 2) Paleo-Mamífero = Afectivo, 3) Neo-mamífero = Racional.",
    colorGroup: "#944920"
  },
  {
    id: 23,
    label: "Cerebro Reptiliano",
    period: "Impulsivo",
    category: "Teoría de MacLean (3 Cerebros)",
    group: "maclean",
    desc: "Primer tipo de cerebro según la teoría de MacLean: Reptiliano, caracterizado por ser Impulsivo.",
    exam: "Según MacLean: Cerebro Reptiliano = Impulsivo.",
    colorGroup: "#944920"
  },
  {
    id: 24,
    label: "Cerebro Paleo-Mamífero",
    period: "Afectivo",
    category: "Teoría de MacLean (3 Cerebros)",
    group: "maclean",
    desc: "Segundo tipo de cerebro según la teoría de MacLean: Paleo-Mamífero, caracterizado por ser Afectivo (vinculado al desarrollo del sistema límbico complejo en mamíferos).",
    exam: "Según MacLean: Cerebro Paleo-Mamífero = Afectivo.",
    colorGroup: "#944920"
  },
  {
    id: 25,
    label: "Cerebro Neo-mamífero",
    period: "Racional",
    category: "Teoría de MacLean (3 Cerebros)",
    group: "maclean",
    desc: "Tercer tipo de cerebro según la teoría de MacLean: Neo-mamífero, caracterizado por ser Racional.",
    exam: "Según MacLean: Cerebro Neo-mamífero = Racional.",
    colorGroup: "#944920"
  },

  // Proceso de Hominización y Tamaños de Cerebros
  {
    id: 26,
    label: "Proceso de Hominización",
    period: "Desarrollo de características Homo",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "Sigue el mismo principio de selección natural: es el proceso mediante el cual se han desarrollado las características homo para llegar al ser actual. Va desde el Ancestro común pasando por Australopitecos, Homo habilis, Homo Erectus, Homo neanderthal hasta Homo sapiens.",
    exam: "Proceso mediante el cual se han desarrollado las características homo para llegar al ser actual, siguiendo el principio de selección natural.",
    colorGroup: "#704812"
  },
  {
    id: 27,
    label: "Ancestro Común → Australopitecos",
    period: "Cerebro: 400 cm²",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "Punto de partida desde el Ancestro común hacia Australopitecos, el cual presenta un cerebro de 400 cm².",
    exam: "Secuencia inicial: Ancestro común -> Australopitecos (cerebro 400 cm²).",
    colorGroup: "#704812"
  },
  {
    id: 28,
    label: "Homo habilis",
    period: "Cerebro: 600 - 700 cm²",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "Eslabón del género Homo posterior a los Australopitecos, con un tamaño de cerebro de 600-700 cm².",
    exam: "Homo habilis: cerebro de 600-700 cm².",
    colorGroup: "#704812"
  },
  {
    id: 29,
    label: "Homo Erectus",
    period: "Cerebro: 800 - 1000 cm²",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "Continuación evolutiva después de Homo habilis, alcanzando un cerebro de 800-1000 cm².",
    exam: "Homo Erectus: cerebro de 800-1000 cm².",
    colorGroup: "#704812"
  },
  {
    id: 30,
    label: "Homo neanderthal",
    period: "Cerebro: 1500 cm²",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "Sucesor en la línea de hominización después de Homo Erectus, con un cerebro de 1500 cm².",
    exam: "Homo neanderthal: cerebro de 1500 cm².",
    colorGroup: "#704812"
  },
  {
    id: 31,
    label: "Homo sapiens",
    period: "Cerebro: 1500 cm²",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "El ser humano actual al final de la secuencia de hominización, con un cerebro de 1500 cm² y adquisición de áreas terciarias (PTO y prefrontales que abarcan 1/4 del total del cerebro).",
    exam: "Homo sapiens: cerebro de 1500 cm² (igual medida numérica que neanderthal; la diferencia está en las conexiones y velocidad de procesamiento).",
    colorGroup: "#2b553c"
  },
  {
    id: 32,
    label: "Tamaños y Diferencias de Cerebros",
    period: "Conexiones y Velocidad de Procesamiento",
    category: "Proceso de Hominización",
    group: "hominizacion",
    desc: "El tamaño del cerebro no explica por sí solo la evolución ni diferencia la inteligencia. La diferencia la crean las conexiones y la velocidad de procesamiento.",
    exam: "Regla de oro: El tamaño del cerebro NO diferencia la inteligencia; la diferencia la crean las CONEXIONES y la VELOCIDAD DE PROCESAMIENTO.",
    colorGroup: "#944920"
  },

  // Presiones selectivas y Evolución de Darwin
  {
    id: 33,
    label: "5 Presiones Selectivas en Homínidos",
    period: "Factores Impulsores del SN",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "Las 5 presiones selectivas en la evolución del SN en Homínidos son: 1) Locomoción de manera bípeda eficiente y versátil, 2) Incorporación de la carne a la dieta, 3) Industria lítica, 4) Uso del fuego, y 5) Lenguaje.",
    exam: "Las 5 presiones: 1. Locomoción bípeda eficiente y versátil, 2. Incorporación de la carne a la dieta, 3. Industria lítica, 4. Uso del fuego, 5. Lenguaje.",
    colorGroup: "#2b553c"
  },
  {
    id: 34,
    label: "Bipedestación, Dieta Cárnica e Industria Lítica",
    period: "Presiones Selectivas 1, 2 y 3",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "Primeras tres presiones selectivas en homínidos: 1) Locomoción de manera bípeda eficiente y versátil; 2) Incorporación de la carne a la dieta; 3) Industria lítica (fabricación y uso de herramientas de piedra).",
    exam: "Presiones 1 a 3: Locomoción de manera bípeda eficiente y versátil + Incorporación de la carne a la dieta + Industria lítica.",
    colorGroup: "#8c5e3c"
  },
  {
    id: 35,
    label: "Uso del Fuego y Lenguaje",
    period: "Presiones Selectivas 4 y 5",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "Cuarta y quinta presiones selectivas en la evolución del SN en homínidos: 4) Uso del fuego y 5) Lenguaje.",
    exam: "Presiones 4 y 5: Uso del fuego y Lenguaje.",
    colorGroup: "#944920"
  },
  {
    id: 36,
    label: "El Origen de las Especies (Selección Natural)",
    period: "Características más adaptativas",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "Las características actuales han sido la selección de entre otras características por ser las más adaptativas. Este mecanismo fundamental es la Selección Natural.",
    exam: "Origen de las especies: Las características actuales fueron seleccionadas por ser las más adaptativas (Selección natural).",
    colorGroup: "#2b553c"
  },
  {
    id: 37,
    label: "Teoría de Darwin en el Desarrollo Filogenético",
    period: "Genética, Ambiente y Comportamiento",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "Integra 6 principios: 1) La evolución se ve afectada de manera genética; 2) Los genes de cada individuo existen por herencia; 3) El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente; 4) La capacidad del comportamiento presente depende de patrones de actividad nerviosa exclusivos (pensamientos, emociones, sentimientos); 5) El comportamiento presente surge de la interacción entre patrones de actividad nerviosa y su percepción; 6) El éxito del comportamiento presente influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras.",
    exam: "Cadena de Darwin en el SN: Genética y herencia -> Interacción SN con el ambiente -> Patrones de actividad nerviosa exclusivos (pensamientos, emociones, sentimientos) + Percepción -> Éxito del comportamiento presente -> Paso de genes a generaciones futuras.",
    colorGroup: "#205b76"
  },
  {
    id: 38,
    label: "Genética, Herencia e Interacción Ambiental",
    period: "Postulados 1, 2 y 3 de Darwin",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "1) La evolución se ve afectada de manera genética. 2) Los genes de cada individuo existen por herencia. 3) El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente.",
    exam: "Evolución afectada genéticamente; genes por herencia; desarrollo del SN depende de sus interacciones con el ambiente.",
    colorGroup: "#205b76"
  },
  {
    id: 39,
    label: "Patrones de Actividad Nerviosa y Percepción",
    period: "Postulados 4, 5 y 6 de Darwin",
    category: "Evolución, Darwin y Presiones Selectivas",
    group: "darwin",
    desc: "4) La capacidad del comportamiento presente de cada individuo depende de sus patrones de actividad nerviosa exclusivos, algunos de los cuales se experimentan como pensamientos, emociones, sentimientos, etc. 5) El comportamiento presente de cada individuo surge de la interacción entre los patrones de actividad nerviosa y su percepción. 6) El éxito del comportamiento presente de cada individuo influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras.",
    exam: "Patrones exclusivos (pensamientos, emociones, sentimientos) + percepción = comportamiento presente; su éxito define si los genes pasan a generaciones futuras.",
    colorGroup: "#205b76"
  }
];

/* =========================================================================
   2. CONEXIONES DEL GRAFO (ARISTAS / RELACIONES)
   ========================================================================= */
export const neuroEdges: NeuroEdge[] = [
  // Raíz -> Divisiones fundamentales y Nota de Reinos
  { from: 1, to: 2, label: "misma especie" },
  { from: 1, to: 3, label: "otras especies" },
  { from: 1, to: 4, label: "solo Animalia tiene SN" },

  // Filogenético -> Concepto de especie, Origen en el agua, Organización, Escala, MacLean, Darwin
  { from: 3, to: 5, label: "aislamiento reproductivo" },
  { from: 3, to: 6, label: "origen en el agua" },
  { from: 3, to: 7, label: "inicio organizativo" },
  { from: 3, to: 13, label: "evolución lineal" },
  { from: 3, to: 22, label: "3 tipos de cerebros" },
  { from: 3, to: 36, label: "selección natural" },
  { from: 3, to: 37, label: "evolución darwiniana" },

  // Progresión de la Organización Neuronal y Encefalización
  { from: 7, to: 8, label: "centralización" },
  { from: 8, to: 9, label: "estructuras básicas" },
  { from: 9, to: 10, label: "adición paulatina" },
  { from: 10, to: 11, label: "PTO y Prefrontal (1/4)" },
  { from: 10, to: 12, label: "organismo centralizado" },
  { from: 12, to: 11, label: "máxima ganancia humana" },

  // Escala Filogenética desde el Agua hasta Homínidos
  { from: 6, to: 13, label: "doble línea nerviosa" },
  { from: 13, to: 14, label: "única línea / médula" },
  { from: 14, to: 15, label: "esqueleto protector" },
  { from: 15, to: 16, label: "primeros vertebrados" },
  { from: 16, to: 17, label: "al salir del agua" },
  { from: 17, to: 18, label: "independizan del agua" },
  { from: 18, to: 19, label: "amamantan + límbico" },
  { from: 19, to: 20, label: "orden" },
  { from: 20, to: 21, label: "familia (sin cola)" },

  // Relaciones con la Teoría de los 3 Cerebros de MacLean
  { from: 22, to: 23, label: "impulsivo" },
  { from: 22, to: 24, label: "afectivo" },
  { from: 22, to: 25, label: "racional" },
  { from: 18, to: 23, label: "base reptiliana" },
  { from: 19, to: 24, label: "sistema límbico complejo" },
  { from: 11, to: 25, label: "corteza y áreas terciarias" },

  // De Homínidos y Origen de las Especies al Proceso de Hominización
  { from: 21, to: 26, label: "características homo" },
  { from: 36, to: 26, label: "sigue el mismo principio" },

  // Cadena del Proceso de Hominización (Volúmenes cerebrales)
  { from: 26, to: 27, label: "400 cm²" },
  { from: 27, to: 28, label: "600-700 cm²" },
  { from: 28, to: 29, label: "800-1000 cm²" },
  { from: 29, to: 30, label: "1500 cm²" },
  { from: 30, to: 31, label: "1500 cm² (actual)" },

  // Tamaños, diferencias y Presiones Selectivas
  { from: 20, to: 32, label: "tamaño no explica solo" },
  { from: 31, to: 32, label: "conexiones y velocidad" },
  { from: 31, to: 11, label: "áreas terciarias PTO/Prefrontal" },
  { from: 26, to: 33, label: "impulsado por" },
  { from: 33, to: 34, label: "bipedismo, carne, lítica" },
  { from: 33, to: 35, label: "fuego y lenguaje" },

  // Darwin y Evolución
  { from: 36, to: 37, label: "desarrollo filogenético" },
  { from: 37, to: 38, label: "genes, herencia y ambiente" },
  { from: 38, to: 39, label: "actividad nerviosa y éxito" }
];

/* =========================================================================
   3. TEORÍA DE LOS 3 TIPOS DE CEREBROS SEGÚN MACLEAN
   ========================================================================= */
export const macLeanBrainsList: MacLeanBrainItem[] = [
  {
    name: "1. Cerebro Reptiliano",
    trait: "Impulsivo",
    description: "Primer nivel evolutivo según la teoría de MacLean. Se caracteriza por ser eminentemente impulsivo, orientado a respuestas automáticas e inmediatas de supervivencia.",
    color: "#8c5e3c"
  },
  {
    name: "2. Cerebro Paleo-Mamífero",
    trait: "Afectivo",
    description: "Segundo nivel evolutivo según MacLean. Se caracteriza por ser afectivo; surge cuando los mamíferos dejan de poner huevos, las hembras amamantan a sus crías y desarrollan un sistema límbico complejo.",
    color: "#944920"
  },
  {
    name: "3. Cerebro Neo-mamífero",
    trait: "Racional",
    description: "Tercer nivel evolutivo según MacLean. Se caracteriza por ser racional, alcanzando su máxima expresión en el ser humano con la adquisición de las áreas terciarias: PTO [Parieto-Tempo-Occipital] y prefrontales (1/4 del total del cerebro).",
    color: "#2b553c"
  }
];

/* =========================================================================
   4. ETAPAS DEL PROCESO DE HOMINIZACIÓN (CON CAPACIDAD EN cm^2)
   ========================================================================= */
export const hominidStagesList: HominidStageItem[] = [
  {
    order: "1",
    code: "AC",
    name: "Ancestro Común",
    brainVolume: "Punto de partida",
    type: "Ancestro",
    summary: "Tronco común de los homínidos (primates sin cola con visión estereoscópica y tricrómica) a partir del cual inicia el proceso de hominización.",
    details: [
      "Pertenece a la orden de los primates y familia de los homínidos.",
      "Características base: Primates sin cola, con visión estereoscópica y tricrómica.",
      "El proceso de hominización sigue el mismo principio del origen de las especies (selección natural de las características más adaptativas)."
    ],
    examKey: "Punto de inicio de la cadena de hominización antes de Australopitecos."
  },
  {
    order: "2",
    code: "AU",
    name: "Australopitecos",
    brainVolume: "400 cm²",
    type: "Australopiteco",
    summary: "Primer eslabón posterior al ancestro común con un cerebro de 400 cm².",
    details: [
      "Tamaño cerebral registrado en apunte: 400 cm² (400cm^2).",
      "Inicia la transición bípeda dentro de las presiones selectivas de los homínidos.",
      "Antecede directamente a la aparición de Homo habilis."
    ],
    examKey: "Australopitecos: cerebro de 400 cm²."
  },
  {
    order: "3",
    code: "HH",
    name: "Homo habilis",
    brainVolume: "600 - 700 cm²",
    type: "Género Homo",
    summary: "Primer representante del género Homo en la secuencia con un cerebro de 600-700 cm².",
    details: [
      "Tamaño cerebral registrado en apunte: 600-700 cm² (600-700cm^2).",
      "Asociado al desarrollo de las primeras características Homo y presión selectiva de industria lítica.",
      "Sucesor de Australopitecos y antecesor de Homo Erectus."
    ],
    examKey: "Homo habilis: cerebro de 600-700 cm²."
  },
  {
    order: "4",
    code: "HE",
    name: "Homo Erectus",
    brainVolume: "800 - 1000 cm²",
    type: "Género Homo",
    summary: "Expansión encefalizadora intermedia con un cerebro de 800-1000 cm².",
    details: [
      "Tamaño cerebral registrado en apunte: 800-1000 cm² (800-1000cm^2).",
      "Destaca por la locomoción de manera bípeda eficiente y versátil, incorporación de la carne a la dieta y uso del fuego.",
      "Sucesor de Homo habilis y antecesor de Homo neanderthal."
    ],
    examKey: "Homo Erectus: cerebro de 800-1000 cm²."
  },
  {
    order: "5",
    code: "HN",
    name: "Homo neanderthal",
    brainVolume: "1500 cm²",
    type: "Género Homo",
    summary: "Alcanza un tamaño cerebral de 1500 cm², idéntico en magnitud numérica al Homo sapiens.",
    details: [
      "Tamaño cerebral registrado en apunte: 1500 cm² (1500^2).",
      "Comparte la cifra de 1500 cm² con el Homo sapiens.",
      "Demuestra que el tamaño del cerebro no explica por sí solo la evolución ni diferencia la inteligencia."
    ],
    examKey: "Homo neanderthal: cerebro de 1500 cm²."
  },
  {
    order: "6",
    code: "HS",
    name: "Homo sapiens",
    brainVolume: "1500 cm²",
    type: "Género Homo",
    summary: "Ser humano actual con cerebro de 1500 cm², diferenciado por sus conexiones, velocidad de procesamiento y áreas terciarias (PTO y prefrontales = 1/4).",
    details: [
      "Tamaño cerebral registrado en apunte: 1500 cm² (1500 cm^2).",
      "El tamaño del cerebro no diferencia la inteligencia; la diferencia la crean las conexiones y la velocidad de procesamiento.",
      "Ganancia evolutiva clave: La adquisición de las áreas terciarias, tanto la PTO [Parieto-Tempo-Occipital] como las prefrontales (estas últimas abarcan 1/4 del total del cerebro)."
    ],
    examKey: "Homo sapiens: cerebro 1500 cm²; destaca por conexiones, velocidad de procesamiento y áreas terciarias PTO + Prefrontales (1/4 del cerebro)."
  }
];

/* =========================================================================
   5. PRESIONES SELECTIVAS Y POSTULADOS DE DARWIN
   ========================================================================= */
export const selectivePressuresList: SelectivePressureItem[] = [
  {
    number: 1,
    title: "Locomoción de manera bípeda eficiente y versátil",
    detail: "Liberación de las extremidades superiores y reorganización postural y motora en los homínidos."
  },
  {
    number: 2,
    title: "Incorporación de la carne a la dieta",
    detail: "Aporte energético y nutricional clave ('incorporación de la caene a la dieta') para sostener el costo metabólico de la encefalización."
  },
  {
    number: 3,
    title: "Industria lítica",
    detail: "Diseño, talla y utilización de herramientas de piedra que exigió mayor coordinación motora fina y planificación."
  },
  {
    number: 4,
    title: "Uso del fuego",
    detail: "Transformación de los alimentos, protección y socialización alrededor del control térmico y lumínico."
  },
  {
    number: 5,
    title: "Lenguaje",
    detail: "Comunicación simbólica compleja estrechamente vinculada con la adquisición de áreas terciarias (PTO y prefrontales) y las conexiones neuronales."
  }
];

export const darwinPostulatesList: DarwinPostulateItem[] = [
  {
    number: 1,
    statement: "La evolución se ve afectada de manera genética",
    explanation: "Los cambios evolutivos tienen una base genética sobre la cual opera la selección natural."
  },
  {
    number: 2,
    statement: "Los genes de cada individuo existen por herencia",
    explanation: "La dotación genética se transmite de generación en generación."
  },
  {
    number: 3,
    statement: "El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente",
    explanation: "La genética interactúa con el entorno para moldear la estructura y organización del Sistema Nervioso de cada individuo."
  },
  {
    number: 4,
    statement: "La capacidad del comportamiento presente de cada individuo depende de sus patrones de actividad nerviosa exclusivos, algunos de los cuales se experimentan como pensamientos, emociones, sentimientos, etc.",
    explanation: "Los pensamientos, emociones y sentimientos son vivencias subjetivas de los patrones de actividad nerviosa exclusivos de cada individuo."
  },
  {
    number: 5,
    statement: "El comportamiento presente de cada individuo surge de la interacción entre los patrones de actividad nerviosa y su percepción",
    explanation: "La conducta actual emerge de cómo los patrones de actividad nerviosa exclusivos se integran con la percepción del entorno."
  },
  {
    number: 6,
    statement: "El éxito del comportamiento presente de cada individuo influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras",
    explanation: "Cierra el ciclo evolutivo: las conductas adaptativas favorecen la supervivencia y la reproducción fértil hacia las siguientes generaciones."
  }
];

/* =========================================================================
   6. LÍNEA DE TIEMPO / SECUENCIA FILOGENÉTICA Y DE HOMINIZACIÓN
   ========================================================================= */
export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 1,
    number: 1,
    year: "Ejes de Estudio y Reinos",
    location: "Desarrollo del SN",
    title: "Ontogenético vs. Filogenético y Exclusividad del Reino Animalia",
    badge: "Bases",
    description: "El Desarrollo del SN se estudia en dos niveles: Ontogenético (comparar y estudiar dentro de la misma especie) y Filogenético (estudiar y comparar el SN con otras especies). Especie es un grupo de organismos aislado reproductivamente cuyos miembros no pueden generar descendencia fértil con los de otra especie.",
    examNote: "Solo el reino Animalia tiene sistema nervioso; Plantae y Fungi tienen terminaciones sensoriales descentralizadas.",
    category: "origen",
    highlightColor: "#2b553c"
  },
  {
    id: 2,
    number: 2,
    year: "Origen Acuático",
    location: "Organismos Unicelulares a Ganglios",
    title: "Origen de la Vida en el Agua y Organización Ganglionar Segmental",
    badge: "Origen Filogenético",
    description: "Se considera que la vida se originó en el agua en organismos unicelulares. El desarrollo filogenético implica inicialmente la organización de las neuronas en grupos en ganglios con control segmental, pero sin un integrador central.",
    examNote: "Inicio: Vida en el agua en organismos unicelulares -> Neuronas en ganglios con control segmental pero sin integrador central.",
    category: "origen",
    highlightColor: "#205b76"
  },
  {
    id: 3,
    number: 3,
    year: "Encefalización Progresiva",
    location: "Integrador Central a Prosencéfalo",
    title: "De la Agrupación Integradora Central a las Áreas Terciarias (PTO y Prefrontales)",
    badge: "Encefalización",
    description: "Se forma una agrupación integradora central, se desarrollan las estructuras básicas del cerebro y se agregan estructuras paulatinamente hasta desarrollar el prosencéfalo (Encefalización: incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado). En el ser humano la ganancia es la adquisición de las áreas terciarias: PTO [Parieto-Tempo-Occipital] y prefrontales (que abarcan 1/4 del total del cerebro).",
    examNote: "Las áreas terciarias son la ganancia en el ser humano: PTO y prefrontales (estas últimas abarcan 1/4 del total del cerebro).",
    category: "origen",
    highlightColor: "#944920"
  },
  {
    id: 4,
    number: 4,
    year: "De Doble Línea a Esqueleto",
    location: "Bi-cordados → Cordados → Vertebrados",
    title: "Transición de Animales Bi-cordados a Seres Cordados y Vertebrados",
    badge: "Cordados y Vertebrados",
    description: "Existen animales bi-cordados con una doble línea nerviosa que evolucionaron en animales cordados con una única línea nerviosa. Cuando se agrupan las neuronas a lo largo de la médula espinal se denominan seres cordados. Cuando aparece un esqueleto que rodea y protege la médula espinal se denominan Vertebrados.",
    examNote: "Bi-cordados (doble línea nerviosa) -> Cordados (única línea nerviosa a lo largo de la médula espinal) -> Vertebrados (esqueleto que rodea y protege la médula espinal).",
    category: "filogenia",
    highlightColor: "#704812"
  },
  {
    id: 5,
    number: 5,
    year: "Del Agua a la Tierra",
    location: "Peces Óseos → Anfibios → Reptiles",
    title: "Primeros Vertebrados y Conquista del Medio Terrestre",
    badge: "Escala Vertebrada",
    description: "Los primeros vertebrados son los peces óseos. Al salir del agua se les denomina Anfibio. Cuando se independizan completamente del agua ahora son Reptiles.",
    examNote: "Peces óseos (primeros vertebrados) -> Anfibios (al salir del agua) -> Reptiles (se independizan del agua).",
    category: "filogenia",
    highlightColor: "#8c5e3c"
  },
  {
    id: 6,
    number: 6,
    year: "Lactancia y Orden Primates",
    location: "Mamíferos → Primates → Homínidos",
    title: "Mamíferos (Sistema Límbico Complejo), Primates y Familia Homínidos",
    badge: "Mamíferos y Homínidos",
    description: "Cuando dejan de poner huevos y las hembras empiezan a amamantar a sus crías se convierten en Mamíferos, además desarrollan sistema límbico complejo. Dentro de ellos se encuentran los primates (donde el tamaño del cerebro no explica por sí solo la evolución) y nosotros somos una familia de dicha orden: los homínidos (primates sin cola, con visión estereoscópica y tricrómica).",
    examNote: "Mamíferos = dejan de poner huevos, amamantan y desarrollan sistema límbico complejo. Homínidos = familia sin cola, visión estereoscópica y tricrómica.",
    category: "filogenia",
    highlightColor: "#2b553c"
  },
  {
    id: 7,
    number: 7,
    year: "Paul MacLean",
    location: "Teoría Triuna",
    title: "Teoría de los 3 Tipos de Cerebros según MacLean",
    badge: "MacLean",
    description: "Sintetiza la adquisición evolutiva en tres tipos de cerebros: 1) Reptiliano: Impulsivo; 2) Paleo-Mamífero: Afectivo; y 3) Neo-mamífero: Racional.",
    examNote: "Reptiliano = Impulsivo | Paleo-Mamífero = Afectivo | Neo-mamífero = Racional.",
    category: "filogenia",
    highlightColor: "#944920"
  },
  {
    id: 8,
    number: 8,
    year: "400 cm² a 1500 cm²",
    location: "Secuencia Homo",
    title: "Proceso de Hominización y Evolución del Volumen Cerebral",
    badge: "Hominización",
    description: "Sigue el mismo principio de selección natural: es el proceso mediante el cual se han desarrollado las características homo para llegar al ser actual. Secuencia: Ancestro común -> Australopitecos (cerebro 400 cm²) -> Homo habilis (cerebro 600-700 cm²) -> Homo Erectus (cerebro 800-1000 cm²) -> Homo neanderthal (cerebro 1500 cm²) -> Homo sapiens (cerebro 1500 cm²).",
    examNote: "El tamaño del cerebro no diferencia la inteligencia; la diferencia la crean las conexiones y la velocidad de procesamiento.",
    category: "hominizacion",
    highlightColor: "#704812"
  },
  {
    id: 9,
    number: 9,
    year: "5 Factores Clave",
    location: "Evolución en Homínidos",
    title: "Presiones Selectivas en la Evolución del SN en Homínidos",
    badge: "Presiones Selectivas",
    description: "Factores determinantes que impulsaron la evolución del SN en los homínidos: 1) Locomoción de manera bípeda eficiente y versátil, 2) Incorporación de la carne a la dieta, 3) Industria lítica, 4) Uso del fuego, y 5) Lenguaje.",
    examNote: "5 presiones selectivas: Locomoción bípeda eficiente y versátil, Incorporación de la carne a la dieta, Industria lítica, Uso del fuego y Lenguaje.",
    category: "hominizacion",
    highlightColor: "#944920"
  },
  {
    id: 10,
    number: 10,
    year: "Charles Darwin",
    location: "Selección Natural y SN",
    title: "El Origen de las Especies y Teoría de la Evolución en el Desarrollo Filogenético",
    badge: "Darwin",
    description: "Las características actuales han sido la selección de entre otras características por ser las más adaptativas (Selección natural). En el desarrollo filogenético: 1) La evolución se ve afectada de manera genética; 2) Los genes existen por herencia; 3) El desarrollo del SN depende de sus interacciones con el ambiente; 4) La capacidad del comportamiento presente depende de patrones de actividad nerviosa exclusivos (pensamientos, emociones, sentimientos, etc.); 5) El comportamiento presente surge de la interacción entre patrones de actividad nerviosa y su percepción; 6) El éxito del comportamiento presente influye sobre si los genes pasan o no a generaciones futuras.",
    examNote: "El comportamiento presente surge de la interacción entre los patrones de actividad nerviosa y su percepción; su éxito influye en pasar los genes a generaciones futuras.",
    category: "darwin",
    highlightColor: "#205b76"
  }
];

/* =========================================================================
   7. TARJETAS DE REPASO (FLASHCARDS PARA EXAMEN - 100% FIELES AL APUNTE)
   ========================================================================= */
export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    year: "Desarrollo del SN",
    category: "Bases del Desarrollo",
    question: "¿Qué es el desarrollo Ontogenético y qué es el desarrollo Filogenético del Sistema Nervioso?",
    answer: "• Ontogenético: Comparar y estudiar el SN dentro de la misma especie.\n• Filogenético: Estudiar y comparar el SN con otras especies.",
    examNote: "Ontogenético = misma especie | Filogenético = comparar con otras especies."
  },
  {
    id: "fc-2",
    year: "Concepto Biológico",
    category: "Bases del Desarrollo",
    question: "¿Cómo se define 'Especie' en los apuntes de clase?",
    answer: "Es un grupo de organismos que está aislado (desde el punto de vista reproductivo) de otros organismos. Los miembros de una especie no pueden generar descendencia fértil con los de otra especie.",
    examNote: "Aislamiento reproductivo: no pueden generar descendencia fértil con miembros de otra especie."
  },
  {
    id: "fc-3",
    year: "Nota de Reinos",
    category: "Bases del Desarrollo",
    question: "¿Qué reino posee Sistema Nervioso y qué tienen los reinos Plantae y Fungi?",
    answer: "Solo el reino Animalia tiene sistema nervioso. Los reinos Plantae y Fungi tienen terminaciones sensoriales descentralizadas.",
    examNote: "Tip de clase: Solo el reino Animalia tiene SN; Plantae y Fungi tienen terminaciones sensoriales descentralizadas."
  },
  {
    id: "fc-4",
    year: "Origen de la Vida",
    category: "Bases del Desarrollo",
    question: "¿Dónde y en qué tipo de organismos se considera que se originó la vida?",
    answer: "Se considera que la vida se originó en el agua en organismos unicelulares.",
    examNote: "Origen de la vida: En el agua, en organismos unicelulares."
  },
  {
    id: "fc-5",
    year: "Organización Neuronal",
    category: "Organización y Encefalización",
    question: "¿Cuáles son las primeras etapas de organización de las neuronas en el desarrollo filogenético hasta llegar al prosencéfalo?",
    answer: "1. Organización de las neuronas en grupos inicialmente en ganglios con control segmental pero sin integrador central.\n2. Se forma una agrupación integradora central.\n3. Se desarrollan las estructuras básicas del cerebro.\n4. Se agregan estructuras paulatinamente hasta desarrollar el prosencéfalo.",
    examNote: "De ganglios segmentales sin integrador central -> agrupación integradora central -> estructuras básicas -> prosencéfalo."
  },
  {
    id: "fc-6",
    year: "Áreas Terciarias",
    category: "Organización y Encefalización",
    question: "¿Cuál es la ganancia evolutiva en el cerebro del ser humano y qué proporción abarca el área prefrontal?",
    answer: "La adquisición de las áreas terciarias es la ganancia en el ser humano, tanto la PTO [Parieto-Tempo-Occipital] como las prefrontales. Estas últimas (las prefrontales) abarcan 1/4 del total del cerebro.",
    examNote: "Ganancia humana = Áreas terciarias: PTO [Parieto-Tempo-Occipital] y Prefrontales (1/4 del total del cerebro)."
  },
  {
    id: "fc-7",
    year: "Concepto Clave",
    category: "Organización y Encefalización",
    question: "¿Qué es la Encefalización?",
    answer: "Son los procesos de incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado.",
    examNote: "Encefalización: incorporar nuevos sistemas y dar más peso al encéfalo como organismo centralizado."
  },
  {
    id: "fc-8",
    year: "Escala Filogenética",
    category: "Escala Filogenética",
    question: "¿Cuál es la diferencia entre animales bi-cordados, seres cordados y vertebrados?",
    answer: "• Bi-cordados: Tienen una doble línea nerviosa y evolucionaron en animales cordados.\n• Seres cordados: Tienen una única línea nerviosa donde se agrupan las neuronas a lo largo de la médula espinal.\n• Vertebrados: Tienen un esqueleto que rodea y protege la médula espinal.",
    examNote: "Bi-cordados (doble línea) -> Cordados (única línea en médula espinal) -> Vertebrados (esqueleto que rodea y protege la médula)."
  },
  {
    id: "fc-9",
    year: "Escala Filogenética",
    category: "Escala Filogenética",
    question: "¿Cómo evolucionan los primeros vertebrados desde el agua hasta convertirse en mamíferos?",
    answer: "1. Los primeros vertebrados son los peces óseos.\n2. Al salir del agua se les denomina: Anfibio.\n3. Cuando se independizan del agua ahora son: Reptiles.\n4. Cuando dejan de poner huevos y las hembras empiezan a amamantar a sus crías se convierten en: Mamíferos, además desarrollan sistema límbico complejo.",
    examNote: "Peces óseos -> Anfibios (salen del agua) -> Reptiles (se independizan del agua) -> Mamíferos (amamantan + sistema límbico complejo)."
  },
  {
    id: "fc-10",
    year: "Primates y Homínidos",
    category: "Escala Filogenética",
    question: "¿A qué orden y familia pertenecemos dentro de los mamíferos y cuáles son nuestras características distintivas?",
    answer: "Nos encontramos dentro de la orden de los Primates y somos una familia de dicha orden: los Homínidos. Nos caracterizamos por ser primates sin cola y poseer visión estereoscópica y tricrómica.",
    examNote: "Orden: Primates | Familia: Homínidos (primates sin cola, visión estereoscópica y tricrómica)."
  },
  {
    id: "fc-11",
    year: "Paul MacLean",
    category: "Teoría de MacLean",
    question: "¿Cuáles son los 3 tipos de cerebros según la teoría de MacLean y qué caracteriza a cada uno?",
    answer: "1. Reptiliano: Impulsivo.\n2. Paleo-Mamífero: Afectivo.\n3. Neo-mamífero: Racional.",
    examNote: "Reptiliano = Impulsivo | Paleo-Mamífero = Afectivo | Neo-mamífero = Racional."
  },
  {
    id: "fc-12",
    year: "Hominización",
    category: "Hominización",
    question: "¿Qué es el proceso de hominización y cuál es la secuencia completa con sus tamaños cerebrales?",
    answer: "Es el proceso (siguiendo la selección natural) mediante el cual se han desarrollado las características homo para llegar al ser actual:\nAncestro común -> Australopitecos (400 cm²) -> Homo habilis (600-700 cm²) -> Homo Erectus (800-1000 cm²) -> Homo neanderthal (1500 cm²) -> Homo sapiens (1500 cm²).",
    examNote: "Memorizar cifras exactas: Australopitecos 400cm² -> H. habilis 600-700cm² -> H. Erectus 800-1000cm² -> H. neanderthal 1500cm² -> H. sapiens 1500cm²."
  },
  {
    id: "fc-13",
    year: "Tamaños y Diferencias",
    category: "Hominización",
    question: "Si Homo neanderthal y Homo sapiens tienen un cerebro de 1500 cm², ¿el tamaño del cerebro explica la evolución o diferencia la inteligencia?",
    answer: "No. El tamaño del cerebro no explica por sí solo la evolución (en primates) ni diferencia la inteligencia. La diferencia la crean las conexiones y la velocidad de procesamiento.",
    examNote: "El tamaño NO diferencia la inteligencia; la diferencia la crean las conexiones y la velocidad de procesamiento."
  },
  {
    id: "fc-14",
    year: "5 Presiones Selectivas",
    category: "Hominización",
    question: "¿Cuáles son las 5 presiones selectivas en la evolución del Sistema Nervioso en Homínidos?",
    answer: "1. Locomoción de manera bípeda eficiente y versátil.\n2. Incorporación de la carne a la dieta.\n3. Industria lítica.\n4. Uso del fuego.\n5. Lenguaje.",
    examNote: "5 presiones: Bipedestación eficiente y versátil, Carne en la dieta, Industria lítica, Uso del fuego y Lenguaje."
  },
  {
    id: "fc-15",
    year: "Selección Natural",
    category: "Darwin y Evolución",
    question: "¿Qué plantea 'El origen de las especies' respecto a las características actuales?",
    answer: "Que las características actuales han sido la selección de entre otras características por ser las más adaptativas, mediante el proceso de Selección Natural.",
    examNote: "Seleccionadas por ser las más adaptativas = Selección natural."
  },
  {
    id: "fc-16",
    year: "Darwin (Parte 1)",
    category: "Darwin y Evolución",
    question: "Según la teoría de la evolución de Charles Darwin en el desarrollo filogenético, ¿de qué dependen la evolución, los genes y el desarrollo del SN de cada individuo?",
    answer: "• La evolución se ve afectada de manera genética.\n• Los genes de cada individuo existen por herencia.\n• El desarrollo del SN de cada individuo depende de sus interacciones con el ambiente.",
    examNote: "Genética + Herencia + Interacciones del SN con el ambiente."
  },
  {
    id: "fc-17",
    year: "Darwin (Parte 2)",
    category: "Darwin y Evolución",
    question: "Según Darwin en el desarrollo filogenético, ¿de qué depende el comportamiento presente y cómo influye su éxito en el futuro?",
    answer: "• La capacidad del comportamiento presente depende de sus patrones de actividad nerviosa exclusivos (algunos experimentados como pensamientos, emociones, sentimientos, etc.).\n• El comportamiento presente surge de la interacción entre los patrones de actividad nerviosa y su percepción.\n• El éxito del comportamiento presente influye sobre la posibilidad de que sus genes pasen o no a las generaciones futuras.",
    examNote: "Patrones de actividad nerviosa exclusivos (pensamientos, emociones, sentimientos) + percepción -> comportamiento presente -> éxito define el paso de genes."
  }
];
