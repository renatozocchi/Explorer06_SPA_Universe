import { Router } from "./router.js"

const router = new Router()
router.add("/", "./pages/home.html")
router.add("/universo", "./pages/universo.html")
router.add("/exploracao", "./pages/exploracao.html")

const homeBg = document.querySelector('nav a:nth-child(1)')
const universoBg = document.querySelector('nav a:nth-child(2)')
const exploracaoBg = document.querySelector('nav a:nth-child(3)')
const body = document.querySelector('body')

function changeHomeBg() {
  body.classList.add('home')
  body.classList.remove('universo')
  body.classList.remove('exploracao')
  homeBg.classList.add('underPage')
  universoBg.classList.remove('underPage')
  exploracaoBg.classList.remove('underPage')
}

function changeUniversoBg() {
  body.classList.remove('home')
  body.classList.add('universo')
  body.classList.remove('exploracao')
  homeBg.classList.remove('underPage')
  universoBg.classList.add('underPage')
  exploracaoBg.classList.remove('underPage')
}

function changeExploracaoBg() {
  body.classList.remove('home')
  body.classList.remove('universo')
  body.classList.add('exploracao')
  homeBg.classList.remove('underPage')
  universoBg.classList.remove('underPage')
  exploracaoBg.classList.add('underPage')
}

homeBg.addEventListener("click", () => {
  changeHomeBg()
})

universoBg.addEventListener("click", () => {
  changeUniversoBg()
})

exploracaoBg.addEventListener("click", () => {
  changeExploracaoBg()
})

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()