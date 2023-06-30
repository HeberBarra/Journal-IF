"use strict";
const rootElement = document.querySelector(":root");
const themeButton = document.querySelector("#theme");
let theme = "dark";
const cssVariables = [
    {
        "varName": "--backgroundColor",
        "colors": ["#ffffff", "#070707"]
    },
    {
        "varName": "--fontColor",
        "colors": ["#000000", "#ffffff"]
    }
];
const changeTheme = () => {
    let colorIndex;
    if (theme == "light") {
        theme = "dark";
        colorIndex = 0;
    }
    else {
        theme = "light";
        colorIndex = 1;
    }
    cssVariables.forEach((cssVariable) => {
        rootElement?.style.setProperty(cssVariable.varName, cssVariable.colors[colorIndex]);
    });
};
themeButton?.addEventListener("click", changeTheme);
