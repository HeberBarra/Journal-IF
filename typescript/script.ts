const rootElement: HTMLElement | null = document.querySelector(":root")
const themeButton: HTMLButtonElement | null = document.querySelector("#theme")
const logoIF: HTMLImageElement | null = document.querySelector("#logo")
let theme: "dark" | "light" = matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"

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

    changeLogo()

    cssVariables.forEach((cssVariable) => {
        rootElement?.style.setProperty(cssVariable.varName, cssVariable.colors[colorIndex])
    })
}

const changeLogo = () => {
    if (!logoIF) { return }

    const logoImages: string[] = ["imagens/logoIF.png", "imagens/logoIFDarkMode.png"]

    if (theme == "light") {
        logoIF.src = logoImages[1]
        return
    }

    logoIF.src = logoImages[0]
}

themeButton?.addEventListener("click", changeTheme)
changeLogo()