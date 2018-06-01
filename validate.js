function createWarning(idValue, newIdValue) {
    if (document.getElementById(idValue).value == "" && document.getElementById(newIdValue) == null) {
        document.getElementById(idValue).insertAdjacentHTML("afterend", "<p id = " + newIdValue + "><br/> Enter a valid " + idValue + "</p>");
    }
    else if (document.getElementById(idValue).value != "") {
        if (document.getElementById(newIdValue)) {
            document.getElementById(newIdValue).remove();
        }
        return true;
    }
    return false;
}
function clearFields(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailID").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("rbtn1").checked = false;
    document.getElementById("rbtn2").checked = false;
}


function populateData(dataInLocalStorage){
var data = JSON.parse(dataInLocalStorage);
var tableData = "<table> <tr> <th>First Name</th><th>Last Name</th></tr>";
for(var index = 0;index<data.length;index++){
tableData += "<tr> <td>"+data[index].firstName +"</td><td>"+data[index].lastName +"</td></tr>";
}
tableData += "</table>";
alert("What");
document.getElementById("dataTable").innerHTML = tableData;
}


var radioBtnFlag = false;
var data = [];
if (localStorage.sampleData) {
    data = JSON.parse(localStorage.sampleData);
}
document.getElementById("button").addEventListener('click', () => {
    if (document.getElementById("rbtn1").checked || document.getElementById("rbtn2").checked) {
        if (document.getElementById("rwarn")) {
            document.getElementById("rwarn").remove();
        }
        radioBtnFlag = true;
    }
    else {
        if (document.getElementById("rwarn") == null) {
            document.getElementById("button").insertAdjacentHTML(
                "beforeBegin", "<p id = 'rwarn'><br/> Enter a valid choice</p>");
        }

    }
    if (createWarning("firstName", "w1") & createWarning("lastName", "w2") &
        createWarning("emailID", "w3") & createWarning("phoneNumber", "w4") & radioBtnFlag) {
            alert("In here");
        data.push({
            "firstName": document.getElementById("firstName").value, "lastName": document.getElementById("lastName").value
            , "emailID": document.getElementById("emailID").value, "phoneNumber": document.getElementById("phoneNumber").value,
            "sex": document.getElementById("rbtn1").checked ? "Male" : "Female"
        });
        localStorage.sampleData = JSON.stringify(data);
        console.log(localStorage.sampleData);
        clearFields();
        populateData(localStorage.sampleData);

    }
});

// [
//     [
//     [
//     [
//     [{"firstName":"lksdlk","lastName":"lkdflk","emailID":"lkfdlke","phoneNumber":"34564321","sex":"Male"}],
//     [{"firstName":"lksdlksldk","lastName":"lkdfl","emailID":"lk","phoneNumber":"45676543","sex":"Female"}]],
//     [{"firstName":",mxcmL","lastName":"ldkflk","emailID":"lkdfldkf","phoneNumber":"2345643","sex":"Male"}]],
//     [{"firstName":"kjd","lastName":"JDKJ","emailID":"LKDFLK","phoneNumber":"32456","sex":"Male"}]],
//     [{"firstName":"kjsd","lastName":"kjdskj","emailID":"kjdfkj","phoneNumber":"234567","sex":"Male"}]]