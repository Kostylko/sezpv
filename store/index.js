export const state = () => ({
    preventSroll: false
})

export const mutations = {
    setVisibility(state, payload) {
        state.preventSroll = payload
    }
}

export const getters = {
    getPreventSroll: state => {
        return state.preventSroll;
    },
}