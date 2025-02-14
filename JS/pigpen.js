const plainText = document.getElementById("plaintext-chars");
const highlightArrow = document.getElementById("mapping");
const cypherText = document.getElementById("cyphertext-chars");
// hiển thị chữ cái và kí tự pigpen
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
// convert chữ cái nhập sang kí tự pigpen 
function convertToPigpen(){
    const inputText = document.getElementById("plaintext-text").value;
    const arrowConvert = document.querySelectorAll('.highlight-arrow');
    const textConvert = document.querySelectorAll('.char.plain');
    const cypherConvert = document.querySelectorAll('.char.cypher');
    // console.log(textConvert)
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
    // convert kí tự chữ cái sang kí tự pigpen
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
    countFrequency(inputText);

}
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
    const chars = document.getElementById("plaintext-text").value;
    for(let i = 0; i < chars.length; i++){
        if(chars.charCodeAt(i) >= 65 && chars.charCodeAt(i) <= 90){
            document.getElementById('cyphertext-text').innerHTML +=  `
                <span class="char cypher2"><img src="/Image/pigpen-0-${chars.charCodeAt(i)-64}.png"></span>
            `
        } else if (chars.charCodeAt(i) >= 97 && chars.charCodeAt(i) <= 122){
            document.getElementById('cyphertext-text').innerHTML +=  `
                <span class="char cypher2"><img src="/Image/pigpen-0-${chars.charCodeAt(i)-96}.png"></span>
            `
        } 
    }
    countFrequency(chars);
})
