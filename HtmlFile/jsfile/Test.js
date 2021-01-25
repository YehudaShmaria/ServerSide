function GetAllObj(){
    var Location = document.getElementById('Location').value;
    var Name = document.getElementById('Name').value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:5000";
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
           var AllTeachers = JSON.parse(this.responseText)
        //    console.log(AllTeachers);
            SortTheTeachers(AllTeachers)
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function SortTheTeachers(Teachers)
    {
        var result;
        if(Name == '') 
        {
            result = Teachers.filter(t => t.Location == Location);
        }
        else{
            result = Teachers.filter(t => t.Location == Location && t.Name == Name);
            console.log(result)
            if(result.length == 0)
            {
                result = Teachers.filter(t => t.Location == Location);
            }
        }
        console.log(result);
        CreateTable(result);
    }
}
function CreateTable(Teachres)
{
    let table = document.querySelector("table");
    table.innerHTML = '';
    console.log(Teachres)
    let data = Object.keys(Teachres[0]);
    generateTableHead(table, data);
    generateTable(table, Teachres);
    function generateTableHead(table, data){
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            if(key!='_id'){
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
            }
        }
      }
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            if(key!='_id'){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            }
          }
        }
    }
}
