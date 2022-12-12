<?

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "Banana Bread") {
  
  if ($list == "ingredients") {
   include "Ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "equipment.html";
    
  } elseif ($list == "directions") { 
    include "directions.html";
    
  } else {
    echo "1";
  }
  
} elseif ($name == "Old Fashioned Pancakes") {
  
    if ($list == "ingredients") {
   include "pancakes-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "pancakes-equipment.html";
    
  } elseif ($list == "directions") { 
    include "pancakes-directions.html";
    
  } else {
    echo "1";
  }

  } elseif ($name == "French Toast") {
  
     if ($list == "ingredients") {
   include "toast-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "toast-equipment.html";
    
  } elseif ($list == "directions") { 
    include "toast-directions.html";
    
  } else {
    echo "1";
  }
  
  
  } elseif ($name == "Waffles") {
  
     if ($list == "ingredients") {
   include "waffles-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "waffles-equipment.html";
    
  } elseif ($list == "directions") { 
    include "waffles-directions.html";
    
  } else {
    echo "1";
  }
  
    
  } elseif ($name == "Cinnamon Rolls") {
  
     if ($list == "ingredients") {
   include "cinnamon-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "cinnamon-equipment.html";
    
  } elseif ($list == "directions") { 
    include "cinnamon-directions.html";
    
  } else {
    echo "1";
  }
  
 
      
  } elseif ($name == "Bran Muffins") {
  
     if ($list == "ingredients") {
   include "bran-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "bran-equipment.html";
    
  } elseif ($list == "directions") { 
    include "bran-directions.html";
    
  } else {
    echo "1";
  }
  
       
  } elseif ($name == "Basic Biscuits") {
  
     if ($list == "ingredients") {
   include "biscuits-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "biscuits-equipment.html";
    
  } elseif ($list == "directions") { 
    include "biscuits-directions.html";
    
  } else {
    echo "1";
  }
  
         
  } elseif ($name == "Basic Crepes") {
  
     if ($list == "ingredients") {
   include "crepes-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "crepes-equipment.html";
    
  } elseif ($list == "directions") { 
    include "crepes-directions.html";
    
  } else {
    echo "1";
  }
  
  
         
  } elseif ($name == "Cheese Omelette") {
  
     if ($list == "ingredients") {
   include "cheese-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "cheese-equipment.html";
    
  } elseif ($list == "directions") { 
    include "cheese-directions.html";
    
  } else {
    echo "1";
  }
  
           
  } elseif ($name == "Crispy Hash Browns") {
  
     if ($list == "ingredients") {
   include "brown-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "brown-equipment.html";
    
  } elseif ($list == "directions") { 
    include "brown-directions.html";
    
  } else {
    echo "1";
  }
  
   } elseif ($name == "Fluffy Scrambled Eggs") {
  
     if ($list == "ingredients") {
   include "eggs-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "eggs.equipment.html";
    
  } elseif ($list == "directions") { 
    include "eggs-directions.html";
    
  } else {
    echo "1";
  }
  
     } elseif ($name == "Bacon and Cheese Quiche") {
  
     if ($list == "ingredients") {
   include "quiche-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "quiche-equipment.html";
    
  } elseif ($list == "directions") { 
    include "quiche-directions.html";
    
  } else {
    echo "1";
  }
  
    
     } elseif ($name == "Eggs Benedict") {
  
     if ($list == "ingredients") {
   include "benny-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "benny-equipment.html";
    
  } elseif ($list == "directions") { 
    include "benny-directions.html";
    
  } else {
    echo "1";
  }
  
   
     } elseif ($name == "Farmer's Casserole") {
  
     if ($list == "ingredients") {
   include "casserole-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "casserole-equipment.html";
    
  } elseif ($list == "directions") { 
    include "casserole-directions.html";
    
  } else {
    echo "1";
  }
  
   
     } elseif ($name == "Turkey Breakfast Sausage") {
  
     if ($list == "ingredients") {
   include "turkey-ingredients.html";
    
  } elseif ($list == "equipment") {   
    include "turkey-equipment.html";
    
  } elseif ($list == "directions") { 
    include "turkey-directions.html";
    
  } else {
    echo "1";
  }
  
  
} else {
  echo "0";
  
}

