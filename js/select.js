const allPlayerName = [];

function addToSelect(event) {
    const playerName = event.parentNode.children[0].innerText;

    allPlayerName.push(playerName);
    document.getElementById('selected-number').innerText = allPlayerName.length;
}