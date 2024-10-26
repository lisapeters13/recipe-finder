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

const main = () => {
  displayRecipes();         // Load and display recipe images
  // addSubmitListener();     // Attach form submit listener for adding new recipes
};

document.addEventListener('DOMContentLoaded', main); // Ensure DOM is loaded before starting

// Export functions for testing
export {
  displayRecipes,
  // addSubmitListener,
  handleClick,
  main,
};
