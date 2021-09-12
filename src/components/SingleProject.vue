<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleShowDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{name: 'EditProject', params: {id: project.id} }">
          <span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons" @click="removeProject">delete</span>
        <span class="material-icons tick" @click="toggleComplete">done</span>
      </div>
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
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id
    }
  },
  methods: {
    toggleShowDetails(){
      this.showDetails = !this.showDetails
    },
    removeProject(){
      // remove project from json data
        fetch(this.uri, { method: 'DELETE' })
        .then(()=> this.$emit('remove', this.project.id))
        .catch(err => console.log(err))
    },
    toggleComplete(){
      // toggle status of complete for each project
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })})
      .then(()=> this.$emit('complete', this.project.id))
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
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }

   /* completed projects */
  .project.complete {
    border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
    color: #00ce89;
  }
</style>
