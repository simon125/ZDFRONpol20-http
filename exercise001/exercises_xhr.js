/**
 *
 * Pierszy request HTTP
 *
 * napisz kod który robi zapytanie/request/(strzał do backu) HTTP typu GET pod następujący URL/endpoint
 * a następnie wyświetli resultat w konsoli. Do rozwiażania użyj konstruktora XMLHttpRequest
 *
 * btw XML vs JSON?
 *
 * https://jsonplaceholder.typicode.com/todos/1
 *
 * Co to jest jsonplaceholder.typicode.com❓
 * darmowe otwarte restowe (REST) API z którego można korzystać w celach edukacyjnych/testowych
 *
 */

const _URL = "https://jsonplaceholder.typicode.com/posts/";

// load(_URL, (response) => {
//   console.log(response);
// });

/**
 * utwórz funckje deleteItem która wykonuje zapytanie HTTP typu DELETE
 * endpoint na który trzeba wykonać request to /posts/:id gdzie id to number
 * co to jest endpoint ❓❓❓
 *
 * /posts/1/comments
 * /albums/1/photos
 * /users/1/albums
 * /users/1/todos
 * /users/1/posts
 *
 * sprawdź jakie są dostępne eventy na które można reagować
 * eventy ❓❓❓
 *
 * utwórz prosty handling na wystąpienie errora zrób to w ciele funkcji onreadystatechange
 * błąd zasymuluj wpisując nie prawidłowy URL
 * do wykonania zadania będziesz potrzebował pola status
 *
 */

/**
 * stwórz funkcje która pobiera komentarze posta określnego w parametrze, jako parametr przekaż postId zgodnie z wymaganiami API
 * w celu ożywienia apki możesz użyć funkcji promot która pobierze od Ciebie postId
 */

/**
 * https://jsonplaceholder.typicode.com/comments?postId=1
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
 *
 */

document.querySelector("#collectionSelect").addEventListener("change", (e) => {
  const _collectionName = e.target.value; // todos || posts || albums
});

document.querySelector("#userId").addEventListener("change", (e) => {
  const _userId = e.target.valueAsNumber;
});

document.querySelector("#submit").addEventListener("click", () => {
  /**
   * Miejsce na twój kod
   * kod zadziała jak user kliknie przycisk submit
   */

  console.log("click");
});
