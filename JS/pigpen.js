const plainText = document.getElementById("plaintext-chars");
const highlightArrow = document.getElementById("mapping");
const cypherText = document.getElementById("cyphertext-chars");
function displayLetters(startChar, charCount) {
    for (let i = 0; i < charCount; i++) {
        const letter = String.fromCharCode(i + startChar);
        const elementText = `
            <span class="char plain" data-id="${i+1}">${letter}</span>
        `;
        plainText.innerHTML += elementText;
        const elementArrow = `
            <span class="highlight-arrow" data-id="${i+1}"><ion-icon name="arrow-down"></ion-icon></span>
        `;
        highlightArrow.innerHTML += elementArrow;
        const elementCypher = `
            <span class="char cypher" data-id="${i+1}"><img src="/Image/pigpen-0-${i+1}.png"></span>
        `;
        cypherText.innerHTML += elementCypher;
    }
}
displayLetters(65, 26);
//   box-shadow: 1px 2px 8px yellow;
function convertToPigpen(){
    const inputText = document.getElementById("plaintext-text").value;
    const arrowConvert = document.querySelectorAll('.highlight-arrow');
    const textConvert = document.querySelectorAll('.char.plain');
    const cypherConvert = document.querySelectorAll('.char.cypher');
    // console.log(textConvert)
    const lastChar = inputText.charAt(inputText.length - 1);
    let idToCheck = 0;
    if(lastChar.charCodeAt(0) >= 65 && lastChar.charCodeAt(0) <= 90){
        idToCheck = lastChar.charCodeAt(0) - 64;
        Array.from(textConvert).forEach(elementText => {
            const idDataOfElement = parseInt(elementText.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementText.style.backgroundColor = "yellow";
            } else {
                elementText.style.backgroundColor = "white";
            }
        });
        Array.from(cypherConvert).forEach(elementCypher => {
            const idDataOfElement = parseInt(elementCypher.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementCypher.querySelector("img").style.boxShadow = "0px 4px 8px yellow";
                elementCypher.querySelector("img").style.zIndex = "10";
            } else {
                elementCypher.querySelector("img").style.boxShadow = "none";
                elementCypher.querySelector("img").style.zIndex = "1";
            }
        });
        Array.from(arrowConvert).forEach(elementArrow => {
            const idDataOfElement = parseInt(elementArrow.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementArrow.style.color = "yellow";
            } else {
                elementArrow.style.color = "white";
            }
        });
    } else if(lastChar.charCodeAt(0) >= 97 && lastChar.charCodeAt(0) <= 122){
        idToCheck = lastChar.charCodeAt(0) - 96;
        Array.from(textConvert).forEach(elementText => {
            const idDataOfElement = parseInt(elementText.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementText.style.backgroundColor = "yellow";
            } else {
                elementText.style.backgroundColor = "white";
            }
        });
        Array.from(cypherConvert).forEach(elementCypher => {
            const idDataOfElement = parseInt(elementCypher.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementCypher.querySelector("img").style.boxShadow = "0px 4px 8px yellow";
                elementCypher.querySelector("img").style.zIndex = "10";
            } else {
                elementCypher.querySelector("img").style.boxShadow = "none";
                elementCypher.querySelector("img").style.zIndex = "1";
            }
        });
        Array.from(arrowConvert).forEach(elementArrow => {
            const idDataOfElement = parseInt(elementArrow.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementArrow.style.color = "yellow";
            } else {
                elementArrow.style.color = "white";
            }
        });
        
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
