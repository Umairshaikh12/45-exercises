// changing guest list: u just heard that on of ur guest can not make the dinner, so u need to set
// out a new set of invitation. u'll have to think of someone else to invite
// start with ur program from from ex14.Add a print statement at the end of ur program 
// stating the name of the guest who can not make it
// modify ur list replacing the name of the guest who can not make it with the name of the new person
// u are inviting
// print a second set of invitation MessageChannel, one for each person who is still in ur list
var guestList = ["saba", "saira", "anu"];
var guestnotComing = guestList.splice(0, 1);
console.log(" ".concat(guestnotComing, " can not make it"));
// guestList.unshift("aisha");
// console.log(guestList);
// guestList.forEach(guest => {
//     console.log(` Dear ${guest}, ur invited to dinner`);
// })
// OR
// let message = " i am inviting u for dinner"
// console.log(guestList[0] + message);
// console.log(guestList[1] + message);
// console.log(guestList[2] + message);
