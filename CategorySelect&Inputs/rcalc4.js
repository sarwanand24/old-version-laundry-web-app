
document.getElementById("openSidebarMenu14").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu14.checked? "none" : "block";

})

        /* Premium Woolen Wash Calculation */
    
    const b2 = document.getElementById("b2");
    const b1 = document.getElementById("b1");
    const p1 = document.getElementById("p1");
    var count = 0;
    const total = document.getElementById("total");
    var total1 = 0;
    p1.innerHTML = count;
    const handleIncrement = () => {
        count++;
        total1 = 119*count;
        p1.innerHTML = count;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 119*count;
    p1.innerHTML = count;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
     
    b2.addEventListener("click", handleIncrement);
    b1.addEventListener("click", handleDecrement);
    
         /*  Organic Woolen Wash Calculation */
    
    const b4 = document.getElementById("b4");
    const b3 = document.getElementById("b3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    var total2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        total2= 99*count2;
        p2.innerHTML = count2;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
    
    const handleDecrement2 = () => {
        if(count2>0)
    count2--;
    total2 = 99*count2;
    p2.innerHTML = count2;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
    
    b4.addEventListener("click", handleIncrement2);
    b3.addEventListener("click", handleDecrement2);
    
    
      /* Wash & Fold Calculation */
    
      const b6 = document.getElementById("b6");
    const b5 = document.getElementById("b5");
    const p3 = document.getElementById("p3");
    var count3 = 0;
    var total3 = 0;
    p3.innerHTML = count3;
    const handleIncrement3 = () => {
        count3++;
        total3 = 79*count3;
        p3.innerHTML = count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
    
    const handleDecrement3 = () => {
        if(count3>0) 
    count3--;
    total3 = 79*count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    p3.innerHTML = count3;
    }
    
    b6.addEventListener("click", handleIncrement3);
    b5.addEventListener("click", handleDecrement3);
    

     /*     Wash & Iron     */

     const b8 = document.getElementById("b8");
    const b7 = document.getElementById("b7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    var total4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        total4 = 89*count4;
        p4.innerHTML = count4;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 89*count4;
    p4.innerHTML = count4;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
    }
     
    b8.addEventListener("click", handleIncrement4);
    b7.addEventListener("click", handleDecrement4);



/*  Sweat Shirt Calculation */

const b10 = document.getElementById("b10");
const b9 = document.getElementById("b9");
const p5 = document.getElementById("p5");
var count5 = 0;
var total5 = 0;
p5.innerHTML = count4;
const handleIncrement5 = () => {
    count5++;
    total5= 29*count5;
    p5.innerHTML = count5;
    total.innerHTML =total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement5 = () => {
    if(count5>0)
count5--;
total5 = 29*count5;
p5.innerHTML = count5;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b10.addEventListener("click", handleIncrement5);
b9.addEventListener("click", handleDecrement5);


/*  Sweater Half Calculation */

const b12 = document.getElementById("b12");
const b11 = document.getElementById("b11");
const p6 = document.getElementById("p6");
var count6 = 0;
var total6 = 0;
p6.innerHTML = count6;
const handleIncrement6 = () => {
    count6++;
    total6= 29*count6;
    p6.innerHTML = count6;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement6 = () => {
    if(count6>0)
count6--;
total6 = 29*count6;
p6.innerHTML = count6;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b12.addEventListener("click", handleIncrement6);
b11.addEventListener("click", handleDecrement6);


/*  Sweater Full Calculation */

const b14 = document.getElementById("b14");
const b13 = document.getElementById("b13");
const p7 = document.getElementById("p7");
var count7 = 0;
var total7 = 0;
p7.innerHTML = count7;
const handleIncrement7 = () => {
    count7++;
    total7= 49*count7;
    p7.innerHTML = count7;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement7 = () => {
    if(count7>0)
count7--;
total7 = 49*count7;
p7.innerHTML = count7;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b14.addEventListener("click", handleIncrement7);
b13.addEventListener("click", handleDecrement7);


/*  Waist Coat Calculation */

const b16 = document.getElementById("b16");
const b15 = document.getElementById("b15");
const p8 = document.getElementById("p8");
var count8 = 0;
var total8 = 0;
p8.innerHTML = count8;
const handleIncrement8 = () => {
    count8++;
    total8= 39*count8;
    p8.innerHTML = count8;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement8 = () => {
    if(count8>0)
count8--;
total8 = 39*count8;
p8.innerHTML = count8;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b16.addEventListener("click", handleIncrement8);
b15.addEventListener("click", handleDecrement8);


/*  Coat Calculation */

const b18 = document.getElementById("b18");
const b17 = document.getElementById("b17");
const p9 = document.getElementById("p9");
var count9 = 0;
var total9 = 0;
p9.innerHTML = count9;
const handleIncrement9 = () => {
    count9++;
    total9= 59*count9;
    p9.innerHTML = count9;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement9 = () => {
    if(count9>0)
count9--;
total9 = 59*count9;
p9.innerHTML = count9;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b18.addEventListener("click", handleIncrement9);
b17.addEventListener("click", handleDecrement9);


/*  Overcoat Calculation */

const b20 = document.getElementById("b20");
const b19 = document.getElementById("b19");
const p10 = document.getElementById("p10");
var count10 = 0;
var total10 = 0;
p10.innerHTML = count10;
const handleIncrement10 = () => {
    count10++;
    total10= 99*count10;
    p10.innerHTML = count10;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement10 = () => {
    if(count10>0)
count10--;
total10 = 99*count10;
p10.innerHTML = count10;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b20.addEventListener("click", handleIncrement10);
b19.addEventListener("click", handleDecrement10);

/*  Jacket Half Calculation */

const b22 = document.getElementById("b22");
const b21 = document.getElementById("b21");
const p11 = document.getElementById("p11");
var count11 = 0;
var total11 = 0;
p11.innerHTML = count11;
const handleIncrement11 = () => {
    count11++;
    total11= 69*count11;
    p11.innerHTML = count11;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement11 = () => {
    if(count11>0)
count11--;
total11 = 69*count11;
p11.innerHTML = count11;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b22.addEventListener("click", handleIncrement11);
b21.addEventListener("click", handleDecrement11);



/*   Jacket Full Calculation */

const b24 = document.getElementById("b24");
const b23 = document.getElementById("b23");
const p12 = document.getElementById("p12");
var count12 = 0;
var total12 = 0;
p12.innerHTML = count12;
const handleIncrement12 = () => {
    count12++;
    total12= 99*count12;
    p12.innerHTML = count12;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement12 = () => {
    if(count12>0)
count12--;
total12 = 99*count12;
p12.innerHTML = count12;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b24.addEventListener("click", handleIncrement12);
b23.addEventListener("click", handleDecrement12);


/*  Shawl Calculation */

const b26 = document.getElementById("b26");
const b25 = document.getElementById("b25");
const p13 = document.getElementById("p13");
var count13 = 0;
var total13 = 0;
p13.innerHTML = count13;
const handleIncrement13 = () => {
    count13++;
    total13= 29*count13;
    p13.innerHTML = count13;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement13 = () => {
    if(count13>0)
count13--;
total13 = 29*count13;
p13.innerHTML = count13;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b26.addEventListener("click", handleIncrement13);
b25.addEventListener("click", handleDecrement13);



/*  Shawl Fancy Calculation */

const b28 = document.getElementById("b28");
const b27 = document.getElementById("b27");
const p14 = document.getElementById("p14");
var count14 = 0;
var total14 = 0;
p14.innerHTML = count14;
const handleIncrement14 = () => {
    count14++;
    total14= 39*count14;
    p14.innerHTML = count14;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;
  
}

const handleDecrement14 = () => {
    if(count14>0)
count14--;
total14 = 39*count14;
p14.innerHTML = count14;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14;

}

b28.addEventListener("click", handleIncrement14);
b27.addEventListener("click", handleDecrement14);






   

    document.getElementById("continue").addEventListener("click", function(){

var pw,ow,wi,wf,  sweatwi, sweater_halfwi, waistwi, coatwi, over_coatwi, jacket_halfwi, jacket_fullwi, shawlwi, shawl_fancywi, sweater_fullwi , total_rate, total_proceed;

pw = document.getElementById("p1").innerText;
ow = document.getElementById("p2").innerText;
wi = document.getElementById("p3").innerText;
wf = document.getElementById("p4").innerText;
sweatwi = document.getElementById("p5").innerText;
sweater_halfwi = document.getElementById("p6").innerText;
sweater_fullwi = document.getElementById("p7").innerText;
waistwi = document.getElementById("p8").innerText;
coatwi = document.getElementById("p9").innerText;
over_coatwi = document.getElementById("p10").innerText;
jacket_halfwi = document.getElementById("p11").innerText;
jacket_fullwi = document.getElementById("p12").innerText;
shawlwi = document.getElementById("p13").innerText;
shawl_fancywi = document.getElementById("p14").innerText;
total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("pww1", pw);
localStorage.setItem("oww1", ow);
localStorage.setItem("wwf1", wi);
localStorage.setItem("sweatwi1", sweatwi);
localStorage.setItem("sweater_halfwi1", sweater_halfwi);
localStorage.setItem("sweater_fullwi1", sweater_fullwi);
localStorage.setItem("waistwi1", waistwi);
localStorage.setItem("coatwi1", coatwi);
localStorage.setItem("over_coatwi1", over_coatwi);
localStorage.setItem("jacket_halfwi1", jacket_halfwi);
localStorage.setItem(" jacket_fullwi1", jacket_fullwi);
localStorage.setItem("shawlwi1", shawlwi);
localStorage.setItem("shawl_fancywi1", shawl_fancywi);

localStorage.setItem("total_woolen_rate1", total_rate);


if(total_proceed>160){
    
    
  var  flagwash4 = 1;
    sessionStorage.setItem("flagwash4", flagwash4);

    document.getElementById("warning").style.display="none";
    var outsort9 = localStorage.getItem("insort9");

    if(outsort9 == 1){
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
