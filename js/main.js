let facebook = document.querySelector(".facebook"); 
let twitter = document.querySelector(".twitter")
let instagram = document.querySelector(".instagram")
let telegram = document.querySelector(".telegram")
let button = document.querySelector(".button"); 
let text = document.querySelector(".job")

facebook.addEventListener("click",() => {
    alert("Uzur xozircha facebookda yo`qman!")
})
twitter.addEventListener("click",() => {
    alert("Uzur xozircha twitterda yo`qman!")
})
instagram.addEventListener("click",() => {
    alert("Instagram sahifamni sizga bera olmayman,chunki bu xavfli.Hozirda kiberjinoyat jadal rivojlanib ketgan uzur!")
})
telegram.addEventListener("click",() => {
    alert("Tekegram sahifamni sizga bera olmayman,chunki bu xavfli.Hozirda kiberjinoyat jadal rivojlanib ketgan uzur!")
})

button.addEventListener("click", () => {
    text.textContent = 'Hello,what`s your name?'
    setTimeout(() => {
    text.textContent = 'Frontend'
    },2000)
})