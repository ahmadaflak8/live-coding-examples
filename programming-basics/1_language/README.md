# Tipps

## Code-Convention
Um sicherzustellen das wir alle denselben "Code-Style" haben und unsere Codes für jeden von uns einfacher zu lesen ist, bitte ich dich, bei allen JavaScript Übungen meine regeln anzuwenden:

1. Brackets stehen vorzugseise in einer neuen Zeile:
```js
// Falsch:
funktion() {
    ...inhalt;
}

// Richtig:
funktion()
{
    ...inhalt;
}
```

2. Bei Strings nutzen wir vorwiegend Single-Quotes:
```js
// Falsch:
"Dies ist ein String";

// Richtig:
'Dies ist ein String';
```

3. Variablennamen schreiben wir in camelCase und Funktions/Methoden-Namen in PascalCase:
```js
// Falsch:
var NewVariable;
var NEW_VARIABLE;
var New_Variable;

newfunction();
new_Function();

// Richtig:
var newVariable;

NewFunction();
```

4. In Arrays und Objekten vor und nach den Werten fügen wir ein Leerzeichen ein:
```js
// Falsch:
[a, b, c, d, e]
{a, b, c, d, e}

// Richtig
{ a, b, c, d, e }
[ a, b, c, d, e ]
```

5. Wir beenden jedes Kommando mit einem Semikolon:
```js
// Falsch:
var testValue = 5

testValue + 8

// Richtig:
var testValue = 5;

testValue + 8;
```

6. Wenn wir eine neue Variable deklarieren, nutzen wir vorzugsweise `const`. `let` nutzen wir nur, wenn wir wissen das der Wert überschrieben werden kann, var nutzen wir fürs erste garnicht.
```js
// Falsch:
let testValue = 5; // oder auch var testValue = 5;
console.log(testValue);

// Richtig:
const testValue = 5;
console.log(testValue);
```

7. Wenn du deinen Code kommentierst, nutzt du bitte entweder Single-Line comments oder JSDoc comments.
```js
// Falsch:
/* Dies ist ein Kommentar */
/* 
Dies ist ein Kommentar
*/
/*
    Dies ist ein Kommentar
*/

// Richtig:
// Dies ist ein Kommentar

/***
 * Dies ist ein
 * Kommentar
 */
```

## Strings
Ein String ist eine Ansammlung von Buchstaben und Zeichen, dies können zum Beispiel Sätze, Wörter oder eine IBAN Adresse sein.

### Unterschiede zwischen Quotes
Es gibt keinen sprachbedingten Unterschied zwischen Strings mit Single-Quotes oder Double-Quotes, wenn du dich aber für eine der beiden Schreibweisen entschieden hast, musst du sie am Anfang und am Ende deines Strings benutzen.

**Falsch**
```js
'Hello World";
"Hello World';
```

**Richtig**
```js
// Single Quotes:
'Hello World';

// Double Quotes:
"Hello World';
```

### Leerzeichen
Du kannst sowohl einzelne Leerzeichen per `' ' + ' '` hinzufügen, aber auch Strings mit Leerzeichen beginnen oder enden lassen.

```js
// String + Leerzeichen + String 
'Dies' + ' ' + 'ist' +  ' ' + 'ein' + ' ' + 'String';

// String + String
'Dies ' + 'ist' + ' ein ' + 'String';
```

### Escaping Strings
Wenn wir einen String in mehrere Zeilen schreiben wollen können wir ihn mit "Newline" Escapen:
```js
// Newline: \n
'Dies ist ein\nMultiline-String'
// Dies ist ein
// Multiline-String

// Tabulator: \t
'Dies\tist\tein\tString'
// Dies     ist     ein     String
```

### Multiple concats
Du kannst mehrere Strings zu einem Einzelnen hinzufügen, indem du `.concat()` verwendest, und dann mehrere Strings per Komma trennst.

```js
'Dies'.concat('ist', ' ', 'ein', ' String');
```

### Single oder Double Quotes?
Die meisten bekannten JavaScript-Frameworks benutzen Single-Quotes, da sie leserlicher sind und man sich das "Escapen" von Sonderzeichen sehr schnell angewöhnt, auch wenn es momentan umständlich zu sein scheint. 

Geschrieben in Single-Quotes:
- node: 98% des codes
- express: 92% des codes
- React: 90% des codes

## Numbers
Numbers beinhaltet verschiedene Arten von Zahlen, egal ob sie Dezimalstellen haben, oder nicht.

### Positive oder Negative Zahlen
Du kannst jede Art von Zahl negativ oder positiv darstellen.

```js
// Positive Zahlen:
1;
25;
500;
1.5;
22.4;
8.6472;

// Negative Zahlen:
-3;
-11;
-250;
-2.5;
-10.9;
-31.8876;
```

### Mit sich selbst multiplizierte Zahlen
Wenn du eine Zahl mehrfach mit sich selbst multiplizieren willst, musst du diese Zahl nicht mehrfach schreiben, du kannst sie einfach definieren und durch den Exponent-Operator einstellen wie oft du sie multiplizieren willst.

```js
// Kurz für 3 * 3 * 3 * 3 * 3
3 ** 5;
```

### Punkt vor Strich Rechnung
Wenn du eine Aufgabe wie `1 + 8 / 4 + 5` siehst, 
denkst du vielleicht der Computer rechnet erst `1 + 8` und `4 + 5` zusammen um diese dann zu teilen, aber der Computer rechnet genau wie du es in der Schule gelernt hast, Punkt-vor-Strich rechnung, er sieht also als aufgabe `1 + 2 + 5`, da er die Division als erstes gelöst hat.

```js
// Wird zu:
// 8 / 4 = 2;
// 1 + 2 + 5;
// -----------
// Ergebnis: 8
1 + 8 / 4 + 5;
```

Oft muss dein Code aber anders rechnen, Wenn in bestimmten  Fällen andere Werte berechnet werden müssen. Um dies zu erreichen kannst du Aufgabenteile wie `1 + 8` oder `4 + 5` in Klammern setzen, diese werden dann zusammengerechnet und erst dann verarbeitet.

```js
// Wird zu:
// 1 + 8 = 9
// 4 + 5 = 9
// 9 / 9
// -----------
// Ergebnis: 1
(1 + 8) / (4 + 5);
```

## Booleans
Ein Boolean, oder Bool ist ein Operator dessen Ergebnis entweder wahr, oder falsch ist.

### Ist nur der Wert gleich, oder auch der Typ?
Wenn du eine Nummer als Zahl mit einer Nummer als String vergleichst, kann es zu unbeabsichtigten Fehlern kommen, du kannst mit dem sogenannten "Identity Operator" prüfen ob nicht nur der Wert, sondern auch der Datentyp beider Werte übereinstimmt.

```js
// Die Zahl ist die gleiche, aber nicht der typ, deswegen ist hier das Ergebnis FALSE.
6 === "6";

// Die Zahl und der Typ sind identisch, deswegen ist diese Prüfung TRUE.
2 === 2;
```

## Variablen
Eine Variable besitzt ein Wert, den man festlegen kann um ihn öfter wiederzuverwenden, oder auszuwerten.

### Var, let oder const?
Der kurz zusammengefasste Unterschied zwischen den 3 Variablentypen:

| Typ     | Kann neu deklariert werden | Wert kann verändert werden |
| ------- | -------------------------- | -------------------------- |
| `var`   | JA                         | JA                         |
| `let`   | NEIN                       | JA                         |
| `const` | NEIN                       | NEIN                       |

## Primitive Werte
In JavaScript kannst du, abgesehen von Arrays, 6 verschiedene Arten von werten nutzen, diese sind:
- Boolean: `bool`
- Null: `null`
- Undefined: `undefined`
- Number: `number`
- String: `string`
- Symbol: `symbol`

## Null vs. Undefined
Es liegt nahe zu denken das `null` und `undefined` das Gleiche sind, aber es gibt subtile Unterschiede:

`null` ist ein leerer, nicht existierender Wert, und kann einer Variable zugeordnet werden.

```js
let a = null;
// null
```

`undefined` ist der Wert einer Variable die deklariert, aber nicht definiert wurde.

```js
let b;
// undefined
```
