var slides = [];
var dots = [];
var n = 5;
var current_slide; //index of the slides array

for (var i = 0; i < n; ++i){
    slides[i] = document.createElement("div");
    slides[i].setAttribute("class", "slide");

    var img = document.createElement("img");
    img.setAttribute("src", "img/"+i+".jpg" );
    slides[i].append(img);

    var caption = document.createElement("div");
    caption.setAttribute("class", "caption");
    caption.innerHTML = "North Dakota " +(i+1);
    slides[i].append(caption);

    document.querySelector(".previous").before(slides[i]);

    dots[i] = document.createElement("span");
    dots[i].setAttribute("class", "dot");
    
    dots[i].setAttribute("onclick", "show("+i+")");

    document.querySelector(".dot-container").append(dots[i]);
}

show(0) //call the function show

document.querySelector(".next").onclick = function(){
    if (current_slide + 1 == 5){
        show(0);
    }else{
        show(current_slide+1);
    }
    // show((current_slide + 1)%n);
}

document.querySelector(".previous").onclick = function(){
    if (current_slide - 1 == -1){
        show(n-1);
    }else{
        show(current_slide-1);
    }
    // show((current_slide - 1)%n);
}



function show(index) { //definition of show
    for (var i = 0; i < n; ++i){
        slides[i].style.setProperty("display", "none");
        dots[i].setAttribute("class", "dot");
    }

    slides[index].style.setProperty("display", "block");
    dots[index].setAttribute("class", "dot active");

    current_slide = index;

}

// function show(index) { //definition of show
//     for (var i = 0; i < n; ++i){
//         slides[i].style.setProperty("display", "none");
//         dots[i].setAttribute("class", "dot");
//     }
 
//     slides[index].style.setProperty("display", "block")
//     dots[i].setAttribute("class", "dot active"); // <----------------BUG
//     current_slide = index;
 
// }


