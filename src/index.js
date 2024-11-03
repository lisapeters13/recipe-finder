const handleClick = (recipe) => {
  document.querySelector('#recipe-detail img').src = recipe.image;
  document.querySelector('#recipe-detail .name').textContent = recipe.name;
  document.querySelector('#recipe-detail .ingredients').textContent = recipe.ingredients;

  // Corrected: Update the right elements for instructions 
  document.querySelector('#instructions-display').textContent = recipe.instructions; 
};
// const addSubmitListener = () => {
//   const form = document.getElementById('new-ramen');
//   form.addEventListener('submit', (event) => {
//     // event.preventDefault();  // Prevent form submission

//     const newRamen = {
//       name: event.target['name'].value,
//       restaurant: event.target['restaurant'].value,
//       image: event.target['image'].value,
//       rating: event.target['rating'].value,
//       comment: event.target['comment'].value
//     };

//     // Create new ramen img element
//     const img = document.createElement('img');
//     img.src = newRamen.image;
//     img.alt = newRamen.name; 
//     img.addEventListener('click', () => handleClick(newRamen)); 
//     document.getElementById('ramen-menu').appendChild(img);

//     form.reset(); // Reset form

//     // After creating new ramen, automatically update the ramen detail section
//     handleClick(newRamen);  // Ensures newly created ramen is displayed immediately
//   });
// };


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
      });
    });
};

//get content of search box
const getIngredient = () => {
// Get the search button element
const searchButton = document.getElementById("search-btn"); 

function searchRecipe(ingredient) {
  fetch(`http://localhost:3000/recipes?ingredient=${ingredient}`) // Adjust API endpoint if needed
    .then(response => response.json())
    .then(filteredRecipes => {
      displaySearchResults(filteredRecipes);
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
    });
}

// Function to initiate the search for recipes based on an ingredient
function searchRecipe(ingredient) {
  fetch(`http://localhost:3000/recipes?ingredient=${ingredient}`) // Adjust API endpoint if needed
    .then(response => response.json())
    .then(filteredRecipes => {
      displaySearchResults(filteredRecipes);
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
    });
}


// Add an event listener for the "click" event
searchButton.addEventListener("click", function() { //add second lister for "return key"
  // Code to execute when the button is clicked
  const searchTerm = document.getElementById("search-text").value;
  console.log("Searching for:", searchTerm); 

  // Perform your search logic here
});
}

//search by ingredients
const searchRecipe = () => {

} 

const main = () => {
  displayRecipes();         // Load and display recipe images
  getIngredient();
  // addSubmitListener();     // Attach form submit listener for adding new recipes
};

document.addEventListener('DOMContentLoaded', main); // Ensure DOM is loaded before starting

// Export functions for testing
export {
  displayRecipes,
  // addSubmitListener,
  getIngredient,
  handleClick,
  main,
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
