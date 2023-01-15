// FUNKCJE UTILITY KTÓRE SŁUŻĄ DO INTERAKCJI Z UI
// showToast();
// showSpinner();
// hideSpinner();
// onDeleteClick();
/**
 *
 * No dobrze ale stety/niestety requestów za pomocą XMLHttpRequest już się nie robi w praktyce
 * powstaly do tego przyjemniejsze narzędzia i API jednym z nich jest fetch API które jest wbudowane w przeglądarke
 *
 *
 * funckja fetch umożliwia robienie requestów i ZWRACA PROMISE która ułatwia obsługę asynchroniczności
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
 * .then((response) => response.json())
 * .then((json) => console.log(json));
 *
 */

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/**
 * utwórz funkcje getPosts która pobiera posty ze znanego Ci już API https://jsonplaceholder.typicode.com/posts
 * do wykonania zadania użyj nowo poznanej funkcji fetch
 *
 *
 * hint 1💡 niech funckja getPosts zwraca wywołanie funkcji fetch dzięki temu będzie można użyć then przy wywołaniu
 * funcji getPosts
 *
 * part 2
 * dodaj "opcjonalny" parametr do funkcji który może służyć do sparametryzowania requestu
 * czyli po ludzku dodaj parametr i ifa który sprawdza czy ten parametr jest
 * jeżeli nie ma zrób request pod ten url https://jsonplaceholder.typicode.com/posts
 * jeżeli id jest to doklej tego IDka do końca adresu URL (konkatenacja stringów)
 * https://jsonplaceholder.typicode.com/posts/${parametr} // w tym przypadku id postu
 *
 */

/**
 * jak użyć fetcha do stworzenia rekordu?
 *
 * metoda POST + JSON.stringify(body) + nałówke content type
 *
 * przykład na nowym api
 */

/*
POST
https://fine-pear-cow-tux.cyclic.app/users
*/

/**
 * utwórz funkcje createPost która służy do swtorzenia postu w tym celu
 * będziesz musiał użyć zapytania typu POST oraz przekazać parametry do stworzenia postu
 * zerknijcie do dokumentacji jak to dokładnie zrobić
 * do wykonania zadania użyj nowo poznanej funkcji fetch
 *
 * https://jsonplaceholder.typicode.com/guide/  sekcja Creating a resource
 *
 * do wykonania zadania możesz użyć danych wypełnionych w formularzu lub też danych mockowych
 *
 * czym są dane mockowe ❓❓❓
 * 
 * 
 * 
{
"userId": 10,
"id": 98,
"title": "laboriosam dolor voluptates",
"body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
}
 *
 */

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const cleanFormFields = () => e.target.reset();
  const formData = new FormData(e.target);

  console.log(formData);

  cleanFormFields();
});

/**
 *
 * czas na edycje rekordu - w tym celu stwórz funkcje editPost która będzie wykonywała zapytanie typu PUT
 * do funkcji editPost musisz podać pola obiektu które chcesz edytować
 *
 * po więcej informacji zerknij do dokumentacji API
 * https://jsonplaceholder.typicode.com/guide/   sekcja Updating a resource
 *
 * do wykonania zadania możesz użyć danych wypełnionych w formularzu lub też danych mockowych
 *
 */

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const cleanFormFields = () => e.target.reset();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);

  /**
   * Miejsce na twój kod
   *
   *
   *
   */
});

/**
 *
 * zasubmitowałeś/aś formularz ale zanim wykorzystasz dane do tworzenia rekordu
 * system musi wykonać request jest on już zrobiony przy pomocy funkcji processData
 * który zwraca dane w promise które możesz użyć do stworzenia requestu
 *
 * wykorzystaj dane które zwraca funkcja processData
 * i stwórz nowy post robiąc podoby request jak w jednym z poprzednich zadań
 *
 * potrzebny url💡
 * https://jsonplaceholder.typicode.com/posts
 *
 */

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const cleanFormFields = () => e.target.reset();
  processData(e).then((d) => console.log(d));

  /**
   * Miejsce na twój kod
   *
   *
   *
   */
});

/**
 *
 * na ekranie mamy listę postów wyświetloną w tabelce z takimi kolumnami jak post id tytuł oraz przycisk
 * który potencjalnie może służyć do usuwania postów
 * żeby jednak usunąć go musimy zrobić request do usuwnia
 *
 * usuwanie ma się wykonywać po kliknieciu przycisku do tego celu stworzyłem funkcje która obsługuje
 * "przyciskanie przycisków" w tabelce przyjmuje ona funckje calback zachęcam do poexperymentowania
 * może jest tam ukryty parametr? spróbuj sprawdzić sam :)
 *
 * onDeleteClick(() => console.log('cześć'));
 *
 * hint 💡 do wykonania tego zadania będziesz musiał/ała stworzyć request DELETE po taki
 * https://jsonplaceholder.typicode.com/posts/:postId URL gdzie postId jest dynamiczny i ma być przekazywny
 * przez parametr
 *
 *
 */

onDeleteClick((id) => {
  console.log(id);
});

/**
 * DO DODATKOWYCH ĆWICZEŃ UŻYJ UI
 */

/**
 * Praktyka własna
 *
 * jako frontend deweloper będziesz pracować/ała z różnymi listami i filtrami które pozwolą na pobranie
 * tylko intetresujących dla usera rekordów
 *
 * poniżej znajdują się trzy bloki (nie musisz wiedzieć co one robią ale tldr obsługują elementy/inputy na
 * stronie i dają Ci wartości z którymi możesz pracować)
 * wykorzystaj miejsca na twój kod i stwórzcie przykładowe scenariusze
 *
 * np.
 * stwórz zmienną w global scopie na przechowywanie collectionName i userId
 * wykonaj request w momencie gdy user kliknie przycisk (patrz 3 blok)
 *
 * zachęcam do skorzystania z guide https://jsonplaceholder.typicode.com/guide/
 * praca z dokumentacją to nieodłączona część pracy programisty
 *
 *
 * /posts/1/comments
 * /albums/1/photos
 * /users/1/albums
 * /users/1/todos
 * /users/1/posts
 */

document.querySelector("#collectionSelect").addEventListener("change", (e) => {
  const collectionName = e.target.value; // todos || posts || albums

  /**
   * Miejsce na twój kod
   * kod zadziała jak user zmieni wartosć w inpucie
   *
   *
   *
   */
});

document.querySelector("#userId").addEventListener("change", (e) => {
  const userId = e.target.valueAsNumber;

  /**
   * Miejsce na twój kod
   * kod zadziała jak user zmieni opcje w selectie
   *
   *
   *
   */
});

document.querySelector("#submit").addEventListener("click", () => {
  /**
   * Miejsce na twój kod
   * kod zadziała jak user kliknie przycisk submit
   *
   *
   */
});
