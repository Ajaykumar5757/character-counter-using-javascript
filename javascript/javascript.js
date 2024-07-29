var count=0;
var total=50;
function check(){
    var msg = document.getElementById("content").value; 
    // console.log(msg);
    var length=msg.length;
    var char=msg[length-1];
    if(count>=50){
        alert("you cant enter more than 50 characters");
        document.getElementById("entered").innerHTML=50;
        document.getElementById("remaining").innerHTML=0;
    }
    else{
        count++;
        var remaining=total-count;
        document.getElementById("entered").innerHTML=count;
        document.getElementById("remaining").innerHTML=remaining;
    }  
}