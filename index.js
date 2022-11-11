let home = 0
let guest = 0

document.getElementById("home-el").innerText = home
document.getElementById("guest-el").innerText = guest

function home1() {
    home += 1
    document.getElementById("home-el").innerText = home
}
function home2() {
    home += 2
    document.getElementById("home-el").innerText = home
}
function home3() {
    home += 3
    document.getElementById("home-el").innerText = home
}
function guest1() {
     guest += 1
    document.getElementById("guest-el").innerText = guest
}
function guest2() {
     guest += 2
    document.getElementById("guest-el").innerText = guest
}
function guest3() {
     guest += 3
    document.getElementById("guest-el").innerText = guest
}

