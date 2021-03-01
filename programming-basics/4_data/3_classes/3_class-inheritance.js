// https://javascript.info/class-inheritance

// Wir haben eine basis-klasse
class Animal
{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;
    }

    eat()
    {
        console.log(`${ this.name } is a ${ this.species } and is eating...`);
    }

    sleep()
    {
        console.log(`${ this.name } is sleeping...`);
    }
}

// Wir erstellen eine neue klasse auf basis der oberen klasse.
class Bird extends Animal
{
    constructor(name, species, canFly)
    {
        super(name, species);

        this.canFly = canFly;
    }

    fly()
    {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can not fly'}`);
    }

    sleep()
    {
        // Wir rufen die originalMethode auf
        super.sleep();
        console.log(`${ this.name } is dreaming...`);
    }
}

// Wir könnne jetzt bei unserer neuen klasse, 
// auf alle parameter der basis klasse UND der neuen klasse zugreifen.
const rudy = new Bird("Rudi", "Parrot", true);
console.log(rudy);

rudy.eat();
rudy.fly();
rudy.sleep();