// task 1
function ArrayBack(main) {
 var charMain =   main.map(function (str) {
     return   (str) ? -str : str;
    });
    console.log(charMain);
}
var a = [-10, 0, 10, -4, 5, -6, 5, -7, 8, -9];
ArrayBack(a);


// // task 2
function day(name) {
    if (name) {
        var name = name;
    } else {
         name = "people";
    }
    var time = new Date().getHours();
    if (time > 6 && time < 10) {
        alert("Good morning " + name);
    }
    if (time > 10 && time < 15) {
        alert("Good morning" + name);
    }
    if (time > 15 && time < 21) {
        alert("Good evening " + name);
    }
    if (time > 21 && time < 6) {
        alert("Good night" + name);
    }
}
var name = prompt("you name");
day(name);
//task 4
function whatDay() {
    flag = true;
    arDay = ["monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",];

    function text(text) {
        var div = document.createElement('div');
        div.className = 'data';
        document.body.appendChild(div);
        div.innerText = text;
    }
    function numberDay(a) {
        var dayName = arDay[a - 1];
        if (dayName) {
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




//task 3
function numMask(number) {
    console.log(new Intl.NumberFormat('ru-RU',{
        style: "currency",
        currency : "RUB"
    }).format(number));
}

var number = 1234523216545;
numMask(number);

//task3
// function PriceMask(number) {
//     var price = String(number);
//     var lengt = price.length;
//     if (lengt > 2 && lengt < 4) {
//         var price = price.substr(0, lengt - 2) + "," + price.substr(lengt - 2) + "rub"
//     }
//     if (lengt > 5) {
//         var price = price.substr(0, lengt - 5) + " " + price.substr(lengt - 5, lengt - 2) + "," + price.substr(lengt - 2) + "rub"
//     }
//     console.log(price);
// }
//
// PriceMask(121348);