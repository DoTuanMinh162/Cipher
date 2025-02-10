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
            <span class="highlight-arrow" data-id="${i+1}"><ion-icon name="arrow-up"></ion-icon></span>
        `;
        highlightArrow.innerHTML += elementArrow;
        elementCypher = `
            <span class="char cypher" data-id="${i+1}"><img src="/Image/pigpen-0-${i+1}.png"></span>
        `;
        cypherText.innerHTML += elementCypher;
    }
}
displayLetters(65, 26);

function convertToPigpen(){
    const inputText = document.getElementById("plaintext-text").value;
    const arrowConvert = document.querySelectorAll('.highlight-arrow');
    const cypherConvert = document.querySelectorAll('.char.cypher');
    const lastChar = inputText.charAt(inputText.length - 1);
    let idToCheck = 0;
    if(lastChar.charCodeAt(0) >= 65 && lastChar.charCodeAt(0) <= 90){
        idToCheck = lastChar.charCodeAt(0) - 64;
        const idDataOfElement = parseInt(elementCypher.getAttribute("data-id"));
        console.log(idDataOfElement)
        console.log(parseInt(idToCheck))
        Array.from(cypherConvert).forEach(elementCypher => {
            if(idDataOfElement === parseInt(idToCheck)){
                elementCypher.style.backgroundColor = "yellow";
            }
        });
        Array.from(arrowConvert).forEach(elementArrow => {
            if(idDataOfElement === parseInt(idToCheck)){
                elementArrow.style.color = "yellow";
                console.log(1)
            }
        });
        

    } else if(lastChar.charCodeAt(0) >= 97 && lastChar.charCodeAt(0) <= 122){
        idToCheck = lastChar.charCodeAt(0) - 96;
    }
    
    document.getElementById('cyphertext-text').innerHTML = '';
    for(let i=0;i<inputText.length;i++){
        // console.log(inputText.length);
        // console.log(inputText.charCodeAt(i))
        if(inputText.charCodeAt(i) >= 65 && inputText.charCodeAt(i) <= 90){
            document.getElementById('cyphertext-text').innerHTML +=  `
                <span class="char cypher2"><img src="/Image/pigpen-0-${inputText.charCodeAt(i)-64}.png"></span>
            `
        } else if (inputText.charCodeAt(i) >= 97 && inputText.charCodeAt(i) <= 122){
            document.getElementById('cyphertext-text').innerHTML +=  `
                <span class="char cypher2"><img src="/Image/pigpen-0-${inputText.charCodeAt(i)-96}.png"></span>
            `
        } 
        
    }

}
