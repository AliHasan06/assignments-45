let guestList: string[] = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]},\n\nIt is our pleasure to invite you to our party.\n\nThank You!\n\n`);
}

let absentGuest = 'Imran Khan'; 
let newGuest = 'Kamran Tessori';

guestList[0] = newGuest;

console.log(`Mr. ${absentGuest} is not coming to the party.`);


