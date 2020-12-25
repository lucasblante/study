// ### TIPOS DE DADOS ###

/* ----------------------------------------------------------------------
    -> STRING

    " " - aspas duplas
    ' ' - aspas simples
    ` ` - template literals ou template string
*/

    console.log('Lucas')

    console.log('Lucas "Vinicius" Blante')

    console.log(`
    Quebra de linha
    com a crase.

    `)

    console.log(`Custa R$ ${5 + 2},00 reais`)

/* ----------------------------------------------------------------------
    -> NUMBER

    120 - inteiros
    12.5 - reais - float
    NaN - Not a Number
    Infinity- infinito
*/

    console.log(10)

    console.log(12.5 * 3)

/* ----------------------------------------------------------------------
    -> BOOLEAN

    true - verdadeiro
    false - falso

*/

    console.log(15 === 5) // retorna falso

    console.log(10 === 10) // retorna verdadeiro

/* ----------------------------------------------------------------------
    -> UNDEFINED VS NULL

    undefined - não existe
    null - existe, mas não tem nd dentro

*/

    console.log('Nulll vs Undefined =', null === undefined)

/* ----------------------------------------------------------------------
    -> OBJECT

    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    
    { propriedade: "valor"}

*/

    console.log({
        name: "Lucas",
        idade: 19,
        andar: function(){
            console.log('Andar')
        }
    })

/* ----------------------------------------------------------------------
    -> ARRAY

    * Agrupamento de dados

    ["Lucas", 19]

*/

    console.log([
        "Leite",
        "Ovos",
        2,
        3
    ])

/* ----------------------------------------------------------------------
*/
