const rootElement: HTMLElement | null = document.querySelector(":root")
const themeButton: HTMLButtonElement | null = document.querySelector("#theme")
let theme: "dark" | "light" = "dark"

const cssVariables = [
    // light | dark
    {
        "varName": "--backgroundColor",
        "colors": ["#ffffff", "#070707"]
    },
    {
        "varName": "--fontColor",
        "colors": ["#000000", "#ffffff"]
    }
]

const changeTheme = () => {
    let colorIndex: 0 | 1
    if (theme == "light") {
        theme = "dark"
        colorIndex = 0
    } else {
        theme = "light"
        colorIndex = 1
    }

    cssVariables.forEach((cssVariable) => {
        rootElement?.style.setProperty(cssVariable.varName, cssVariable.colors[colorIndex])
    })
}

themeButton?.addEventListener("click", changeTheme)
