
Welcome to my recipe finder. Here you can find recipes based on ingredients you already have. 

## Design 
![alt text](<recipe_finder.drawio (1).png>)
## Setup

- Run `npm install` to install the dependencies.
- Run `json-server --watch db.json` to get the backend started
- Run `npm install -g live-server` to install live-server globally
- Run `live-server` to start the frontend in browser
- Write your code in the `index.js` file
- As you are writing your code out and completing the deliverables ensure that it works on the DOM and passes the tests by running `npm test` in a new terminal in the same directory

## Endpoints

Your base URL for your API will be: `http://localhost:3000`

The endpoints you may need are:

- GET `/recipe`
- GET `/recipe/:id`





As a user, I can:

- See all recipe images in the `div` with the id of `recipe-menu`. When the page
  loads, fire a function called `displayRecipes` that requests the data from the server
  to get all the recipe objects. Then,
  display the image for each of the recipes using an `img` tag inside the
  `#recipe-menu` div.
- Click on an image from the `#recipe-menu` div and fire a callback called `handleClick`
  to see all the info about the recipes displayed inside the `#recipe-detail` div
- Click on search bar to search for a recipe containing the ingredients in the search bar and it will display image and name of the recipe in the 
 `#results-data` div.

