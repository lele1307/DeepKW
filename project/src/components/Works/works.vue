<template>
    <div id="works">
        <div class="top-section">
            <BaseNav></BaseNav>
            <div class="main">
                <Selector @toparent="getFromChild"></Selector>
                <div id="work_contencts">
                    <FloatingText v-for="(item,index) in workItems" :key="index" :message=item.content v-bind:title=item.title></FloatingText>
                </div>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
import Selector from '../Works/Selector.vue'
import FloatingText from '../TextFrame/FloatText.vue'

export default {
    data(){
        return{
            title1:"title1",
            data1: "datafromother",
            data2: "datafrofather",
            title2:"title2",
            title3:"title3",
            workItems:[]
        }
    },
    components: {
        BaseNav,
        Basefooter,
        Selector,
        FloatingText
    },
    methods: {
        getFromChild: function (data) {
            //alert("in works");
            /*for(let i = 0; i < data.length; i++) {
                alert(data[i].title);
                alert(data[i].content);
            }*/
            //alert(this.workItems.length);
            var length = this.workItems.length;
            for(let i = 0; i < length; i++){
                this.workItems.pop();
            }
            //alert(this.workItems.length);
            for(let i = 0; i < data.length; i++) {
                var temObject = {
                    title: data[i].title,
                    content: data[i].content,
                }
                this.workItems.push(temObject);
            }
            //alert(this.workItems.length);
        }
    }
}
</script>
<style scoped>
#works {
    height:inherit;
    background-image: url(/assets/img/bg.png);
}
.main{
    display: flex;
    flex-direction: column;
}
#work_contencts {
    padding: 1em;
    overflow:scroll;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:wrap;
}
</style>