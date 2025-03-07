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
    countFrequency(plainText.value)
    // highlight kí tự vừa nhập
    highlightInput();
}
function highlightInput(){
    const inputText = plainText.value;
    const arrowConvert = document.querySelectorAll('.highlight-arrow');
    const textConvert = document.querySelectorAll('.char.plain');
    const caesarConvert = document.querySelectorAll('.char.caesar2');
    const lastChar = inputText.charAt(inputText.length - 1);
    let idToCheck = 0;
    // đổi màu chữ cái, kí tự pigpen, mũi tên khi nhập (đổi màu kí tự vừa nhập)
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
        Array.from(caesarConvert).forEach(elementCypher => {
            const idDataOfElement = parseInt(elementCypher.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementCypher.style.backgroundColor = "yellow";
            } else {
                elementCypher.style.backgroundColor = "white";
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
        Array.from(caesarConvert).forEach(elementCypher => {
            const idDataOfElement = parseInt(elementCypher.getAttribute("data-id"));
            if(idDataOfElement === parseInt(idToCheck)){
                elementCypher.style.backgroundColor = "yellow";
            } else {
                elementCypher.style.backgroundColor = "white";
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
    displayLetters(65, 26, k);
    highlightInput();
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

//function tính tần suất xuất hiện của từng chữ cái trong input
function countFrequency(stringInput){
    const frequency = Array(26).fill(0);
    for (let char of stringInput.toUpperCase()){
        if (char >= 'A' && char <= 'Z') {
            const index = char.charCodeAt(0) - 'A'.charCodeAt(0);  
            frequency[index] += 1;
        }
    }
    drawChart(frequency);
}
// function vẽ biểu đồ tần suất xuất hiện của chữ cái và kí tự pigpen
function drawChart(frequencyData){
    if (window.myChart) {
        window.myChart.destroy();
    }
    const labels = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const chartData = {
                labels: labels,
                datasets: [{
                    label: 'Frequency of appearance',
                    data: frequencyData,
                    backgroundColor: 'rgba(53, 160, 231, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            };

            // Tạo biểu đồ
            const config = {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            // Vẽ biểu đồ lên canvas
            window.myChart = new Chart(
                document.getElementById('plaintext-chart'),
                config
            );
}
// xử lí input mặc định (hello world) => mục đích để auto hiển thị biểu đồ khi vào trang pigpen
document.addEventListener("DOMContentLoaded", () => {
    const plainText = document.getElementById("plaintext-text");
    for(let i = 0;i<plainText.value.length;i++){
        //console.log(i);
        plainText.value = plainText.value.toUpperCase();
        let letterAscii = (plainText.value.charCodeAt(i)-'A'.charCodeAt(0))%26+'A'.charCodeAt(0);
        const elementText = `
            <span class = "char caesar">${String.fromCharCode(letterAscii)}</span>
        `
        cypherText.innerHTML += elementText;
    }
    countFrequency(plainText.value);
    highlightInput();
})



