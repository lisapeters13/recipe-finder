
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



## Core Deliverables

As a user, I can:

- See all recipe images in the `div` with the id of `recipe-menu`. When the page
  loads, fire a function called `displayRecipes` that requests the data from the server
  to get all the recipe objects. Then,
  display the image for each of the recipes using an `img` tag inside the
  `#recipe-menu` div.
- Click on an image from the `#recipe-menu` div and fire a callback called `handleClick`
  to see all the info about that
  ramen displayed inside the `#recipe-detail` div (where it says
  `insert comment here` and `insert rating here`).
- Attach a submit even listener to the `new-recipe` form using a function called `addSubmitListener`.
  After the submission, create a new ramen and add it to the`#recipe-menu` div. The new recipe does not need to persist; in other words, if you refresh the page, it's okay that the new recipe is no
  longer on the page.

** Attention here **: Your program should have a main() function that invokes `displayRecipes` and `addSubmitListener` after the DOM has fully loaded and start the program logic.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I can:

- See the details for the first ramen as soon as the page loads (without
  clicking on an image)
- Update the rating and comment for a ramen by submitting a form. Changes should
  be reflected on the frontend. No need to persist. You can add this HTML to the
  `index.html` file to create the edit form:

