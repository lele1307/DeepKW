<template>
    <div id="header">
        <div id="logo">
            <!--test cite in HTML-->
            <img id="logo_img" src="/assets/img/logo.png" alt="logo">
        </div>
        <div></div>
    </div>
</template>
<style scoped>
#header{
    display:flex;
    background-color: black;
}
#logo{
    padding: 0.5rem 2rem;
}
#logo_img{
    height: 100%;
}
</style>
<script>
var header = {
    template:'#header',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    header
}
</script>