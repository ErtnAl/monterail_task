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
                    <div id="radios">
                        <input type="radio" id="rad-myshelf"><label for="rad-myshelf">My shelf</label>
                        <input type="radio" id="rad-questions"><label for="rad-questions">All questions</label>
                    </div>
                    <p class="sort">Sort by: <a>recent</a> or <a>hot</a></p>
                </div>
            </div>
            <div class="row search">
                <input type="text" placeholder="Search Questions" id="search-key" v-model="filter">
                <input type="submit" value="Search" id="search-button">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            filter: {
                get() {
                    return this.$store.getters.filter;
                },
                set(filter) {
                    this.$store.dispatch('updateFilter', filter);
                }
            }
        },
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
    #radios {
        display: inline-block;
        margin-right: 20px;
        label {
            padding-left: 10px;
            padding-right: 5px;
        }
    }
    .sort {
        display: inline-block;
    }
    a {
        cursor: pointer;
    }
    /* search-bar */
    .search{
        margin-top: 10px;
        margin-bottom: 15px;
        text-align: center;
        font-size: 20px;
    }
    #search-key {
        height: 40px;
        width: 730px;
        padding-left: 10px;
        display: inline-block;
    }
    #search-button {
        border:1px solid #555;
        width: 180px;
        height: 40px;
        background-color: #fff;
        text-transform: uppercase;
        display: inline-block;
        cursor: default;
    }
</style>