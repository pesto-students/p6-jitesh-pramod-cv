```
var plane = {
    companyName : 'Airbus',
    model : '380 ',
    getPlane: function() {
        var completeName = this.companyName + ' ' + this.model;
        return completeName;
    }
};

var planeName = function() {
    console.log('Going in my Fav plane ' + this.getPlane());
};

var SnacksOnPlane = function(food, snacks) {
    console.log(this.getPlane() + 'Serves good ' + food + ' and ' + snacks);
};

//Bind
var logPlane = planeName.bind(plane); 
logPlane(); 

//Call and Apply 
SnacksOnPlane.call(plane,'sushi', 'chips'); 
pokemonName.apply(pokemon,['sushi', 'chips']); 

