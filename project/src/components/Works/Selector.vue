<template>
<div id="Selecter" class="border">
    <div class="type">
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtype1}">
        <span v-on:click="trans('backtype1', $event, 0)">Inventions and Patents</span>
        </div>
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtype2}">
            <span v-on:click="trans('backtype2', $event, 1)">Academic Papers</span>
        </div>
    </div>
    <div class="text">
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtext1}">
            <span v-on:click="trans('backtext1', $event, 2)">Artificial Intelligence</span>
        </div>
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtext2}">
            <span v-on:click="trans('backtext2', $event, 3)">Data Science</span>
        </div>
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtext3}">
            <span v-on:click="trans('backtext3', $event, 4)">Math Models</span>
        </div>
        <div class="tagName" style="color:white" v-bind:style="{'background-color':backtext4}">
            <span v-on:click="trans('backtext4', $event, 5)">Robots</span>
        </div>
    </div>
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
            seenFlags: [0, 0, 0, 0, 0, 0],
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
            this.getALL();
            /*axios.get('/getWorks', {
                params: {
                    flags: this.seenFlags
                }
            }).then( (response) => {
                this.$emit('toparent', response.data);
            }).catch(function (error){
                alert(error);
            });*/
        },
        getALL: function(){
            axios.get('/getWorks', {
                params: {
                    flags: this.seenFlags
                }
            }).then( (response) => {
                this.$emit('toparent', response.data);
            }).catch(function (error) {
                alert(error);
            })
        }
    },
    watch: {
        backtype1: function () {
            return {
            }
        }
    },
    created: function() {
        this.getALL();
    }
}
</script>

<style scoped>
.tagName{
    display: inline;
    padding: 0 0.5em;
}
#Selecter{
    display: flex;
    flex-direction: column;
    margin: 2em 3em;
    padding:1em;
}

</style>