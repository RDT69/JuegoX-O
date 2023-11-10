let col;
let fil;
do {
  col = parseInt(prompt("Ingresa el numero de columnas: "));
  fil = parseInt(prompt("Ingresa el numero de filas: "));
} while (isNaN(col) || isNaN(fil) || col <= 0 || fil <= 0);

const table = document.querySelector("table");
for (let i = 0; i < col; i++) {
  let tr = document.createElement("tr");
  table.append(tr);
  for (let j = 0; j < fil; j++) {
    let td = document.createElement("td");
    let XO = Math.floor(Math.random() * 2) ? "X" : "O";
    td.textContent = XO;
    td.onclick = () => change(td);
    tr.append(td);
  }
}
function countXO() {
  let tds = document.querySelectorAll("td");
  let numX = 0;
  let numO = 0;

  tds.forEach((td) => {
    if (td.textContent == "X") numX++;
    else numO++;
  });
  document.getElementById("equis").textContent = numX;
  document.getElementById("oes").textContent = numO;
}

function change(cell) {
  cell.textContent = cell.textContent == "X" ? "O" : "X";

  let tr = cell.parentElement;
  let tds = [...tr.children];
  let firstXO = tds[0].textContent;
  let index = tds.indexOf(cell);

  //Comprobamos si todas las columnas son del mismo simbolo.
  //COMPROBAR SI LA COLUMA SON DEL MISMO SIMBOLO.
  //Si son iguales se eliminan.

  let column = document.querySelectorAll(`td:nth-child(${index + 1})`);
  // console.log("indice : ", index);
  // console.log(column);
  if ([...column].every((td) => td.textContent == cell.textContent)) {
    [...column].forEach((td) => td.remove());
  }
  //COMPROBACION SI LA FILA ES DEL MISMO SIMBOLO.
  //Si son iguales se elimina.
  if (tds.every((td) => td.textContent == firstXO)) {
    tr.remove();
  }
  countXO();
}
