<template>
    <div id="news">
        <div class="top-section">
            <BaseNav></BaseNav> <!-- :list="subList" -->
            <div class="main">
                <div class="title">
                    News
                </div>
                <div class="news-content">
                    <vue-waterfall-easy :imgsArr="imgsArr" :style="newSet" :maxCols="4">
                        <div class="img-info" slot-scope="props">
                            <p class="some-info">{{props.index+1}}</p>
                            <p class="some-info">{{props.value.info}}</p>
                        </div>
                    </vue-waterfall-easy>
                </div>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'
export default {
    components: {
        BaseNav,
        Basefooter,
        vueWaterfallEasy
    },
    data:function(){
        return{
            name : 1,
            imgsArr: [
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/2.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/2.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                },
                {
                    "src": "./assets/img/News/1.png",
                    "href": "https://www.baidu.com",
                    "info": "Some description"
                }
            ],
            group: 1,
            newSet:{
                position:'initial'
            },
            /* subList: ["Week", "Month"], */
        }
    },
    methods:{
        getData() {
            axios.get('./static/json/news.json?group=' + this.group) 
            .then(res => {
            this.imgsArr = this.imgsArr.concat(res.data)
            this.group++
            })
        }
    },
    /* created() {
        this.getData()
    } */
}
</script>
<style lang="css" scoped>
#news{
    height: inherit;
}
.title{
    height: 5%;
    font-size: x-large;
    font-weight: 500;
    color: #000;
    padding-left: 3rem;
}
.news-content{
    color: white;
    padding: 0.2rem;
    width: 100%;
    height: 95%;
}

</style>