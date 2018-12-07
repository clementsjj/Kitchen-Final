# Fridge

- The fridge app, known by a number of names (name pending), will search recipes with a given set of ingredients.
- This app is meant to cut through clutter and fluff, and provide a minimalist user experience.
- It uses React, Redux, and Material UI Components.
- Currently a work in progress, in Alpha.

## Alpha v.01
#### Setup
- Install dependencies
```javascript
npm i
```
- This app uses spoonacular's api from Mashape
  - In order to properly use API data, you must sign up for a key from Mashape. 
- Create /src/actions/api-key.js and include the following code:
```javascript
export const FOOD_API_KEY_HEADER =
  '~~*API KEY HERE*~~';
````
- In /src/actions/index.js, make sure to modify the api-key import to include the correct path
```javascript
import { FOOD_API_KEY_HEADER } from './api-key';
````

#### Search Ingredients

- Search one ingredient at a time, return a list of related ingredients as buttons, select items to add to fridge

#### The Fridge

- The fridge holds a list of the ingredients you wish to search
- You can add ingredients from a common ingredients list to make adding to the fridge easy
  - The common ingredients are listed as an array in /components/CommonIngredients.js
- Once you have added all your ingredients to the fridge, click 'Search Recipes' to bring up a list of 10 recipes in your 'Recipe Book'

#### Recipe Book

- The Recipe Book holds all recipes that are included
---
## Additional Information
### Macro To Dos

- Lazy-load or pagination of Recipe Book Results
- A more comprehensive experience when viewing the recipe, with more details
- A page to view individual recipes if you have the recipe id
- 'About' page and possibly other landing page imporovements
- Clear recipe book and fridge
- Add a backend to allow for login and saving recipes, but the app is also meant to be a stand alone recipe search without the fluff.

### Known Bugs

- CommonIngredients Button will not disable when added to fridge
- Recipe may overflow in modal
- Issues rendering common ingredients buttons and button names in fridge with Chrome. Works ok with Firefox.
- "no results." appears under ingredient search when you have recipes loaded
- Various sized recipe cards returned. Should make consistent size.
