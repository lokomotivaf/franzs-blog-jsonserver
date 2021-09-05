<template>
    <div v-show="$store.state.all" v-for="(post, index) in $store.state.posts" :key='index'>
        <router-link :to="{ name: 'PostDetails', params: {id: index}}">
            <div class="post">
                <div class="category">
                    <h3 class="noselect">{{post.type}}</h3>
                </div>
                <h2>{{post.title.slice(0, 60)}}</h2>
                <p>{{post.content.slice(0, 82)}}...</p>
                <p class="date">{{post.date}}</p>
            </div>
        </router-link>
    </div>
    <div v-show="$store.state.cry" v-for="(post, index) in $store.getters.cryPosts" :key='index'>
        <router-link :to="{ name: 'PostDetails', params: {id: index}}">
            <div class="post">
                <div class="category">
                    <h3 class="noselect" >{{post.type}}</h3>
                </div>
                <h2>{{post.title.slice(0, 60)}}</h2>
                <p>{{post.content.slice(0, 82)}}...</p>
                <p class="date">{{post.date}}</p>
            </div>
        </router-link>
    </div>
    <div v-show="$store.state.dev" v-for="(post, index) in $store.getters.devPosts" :key='index'>
        <router-link :to="{ name: 'PostDetails', params: {id: index}}">
            <div class="post">
                <div class="category">
                    <h3 class="noselect">{{post.type}}</h3>
                </div>
                <h2>{{post.title.slice(0, 60)}}</h2>
                <p>{{post.content.slice(0, 82)}}...</p>
                <p class="date">{{post.date}}</p>
            </div>
        </router-link>
    </div>
</template>
<script>


</script>


<style lang="scss">
a {
    text-decoration: none;
}
.post {
    position: relative;
    width: 690px;
    height: 150px;
    margin: 20px auto;
    //background: rgba(255, 0, 0, 0.219);
    
    .category {
        background: white;
        width: 150px;
        height: 150px;
        box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
        text-align: left;

        h3 {
            font-size: 42px;
            font-weight: bolder;
            font-style: italic;
            font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            line-height: 150px;
            color: white;
            text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.15);
            transform: translate(-2px, -5px);
        }

    }

    h2 {
        position: absolute;
        top: 0;
        left: 170px;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        font-weight: normal;
        color: #37402E;
        text-align: left;
    }

    p {
        position: absolute;
        top: 30px;
        left: 170px;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: normal;
        color: #525252;
        text-align: left;
    }

    .date {
        position: absolute;
        top: unset;
        bottom: 0;
        right: 0;
        text-align: right;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-style: italic;
    }
}
@media only screen and (max-width: 690px) {
    .post {
        width: 98%;
        h2 {
            font-size: 1rem;
            font-weight: bold;
        }
         p {
             top: 45px
          }
        .date {
            right: 16px;
        }
    }
}
@media only screen and (max-width: 410px) {
    .post p {
        top: 60px
    }
}
</style>