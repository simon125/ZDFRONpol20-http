/**
 * dane zapisane w pamięci/w zmiennych możecie o nich też myśleć jako o danych które są trzymane w bazie danych
 * i są dostępne dzięki backendowi
 */
const todos = [
  "pouczyć się JSa",
  "zrobić zakupy",
  "uzupełnić ankietę",
  "pooglądać netflixa",
];
const users = ["Jane", "Joe", "Json", "Jack"];

/* zmienna potrzeba do wykonania zadania */
let results;

/**
 * part1:
 * stwórz funkcję o nazwie getResults która przyjmuje jeden parametr typu string
 * ciało funckji powinno zawierać następującą logikę
 * jeżeli przekazany parametr ma wartość "todos" przypisz tablice todos (patrz linia 5) do zmiennej results
 * jeżeli przekazany parametr ma wartość "users" przypisz tablice users (patrz linia 6) do zmiennej results
 * przypisanie powinno nastąpić po 5 sekundach
 *
 * ⭐ dla chętnych obsłuż przypadek gdzie nie ma danych dla danego parametru (np dla parametru posts nie mamy danych)
 * w tej sytuacji przypisz pusta tablice do zmiennej results i wyświetl błąd w konsoli
 *
 * 🏠 ⭐⭐ do domu z dwoma gwiazdkami - dodaj symulację wystąpienia błędu tzn funkcja powinna mieć mechanizm który daje
 * 50% szans na to że funkcja przypisze dane do zmiennej results lub rzuci błąd
 * błąd trzeba "złapać" i wyświeltić komunikat w konsoli
 * hint 1💡 użyj funkcji Math.random
 * hint 2💡 użyj bloku try catch do złapania błędu
 *
 * po stworzeniu funkcji wywołaj ją 📢 przetestuj różne parametry
 * 👇🏻 kod napisz pod komentarzem
 */

// podstawowa implementacja

// const getResults = (dataYouWant) => {
//   setTimeout(() => {
//     if (dataYouWant === "todos") {
//       results = todos;
//     } else if (dataYouWant === "users") {
//       results = users;
//     }
//   }, 5000);
// };

// implementacja z ⭐

// const getResults = (dataYouWant) => {
//   setTimeout(() => {
//     if (dataYouWant === "todos") {
//       results = todos;
//     } else if (dataYouWant === "users") {
//       results = users;
//     } else {
//       results = [];
//       console.error("Sorry! There is no data");
//     }
//   }, 5000);
// };

// implementacja z 🏠 ⭐⭐

const getResults = (dataYouWant) => {
  setTimeout(() => {
    const isError = Math.random() > 0.5;
    try {
      if (isError) {
        throw new Error("Coś poszło nie tak");
      }

      if (dataYouWant === "todos") {
        results = todos;
      } else if (dataYouWant === "users") {
        results = users;
      } else {
        results = [];
        console.error("Sorry! There is no data");
      }
    } catch (error) {
      console.error(error);
    }
  }, 5000);
};

/**
 * part2:
 * swtórz następną funkcję która wyświetla w konsoli zmienną results
 * wywoałaj funkcje jedna pod drugą tak żeby tworzyły logiczny ciąg
 *
 * // pobieranie danych
 * getResults('todos');
 *
 * // wyświetlanie danych
 * twojaFunckja();
 *
 * ps: są dwie możliwości wykonania tej funkcji
 */

/** option 1 - mniej reużywalna odnosząca się bezpośrednio do zmiennej results
const displayResultsOnTheScreen = () => {
  console.table(results);
};
*/

/** option 2 - bardziej reużywalna z parametrem
  const displayResultsOnTheScreen = (resultsToDisplay) => {
     console.log(resultsToDisplay);
  };
*/

getResults("todos");

displayResultsOnTheScreen();

/**
 * part3:
 * mamy pewien problem w konsoli widzimy wartość undefined 🤔 a chcieliśmy widzieć
 * resultat czyli naszą tablice z imionami
 *
 * mamy do czynienia z asynchronicznością ⌛⏲️⌚
 * funkcja getResults zapisuje dane do stanu po 5 sekundach - !!! tak też działają funkcję
 * które pobierają dane z backendu z opóźnieniem (asynchronicznie) !!!
 *
 * żeby temu zaradzić musimy wykonać kod który wyświetla resultaty w momencie gdy te dane już są
 * czyli w naszym przypadku po 5s
 * Pomysły?
 *
 * słowa kluczowe 🔑 "wykonać kod [...] w momencie gdy te dane już są"
 *
 * potencjalne 3 rozwiązania w tym jedno bardzo brzydkie jedno średnie i dobre
 * a gdzie najlepsze ❓❓❓❓ callback hell ale o tym później
 */

/**
 * ❌ brzydkie
 * 👇🏻 kod napisz pod komentarzem
 */

function displayAfter6Seconds() {
  setTimeout(displayResultsOnTheScreen, 6000);
}

displayAfter6Seconds();

/**
 * 🤔 średnie
 * wywołanie funkcji wyświetlającej w momencie gdy przypisujemy rezultaty do stanu
 * 👇🏻 kod napisz pod komentarzem
 */

const getResults1 = (dataYouWant) => {
  setTimeout(() => {
    if (dataYouWant === "todos") {
      results = todos;
    } else if (dataYouWant === "users") {
      results = users;
    } else {
      results = [];
      console.error("Sorry! There is no data");
    }
    displayResultsOnTheScreen();
  }, 5000);
};

getResults1();

/**
 * ✅ dobre
 * rozszerzenie funkcji getResults o 2 parametr tzw. callback czyli funkcja którą można przekazać jako parametr
 * 👇🏻 kod napisz pod komentarzem
 */

const getResults2 = (dataYouWant, callback) => {
  setTimeout(() => {
    if (dataYouWant === "todos") {
      results = todos;
    } else if (dataYouWant === "users") {
      results = users;
    }

    callback();
  }, 5000);
};

getResults2("todos", displayResultsOnTheScreen);
