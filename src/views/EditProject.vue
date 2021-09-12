<template>
  <h1>Edit a Project</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>

    <label>Details:</label>
    <textarea v-model="details" required></textarea>

    <button>Update Project</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: 'EditProject',
  props: ['id'],
  data(){
    return {
      title: '',
      details: '',
      completed: false,
      uri: 'http://localhost:3000/projects/' + this.id,
      // Another way to grab id: this.$route.params.id
      error: ''
    }
  },
  mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
      this.title = data.title
      this.details = data.details
    })
    .catch(err => console.log(err))
  },
  methods: {
    handleSubmit(){
      if(this.title.length < 3 || this.details.length < 3){
        this.error = 'Please provide more than 3 letters long to title and details'
        return
      }

      this.error = ''
      let project = {
          title: this.title,
          details: this.details,
      }
      fetch(this.uri, {
        method: 'PATCH',
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
