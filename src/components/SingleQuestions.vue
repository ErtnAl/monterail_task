<template>
    <div>
        <appQuestion v-for="question in questions" :question="question"></appQuestion>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Question from './SingleQuestion.vue'
    export default {
        components: {
            appQuestion: Question
        },
        computed: {
            ...mapGetters({
                questions: 'questionSingle'
            })
        }

    }
</script>

<style lang="scss">

</style>