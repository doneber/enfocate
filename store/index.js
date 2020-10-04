export const state = () => ({
  allItems: {},
  cardCourses: [],
  drawer: false
})
export const mutations = {
  fillCourses(state, courses) {
    state.allItems = courses;
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
    // let allCourses={...state.allItems} 
    let allCourses = {}
    allCourses['home'] = {
      title: "Sobre la página",
      description: "",
      recommendations: [],
      items: [{ icon: "mdi-information-outline", title: "Información", to: "/nosotros" }]
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
        allCourses[course]['items'].push({ title: attrs.title, to: ref, icon: attrs.icon, block: attrs.block }) // 
      }
    })
    commit('fillCourses', allCourses)
  },
  getCardCourses: async function ({ commit }) {
    const files = await require.context(`~/contents/`, true, /\index.md$/)
    const keys = files.keys()
    const auxCards = await Promise.all(keys.map(async key => await import(`~/contents${key.substr(1)}`)
                  .then(file => ({...file.attributes, baseEndPoint:key.split('/')[1] }))))
    function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

    auxCards.sort( (a,b)=> a.id > b.id? 1:-1 )
    commit('fillCardCourses',auxCards)
  }
}