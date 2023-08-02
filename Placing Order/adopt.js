document.getElementById("send").addEventListener("click", function(){

var dname, dmobile, dadd, dhouse, dpin1, dautoname, dautomob, dautoadd, dautohouse, dautopin1;

dautoname =  dname = document.getElementById("fullname").value;
dautomob = dmobile = document.getElementById("mob").value;
dautoadd = dadd = document.getElementById("address").value;
dautohouse =  dhouse = document.getElementById("house_no").value;
dautopin1 = dpin1 = document.getElementById("pin").value;



})


window.onload = function(){

var dautoname3 = localStorage.getItem("dautoname2");
var dautomob3 = localStorage.getItem("dautomob2");
var dautoadd3 = localStorage.getItem("dautoadd2");
var dautohouse3 = localStorage.getItem("dautohouse2");
var dautopin3 = localStorage.getItem("dautopin2");

document.getElementById("fullname").value = dautoname3;
document.getElementById("mob").value = dautomob3;
document.getElementById("address").value = dautoadd3;
document.getElementById("house_no").value = dautohouse3;
document.getElementById("pin").value = dautopin3;


}


