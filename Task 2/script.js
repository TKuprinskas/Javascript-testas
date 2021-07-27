/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var clicks = 0;
const btn = document.getElementById("btn__element");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  clicks += 1;
  document.getElementById("btn__state").textContent = clicks;
});
