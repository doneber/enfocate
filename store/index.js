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
  }

}