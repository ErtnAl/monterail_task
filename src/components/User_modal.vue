<template>
        <modal :showModal="showModal" :closeAction="closeAction">
            <spans slot="header" class="header">
                <img :src="question.img">
                <p id="name">{{ question.name }}</p><br>
                <p class="info">Member for: {{ question.member }} months</p>
                <p class="info">Last seen: {{ question.seen }}</p>
                <p class="info" @click="activity">Acitivity: {{ activit }}</p>
            </spans>
            <span slot="body" class="body">
                <h1>How it all started</h1>
                <h3>That's where we have been these {{ question.member }} months</h3>
                <p class="user_infos">{{ question.peers }}<br>peers</p>
                <p class="user_infos">{{ question.discus }}<br>discussions</p>
                <p class="user_infos">{{ question.findings }}<br>findigns</p>
                <p class="user_infos">{{ question.count_que }}<br>questions</p>

                <h3>Who joined the platform that same period</h3>
            </span>
            <span slot="footer" class="footer">
                <p class="foot_head">Andrew found the guardian article</p>
                <br>
                <p class="article_title">Vegan diet to stop diabetes progress</p>
            </span>
        </modal>
</template>

<script>
    import Modal from 'modal-vue'
    export default {
        props: ['showModal', 'closeAction', 'question'],
        components: {Modal},
        data() {
            return {
                activit: '0lvl'
            }
        },
        methods: {
            activity() {
                if (question.activity === 1) {
                    return this.activit = '1lvl';
                } if (question.activity === 2) {
                    return this.activit = '2lvl';
                } else {
                    return this.activit = '3lvl';
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    $infos_color: rgb(229, 245, 252);
    $article_font_color: #0065b5;
    modal {

    }
    h3 {
        font-size: 15px;
        padding: 10px 10px;
    }
    .header {
        text-align: center;
        img {
            display: block;
            margin:0 auto;
        }
        #name {
            padding-top: 7px;
            display: block;
            font-size: 20px;
            margin:0 auto;
            color: $article_font_color;
        }
        .info {
            display: inline-block;
            margin-left: 30px;
        }
    }
    .body{
        text-align: center;
        .user_infos {
            display: inline-block;
            border: 1px solid $infos_color;
            padding: 6px 6px;
            background-color: $infos_color;
            text-align: center;
            margin-left: 55px;
            transform: rotate(10deg);
        }

    }
    .footer {
        background-color: #919191;
        text-align: center;
        .foot_head {
            text-transform: uppercase;
        }
        .article_title {
            color: $article_font_color;
        }
    }
</style>