<template>
    <div id="header">
        <span class="glyphicon glyphicon-menu-left arrow" aria-hidden="true" @click="navigateToHome"></span>
        <div class="head">
            <div class="row">
                <div class="col">
                    <h1 id="title">Questions</h1>
                    <span class="glyphicon glyphicon-plus add" aria-hidden="true"></span>
                </div>
                <div class="col left-head">
                    <p class="sort">Last time discussed: 1 day ago</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({name: 'Home'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    $add-color: rgb(8, 103, 173);

    #header {
        width: 100%;
        border-bottom: 1px solid rgba(85, 85, 85, 0.11);
        background-size: cover;
        background-position: center;
        background-color: #fff;
        box-shadow: 0 2px 1px -2px rgba(85, 85, 85, 0.2);
    }
    .head {
        width: 910px;
        margin: 0 auto;
        height: 156px;
    }
    .arrow {
        font-size: 31px;
        padding: 4px 4px;
        border: 2px solid #555;
        border-radius: 50%;
        opacity: 0.5;
        display: inline-block;
        position: absolute;
        left: 7%;
        top: 5%;
        cursor: pointer;
    }
    .arrow:hover {
        opacity:1;
    }
    .add {
        font-size: 20px;
        padding: 4px 4px;
        border: 2px solid $add-color;
        background-color: $add-color;
        color: #fff;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 34%;
        top: 6%;
    }
    #title {
        position: absolute;
        display: inline-block;
        margin-left: 140px;
        font-size: 42px;
        float: left;
        text-transform: uppercase;
        top: 2.5%;
        left: 3%;
    }
    .left-head {
        float: right;
        margin-right: 30px;
        margin-top: 60px;
    }
    .sort {
        display: inline-block;
    }

</style>