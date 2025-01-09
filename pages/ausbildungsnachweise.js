const form = document.getElementById("entryForm");
const entriesDiv = document.getElementById("entries");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;

  const entry = document.createElement("div");
  entry.className = "entry";
  entry.innerHTML = `
  <h3>${date}</h3>
  <p>${description}</p>
  <div class="buttons">
      <button class="edit-btn">Bearbeiten</button>
      <button class="delete-btn">Löschen</button>
  </div>
  `;

  entry.querySelector(".edit-btn").addEventListener("click", function () {
    const newDate = prompt("Neues Datum eingeben:", date);
    const newDescription = prompt("Neue Beschreibung eingeben:", description);

    if (newDate && newDescription) {
      entry.querySelector("h3").textContent = newDate;
      entry.querySelector("p").textContent = newDescription;
    }
  });

  entry.querySelector(".delete-btn").addEventListener("click", function () {
    if (confirm("Möchten Sie diesen Eintrag wirklich löschen?")) {
      entry.remove();
    }
  });

  entriesDiv.appendChild(entry);

  form.reset();
});
