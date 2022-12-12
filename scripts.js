// JavaScript for Final project

// function to load a file name from the URL "fromFile" into the object identified by "whereTo" //
function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
    // define the fromFile variable
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  console.log("From URL: " + fromFile);
  


	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// new recipe object //
function Recipe(recipeName, contributorName, recipeLink, imageURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.recipeLink = recipeLink;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#copyright").innerHTML = this.recipeLink;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.recipeName, "ingredients", "#ingredients ul");  
    loadFileInto(this.recipeName,"equipment", "#equipment ul");  
    loadFileInto(this.recipeName, "directions", "#directions ol");  
    

  }
}

BananaBread = new Recipe("Banana Bread",
                         "Serena",
                         "Estimated cook time: 70 minutes",
                         "https://images.unsplash.com/photo-1621994153189-6223b41f7912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        
                        );

Pancakes = new Recipe(
  "Old Fashioned Pancakes", 
  "Maddy Szczypka", 
  "Estimated cook time: 25 minutes",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", 
  "pancakes-ingredients.html", 
  "pancakes-equipment.html", 
  "pancakes-directions.html"
);

FrenchToast = new Recipe(
  "French Toast", 
  "Analysse Palomares", 
  "Estimated cook time: 20 minutes",
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
  "toast-ingredients.html", 
  "toast-equipment.html", 
  "toast-directions.html"
);

Waffles = new Recipe(
  "Waffles", 
  "AllRecipes.com", 
  "Estimated cook time: 25 minutes",
  "https://images.unsplash.com/photo-1630936653848-61d14b90cf86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", 
  "waffles-ingredients.html", 
  "waffles-equipment.html", 
  "waffles-directions.html",
  
);

CinnamonRolls = new Recipe(
  "Cinnamon Rolls", 
  "AllRecipes.com", 
  "Estimated cook time: 40 minutes",
  "https://images.unsplash.com/photo-1584966164218-42b0c3225e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80", 
  "cinnamon-ingredients.html", 
  "cinnamon-equipment.html", 
  "cinnamon-directions.html",
);

BranMuffins = new Recipe(
  "Bran Muffins", 
  "AllRecipes.com", 
  "Estimated cook time: 30 minutes",
  "https://images.unsplash.com/photo-1630507665551-48047c523a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3399&q=80", 
  "bran-ingredients.html", 
  "bran-equipment.html", 
  "bran-directions.html",
);

 Biscuits = new Recipe(
  "Basic Biscuits", 
  "AllRecipes.com", 
  "Estimated cook time: 25 minutes",
  "https://images.unsplash.com/photo-1617163763226-7e7c2ec133c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2166&q=80", 
  "biscuits-ingredients.html", 
  "biscuits-equipment.html", 
  "biscuits-directions.html",
);

Crepes = new Recipe(
  "Basic Crepes", 
  "AllRecipes.com", 
  "Estimated cook time: 30 minutes",
  "https://images.unsplash.com/photo-1637036124732-cb0fab13bb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3JlcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", 
  "crepes-ingredients.html", 
  "crepes-equipment.html", 
  "crepes-directions.html",
);

CheeseOmelette = new Recipe(
  "Cheese Omelette", 
  "AllRecipes.com", 
  "Estimated cook time: 7-10 minutes",
  "https://media.istockphoto.com/id/1440946572/photo/omelet-cooking-in-a-pan-in-a-domestic-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=0SoViQu791mkjwMbZxl1L2RbrtxAFWgLu7Bj68vBUYs=", 
  "cheese-ingredients.html", 
  "cheese-equipment.html", 
  "cheese-directions.html",
);

HashBrown = new Recipe(
  "Crispy Hash Browns", 
  "AllRecipes.com", 
  "Estimated cook time: 25 minutes",
  "https://media.istockphoto.com/id/184835045/photo/golden-hash-browns-in-black-frying-pan.jpg?b=1&s=170667a&w=0&k=20&c=Vd3Sw0Bu3B9bDsS2ZPhMi_Xfj6f5lAOn6QPdqCo9XXY=", 
  "brown-ingredients.html", 
  "brown-equipment.html", 
  "brown-directions.html",
);

Eggs = new Recipe(
  "Fluffy Scrambled Eggs", 
  "AllRecipes.com", 
  "Estimated cook time: 5-10 minutes",
  "https://cdn.pixabay.com/photo/2021/08/29/11/00/scrambled-eggs-6582990_1280.jpg", 
  "eggs-ingredients.html", 
  "eggs-equipment.html", 
  "eggs-directions.html",
);

Quiche = new Recipe(
  "Bacon and Cheese Quiche", 
  "AllRecipes.com", 
  "Estimated cook time: 50-60 minutes",
  "https://images.unsplash.com/photo-1565181782289-457ee028de39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVpY2hlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", 
  "quiche-ingredients.html", 
  "quiche-equipment.html", 
  "quiche-directions.html",
);


Quiche = new Recipe(
  "Bacon and Cheese Quiche", 
  "AllRecipes.com", 
  "Estimated cook time: 50-60 minutes",
  "https://images.unsplash.com/photo-1565181782289-457ee028de39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVpY2hlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", 
  "quiche-ingredients.html", 
  "quiche-equipment.html", 
  "quiche-directions.html",
);

EggsBenedict = new Recipe(
  "Eggs Benedict", 
  "AllRecipes.com", 
  "Estimated cook time: 30 minutes",
  "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", 
  "benny-ingredients.html", 
  "benny-equipment.html", 
  "benny-directions.html",
);

Casserole = new Recipe(
  "Farmer's Casserole", 
  "AllRecipes.com", 
  "Estimated cook time: 60-70 minutes",
  "https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/04/06150930/Farmers-Casserole-Horizontal-7-2.jpg", 
  "casserole-ingredients.html", 
  "casserole-equipment.html", 
  "casserole-directions.html",
);

Turkey = new Recipe(
  "Turkey Breakfast Sausage", 
  "AllRecipes.com", 
  "Estimated cook time: 25 minutes",
  "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Breakfast_Sausage_Seasoning_311_pjxsh2.jpg", 
  "turkey-ingredients.html", 
  "turkey-equipment.html", 
  "turkey-directions.html",
);


window.onload = function() {
  
 document.querySelector("#firstRecipe").onclick = function() {
   BananaBread.displayRecipe();
 }
  
   
 document.querySelector("#secondRecipe").onclick = function() {
   Pancakes.displayRecipe();
 }
 
    
 document.querySelector("#thirdRecipe").onclick = function() {
   FrenchToast.displayRecipe();
 }
 
  document.querySelector("#fourthRecipe").onclick = function() {
   Waffles.displayRecipe();
 }
  
   document.querySelector("#fifthRecipe").onclick = function() {
   CinnamonRolls.displayRecipe();
 }
   
      document.querySelector("#sixthRecipe").onclick = function() {
   BranMuffins.displayRecipe();
 }
      
            document.querySelector("#seventhRecipe").onclick = function() {
   Biscuits.displayRecipe();
 }

               
      document.querySelector("#eighthRecipe").onclick = function() {
   Crepes.displayRecipe();
 }
      
            document.querySelector("#ninthRecipe").onclick = function() {
   CheeseOmelette.displayRecipe();
 }

    
            document.querySelector("#tenthRecipe").onclick = function() {
   HashBrown.displayRecipe();
 }

                
            document.querySelector("#eleventhRecipe").onclick = function() {
   Eggs.displayRecipe();
 }

                
            document.querySelector("#twelfthRecipe").onclick = function() {
   Quiche.displayRecipe();
 }

      
            document.querySelector("#thirteenthRecipe").onclick = function() {
   EggsBenedict.displayRecipe();
 }

                  document.querySelector("#fourteenthRecipe").onclick = function() {
   Casserole.displayRecipe();
 }

      
                  document.querySelector("#fifthteenthRecipe").onclick = function() {
   Turkey.displayRecipe();
 }

            
            
} //end window.onload