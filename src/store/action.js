//执行
export const increment = ({ commit }) => commit('increment')

export const kk = ({ commit }) => {
	console.log("kkaction")
	commit('kk')
}