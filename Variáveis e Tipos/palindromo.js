// Solução 01
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}


// Solução 02
function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length/2; i++) {
        if(string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}