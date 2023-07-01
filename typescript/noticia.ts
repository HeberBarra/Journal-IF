const url = window.location.href
const localNoticia: HTMLElement | null = document.querySelector("main article")
const tituloNoticia: string | undefined = url.split("noticia=")[1]
const homeButton: HTMLButtonElement | null = document.querySelector("#home")
const htmlElementNames = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "IMG", "A"]

homeButton?.addEventListener("click", () => { window.location.href = "index.html" })

let infoNoticia = window.localStorage.getItem(tituloNoticia)?.split(',')

if (infoNoticia != undefined) {
    let lastElementCreated: HTMLElement | null = null
    let textInfo = ""

    for (let i = 0; i < infoNoticia.length; i++) {
        if (htmlElementNames.includes(infoNoticia[i])) {
            lastElementCreated = document.createElement(infoNoticia[i])
            localNoticia?.appendChild(lastElementCreated)

            continue
        }

        textInfo += infoNoticia[i]
        console.log(textInfo)

        if (textInfo != "") {
            let textElement = document.createTextNode(textInfo)
            textInfo = ""
            lastElementCreated?.appendChild(textElement)
        }
    }
}
