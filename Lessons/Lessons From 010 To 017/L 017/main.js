let theTitle = "ElZero",
	my_description = "ElZero Web School",
	TheDate = "25/10";

let Obj = `
    <div class="container" 
    style="
    text-align: center; 
    margin-top: 20px; 
    width: fit-content; 
    margin-inline: auto;
    padding: 20px 50px;
    box-shadow: 0px 0px 20px gray;
    "> 
        <h3>Hello ${theTitle}</h3>
        <p>${my_description}</p>
        <span>${TheDate}</span>
    </div>
`;

document.write(Obj);
document.write(Obj);
document.write(Obj);
document.write(Obj);

// document.querySelectorAll(".container").style.color = "blue";
