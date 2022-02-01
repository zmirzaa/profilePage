
var h2 = document.querySelector("h2"); 

function changeName () {
    h2.innerText = "Zainab Mirza"; 
}



function accept(id) {
    document.querySelector(id).remove(); 
    document.querySelector('#like-span').innerText++; 
    document.querySelector('#two').innerText--;
}


function decline(id) {
    document.querySelector(id).remove(); 
    document.querySelector('#two').innerText--;
}

