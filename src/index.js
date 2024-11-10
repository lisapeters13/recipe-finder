const handleClick = (recipe) => {
  const detail = document.querySelector('#recipe-detail');
  detail.querySelector('img').src = recipe.image;
  detail.querySelector('.name').textContent = recipe.name;
  detail.querySelector('.ingredients').textContent = recipe.ingredients;
  document.querySelector('#instructions-display').textContent = recipe.instructions; 
};



const displayRecipes = () => {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipeData => {
      const recipeMenu = document.getElementById('recipe-menu');
      recipeData.forEach(recipe => {
        const container = document.createElement('div');  // Create a container for each recipe
        container.className = 'recipe-container';

        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;
        img.addEventListener('click', () => handleClick(recipe));

        const hoverText = document.createElement('p');  // Create hover text element
        hoverText.className = 'hover-text';
        hoverText.style.display = 'none';  // Initially hidden
        hoverText.innerText = recipe.name;

        // Add event listeners for mouseover and mouseout
        img.addEventListener('mouseover', () => {
          hoverText.style.display = 'block';  // Show hover text on hover
        });
        img.addEventListener('mouseout', () => {
          hoverText.style.display = 'none';  // Hide hover text when not hovering
        });

        container.appendChild(img);
        container.appendChild(hoverText);
        recipeMenu.appendChild(container);
      });
    });
};

const searchIngredient = () => {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipeData => {
      const handleSearch = () => {
        const searchTerm = document.getElementById("search-text").value.trim();
        const resultData = document.getElementById('recipe-results');
        resultData.innerHTML = ""; // Clear previous results
        let found = false;

        recipeData.forEach(recipe => {
          if (/\S/.test(searchTerm) &&recipe.ingredients.some(ing => ing.includes(searchTerm))) {
            found = true;
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;
            resultData.appendChild(img);

            const recipeTitle = document.createElement('h3');
            recipeTitle.innerText = recipe.name;
            resultData.appendChild(recipeTitle);
          }
        });

        if (!found) resultData.innerText = "No recipes found with that ingredient.";
      };

      document.getElementById("search-btn").addEventListener('click', handleSearch);
      document.getElementById("search-text").addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
      });
    });
};

// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mode-toggle');
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  document.body.classList.toggle('dark-mode', isDarkMode);
  toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  toggleButton.addEventListener('click', () => {
    const darkModeEnabled = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled);
    toggleButton.textContent = darkModeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});

const main = () => {
  displayRecipes();
  searchIngredient();
};

document.addEventListener('DOMContentLoaded', main);

export {
  displayRecipes,
  searchIngredient,
  handleClick,
  main,
};
