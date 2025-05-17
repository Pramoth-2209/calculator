function add(){
    let a=Number(document.getElementById("inp").value);
    let aa=Number(document.getElementById("inp2").value);
    let b=document.getElementById("lbl1");
    let c=a+aa;
    b.innerHTML=c;  
}
function sub(){
    let a=Number(document.getElementById("inp").value);
    let aa=Number(document.getElementById("inp2").value);
    let b=document.getElementById("lbl1");
    let c=a-aa;
    b.innerHTML=c;

}
function mul(){
    let a=Number(document.getElementById("inp").value);
    let aa=Number(document.getElementById("inp2").value);
    let b=document.getElementById("lbl1");
    let c=a*aa
    b.innerHTML=c;
}
function div(){
    let a=Number(document.getElementById('inp').value);
    let aa=Number(document.getElementById("inp2").value);
    let b=document.getElementById("lbl1");
    let c=a/aa;
    b.innerHTML=c;
}

function cler(){
    let a=document.getElementById("inp").value = "";
    let b=document.getElementById("inp2").value = "";
    let c=document.getElementById("lbl1").innerHTML = "";
}

