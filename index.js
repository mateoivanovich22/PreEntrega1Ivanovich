
alert("ESTA ES UNA PAGINA DE COTIZACIONES DE VEHICULOS, USTED PODRA ASEGURAR LA CANTIDAD DE VEHICULOS QUE QUIERA, SOLO ASEGURAMOS AUTOS, MOTOS O BICIS")

let cantidadDeVehiculos = prompt("Cuantos vehiculos queres asegurar?")

let seguroBici = 200
let seguroAuto = 1000
let seguroMoto = 700

let seAsocio = false

let valorSeguros = 0

for( let i = 0; i < cantidadDeVehiculos; i++){

    let vehiculo = prompt(`Tu vehiculo ${i+1} es un auto, una bici o una moto?`)

    if(vehiculo == "bici"){
        valorSeguros = valorSeguros + seguroBici
    }else if(vehiculo == "moto"){
        valorSeguros = valorSeguros + seguroMoto
    }else if(vehiculo == "auto"){
        valorSeguros = valorSeguros + seguroAuto
    }
}

let asociarse = prompt(`El valor total que debes abonar mensualmente es de ${valorSeguros} pesos\nDesea asociarse con nuestra empresa de seguros?\n(si o no)`)

if(asociarse == "si"){
    seAsocio = true
}

//Lo hago para la utilizacion de Booleanos, ya se que no hace falta jajaj
if(seAsocio == true){
    alert("Gracias por asociarte, a continuacion usted podra confirmar los metodos de pago en la pagina web.")
}
