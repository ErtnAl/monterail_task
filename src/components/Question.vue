<template>
    <div class="ask">
        <div class="back">
            <img :src="question.img" alt="userPhoto" @click="showModal=true">
            <div class="name_p"><p><h1 @click="showModal = true">{{ question.name }}</h1>  IS ASKING:</p></div>
            <UserModal :showModal="showModal" :closeAction="closeDialog" :question="question"></UserModal>
            <p @click="setQuestion"><router-link id="asking" :to="'/question/' + question.id + '#single'">{{ question.ask }}</router-link></p>
            <div class="bottom">
                <div class="left_panel1"><p>asked</p></div>
                <div class="right_panel1">
                    <div class="left_panel_acti">3<br><br><br>more<br>activities</div>
                    <div class="left_panel"><img src="../assets/photo1.png"/><br><br><p>commented</p></div>
                    <div class="left_panel"><img src="../assets/photo2.png"/><br><br><p>commented</p></div>
                    <div class="left_panel"><img src="../assets/photo3.png"/><br><br><p>commented</p></div>
                    <div class="left_panel"><img src="../assets/photo1.png"/><br><br><p>answered</p></div>
                </div>
            </div>
        </div>
        <div class="right_panel">
            <div class="info_right_panel">
                <p>1 related discussion</p>
                <p>6 peers involved</p>
                <p>4 conversations</p>
            </div>
        </div>
        <div class="foot">
        </div>
    </div>
</template>

<script>
    import UserModal from './User_modal.vue'

    export default {
        data() {
            return {
                showModal: false
            }
        },
        props: ['question'],
        components: {
            UserModal
        },
        methods : {
            closeDialog () {
                this.showModal = false
            },
            setQuestion() {
                const order = {
                    questionId: this.question.id
                };
                console.log(order);
                this.$store.dispatch('setQuest', order);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bottom {
        p {
            border-top: 1px solid #555;
            padding-top: 5px;
        }
        margin-top: 30px;
        width:710px;
        height: 180px;
        .left_panel1 {
            display: inline-block;
            text-align: center;
            margin-top: 30px;
            margin-left: 30px;
            padding-top: 70px;
            padding-left: 20px;
            padding-right: 50px;
        }
        .right_panel1 {
            display: inline-block;
            background-color: #fbfbfb;
            padding-left: 6px;
            padding-right: 7px;
            .left_panel {
                background-color: #eeeeee;
                display: inline-block;
                text-align: center;
                height: 120px;
                width: 90px;
                margin-top: 0px;
                margin-left: 11px;
                margin-right: 11px;
                margin-bottom: 0px;
                img {
                    height: 45px;
                    width: 45px;
                    display: block;
                    left: 20px;
                    top: -15px;
                    cursor: default;
                }
            }
            .left_panel_acti {
                background-color: #fbfbfb;
                display: inline-block;
                text-align: center;
                margin-top: 70px;
                margin-left: 19px;
                margin-right: 20px;
                margin-bottom: 30px;
            }
        }
    }
    .name_p {
        position: relative;
        left:120px;
        margin-top: -70px;
        padding-bottom: 5px;
        h1 {
            cursor: pointer;
            display: inline-block;
            color: #0064bd;
        }
        p {
            display: inline-block;
        }
    }
    .right_panel {
        background-color: #fbfbfb;
        width: 200px;
        height: auto;
        float: right;
        .info_right_panel {
            margin-top: -140px;
            p {
                text-align: center;
                margin-bottom: 40px;
            }
        }
    }
    .ask {
        width:910px;
        height: 320px;
        margin-bottom: 20px;
        margin-top: 0;
    }
    .foot {
        background-color: #fbfbfb;
        height: 60px;
        bottom: 0;
    }
    .back {
        background-color: #dff3fc;
        width:710px;
        height: 280px;
        img {
            position: relative;
            cursor: pointer;
            width: 70px;
            height: auto;
            display: inline-block;
            left:20px;
            top:10px;
        }
        #asking {
            position: absolute;
            left: 24.5%;
            font-size: 22px;
            margin-top: -20px;
        }
    }
</style>