
document.getElementById("send").addEventListener("click", function(){

var name, mobile, add, house, pin1, autoname, automob, autoadd, autohouse, autopin1 ,ename, emobile, eadd, ehouse, epin1;

 autoname =  name = document.getElementById("fullname").value;
 automob = mobile = document.getElementById("mob").value;
autoadd = add = document.getElementById("address").value;
autohouse =  house = document.getElementById("house_no").value;
autopin1 = pin1 = document.getElementById("pin").value;

localStorage.setItem("autoname2" , autoname);
localStorage.setItem("automob2" , automob);
localStorage.setItem("autoadd2" , autoadd);
localStorage.setItem("autohouse2" , autohouse);
localStorage.setItem("autopin2" , autopin1);






if(name!= "" && mobile!= "" && add!= "" ){

 var sort1 = 1;
 var sort2 = 1;
 var sort3 = 1;
 var sort4 = 1;
 var sort5 = 1;
 var sort6 = 1;
 var sort7 = 1;
 var sort8 = 1;
 var sort9 = 1;
 var sort10 = 1;
 


 
 

localStorage.setItem("name2" , name);
localStorage.setItem("mobile2" , mobile);
localStorage.setItem("add2" , add);
localStorage.setItem("house2" , house);
localStorage.setItem("pin2" , pin1);


localStorage.setItem("dautoname2" , ename);
localStorage.setItem("dautomobile2" , emobile);
localStorage.setItem("dautoadd2" , eadd);
localStorage.setItem("dautohouse2" , ehouse);
localStorage.setItem("dautopin2" , epin1);



localStorage.setItem("insort1" , sort1);
localStorage.setItem("insort2" , sort2);
localStorage.setItem("insort3" , sort3);
localStorage.setItem("insort4" , sort4);
localStorage.setItem("insort5" , sort5);
localStorage.setItem("insort6" , sort6);
localStorage.setItem("insort7" , sort7);
localStorage.setItem("insort8" , sort8);
localStorage.setItem("insort9" , sort9);
localStorage.setItem("insort10" , sort10);


window.location="schedule-pickup.html";

}

else{
  alert("Please Fill out all fields");
}

})


window.onload = function(){

var autoname3 = localStorage.getItem("autoname2");
var automob3 = localStorage.getItem("automob2");
var autoadd3 = localStorage.getItem("autoadd2");
var autohouse3 = localStorage.getItem("autohouse2");
var autopin3 = localStorage.getItem("autopin2");

document.getElementById("fullname").value = autoname3;
document.getElementById("mob").value = automob3;
document.getElementById("address").value = autoadd3;
document.getElementById("house_no").value = autohouse3;
document.getElementById("pin").value = autopin3;


}


