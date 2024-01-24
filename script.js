const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const button = document.querySelector("button");
const p = document.querySelector("p");

function getQr() {
  if (qrText.value.length > 0) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error")
    p.innerHTML = "Please Enter Some Text"
    p.classList.add("p")
    
    setTimeout(() => {
        qrText.classList.remove("error")
        p.classList.remove("p")
        p.innerHTML = "Enter your name or Url"
    }, 2000)
  }
}

button.addEventListener("click", getQr);
