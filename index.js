let btnOn = document.querySelector(".btnOn");
let btnOff = document.querySelector(".btnOff");
const imageOne = document.querySelector(".on");
const imageTwo = document.querySelector(".off");

btnOff.addEventListener("click", function () {

  imageOne.style.display = "none"
  imageTwo.style.display = "block"
  btnOff.style.color = "red"
  btnOn.style.color = "black";
})

btnOn.addEventListener("click", function () {

    imageOne.style.display = "block"
    imageTwo.style.display = "none"
    btnOn.style.color = "red";
    btnOff.style.color = "black"
  })
  