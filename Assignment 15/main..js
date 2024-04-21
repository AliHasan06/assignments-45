var guestList = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. ".concat(guestList[i], ",\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n"));
}
var absentGuest = 'Imran Khan';
var newGuest = 'Kamran Tessori';
guestList[0] = newGuest;
console.log("Mr. ".concat(absentGuest, " is not coming to the party."));
