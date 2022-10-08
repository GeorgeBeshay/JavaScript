/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number if it is not number + negates it]
    Tests
    - Normal Number
    - String Number
    - String negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - Null
    - False
    - True
*/

console.log(100);
console.log("100");

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
