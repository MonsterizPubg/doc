let counter = 0;
const counterdisp = document.getElementById('counter');
const one = document.getElementById('one');
const two = document.getElementById('two');

one.addEventListener('+click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

two.addEventListener('-click', function() {
    counter--;
    counterDisplay.textContent = counter;
});