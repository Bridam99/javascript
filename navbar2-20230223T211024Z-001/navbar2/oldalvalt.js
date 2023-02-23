"use strict";

function oldalvalt(oldal, data) {
  if (oldal == "Home") {
    tartalomHome(data);
    linkek[1].setAttribute("class", "active");
    linkek[2].removeAttribute("class");
    linkek[3].removeAttribute("class");
    linkek[4].removeAttribute("class");
    linkek[5].removeAttribute("class");
  } else if (oldal == "Chat") {
    tartalomChat(data);
    linkek[1].removeAttribute("class");
    linkek[2].setAttribute("class", "active");
    linkek[3].removeAttribute("class");
    linkek[4].removeAttribute("class");
    linkek[5].removeAttribute("class");
  } else if (oldal == "Help") {
    tartalomHelp(data);
    linkek[1].removeAttribute("class");
    linkek[2].removeAttribute("class");
    linkek[3].setAttribute("class", "active");
    linkek[4].removeAttribute("class");
    linkek[5].removeAttribute("class");
  } else if (oldal == "Info") {
    tartalomInfo(data);
    linkek[1].removeAttribute("class");
    linkek[2].removeAttribute("class");
    linkek[3].removeAttribute("class");
    linkek[4].setAttribute("class", "active");
    linkek[5].removeAttribute("class");
  } else if (oldal == "Hir") {
    tartalomHir(data);
    linkek[1].removeAttribute("class");
    linkek[2].removeAttribute("class");
    linkek[3].removeAttribute("class");
    linkek[4].removeAttribute("class");
    linkek[5].setAttribute("class", "active");
  }
}
