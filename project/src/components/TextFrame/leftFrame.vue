<template>
    <div id="LeftFrame">
        <p>Navigation</p>
        <ul>
        <li><router-link to="/Home">Home</router-link></li>
        <li><router-link to="/News">News</router-link></li>
        <li>Works
            <div id="listinlist">
            <ul>
                <li>papers</li>
                <li>products</li>
                <li>projects</li>
            </ul>
            </div>
        </li>
        <li><router-link to="/Contact">Contact Us</router-link></li>
        <li><router-link to="/About">About Us</router-link></li>
        </ul>
    </div>
</template>
<script>
var LeftFrame = {
    template:'#LeftFrame',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    LeftFrame
}
</script>
<style scoped>
#LeftFrame {
    background-color: black;
    height: 93%;
    width: 20%;
}
#listinlist {
    font-size: 15pt;
}
</style>