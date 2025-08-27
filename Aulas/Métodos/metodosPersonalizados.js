const calculadora = {
    valor1: 0,
    valor2: 0,

    definirValores: function(v1, v2) { 
        this.valor1 = v1
        this.valor2 = v2
    },

    soma: function() {
        return this.valor1 + this.valor2
    },

    subtrair: function() {
        return this.valor1 - this.valor2
    },

    multiplicar: function() {
        return this.valor1 * this.valor2
    },

    divisao: function() {
        return this.valor1 / this.valor2
    },

}
calculadora.definirValores(20, 5)
console.log(calculadora.soma())
console.log(calculadora.subtrair())
console.log(calculadora.multiplicar())
console.log(calculadora.divisao())

calculadora.exponenciaçao = function() { // Acrescentando uma nova propriedade
    return this.valor1 ** this.valor2
}
console.log(calculadora.exponenciaçao())

console.log(calculadora)


