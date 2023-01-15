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
 * Obsłużmy to jak należy - ✅promisy✅ - do wszelkiego rodzaju asynchronicznych⌚ sytuacji w tym zapytań HTTP używamy
 * Promisów lub API (co oznacza to słowo w tym kontekście❓) bazującego na promisach dlatego jest to bardzo ważne przed pójściem dalej
 *
 * EXAMPLE TIME
 * co to jest w ogóle promisa?
 * kiedy stosujemy?
 * czy już będe robił/a requesty?
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 */

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

// const getResults = (dataYouWant) => {
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
 * part2:
 * swtórz następną funkcję która wyświetla w konsoli zmienną results
 *
 * ps: zadanie zostało wykonane na rzecz folderu before001
 * jednak użycie będzie się nieco różniło
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 * part1
 * żeby trochę dodać życia do naszej aplikacji dodajmy możliwość wprowadzenia parametru 'dataYouWant' - czyli tego który przekażemy później do funkcji
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
 *
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 *
 * OK mamy jakąś kolekcje (users albo todos) a co jeżeli chcemy zrobić kilka operacji
 * na raz albo jedna po drugiej?
 *
 *
 * czyli np chcemy zedytować jakiś rekord, inny chcemy usunąć itd jak to "ograć"??
 *
 * stówrz funkcje opżnioną przez setTmieout o nazwie createTodo która przyjmie parametr typu string - będzie to nasz nowy
 * todos w koleckji czyli zmiennej która przechowuje tablice na górze pliku
 *
 *
 * ⭐ tak samo swtórz funkcje która edytuje wybrany rekord, zdaje się na Ciebie ile parametrów będziesz potrzebować 🤔🤔🤔
 *
 * 🏠⭐⭐ stwórz funkcje usuwającą wybrany rekord z wybranej kolekcji spróbuj ograniczyć się do jednego parametru
 *
 */

// const createTodo = () => {
//   return new Promise((res, rej) => {
//     /**
//      * tutuaj ma być setTimeout
//      * a w środku dodanie nowego elementu do tablicy todos
//      * Pamiętaj todos jest teraz obiektem a nie tylko stringiem!!
//      * pole nowego obiektu będzie pochodzić z parametru przekazanego do tej funckji
//      * a id (też mamy takie pole w obiekcie todo) masz stworzyć sam np używając Math.random
//      */
//   });
// };

/**
 *
 * stwórz funckje updateTodo która przyjmuje id todosa który chcemy edytować i jego nową wartośc
 *
 * opcja1) updateTodo({})
 * opcja2) updateTodo(id, nowyContent)
 *
 * funckja ma być opóźniona
 * i "wsadzona" w promisa
 *
 */
