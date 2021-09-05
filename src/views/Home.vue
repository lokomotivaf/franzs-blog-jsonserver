<template>
  <div class="home">
    <FranzFilters/>
    <FranzPost/>
  </div>
</template>

<script>
import FranzFilters from '../components/FranzFilters.vue'
import FranzPost from '../components/FranzPost.vue'

export default {
  name: 'Home',
  components: {
    FranzFilters,
    FranzPost
  }
}
</script>
