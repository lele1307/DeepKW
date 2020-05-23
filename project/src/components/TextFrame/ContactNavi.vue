<template>
    <div id="navigation">
        <div id="logo">
            <img id="logo_img" src="/assets/img/Contact/logo.jpg">
        </div>
        <div id ="navi">
            <p>Navigation</p>
            <ul>
                <li><router-link to="/Home">Home</router-link></li>
                <li><router-link to="/News">News</router-link></li>
                <li><router-link to="/Works">Works</router-link></li>
                <li>Contact Us</li>
                <li><router-link to="/About">About Us</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
var ContactNavi = {
    template:"#navigation",
    data:{
    },
    methods:{
    }
}
export default{
    ContactNavi
}
</script>
<style scoped>
#logo_img {
    position: absolute;
    top: 30px;
    left: 30px;

    height: 5%;
}

#navi {
    position: absolute;
    top: 300px;
    left: 30px;
    line-height: 150%;
}

</style>