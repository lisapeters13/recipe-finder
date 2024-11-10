const handleClick = (recipe) => {
  document.querySelector('#recipe-detail img').src = recipe.image;
  document.querySelector('#recipe-detail .name').textContent = recipe.name;
  document.querySelector('#recipe-detail .ingredients').textContent = recipe.ingredients;

  // Corrected: Update the right elements for instructions 
  document.querySelector('#instructions-display').textContent = recipe.instructions; 
};



// The main function to display all recipe images
const displayRecipes = () => {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipeData => {
      const recipeMenu = document.getElementById('recipe-menu');  // Get #recipe-menu div
      recipeData.forEach(recipe => {
        // Create an img element for each recipe
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;  // Add alt text for accessibility
        img.addEventListener('click', () => handleClick(recipe));  // Attach click event
        recipeMenu.appendChild(img); 
       //mouse hover eventlistener 
       document.getElementById("recipe-menu").addEventListener("mouseover", mouseOver(recipe.name));
      });
    });
};

// document.getElementById("demo").addEventListener("mouseover", mouseOver);
// document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver(recipename) {
  const recipeMenu = document.getElementById('recipe-menu');  // Get #recipe-menu div
  // document.getElementById("recipe-menu").innerHTML = "red";
  const hoverTitle = document.createElement('p');
  hoverTitle.InnerText=recipename;
  recipeMenu.appendChild(hoverTitle);
}

function mouseOut() {
  document.getElementById("recipe-menu").style.color = "black";
}

//get content of search box
const searchIngredient = () => {
  fetch('http://localhost:3000/recipes')
  .then(response => response.json())
  .then(recipeData => {
    //eventlistener for return key
    document.querySelector('#search-text').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        // code for enter
              
        // Code to execute when the button is clicked
        const searchTerm = document.getElementById("search-text").value;
        //   const resultData = document.getElementById('recipe-results');
        // resultData.innerHTML = "";    
        
          console.log("Searching for:", searchTerm); 
    
          // Perform your search logic here
          const resultData = document.getElementById('recipe-results');  
          // Get #recipe-results div
          const recipeImage = document.getElementById('recipe-img');
          const msg = document.createElement('p');
          msg.innerText = "No recipes found with ingredient";
    
          //clear result section for new results
          resultData.replaceChildren("")
    
          recipeData.forEach(recipe => {
    
            const ingredients = recipe.ingredients
            const containsSubstring = ingredients.some(str => str.includes(searchTerm)); //returns true if found
            
            //check for empty or whitespace
            if (/\S/.test(searchTerm) && containsSubstring) {
              console.log(ingredients)
    
              // Create an img element for the recipe
              const img = document.createElement('img');
              img.src = recipe.image;
              img.alt = recipe.name;  // Add alt text for accessibility
              //create an element for the recipe title
              const recipeTitle = document.createElement('h3')
              recipeTitle.innerText = recipe.name;
              
              resultData.appendChild(img);
              resultData.appendChild(recipeTitle)
              //clear message for ingredients not found
              msg.innerText = "";
    
            } 
          });
        }
    });
    // Get the search button element
    const searchButton = document.getElementById("search-btn"); 

    // Add an event listener for the "click" event
    searchButton.addEventListener( "click", function() { //add second lister for "return key"
      // Code to execute when the button is clicked
      const searchTerm = document.getElementById("search-text").value;
    //   const resultData = document.getElementById('recipe-results');
    // resultData.innerHTML = "";    
     
      console.log("Searching for:", searchTerm); 

      // Perform your search logic here
      const resultData = document.getElementById('recipe-results');  
      // Get #recipe-results div
      const recipeImage = document.getElementById('recipe-img');
      const msg = document.createElement('p');
      msg.innerText = "No recipes found with ingredient";

      //clear result section for new results
      resultData.replaceChildren("")

      recipeData.forEach(recipe => {

        const ingredients = recipe.ingredients
        const containsSubstring = ingredients.some(str => str.includes(searchTerm)); //returns true if found
        
        //check for empty or whitespace
        if (/\S/.test(searchTerm) && containsSubstring) {
          console.log(ingredients)

          // Create an img element for the recipe
          const img = document.createElement('img');
          img.src = recipe.image;
          img.alt = recipe.name;  // Add alt text for accessibility
          //create an element for the recipe title
          const recipeTitle = document.createElement('h3')
          recipeTitle.innerText = recipe.name;
          
          resultData.appendChild(img);
          resultData.appendChild(recipeTitle)
          //clear message for ingredients not found
          msg.innerText = "";

        } 
      });

      resultData.appendChild(msg);

    });
  });
}; 




// JavaScript for toggling dark mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mode-toggle');
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';

  // Apply saved mode preference
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled);

    toggleButton.textContent = darkModeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});


const main = () => {
  displayRecipes();         // Load and display recipe images
  searchIngredient();
  // addSubmitListener();     // Attach form submit listener for adding new recipes
};

document.addEventListener('DOMContentLoaded', main); // Ensure DOM is loaded before starting

// Export functions for testing
export {
  displayRecipes,
  // addSubmitListener,
  searchIngredient,
  handleClick,
  main,
};
