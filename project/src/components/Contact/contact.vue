<template>
    <div id="contact">
        <div class="top-section">
            <BaseNav></BaseNav>
            <div class="main">
                <div id="text1">
                    <p>Contact Us</p>
                </div>
                <Map :seenMap="seenMapCont"></Map>
                <!--Insert an arrow image -->
                <img id = "arrow" src="/assets/img/Contact/arrow.svg" v-if="seenButton1">

                <input id="button1" type="image" src="/assets/img/Contact/formbutton.png" v-if="seenButton1" v-on:click="reverse"></input>
                <input id="button2" type="image" src="/assets/img/Contact/returnButton.png" v-if="seenButton2" v-on:click="reverse2"></input>

                <div id="form1" v-if="seenTable">
                    <table border="0">
                        <th>Personal Infomation</th>
                        <tr>
                            <td>
                                <span>Name: </span>
                                <input placeholder="name" style="background:none" v-model="nameInput">
                            </td>
                            <td>
                                <span>Gender:</span>
                                <select style="background:none" v-model="genderInput">
                                    <option disable value="">Please select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Country:</span>
                                <select style="background:none" v-model="countryInput">
                                    <option disable value="">Select a country</option>
                                    <option>China</option>
                                    <option>French</option>
                                    <option>UK</option>
                                    <option>USA</option>
                                </select>
                            </td>
                            <td>
                                <span>University:</span>
                                <input placeholder="university" style="background:none" v-model="uniInput">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                            <span>Your instrests</span>
                            <br>
                            <textarea placeholder="Your interests" rows="10" cols="61" v-model="textInput"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button id="submit" v-on:click="submitTable">submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>

<script>
import Basebanner from '../Common/Basebanner.vue'
import Basefooter from '../Common/Basefooter.vue'
import ContactNavi from '../TextFrame/ContactNavi.vue'
import Map from "../ContactModules/Map.vue"
import BaseNav from '../Common/BaseNav.vue'
import axios from 'axios'
axios.defaults.baseURL = '/root'

var url="http://localhost:3000"


export default {
    data: function(){
        return {
            seenMapCont: true,
            seenButton1: true,
            seenButton2: false,
            seenTable:false,
            nameInput: "",
            genderInput: "",
            countryInput: "",
            uniInput: "",
            textInput: "",
        }
    },
    components: {
        Basebanner,
        Basefooter,
        ContactNavi,
        Map,
        BaseNav,
    },
    methods:{
        reverse: function(){
            this.seenMapCont = false,
            this.seenButton1 = false,
            this.seenButton2 = true,
            this.seenTable = true
        },
        reverse2: function(){
            this.seenMapCont = true,
            this.seenButton1 = true,
            this.seenButton2 = false,
            this.seenTable = false
        },
        submitTable: function(){
            //alert(this.nameInput);
            //alert(this.genderInput);
            //alert(this.countryInput);
            //alert(this.uniInput);
            //alert(this.textInput);
            axios.get('/submit', {
                params: {
                    name: this.nameInput,
                    gender: this.genderInput,
                    country: this.countryInput,
                    university: this.uniInput,
                    info: this.textInput
                }
            }).then(function (response) {
                //console.log(response);
                //alert(response.data[0].name);
            }).catch(function (error) {
                console.log(error);
            });
            this.clearInfo();
        },
        clearInfo: function(){
            this.nameInput=null;
            this.genderInput=null;
            this.countryInput=null;
            this.uniInput=null;
            this.textInput=null;
        }
    }
}
</script>

<style scoped>
#arrow {
    position:absolute;
    top: 25%;
    left: 80%;
    width: 10%;
}

#contact {
    height: 100%;
    width: 100%;
    background-image:url(/assets/img/Contact/contact_background_little.jpg);
}

#navigation {
    font-size: 20pt;
    font-weight: 700;
    color: black;
    background-color: white;
    width: 20%;
    height: 100%;
    line-height: 150%;
}

#text1 {
    position: absolute;
    top: 5%;
    left: 22%;
    color: black;
    font-size: 50pt;
    font-weight:400;
}

#map {
    position:absolute;
    top: 20%;
    left: 30%;
}

#button1 {
    position:absolute;
    top:50%;
    left:80%;

    height:200px;
}

#button2 {
    position:absolute;
    top:89%;
    left:95%;

    height:50px;
}

#form1 {
    position:absolute;
    top: 20%;
    left: 30%;
    color:black;
    font-size:20pt;
    font-family:calibri;
}
</style>