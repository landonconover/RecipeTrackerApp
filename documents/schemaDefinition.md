#The Schema

I have set up a very simple schema for storing Recipes for the project. 

The following list is what we are storying along with the defined type.

- Recipie Name (String, Required)
- Category (String, enum:['Breakfast', 'Lunch', 'Dinner', 'Desserts'])
- Raiting (Number)
- Directions (Array, Sub Document[Step (Number), Dirction (String)])
- Ingredient (Array, Sub Document[Amount (String), Ingredient (String)])

The Schema file can be found [here.](https://github.com/landonconover/RecipeTrackerApp/blob/master/models/recipes.js)


##Sample JSON Entry

```
{
    "name": "Awesome Pasta",
    "category": "Dinner",
    "rating": "5",
    "directions": [
        {
            "step": 1,
            "direction": "Boil Water"
        },
        {
            "step": 2,
            "direction": "Add Pasta"
        },
      {
            "step": 3,
            "direction": "Cook until it tastes good."
        }
    ],
   "ingredients": [
        {
            "amount": "5 Cups",
            "ingredient": "Water"
        },
        {
            "amount": "1 Cup",
            "ingredient": "Pasta"
        },
     	{
            "amount": "1 Tsp",
            "ingredient": "Salt"
        }
    ]
}
```
