
import gsap from "./gsap/index.js"

const footer = document.getElementById("footer")


window.addEventListener("resize",footerUltimo)
window.addEventListener("load",footerUltimo)

function footerUltimo() {
    let h = footer.offsetHeight;
    document.body.style.paddingBottom = `${h}px`
}

gsap.core.Tween.from(".img-phone",{
    x:40,
    y:50,
    duration:4
})