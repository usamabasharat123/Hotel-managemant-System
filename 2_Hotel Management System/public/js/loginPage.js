function login() {
  const username = document.querySelector("#user").value;
  const password = document.querySelector("#pass").value;

  const url = "http://localhost:5000/user/login";

  fetch(url, {
    method: "POST",
    data: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
}
