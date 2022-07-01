# Questão 2

Implement a method to perform basic string compression using the counts of repeted characters. For example, the string `aabcccccaaa` would become `a2b1c5a3`. If the "compressed" string does not become smaller than the original string, your method should return the original string, otherwise it should return the compressed string. You can assume the string has only uppercase and lowercase letters (a-z) and compression is case insensitive.

- 'aabcccccaaa' => 'a2b1c5a3'
- 'abcde' => 'abcde'
- 'aaaaBBBbb' => 'a4b5'
- 'aAaAaA' => 'a6'
- 'aAbB' => 'aAbB'

OBS: Para a solução implementei o modulo `stringCompression.js` que é importado no modulo `main.js` para execução dos testes.

O projeto roda ao comando `npm run start`
