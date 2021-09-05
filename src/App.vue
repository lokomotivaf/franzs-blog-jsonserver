<template>
  <div id="nav">
    <h1 class="logo noselect">Franz's Blog</h1>
    <div class="right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="left">
      <router-link to="/addpost">Add blog post</router-link>
    </div>
  </div>
  <div class="navplaceholder"></div>
  <router-view/>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('getPosts')
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
//css reset
*, *:before, *:after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{
    margin: 0;
    padding: 0;
}
//css reset end
//noselect
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
//about
.about {
  margin: 80px auto;

  h1 {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 26px;
    line-height: 50px;
    display: inline-block;
    margin-bottom: 60px;
    color: rgb(49, 49, 49);
  }

  p {
    width: 600px;
    margin: 0 auto;
    line-height: 26px;
  }
}
//about
body {
  //background:linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%) ,url('./assets/image2.jpg');
  //background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  background-image: radial-gradient(circle at 69% 86%, rgba(165, 165, 165,0.06) 0%, rgba(165, 165, 165,0.06) 25%,rgba(193, 193, 193,0.06) 25%, rgba(193, 193, 193,0.06) 50%,rgba(221, 221, 221,0.06) 50%, rgba(221, 221, 221,0.06) 75%,rgba(249, 249, 249,0.06) 75%, rgba(249, 249, 249,0.06) 100%),radial-gradient(circle at 49% 76%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 25%,rgba(164, 164, 164,0.06) 25%, rgba(164, 164, 164,0.06) 50%,rgba(200, 200, 200,0.06) 50%, rgba(200, 200, 200,0.06) 75%,rgba(235, 235, 235,0.06) 75%, rgba(235, 235, 235,0.06) 100%),radial-gradient(circle at 22% 64%, rgba(173, 173, 173,0.06) 0%, rgba(173, 173, 173,0.06) 25%,rgba(119, 119, 119,0.06) 25%, rgba(119, 119, 119,0.06) 50%,rgba(64, 64, 64,0.06) 50%, rgba(64, 64, 64,0.06) 75%,rgba(10, 10, 10,0.06) 75%, rgba(10, 10, 10,0.06) 100%),linear-gradient(307deg, rgb(255,255,255),rgb(255,255,255));
  background-size: 100vw 100vw; 
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: overlay;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #525252;
  //width: 100%;
}
.navplaceholder {
    height: 0px;
  }
#nav {
  padding: 3px 0;
  position: relative;
  width: 88%;
  height: 100px;
  background: rgba(165, 42, 42, 0);
  margin: 0 auto;

  h1 {
    //margin: 3px 0;
    //color: 373737;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 34px;
    line-height: 50px;
    display: inline-block;
    width: 154px;
    height: 100px;
  }

  .right {
    position: absolute;
    top: 2px;
    right: 0;
    text-align: right;
    width: 300px;
    height: 100%;
    display: inline-block;
    line-height: 100px;
  }
  .left {
    position: absolute;
    top: 2px;
    left: 0;
    text-align: left;
    width: 300px;
    height: 100%;
    display: inline-block;
    line-height: 100px;

    a {
      margin: 0;
      width: 150px;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    font-family: 'Varela', sans-serif;
    font-size: 22px;
    color: #373737;
    margin: 0;
    margin-left: 50px;
    margin-right: -2px;
    padding-right: 2px;
    width: 68px;
    height: 70px;
    //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

    &.router-link-exact-active {
      border-bottom: 2px solid #373737;
      //box-shadow: 0px 6px 4px -4px rgba(0, 0, 0, 0.15);
    }
  }
}
@media only screen and (max-width: 690px) {
  .navplaceholder {
    height: 100px;
    width: 100%;
  }
  #nav {
    width: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .left {
      width: 25%;
      margin-left: 10%;
    }
    .right {
      width: 50%;
      margin-right: 10%;

    }
    h1 {
      width: 0;
      height: 0;
      display: none;
    }
    a {
      margin-right: 2.5%;
    }
  }
}
@media only screen and (max-width: 500px) {
  a {
    font-size: 17px !important;
    width: unset !important;
    margin-left: 10% !important;
  }
  .right {
      width: 70% !important;
    }
  .left {
    width: 35% !important;
    a {
      width: unset;
      margin-left: 0% !important;
    }
  }
}
</style>
