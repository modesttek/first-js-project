let counterNum = document.getElementById("counter-num")
let rateSaved = document.getElementById("saved-rates")
let count = 0

function addRate() {
  // count += +1
  // count = count + 1
  count += 1
  counterNum.innerText = count
}

function saveRate() {
  let savedCount = count + " - "
  rateSaved.textContent += savedCount
  counterNum.innerText = 0
  count = 0
}

function clearRate() {
  rateSaved.textContent = "Saved Rates: "
}




