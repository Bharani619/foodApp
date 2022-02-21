function navbar() {

 return `<nav>
 <div id="nav-header">
    
   <div id="nav-sub-1">
      
       <div class="nav-sub-content-1">
           <i class="fas fa-bars"></i>
          <a href="index.html"><h4 style="color:red">allrecipes</h4></a>
           <i class="fas fa-utensil-spoon" style="color:rgb(221, 221, 100)"></i>
       </div>

       <div class="nav-searchBar">
           <input type="text" id="searchValue" placeholder="search by recipe first letter"/>
           <button id="buttonSearch"><i class="fas fa-search"></i></button>
          </div>


       <div class="nav-sub-content-2">
          <a href="latestRecipes.html"><h4>Latest</h4></a>
          <a href="dayOfRecipes.html"><h4>Recipe of the Day</h4></a>
          <h4>Join now</h4>
          <a href=""><h4>Login</h4></a>
       </div>
   
       </div>

</div>

<nav>`


}

export default navbar