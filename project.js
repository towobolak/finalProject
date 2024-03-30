function myFunction(){
var div1 = document.getElementById("cont1");
var div2 = document.getElementById("cont2");
var firstName= document.getElementById("name11").value;

    div1.style.display='none';
    div2.style.display='block';
}

function myFunction1(){
    var div2 = document.getElementById("cont2");
    var div3 = document.getElementById("cont3");

    div2.style.display='none';
    div3.style.display='block';
}

function previouss(){
    var div3 = document.getElementById("cont3");
    var div2 = document.getElementById("cont2");

    div3.style.display='none';
    div2.style.display='block';
}

function myFunction3(){
    var div3 = document.getElementById("cont3");
    var div4 = document.getElementById("cont4");
    var firstName= document.getElementById("name11").value;

    document.getElementById("show").innerText = firstName+ ", you scored" ;

    div3.style.display='none';
    div4.style.display='block';
}

function myFunction4(){
    var div1 = document.getElementById("cont1");
    var div4 = document.getElementById("cont4");

    div4.style.display='none';
    div1.style.display='block';
}
