console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let locationBtn = document.querySelector("#locationButton")
let locationTxt = document.querySelector("#locationText")

locationBtn.addEventListener("click", function() {
  locationTxt.textContent = "1300 Boynton Ave (moving soon!)"
})


// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence
let S = document.querySelector("#S")
let C = document.querySelector("#C")
let O = document.querySelector("#O")
let R = document.querySelector("#R")
let E = document.querySelector("#E")

S.addEventListener("click", function() {
  S.textContent = "Self-awareness"
})
C.addEventListener("click", function() {
  C.textContent = "Consistency"
})
O.addEventListener("click", function() {
  O.textContent = "Ownership"
})
R.addEventListener("click", function() {
  R.textContent = "Resilience"
})
E.addEventListener("click", function() {
  E.textContent = "Excellence"
})


// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displays the front image
// First image: Mouse over -> joggers-back.webp, mouse off -> joggers-front.webp
// Second image: Mouse over -> sweater-back.webp, mouse off -> sweater-front.webp
let joggerImg = document.querySelector("#jogger")
let sweaterImg = document.querySelector("#sweater")

joggerImg.addEventListener("mouseover", function() {
  joggerImg.src = "joggers-back.webp"
})
joggerImg.addEventListener("mouseout", function() {
  joggerImg.src = "joggers-front.webp"
})

sweaterImg.addEventListener("mouseover", function() {
  sweaterImg.src = "sweater-back.webp"
})
sweaterImg.addEventListener("mouseout", function() {
  sweaterImg.src = "sweater-front.webp"
})


// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)
S.addEventListener("mouseover", function() {
  S.style.color = "#3ab54b"
})
S.addEventListener("mouseout", function() {
  S.style.color = "black"
})

C.addEventListener("mouseover", function() {
  C.style.color = "#3ab54b"
})
C.addEventListener("mouseout", function() {
  C.style.color = "black"
})

O.addEventListener("mouseover", function() {
  O.style.color = "#3ab54b"
})
O.addEventListener("mouseout", function() {
  O.style.color = "black"
})

R.addEventListener("mouseover", function() {
  R.style.color = "#3ab54b"
})
R.addEventListener("mouseout", function() {
  R.style.color = "black"
})

E.addEventListener("mouseover", function() {
  E.style.color = "#3ab54b"
})
E.addEventListener("mouseout", function() {
  E.style.color = "black"
})

