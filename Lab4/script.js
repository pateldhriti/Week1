function calculateSquare() {
  let inputNumber = document.getElementById("numberInput").value;
  let square = inputNumber * inputNumber;
  document.getElementById("result").innerText = "Square: " + square;
}
