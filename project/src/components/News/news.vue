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
axios.defaults.baseURL = '/root'
export default {
    components: {
        BaseNav,
        Basefooter,
        vueWaterfallEasy
    },
    data:function(){
        return{
            name : 1,
            imgsArr: [],
            group: 1,
            newSet:{
                position:'initial'
            },
            /* subList: ["Week", "Month"], */
        }
    },
    methods:{
        getData() {
            axios.get('./getNews').then(res => {
                this.imgsArr = res.data
            }).catch(function (error) {
                alert(error);
            })
        }
    },
    created() {
        this.getData()
    }

}
</script>
<style lang="css" scoped>
#news{
    height: inherit;
    background-image: url(/assets/img/bg.png);
}
a:hover{
    color: blueviolet;
}
.title{
    height: 5%;
    font-size: x-large;
    font-weight: 500;
    color: rgb(255, 255, 255);
    padding-left: 3rem;
}
.news-content{
    color: white;
    padding: 0.2rem;
    width: 100%;
    height: 95%;
}
p {
    color: white;
    text-decoration: none;
    background-color:rgba(255,255,255,0.3);
    border-radius:4px;
}
</style>