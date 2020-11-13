const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var i=0;
while (i<= ingredients.length) {
   console.log(ingredients[i]);
   i++;
}

for(var i=0; i<=ingredients.length; i++){
   console.log(ingredients[i]);
}

for(var i=ingredients.length; i>0; i--){
   console.log(ingredients[i]);
}