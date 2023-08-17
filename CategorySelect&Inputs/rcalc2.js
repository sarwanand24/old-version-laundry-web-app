
document.getElementById("openSidebarMenu13").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu13.checked? "none" : "block";

})

        /* Premium Wash Calculation */
    
    const b2 = document.getElementById("b2");
    const b1 = document.getElementById("b1");
    const p1 = document.getElementById("p1");
    var count = 0;
    const total = document.getElementById("total");
    var total1 = 0;
    p1.innerHTML = count;
    const handleIncrement = () => {
        count++;
        total1 = 120*count;
        p1.innerHTML = count;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 120*count;
    p1.innerHTML = count;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    }
     
    b2.addEventListener("click", handleIncrement);
    b1.addEventListener("click", handleDecrement);
    
         /*  Organic Wash Calculation */
    
    const b4 = document.getElementById("b4");
    const b3 = document.getElementById("b3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    var total2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        total2= 90*count2;
        p2.innerHTML = count2;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    }
    
    const handleDecrement2 = () => {
        if(count2>0)
    count2--;
    total2 = 90*count2;
    p2.innerHTML = count2;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    }
    
    b4.addEventListener("click", handleIncrement2);
    b3.addEventListener("click", handleDecrement2);
    
    
      /* Wash & Iron Calculation */
    
      const b6 = document.getElementById("b6");
    const b5 = document.getElementById("b5");
    const p3 = document.getElementById("p3");
    var count3 = 0;
    var total3 = 0;
    p3.innerHTML = count3;
    const handleIncrement3 = () => {
        count3++;
        total3 = 85*count3;
        p3.innerHTML = count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    }
    
    const handleDecrement3 = () => {
        if(count3>0) 
    count3--;
    total3 = 85*count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
    p3.innerHTML = count3;
    }
    
    b6.addEventListener("click", handleIncrement3);
    b5.addEventListener("click", handleDecrement3);
    

/*  Shirt Calculation */

const b8 = document.getElementById("b8");
const b7 = document.getElementById("b7");
const p4 = document.getElementById("p4");
var count4 = 0;
var total4 = 0;
p4.innerHTML = count4;
const handleIncrement4 = () => {
    count4++;
    total4= 50*count4;
    p4.innerHTML = count4;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement4 = () => {
    if(count4>0)
count4--;
total4 = 50*count4;
p4.innerHTML = count4;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b8.addEventListener("click", handleIncrement4);
b7.addEventListener("click", handleDecrement4);


/*  T-Shirt Calculation */

const b10 = document.getElementById("b10");
const b9 = document.getElementById("b9");
const p5 = document.getElementById("p5");
var count5 = 0;
var total5 = 0;
p5.innerHTML = count4;
const handleIncrement5 = () => {
    count5++;
    total5= 40*count5;
    p5.innerHTML = count5;
    total.innerHTML =total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement5 = () => {
    if(count5>0)
count5--;
total5 = 40*count5;
p5.innerHTML = count5;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b10.addEventListener("click", handleIncrement5);
b9.addEventListener("click", handleDecrement5);


/*  Trouser Calculation */

const b12 = document.getElementById("b12");
const b11 = document.getElementById("b11");
const p6 = document.getElementById("p6");
var count6 = 0;
var total6 = 0;
p6.innerHTML = count6;
const handleIncrement6 = () => {
    count6++;
    total6= 60*count6;
    p6.innerHTML = count6;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement6 = () => {
    if(count6>0)
count6--;
total6 = 60*count6;
p6.innerHTML = count6;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b12.addEventListener("click", handleIncrement6);
b11.addEventListener("click", handleDecrement6);


/*  Jeans Calculation */

const b14 = document.getElementById("b14");
const b13 = document.getElementById("b13");
const p7 = document.getElementById("p7");
var count7 = 0;
var total7 = 0;
p7.innerHTML = count7;
const handleIncrement7 = () => {
    count7++;
    total7= 80*count7;
    p7.innerHTML = count7;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement7 = () => {
    if(count7>0)
count7--;
total7 = 80*count7;
p7.innerHTML = count7;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b14.addEventListener("click", handleIncrement7);
b13.addEventListener("click", handleDecrement7);


/*  School Dress Calculation */

const b16 = document.getElementById("b16");
const b15 = document.getElementById("b15");
const p8 = document.getElementById("p8");
var count8 = 0;
var total8 = 0;
p8.innerHTML = count8;
const handleIncrement8 = () => {
    count8++;
    total8= 200*count8;
    p8.innerHTML = count8;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement8 = () => {
    if(count8>0)
count8--;
total8 = 200*count8;
p8.innerHTML = count8;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b16.addEventListener("click", handleIncrement8);
b15.addEventListener("click", handleDecrement8);


/*  Dress Designer Calculation */

const b18 = document.getElementById("b18");
const b17 = document.getElementById("b17");
const p9 = document.getElementById("p9");
var count9 = 0;
var total9 = 0;
p9.innerHTML = count9;
const handleIncrement9 = () => {
    count9++;
    total9= 300*count9;
    p9.innerHTML = count9;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement9 = () => {
    if(count9>0)
count9--;
total9 = 300*count9;
p9.innerHTML = count9;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b18.addEventListener("click", handleIncrement9);
b17.addEventListener("click", handleDecrement9);


/*  Kids Dress Calculation */

const b20 = document.getElementById("b20");
const b19 = document.getElementById("b19");
const p10 = document.getElementById("p10");
var count10 = 0;
var total10 = 0;
p10.innerHTML = count10;
const handleIncrement10 = () => {
    count10++;
    total10= 149*count10;
    p10.innerHTML = count10;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement10 = () => {
    if(count10>0)
count10--;
total10 = 149*count10;
p10.innerHTML = count10;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b20.addEventListener("click", handleIncrement10);
b19.addEventListener("click", handleDecrement10);

/*  Suit Calculation */

const b22 = document.getElementById("b22");
const b21 = document.getElementById("b21");
const p11 = document.getElementById("p11");
var count11 = 0;
var total11 = 0;
p11.innerHTML = count11;
const handleIncrement11 = () => {
    count11++;
    total11= 250*count11;
    p11.innerHTML = count11;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;
  
}

const handleDecrement11 = () => {
    if(count11>0)
count11--;
total11 = 250*count11;
p11.innerHTML = count11;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11;

}

b22.addEventListener("click", handleIncrement11);
b21.addEventListener("click", handleDecrement11);




    document.getElementById("continue").addEventListener("click", function(){

var pw,ow,wi, dryshirtwi, drytshirtwi, drytrouserwi, dryjeanswi, dryschoolwi, drydresswi,  drykidswi , drysuitwi,total_rate, total_proceed;

pw = document.getElementById("p1").innerText;
ow = document.getElementById("p2").innerText;
wi = document.getElementById("p3").innerText;
dryshirtwi = document.getElementById("p4").innerText;
drytshirtwi = document.getElementById("p5").innerText;
drytrouserwi = document.getElementById("p6").innerText;
dryjeanswi = document.getElementById("p7").innerText;
dryschoolwi = document.getElementById("p8").innerText;
drydresswi = document.getElementById("p9").innerText;
drykidswi = document.getElementById("p10").innerText;
drysuitwi = document.getElementById("p11").innerText;

 total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("drypw1", pw);
localStorage.setItem("dryow1", ow);
localStorage.setItem("drywi1", wi);
localStorage.setItem("dryshirtwi1", dryshirtwi);
localStorage.setItem("drytshirtwi1", drytshirtwi);
localStorage.setItem("drytrouserwi1", drytrouserwi);
localStorage.setItem("dryjeanswi1", dryjeanswi);
localStorage.setItem("dryschoolwi1", dryschoolwi);
localStorage.setItem("drydresswi1", drydresswi);
localStorage.setItem("drykidswi1", drykidswi);
localStorage.setItem("drysuitwi1", drysuitwi);
localStorage.setItem("drytotal_rate1", total_rate);


if(total_proceed>160){
   
    var flagwash2 = 1;
    sessionStorage.setItem("flagwash2", flagwash2);

    document.getElementById("warning").style.display="none";
    var outsort7 = localStorage.getItem("insort7");

if(outsort7 == 1){
window.location ="schedule-pickup.html";
}
else{
    window.location ="steam1.html";
}

}
if(total_proceed<160){
  document.getElementById("warning").style.display="block";
}



})

  
