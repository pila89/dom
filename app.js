var like = document.getElementsByClassName("like-btn");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color === "black") {
      like[i].style.color = "red";
    } else {
      like[i].style.color = "black";
    }
  });
}

var plus = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
    totalPrice();
  });
}

var minus = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML > 0) {
      minus[i].previousElementSibling.innerHTML--;
    }
    totalPrice();
  });
}

var Del = document.querySelectorAll(".delete-btn");
for (let i = 0; i < Del.length; i++) {
  Del[i].addEventListener("click", function () {
    Del[i].parentElement.parentElement.parentElement.remove();

    totalPrice();
  });
}


function totalPrice() {
  var itemPrice = document.querySelectorAll(".price");
  var qtt = document.querySelectorAll(".number-items");
  var total = 0;
  for (let i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i].innerHTML * qtt[i].innerHTML;
    document.getElementById("total").innerHTML = total;
  }
}