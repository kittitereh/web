<template>
  <div class="about" v-if="tour">
    <h1>This is a tour page</h1>
    <p>{{tour_id}}</p>
    <!-- <p>{{tours}}</p> -->
    <p>{{tour.guide }}</p>
    <p>{{tour.tour_description }}</p>
  </div>
</template>

<script>
export default {
  props: ['tour_id'],
  data(){
    return{
      tour: null
    }
  },
  mounted(){
      fetch('http://localhost:3000/tours/' + this.tour_id)
        // fetch('http://localhost:3000/tours')
        .then(res => res.json())
        // .catch(err => console.log(`${err.message}`))
        .then(data => this.tour = data)
        .catch(err => console.log(`${err.message}. tour: ${this.tour}`))
}}
</script>
