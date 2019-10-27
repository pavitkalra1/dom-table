//add to list

/*var form=document.forms["add-list"];
form.addEventListener('submit',function(e){
    e.preventDefault();
    var val1=form.querySelector('input[type="text"]').value;
    var tr=document.createElement('tr');
    var muvi=document.createElement('td');
    tr.appendChild(muvi);
    muvi.textContent=val1;
    muvi.classList.add('name');
})*/

/*function func1()
{
    var table=document.getElementById("myTable");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var x=document.getElementById("name").value;
    var y=document.getElementById("email").value;
    var z=document.getElementById("phone").value;
    var w=document.getElementById("address").value;
    cell1.innerHTML=x;
    cell2.innerHTML=y;
    cell3.innerHTML=z;
    cell4.innerHTML=w;
}*/



document.getElementById("abc").addEventListener("click", function(){
    var table = document.getElementById("myTable");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");    
    var td4 = document.createElement("td");
    td1.innerHTML = document.getElementById("name").value;
    td2.innerHTML  = document.getElementById("email").value;
    td3.innerHTML  = document.getElementById("phone").value;
    td4.innerHTML  = document.getElementById("address").value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    myTable.children[0].appendChild(row);
});
