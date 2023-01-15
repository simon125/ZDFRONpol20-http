// FUNKCJE UTILITY KTÓRE SŁUŻĄ DO INTERAKCJI Z UI
// renderUsersList();
// onCreateFormSubmit();
// onUpdateFormSubmit();
// showToast();
// showSpinner();
// hideSpinner();
// onDeleteClick();
// onUserDeleteClick

const getAndRenderTheListOfUser = () => {
  showSpinner();
  fetch("https://fine-pear-cow-tux.cyclic.app/users")
    .then((r) => {
      return r.json();
    })
    .then((d) => {
      renderUsersList(d.users);
      showToast("udalo się pobrać listę", "green");
    })
    .catch(() => {
      showToast("nie udalo się pobrać listy", "red");
    })
    .finally(() => {
      hideSpinner();
    });
};

getAndRenderTheListOfUser();

onUpdateFormSubmit((d) => {
  fetch(`https://fine-pear-cow-tux.cyclic.app/users/${d.id}`, {
    method: "PATCH",
    body: JSON.stringify(d),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.ok) {
        return r.json();
      }

      throw new Error("");
    })
    .then(() => {
      showToast("udalo się", "green");
      getAndRenderTheListOfUser();
    })
    .catch(() => {
      showToast("nie udalo się", "red");
    });
});

onCreateFormSubmit((d) => {
  fetch("https://fine-pear-cow-tux.cyclic.app/users", {
    method: "POST",
    body: JSON.stringify(d),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.ok) {
        return r.json();
      }

      throw new Error("");
    })
    .then(() => {
      showToast("udalo się", "green");
      getAndRenderTheListOfUser();
    })
    .catch(() => {
      showToast("nie udalo się", "red");
    });
});

onUserDeleteClick((id) => {
  fetch(`https://fine-pear-cow-tux.cyclic.app/users/${id}`, {
    method: "DELETE",
  })
    .then((r) => {
      if (r.ok) {
        return r.json();
      }

      throw new Error("");
    })
    .then(() => {
      showToast("udalo się usunąć", "green");
      getAndRenderTheListOfUser();
    })
    .catch(() => {
      showToast("nie udalo się usunać", "red");
    });
});
