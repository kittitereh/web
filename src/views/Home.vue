<template>
  <div>
    <SearchBar/>
    <button class="action-button">Find a tour</button>
    <ToursScroll/>
  </div>
</template>

<script>
import LoginPopup from "../components/LoginPopup.vue"
import SearchBar from "../components/SearchBar.vue"
import CreateAccountPopup from "../components/CreateAccountPopup.vue"
import ToursScroll from "../components/ToursScroll.vue"
import router from "../router"

export default {
  name: 'Home',
  components: { LoginPopup, SearchBar, CreateAccountPopup, ToursScroll, router },
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
    align-items: center;
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

  .header-container .action-button{
    margin: 5px;
    background-color: white;
    border: 0;
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
