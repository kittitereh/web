<template>
    <div class="first"> 
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
    
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data(){
      return{
        tag: '',
        tags: [],
      }
    },
    methods: {
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

  </style>
  