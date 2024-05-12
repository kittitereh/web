<template>
  <div>
    <SearchBar/>

    <button class="action-button" @click="searchOnTags">Find a tour</button>
  
    <div v-if="tours.length"> 
      <div class="tour" v-for="tour in tours">
          <h2> {{ tour.guide }}</h2>
          <router-link :to="{name: 'Tour', params:{tour_id: tour.tour_id}}">
              <h2>{{ tour.tour_description }}</h2>
          </router-link>
      </div>
    </div>
    <p v-else> No tours found... Try another tags</p>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"
import router from "../router"
import { ref } from "vue"

export default {
  name: 'Home',
  components: {  SearchBar, router },
  data(){
    return{
    }
  },
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

  methods:{
  //   toggleLoginPopup(){
      
  // },
  //   toggleCreateAccountPopup(){
  //     this.showCreateAccountPopup = !this.showCreateAccountPopup
  // },
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
