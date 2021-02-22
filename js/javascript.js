const close = document.querySelector(".closeBtn");        //close button
const open = document.querySelector(".openBtn");          //open button
const closing = document.querySelector(".closingBtn");            //closing button on mobile size

close.addEventListener("click", off);       //closing event add

function off() {                         // closing function   

    // document.querySelector(".rightCol").style.transform = "translateX(350px)";
    document.querySelector(".rightCol").style.display = "none";
    close.style.display = "none";

    var col9 = document.querySelectorAll(".col-9");
    for (x in col9) {
        col9[x].classList.add("col-12");
        col9[x].classList.remove("col-9");
    }

}

open.addEventListener("click", on);         // opening event add

function on() {                 //opening function

    // document.querySelector(".rightCol").style.transform = "translateX(0)";
    document.querySelector(".rightCol").style.display = "flex";

    close.style.display = "block";

    var col9 = document.querySelectorAll(".col-12");
    for (x in col9) {
        col9[x].classList.remove("col-12");
        col9[x].classList.add("col-9");
    }
    document.querySelector(".container-fluid").style.zIndex = "1";
}

closing.addEventListener("click", off);          // closing mobile event add

function out(){
    if(window.innerWidth < 700 ){
        off();
    }
}