alert("Hello TEJ!");

function hello(){
    alert("Hello there!");
}

counter =0 ;

function display(){
    document.getElementById("text_box").value=counter;
}

function increment(){
   document.getElementById("text_box").value=++counter;
    
}

function decrement(){
    document.getElementById("text_box").value=--counter;
    
}
