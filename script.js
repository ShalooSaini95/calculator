function addScreen(value){
    document.getElementById("screen").value+=value;
}
function calculate(){
    var result=eval(document.getElementById("screen").value);
    document.getElementById("screen").value=result;
}
function clearScreen(){
    document.getElementById("screen").value=" ";
}