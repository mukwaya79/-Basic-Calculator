
var screen = document.getElementById("screen")
var result1 = document.getElementById("result")

function num(i){
        screen.value =  screen.value + i
}

function result(){
    screen.value = eval(screen.value)
}

function clean(){
        screen.value =""
}

