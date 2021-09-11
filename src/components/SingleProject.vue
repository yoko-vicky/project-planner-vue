<template>
  <h4>{{ project.title }}</h4>
  <p>{{ project.details }}</p>
  <p>{{ project.complete }}</p>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project']
}
</script>

<style>

</style>
