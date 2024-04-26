<template>
  <div>
    <nav class="header-container">   
        <a href="/"><img src="./assets/logo.svg" alt="logo" class="logo"></a>
        <nav class = "menu"> 
          <ul role="list" class="menu-list">
            <li><a href="#"> Blog </a></li>
            <li><a href="#"> About Us </a></li>
            <li><a href="#"> For business </a></li>   
         </ul>
        </nav> 
        <button class="login" @click="toggleLoginPopup"> Log In </button>
        <button class="sign-up" @click="toggleCreateAccountPopup"> Sign Up </button>
    </nav>
    <SearchBar/>
    <div v-if="showLoginPopup"> 
      <LoginPopup @close="toggleLoginPopup"/>
    </div>
    <div v-if="showCreateAccountPopup"> 
      <CreateAccountPopup @close="toggleCreateAccountPopup"/>
    </div>
    <button @click="toggleLoginPopup">Write</button>
  </div>
</template>

<script>
import LoginPopup from "./components/LoginPopup.vue"
import SearchBar from "./components/SearchBar.vue"
import CreateAccountPopup from "./components/CreateAccountPopup.vue"

export default {
  name: 'App',
  components: {LoginPopup, SearchBar, CreateAccountPopup},
  data(){
    return{
    showLoginPopup: false,
    showCreateAccountPopup: false
  }
  },
  methods:{
    toggleLoginPopup(){
      this.showLoginPopup = !this.showLoginPopup
  },
    toggleCreateAccountPopup(){
      this.showCreateAccountPopup = !this.showCreateAccountPopup
  }
  }}

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

.header-container {
    width: 100%;
    height: 100px;
    background-color: gray;
    display: flex;
    flex-direction: row;
  }

  .header-container .logo {
    float: left;
    width: 100%;
    height: 100px;
    color: black;
    align-items: center;
  }

  .header-container .menu {
    position: relative;
    align-self: center;
    margin-left: 5%;
  }

  .menu-list li {
    display: inline;
    list-style: none;
  }

  
  .menu-list li a {
    text-decoration: none;
    margin-right: 30px;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    color: white;
  }


  .menu-list li a:hover {
    color: greenyellow;
  }
  
  .menu-list li a:active {
    color: #04AA6D;
  }

</style>
