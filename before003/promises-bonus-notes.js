/**
 * Jak wygląda i do czego służy Promisa?
 *
 * Promisa to oiekt do obsługi asynchroniczności w JSie
 *
 * w aplikacji możemy spotkać różne "sytuacje" które są asynchroniczne
 *
 * np.
 * 1) requesty http czyli "sygnały/wiadomości" wysyłane z naszej aplikacji do serwera
 * w celu pobrania np jakichś danych które chcemy wyświetlić w oknie przeglądarki
 *
 * 2) niektóre funkcje w przeglądarce/javasrcipcie są asynchroniczne np
 * setTimeout na późniejszym etapie poznacie inne funkcje asynchroniczne
 * często będą to funkcjonalności w użytych bibliotekach (biblioteka - kawałki kodu które są wydzielone do
 * oddzielnych plików które często trzeba pobrać - jeżeli mało Ci to mówi będzie na pewno o tym na nastepnych zajęciach bądź blokach)
 *
 *
 * jak wygląda i jak używać promis
 *
 * pomise tworzymy tak jak obiekt na podstawie klasy czyli przy użyciu słówka kluczowego "new" i "Promise"
 *
 **/

new Promise();

/**
 *
 * jako parametr promisa przyjmuje funkcje
 *
 */

new Promise(() => {
  /**
   * ciało funkcji
   */
});

// lub

new Promise(function () {
  /**
   * ciało funkcji
   */
});

/**
 *
 * parametr ten czyli funkcja ma z kolei swoje dwa parametry (tak to już działa trzeba się z tym pogodzić i zapamiętać)
 *
 * parametrem pierwszym jest funkcja "resolve" drugim funkcja "reject"
 *
 *
 */

new Promise(function (resolve, reject) {
  /**
   * ciało funkcji
   */
});

/**
 *
 * parametry te czyli funkcje - jak to funkcje mogą być wywołane
 *
 * wywołane kiedy ❓
 *
 * aaa to zależy od naszej implementacji i kiedy chcemy to wywołać
 *
 * czyli ❓
 *
 * rozpatrzmy 2 sytuacje
 *
 * 1) robimy request http - on może się zakończyć sukcesem lub niepowodzeniem
 * następnie w zależności od tego wywołumey resolve() na sukcesie  reject() na nie powodzeniu
 *
 * nie powodzenie może nastąpić z wielu powodów kilka z nich to:
 *
 * - źle wykonujemy request
 * - jest jakiś błąd na backendzie
 * - mamy problem z połączeniem internetowym
 *
 * sukces występuje gdy np:
 * - dostaniemy poprawne dane
 *
 * ⭐⭐ te przypadki będziemy obsługiwać jak będziemy się uczyć o robieniu requestów
 *
 * 2) funkcje które są w JS lub w blibliotekach JSowych rozpatrzmy przykład funkcji setTimeout
 *
 * setTimeout()❓❓ dla przypomnienia funkcja setTimeout przyjmuje 2 parametry
 *
 * 1) funckja która jest wykonywana po określonym czasie w drugim parametrze
 * 2) delayTime czas w milisekundach po którym ma się wykonać funkcja z pierwszego parametru
 *
 */

new Promise(function (resolve, reject) {
  setTimeout(() => {
    const rezultatZwroconyPrzezFunckja = funkcjaKtoraMozeSieUdacLubNie();

    if (rezultatZwroconyPrzezFunckja === "success") {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

/**
 *
 * promise możemy przypisać do zmiennej
 *
 */

const promisa = new Promise(function (resolve, reject) {
  /**
   * ciało funkcji
   */
});

/**
 *
 * Promisy są thenable tzn że możemy używać metod tj:
 * - then()
 * - catch()
 * - finally()
 * na rekrutacjach czasem pojawiają się pytania jakie metody ma promisa
 *
 * wszystkie te metody w parametrze przyjmują funkcje które wykonują się w następujątch momentach
 *
 * then() jeżeli zostanie wywołana funkcja resolve() (patrz notatki wyżej) lub jeżeli wykona się poprzedzający then()
 *
 * 2 przykłady poniżej (przykłady dla thena przykłady dla catcha i finally są po thenie)
 *
 */

// 1

new Promise(function (resolve, reject) {
  resolve();
}).then(() => {
  /**
   * ta funcja wywoła się wtedy gdy w promisa1 zostanie wywołana funckja resolve()
   */
});

// 2

const promisa1 = new Promise(function (resolve, reject) {
  resolve();
});

promisa1
  .then(() => {
    /**
     * ta funcja wywoła się wtedy gdy w promisa1 zostanie wywołana funckja resolve()
     */
  })
  .then(() => {
    /**
     * ta funcja wywoła się po udanym wykonaniu poprzedniej
     */
  });

/**
 * 2 przykłady dla catcha
 *
 * catch może się wykonać wtedy gdy zostanie wywołana funkcja reject bądź wystąpi jakiś błąd
 * moze on być rzucony automatycznie lub manualnie przy użyciu throw new Error();
 */

new Promise(function (resolve, reject) {
  reject();
}).catch(() => {
  /**
   * ta funcja wywoła się wtedy gdy w promisa1 zostanie wywołana funckja reject()
   */
});

const promisa2 = new Promise(function (resolve, reject) {
  resolve();
});

promisa2
  .then(() => {
    /**
     * ta funcja wywoła się wtedy gdy w promisa2 zostanie wywołana funckja resolve()
     */

    throw new Error("Coś poszło nie tak");
    // błąd ten może być rzucony bo np implementacja jakiejś funkcji bedzie miała
    // ifa który sprawdza parametry jeżeli są złe to rzuca error
  })
  .catch(() => {
    /**
     * ta funcja wywoła się tuż po rzuceniu błędem - patrz throw new Error("Coś poszło nie tak");
     */
  });

/**
 * przykład dla finally
 *
 * finally wykouje się zawsze jak wszystkie poprzednie funkcje się już wykonały
 * nie zależnie czy były to theny czy catche
 */

new Promise(function (resolve, reject) {
  resolve();
})
  .then(() => {
    /**
     * ciało funkcji
     */
  })
  .then(() => {
    /**
     * ciało funkcji
     */
  })
  .catch(() => {
    /**
     * ciało funkcji
     */
  })
  .catch(() => {
    /**
     * ciało funkcji
     */
  })
  .finally(() => {
    /**
     * ten blok wykona się po wszystkich poprzednich - zwróć uwagę jak promisy są "chainowane"/łańcuchowane/łączone i ile ich jest - nie ma ograniczeń
     */
  });

/**
 * Czasem jest sytuacja gdy musimy wykonać kilka akcji asynchroniczncyh na raz i wykonać jakiś kod gdy wszystkie się zakończą
 * Promisy umożliwiają nam to dzięki metodzie statycznej Promise.all();
 *
 * Promise.all(tablicaPromisów) przyjmuje w parametrze tablice z promisami i też jest "thenable"
 */

const promisa01 = new Promise((resolve) => {
  resolve();
});

const promisa02 = new Promise((resolve) => {
  resolve();
}).then(() => {
  return 123;
});

const promisa03 = new Promise((resolve) => {
  resolve();
});

Promise.all([
  promisa01,
  promisa02,
  new Promise((resolve) => {
    resolve();
  }),
  promisa03,
]).then(() => {
  /**
   * ten blok wykona się jak wszystkie promisy się "zresolvują" (tak się mówi w żargonie JSowym) czyli zostanie wywołana funkcja resolve()
   */
});

/**
 *
 * Promise może być zwrócona przez zwykłą funkcje dzięki temu ta "zwykła funkcja" jest "thenable"
 * !!!często się korzysta w praktyce z takich rozwiązań!!!
 */

function someFunction() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

someFunction()
  .then(() => {
    /**
     * ciało funkcji
     */
  })
  .catch(() => {
    /**
     * jak się coś nie uda w poprzednim thenie lub samej funkcji someFunction wykona sie ten blok
     */
  });
