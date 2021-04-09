// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
class MyComputerShop {
    constructor(name, memory, power) {
        this.name = name;
        this.memory = memory;
        this.power = power;
    }

    switchON() {
        document.write(`Hi. I am your ${this.name} computer!`)
        document.write(`<br>`)
    }
}

// let newComputer = new MyComputerShop(`Terra`, 8, 1000)
// console.log(newComputer);
// newComputer.switchON()


// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends MyComputerShop {
    constructor(name, memory, power, inchOfScreen) {
        super(name, memory, power);
        this.inchOfScreen = inchOfScreen;
    }

    powerOfBattery() {
        let number = this.power / (this.inchOfScreen * this.memory)
        document.write(`My power of battery is ${number} hours!`);
        document.write(`<br>`)
        return number
    }
}

// const newLaptop = new Laptop(`Asus`, 8 , 1000, 25)
// console.log(newLaptop);
// newLaptop.switchON()
// newLaptop.powerOfBattery()


// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class UltraLaptop extends Laptop {
    constructor(name, memory, power, inchOfScreen, weight) {
        super(name, memory, power, inchOfScreen);
        this.weight = weight;
    }

    switchON() {
        if (this.weight >= 2 || this.powerOfBattery() <= 4) {
            alert(`You can't use this ${this.name}`)
        }
    }
}
// const newUltraLaptop = new UltraLaptop(`Lenovo`, 4,1000,25, 2)
// console.log(newUltraLaptop)
// newUltraLaptop.powerOfBattery()
// newUltraLaptop.switchON()


// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// class PC extends MyComputerShop{
//     constructor(name, memory, power, nameGame) {
//         super(name, memory, power);
//         this.nameGame = nameGame;
//     }
//     playGame(){
//         let FPS = this.power / this.memory
//         document.write( `You are playing ${this.nameGame} with ${FPS} FPS!`)
//     }
// }
// const newPC = new PC(`Samsung`, 8,1000,`GTA`)
// console.log(newPC)
// newPC.playGame()



