/**
 * dane zapisane w pamięci/w zmiennych możecie o nich też myśleć jako o danych które są trzymane w bazie danych
 * i są dostępne dzięki backendowi
 */
const todos = [
  { id: 1, content: "pouczyć się JSa" },
  { id: 2, content: "zrobić zakupy" },
  { id: 3, content: "uzupełnić ankietę" },
  { id: 4, content: "pooglądać netflixa" },
];
const users = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Joe" },
  { id: 3, name: "Json" },
  { id: 4, name: "Jack" },
];

/* zmienna potrzeba do wykonania zadania */
let results;

/**
 * Obsłużmy to jak należy - promisy - do wszelkiego rodzaju asynchronicznych sytuacji w tym zapytań HTTP używamy
 * Promisów lub API bazującego na promisach dlatego jest to bardzo ważne przed pójściem dalej
 *
 * EXAMPLE TIME
 * co to jest w ogóle promisa?
 * kiedy stosujemy?
 * czy już będe robił/a requesty?
 *
 */

const promise = new Promise((resolve, reject) => {
  const isSuccess = Math.random() > 0.5;
  console.log("zaczynam odliczać");
  setTimeout(() => {
    if (isSuccess) {
      console.log("resolve");
      resolve();
    } else {
      console.log("reject");
      resolve();
    }
  }, 1000);

  isSuccess ? resolve() : reject();
});

promise
  .then(() => {
    console.log("request po dane");
    const data = [1, 2, 3];

    return "pierwszy then";
  })
  .then((somestring) => {
    console.log(somestring);

    return somestring;
  })
  .then((somestring) => {
    console.log(somestring + "1");
  });

/*
 ********************************************************************************************************************
 *
 * Podobnie jak w poprzednich sekcjach "before" stwórz funkcje getResults która będzie
 * na podstawie przekazywanego parametru przypisywała kolekcje do zmiennej results.
 * Funckja ma być opóźniona podobnie jak w poprzednich przykładach jednak ma ona również zwracać Promise.
 *
 * istotna różnica niż w poprzednich ćwiczeniach 🔑 "jednak ma ona również zwracać Promise"
 *
 * po stworzeniu funkcji wywołaj ją 📢 przetestuj różne parametry
 * 👇🏻 kod napisz pod komentarzem
 */

//  const getResults = (dataYouWant) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (dataYouWant === "todos") {
//         results = todos;
//       } else if (dataYouWant === "users") {
//         results = users;
//       }

//       resolve();
//     }, 1000);
//   });
// };

/*
 *
 * ⭐⭐ Rozszerz funkcje getResults o opcję wyciągania i przypisywania jednego rekordu z kolecji do zmiennej results
 * czyli po wywołaniu funkcji getResults chce wykonsolować tylko jeden element tablicy
 * TEN KTÓRY ZPRECYZUJE W PARAMETRZE a nie całą tablice
 * dodatkowo nie zmieniaj ilosci przekazywanych parametrów możesz zmienić to co przekazujesz ale ilość parametrów
 * ma zostać taka sama + musi to być dalej string
 *
 * np niech przekazywany parametr wygląda następująco  "users/2"
 * gdzie 2 jest to id użytkownika czyli w konsoli powinniśmy widzieć użytkownika z id === 2
 *
 *
 * po stworzeniu funkcji wywołaj ją 📢 przetestuj różne parametry
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 * ⭐⭐⭐ poniższe rozwiazania zawiera powtórzenia a w programowaniu staramy się unikać
 * powtórzeń, spróbuj wydzielic funkcje tak żeby pozbyć się ifów lub niektórych wyrażeń
 */

const getResults = (dataYouWant) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (dataYouWant.includes("todos")) {
        results = todos;

        if (dataYouWant.includes("/")) {
          const id = dataYouWant.split("/")[1];
          results = todos.find((todo = todo.id === id));
        }
      } else if (dataYouWant.includes("users")) {
        results = users;

        if (dataYouWant.includes("/")) {
          const id = dataYouWant.split("/")[1];
          results = users.find((user = user.id === id));
        }
      }

      resolve();
    }, 1000);
  });
};

/**
 * part2:
 * swtórz następną funkcję która wyświetla w konsoli zmienną results
 *
 * ps: zadanie zostało wykonane na rzecz folderu before001
 * jednak użycie będzie się nieco różniło
 */

const displayResultsOnTheScreen = (results) => {
  console.table(results);
};

getResults("todos").then(() => {
  displayResultsOnTheScreen(results);
});

/**
 * part1
 * żeby trochę dodać życia do naszej aplikacji dodajmy możliwość wprowadzenia parametru 'dataYouWant'
 * do tego celu użyj funkcji wbudowanej w przeglądarkę prompt - wywołanie tej funkcji przypisz do zmiennej
 * którą potem przekażemy do funkcji getResults
 *
 * part2
 * dodajmy obsługę nieistniejącej kolekcji i wyświetlmy stosowny komunikat
 * tzn. jezeli user wpisze słowo inne niż 'todos' lub 'users' wyświetlmy np alert
 *
 * hint 1💡 w tym celu trzeba przerobić funkcje getResults i wykorzystać funkcje reject
 * (drugi parametr w funkcji która sama jest parameterm w konstruktorze Promisy - JavaScript jest dziwny)
 *
 * 👇🏻 kod napisz pod komentarzem
 */

const dataYouWant = prompt("Jaką kolekcję chcesz wyświetlić?");

const getResults1 = (dataYouWant) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataYouWant === "todos") {
        results = todos;
      } else if (dataYouWant === "users") {
        results = users;
      } else {
        return reject("Nie ma takiej kolekcji");
      }
      resolve();
    }, 1000);
  });
};

getResults(dataYouWant)
  .then(() => {
    displayResultsOnTheScreen(results);
  })
  .catch((err) => {
    console.error(err);
  });
