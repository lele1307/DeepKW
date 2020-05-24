<template>
<div id="selecter">
    <img src="assets/img/Works/selectorRect.png" alt="Selector Rect">
    <span id="type1" style="color:white" v-bind:style="{'background-color':backtype1}">
        <span v-on:click="trans('backtype1', $event, 0)">Inventions and Patents</span>
    </span>
    <span id="type2" style="color:white" v-bind:style="{'background-color':backtype2}">
        <span v-on:click="trans('backtype2', $event, 1)">Academic Papers</span>
    </span>
    <span id="text1" style="color:white" v-bind:style="{'background-color':backtext1}">
        <span v-on:click="trans('backtext1', $event, 2)">Artificial Intelligence</span>
    </span>
    <span id="text2" style="color:white" v-bind:style="{'background-color':backtext2}">
        <span v-on:click="trans('backtext2', $event, 3)">Data Science</span>
    </span>
    <span id="text3" style="color:white" v-bind:style="{'background-color':backtext3}">
        <span v-on:click="trans('backtext3', $event, 4)">Math Models</span>
    </span>
    <span id="text4" style="color:white" v-bind:style="{'background-color':backtext4}">
        <span v-on:click="trans('backtext4', $event, 5)">Robots</span>
    </span>

</div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = '/root'

export default {
    data: function() {
        return {
            back1: 'rgba(255, 255, 255, 0.6)',
            back2: 'rgba(255, 255, 255, 0)',
            backtype1:'rgba(255, 255, 255, 0)',
            backtype2: 'rgba(255, 255, 255, 0)',
            backtext1: 'rgba(255, 255, 255, 0)',
            backtext2: 'rgba(255, 255, 255, 0)',
            backtext3: 'rgba(255, 255, 255, 0)',
            backtext4: 'rgba(255, 255, 255, 0)',
            seenFlags: [0, 0, 0, 0, 0, 0]
        }
    },
    template:'#Selecter',
    methods: {
        trans: function(changeType, event, index){
            if (this[changeType] === this.back1){
                this[changeType] = this.back2;
                this.seenFlags[index] = 0;
            } else {
                this[changeType] = this.back1;
                this.seenFlags[index] = 1;
            }
            //alert(index);
            //alert(this.seenFlags[index]);
            axios.get('/getWorks', {
                params: {
                    flags: this.seenFlags
                }
            }).then(function (response) {
                alert(response.data);
            }).catch(function (error){
                alert(error);
            });
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
    left: 100px;
    top: 60%;
}

#text2 {
    position:absolute;
    top: 60%;
    left: 270px;
}

#text3 {
    position:absolute;
    top: 60%;
    left: 390px;
}

#text4 {
    position:absolute;
    top:60%;
    left: 510px;
}

#type1 {
    position:absolute;
    top: 40%;
    left: 100px;
}

#type2 {
    position:absolute;
    top: 40%;
    left: 300px;
}

</style>