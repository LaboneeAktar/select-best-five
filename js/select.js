
function displayName(selectedName) {
    const tableBody = document.getElementById('selected-name');
    tableBody.innerHTML = '';
    for (let i = 0; i < selectedName.length; i++) {
        const name = selectedName[i];

        if (selectedName.length == 6) {
            alert('no');
            return;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${name}</td>
            `;
        tableBody.appendChild(tr);
    }
}

const allPlayerName = [];
function addToSelect(event) {
    const playerName = event.parentNode.children[0].innerText;

    allPlayerName.push(playerName);
    document.getElementById('selected-number').innerText = allPlayerName.length;

    displayName(allPlayerName);
    event.disabled = true;

    event.style.backgroundColor = 'rgb(173, 173, 173)';
    event.style.border = 'grey';
}