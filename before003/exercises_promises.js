/**
 * dane zapisane w pamięci/w zmiennych możecie o nich też myśleć jako o danych które są trzymane w bazie danych
 * i są dostępne dzięki backendowi
 */
// const todos = [
//   { id: 1, content: "pouczyć się JSa" },
//   { id: 2, content: "zrobić zakupy" },
//   { id: 3, content: "uzupełnić ankietę" },
//   { id: 4, content: "pooglądać netflixa" },
// ];
// const users = [
//   { id: 1, name: "Jane" },
//   { id: 2, name: "Joe" },
//   { id: 3, name: "Json" },
//   { id: 4, name: "Jack" },
// ];

// /* zmienna potrzeba do wykonania zadania */
// let results;

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

// const getResults = (dataYouWant) => {
//   // 'users' albo 'todos'
//   return new Promise((resolve, reject) => {
//     /**
//      * TUTUAJ BĘDZIE AKCJA ASYNCHRONICZNA
//      */
//     setTimeout(() => {
//       if (!["users", "todos"].includes(dataYouWant)) {
//         reject();
//       }

//       if (dataYouWant === "users") {
//         results = users;
//       } else if (dataYouWant === "todos") {
//         results = todos;
//       }

//       resolve();
//     }, 2000);
//   });
// };

// getResults("ksdjfhskjdfh")
//   .then(() => {
//     // w tym miejscu jesteśmy pewni że w zmiennej results są userzy
//     console.table(results);
//   })
//   .catch(() => {
//     alert("Wprowadziłeś zły parametr");
//   });

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

const todos = [
  { id: 1, content: "pouczyć się JSa" },
  { id: 2, content: "zrobić zakupy" },
  { id: 3, content: "uzupełnić ankietę" },
  { id: 4, content: "pooglądać netflixa" },
];
let users = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Joe" },
  { id: 3, name: "Json" },
  { id: 4, name: "Jack" },
];

const posts = [
  { id: 1, name: "kafdhaudshf" },
  { id: 2, name: "siuhfiurhui" },
  { id: 3, name: "sldvjodirjv" },
];

const cars = [
  { id: 1, name: "opel" },
  { id: 2, name: "volskvagen" },
  { id: 3, name: "bmw" },
];

/* zmienna potrzeba do wykonania zadania */
let results;

const getResults = (dataYouWant) => {
  return new Promise((resolve, reject) => {
    /**
     * TUTUAJ BĘDZIE AKCJA ASYNCHRONICZNA
     */
    setTimeout(() => {
      const [collectionName, id] = dataYouWant.split("/");

      // const data = dataYouWant.split("/");
      // console.log(data[0]) // 'users'
      // console.log(data[1]) // '3'

      if (collectionName === "users") {
        if (id !== undefined) {
          results = users.find((user) => user.id === id * 1);
          // results = users.find(user=>user.id === Number(id));
        } else {
          results = users;
        }
      } else if (collectionName === "todos") {
        results = todos;
      }

      resolve();
    }, 2000);
  });
};

/**
 * bardziej zaawansowana ale toszkę czystsze podejście do casu
 */

const getResults1 = (dataYouWant) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const [collectionName, id] = dataYouWant.split("/");
      // const collections = {
      //   users: users,
      //   todos: todos,
      //   cars: cars,
      //   posts: posts,
      // };
      const collections = {
        users,
        todos,
        cars,
        posts,
      };

      const collectionToProcess = collections[collectionName]; // collections['posts'] =>
      results = !id
        ? collectionToProcess
        : collectionToProcess.find((item) => item.id === id * 1);

      resolve();
    }, 2000);
  });
};

getResults1("posts/2").then(() => {
  console.log(results);
});

// getResults("todos/1").then(() => {
//   console.log(results);
// });

// getResults("users");

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
 * stwórz funkcje która dodaje rekord do kolekcji np addTodo/addUser
 * niech funkcja zwraca nam promise w której będzie wykonywana operacja dodawania rekordu
 *
 * na początku dodawania rekordu wyświetl spinner wywołując funkcje showSpinner
 *
 * jak akcja się powiedzie lub nie schowaj spinner funckją hideSpinner
 *
 * dodatkowo poinformuj użytkownika wyświetlając komunikat czy akcja się powiodła czy nie showToast('twoja wiadomość')
 *
 *
 * niech funckja addTodo/addUser przyjmuje w parametrze obiekt nowego rekordu
 *
 * przykładowe: const newTodo = {id: Math.random(), content: 'tresc zadania'};
 *
 * przykładowe wywołanie funkcji:
 * addTodo(newTodo).then(()=>{
 * miejsce na Twój kod
 * }).catch(()=>{
 * miejsce na Twój kod
 * }).finally(()=>{
 * * miejsce na Twój kod
 * });
 *
 *
 * ⭐⭐ dodatkowo zasymulujsytuację w której wystąpił błąd możesz to osiągnąć używając funckji Math.random();
 * i obsłużyć blok catch
 *
 */

// const todoContent = prompt("Podaj co masz do zrobienia");

const addTodo = (newTodo) => {
  showSpinner();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(newTodo); // tutaj jest bug

      Math.random() > 0.5
        ? resolve("udało Ci sie gratuluje")
        : reject({ message: "coś źle wpisałeś", status: 404 });
    }, 2000);
  });
};

const addUser = (newUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(newUser);
      resolve(newUser);
    }, 2000);
  });
};

const userToAdd = {
  id: Math.random(),
  name: "Simon",
};

addUser(userToAdd)
  .then((newUser) => {
    console.log(`hura udało się dodałeś ${newUser.name}`);
    console.log(users);
  })
  .catch(() => {
    console.log("nie udało się");
  })
  .finally(() => {
    console.log("skończyłem z tym");
  });

// new Promise((resolve) => {
//   resolve("czesc");
// }).then((msg) => {
//   console.log(msg);
// });

// addTodo({ id: Math.random(), content: todoContent })
//   .then((successMessage) => {
//     showToast(successMessage);
//     console.log(todos);
//   })
//   .catch((errorMessage) => {
//     showToast(errorMessage.message);
//   })
//   .finally(() => {
//     hideSpinner();
//   });

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

// showSpinner();
// hideSpinner();

// showToast("Hej udało się");

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

const deleteUser = (userToDelete) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newUsers = users.filter((user) => user.id !== userToDelete);
      users = newUsers;
      res();
    }, 2000);
  });
};

deleteUser(3).then(() => {
  console.log(users);
});

// deleteUser({id: 3, name: 'Json'});

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

let userIdToDelete = prompt("Wpisz id do usunięcia (od 1 do 4");
const deleteUser1 = (userIdToDelete) => {
  return new Promise((resolve, reject) => {
    users = users.filter((user) => user.id !== userIdToDelete * 1);
    resolve();
  });
};

deleteUser1(userIdToDelete).then(() => {
  showToast(`Udało się usunąć użytkownika`);
  console.log(users);
});
