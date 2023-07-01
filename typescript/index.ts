const followButton: HTMLButtonElement | null = document.querySelector("#follow")
const header: any | null = document.querySelector("header")
const filtroNoticias: HTMLSelectElement | null = document.querySelector("select")
const noticias: NodeListOf<HTMLElement> | null = document.querySelectorAll("article:not(.info)")

followButton?.addEventListener("click", () => {
    if (header.style.position == "relative") {
        header.style.position = "sticky"
        followButton.innerHTML = "parar de seguir"
        return
    }

    header.style.position = "relative"
    followButton.innerHTML = "voltar a seguir"
})

filtroNoticias?.addEventListener("change", () => {
    for (let i = 0; i < noticias.length; i++) {
        if (filtroNoticias.value == "todas") {
            noticias[i].style.display = "block"
            continue
        }

        if (filtroNoticias.value == noticias[i].className) {
            noticias[i].style.display = "block"
            continue
        }

        noticias[i].style.display = "none"
    }
})

const corrigirTitulo = (titulo: string):string => {
    const caractersInvalidos = ["\"", "?", "ç", "é", "ã", "ó", "õ", "í", "ö", "ú", "\'", " ", "ê", "â"]

    titulo = titulo.trim().toLowerCase()

    caractersInvalidos.forEach(caracter => {titulo = titulo.replaceAll(caracter, "")})

    return titulo
}

noticias?.forEach((noticia) => {
    noticia.children[noticia.children.length - 1].addEventListener("click", () => {
        let infoNoticia = []
        for (let i = 0; i < noticia.children.length; i++) {
            let ntcChildren = noticia.children[i]
            if (ntcChildren.innerHTML.includes("<button>") || ntcChildren.tagName == "BUTTON") {continue}
            infoNoticia.push([ntcChildren.tagName, ntcChildren.innerHTML])
        }
        let tituloNoticia = corrigirTitulo(infoNoticia[0][1])
        
        window.localStorage.setItem(tituloNoticia, infoNoticia.toString())
        window.location.href = `noticia.html?noticia=${tituloNoticia}`                
    })
})
