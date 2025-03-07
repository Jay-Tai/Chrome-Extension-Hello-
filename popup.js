document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("button1").addEventListener("click", function(){
        alert("The button has been pressed! :celebratingcat:")
        var body = document.getElementsByTagName("body")[0].style.backgroundColor = "red"
    });
});