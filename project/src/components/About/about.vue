<template>
    <div id="about">
        <div class="top-section">
            <BaseNav :list="subList"></BaseNav>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
import Groups from '../About/groups.vue'
export default {
    components: {
        BaseNav,
        Basefooter,
        Groups
    },
    data:function(){
        return{
            subList: [
                {router:"/about/groups",name:"Groups"},
                {router:"/about/members",name:"Members"},
            ],
        }
    }
}
</script>
<style scoped>
#about {
    height: inherit;
    overflow-y:hidden;
}
</style>