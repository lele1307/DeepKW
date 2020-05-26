<template>
    <div id="groups">
        <div class="border-side"></div>
            <div class="sub-block">
                <div class="group-name" id="a2" @click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.3em;">Mathematical Modeling</span>
                </div>
                <div class="group-name" id="a4" @click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.5em;">Computer Social Science</span>
                </div>
                <div class="group-name" id="a6"@click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 2em;">Aritifical Intelligence</span>
                </div>
            </div>
            <div class="block">
                <div id="a1">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 3.5em;">DeepKW</span>
                </div>
            </div>
            <div class="sub-block">
                <div class="group-name" id="a3" @click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.4em;">Science Development</span>
                </div>
                <div class="group-name" id="a5" @click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.5em;">Data Science</span>
                </div>
                <div class="group-name" id="a7" @click="getDetails($event)">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 2em;">Visual Design</span>
                </div>
            </div>
        <div class="border-side"></div> 
        <div id="windows" :style="windowstyle">
            <button style="float:right" class="btn btn-outline-info" @click="closeDetails">X</button>
            <section>{{currentDivContent}}</section>
        </div>           
    </div>
</template>

<script>
export default {
    template:'#groups',
    data(){
        return{
            windowstyle:"display:none",
            currentDivContent:"",
            details:[
                {
                    id:"a2",
                    content:"Mathematical Modeling Mathematical Modeling Mathematical Modeling"
                },
                {
                    id:"a3",
                    content:"Science Development Science Development Science Development"
                },
                {
                    id:"a4",
                    content:"Computer Social Science Computer Social Science Computer Social Science"
                },
                {
                    id:"a5",
                    content:"Data Science Data Science Data Science Data Science Data Science Data Science"
                },
                {
                    id:"a6",
                    content:"Aritifical Intelligence Aritifical Intelligence Aritifical Intelligence"
                },
                {
                    id:"a7",
                    content:"Visual Design Visual Design Visual Design Visual Design Visual Design"
                }
            ]
        }
    },
    methods:{
        getDetails(event){
            this.windowstyle = "display:block"
            var id  = event.currentTarget.id
            console.log(id)
            for(var i=0; i<this.details.length; i++) {
                if(this.details[i].id==id){
                    this.currentDivContent = this.details[i].content
                }
            }
        },
        closeDetails(){
            this.windowstyle = "display:none"
        }
    }
}
</script>

<style scoped>
#groups{
    background-image: url(/assets/img/About/about_bg1.png);
    background-repeat:no-repeat;
    height: 100%;
    display: flex;
}
.block{
    width: 33%;
    height: inherit;
    position: relative;
}
.sub-block{
    width: 25%;
    height: inherit;
    position: relative;
}
.border-side{
    width: 8.5%;
}
img {
    max-width: 100%;
    max-height: 100%;
}
.group-name{
    position: absolute;
}
#a1 {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#a2 {
    width: 65%;
    top: 20%;
    left: 70%;
    transform: translate(-20%,-70%);
}
#a3 {
    width: 65%;
    top: 20%;
    left: 50%;
    transform: translate(-20%,-50%);
}
#a4 {
    width: 80%;
    top: 95%;
    left: 120%;
    transform: translate(-90%,-90%);
}
#a5 {
    width: 75%;
    top: 95%;
    left: 80%;
    transform: translate(-55%,-75%);
}
#a6 {
    width: 85%;
    top: 45%;
    left: 40%;
    transform: translate(-45%,-40%);
}
#a7 {
    width: 87%;
    top: 65%;
    left: 65%;
    transform: translate(-95%,-65%);
}
span {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color:skyblue;
    font-size:medium;
}
#windows{
    position: fixed;
    z-index:1002; 
    height: 30%;
    width: 40%;
    top: 40%;
    left: 50%;
    transform: translate(-20%,-30%);
    background-image: url(/assets/img/About/alt.png);
    background-repeat: no-repeat;
    background-size:100% 100%;
    overflow:scroll;
}
section {
    margin: 1em 2em;
    color: white;
}
</style>

