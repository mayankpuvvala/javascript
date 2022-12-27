let clickbtn= document.querySelector('button');
clickbtn.addEventListener('click',showMsg);
// the above link 2nd 'click' is from the code which gives us the function click 

function showMsg () {
    alert("clicked");
}

let name= window.prompt("what is your name?");
document.write("roll:"+ name);