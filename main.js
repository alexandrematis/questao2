// importação do modulo responsável pela compressão
import { stringCompression } from "./stringCompression.js";;

// testes
console.log("aabcccccaaa => ", stringCompression("aabcccccaaa"))
console.log("abcde => ", stringCompression("abcde"))
console.log("aaaaBBBbb =>", stringCompression("aaaaBBBbb"))
console.log("aAaAaA => ", stringCompression("aAaAaA"))
console.log("aAbB =>",stringCompression("aAbB"))
console.log("aAabAaA =>",stringCompression("aAabAaA"))