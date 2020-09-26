export const state = () => ({
  allItems: {},
})
export const mutations = {
    fillCourses(state, courses) {
          state.allItems = courses;
    }
}
export const actions = {
   getCourses: async function ({ commit }) {
    const files = await require.context(`~/contents/`, true, /\.md$/);
    // let allCourses={...state.allItems} 
    let allCourses={
      poo: {
        title: "Programación Orientada a Objetos",
        baseEndPoint: "/poo",
        description: "En este apartado encontrarás una serie de documentos y/o videos relacionados con la materia de Algoritmos y Programación",
        recommendations: ['Conocimientos de programación básica'],
      },
      android: {
        title: "Programación en Android",
        baseEndPoint: "/android",
        description: "En este apartado encontrarás una serie de documentos y/o videos relacionados con la programación de aplicaciones android, usaremos tanto el editor Eclipse Android, como Android Studio",
        recommendations: ['Conocimientos de programación básica',
          'Nociones de programación orientada a objetos'],  
      },
      eDatos: {
        title: "Estructura de Datos",
        baseEndPoint: "/eDatos",
        description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
        recommendations: ['Conocimientos de algoritmos básicos',
          'Nociones de Programación Orientada a Objetos'],
      },
      pEstructurada: {
        title: "Programacion Estructurada",
        baseEndPoint: "/pEstructurada",
        description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
        recommendations: ['Tener ganas', 'Ventajoso pero nada obligatorio; conocimientos de algebra'],
      },
      poo2: {
        title: "Programación Orientada a Objetos",
        baseEndPoint: "/poo2",
        description: "Esta serie de documentos serán una introducción a la programación en general. Se abarcarán conceptos básicos",
        recommendations: ['Conocimientos de programación básica'],
      }
    }

    allCourses['home'] = {
      title: "Sobre la página",
      description: "",
      recommendations: [],
      items: [{ icon: "mdi-information-outline", title: "Información", to: "/nosotros" }]
    }
    files.keys().forEach( async key => {
        const fileItem = await import(`~/contents${key.substr(1)}`) // ${key} =~ './POO/01.md'
        const course = key.split('/')[1]
        if (!allCourses[course]) {
          allCourses[course] = {}
          allCourses[course]['items']=[]
          allCourses[course]['title'] = "Programación F"
          allCourses[course]['baseEndPoint'] = ('/'+course)
          allCourses[course]['description'] = "No descripción"
          allCourses[course]['recommendations'] = ['Lee la siguiente','Lee la anterior']
        }else{
          if(!allCourses[course]['items']){
            allCourses[course]['items']=[]
          }
        }
        // allCourses[course]['items'].push({...fileItem.attributes}) // 
        const ref = key.split('.')[1]
        const attrs = fileItem.attributes
        allCourses[course]['items'].push({title:attrs.title, to:ref, icon:attrs.icon, block: attrs.block}) // 
      })
      console.log('AllCourses',allCourses)
      commit('fillCourses', allCourses)
    }

}