/// Classes

// class Car {
//   constructor() {
//     this.isStarted = false;
//     this.forward = 0;
//     this.speed = 0;
//     this.gear = 0;
//   }

//   start() {
//     this.isStarted = true;
//   }

//   stop() {
//     this.isStarted = false;
//   }

//   accelerate() {
//     if (this.isStarted) {
//       this.speed += 10;
//     }
//   }

//   decelerate() {
//     if (this.isStarted) {
//       this.speed -= 10;
//     }
//   }

//   changeGear(gear) {
//     this.gear = gear;
//     this.forward = this.gear * 10;
//     this.speed = this.speed * this.gear;
//   }
// }

// // Inheritence

// class Toyota extends Car {
//     constructor () {
//         super();
//         this.gear = 'automatic';
//         this.name = 'corrola'
//     }
// }


// const car = new Car();
// const toyota  = new Toyota()

// console.log({car , toyota});


// const carElement = document.querySelector('.car');
// const startButton = document.getElementById('startButton');
// const stopButton = document.getElementById('stopButton');
// const accelerateButton = document.getElementById('accelerateButton');
// const decelerateButton = document.getElementById('decelerateButton');

// startButton.addEventListener('click', () => {
//   car.start();
//   carElement.style.left = '10px';
//   console.log(car);
// });

// stopButton.addEventListener('click', () => {
//   car.stop();
//   carElement.style.left = '10px';
//   console.log(car);
// });

// accelerateButton.addEventListener('click', () => {
//   car.accelerate();
//   carElement.style.left = `${10 + car.speed}px`;
//   console.log(car);
// });

// decelerateButton.addEventListener('click', () => {
//   car.decelerate();
//   carElement.style.left = `${10 + car.speed}px`;
//   console.log(car);
// });


// class ImageRenderer extends Blob {
//     constructor () {
//         super()
//         this.
//     }
// }
 

