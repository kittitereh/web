<template>
    <div class="first"> 
      <h1> Enter something to find a tour about it: </h1>
      <div class="search-div">
        <input
              class="search-input"
              placeholder="e.g. Moscow"
              type="tags"
              v-model="tags"/>
        <button class="search-button" @click="searchOnTags">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <ul class="tags-ul" v-if="tags">
        <li v-for="h in tags">#{{ h }}</li>
      </ul>
    </div>
    
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data(){
      return{
        tags: [],
      }
    },
    methods: {
      searchOnTags(){
        console.log("hi")
      },
    }
  }
  </script>
  
  <style>  
  .search-div {
    width: 400px;
    height: 50px;
    background-color: white;
    display: inline-flex;
    border: 2px solid black;
    border-radius: 10px;
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
  </style>
  