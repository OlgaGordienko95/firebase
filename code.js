// Initialize Firebase
( function() {
  window.onload = function() {
    const form = document.forms.register;
    form.addEventListener("submit", event=> {
      event.preventDefault();

      const login = event.target.elements[0].value;
      const password = event.target.elements[1].value;

      firebase
      .auth()
      .createUserWithLoginAndPassword(login, password)
      .then (user => {
            console.log(user);
      })
      .catch ( err => {
          console.log(err);
      });
    });
  };
})();
