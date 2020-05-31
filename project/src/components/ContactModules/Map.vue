<template>
    <div id="map">
        <img id="imgmap" v-if="seenMap" src="/assets/img/Contact/map.png" alt="map image" />
    </div>
</template>

<script>
export default {
    props: ['seenMap'],
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
</script>

<style>

#imgmap {
    width:60%;
}

</style>