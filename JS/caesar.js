const plainText = document.getElementById("plaintext-text")
const cypherText = document.getElementById("cyphertext-text2")
const key = document.getElementById("key-value")
const highlightArrow = document.getElementById("mapping")
const plainText2 = document.getElementById("plaintext-chars")
const cypherText2 = document.getElementById("cyphertext-chars")

function convertToCaesar (){
    let k = parseInt(key.value);
    cypherText.innerHTML = '';
    for(let i = 0;i<plainText.value.length;i++){
        //console.log(i);
        plainText.value = plainText.value.toUpperCase();
        let letterAscii = (plainText.value.charCodeAt(i)+k-'A'.charCodeAt(0))%26+'A'.charCodeAt(0);
        const elementText = `
            <span class = "char caesar">${String.fromCharCode(letterAscii)}</span>
        `
        cypherText.innerHTML += elementText;
    }
    
}

function displayLetters(startChar, charCount, k) {
    plainText2.innerHTML = '';
    cypherText2.innerHTML = '';
    highlightArrow.innerHTML = '';
    for (let i = 0; i < charCount; i++) {
        const letter= String.fromCharCode(i + startChar);
        const elementText = `
            <span class="char plain" data-id="${i+1}">${letter}</span>
        `;
        const letter2 = String.fromCharCode((letter.charCodeAt(0)+k-'A'.charCodeAt(0))%26+'A'.charCodeAt(0));
        const elementCaesar = `
            <span class="char caesar2" data-id="${i+1}">${letter2}</span>
        `;
        plainText2.innerHTML += elementText;
        const elementArrow = `
            <span class="highlight-arrow" data-id="${i+1}"><ion-icon name="arrow-down"></ion-icon></span>
        `;
        highlightArrow.innerHTML += elementArrow;
        cypherText2.innerHTML += elementCaesar;
    }
}

key.addEventListener("input", () => {
    let k = parseInt(key.value);
    displayLetters(65,26, k);
})
displayLetters(65,26,0);
// key.addEventListener("input", () => {
//     shiftChars();
// })
// const nodeListSpanChar = document.querySelectorAll('.char.caesar2');
// const arraySpanChar = Array.from(nodeListSpanChar);
// function shiftChars(){
    
//     let arrayUse = arraySpanChar;
//     console.log(arrayUse);
//     let k = parseInt (key.value)%26;
//     console.log(k)
//     let removeElements = arrayUse.slice(0, k);
//     arrayUse.push(...removeElements);
//     cypherText2.innerHTML = '';
//     arrayUse.forEach(item => {
//         cypherText2.appendChild(item)
//     })
    
    
//}

