// const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form"); if using qeury selector need to put # to specify ID but getElementById already selects id so don't require the hashtag
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// can search from inside document or inside of element (loginForm^^)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// I might make a mistake writing a string, so making it a constant, javascript will tell me there is an error!!!!!!!!!!!!!!!!!!!!!!!!
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(savedUsername);
    }