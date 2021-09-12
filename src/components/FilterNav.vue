<template>
  <nav class="filter-nav">
    <button
    @click="updateFilter(('all'))"
    :class="{active: filter === 'all'}"
    >View All</button>
    <button
    @click="updateFilter(('complete'))"
    :class="{active: filter === 'complete'}"
    >Completed</button>
    <button
    @click="updateFilter(('ongoing'))"
    :class="{active: filter === 'ongoing'}"
    >On Going</button>
  </nav>
</template>

<script>
export default {
  name: 'FilterNav',
  props: ['filter'],
  methods: {
    updateFilter(filterBy){
      this.$emit('updateFilter', filterBy)
    }
  }
}
</script>

<style>
.filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  .filter-nav button.active {
    color: #555;
  }
</style>
