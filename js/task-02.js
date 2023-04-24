const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredients = array => {
  return array.map(ingredient => {
    const itemName = document.createElement('li');
    itemName.textContent = ingredient;
    itemName.classList.add('item');
    return itemName;
  })
};

const elements = createIngredients(ingredients);
ingredientsList.append(...elements);
