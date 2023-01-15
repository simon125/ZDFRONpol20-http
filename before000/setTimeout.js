/**
 * ❗️ISTOTNY TEMAT❗️
 * czy wiemy jak wykonać kod w JS z opóźnieniem ❓
 * czy wiemy jak korzystać z funkcji setTimeout ❓
 */

// eg.1

setTimeout(() => {
  // ciało tej funkcji wykona się raz po ok. 5 sekundach
  console.log("Jesteś zwycięzcą!");
}, 5000);

// eg.2

// const handleFunction = () => {
//   console.log("Jesteś zwycięzcą!");
// };

// setTimeout(handleFunction, 5000);

// eg.3

// setTimeout(() => handleFunction(), 5000);

// JAK TO ZASTOPOWAĆ❓

// const timeoutId = setTimeout(() => {
//   console.log("ja się nie wykonam!");
// }, 5000);

// clearTimeout(timeoutId);
