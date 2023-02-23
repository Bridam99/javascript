"use strict";

let szamlalo = 0;

function navmozgat(oldal) {
  const dataHome = JSON.parse(localStorage.getItem("dataHome"));
  const dataChat = JSON.parse(localStorage.getItem("dataChat"));
  const dataHelp = JSON.parse(localStorage.getItem("dataHelp"));
  const dataInfo = JSON.parse(localStorage.getItem("dataInfo"));
  const dataHir = JSON.parse(localStorage.getItem("dataHir"));

  if (rendes.offsetWidth < 500) {
    if (szamlalo % 2 == 0) {
      rendes.style.display = "block";
    } else {
      rendes.style.display = null;
    }
  } else {
    rendes.style.display = "block";
  }

  if (oldal == "Home") {
    oldalvalt(oldal, dataHome);
  } else if (oldal == "Chat") {
    oldalvalt(oldal, dataChat);
  } else if (oldal == "Help") {
    oldalvalt(oldal, dataHelp);
  } else if (oldal == "Info") {
    oldalvalt(oldal, dataInfo);
  } else if (oldal == "Hir") {
    oldalvalt(oldal, dataHir);
  }

  szamlalo++;
}
