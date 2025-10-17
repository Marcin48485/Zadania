/** zadanie 1 */
//  Utwórz trzy zmienne: name, age i city.
//  Przypisz im imię, wiek i nazwę miasta (dane mogą być fikcyjne).
//  Dla bardziej zaawansowanych: Użyj polecenia console.log(), aby wyświetlić zdanie:
//  „Cześć! Mam na imię [imię], mam [wiek] lat i mieszkam w [miasto]”.

const name = "Marcin"
const age = 33;
const city = "Warszawa";

console.log(`Cześć, nazywam się ${name}, mam ${age} lat i mieszkam w ${city}.`);




/** zadanie 2 */
//  Wklej tę funkcję do konsoli, a następnie wywołaj ją wpisując swoje imię
//  function sayHello(name) {
//      return "Hello, " + name + "!";
//  }
//  Możesz teraz napisać dowolną funkcję i spróbować ją wywołać.
//  Ponieważ wydajesz polecenia (instrukcje) maszynie już programujesz :)


function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("Marcin"));




/** zadanie 3 */
const addNumber = (a, b) => a + b;
console.log(addNumber(5, 10));

/** zadanie 3 dla zaawansowanych */
//  Zadeklaruj zmienne grade1, grade2, grade3, np. 4, 5, 5.
//  Napisz funkcję calculateAverage(g1, g2, g3), która:
//  obliczy średnią z trzech liczb,
//  zwróci tekst "Średnia ocen: X".
//  Wywołaj funkcję i wypisz wynik w konsoli.

const grade1 = 3
const grade2 = 4
const grade3 = 5

const calculateAverage = (g1, g2, g3) => {
    const average = (g1 + g2 + g3) / 3;
    console.log(`Średnia ocen: ${average.toFixed(2)}`)
}

calculateAverage(grade1, grade2, grade3);

/** zadanie 4 praca domowa */
//  Zadeklaruj zmienną price, np. 100.
//  Zadeklaruj zmienną discount, np. 0.2 (czyli 20%).
//  Napisz funkcję calculateDiscountedPrice(price, discount), która zwróci cenę po rabacie.
//  Wywołaj funkcję i wyświetl wynik w konsoli.

const price = 100;
const discount = 0.2;

const calculateDiscountPrice = (price, discount) => `Cena po rabacie to ${price * discount}`

calculateDiscountPrice(price, discount)