<template>
  <div class="home">
    <h1>Project Planner</h1>
    <FilterNav />
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @remove="handleRemove" @complete="handleComplete" />
      </div>
    </div>
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
  },
  data(){
    return {
      projects: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .then(error => console.log('error', error))
  },
  methods:{
    handleRemove(projectId){
      this.projects = this.projects.filter((pr)=> pr.id !== projectId)
    },
    handleComplete(projectId){
      let project = this.projects.find((pr)=> pr.id === projectId)
      if(project){
        project.complete = !project.complete
      }
    }
  }
}
</script>
