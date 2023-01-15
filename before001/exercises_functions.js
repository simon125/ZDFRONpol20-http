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
 * jeżeli przekazany parametr ma wartość "users" przypisz tablice users (patrz linia 11) do zmiennej results
 * przypisanie powinno nastąpić po 1 sekundach
 *
 * getResults('todos');
 *
 ********************************************************************************************************************
 * ⭐ dla chętnych obsłóż przypadek gdzie nie ma danych dla danego parametru (np dla parametru posts nie mamy danych)
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

// function getResults(cokolwiek) {
//   // dataYouWant 'users'  albo 'todos' albo cokolwiek innego
//   // stwórz ifa który sprawdza czy dataYouWant jest równy users czy todos
//   // jeżeli jakiś warunek jest true przypisz te dane do zmiennej results

//   setTimeout(() => {
//     if (cokolwiek === "users") {
//       results = users;
//     }

//     if (cokolwiek === "todos") {
//       results = todos;
//     }

//   }, 1000);
// }

/**
 * part2:
 * swtórz następną funkcję która wyświetla w konsoli zmienną results
 * wywoałaj funkcje jedna pod drugą tak żeby tworzyły logiczny ciąg
 *
 * // pobieranie danych
 * getResults('todos');
 *
 * // wyświetlanie danych
 * twojaFunckja(); // displayResultsOnTheScreen
 *
 * ps: są dwie możliwości wykonania tej funkcji
 */

/**
 * opcja 1 - mniej reużywalna - bardziej specyficzna - hint💡bez parametru
 * 👇🏻 kod napisz pod komentarzem
 */

// function displayResultsOnTheScreen() {
//   // wyświetlenie zmiennej results
//   console.table(results);
// }

/**
 * opcja 2 - bardziej reużywalna - clean code - hint💡z parametrem
 * 👇🏻 kod napisz pod komentarzem
 */

const displayResultsOnTheScreen = (resultsToDisplay) => {
  // wyświetlenie zmiennej results
  console.table(resultsToDisplay);
};

// getResults("todos");
// displayResultsOnTheScreen(results);

/**
 * part3:
 * mamy pewien problem w konsoli widzimy wartość undefined 🤔 a chcieliśmy widzieć
 * resultat czyli naszą tablice z imionami
 *
 * mamy do czynienia z asynchronicznością ⌛⏲️⌚
 * funkcja getResults zapisuje dane do stanu po 2 sekundach - !!! tak też działają funkcję
 * które pobierają dane z backendu z opóźnieniem (asynchronicznie) !!!
 *
 * żeby temu zaradzić musimy wykonać kod który wyświetla resultaty w momencie gdy te dane już są
 * czyli w naszym przypadku po 2s
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

// getResults("todos");
// setTimeout(() => {
//   displayResultsOnTheScreen(results);
// }, 3000);

/**
 * 🤔 średnie
 * wywołanie funkcji wyświetlającej w momencie gdy przypisujemy rezultaty do stanu
 * 👇🏻 kod napisz pod komentarzem
 */

function getResults(cokolwiek) {
  // dataYouWant 'users'  albo 'todos' albo cokolwiek innego
  // stwórz ifa który sprawdza czy dataYouWant jest równy users czy todos
  // jeżeli jakiś warunek jest true przypisz te dane do zmiennej results

  setTimeout(() => {
    if (cokolwiek === "users") {
      results = users;
    }

    if (cokolwiek === "todos") {
      results = todos;
    }

    displayResultsOnTheScreen(results);
  }, 1000);
}

/**
 * ✅ dobre
 * rozszerzenie funkcji getResults o 2 parametr tzw. callback czyli funkcja którą można przekazać jako parametr
 * 👇🏻 kod napisz pod komentarzem
 */

const displayResultsOnTheScreen3 = (data) => {
  console.log(data);
};

function getResults(dataYouWant, callback) {
  setTimeout(() => {
    if (dataYouWant === "users") {
      results = users;
    }

    if (dataYouWant === "todos") {
      results = todos;
    }
    callback(results);
  }, 2000);
}

getResults("users", displayResultsOnTheScreen3);
