function whatToDrink(time){
    var drink ;
          switch (time) {
            case "morning":
              drink = "Tea";
              break;
            case "evening":
              drink = "Shake";
              break;
            default:
              drink="Water";   
          }
  	return drink;
}
console.log(whatToDrink("morning")) //Tea
console.log(whatToDrink("evening")) //Shake
console.log(whatToDrink("night"))   //Water
console.log(whatToDrink("daytime")) //Water