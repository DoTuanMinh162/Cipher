const plainText = document.getElementById("plaintext-chars");
function displayLetters(startChar, charCount) {
    let elementSpan = '';
    for (let i = 0; i < charCount; i++) {
        const letter = String.fromCharCode(i + startChar);
        elementSpan = `
         <span class="char plain">${letter}</span>
        `
        plainText.innerHTML += elementSpan;
    }
}

// Ví dụ sử dụng với ký tự bắt đầu là 'A' (Unicode 65) và xét 26 chữ cái
displayLetters(65, 26);