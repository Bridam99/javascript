"use strict";

const valto = document.getElementById("valto");
const rendes = document.getElementById("rendes");
const tartalom = document.getElementById("tartalom");
const home = document.getElementById("home");
const linkek = document.getElementsByTagName("a");

const leker = async () => {
  try {
    await adatBeker("data/home.json", "dataHome");
    await adatBeker("data/chat.json", "dataChat");
    await adatBeker("data/help.json", "dataHelp");
    await adatBeker("data/info.json", "dataInfo");
    await adatBeker("data/hir.json", "dataHir");
    navmozgat("Home");
  } catch (error) {
    console.log(error.message);
  }
};

async function adatBeker(cim, localStorageCim) {
  const adatok = await fetch(cim);
  const data = await adatok.json();
  localStorage.setItem(localStorageCim, JSON.stringify(data));
}

leker();
