<template>
    <div class="FloatingText border">
        <div class="titleDiv">
            <p>{{ title }}</p>
        </div>
        <div class="descriptionDiv">
            <span>{{ message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'message'],
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
.FloatingText{
    margin: 0.3rem;
    width: 30%;
    height: 10em;
    background-color: rgba(255, 255, 255,0.2);
}
.titleDiv{
    font-size: 18px;
    color: white;
}
.descriptionDiv{
    font-size: 14px;
    color: white;
}

</style>