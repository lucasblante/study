// ### VARIAVEIS ###

/* ----------------------------------------------------------------------
    * Nomes simbólicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadas para criar variaveis
        * var
        * let
        * const

*/

    // var / let - pode ser alterada a qualquer momento
        let clima = 'Quente'

        console.log(clima)

        clima = 'Frio'

        console.log(clima)

    // const - não pode ser alterada
        const nome = 'lucas'

        console.log(nome)

/* ----------------------------------------------------------------------
    -> SCOPE

    * Escopo determina a visibilidade de alguma variável no JS

    # Block satement

    iniciando o bloco
    {
        este é o bloco
        ...
    } fechando o bloco

    O boloco, também criará um novo escopo. Chamamos de 'block-scoped'

*/

    // # var é global e poderá funcionar fora de um escopo de boloco
        {
            let x = 0
            console.log(x)
        }

        x = 'sim'

        console.log('> existe x (var) antes do bloco? ', x)

        {
            var x
        }

        console.log ('> existe x (var) depois do bloco? ', x)

    // # let e const são locais e só funcionam no escopo onde foram criadas

        console.log('> existe y (let) antes do bloco? ', y)

        {
            let y = 'sim'
            console.log('> existe y (let) dentro do bloco? ', y) 
        }

        console.log('> existe y (let) depois do bloco? ', y)      

/* ----------------------------------------------------------------------
*/