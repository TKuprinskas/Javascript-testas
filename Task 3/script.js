/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const output = document.getElementById("output");

function createUsersCard(data) {
  const message = document.getElementById("message");
  message.textContent = "";
  const body = document.body;
  const mainDiv = document.createElement("div");
  mainDiv.className = "grid-container";
  body.append(mainDiv);

  data.forEach((user) => {
    const contentDiv = document.createElement("div");
    contentDiv.className = "grid-item";

    const login = document.createElement("h3");
    login.className = "user-login";
    login.textContent = `Login: ${user.login}`;

    const avatarUrl = document.createElement("img");
    avatarUrl.src = `${user.avatar_url}`;

    mainDiv.appendChild(contentDiv);
    contentDiv.appendChild(avatarUrl);
    contentDiv.appendChild(login);
  });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      createUsersCard(data);
    });
});
