<template>
    <div id="groups">
        <div class="border-side"></div>
            <div class="sub-block">
                <div id="a2">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.3em;">Mathematical Modeling</span>
                </div>
                <div id="a4">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.5em;">Computer Social Science</span>
                </div>
                <div id="a6">
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
                <div id="a3">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.4em;">Science Development</span>
                </div>
                <div id="a5">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 1.5em;">Data Science</span>
                </div>
                <div id="a7">
                    <img src="/assets/img/About/about2.png" alt="centerAbout">
                    <span style="font-size: 2em;">Visual Design</span>
                </div>
            </div>
        <div class="border-side"></div>            
    </div>
</template>

<script>
export default {
    template:'#groups'
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
#a1 {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#a2 {
    width: 65%;
    position: absolute;
    top: 20%;
    left: 70%;
    transform: translate(-20%,-70%);
}
#a3 {
    width: 65%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-20%,-50%);
}
#a4 {
    width: 80%;
    position: absolute;
    top: 95%;
    left: 120%;
    transform: translate(-90%,-90%);
}
#a5 {
    width: 75%;
    position: absolute;
    top: 95%;
    left: 80%;
    transform: translate(-55%,-75%);
}
#a6 {
    width: 85%;
    position: absolute;
    top: 45%;
    left: 40%;
    transform: translate(-45%,-40%);
}
#a7 {
    width: 87%;
    position: absolute;
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
</style>

