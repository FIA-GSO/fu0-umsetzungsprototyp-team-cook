        // Referenzen auf die Formularelemente
        const form = document.getElementById('entryForm');
        const entriesDiv = document.getElementById('entries');
        const editModal = document.getElementById('editModal');
        const overlay = document.getElementById('overlay');
        const editDate = document.getElementById('editDate');
        const editDescription = document.getElementById('editDescription');
        let currentEntry = null;

        // Event-Listener für das Formular
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Verhindert das Neuladen der Seite

            // Werte aus dem Formular abrufen
            const date = document.getElementById('date').value;
            const description = document.getElementById('description').value;

            // Neuen Eintrag erstellen
            const entry = document.createElement('div');
            entry.className = 'entry';
            entry.innerHTML = `
                <h3>${date}</h3>
                <p>${description}</p>
                <div class="buttons">
                    <button class="edit-btn">Bearbeiten</button>
                    <button class="delete-btn">Löschen</button>
                </div>
            `;

            // Bearbeiten-Button Funktionalität
            entry.querySelector('.edit-btn').addEventListener('click', function() {
                currentEntry = entry;
                editDate.value = entry.querySelector('h3').textContent;
                editDescription.value = entry.querySelector('p').textContent;
                showModal();
            });

            // Löschen-Button Funktionalität
            entry.querySelector('.delete-btn').addEventListener('click', function() {
                currentEntry = entry;
                if (confirm('Möchten Sie diesen Eintrag wirklich löschen?')) {
                    entry.remove();
                }
            });

            // Eintrag zur Liste hinzufügen
            entriesDiv.appendChild(entry);

            // Formular zurücksetzen
            form.reset();
        });

        // Modal anzeigen
        function showModal() {
            editModal.classList.add('active');
            overlay.classList.add('active');
        }

        // Modal ausblenden
        function hideModal() {
            editModal.classList.remove('active');
            overlay.classList.remove('active');
        }

        // Speichern-Button im Modal
        document.getElementById('saveEdit').addEventListener('click', function() {
            if (currentEntry) {
                currentEntry.querySelector('h3').textContent = editDate.value;
                currentEntry.querySelector('p').textContent = editDescription.value;
            }
            hideModal();
        });

        // Abbrechen-Button im Modal
        document.getElementById('cancelEdit').addEventListener('click', function() {
            hideModal();
        });

        // Overlay-Klick zum Schließen des Modals
        overlay.addEventListener('click', function() {
            hideModal();
        });