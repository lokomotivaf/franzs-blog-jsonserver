import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    all: true,
    dev: false,
    cry: false,
  },
  mutations: {
    //AFTER getting posts 
    setGettedPosts(state, data) {
      //setting and sorting data by biggest id MEANINg the newest post
      state.posts = data.sort(function(a, b){return b.id-a.id});
    },
    //filters
    typesetAll(state) {
      state.all = true
      state.dev = false
      state.cry = false
    },
    typesetDev(state) {
      state.dev = true
      state.all = false
      state.cry = false
    },
    typesetCry(state) {
      state.cry = true
      state.all = false
      state.dev = false
    },
    //addingpost
    addPost(state, data) {
      state.posts = [data, ...state.posts]
    }
  },
  actions: {
    postPost({ commit }, passedpost ) {
      let newpost = {}
      newpost.title = passedpost.title
      newpost.type = passedpost.type
      newpost.content = passedpost.content
      //ading date 
      let d = new Date
      //denvtydnu a prevod na text
      let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let weekday = d.getDay()
      weekday = weekdays[weekday]
      let hours = d.getHours()
      let minutes = d.getMinutes()
      minutes < 10 ? minutes = `0${minutes}` : minutes = minutes
      let day = d.getDate()
      let month = d.getMonth() + 1
      let year = d.getFullYear()
      newpost.date = `${weekday}, ${day}.${month}.${year} / ${hours}:${minutes} `
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newpost)
      }).then((response) => {
        console.log('resolved', response);
        return response.json();
      }).then(data => {
        console.log(data);
        commit('addPost', data)
      }).catch((error) => {
        console.log('rejected', error);
      })
    },
    getPosts({ commit }) {
      fetch('http://localhost:3000/posts').then((response) => {
        console.log('resolved', response);
        return response.json();
      }).then(data => {
        console.log(data);
        commit('setGettedPosts', data)
      }).catch((error) => {
        console.log('rejected', error);
      })
    }
  },
  getters: {
    cryPosts(state) {
      let cryPosts = state.posts.filter(post => post.type == 'Crypto');
      return cryPosts
    },
    devPosts(state) {
      let devPosts = state.posts.filter(post => post.type == 'Dev');
      return devPosts
    }
  },
  modules: {
  }
})
