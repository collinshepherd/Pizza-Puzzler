const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("login handler");
  const username = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(username, password);
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/");
      return;
    } else {
      alert("Failed to log in");
    }
  }
};
// const loginFormHandler= async (event) =>{
//   event.preventDefault();

console.log("login form handler");
// }
const signupFormHandler = async (event) => {
  console.log('signup button clicked')
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const password2 = document.querySelector("#password-signup2").value.trim();
  console.log(username,password,password2)
  let gender;
  let avatar;
  let randomizer = Math.floor(Math.random() * 2);
  // if (randomizer === "0") { 
    if (password !== password2) {
      alert("Passwords must match");
      return;
    }

    if (username && password && password2 ) {
      console.log('making fetch req')
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username, password}),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Problem with making a new account");
      }
    }
  // }
};

console.log("over here");

document
  .getElementById("login-form")
  .addEventListener("submit", loginFormHandler);


document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler); 
  

