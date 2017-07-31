/**
 * Created by alexshine on 29.07.2017.
 */
import questions from '../data/questions'
const state = {
    questions: []
};

const mutations = {
    'SET_QUEST' (state, questions) {
        state.questions = questions;
    }
};

const actions = {
    setQuest: ({commit}, order) => {
        commit('SET_QUESTION',  order);
    },
    initQuestions: ({commit}) => {
        commit('SET_QUEST', questions);
    }
};

const getters = {
    questions: state => {
        return state.questions;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
