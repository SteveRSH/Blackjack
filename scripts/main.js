/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// Need to get the Aces to work



function handValue (hand) {
let total = 0;
let weight = 0;
let aces = 0;

for (let i = 0; i < hand.length; i++) {
    if (hand[i] >= 2 && hand[i] <= 10) {
    weight = parseInt(hand[i]);
    total = weight + total;
    }

      else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      weight = 10;
      total = weight + total;
  // weight = parseInt(hand[i]);
      }

//REGARDING LINES 35 -36
//You've already added 11 for each ace in your for loop, so you're not looking to add 11 again. I think you're caught between two different ideas here:
//If you've got an ace in the hand, find out if the total of everything else is less than 11. If so, the ace is worth 11, otherwise 1.
//Start off making each ace worth 11, and subtract 10 of that later if you've busted.
//You've got half of each of those in there now. My suggestion would be to go with the if statements after the loop, but that means you shouldn't do what you're doing inside of the loop. Let me know if you want to clarify in person.
// Also your else {+=1;} isn't valid Javascript; I think you may mean //else {
//  total += 1



      else if (hand[i] === "A") {
      // if ((total + weight) > 21);
      // say ace be the value of 11 or 1
      aces = aces + 1;
      weight = 1;
      total = weight + total;
      }
}
      if (total <=11 && aces > 0) {
      total = total + 10;
    };

return total;
}



// handValue(test);



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
