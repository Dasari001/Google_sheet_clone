console.log("test");

let theadrow = document.getElementById("table-heading-row");
let tbody = document.getElementById("table-body");
let currentCell;



// for adding heading in excel sheet
for(let col = 65; col<=90; col++){
    let th = document.createElement("th");
    th.innerText = String.fromCharCode(col);
    theadrow.appendChild(th);
}




for(let row = 1; row<=1000; row++){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText = row;
    tr.appendChild(th);
    //looping from A to Z
    for(let col = 1; col<=26; col++){
        let td = document.createElement("td");
        td.setAttribute("contenteditable","true");
        td.setAttribute("id", `${String.fromCharCode(col+64)}${row}`)
        td.addEventListener("focus",onFocusFunction);
        tr.appendChild(td);
    }
    tbody.appendChild(tr)
}

// target property returns the element where the event occured. target property is read only

function onFocusFunction(event){
    // console.log(event)
    // console.log(event.target)           // Get the element where the event occurred:
    // console.log(event.target.id)        // Get the name of the id of element where the event occurred:
    // console.log(event.target.tagName)   // Get the name of the element where the event occurred:
    

    currentCell = event.target;
    document.getElementById("current-cell").innerText = event.target.id;
}








//doubt ==== currentCell using let
// event in fnc
// e.preventdefault