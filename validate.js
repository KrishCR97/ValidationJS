function createWarning(idValue,newIdValue){
    if(document.getElementById(idValue).value == "" && document.getElementById(newIdValue ) == null){
        document.getElementById(idValue).insertAdjacentHTML("afterend","<p id = "+newIdValue +"><br/> Enter a valid "+idValue+"</p>");
    }
    else if(document.getElementById(idValue).value != ""){
        if(document.getElementById(newIdValue )){
            document.getElementById(newIdValue ).remove();
        }
    return true;
}
return false;
}
document.getElementById("button").addEventListener('click',()=>{
    if(document.getElementById("rbtn1").checked || document.getElementById("rbtn2").checked){
        if(document.getElementById(newIdValue )){
            document.getElementById(newIdValue ).remove();
        }   
}
    else{
        if(document.getElementById("rwarn") == null){
            document.getElementById("button").insertAdjacentHTML("beforeBegin","<p id = 'rwarn'><br/> Enter a valid choice</p>");
        }

}
    if(createWarning("firstName","w1")&createWarning("lastName","w2")&
    createWarning("emailID","w3")&createWarning("phoneNumber","w4")){
        }
});