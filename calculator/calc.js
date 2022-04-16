function btnclick(val){
    document.getElementById("inp").value+=val
}
function clearscreen(){
    document.getElementById("inp").value=""
}
function equalclick(){
    var text = document.getElementById("inp").value
    var result = eval(text)
    document.getElementById("inp").value=result
}