document.addEventListener("DOMContentLoaded", startCounter)

let countDown;
let x = 0 
let a = 1
const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector('#minus')
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const submit = document.querySelector("#submit")

function startCounter() {
    if (!countDown) {
        countDown = setInterval(start, 1000)
    }
}
function start() {
    counter.textContent = `${x++}`
}

function likeNumber() {
    if (document.querySelector(`#num${x}`) === null) {
        a = 1
        const newLi = document.createElement("li")
        newLi.setAttribute(`id`, `num${x}`)
        newLi.textContent = `${x} was liked ${a} times`
        document.querySelector(".likes").appendChild(newLi)   
    }
    else document.querySelector(`#num${x}`).textContent = `${x} was liked ${a++} times`
}

function pauseCounter() {
    clearInterval(countDown)
    countDown = null
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
    submit.disabled = true
    pause.textContent = " resume "
}

function restartCounter() {
    pause.textContent = " pause "
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    submit.disabled = false
    startCounter()
}

//Event Listener
plus.addEventListener("click", ()=> {    
    counter.textContent = `${x+=1}`
    console.log(`I am clicked, here is ${x}`)
})

minus.addEventListener("click", ()=> {
    counter.textContent = `${x-=1}`
    console.log(`I am clicked, here is ${x}`)
})

heart.addEventListener("click", likeNumber)

pause.addEventListener("click", ()=>{
    console.log(pause.textContent)
    if (pause.textContent === " pause ") {
        pauseCounter()
        console.log("I am paused")
    }
    else (restartCounter())
})

const input = document.querySelector("input")
let form = document.querySelector("form")
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    addComments(input.value)
    form.reset()
})

function addComments(comment) {
    let p = document.createElement("p")
    p.textContent = comment
    document.querySelector("#list").appendChild(p)
}