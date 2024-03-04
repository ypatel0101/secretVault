//We will need a message that will show up to the user, so we will have to create a variable and assign a message  to it.
// We will need to setup the code for the lock combos that you will need to enter which is 10-40-39
//Code to make the vaultCombination will include the 3 const 
// to display the message and combo we will need to make the alert code

const mainMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

const comboOne = 5+5;
const comboTwo = 80/2;
const comboThree = 37+2;

const vaultCombination = comboOne + " - " + comboTwo + " - " + comboThree;

alert(mainMessage + vaultCombination);
