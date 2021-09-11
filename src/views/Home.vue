<template>
  <div class="home">
    <h1>Project Planner</h1>
    <FilterNav />
    <SingleProject />
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import SingleProject from '@/components/SingleProject.vue'

export default {
  name: 'Home',
  components: {
    FilterNav,
    SingleProject
  }
}
</script>
