<template>
  <h1>Add New Project</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>

    <label>Details:</label>
    <textarea v-model="details" required></textarea>

    <button>Add Project</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: 'AddProject',
  data(){
    return {
      title: '',
      details: '',
      error: '',
      uri: 'http://localhost:3000/projects'
    }
  },
  methods:{
    handleSubmit(){
      if(this.title.length < 3 || this.details.length < 3){
        this.error = 'Please provide more than 3 letters long to title and details'
        return
      }

      this.error = ''
      let project = {
          title: this.title,
          details: this.details,
          complete: false
      }
      fetch(this.uri, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(project)
       })
       .then(()=> this.$router.push('/'))
       .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
