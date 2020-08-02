var li= document.getElementsByTagName("li");
var i;
for(i=0; i< li.length; i++)
{
    var span= document.createElement("SPAN");
    var tex= document.createTextNode("\u00D7");
    span.appendChild(tex);
    li[i].appendChild(span);
    span.onclick=function(e){
        e.target.parentNode.remove();
    }
}

var abc= document.querySelector("ul");
abc.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle('a');
    }
})

//var abc= document.querySelector("ul");
//var ele=document.getElementById("b").nodeValue;


function pushl()
{
    var uls=document.querySelector("ul");
    var ele=document.getElementById("b"); 
    if(ele.value == ""){
             alert("You must write something! ");
    }
    else{
        var  lis=document.createElement("li");
        var span=document.createElement("SPAN");
        var tex= document.createTextNode("\u00D7");
        lis.appendChild(document.createTextNode(ele.value));
        span.appendChild(tex);
        lis.appendChild(span);
        uls.appendChild(lis);
        span.onclick=function(e){
         e.target.parentNode.remove();
        }
        console.log(ele.value);
    }
}
