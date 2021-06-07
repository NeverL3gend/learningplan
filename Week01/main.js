// const circle = {
//   radius: 1, //Key: Value pair
//   location: {
//     x : 1,
//     y: 1
//   },
//
//   draw: function() { //draw is  a method
//     console.log('draw');
//   }
// };


//Factory Function
function createCircle(radius){
  return {
    radius,
    draw: function(){
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

//Contructor Function

function Circle(radius) {
  //this is referencing to the object that is executing this piece of code 
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);
