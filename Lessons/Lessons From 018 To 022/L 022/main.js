/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    11    +     20   +      80  -     11
    [++a][+][+][b++][+][+][c++][-][+][a++]
    --------------------------------------
    [++a]
    - Value:11
    - Explain: pre-increment
    --------------------------------------
    [+]
    - Explain: Add Operator Not Concatenation
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [b++]
    - Value: 20
    - Explain: post-increment
    --------------------------------------
    [+]
    - Explain: Add Operator Not Concatenation
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [c++]
    - Value: 80
    - Explain: post-increment
    --------------------------------------
    [-]
    - Explain: Subtract Operator
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [a++]
    - Value: 20
    - Explain: post-increment
    --------------------------------------
    Final Value = 100
    Now 
    a = 12
    b = 21
    c = 81
    --------------------------------------
*/

/*
    ++a + -b + +c++ - -a++ + +a
    13    +  -21    +    81 - -   13  +   14
    [++a][+][-b][+][+][c++][-][-][a++][+][+]
    --------------------------------------
    [++a]
    - Value:13
    - Explain: pre-increment
    --------------------------------------
    [+]
    - Explain: Add Operator Not Concatenation
    --------------------------------------
    [-b]
    - Value = -21
    - Explain: Negation
    --------------------------------------
    [+]
    - Explain: Add Operator Not Concatenation
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [c++]
    - Value: 81
    - Explain: post-increment
    --------------------------------------
    [-]
    - Explain: Subtraction Operator
    --------------------------------------
    [-]
    - Value: -13
    - Explain: Negation
    --------------------------------------
    [a++]
    - Value: 13
    - Explain: post-increment
    --------------------------------------
    [+]
    - Explain: Add Operator Not Concatenation
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    Final Value = 100
    Now 
    a = 14
    b = 21
    c = 82
    --------------------------------------
*/

/*
    --c + +b + --a * +b++ - +b * a + --a - +true
    81 + 21 + (13 * 21) - (22 * 13) + 12 - 1
    [--c][+][+][+][--a][*][+][b++][-][+][*][+][--a][-][+]
    --------------------------------------
    [--c]
    - Value: 81
    - Explain: pre-decrement Operator
    --------------------------------------
    [+]
    - Explain: Addition Operator
    --------------------------------------
    [+b]
    - Value: 21
    - Explain: Unary Operator
    --------------------------------------
    [+]
    - Explain: Addition Operator
    --------------------------------------
    [--a]
    - Value: 13
    - Explain: pre-decrement Operator
    --------------------------------------
    [*]
    - Explain: Multiplication Operator
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [b++]
    - Value: 21
    - Explain: post-increment Operator
    --------------------------------------
    [-]
    - Explain: Subtraction Operator
    --------------------------------------
    [+]
    - Explain: Unary Operator
    --------------------------------------
    [*]
    - Explain: Multiplication Operator
    --------------------------------------
    [+]
    - Explain: Addition Operator
    --------------------------------------
    [--a]
    - Value: 12
    - Explain: pre-decrement Operator
    --------------------------------------
    [-]
    - Explain: Subtraction Operator
    --------------------------------------
    [+true]
    - Value: 1
    - Explain: Unary Operator
    --------------------------------------
    Final Value = 100
    Now 
    a = 12
    b = 22
    c = 81
    --------------------------------------
*/

// Second Challenge

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(e * -d); // 2000
console.log(-(--d) * ++g - --f); // 173
