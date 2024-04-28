<template>
    <nav class="header-container">   
        <a href="/"><img src="../assets/logo.svg" alt="logo" class="logo"></a>
        <nav class = "menu"> 
          <ul role="list" class="menu-list">
            <li><a href="#"> Blog </a></li>
            <li><a href="#"> About Us </a></li>
            <li><a href="#"> For business </a></li>   
         </ul>
        </nav> 
    </nav>

</template>

<style>

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