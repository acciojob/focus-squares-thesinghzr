

document.getElementById("square1").addEventListener("mouseover", ()=>{

    document.getElementById("square1").style.backgroundColor = "#E6E6FA";
    document.getElementById("square2").style.backgroundColor = "#6F4E37";
    document.getElementById("square3").style.backgroundColor = "#6F4E37";

});

document.getElementById("square2").addEventListener("mouseover", ()=>{

    document.getElementById("square2").style.backgroundColor = "#E6E6FA";
    document.getElementById("square1").style.backgroundColor = "#6F4E37";
    document.getElementById("square3").style.backgroundColor = "#6F4E37";

});
  

document.getElementById("square3").addEventListener("mouseover", ()=>{

    document.getElementById("square3").style.backgroundColor = "#E6E6FA";
    document.getElementById("square1").style.backgroundColor = "#6F4E37";
    document.getElementById("square2").style.backgroundColor = "#6F4E37";

});

document.getElementById("square1").addEventListener("mouseleave", ()=>{

    document.getElementById("square3").style.backgroundColor = "#E6E6FA";
    document.getElementById("square1").style.backgroundColor = "#E6E6FA";
    document.getElementById("square2").style.backgroundColor = "#E6E6FA";

});
document.getElementById("square2").addEventListener("mouseleave", ()=>{

    document.getElementById("square3").style.backgroundColor = "#E6E6FA";
    document.getElementById("square1").style.backgroundColor = "#E6E6FA";
    document.getElementById("square2").style.backgroundColor = "#E6E6FA";

});
document.getElementById("square3").addEventListener("mouseleave", ()=>{

    document.getElementById("square3").style.backgroundColor = "#E6E6FA";
    document.getElementById("square1").style.backgroundColor = "#E6E6FA";
    document.getElementById("square2").style.backgroundColor = "#E6E6FA";

});

  
