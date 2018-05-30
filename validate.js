var fnFlag = false;
document.getElementById("button").addEventListener('click',()=>{
var data = "";
var fnRefernce = document.getElementById("fn");

data = fnRefernce.value;
if(data == "" && !fnFlag){
    fnFlag = true
    fnRefernce.insertAdjacentHTML("afterend","<p id = 'p1'><br/> Enter a valid firstName</p>");
}
else if(data!= "" && fnFlag){
    fnRefernce
}

});