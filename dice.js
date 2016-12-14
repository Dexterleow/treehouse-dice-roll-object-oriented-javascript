var dice = {
   sides: 6,
   roll: function () {
   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   //this is the owner of function
   return randomNumber;
   }
}

var dice10 = {
   sides: 10,
   roll: function () {
   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   //this is the owner of function
   console.log(randomNumber);
   }
}
