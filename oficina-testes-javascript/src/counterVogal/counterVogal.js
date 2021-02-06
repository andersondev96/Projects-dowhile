function counterVogal(string) {
    var quantVogais = 0;
    var vogais = [ 'a', 'e', 'i', 'o', 'u' ];
    var i;
    
    var newString = string.toLowerCase();

    for (i = 0; i < newString.length; i++) {
        if (vogais.indexOf(newString[i]) !== -1) {
            quantVogais++;
        }
    }
    return quantVogais;

    
}

module.exports = counterVogal;