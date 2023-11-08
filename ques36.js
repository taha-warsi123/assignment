"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Karachi is in Pakistan
describe_city('New York', 'USA'); // New York is in USA
describe_city('Sydney'); // Sydney is in Unknown
