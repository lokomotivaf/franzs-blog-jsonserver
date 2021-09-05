<template>
    <div class="filtry">
        <p @click="$store.commit('typesetAll')" :class="{selectedFilter: $store.state.all}">All posts</p>
        <p @click="$store.commit('typesetCry')" :class="{selectedFilter: $store.state.cry}">Crypto</p>
        <p @click="$store.commit('typesetDev')" :class="{selectedFilter: $store.state.dev}">Development</p>
    </div>
</template>
<style lang="scss">
.filtry {
    margin: 80px auto;
    width: 410px;
    height: 20px;

    p {
        display: inline-block;
        width: 130px;
        height: 20px;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 20px;
        font-size: 18px;
        color: rgb(49, 49, 49);
        cursor: pointer;
    }
    
    .selectedFilter {
        font-weight: bold;
    }
}
@media only screen and (max-width: 500px) {
     .filtry {
         width: 70%;
         margin: 80px auto;
         margin-bottom: 10px;
         position: relative;
         right: 3%;

         p {
             font-size: 18px;
             width: 33%;
         }
     }
}
</style>