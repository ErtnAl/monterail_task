/**
 * Created by alexshine on 29.07.2017.
 */
const state = {
    questions:[],
    filter: ''
};

const mutations = {
    'SET_QUESTION'(state, {questionId}) {
        const record = state.questions.find(element => element.id == questionId);
        if (record) {
            console.log('its there anywhere')
        } else {
            state.questions = [];
            state.questions.push({
                id: questionId
            });
        }
    },
    updateFilter: (state, payload) => {
        state.filter = payload;
    }
};

const actions = {
    updateFilter({commit}, payload) {
        commit('updateFilter', payload);
    }
};

const getters = {
    questionSingle (state, getters) {
        return state.questions.map(question => {
            const record = getters.questions.find(element => element.id === question.id);
            return {
                id: question.id,
                name: record.name,
                ask: record.ask,
                img: record.img
            }
        });
    },
    filter: state => {
        return state.filter;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
