/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");

function createUsersTable(users) {
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  const thead = document.createElement("thead");
  thead.style.fontWeight = "900";
  thead.style.background = "#888";
  const tbody = document.createElement("tbody");
  const tr = createRow();
  tr.append(createTd("Brand"), createTd("Models"));

  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);

  users.forEach((user) => {
    const tr = createRow();
    tr.append(createTd(user.brand), createTd(user.models));
    tbody.appendChild(tr);
  });
  return table;
}

function createRow() {
  const tr = document.createElement("tr");
  return tr;
}

function createTd(textContent) {
  const td = document.createElement("td");
  td.style.border = "1px solid black";
  td.textContent = textContent;
  return td;
}

fetch("./cars.json")
  .then((res) => res.json())
  .then((data) => {
    const table = createUsersTable(data);

    output.appendChild(table);
  });
