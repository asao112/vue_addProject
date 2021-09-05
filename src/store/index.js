import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        form:'',
        radio:'',
        radio2:'',
        radio3:'',
        day:'1',
        year:'2000',
        month:'1',
        gender:'',
    },
    mutations:{
        setForm(state, val){
            state.form = val
        },
        setDay(state, val){
            state.day = val
        },
        setYear(state, val){
            state.year = val
        },
        setMonth(state, val){
            state.month = val
        },
        setRadio(state, val){
            state.radio = val
        },
        setRadio2(state, val){
            state.radio2 = val
        },
        setRadio3(state, val){
            state.radio3 = val
        },
        setGender(state, val){
            state.gender = val
        }
    },
    getters:{
        setForm:(state) => {
            return`${state.form}`
        },
        setDay:(state) => {
            return`${state.day}`
        },
        setYear:(state) => {
            return`${state.year}`
        },
        setMonth:(state) => {
            return`${state.month}`
        },
        setRadio:(state) => {
            return`${state.radio}`
        },
        setRadio2:(state) => {
            return`${state.radio2}`
        },
        setRadio3:(state) => {
            return`${state.radio3}`
        },
        setGender:(state) => {
            return`${state.gender}`
        }
    }
})
export default store