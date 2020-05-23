<template>
<div id="selecter">
    <img src="assets/img/Works/selectorRect.png" alt="Selector Rect">
    <span id="type1" style="color:white" v-bind:style="{'background-color':backtype1}">
        <span v-on:click="trans('backtype1', $event)">Inventions and Patents</span>
    </span>
    <span id="type2" style="color:white" v-bind:style="{'background-color':backtype2}">
        <span v-on:click="trans('backtype2', $event)">Academic Papers</span>
    </span>
    <span id="text1" style="color:white" v-bind:style="{'background-color':backtext1}">
        <span v-on:click="trans('backtext1', $event)">Artificial Intelligence</span>
    </span>
    <span id="text2" style="color:white" v-bind:style="{'background-color':backtext2}">
        <span v-on:click="trans('backtext2', $event)">Data Science</span>
    </span>
    <span id="text3" style="color:white" v-bind:style="{'background-color':backtext3}">
        <span v-on:click="trans('backtext3', $event)">Math Models</span>
    </span>
    <span id="text4" style="color:white" v-bind:style="{'background-color':backtext4}">
        <span v-on:click="trans('backtext4', $event)">Robots</span>
    </span>

</div>
</template>

<script>
export default {
    data: function() {
        return {
            backtype1:'rgba(255, 255, 255, 0)',
            back1: 'rgba(255, 255, 255, 0.6)',
            back2: 'rgba(255, 255, 255, 0)',
            backtype2: 'rgba(255, 255, 255, 0)',
            backtext1: 'rgba(255, 255, 255, 0)',
            backtext2: 'rgba(255, 255, 255, 0)',
            backtext3: 'rgba(255, 255, 255, 0)',
            backtext4: 'rgba(255, 255, 255, 0)'
        }
    },
    template:'#Selecter',
    methods: {
        trans: function(changeType, event){
            if (this[changeType] === this.back1){
                this[changeType] = this.back2;
            } else {
                this[changeType] = this.back1;
            }
        }
    },
    watch: {
        backtype1: function () {
            return {

            }
        }
    }
}
</script>

<style scoped>
#text1 {
    position:absolute;
    left: 5%;
    top: 60%;
}

#text2 {
    position:absolute;
    top: 60%;
    left: 15%;
}

#text3 {
    position:absolute;
    top:60%;
    left: 22%;
}

#text4 {
    position:absolute;
    top:60%;
    left: 29%;
}

#type1 {
    position:absolute;
    top: 40%;
    left: 5%;
}

#type2 {
    position:absolute;
    top: 40%;
    left: 18%;
}

</style>