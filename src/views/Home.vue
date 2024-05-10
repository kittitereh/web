<template>
  <div>
    <SearchBar/>

    <button class="action-button" @click="searchOnTags">Find a tour</button>
  
    <div v-if="tours.length"> 
      <div class="tour" v-for="tour in tours">
          <h2> {{ tour.guide }}</h2>
          <p> {{ tour.tour_description }}</p>
          <router-link :to="{name: 'Tour', params:{tour_id: tour.tour_id}}">
              Details
          </router-link>
      </div>
    </div>
    <p v-else> No tours found... Try another tags</p>
  </div>
</template>

<script>
import LoginPopup from "../components/LoginPopup.vue"
import SearchBar from "../components/SearchBar.vue"
import CreateAccountPopup from "../components/CreateAccountPopup.vue"
import router from "../router"
import { ref } from "vue"

export default {
  name: 'Home',
  components: { LoginPopup, SearchBar, CreateAccountPopup, router },
  setup(){
    const tours = ref([])
    const error = ref([null])

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/tours')
        if (!data.ok){
          throw Error('no data available') 
        }
        tours.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(err.message)
      }
    }
    load()
    return {tours, error}
},
  data(){
    return{
    showLoginPopup: false,
    showCreateAccountPopup: false,
    tag: '',
    // tags: [],
    // tours: [],
  }},
  methods:{
    toggleLoginPopup(){
      
  },
    toggleCreateAccountPopup(){
      this.showCreateAccountPopup = !this.showCreateAccountPopup
  },
  // mounted(){
  //     fetch('http://localhost:3000/tours')
  //       .then(res => res.json())
  //       .then(data => this.tours = data)
  //       .catch(err => console.log(err.message))
  //   },
  }
}

</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

</style>
