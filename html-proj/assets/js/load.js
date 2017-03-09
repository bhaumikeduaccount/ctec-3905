
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000); //seconds load animation is run
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderDiv").style.display = "block";
}
