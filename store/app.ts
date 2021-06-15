export const state = () => ({
  selectedPage: 'h',
})

export const mutations = {
  setPage(state: any, selectedPage: string) {
    console.log(selectedPage)
    state.selectedPage = selectedPage
  },
}
