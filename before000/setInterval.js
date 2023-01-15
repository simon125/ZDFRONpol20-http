/**
 * 🎉🎉🎉 BONUS 🎉🎉🎉
 * czy wiemy jak wykonać kod w JS w interwale czasowym czyli np co 5 sekund❓
 * czy wiemy jak korzystać z funkcji setInterval ❓
 */

function getSomeData() {
  console.log("Robie request do backendu");
}

// eg.1

setInterval(() => {
  getSomeData();
}, 5000);

// eg.2

// function handlerFunction() {
//   console.log("Jesteś zwycięzcą!");
// }

// setInterval(handlerFunction, 5000);

// JAK TO ZASTOPOWAĆ❓

let counter = 0;

const intervalId = setInterval(() => {
  console.log("Jesteś zwycięzcą!");
  counter++;

  if (counter === 50) {
    clearInterval(intervalId);
  }
}, 50);
