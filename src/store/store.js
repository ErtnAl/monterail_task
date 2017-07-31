/**
 * Created by alexshine on 29.07.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import questions from './questions'
import question from './question'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        questions,
        question
    }
});