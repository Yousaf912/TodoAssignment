var inpt1 = document.getElementById("inpt");
var list1 = document.getElementById("list")


function add() {
    if (inpt1.value === "") {
        alert("Input is required")
    } else {
        var creatli = document.createElement("li");
        creatli.setAttribute("onclick","chnclass(this)")
        var text = document.createTextNode(inpt1.value);
        var b = creatli.appendChild(text);
        list1.appendChild(creatli)

        inpt1.value = "";

        // delete Buton
        var deletebtn = document.createElement("span");
        deletebtn.setAttribute("onclick", "dlt(this)")
        var deletebtnTxt = document.createTextNode("\u00d7");
        deletebtn.appendChild(deletebtnTxt);
        creatli.appendChild(deletebtn)

        //  edit butten
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick", "editB(this)")
        var editBtnTxt = document.createTextNode("Edit");
        editBtn.appendChild(editBtnTxt);
        creatli.appendChild(editBtn)
    }
};

function dlt(e){
    e.parentNode.remove();

}
function editB(o){
var a = prompt("Enter Updated Text");
o.parentNode.firstChild.nodeValue = a;
}
