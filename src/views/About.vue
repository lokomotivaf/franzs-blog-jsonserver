<template>
  <div class="about">
    <h1>About blog</h1>
    <p>I've created this blog, to practise working with server data in vue and vuex store.</p>
    <p>You're currently using JSON-Server version of this blog</p>
    <p><br></p>
    <p>This blog fethes all the post from server and then filters them in browser, I've done it this way, cause I've created 2 versions, one with the JSON server, and one with localstorage, so if it fethed just the selected posts at the home page, I would have to implement the filters twice. So this way its a bit simplier. The filters are just two getter methods at Vuex Store, that return filtered versions of the fetched posts Array.</p>
  </div>
</template>
<style lang="scss">
 @media only screen and (max-width: 500px) {
   .about p {
     width: 80% !important;
   }
 }
</style>