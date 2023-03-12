var texto = document.getElementById('texto')
var indice = document.getElementById('imc')


function imc(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var height = (altura * altura)
    var fodas = (peso / height) * 10000
    let total = fodas.toFixed(2)
    texto.innerText = 'seu IMC é ' + (total)

    if(total < 18.50){
        indice.innerText = 'Magreza'}
    else if (total > 18.51 && total < 24.99) {
        indice.innerText = 'Normal'}
    else if (total > 25.00 && total < 29.99){
        indice.innerText = 'Sobrepeso'}
    else if (total > 30.00 && total < 39.99){
        indice.innerText = 'Obesidade'}
    else
        indice.innerText = 'Obesidade grave'
    }


 
    



