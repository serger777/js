// task 1
// function ArrayBack(main) {
//     var inter = function (str) {
//         if (str != 0) {
//             result = -str;
//         } else {
//             result = str;
//         }
//         return result;
//     }
//     result = main.map(inter);
//     return result;
// }
// var a = [-10, 0, 10, -4, 5, -6, 5, -7, 8, -9];
// var result = ArrayBack(a);


// // task 2
// function day(name) {
//     if (name != ""){
//         var name = name;
//     }else{
//         var name = "people";
//     }
//     var time = new Date().getHours();
//     if (time > 6 && time < 10) {
//         alert("Good morning " + name);
//     }
//     if (time > 10 && time < 15) {
//         alert("Good morning" + name);
//     }
//     if (time > 15 && time < 21) {
//         alert("Good evening " + name);
//     }
//     if (time > 21 && time < 6){
//         alert("Good night" + name);
//     }
// }
//
// var name = prompt("you name");
// day(name);
//
//
// //task3
// function PriceMask(number) {
//     var a = String(number);
//     var price = a.split("");
//     var lengt = price.length;
//     if (lengt > 5) {
//         price.splice(lengt - 5, 0, "  ")
//     }
//     if (lengt > 2) {
//         price.splice(lengt - 1, 0, " , ");
//     }
//
//     price.push(" ")
//     price.push("rub")
//     var price_f = price.join("");
//
// }
//
// PriceMask(121348);
//
//
//
// //task 4
function whatDay() {
    flag = true;
    arDay = ["monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",]
    function text(text) {
        var div = document.createElement('div');
        div.className = 'data';
        document.body.appendChild(div);
        div.innerText = text;
    }
    function numberDay(a) {
        var dayName = arDay[a - 1];
        if (dayName != undefined) {
            text(dayName)
            flag = false;
        } else {
            alert("number not 1 to 7");
        }
    }
    while (flag) {
        a = prompt("enter number 1 to 7");
        numberDay(a);
    }
}

whatDay();