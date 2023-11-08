"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guests1 = ["Naveed", "Saud", "Hussain", "Abrar", "Asad"];
console.log("You can invite only two people for dinner.");
while (Guests1.length > 2) {
    const removedGuest = Guests1.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}
for (const guest of Guests1) {
    console.log(`You're still invited to dinner, ${guest}.`);
}
Guests1.length = 0; // Empty the list
console.log("Empty guest list:", Guests1);
