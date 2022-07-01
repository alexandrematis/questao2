// declaração da função
export function stringCompression(uncompressedString) {

    // spred operator para separar os caracteres da string
    const toCompress = [... uncompressedString.toLowerCase()]
    
    //adiciona o primeiro caractere ao array
    let compressed = [toCompress[0]]

    // seta a variavel para o controle de repetição
    let repetition = 0
    
    // forEach para percorrer a string
    toCompress.forEach(caracter => {
        if (caracter === compressed[compressed.length-1]) //comparar com o caracter anterior
        {
            repetition++ // incrementa a repetição
        } else {
            // caso contrário, adiciona o valor de repetições ao array
            compressed.push(repetition)
            // adiciona o proximo caracter ao array
            compressed.push(caracter)
            // seta a repetição como 1 para analizar o próximo caracter
            repetition = 1
        }
    })

    // por fim, adiciona o valor da uiltima repetição ao array
    compressed.push(repetition)
    
    if (compressed.length < toCompress.length) // faz a comparação do array à compactar e o array compactado
    {
        return compressed.join("") // retorna uma string compactada
    } else {
        return uncompressedString // caso contrario, retorna a string não compactada
    }
}