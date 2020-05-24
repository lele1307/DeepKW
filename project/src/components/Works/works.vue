<template>
    <div id="works">
        <div class="top-section">
            <BaseNav :list="subList"></BaseNav>
            <div class="main">
                <Selector id="selector"></Selector>
                <div id="work_contencts" class="d-flex flex-row justify-content-around flex-wrap">
                    <ul id="list">
                        <li v-for="item in workItems">
                            <FloatingText :message=item.descri v-bind:title=item.title><!--""--></FloatingText>
                            <!--""-->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
import Selector from '../Works/Selecter.vue'
import FloatingText from '../TextFrame/FloatText.vue'

export default {
    data(){
        return{
            title1:"title1",
            data1: "datafromother",
            data2: "datafrofather",
            subList: ['Our Works', 'Other Works'],
            title2:"title2",
            title3:"title3",
            workItems:[
                {title: "title1", descri: "des1"}
            ]
        }
    },
    components: {
        BaseNav,
        Basefooter,
        Selector,
        FloatingText
    }
}
</script>
<style scoped>
#works {
    height:inherit;
    /*test comments in CSS*/
    background-image: url(/assets/img/bg.png);
}
.float {
    color: white;
}
#selector{
    position:absolute;
    top: 30px;
    left: 500px;
}

#work_contencts {
    position:absolute;
    top: 300px;
    left: 500px;
}
</style>