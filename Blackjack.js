// Generar cartas aleatorias
let carta1 = Math.floor(Math.random() * 10) + 1
let carta2 = Math.floor(Math.random() * 10) + 1

console.log("Carta 1" = carta1)
console.log("Carta 2" = carta2)

// Sumar cartas
let suma = carta1 + carta2

console.log("Suma total" = suma)

// Resultados
if (suma > 21) {console.log("Te pasaste. Perdiste.")
} else if (suma === 21) {console.log("¡Blackjack!")
} else if (suma >= 16) {console.log("Te plantas con", suma)
} else {console.log("Puedes pedir otra carta.")}