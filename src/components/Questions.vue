<template>
    <div class="question">
        <appQuestion v-for="question in filteredList" :question="question" :key="question">{{ question }}</appQuestion>
        <button class="loadMore" @click="addmore">load more questions</button>
    </div>
</template>

<script>
    import Question from './Question.vue'
    export default {
        data() {
            return {
                loadMore: 3,
            }
        },
        components: {
            appQuestion: Question
        },
        computed: {
            questions() {
                return this.$store.getters.questions;
            },
            filteredList(){
                return this.questions.filter(function(element){
                    return (element.ask.search(new RegExp(this.filter, "i"))>=0)? true: false;
                },this);
            },
            filter() {
                return this.$store.getters.filter;
            }
        },
        methods: {
            addmore() {
                this.questions.push(
                    {id: 4,name: 'Eva', member: '5', seen: 'Saturday afternoon', activity: 2, peers: 46, discus: 29, findings: 19, count_que: 10, ask: 'Will insulin make my patient gain weight?', ans1: '', ans2: '', ans3: '', img: '../../src/assets/photo1.png'},
                    {id: 5,name: 'Andrew', member: '4', seen: 'Saturday afternoon', activity: 2, peers: 46, discus: 29, findings: 19, count_que: 10, ask: 'Vegan diet in diabetes treatment?', ans1: '', ans2: '', ans3: '', img: '../../src/assets/photo2.png'},
                    {id: 6,name: 'Joseph', member: '6', seen: 'Saturday afternoon', activity: 2, peers: 46, discus: 29, findings: 19, count_que: 10, ask: 'Vegan diet to stop diabetes progress', ans1: '', ans2: '', ans3: '', img: '../../src/assets/photo3.png'}
            );
                if (this.questions.length >= 6)
                    this.thereismore = false;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .question {
        box-shadow: 2px 0 3px -2px rgba(85, 85, 85, 0.66);
        width: 910px;
    }
    .loadMore {
        border:none;
        padding: 5px 20px;
        color: red;
        background-color: #fbfbfb;

    }
    #serach-key {
        position: absolute;
        z-index: 999;
        display: block;
        text-align: center;
    }
</style>