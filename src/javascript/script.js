//variáveis para horas, minutos e segundos

var minutos = 0
var segundos = 0
var intervalo
var horas = 0


//para permanecer o padrão de 00 até chegar no 10.. ex: 01,02,03..etc
function mantemDoisNumeros(numero) {
    if (numero < 10) {
        return ('0' + numero)
    } else {
        return (numero)
    }
}

//setInterval chama outra função (incrementa 1, para contar até 1000 (milisegundos)
function iniciaCronometro() {
    incrementa()
    intervalo = setInterval(incrementa, 1000)

}

//para o cronômetro
function pausaCronometro() {
    clearInterval(intervalo)
}

//limpa o cronômetro zerando a variável segundos e minutos
function limpaCronometro() {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    document.getElementById('tempo').innerText = "00:00:00"
}
//função para incrementar minutos quando segundos atingirem 60 e horas quando minutos atingirem 60
function incrementa() {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0
        if (minutos == 60) {
            minutos = 0
            horas++
        }


    }

    document.getElementById('tempo').innerText = mantemDoisNumeros(horas) + ":" + mantemDoisNumeros(minutos) + ":" + mantemDoisNumeros(segundos)

}