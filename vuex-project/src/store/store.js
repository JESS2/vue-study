import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // counter라는 state 속성을 추가
    // state는 컴포넌트 간에 공유할 data 속성을 의미함
    state: {
        counter: 0
    },
    getters: {
        getCounter (state) {
            return state.counter
        }
    },
    // Vuex의 데이터, 즉 state 값을 변경하는 로직들을 의미함
    mutations: {
        addCounter (state) {
            state.counter++
        },
        // state를 조작하는데 필요한 특정 값을 넘김
        changeCounter (state, payload) {
            state.counter = payload.value
        }
    },
    // 상태를 변이시키는 대신 액션으로 변이에 대한 커밋
    // 액션은 비동기임
    actions: {
        addCounter ({commit}) {
            setTimeout(() => {
                commit('addCounter')
            }, 1000)
        },
        changeCounter ({commit}, payload) {
            setTimeout(() => {
                commit('changeCounter', payload)
            }, payload.duration)
        }
    }
})