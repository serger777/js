// task 1
function ArrayBack(main) {
    for (key in main) {
        main[key] = -main[key]
    }
}

var a = [-10, 1, 10, -4, 5, -6, 5, -7, 8, -9];

ArrayBack(a);


// task 2
function day(name) {
    var data = new Date();
    var time = data.getHours();
    if (time > 6 && time < 10) {
        alert("Good morning " + name);
    }
    if (time > 10 && time < 15) {
        alert("Good morning" + name);
    }
    if (time > 15 && time < 21) {
        alert("Good evening " + name);
    } else {
        alert("Good night" + name);
    }
}

var name = "sergey";
day(name);