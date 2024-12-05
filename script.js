const benutzerListe = [
  { email: "user1@test.com", password: "password" },
  { email: "user2@test.com", password: "pass123" },
  { email: "user4@test.com", password: "password" },
  { email: "alex@test.com", password: "123456" },
  { email: "anna@test.com", password: "eiojfewpr" },
];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const user = benutzerListe.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (user) {
    console.log(`User ${user.email} logged.`);
  } else {
    console.log("login failed");
  }
});
