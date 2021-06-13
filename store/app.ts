export const state = () => ({
  page: 'h',
})

export const mutations = {
  setPage(state: any, page: string) {
    state.page = page
  },
}
