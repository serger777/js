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


    a = prompt("enter number 1 to 7");
    var flag = false;


    function aletrDay(number) {
        function text(text) {
            var div = document.createElement('div');
            console.log(div);
            div.className = 'data';
            div.innerText = text;
            console.log(text);
            document.body.appendChild(div);
        }

        arDay = {
            "1": "monday",
            "2": "tuesday",
            "3": "wednesday",
            "4": "thursday",
            "5": "friday",
            "6": "saturday",
            "7": "sunday",
        }

        function numberDay(a) {
         for key in arDay{

         }
        }
        switch (number) {
            case "1": {
                var a = "monday";
                text(a);
                break;
            }
            case "2": {
                var a = "tuesday";
                text(a);
                break;
            }
            case "3": {
                var a = "wednesday";
                text(a);
                break;
            }
            case "4": {
                var a = "thursday";
                text(a);
                break;
            }
            case "5": {
                var a = "friday";
                text(a);
                break;
            }
            case "6": {
                var a = "saturday";
                text(a);
                break;
            }
            case "7": {
                var a = "sunday";
                text(a);
                break;
            }
            default: {
                alert("number not 1 to 7");
                flag = true;
            }


        }

    }


    aletrDay(a);
    if (flag) {
        b = prompt("enter number 1 to 7");
        aletrDay(b);
    }

}

whatDay();