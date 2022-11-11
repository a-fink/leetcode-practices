// You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by
// ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes). Return an array where each element is a list beginning with the
// ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted alphabetically, and the result array should be sorted alphabetically
// by the names of the ingredients.

// Example
//     For
//       dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//                 ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//                 ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//                 ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
//     the output should be
//       solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                           ["Salad", "Salad", "Sandwich"],
//                           ["Sauce", "Pizza", "Quesadilla", "Salad"],
//                           ["Tomato", "Pizza", "Salad", "Sandwich"]]

//     For
//       dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
//                 ["Chicken Curry", "Chicken", "Curry Sauce"],
//                 ["Fried Rice", "Rice", "Onions", "Nuts"],
//                 ["Salad", "Spinach", "Nuts"],
//                 ["Sandwich", "Cheese", "Bread"],
//                 ["Quesadilla", "Chicken", "Cheese"]]
//     the output should be
//       solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                           ["Chicken", "Chicken Curry", "Quesadilla"],
//                           ["Nuts", "Fried Rice", "Salad"],
//                           ["Onions", "Fried Rice", "Pasta"]]

// Input/Output
//     [execution time limit] 4 seconds (js)

//     [input] array.array.string dishes
//     An array of dishes, where dishes[i] for each valid i contains information about the ith dish: dishes[i][0] is the name of the dish, and all the elements after it are the ingredients of that dish. Both the dish name and the ingredient names consist of English letters and spaces. It is guaranteed that all dish names are different. It is also guaranteed that the ingredient names for any one dish are also pairwise distinct.
//     Guaranteed constraints:
//     1 ≤ dishes.length ≤ 500,
//     2 ≤ dishes[i].length ≤ 10,
//     1 ≤ dishes[i][j].length ≤ 50.

//     [output] array.array.string
//     The array containing the grouped dishes.
function solution(dishes) {
    // make a hash to hold the array of dishes (value) by ingredients (key)
    const hash = new Map();

    // go through the 2D array of dishes
    dishes.forEach(arr => {
        // get dish from 0th index then go through remaining ingredients in index 1 < length
        const dish = arr[0];
        for(let i = 1; i < arr.length; i++){
            const ingredient = arr[i];

            // attempt to get array of dishes with that ingredient from the hash
            const dishesWithIngredient = hash.get(ingredient);

            // if it exists, add current dish to array and update hash
            if(dishesWithIngredient){
                dishesWithIngredient.push(dish);
                hash.set(ingredient, dishesWithIngredient);
            }
            // otherwise add ingredient and array with current dish to hash
            else{
                hash.set(ingredient, [dish]);
            }
        }
    });

    // once everything is hashed make a results array
    const results = [];

    // get an array of the keys and alphabatize it
    const ingredients = Array.from(hash.keys()).sort();
    console.log(ingredients);

    // go through the array of keys and pull values from hash
    ingredients.forEach(el => {
        const dishesArray = hash.get(el);

        // if the value has length >= 2 alphebatize it (built in sort defaults to alphabetical sorting)
        // make array with key and then spread alphebatized values into it & push into results array
        if(dishesArray.length >= 2){
            dishesArray.sort();
            const comboArray = [el, ...dishesArray];
            results.push(comboArray);
        }
    });

    // return results array
    return results;
}
