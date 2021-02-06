function fizzbuzz(numero) {

    let resultadoFinal = "";

    if (numero === 0) {
        return numero;
    }
    
    if (numero % 3 === 0) {
        resultadoFinal =  "Fizz"
    }

    if (numero % 5 === 0) {
        resultadoFinal += "Buzz"
    }

    if (resultadoFinal === ""){
        resultadoFinal = numero
    }

    return resultadoFinal;
}

module.exports = fizzbuzz