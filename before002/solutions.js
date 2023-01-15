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
 * stwórz klase o nazwie DataManager która będzie miała metodę
 * getResults która będzie przyjmować string jako parametr (np. 'todos' lub 'users')
 * metoda będzie przypisywać odpowiednią tablicę/kolekcję (todos, users)
 * na podstawie parametru do zmiennej results
 *
 * metoda ma wykonać akcje z opóźnieniem określonym w konstruktorze klasy (określony ma być czas)
 *
 * np
 * class Animal {
 *  name;
 *  constructor(name){
 *    this.name = name;
 *  }
 * }
 *
 * po stworzeniu klasy utwórz jej instancje (stwórz obiekt na jej podstawie) 📢 przetestuj metodę getResults
 * 👇🏻 kod napisz pod komentarzem
 */

// class DataManager {
//   constructor(delayTime = 5000) {
//     this.delayTime = delayTime;
//   }

//   getResults(dataYouWant) {
//     setTimeout(() => {
//       if (dataYouWant === "todos") {
//         results = todos;
//       } else if (dataYouWant === "users") {
//         results = users;
//       }
//     }, this.delayTime);
//   }
// }

// const dataManager = new DataManager(5000);

// dataManager.getResults("todos");

/**
 *
 * Żeby się przekonać czy poprzednie działa musimy wyświetlić dane
 * w tym celu utwórz klase o nazwie DataLogger
 * która będzie miało metodę statyczną displayData
 * metoda ta powinna przyjąć w parametrze to co chce wyświetlić/wylogować do konsoli
 * 👇🏻 kod napisz pod komentarzem
 */

class DataLogger {
  previousData;

  static displayData(dataToDisplay) {
    console.table(dataToDisplay);
  }
}

// dataManager.getResults("todos");

// DataLogger.displayData(results);

/**
 * Znowu tak asynchroniczność❓❓
 * Żeby wyświetlić dane dodajmy kolejny parametr do naszej metody getResults w klasie DataManager
 * parametrem powinna być funkcja callback która będzie wywoływana w momencie gdy dane zostaną już
 * przypisane do zmiennej results
 * 👇🏻 kod napisz pod komentarzem
 */

// class DataManager {
//   constructor(delayTime = 5000) {
//     this.delayTime = delayTime;
//   }

//   getResults(dataYouWant, callback) {
//     setTimeout(() => {
//       if (dataYouWant === "todos") {
//         results = todos;
//       } else if (dataYouWant === "users") {
//         results = users;
//       }
//       callback();
//     }, this.delayTime);
//   }
// }

// const dataManager = new DataManager(5000);

// dataManager.getResults("todos", () => DataLogger.displayData(results));

/**
 * Operacje na danych
 *
 * żeby jeszcze bardziej przećwiczyć klasy oraz nabrać ogłady w przekazywaniu parametrów
 * rozszrzmy naszą klase DataManager o metody do updatowania/edycji wybranego rekordu
 * oraz metode usuwania wybranego elementu
 *
 *
 * przykładowe wywołanie metody updatującej:
 *
 * dataManager.updateRecord('todos', 'pouczyć się JSa', 'pouczyć się CSSa', () => DataLogger.displayData(results))
 *
 * opis parametrów:
 * 'todos' to nazwa kolekcji
 * 'pouczyć się JSa' istniejący napis
 * 'pouczyć się CSSa' nowy napis który ma zastąpić 'pouczyć się JSa'
 *
 * pamiętaj że metoda ma się wykonać asynchornicznie z opóźnieniem określonym w konstruktorze
 *
 *
 * dataManager.removeRecord('todos', 'pouczyć się JSa', () => DataLogger.displayData(results))
 *
 *
 * ⭐ dla chętnych - stwórz metodę pomocniczą w klasie DataManager która wyciągnię logikę opóźniającą
 * ma to na celu "oczyszczenie" kodu z powtórzeń zasada DRY
 *
 * ⭐⭐ dla chętnych - dodaj obsługę błędów i nie poprawnych parametrów,
 * jeżeli podamy w parametrze nie istniejący rekord (czyli chcemy usunąć lub edytować nie istniejący element w liście)
 * wykonsoluj błąd i przerwij działanie metody
 * hint 1💡 do sprawdzenia czy elementy istnieją możesz skorzystać z metod obiektu Array .find lub .indexOf
 *
 * 👇🏻 kod napisz pod komentarzem do testowania napisanego kodu użyj konsoli w przeglądarce
 */

class DataManager {
  constructor(delayTime) {
    this.delayTime = delayTime;
  }

  delayMethod(callback) {
    setTimeout(callback, this.delayTime);
  }

  getResults(dataYouWant, callback) {
    this.delayMethod(() => {
      if (dataYouWant === "todos") {
        results = todos;
      } else if (dataYouWant === "users") {
        results = users;
      }
      callback();
    });
  }

  updateRecord(collectionName, recordToUpdate, updatedRecord, callback) {
    this.delayMethod(() => {
      let collectionToUpdate;
      if (collectionName === "todos") {
        todos = collectionToUpdate.map((record) =>
          record === recordToUpdate ? updatedRecord : record
        );
        results = todos;
      } else if (collectionName === "users") {
        users = collectionToUpdate.map((record) =>
          record === recordToUpdate ? updatedRecord : record
        );
        results = todos;
      }
      callback();
    });
  }

  removeRecord(collectionName, recordToDelete, callback) {
    this.delayMethod(() => {
      let collectionToUpdate;
      if (collectionName === "todos") {
        todos = collectionToUpdate.filter(
          (record) => record !== recordToDelete
        );
        results = users;
      } else if (collectionName === "users") {
        users = collectionToUpdate.filter(
          (record) => record !== recordToDelete
        );
        results = users;
      }

      callback();
    });
  }
}

const dataManager = new DataManager(1000);

dataManager.updateRecord("todos", "pouczyć się JSa", "pouczyć się CSSa", () => {
  DataLogger.displayData(results);
});
