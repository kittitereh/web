<template>
  <div>
    <!-- Search bar -->
    <div> 
      <h1> Enter something to find a tour about it: </h1>
      <div class="search-div">
        <input
              class="search-input"
              placeholder="e.g. Moscow"
              type="tags"
              v-model="tag"
              @keyup="addTag"/>
        <button class="search-button" @click="searchOnTags">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div>
            <input type="checkbox" value="Food" v-model="tags">
            <label>Food</label>
            <input type="checkbox" value="For kids" v-model="tags">
            <label>For kids</label>
            <input type="checkbox" value="Russian history" v-model="tags">
            <label>Russian history</label>
            <input type="checkbox" value="Culture" v-model="tags">
            <label>Culture</label>
            <input type="checkbox" value="Shopping" v-model="tags">
            <label>Shopping</label>
            <input type="checkbox" value="Business trip" v-model="tags">
            <label>Business trip</label>
        </div>
        <div>
            <input type="checkbox" value="1-day-trip" v-model="tags">
            <label>1-day-trip</label>
            <input type="checkbox" value="2-3-days-trip" v-model="tags">
            <label>2-3-days-trip</label>
            <input type="checkbox" value="1-week-trip" v-model="tags">
            <label>1-week-trip</label>
            <input type="checkbox" value="loger trip" v-model="tags">
            <label>Longer trip</label>
        </div>
      <ul class="tags-ul" v-if="tags">
        <li v-for="t in tags" :key="t" class="clickable" @click="deleteClickable">#{{ t }}</li>
      </ul>
    </div>
    <!-- <SearchBar/> -->
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
    
    <!-- <router-view/> -->
  <!-- </div> -->
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
    searchOnTags(){
        console.log("hi")
    },
    addTag(e){
        if (e.key==='Enter' && this.tag){
            this.tags.push(this.tag)
            this.tag = ''
        }
      },
    deleteClickable(){
        this.tags.pop(this.tag)
      }
  },
  // mounted(){
  //     fetch('http://localhost:3000/tours')
  //       .then(res => res.json())
  //       .then(data => this.tours = data)
  //       .catch(err => console.log(err.message))
  //   },
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

.search-div {
    width: 400px;
    height: 50px;
    background-color: white;
    display: inline-flex;
    border: 2px solid black;
    border-radius: 15px;
  }
  
  .search-input {
    width: 100%;
    background: transparent;
    font-size: 18px;
    border: 0;
    outline: 0;
    padding-right: 2%;
    padding-left: 2%;
  }
  .search-button {
      background-color:transparent;
      cursor: pointer;
      border: 0;
      outline: 0;
      padding-right: 2%;
    }
  
  .search-button .fa-magnifying-glass{
    color: black ;
    font-size: 20px;
  }
  
  .tags-ul li {
    list-style: none;
    display: inline;
    padding: 5px;
  }

  label{
        display: inline-block;
        margin-left: 5px;
        margin-left: 20px;
    }

  input[type="checkbox"]{
    margin: 0 0 10px 0;
  }

  .clickable:hover{
    color: green;
  }

  .action-button {
    appearance: none;
    background-color: transparent;
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    min-width: 120px;
    min-height: 40px;
    max-width: 160px;
    will-change: transform;
  }

  .action-button:disabled {
    pointer-events: none;
  }

  .action-button:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .action-button:active {
    box-shadow: none;
    transform: translateY(0);
  }

</style>
