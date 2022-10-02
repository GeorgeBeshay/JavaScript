/*
    Template Literals (Template Strings)
*/

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + ' "" ' + b + "\n" + c + " " + d);

console.log(`${a} "" '' \\\\ ${b}
${c} ${d} = ${100 + 20}`);

let title = "ElZero";
let desc = "ElZero Web School";

let markUp = `
    <div class = "card">
        <div class = "child">
        <h2>${title}</h2>
        <p>${desc}</p>
        </div>
    </div>
`;

document.write(markUp);
