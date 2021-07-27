/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const kg = document.getElementById("search").value ;
    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;
    const output = document.getElementById("output");
    const h2 = document.createElement("h2");
    h2.textContent = "We have converted your given kilograms to:";
    output.append(h2);
    output.style.display = "block";
    output.style.color = "red"

    const r1 = document.createElement("p");
    const r2 = document.createElement("p");
    const r3 = document.createElement("p");
    output.append(r1,r2,r3);

    r1.textContent = `1. Kilograms converted to pounds (lb): ${lb}`;
    r2.textContent = `2. Kilograms converted to grams (g): ${g}`;
    r3.textContent = `3. Kilograms converted to ounce (oz): ${oz}`;
});