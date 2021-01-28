# Tipps

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
