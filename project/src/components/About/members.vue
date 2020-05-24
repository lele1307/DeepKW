<template>
    <div id="members">
        <div class="top-part">
            <div id="selector">
                <ul>
                    <li class="px-2" v-for="(item,index) in selectorName">
                        <button @click="setGroups(index)">{{item}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="main-part">
            <div class="mainSubPart" id="listOfMember">
                <ul>
                    <li class="px-2" v-for="(item) in filterMemberList">
                        <button @click="setSection(item.info)">{{item.name}}</button>
                    </li>
                </ul>
            </div>
            <div class="mainSubPart" id="MembersMap">
                <section>
                    {{details}}
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    template:'#members',
    data:function(){
        return{
            selectorName:[
                "Aritifical Intelligence",
                "Mathematical Modeling",
                "Computer Social Science",
                "Science Development",
                "Data Science",
                "Visual Design"
            ],
            members:[
                {name:"Amy",img:"./assets/img/About/alt.png",info:"aaaaa",group:"1"},
                {name:"Bob",img:"./assets/img/About/alt.png",info:"bbbbb",group:"2"}
            ],
            details:"defalt",
            group:-1
        }
    },
    computed: {
        filterMemberList: function () {
            var memberList = this.members;
            if(this.group==-1){
                return memberList
            }
            var index = this.group.toString()
            return memberList.filter(function (memberList) {
                return memberList.group.match(index)
            });
        }
    },
    methods:{
        setGroups(index){
            console.log(index)
            this.group = index
        },
        setSection(info){
            this.details = info
        }
    }
}
</script>

<style scoped>
#members{
    background-image: url(/assets/img/About/about_bg1.png);
    background-repeat:no-repeat;
    height: 100%;
}
.top-part{
    height: 20%;
    background-color: aqua;
    display: flex;
    justify-content:center;
    align-items:center;
}
#main-part {
    height: 80%;
    display: flex;
}
.mainSubPart {
    width: 50%;
    height: 100%;
}
#selector {
    height: 60%;
    background-color: #690;
    display: flex;
    justify-content:center;
    align-items:center;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
#selector ul {
    text-align: center;
    display: block;
}
#selector li {
    display: inline;
    line-height: inherit;
    color: aliceblue;
}
#listOfMember{
    background-color: burlywood;
}
#MembersMap{
    background-color: rebeccapurple;
}
</style>

