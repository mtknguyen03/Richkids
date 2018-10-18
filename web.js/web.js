var buttonClick1 = document.getElementsByClassName("1");
var buttonClick2 = document.getElementsByClassName("2");
var buttonClick3 = document.getElementsByClassName("3");
var buttonClick4 = document.getElementsByClassName("4");
var buttonClick5 = document.getElementsByClassName("5");
var buttonClick6 = document.getElementsByClassName("6");
var message1 = document.getElementsByClassName("message1")
var message2 = document.getElementsByClassName("message2")
var message3 = document.getElementsByClassName("message3")
var quiz1 = {
    name : "quiz 1",
    options : [12, 10],
    answer : 12,
}

var quiz2 = {
    name : "quiz 2",
    options : [9, 8],
    answer : 8,
}

var quiz3 = {
    name : "quiz 3",
    options : [29, 19],
    answer : 29,
}


buttonClick1[0].addEventListener("click", () => {
    console.log("Ez");
    message1[0].textContent = "Giỏi đấy";
    buttonClick4[0].disabled = true;
})
buttonClick2[0].addEventListener("click", () => {
    console.log("Stupid");
    message2[0].textContent = "Mù màu rồi";
    buttonClick5[0].disabled = true;
})
buttonClick3[0].addEventListener("click", () => {
    console.log("Ez");
    message3[0].textContent = "Giỏi đấy";
    buttonClick6[0].disabled = true;
})
buttonClick4[0].addEventListener("click", () => {
    console.log("Stupid");
    message1[0].textContent = "Mù màu rồi";
    buttonClick1[0].disabled = true;
})
buttonClick5[0].addEventListener("click", () => {
    console.log("Ez");
    message2[0].textContent = "Giỏi đấy";
    buttonClick2[0].disabled = true;
})
buttonClick6[0].addEventListener("click", () => {
    console.log("Stupid");
    message3[0].textContent = "Mù màu rồi";
    buttonClick3[0].disabled = true;
})



var messages = document.querySelectorAll(".message");


