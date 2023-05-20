console.log("test");

let theadrow = document.getElementById("table-heading-row");
let tbody = document.getElementById("table-body");
let currentCell;
let cutValue = {};
const boldButton = document.getElementById("bold-btn");
const underlineBtn = document.getElementById("underline-btn");
const leftAlignBtn = document.getElementById("left-align");
const centerAlignBtn = document.getElementById("center-align");
let fontSize = document.getElementById("font-size");
let fontFamily = document.getElementById("font-family");
const cutButton = document.getElementById("cut-button");
const copyButton = document.getElementById("copy-button");
const pasteButton = document.getElementById("paste-button");



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
        // this is the event listener it will trigger whenever the cell is in focus
        td.addEventListener("focus",onFocusFunction);
        tr.appendChild(td);
    }
    tbody.appendChild(tr)
}



// storing current cell in currentCell


function onFocusFunction(event){
    // target property returns the element where the event occured. target property is read only
    // console.log(event)
    // console.log(event.target)           // Get the element where the event occurred:
    // console.log(event.target.id)        // Get the name of the id of element where the event occurred:
    // console.log(event.target.tagName)   // Get the name of the element where the event occurred:
    

    currentCell = event.target;
    document.getElementById("current-cell").innerText = event.target.id;
}





// styles of buttons -- bold,italic,underline


// Bold button
boldButton.addEventListener("click",()=>{
    if(currentCell.style.fontWeight == "bold"){
        currentCell.style.fontWeight = "normal"
    }
    else
    currentCell.style.fontWeight = "bold";
});
// italic button
function italicbtn(){
    if(currentCell.style.fontStyle == "italic"){
        currentCell.style.fontStyle = "normal"
    }
    else
    currentCell.style.fontStyle = "italic";
}
//underline button
underlineBtn.addEventListener("click",()=>{
    if(currentCell.style.textDecoration == "underline"){
        currentCell.style.textDecoration = "none"
    }
    else
    currentCell.style.textDecoration = "underline";
})




// Text-Align buttons --- left-align, center-align, right-align


// left-align button
leftAlignBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = "left";
});
//center-align button
centerAlignBtn.addEventListener("click",()=>{
    currentCell.style.textAlign = "center"
});
// right-align button
function rightAlignBtn(){
    currentCell.style.textAlign = "right"
}




// font-size, font-family


//fontSize
//the fontSize in the right is referencing my dropdown
//the fontSize in the left is referencing my styles of currentCell
fontSize.addEventListener("change",()=>{
    currentCell.style.fontSize = fontSize.value;
})

//fontFamily
//the fontFamily in the right is referencing my dropdown
//the fontFamily in the left is referencing my styles of currentCell
fontFamily.addEventListener("change",()=>{
    currentCell.style.fontFamily = fontFamily.value;
})






// cut, copy, paste buttons


// cut-button
cutButton.addEventListener("click",()=>{
    cutValue = {
        style: currentCell.style.cssText,  // storing styles of text in currentCell
        text: currentCell.innerText
    }
    currentCell.style = null;
    currentCell.innerText = "";
});
// paste button
pasteButton.addEventListener("click",()=>{
    if(cutValue.text){
        currentCell.style = cutValue.style;
        currentCell.innerText = cutValue.text;
    }
})
// copy button
copyButton.addEventListener("click",()=>{
    cutValue = {
        style: currentCell.style.cssText,  // storing styles of text in currentCell
        text: currentCell.innerText
    }
})







//doubt ==== currentCell using let
// event in fnc
// e.preventdefault


// by default these styles are there
// ctrl+b ===> makes bold
// ctrl+i ===> makes italic
// ctrl+u ===> makes underline

// global variable vs block variable

// css-text -- property

