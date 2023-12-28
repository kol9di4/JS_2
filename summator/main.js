var n1 = document.querySelector('input[name=number1]');
var n2 = document.querySelector('input[name=number2]');
var button = document.querySelector('input[type=submit]');
var vivod = document.querySelector('span');

button.onclick = function(){
    vivod.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}
