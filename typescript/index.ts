const followButton: HTMLButtonElement | null = document.querySelector("#follow")
const header: any | null = document.querySelector("header")
const filtroNoticias: HTMLSelectElement | null = document.querySelector("select")
const noticias: NodeListOf<HTMLElement> | null = document.querySelectorAll("article:not(.info)")

followButton?.addEventListener("click", () => {
    if (header.style.position == "sticky") {
        header.style.position = "absolute"
        followButton.innerHTML = "voltar a seguir"
        return
    }

    header.style.position = "sticky"
    followButton.innerHTML = "parar de seguir"
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