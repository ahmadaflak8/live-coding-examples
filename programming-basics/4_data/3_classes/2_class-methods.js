// https://nemisj.com/why-getterssetters-is-a-bad-idea-in-javascript/
// https://javascript.info/property-accessors
class User {
    #firstName;
    #lastName;
    
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      
      this.fullName = this.#setFullName();
    }
    // um auf unsere werte zuzugreifen, können wir in javascript zwar einfach auf die werte zugreifen, aber sauberer ist es methoden fürs editieren, und anzeigen von werten zu schreiben. JavaScript besitzt auch sogenannte "getter/setter", diese sind aber nicht wirklich nützlich ohne typescript.

    // Vornamen ausgeben
    get firstName()
    {
        return this.#firstName;
    }

    // Vornamen definieren
    set firstName(firstName)
    {
        this.#firstName = firstName;
    }

    // Vorname ausgeben
    getFirstName()
    {
        return this.#firstName;
    }

    // Vorname definieren
    setFirstName(firstName)
    {
        this.#firstName = firstName;
    }

    getFullName()
    {
        return this.fullName;
    }

    #setFullName()
    {
        return this.#firstName + " " + this.#lastName;
    }
  }

const testNutzer = new User("Max", "Mustermann");
console.log(testNutzer);

testNutzer.firstName = "Katrin";

console.log(testNutzer.firstName);

testNutzer.setFirstName("Herbert");

console.log(testNutzer.getFirstName());

console.log(testNutzer.getFullName());

console.log(testNutzer);

console.log("=".repeat(50));

// wir nutzen die zweite art, und benennen unsere methoden mit get... oder set... am anfang des methodennamens.

/**
 * @class Fruit
 * @description
 * Basisklasse für Früchte
 * @example
 * const Apple = new Fruit("Apple", "Red", "Sweet");
 */
class Fruit
{
    /**
     * @constructor
     * @param { string } name 
     * @param { string } color 
     * @param { string } taste 
     */
    constructor(name, color, taste)
    {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    /**
     * @method getName();
     * @description Gibt den Namen der Frucht zurück.
     * @returns { string }
     */
    getName()
    {
        return this.name;
    }

    /**
     * @method setColor();
     * @description Legt die Farbe der Frucht fest
     * @param {string } name 
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @method getColor();
     * @description Gibt die Farbe der Frucht zurück.
     * @returns { string }
     */
    getColor()
    {
        return this.color;
    }

    /**
     * @method setTaste();
     * @description Legt den Geschmack der Frucht fest
     * @param {string } color 
     */
    setColor(color)
    {
        this.color = color;
    }

    /**
     * @method getTaste();
     * @description Gibt den Geschmack der Frucht zurück.
     * @returns { string }
     */
    getTaste()
    {
        return this.taste;
    }

    /**
     * @method setName();
     * @description Legt den Namen der Frucht fest
     * @param {string } taste 
     */
    setTaste(taste)
    {
        this.taste = taste;
    }

    /**
     * @method eat();
     * @description Gibt einen String aus.
     * @returns { string }
     */
    eat()
    {
        return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
    }
}

const apple = new Fruit("Apple", "Red", "Sweet");
console.log(apple.eat());

apple.setColor("Green");

console.log(apple.eat());

const lemon = new Fruit("Lemon", "Yellow", "Sour");
console.log(lemon.eat());
