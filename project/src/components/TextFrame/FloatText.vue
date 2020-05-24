<template>
    <div class="FloatingText">
        <div class="titleDiv">
            <p>{{ title }}</p>
        </div>
        <div class="descriptionDiv">
            <span>222{{ message }}334</span>
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
    width: 33%;
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