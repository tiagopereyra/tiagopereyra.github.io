function agregarFila(){
    let tabla = document.getElementById("table");

    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = document.getElementById("input1").value; 
    td2.innerHTML = document.getElementById("input2").value; 
    td3.innerHTML = document.getElementById("input3").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tabla.appendChild(row);
    
}

function mostrarParaCompletar(){
    
}

