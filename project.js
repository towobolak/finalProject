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
    const radios = document.getElementsByName('number');
    
    let total = 0;

    for (let i = 0; i < radios.length; i++) {
        // Check if the radio button is selected
        if (radios[i].checked) {
            // Retrieve the value of the selected radio button
            const value = parseInt(radios[i].value);
            // Add the value to the total
            total += value;
        }
    }


    document.getElementById("show").innerText = firstName+ ", you scored" +total;

    div3.style.display='none';
    div4.style.display='block';
}

function myFunction4(){
    var div1 = document.getElementById("cont1");
    var div4 = document.getElementById("cont4");

    div4.style.display='none';
    div1.style.display='block';
}


function calculateTotal() {
    // Get all radio buttons with the name "number"
    
    
    

    // Loop through each radio button
    for (let i = 0; i < radios.length; i++) {
        // Check if the radio button is selected
        if (radios[i].checked) {
            // Retrieve the value of the selected radio button
            const value = parseInt(radios[i].value);
            // Add the value to the total
            total += value;
        }
    }

    // Display the total
    document.getElementById('total').textContent = total;
}