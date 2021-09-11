<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleShowDetails">{{ project.title }}</h3>
    </div>
    <div class="details" v-show="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project'],
  data(){
    return {
      showDetails: false
    }
  },
  methods: {
    toggleShowDetails(){
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
</style>
