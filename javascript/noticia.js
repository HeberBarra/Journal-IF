"use strict";
const url = window.location.href;
const localNoticia = document.querySelector("main article");
const tituloNoticia = url.split("noticia=")[1];
const homeButton = document.querySelector("#home");
const htmlElementNames = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "IMG", "A"];
homeButton?.addEventListener("click", () => { window.location.href = "index.html"; });
let infoNoticia = window.localStorage.getItem(tituloNoticia)?.split(',');
if (infoNoticia != undefined) {
    let lastElementCreated = null;
    let textElement;
    let textInfo = "";
    for (let i = 0; i < infoNoticia.length; i++) {
        if (htmlElementNames.includes(infoNoticia[i])) {
            lastElementCreated = document.createElement(infoNoticia[i]);
            localNoticia?.appendChild(lastElementCreated);
            textElement = undefined;
            continue;
        }
        if (textElement != undefined) {
            textInfo += ", ";
        }
        textInfo += infoNoticia[i];
        console.log(textInfo);
        if (textInfo != "") {
            textElement = document.createTextNode(textInfo);
            textInfo = "";
            lastElementCreated?.appendChild(textElement);
        }
    }
}
else {
    window.alert("Notícia não existe ou não foi acessada pelo site principal");
    window.location.href = "index.html";
}
