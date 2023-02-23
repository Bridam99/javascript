"use strict";

function tartalomInfo(adat) {
  // Újra létrehozom a home-elemet.
  const home = document.getElementById("home");
  let elem = document.createElement("div");
  elem.setAttribute("id", "home");

  // Tartalom feltöltése.
  let h1 = document.createElement("h1");
  let h1Szoveg = document.createTextNode(adat.cim);
  h1.appendChild(h1Szoveg);
  elem.appendChild(h1);
  let varos = document.createElement("p");
  let varosSzoveg = document.createTextNode("Város: " + adat.tartalom.varos);
  varos.appendChild(varosSzoveg);
  elem.appendChild(varos);
  let utca = document.createElement("p");
  let utcaSzoveg = document.createTextNode(
    "Utca: " + adat.tartalom.utca + "," + adat.tartalom.hazszam
  );
  utca.appendChild(utcaSzoveg);
  elem.appendChild(utca);
  let iranyito = document.createElement("p");
  let iranyitoSzoveg = document.createTextNode(
    "Irányítószám: " + adat.tartalom.iranyitoszam
  );
  iranyito.appendChild(iranyitoSzoveg);
  elem.appendChild(iranyito);
  let img = document.createElement("img");
  img.src = `${adat.kep}`;

  // A két home elem cseréje.
  elem.appendChild(img);
  tartalom.replaceChild(elem, home);
}
