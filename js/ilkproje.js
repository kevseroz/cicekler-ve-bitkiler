var navbra = document.querySelector("#navbra");
var h1 = document.querySelectorAll("h1");
var drop = document.querySelector("#drop");

navbra.addEventListener("click", function(){
    alert("navbar brand clicked");
});


for(var i = 0; i<h1.length; i++){
    h1[i].addEventListener("mouseover", function(){
        this.style.color = "#d7a7ef";
    });
    h1[i].addEventListener("mouseout", function(){
        this.style.color = "black";
    });
}

$("#drop").click(function(){
    $(".slide").slideToggle();
});