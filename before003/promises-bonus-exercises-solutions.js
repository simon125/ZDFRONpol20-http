/**
 * stwórz funkcje np getPromise która zwróci promise
 * i wywoła funkcje resolve - jeżeli zadanie jest nie jasne spróbuj od zwykłej funkcji która zwraca liczbę
 * potem zamiast zwracania liczby zwróć nowo stworzony obiekt Promise
 *
 * new Promise() // <== to jest stworzenie obiektu promise
 *
 */

// możliwość 1
function getPromise1() {
  return new Promise((resolve) => {
    resolve();
  });
}
// możliwość 2
function getPromise2() {
  const promise = new Promise((resolve) => {
    resolve();
  });
  return promise;
}

/**
 * żeby sprawdzić czy poprzednie zadanie działa musisz
 *
 * wywołać funkcje getPromise()
 * i dodać blok then a w środku wykonsolować jakiś tekst - jeżeli w przeglądarce zobaczysz tekst
 * z consol loga ozacza to że poprawnie wykonałeś/aś ćwiczenia
 * pamiętaj thena masz dodać po wywołaniu funkcji getPromise()
 * // jeżeli potrzebujesz przykładu spórbuj odnaleźć w pliku z notatkami funkcje someFunction()
 *
 *
 */

getPromise1().then(() => {
  console.log("udało się");
});

getPromise2().then(() => {
  console.log("udało się 2");
});

/**
 * promisa jest thenable
 * możemy używać wielu thenów
 *
 * jako ćwiecznie dodaj kolejnego - drugiego - thena
 *
 * a w środku console loga z wybranym tekstem
 *
 * sprawdź rezultat w konsoli
 *
 */

getPromise1()
  .then(() => {
    console.log("udało się");
  })
  .then(() => {
    console.log("i znowu się udało");
  });

/**
 * na pewno wiesz że funkcja może coś zwracać ale również może przyjomwać parametry
 *
 * function jakasFunkcja(parametr1, parametr2){
 *   const wynikDzialania = parametr1 + parametr2;
 *
 *  return wynikDzialania;
 * }
 *
 * funkcja przekazywane w then też mogą zwracać różne rzeczy
 *
 * które następnie są dostępne w parametrze ponadto parametry mozemy prezkazywać również
 * do funkcji resolve( tutaj )  i będą one dostępne w parametrze pierwszego thena
 *
 * jako ćwiczenie
 *
 * dodaj w funkcji getPromise
 *  jakąś warość przy wywołaniu funkcji resolve
 *
 *
 * następnie te dane powinny być dostępne w parametrze thena
 *
 * wykonsoluj ten parametr i sprawdz resultat w przeglądarce
 *
 *
 *
 */

function getPromise() {
  return new Promise((resolve) => {
    resolve("zobaczmy co się stanie");
  });
}

getPromise().then((parametrOdResolva) => {
  console.log(parametrOdResolva);
});

/**
 *
 * tuż wywołaniu console loga w thenie
 * zwróć jakąś inną wartość
 * dodaj kolejnego thena a wnim parametr i console log z tym parametrem
 *
 * sprawdz rezulat w przeglądarce
 *
 */

getPromise()
  .then((parametrOdResolva) => {
    console.log(parametrOdResolva);

    return "test";
  })
  .then((coToJest) => {
    console.log(coToJest);
  });

/**
 *
 * czasem w różnych operacjach asynchronicznych może coś pójść nie tak
 * i program też musi o tym poinformować usera
 *
 * promisy które osłbugują akcje asynchroniczne czasem potrafią wygenerować błąd (rzucić błędem)
 * czasem jeżeli wiemy że ktoś źle korzysta z naszego programy my sami chcemy rzucić taki błąd i
 * wyświetlić stosowny komunikat
 *
 * do tego celu promisy w swojej konsturkcji mają taką funkcje jak reject która powoduje że promisa zakończy się nie powodzeniem
 * wtedy nasze bloki then się już nie wykonają a w zamian wykonają się bloki catch
 *
 * stwórz funkcje getPromiseWithReject która zwraca promise która wywołuje funkje reject
 * pamiętaj funkcja reject jest drugim parameterem w funkcji przekazywanej do konstruktora Promisy
 *
 * czyli new Promise((resolve, reject)=>{
 *
 * })
 *
 * Twoim zadaniem jest wywołanie tej funkcji wenątrz promisy i sprawdzenie rezultatu w konsoli przeglądarki
 *
 */

function getPromiseWithReject() {
  return new Promise((resolve, reject) => {
    reject("zobaczmy co się stanie");
  });
}

getPromiseWithReject();

/**
 * w konsoli powinieneś/naś zobaczyć błąd Uncaught (in promise) - co oznacza nie obsłóżony bład
 * przy tworzeniu wystrzegamy się takich komunikatów w konsoli i staramy się poinformować o tym uzytkownika
 *
 * użyj funkcji catch tak jak robiłęś/aś to z funkcją then
 *
 * i wykonsoluj parametr funkcji catch
 * dodatkowo jako że mamy poinformować o wystąpieniu błędu użyj funkcji alert
 * ze stwoswnym komunikatem
 *
 */

getPromiseWithReject().catch((err) => {
  console.log(err);
  alert(`przepraszamy wystąpił błąd, treść błędu to: ${err}`);
});

/**
 * już trochę tych promis stworzyliśmy użjemy ich do sprawdzenia jak działa metoda finally
 *
 * w tym celu do każdej prmisy którą stworzyłeś/aś
 * dodaj blok finally i przeanalizuj kiedy i czy ta funkcjia się wywołuje
 * możesz użyć zwykłęgo consol.loga w środku zeby się o tym przekonać
 *
 */

getPromiseWithReject()
  .catch((err) => {
    console.log(err);
    alert(`przepraszamy wystąpił błąd, treść błędu to: ${err}`);
  })
  .finally(() => {
    console.log("wykonam się zawsze na końcu nie ważne czy był błąd czy nie");
  });

/**
 * stwórz funkcje która zwróci promise
 *
 * funkcja ta powinna przyjmować jeden parametr - liczbę  // function nazwaFunckji(parametr){ ciało funkcji  }
 *
 * jeżeli liczba z parametru jest parzysta wywołaj funkcje dsotępną w promisie resolve() -
 * warunek ten ma znajdować się w funkcji która jest przekazywana do promisy jako parametr
 *
 * new Promise(()=>{
 *      tutaj ma być warunek który sprawdza liczbę która przychodzi z funkcji która tą promise zwraca
 * })
 *
 * jeżeli liczba jest parzysta wywołaj funkcje resolve
 *
 * i wykonsoluj napis success wewnątrz then-a
 *
 * jeżeli liczba nie jest parzysta wywołaj funkcje reject
 *
 * i wykonsoluj napis error wewnątrz catch-a
 *
 * jezeli nie wiesz jak sprawdzić czy liczba jest parzysta czy nie nie przejumuj się możesz
 * poszukać na stackoverflow - częsta praktyka w pracy codziennej czyli szukanie rozwiązań w internecie m.in. na stackoverflow
 * https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
 *
 *
 */

const tableOfStrings = ["string1", "string2", "string3", "string4", "string5"];

/**
 *
 * stwórz taki łańcuch promis (patrz przykład1 poniżej) który ma tyle thenów żeby wykonać usunięcie wszystkich elementów z tablicy tableOfStrings
 * chodzi o to żeby funkcja w każdym thenie pozbywała się jednego stringa z tablicy i przekazywała tą tablice do kolejnego thena
 * dodatkowo żeby widzieć resultat użyj funkcji console.log() żeby wyświetlić obecny stan tablicy - czyli po prostu sprawdzić czy elmentu się usuwają poprawnie
 *
 * pamiętaj jeżeli funkcja wewnątrz thena coś zwraca to ta zwrócona
 * wartość jest dostępna w kolejnym thenie w parametrze (patrz przykład 2 poniżej)
 *
 * dla zrozumienia przykładów przekopuj kod do kosnoli w przeglądarce i go uruchom żeby sprawdzić rezultat
 */

// przykład1: przekopiuj kod znajdujący się poniżej do konsoli i sprawdź co się stanie

new Promise((resolve) => {
  resolve("promisa się resolvuje");
})
  .then(() => {
    console.log("then nr 1");
  })
  .then(() => {
    console.log("then nr 2");
  })
  .then(() => {
    console.log("then nr 3");
  });

// przykład2: przekopiuj kod znajdujący się poniżej do konsoli i sprawdź co się stanie

new Promise((resolve) => {
  resolve("jakis string");
})
  .then((stringZGory) => {
    console.log(stringZGory); // ten console log powinien wyświetlić wartość 'jakis string'

    return "kolejny string";
  })
  .then((kolejnStringZGory) => {
    console.log(kolejnStringZGory); // ten console log powinien wyświetlić wartość 'kolejny string'

    return "jeszcze następny string";
  })
  .then((jeszczeNastepnyStringZGory) => {
    console.log(jeszczeNastepnyStringZGory); // ten console log powinien wyświetlić wartość 'jeszcze następny string'
  });

/**
 * napisz rozwiązania do zadania poniżej
 */

/**
 * kolejne zadanie podobne do poprzedniego z tą różnicą
 * ze w tablicy możemy mieć zmienną o innym typie np. number (patrz na tablice tableOfStringsWithMistake)
 *
 * znowu zaimplementuj usuwanie stringów każdy kolejny w kolejnym thenie
 * jeżeli w trakcie usuwania program napotka number rzuć błąd używając składni throw new Error('');
 * w razie potrzeby skorzystaj z notatek w pliku promises-bonus-notes.js
 *
 * błąd ten spowoduje że będzie mógł się wykonać blok catch
 * w którym wykonsolujesz informacje że program napotkał na nie obługiwany typ danych
 *
 *
 */
const tableOfStringsWithMistake = [
  "string1",
  "string2",
  3,
  "string4",
  "string5",
];

/**
 *
 * wyzwanie :D
 *
 * napisz funkcje która lsouje spośród tablicy 3 stringów
 * ['papier',  'kamień' , 'nożyce'] jeden z nich i go zwraca;
 * wykorzystaj funkcje getRandomInt do wylosowania liczby od 0 do 2
 * getRandomInt(0,2); // funckja znaleziona na stackoverflow link poniżej
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem() {
  const items = ["papier", "kamień", "nożyce"];

  const randomIndex = getRandomInt(0, 2);

  const randomItem = items[randomIndex];

  return randomItem;
}

/**
 * 1) napisz funkcje która będzie przyjmować od usera 3 możliwe wartości stringa
 * 'papier' |  'kamień' | 'nożyce'
 * w przypadku podania innego stringa zakończ wykonywanie funkcji i wyświetl stosowny komunikat
 *
 *
 *
 * stwórz obiekt promise przy pomocy new Promise
 *
 * w funkcji przekazanej do konstruktora new Promise(()=>{
 * /
 * / tutaj
 * /
 * })
 *
 * zagraj w kółko i krzyżyk - możesz użyć funkcji promt żeby zagrać bezpośrednio z komputerem wpisując to co
 * Ty "losujesz"  'papier' |  'kamień' | 'nożyce'
 *
 * w zależności od tego czy wygrasz czy nie zresolvuj lub zrejectuj Promise
 *
 * dodatkowo napisz dodatkowe 2 bloki then tak żeby gra miała 3 rundy
 *
 * oczywiście złap błąd jeżeli wystąpi używając blok catch
 *
 * ostateczny wynik wyświetl w metodzie finnally
 *
 */
