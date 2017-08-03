/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
let total = 0;
let weight =0;

for (let i = 0; i < hand.length; i++) {
    if (hand[i] > 2 && hand[i]) < 10) {
    weight = parseInt(hand[i]);
    total = weight + total;
    }

      else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      weight = 10;
      total = weight + total;
  // weight = parseInt(hand[i]);
      }

      else if (hand[i] === "A") {
      // if ((total + weight) > 21);
      // say ace be the value of 11 or 1
      weight = 11;
      total = weight + total;
      }
}
      if (total+11<=21) {total+=11;}
      else {+=1;}

return total;
}



// handValue(test);



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
