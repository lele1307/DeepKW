<template>
<div id="wholeNavi">
    <div id="dwLogo">
        <img id="logo_img" class="px-3" src="/assets/img/Contact/logo.jpg">
    </div> 
    <ul class="nav-left-container">
        <li v-for="(item,index) in fatherList" :key="index" @click="getIndex($event,item.name)">
            <router-link :to="item.router">{{item.name}}</router-link>
            <ul class="nav-left-container-small" :class="item.name">
                <li v-for="(item,i) in list" @click="getIndex($event,item.name)">
                    <router-link :to="item.router">{{item.name}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    template:'#BaseNav',
    props:['list'],
    data:function(){
        return{
            subClass:"",
            fatherList:[
                {router:"/home",name:"Home"},
                {router:"/news",name:"News"},
                {router:"/works",name:"Works"},
                {router:"/about/groups",name:"About"},
                {router:"/contact",name:"Contact"}
            ]
        }
    },
    methods:{
        getIndex(e,name){
            //console.log(name,e.target.nextElementSibling)
            if(e.target.nextElementSibling==null){
                return
            }
            if(e.target.nextElementSibling.style.display=="none"){
                e.target.nextElementSibling.style.display = "block"
            }else{
                e.target.nextElementSibling.style.display = "none"
            }
        }
    }
}
</script>

<style lang="css" scoped>
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,
h4,h5,h6,form,fieldset,legend,img,input {
    margin: 0;
    padding: 0;
}
fieldset,img,input,button {
    border: 0 none;
    padding: 0;
    margin: 0;
    outline-style: none;
}
/*去掉input等聚焦时的蓝色边框*/
ul,li,ol {
    list-style: none;
}
select,
input {
    vertical-align: middle;
}
textarea {
    resize: none;
}
/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}
a,
a:hover,
a:link,
a:active,
a:visited {
    text-decoration: none;
    color: black;
}
h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-size: 1em;
}
/*设置h标签的大小，设置跟父亲一样大的字体font-size:100%;*/
s,i,em {
    font-style: normal;
    text-decoration: none;
}
ul,li,div,h1,h2,h3,h4,h5,h6,ol,p {
    box-sizing: border-box;
}
#wholeNavi{
    height: 100%;
    width: 15%;
    background-color: white;
}
.nav-left-container {
    height: 90%;
}
#dwLogo{
    height: 10%;
    position: relative;
}
#logo_img{
    width: auto;
	height: auto;
	max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.nav-left-container li a {
    font-size: 1rem;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    padding: 15px 20px 15px 25px;
    display: block;
    color: #869fb1;
}
.nav-left-container .active {
    border-left: 4px solid #19a9d5;
}
.nav-left-container li:hover {
    background-color: #131e26;
}
.nav-left-container .active>a {
    color: #869fb1;
}
.nav-left-container-small li a {
    font-size: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}
.nav-left-container-small {
    display: none;
}
</style>>
