const plainText = document.getElementById("plaintext-chars");
const highlightArrow = document.getElementById("mapping");
const cypherText = document.getElementById("cyphertext-chars");
function displayLetters(startChar, charCount) {
    let elementSpan = '';
    for (let i = 0; i < charCount; i++) {
        const letter = String.fromCharCode(i + startChar);
        elementText = `
            <span class="char plain">${letter}</span>
        `;
        plainText.innerHTML += elementText;
        elementArrow = `
            <span class="highlight-arrow"><ion-icon name="arrow-up"></ion-icon></span>
        `;
        highlightArrow.innerHTML += elementArrow;
        elementCypher = `
            <span class="char cypher"><img src="/Image/pigpen-0-1.png"></span>
        `;
        cypherText.innerHTML += elementCypher;
    }
}
displayLetters(65, 26);