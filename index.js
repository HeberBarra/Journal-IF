const followButton = document.querySelector("#follow")
const header = document.querySelector("header")
const filtroNoticias = document.querySelector("select")
const noticias = document.querySelector("article:not(.info)")

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

})
