function espalindromo(cadena) {
    let array = cadena.split ("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Si es" : "No es"
    
}
console.log(espalindromo("oso"));
