/** cwiczenia 1 */
//Wzorując się na przykładzie z ciastem, utwórz klasę „Person” (osoba). Niech osoba posiada pole imię, nazwisko, wiek oraz metodę,
// która będzie służyła do przedstawiania się.

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        console.log(`Nazywam sie ${this.name} ${this.surname} i mam ${this.age}`);
    }
}
const person = new Person('John', 'Travolta', 45);

person.getFullName();

/** cwiczenia 2 */
// 1. Stwórz obiekt samochód (car) i przypisz mu pola: brand, model, year. Niech rok produkcji będzie unikalny dla każdego auta.
const car = {
    brand: 'mercedes',
    model: 'c-class',
    year: '2012'
}
console.log(car)

// 2. Stwórz trzy obiekty car i umieść je w tablicy.
const cars = [
    {
        brand: 'mercedes',
        model: 'e-class',
        year: '2024'
    },
    {
        brand: 'bmw',
        model: 'e-60',
        year: '2000'
    },
    {
        brand: 'audi',
        model: 'a6',
        year: '2016'
    }
]

// 3. Dla chętnych: przy pomocy funkcji .map przeiteruj po tablicy i wyświetl wszystkie informacje (brand, model, year) dla każdego
// samochodu
const result = cars.map(car => `${car.brand} ${car.model} ${car.year}`);
console.log(result);

// 4. Dla chętnych: Przy pomocy funkcji .filter wyświetl informacje tylko dla dwóch najmłodszych aut.
const sortCars = cars
    .sort((a, b) => b.year - a.year)
    .filter((_, index) => index < 2);

console.log(sortCars);

/** cwiczenia 3 */
// https://codeme.pl/
// const logo = document.querySelector('.header__logo')
// logo.style.background = "green"


/** zadanie domowe */
class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    getUser() {
        console.log(`Login: ${this.login} || Password: ${this.password}`);
    }
}
const user = new User('Marek@interia.pl', 'Marek123!');
user.getUser()

class Add extends User {
    constructor(login, password, number) {
        super(login, password,);
        this.number = number;
    }
    getNumber() {
        console.log(`Number: ${this.number}`);
    }
    getAllUser () {
        console.log(`Login: ${this.login} || Password: ${this.password} || Number: ${this.number}`);
    }
}
const add = new Add('Jagoda45@wp.pl', 'Jgoda15!', 458454858 );
add.getNumber();
add.getAllUser();