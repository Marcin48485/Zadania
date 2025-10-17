/** zadanie 1 */
// Utwórz zmienną tekstową o dowolnej wartości (przy pomocy słowa kluczowego let), a następnie
// przypisz jej dowolną liczbę.
let number = 5



/** zadanie 2 */
//   * dla chętnych - zapoznaj się z operatorami logicznymi. Połącz dwie zmienne o typie Boolean operatorem i zobacz co otrzymasz.
//     Operatory:
//   && – i (AND)
//   || – lub (OR)
//   ! – nie (NOT)
const isLogin = false;
const isNotLogin = true;

console.log(isLogin && isNotLogin);
console.log(isLogin || isNotLogin);
console.log(isLogin === !isNotLogin);


/** zadanie 3 */
// Napisz instrukcję warunkową, która dla zalogowanego użytkownika wyświetli tekst „witaj”, a dla niezalogowanego „Zaloguj
// się”
const isLoginIm = true;
const notLogin = false;

const usersLogin = (isLoginIm) => {
    if (isLoginIm) {
        console.log(`Witaj!`);
    } else {
        console.log(`Zaloguj się!`);
    }
}
usersLogin(notLogin);



/** zadanie 4 */
//   Napisz program w JavaScript, który na podstawie liczby punktów (0–100) przyznaje ocenę uczniowi według poniższych zasad:
// • Jeśli punktów jest 90 lub więcej, wypisz: Ocena: 5 (celujący)
// • Jeśli punktów jest między 70 a 89, wypisz: Ocena: 4 (dobry)
// • Jeśli punktów jest między 50 a 69, wypisz: Ocena: 3 (dostateczny)
// • W przeciwnym razie wypisz: Ocena: 2 (niedostateczny)
const noteFive = 95
const noteFour = 80
const noteThree = 65
const noteTwo = 49

const studentsGard = (note) => {
    if (note >= 90) {
        console.log(`Ocena: 5 (celujący)`);
    } else if (note >= 70 && note <= 89) {
        console.log(`Ocena: 4 (dobry)`);
    } else if (note >= 50 && note <= 69) {
        console.log(`Ocena: 3 (dostateczny)`);
    } else {
        console.log(`Ocena: 2 (niedostateczny)`);
    }
}

studentsGard(noteFive);
studentsGard(noteFour);
studentsGard(noteThree);
studentsGard(noteTwo);


/** zadanie 5 */
//  for (let i = 1; i <= 5; i++) {
//  console.log(i);
//  }
//  1.Bazując na pętli powyżej, wyświetl liczby od 1 do 10
//  2. Wypisz liczby parzyste od 0 do 20.
//  3. Wypisz 10 razy tekst „Hello, world!”
//  4. * Zadanie trudniejsze: Zbuduj piramidę z gwiazdek:
//  *
//  **
//  ***
//  ****
//  *****
//  Napisz kod, który wyświetla taką piramidę 5-wierszową. Możesz poprosić o podpowiedź na priv :)

/** zadanie 5.1 */
 for (let i = 1; i <= 10; i++) {
     console.log(i);
 }

/** zadanie 5.2 */
for (let i = 0; i <= 20; i++) {
    if ( i % 2 === 0) {
        console.log(i);
    }
}

/** zadanie 5.3 */
for (let i = 1; i <= 10; i++) {
    console.log("Hello, world!");
}

/** zadanie 5.4 */
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

/** zadanie 6 */
//  Ćwiczenie z użyciem tablic i pętli:
//  Użyj funkcji sayHello() i wywołaj tę funkcje dla każdego imienia z tablicy let names = ["Alice","Bob", „Charlie”];
//  Długość tablicy możesz sprawdzić przy pomocy names.length
//  const names = ["Alice", "Bob", "Charlie"];
//  const sayHello = (name) => {
//  console.log("Hello, " + name + "!");
//  }
//  for (let i = 0; i < //tutaj Twój kod; i++) {
//  //tutaj Twój kod
//

let names = ["Alice","Bob", "Charlie"];

const sayHello = (name) => {
    console.log("Hello, " + name + "!");
}
sayHello('Alice');

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    }




/** tablice */
//1. Stwórz tablice arrayNames z kilkoma imionami.
const arrayNames = ['Bartek', 'Kasia','Marek', 'Ania']

//2. Dodaj do tablicy imię „David”. Użyj metody push() na tablicy names.
arrayNames.push('David');
console.log(arrayNames);

//3. Utwórz pustą tablicę.
const newArray = []

//4. Posortuj tablicę arrayNames. Użyj metody sort() na tablicy
arrayNames.sort()
console.log(arrayNames)

//5. Sprawdź liczbę elementów w tablicy
console.log(arrayNames.length);

// 6. Sprawdź czy tablica zawiera element „Adam” i czy zawiera element „David”
if (arrayNames.includes('Adam')) {
    console.log(`Tablice zawiera imie Adam`)
} else {
    console.log(`Tablice nie zawiera imie Adam`)
}

if (arrayNames.includes('David')) {
    console.log(`Tablice zawiera imie David`)
} else {
    console.log(`Tablice nie zawiera imie David`)
}

/** zadanie dla chetynch tablice */
// 7. Stwórz macierz czyli tablicę dwuwymiarową, która ma równą liczbę elementów w każdym wierszu i w każdej kolumnie. Policz sumę
// wszystkich elementów macierzy.
const arra2 = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log(arra2[0][0] + arra2[0][1] + arra2[0][2] + arra2[1][0] + arra2[1][1] + arra2[1][2])
console.log(arra2.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b))

// 8. Transpozycja macierzy. Dokonaj transpozycji macierzy (zamień wiersze z kolumnami).
const array3 = [
    [1, 4],
    [2, 5],
    [3, 6]
]
console.log(array3)


/** zadanie domowe */
// Utwórz tablicę i pobierz z niej ostatni element
const arrayNumbers = [10, 25, 30, 45, 50]
console.log(arrayNumbers[arrayNumbers.length - 1]);

// 2. Napisz program, który na podstawie podanej temperatury w stopniach Celsjusza wypisze odpowiedni komunikat:
// • Jeśli temperatura jest poniżej 0, wypisz: Mróz! Ubierz się ciepło!
// • Jeśli temperatura jest od 0 do 15 włącznie, wypisz: Chłodno. Przyda się kurtka.
// • W przeciwnym razie wypisz: Ciepło! Zostaw kurtkę w domu.
const coldTemp = -5
const normalTemp = 15
const hotTemps = 22

const checkTemp = (temp) => {
    if (temp <= 0) {
        return "Mróz! Ubierz się ciepło!";
    }
    if (temp > 0 && temp <= 15) {
        return "Chłodno. Przyda się kurtka.";
    }
    // jeśli nie pasuje do wcześniejszych warunków
    return "Ciepło! Zostaw kurtkę w domu.";
}

console.log(checkTemp(coldTemp));   // Mróz! Ubierz się ciepło!
console.log(checkTemp(normalTemp)); // Chłodno. Przyda się kurtka.
console.log(checkTemp(hotTemps));   // Ciepło! Zostaw kurtkę w domu.

// 3. Napisz pętlę, która wyświetli liczby nieparzyste do 20
for (let i = 0; i < 20; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}
