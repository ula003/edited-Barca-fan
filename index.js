const button = document.querySelector('button');
const output = document.querySelector('.output');
button.addEventListener('click', function() {
    output.innerHTML += `<h3>Ты кликнул по кнопке</h3>`;
})