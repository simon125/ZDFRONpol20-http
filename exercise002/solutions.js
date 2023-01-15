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

showSpinner();
hideSpinner();

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

const getPosts = (id) => {
  let url = "https://jsonplaceholder.typicode.com/posts";

  if (id) {
    url = `${url}/${id}`;
  }

  return fetch(url);
};

// getPosts();
// getPosts(40);

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

const createUser = (name, age) => {
  const newUser = {
    name,
    age,
  };

  return fetch(waszUrl, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// createUser("Test123", 50);

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

const danaMokowa = {
  userId: 1239472983740,
  title: "moj post",
  body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores",
};

function createBlogPost(newBlogPost) {
  // newPost to jest obiekt z polami title userId i body

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlogPost),
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", config);
}

// createBlogPost(danaMokowa);

new Promise(() => {
  console.log(123);
});

// document.querySelector("#createPost").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const cleanFormFields = () => e.target.reset();
//   const formData = new FormData(e.target);
//   const formProps = {
//     content: "wasza treaś posta",
//     title: "Tytuł",
//     selectId: 12,
//   };

//   console.log(formProps);

//   const { userSelect: userId, title, content: body } = formProps;

// const newBlogPost = {
//   userId,
//   title,
//   body,
// };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(newBlogPost),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }

//       throw new Error(response.status);
//     })
//     .then((data) => {
//       console.table(data);

//       daneZBackEndu = data;
//     })
//     .catch((err) => {
//       console.log("Cos poszło nie tak");
//       console.log(err);
//     });

//   cleanFormFields();
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
 *
 *
 */

//  const newBlogPost = {
//   userId,
//   title,
//   body,
// }

const editBlogPost = (id, updatedBlogPost) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedBlogPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  const { userSelect: userId, title, content: body } = formProps;

  const newBlogPost = {};

  if (userId) {
    newBlogPost.userId = userId;
  }

  if (title) {
    newBlogPost.title = title;
  }

  if (body) {
    newBlogPost.body = body;
  }

  if (userId || title || body) {
    editBlogPost(5, newBlogPost);
  }

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

onDeleteClick((id) => {
  fetch(`https://jsonplaceholder.typicode.com/poadasdsts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        showToast("Udało się", "green");
      }
      throw new Error("");
    })
    .catch(() => {
      showToast("Nie udało się", "red");
    });

  console.log(id);
});
