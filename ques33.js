"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animals = ['Dog', 'Cat', 'Rabbit'];
console.log('These animals share a common characteristic:');
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log('Any of these animals would make a great pet!');
