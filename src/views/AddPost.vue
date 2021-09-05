<template>
  <div class="about">
    <h1>Add new blog post</h1>
    <form @submit.prevent="addPost">
      <h3>Title</h3>
      <input v-model="newpost.title" type="text" required>
      <h4>Type</h4>
      <select v-model="newpost.type" name="" id="" required>
        <option value="Dev">Development</option>
        <option value="Crypto">Crypto</option>
      </select>
      <p class="formp">Content</p>
      <textarea v-model="newpost.content" name="" id="" cols="30" rows="10" required></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</template>
<script>
export default({
  data() {
    return {
      newpost: {
        title: '',
        type: '',
        content: ''
      }
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('postPost', this.newpost)
      this.newpost.title = ''
      this.newpost.type = ''
      this.newpost.content = ''
    }
  },
})
</script>

<style lang="scss">
  .about {
    h3 {
      text-align: left;
      width: 400px;
      margin: 15px auto 1px auto;
      padding-left: 10px;
    }
    h4 {
      text-align: left;
      width: 400px;
      margin: 15px auto 4px auto;
      padding-left: 10px;
    }
    .formp {
      text-align: left;
      width: 400px;
      margin: 15px auto 4px auto;
      padding-left: 10px;
    }
  }
  form{
    margin-top: -10px;
    margin-bottom: 32px;

    input {
      border: none;
      background: rgb(233, 233, 233);
      width: 400px;
      height: 50px;
      border-radius: 10px;
      padding-left: 10px;
    }
    select {
      border: none;
      background: rgb(233, 233, 233);
      width: 400px;
      height: 50px;
      border-radius: 10px;
      margin-bottom: 15px;
      padding-left: 10px;
      -webkit-appearance: none
    }
    textarea {
      border: none;
      background: rgb(233, 233, 233);
      width: 400px;
      height: 250px;
      border-radius: 10px;
      max-width: 400px;
      min-width: 400px;
      max-height: 150px;
      min-height: 150px;
      padding: 10px 10px;
    }
    button {
      margin: 0 auto;
      display: block;
      border: none;
      background: rgb(97, 97, 97);
      width: 400px;
      height: 50px;
      border-radius: 10px;
      margin-top: 32px;
      font-size: 30px;
      font-weight: bolder;
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      text-align: center;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background: rgb(58, 58, 58);
    }
  }

@media only screen and (max-width: 450px) {
  .about {
    h3 {
      width: 90%;
    }
    h4 {
      text-align: left;
      width: 90%;
    }
    .formp {
      width: 90%;
    }
  }
  form{
    margin-top: -10px;
    margin-bottom: 32px;

    input {
      width: 90%;
    }
    select {
      width: 90%;
    }
    textarea {
      width: 90%;
      max-width: 90%;
      min-width: 90%;
      max-height: 150px;
      min-height: 150px;
    }
    button {
      width: 90%;
    }
  }
}
</style>