export default {
    // payload.pet, payload.species
    addPet: ({ commit }, payload) => {
        commit('appendPet', payload)
    }
}