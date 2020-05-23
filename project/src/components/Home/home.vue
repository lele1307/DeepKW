<template>
    <div id="home" class="d-flex flex-column">
        <Baseheader></Baseheader>
        <div id="mainHome" class="d-flex">
            <div class="px-5 flex-grow-1 d-flex justify-content-center align-items-center">
                <Basebanner></Basebanner>
            </div>
            <div id="title" class="p-2 d-flex justify-content-center align-items-center">
                <img src="/assets/img/title.png" alt="titile">
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import Baseheader from '../Common/Baseheader.vue'
import Basebanner from '../Common/Basebanner.vue'
import Basefooter from '../Common/Basefooter.vue'
export default {
    components: {
        Baseheader,
        Basebanner,
        Basefooter
    }
}
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
}
/*test cite in CSS*/
#home {
    background-image: url(/assets/img/bg.png);
    background-repeat:no-repeat;
    height: inherit;
}
#header{
    height: 7%;
}
#mainHome{
    height: 85%;
}
#footer{
    height: 8%;
}
#title{
    height: 100%;
}
#title_img{
    height: 100%;
}
#Basebanner {
    font-size: 3rem;
    color: white;
    margin: 0 auto;
    font-weight:bold ;
}
img{
    width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
}
</style>