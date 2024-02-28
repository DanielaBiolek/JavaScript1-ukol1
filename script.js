const fahrenheit = Number(prompt("Zadej stupně Fahrenheita pro převod na stupně Celsia:"))

const celsius = 5 * (fahrenheit - 32) / 9

document.body.innerHTML = '<p class="tabulka"> Výsledek: ' + fahrenheit + '˚F  = ' + celsius + '˚C </p>'