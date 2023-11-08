"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = ["alice", "bob", "jane", "john", "eric"];
const new_users = ["John", "carol", "Eric", "David", "Samantha"];
for (let new_user of new_users) {
    const isUsernameTaken = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
