// FUNKCJE UTILITY KTÓRE SŁUŻĄ DO INTERAKCJI Z UI
// showToast();
// showSpinner();
// hideSpinner();
// onDeleteClick();
/**
 *
 * Wróćmy na chwilę do starego dobrego XMLHttpRequesta ALE w nowej odsłonie
 *
 * Axios - biblioteka do wykonywania zapytań HTTP
 * jest zaimplementowana na bazie XMLHttpRequesta
 * bardzo szeroko stosowana w branży nie tylko na froncie
 *
 * składniowo przypomina fetcha aczkolwiek może być nawet trochę łatwiejszy
 *
 * https://axios-http.com/docs/intro
 *
 * axios.get('/user?ID=12345')
 * .then(function (response) {
 *   // handle success
 *  console.log(response);
 *  })
 * .catch(function (error) {
 *   // handle error
 *   console.log(error);
 *  })
 *
 */

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((response) => {
//     if(response.ok){
//       return response.json();
//     }

//   })
//   .then((data) => {
//     console.log(data);
//   }).catch(function (error) {
//     // handle error
//     console.log(error);
//   }).finally(()=>{

//   });

// axios
//   .get("https://jsonplaceholder.typicode.com/posts/347r943j9834j298")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("skończyłem");
//   });

// const editBlogPost = (id, updatedBlogPost) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(updatedBlogPost),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// axios.post('https://jsonplaceholder.typicode.com/posts',{
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// }).then((response)=>{
// return response.josn()
// })

// axios.delte('https://jsonplaceholder.typicode.com/posts').then((response)=>{

// })

// axios.patch('https://jsonplaceholder.typicode.com/posts').then((response)=>{

// })

// axios.put('https://jsonplaceholder.typicode.com/posts').then((response)=>{

// })

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
 * czyli po ludzku dodaj parametr ifa który sprawdza czy ten parametr jest
 * jeżeli nie ma zrób request pod ten url https://jsonplaceholder.typicode.com/posts
 * jeżeli id jest to doklej tego IDka do końca adresu URL (konkatenacja stringów)
 * https://jsonplaceholder.typicode.com/posts/${parametr} // w tym przypadku id postu
 *
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
 */

const createPost = (newPost) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts/", newPost);
};

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // const formProps = Object.fromEntries(formData);
  const cleanFormFields = () => e.target.reset();

  const title = formData.get("title");
  const content = formData.get("content");
  const userId = formData.get("userSelect");

  // const postToCreate = { title, content, userId };
  const postToCreate = { title: title, content: content, userId: userId };

  showSpinner();
  createPost(postToCreate)
    .then(() => {
      showToast("Dodałeś nowy post");
    })
    .catch(() => {
      showToast("Coś poszło nie tak");
    })
    .finally(() => {
      hideSpinner();
      cleanFormFields();
    });

  /**
   * Miejsce na twój kod
   *
   *
   *
   */
});

// document.querySelector("#createPost").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formProps = Object.fromEntries(formData);
//   console.log(formProps);

//   /**
//    * Miejsce na twój kod
//    *
//    *
//    *
//    */
// });

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
 *
 */

// document.querySelector("#createPost").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formProps = Object.fromEntries(formData);
//   console.log(formProps);
//   /**
//    * Miejsce na twój kod
//    *
//    *
//    *
//    */
// });

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

// document.querySelector("#createPost").addEventListener("submit", (e) => {
//   e.preventDefault();

//   processData(e);

//   /**
//    * Miejsce na twój kod
//    *
//    *
//    *
//    */
// });

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
