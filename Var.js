"use strict"
const input = document.querySelectorAll("input")
const js = document.getElementById("js")
const image = document.querySelector("img")
function changeHandler() {
    const suffix = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)

}
input.forEach(function (e) {
    e.addEventListener("change", changeHandler)
    e.addEventListener("mousemove", changeHandler)
})