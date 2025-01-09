import { User } from "./models/User.js";

const benutzerListe = [
  { email: "user1@test.com", password: "password" },
  { email: "user2@test.com", password: "pass123" },
  { email: "user4@test.com", password: "password" },
  { email: "alex@test.com", password: "123456" },
  { email: "anna@test.com", password: "eiojfewpr" },
];
let failedAttempts = 0;
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const newUser = new User(data.email, data.password);
  console.log(newUser);

  const user = benutzerListe.find(
    (user) => user.email === data.email && user.password === data.password
  );

  const wrongPasswordMsg = document.getElementById("wrong-password-message");
  const tooManyAttemptsMsg = document.getElementById(
    "too-many-attempts-message"
  );

  if (user) {
    localStorage.setItem("userEmail", user.email);
    const userEmail = localStorage.getItem("userEmail");
    console.log(`User ${userEmail} logged in.`);
  } else {
    failedAttempts++;
    console.log("login failed");
    wrongPasswordMsg.style.display = "block";
  }
  if (failedAttempts >= 5) {
    tooManyAttemptsMsg.style.display = "block";
    wrongPasswordMsg.style.display = "none";

    const resetButton = document.querySelector("#password-reset");
    if (resetButton) {
      resetButton.style.display = "block";
    }
  }
});
