export const state = () => ({
  allItems: {
    poo: {
      title: "Programación Orientada a Objetos",
      baseEndPoint: "/poo",
      description: "En este apartado encontrarás una serie de documentos y/o videos relacionados con la materia de Algoritmos y Programación",
      recommendations: ['Conocimientos de programación básica'],
      items: [
        {
          icon: "mdi-play",
          title: "POO",
          to: "/poo/intro"
        },
        {
          icon: "mdi-text-box-outline",
          title: "Abstracción",
          to: "/poo/abstraccion",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Clases",
          to: "/poo/clases"
        },
        {
          icon: "mdi-text-box-outline",
          title: "Sobrecarga | ejercicio",
          to: "/poo/sobrecarga",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Comp. y Agreg. | ejercicio",
          to: "/poo/agregacionycomposicion",
        },
        {
          icon: "mdi-text-box-outline",
          title: "Herencia",
          to: "/poo/herencia",
        },
        {
          icon: "mdi-play",
          title: "Persistencia",
          to: "/poo/persistencia"
        },
      ],
    },
    android: {
      title: "Programación en Android",
      baseEndPoint: "/android",
      description: "En este apartado encontrarás una serie de documentos y/o videos relacionados con la programación de aplicaciones android, usaremos tanto el editor Eclipse Android, como Android Studio",
      recommendations: ['Conocimientos de programación básica',
        'Nociones de programación orientada a objetos'],
      items: [
        { icon: "mdi-play", title: "Instalación", to: "/android/and01" },
        { icon: "", title: "Sumadora App", to: "/android/and02" },
        { icon: "", title: "Activities y bundles", to: "/android/and03" },
        { icon: "", title: "Persistencia", to: "/android/and04" },
      ],
    },
    eDatos: {
      title: "Estructura de Datos",
      baseEndPoint: "/eDatos",
      description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
      recommendations: ['Conocimientos de algoritmos básicos',
        'Nociones de Programación Orientada a Objetos'],
      items: [
        { icon: "mdi-text-box-outline", title: "Introduccion", to: "/eDatos/01", block: false },
        { icon: "mdi-text-box-outline", title: "Pilas", to: "/eDatos/02", block: false },
        { icon: "mdi-code-tags", title: "Pilas <code>", to: "/eDatos/03", block: false },
        { icon: "mdi-text-box-outline", title: "Colas", to: "/eDatos/04", block: false },
        { icon: "mdi-code-tags", title: "Colas <code>", to: "/eDatos/05", block: false },
        { icon: "mdi-text-box-outline", title: "Listas", to: "/eDatos/06", block: false },
        { icon: "mdi-code-tags", title: "Listas simples normal", to: "/eDatos/07", block: false },
        {
          icon: "mdi-code-tags",
          title: "Listas simples circular",
          to: "/eDatos/08",
          block: false
        },
        { icon: "mdi-code-tags", title: "Listas Dobles normal", to: "/eDatos/09", block: false },
        {
          icon: "mdi-code-tags", block: false,
          title: "Listas Dobles circular",
          to: "/eDatos/10",
          block: false
        },
        { icon: "mdi-text-box-outline", title: "Recursividad", to: "/eDatos/11", block: false },
        { icon: "mdi-text-box-outline", title: "Arboles", to: "/eDatos/12", block: false },
        { icon: "mdi-code-tags", title: "Arboles <code>", to: "/eDatos/13", block: false },
      ],
    },
    pEstructurada: {
      title: "Programacion Estructurada",
      baseEndPoint: "/pEstructurada",
      description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
      recommendations: ['Tener ganas', 'Ventajoso pero nada obligatorio; conocimientos de algebra'],
      items: [
        { icon: 'mdi-text-box-outline', title: 'Introducción', to: '/pEstructurada/01', block: false },
        { icon: 'mdi-text-box-outline', title: '¿Que es un algoritmo? | Algoritmos y caracteristicas', to: '/pEstructurada/02', block: false },
        { icon: 'mdi-text-box-outline', title: 'Variables, constantes y tipos de Datos', to: '/pEstructurada/03', block: false },
        { icon: 'mdi-text-box-outline', title: 'Datos de Entrada y Salida', to: '/pEstructurada/04', block: false },
        { icon: 'mdi-text-box-outline', title: 'Operaciones aritmeticos (+, -, *, /,  %)', to: '/pEstructurada/05', block: false },
        { icon: 'mdi-text-box-outline', title: 'Etapas de resolucion de problemas', to: '/pEstructurada/06', block: false },
        { icon: 'mdi-lock', title: 'Estructura If', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Operadores relacionales (mayor, menor igual, distinto)', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Operadores lógicos (&&, ||, !)', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Ejercicios con IF', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Estructura Switch', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Ejercicios con Switch', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Sentencia While', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Ejercicios con While', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Sentencia For', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Ejercicios con For', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Funciones y Procedimientos', to: '/pEstructurada/', block: true },
        { icon: 'mdi-lock', title: 'Strings', to: '/pEstructurada', block: true },
        { icon: 'mdi-lock', title: 'Arreglos', to: '/pEstructurada', block: true },
      ],
    },
    poo2: {
      title: "Programación Orientada a Objetos",
      baseEndPoint: "/poo2",
      description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
      recommendations: ['Conocimientos de programación básica'],
      items: [
        {
          icon: 'mdi-text-box-outline', title: 'Introduccion', block: false,
          items: [
            { icon: 'mdi-text-box-outline', title: 'Introducción', to: '/poo2/01-01' },
            { icon: 'mdi-play', title: 'Herramientas', to: '/poo2/01-02' },
          ]
        },
        { icon: 'mdi-text-box-outline', title: 'Que es POO', to: '/poo2/02', block: false },
        { icon: 'mdi-text-box-outline', title: 'Que es un OBJETO?', to: '/poo2/03', block: false },
        { icon: 'mdi-text-box-outline', title: 'Abstracción', to: '/poo2/04', block: false },
        { icon: 'mdi-text-box-outline', title: 'Clases', to: '/poo2/05', block: false },
        { icon: 'mdi-lock', title: 'Diagramas de clase UML', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Implementación de nuestras clases en código', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Constructores y Destructores', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'ENCAPSULACION, Getters y Setters', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Sobrecarga de Métodos', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Sobrecarga de Operadores', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Herencia simple', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Herencia multiple', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Agregación', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Composición', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Excepciones', to: '/poo2/', block: true },
        { icon: 'mdi-lock', title: 'Persistencia de Objetos', to: '/poo2/', block: true },
      ],
    },
    home: {
      title: "Sobre la página",
      description: "",
      recommendations: [],
      items: [{ icon: "mdi-information-outline", title: "Información", to: "/nosotros" }]
    },
  },
})