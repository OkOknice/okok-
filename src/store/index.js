import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        isAuthorization:'',
        user:{}
    },
    mutations:{
        SET_ISAUTHORIZATION (state,isAuthorization){
            if(isAuthorization) {
                state.isAuthorization = isAuthorization
            } else {
                state.isAuthorization = false
            }
        },
        SET_USER (state,user){
            state.user = user
        }
    },
    actions:{
        set_isAuthorzation ({commit},isAuthorzation){
            commit('SET_ISAUTHORIZATION',isAuthorzation)
        },
        set_user ({commit},user){
            commit('SET_USER',user)
        }
    }
})

export default store