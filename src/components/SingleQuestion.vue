<template>
    <div>
        <div class="back" id="single">
            <img :src="question.img" alt="userPhoto" @click="showModal=true">
            <div class="name_p"><p><h1 @click="showModal = true">{{ question.name }}</h1>  IS ASKING:</p></div>
            <UserModal :showModal="showModal" :closeAction="closeDialog" :question="question"></UserModal>
            <p><router-link id="asking" :to="'/question/' + question.id + '#single'">{{ question.ask }}</router-link></p>
            <div class="bottom">
                <div class="left_panel1"></div>
                <div class="right_panel1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="vote">
                        <span class="glyphicon glyphicon-menu-up voteu" @click="upvote++" aria-hidden="true"></span>
                        {{ upvote }} upvotes
                        <span class="glyphicon glyphicon-menu-down voteu" @click="upvote--" aria-hidden="true"></span>
                    </div>
                    <input type="submit" value="GIVE new answer" id="new-answer">
                </div>
            </div>
        </div>
        <div class="foot">
            <p id="answered">2 peers already answered {{ question.name }}</p>
        </div>
        <div class="answer">
            <img src="../assets/photo1.png"/>
            <div class="ans-mess">
                <p id="ans-name"><p class="name" style="color: #0064bd">Patricia</p> comment it  &#8226  yesterday</p>
                <p id="ans-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e</p>
            </div>
            <div class="vote">
                <span class="glyphicon glyphicon-menu-up voteu" @click="upvote1++" aria-hidden="true"></span>
                {{ upvote1 }} upvotes
                <span class="glyphicon glyphicon-menu-down voteu" @click="upvote1--" aria-hidden="true"></span>
            </div>
        </div>
        <div class="comment">
            <img src="../assets/photo3.png"/>
            <div class="ans-mess">
                <p id="ans-name"><p class="name" style="color: #0064bd">Joseph</p> comment it  &#8226  yesterday</p>
                <p id="ans-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit ,sed do eiusmod tempor </p>
            </div>
            <div class="vote">
                <span class="glyphicon glyphicon-menu-up voteu" @click="upvote2++" aria-hidden="true"></span>
                {{ upvote2 }} upvotes
                <span class="glyphicon glyphicon-menu-down voteu" @click="upvote2--" aria-hidden="true"></span>
            </div>
            <input type="submit" value="CONTINUE discussion" id="new-answer">
        </div>
        <br>
        <br>
        <br>
        <div class="answer">
            <img src="../assets/photo2.png"/>
            <div class="ans-mess">
                <p id="ans-name"><p class="name" style="color: #0064bd">Joseph</p> comment it  &#8226  yesterday</p>
                <p id="ans-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e</p>
            </div>
            <div class="vote">
                <span class="glyphicon glyphicon-menu-up voteu" @click="upvote3++" aria-hidden="true"></span>
                {{ upvote3 }} upvotes
                <span class="glyphicon glyphicon-menu-down voteu" @click="upvote3--" aria-hidden="true"></span>
            </div>
            <input type="submit" value="COMMENT" id="new-answer">
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import UserModal from './User_modal.vue'

    export default {
        data() {
            return {
                upvote: 10,
                upvote1: 9,
                upvote2: 1,
                upvote3: 6,
                showModal: false
            }
        },
        props: ['question'],
        components: {
            UserModal
        },
        methods: {
            closeDialog () {
                this.showModal = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment {
        margin-left: 100px;
        background-color: white;
        /*border: 1px solid #555;*/
        box-shadow: 2px 0 3px -2px rgba(85, 85, 85, 1);
        width: 810px;
        height: 100px;
        .ans-mess {
            display: inline-block;
            border-left: 1px solid #555;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 20px;
            .name {
                display: inline-block;
                font-size: 20px;
                color: #555;
            }
            #ans-message {

            }
        }
        .vote {
            display: inline-block;
            float: right;
            margin-top: 40px;
            margin-right: 10px;
            .voteu {
                color: #0967ad;
            }
        }
        img {
            width: 55px;
            height: 55px;
            margin-top: -45px;
            margin-left: 20px;
            margin-right: 20px;
            display: inline-block;
        }
        #new-answer {
            margin-left: 260px;
            margin-top: -30px;
            padding: 10px 50px;
            background-color: white;
            border: 1px solid #555;
        }
    }
    .answer {
        background-color: white;
        /*border: 1px solid #555;*/
        box-shadow: 2px 0 3px -2px rgba(85, 85, 85, 1);
        width: 910px;
        height: 100px;
        .ans-mess {
            display: inline-block;
            border-left: 1px solid #555;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 20px;
            .name {
                display: inline-block;
                font-size: 20px;
                color: #555;
            }
            #ans-message {

            }
        }
        .vote {
            display: inline-block;
            float: right;
            margin-top: 40px;
            margin-right: 10px;
            .voteu {
                color: #0967ad;
            }
        }
        img {
            width: 55px;
            height: 55px;
            margin-top: -45px;
            margin-left: 20px;
            margin-right: 20px;
            display: inline-block;
        }
        #new-answer {
            margin-left: 390px;
            margin-top: -30px;
            padding: 10px 50px;
            background-color: white;
            border: 1px solid #555;
        }
    }
    .bottom {
        margin-top: 30px;
        width:910px;
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
            width:806px;
            height: 176px;
            border-bottom: 1px solid rgba(85, 85, 85, 0.3);
            p {
                margin:10px 10px;
                display: inline-block;
                width:606px;
            }
            .vote {
                display: inline-block;
                margin-left: 50px;
                .voteu {
                    color: #0967ad;
                }
            }
            #new-answer {
                margin-left: 260px;
                margin-top: 30px;
                padding: 10px 50px;
                background-color: white;
                border: 1px solid #555;
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
        #answered {
            margin-left: 380px;
            margin-top: 60px;
        }
    }
    .back {
        background-color: #dff3fc;
        width:910px;
        height: 280px;
        border-bottom: 1px solid rgba(85, 85, 85, 0.3);
        box-shadow: 2px 0 3px -2px rgba(85, 85, 85, 1);
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