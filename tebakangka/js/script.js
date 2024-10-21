let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    let resultText = '';

    if (guess < 1 || guess > 100) {
        resultText = 'Tebakan harus antara 1 dan 100!';
        alert(resultText);
    } else if (guess < randomNumber) {
        resultText = 'Terlalu rendah! Coba lagi.';
        alert(resultText);
    } else if (guess > randomNumber) {
        resultText = 'Terlalu tinggi! Coba lagi.';
        alert(resultText);
    } else {
        resultText = `Selamat! Anda menebak angka ${randomNumber} dalam ${attempts} percobaan!`;
        document.getElementById('restart').style.display = 'block';
    }

    document.getElementById('result').textContent = resultText;
});

document.getElementById('restart').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    this.style.display = 'none';
});
