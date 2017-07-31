import Questions from './components/Questions.vue'
import Question from './components/SingleQuestions.vue'
import Header from './components/Header.vue'
import Headersingle from './components/Header-single.vue'

export const routes = [
    { path: '' , name: 'Home', components: {
        default: Questions,
        'header-questions': Header
    }},
    { path: '/question/:ask' ,components: {
        default: Question,
        'header-question': Headersingle
    }}
];
