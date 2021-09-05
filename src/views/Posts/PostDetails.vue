<template>
    <div v-if="$store.state.all" class="allposts">
        <h2>{{$store.state.posts[id].title}}</h2>
        <div class="postdetCon">
            <p>{{$store.state.posts[id].content}}</p>
        </div>
        <p class="date">{{$store.state.posts[id].date}}</p>
    </div>
    <div v-if="$store.state.dev" class="devposts">
        <h2>{{$store.getters.devPosts[id].title}}</h2>
        <div class="postdetCon">
            <p>{{$store.getters.devPosts[id].content}}</p>
        </div>
        <p class="date">{{$store.getters.devPosts[id].date}}</p>
    </div>
    <div v-if="$store.state.cry" class="cryposts">
        <h2>{{$store.getters.cryPosts[id].title}}</h2>
        <div class="postdetCon">
            <p>{{$store.getters.cryPosts[id].content}}</p>
        </div>
        <p class="date">{{$store.getters.cryPosts[id].date}}</p>
    </div>
</template>
<script>

export default ({
    props: ['id'],
})
</script>

<style lang="scss" scoped>
h2 {
    color: rgb(49, 49, 49);
    width: 58%;
    margin: 160px auto;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
    font-size: 1.8rem;
}
.postdetCon {
    width: 58%;
    min-height: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.425);
    padding: 20px;
    text-align: left;

    p {
        line-height: 29px;
        font-size: 1.2rem;
    }
}
.date {
    text-align: right;
    font-style: italic;
    width: 58%;
    margin: 0 auto;
    padding: 20px 20px 0 20px;
}
@media only screen and (max-width: 690px) {
    h2 {
        width: 90%;
        padding-left: 10px;
    }
    .postdetCon {
        width: 90%;
        padding: 20px 10px;
    }
    .date { 
        width: 90%;
        padding: 10px 10px 5px 10px;
    }

}
</style>
