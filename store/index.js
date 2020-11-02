export const state = () => ({
  courses: {},
  cardCourses: [],
  drawer: false
})
export const mutations = {
  fillCourses(state, courses) {
    state.courses = courses;
  },
  fillCardCourses(state, newCardCourses){
    state.cardCourses = newCardCourses
  },
  setDrawer(state, value){
    if(typeof value === "boolean")
      state.drawer = value
    else
      state.drawer = !state.drawer
  }
}
export const actions = {
  getCourses: async function ({ commit }) {
    const files = await require.context(`~/contents/`, true, /\.md$/);
    // let allCourses={...state.courses} 
    const allCourses = {}
    allCourses['home'] = {
      title: "Sobre la página",
      description: "",
      recommendations: [],
      items: [{ icon: "mdi-information-outline", title: "Información", baseEndPoint: "/nosotros" }]
    }
    files.keys().forEach(async key => {
      const fileItem = await import(`~/contents${key.substr(1)}`) // ${key} =~ './POO/01.md'
      const course = key.split('/')[1]
      if (!allCourses[course]) {
        allCourses[course] = {}
        allCourses[course]['items'] = []
      }

      const attrs = fileItem.attributes
      const lesson = key.split('/')[2]
      if (lesson === 'index.md') {
        allCourses[course]['title'] = attrs.title
        allCourses[course]['baseEndPoint'] = ('/' + course)
      } else {
        const ref = key.split('.')[1]
        allCourses[course]['items'].push({ title: attrs.title, baseEndPoint: ref, icon: attrs.icon, block: attrs.block }) // 
      }
    })
    commit('fillCourses', allCourses)
  },
  getCardCourses: async function ({ commit }) {
    const files = await require.context(`~/contents/`, true, /\index.md$/)
    const keys = files.keys()
    const allCardCourses = await Promise.all(keys.map(async key => await import(`~/contents${key.substr(1)}`)
                  .then(file => ({...file.attributes, baseEndPoint:key.split('/')[1] }))))
    
    allCardCourses.push(
                  {
                    baseEndPoint:'/', 
                    id:111, 
                    title:'Programación Modular',
                    shortDescription:'Aprende como modularizar tus probramas básicos para subir tu nivel de programador',
                    color:'lime darken-2',
                    disable: true,
                  },
                  {
                    baseEndPoint:'/', 
                    id:143, 
                    title:'Complejidad Algoritmica',
                    shortDescription:'Conoce la eficiencia y compleidad de tus algoritmos',
                    color:'orange',
                    disable: true,
                  },
                  {
                    baseEndPoint:'/', 
                    id:143, 
                    title:'Programación Dinamica',
                    shortDescription:'El pardigma que hace tu vida sea complicadamente MAS FÁCIL!',
                    color:'cyan darken-1',
                    disable: true,
                  },
                  {
                    baseEndPoint:'/', 
                    id:161, 
                    title:'Diseño de Base de Datos',
                    shortDescription:'Comienza a diseñar tus primeras bases de datos relacionales',
                    color:'teal',
                    disable: true,
                  },
                  {
                    baseEndPoint:'/', 
                    id:272, 
                    title:'Taller de Base de Datos',
                    shortDescription:'Pon a prueba tus conocimientos de base de datos y avanza al siguiente nivel',
                    color:'lime',
                    disable: true,
                  },
                  )
    allCardCourses.sort( (a,b)=> a.id > b.id? 1:-1 )
    commit('fillCardCourses',allCardCourses)
  }
}