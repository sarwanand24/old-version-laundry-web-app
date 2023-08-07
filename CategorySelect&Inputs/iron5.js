document.getElementById("openSidebarMenu").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu.checked? "none" : "block";

})

           /* Bed Sheet (S) */
      
const d2 = document.getElementById("d2");
    const d1 = document.getElementById("d1");
    const p1 = document.getElementById("p1");
    var count = 0;
    const total = document.getElementById("total");
    var total1 = 0;
    p1.innerHTML = count;
    const handleIncrement = () => {
        count++;
        total1 = 20*count;
        p1.innerHTML = count;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7  ;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 20*count;
    p1.innerHTML = count;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7;
    }
     
    d2.addEventListener("click", handleIncrement);
    d1.addEventListener("click", handleDecrement);
    

         /* Bed Sheet (D) */
         const d4 = document.getElementById("d4");
    const d3 = document.getElementById("d3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    var total2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        total2 = 25*count2;
        p2.innerHTML = count2;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
        total2 = 25*count2;
    p2.innerHTML = count2;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
     
    d4.addEventListener("click", handleIncrement2);
    d3.addEventListener("click", handleDecrement2);
    
              /* Bed Cover */

 const d6 = document.getElementById("d6");
    const d5 = document.getElementById("d5");
    const p3 = document.getElementById("p3");
    var count3 = 0;
    var total3 = 0;
    p3.innerHTML = count3;
    const handleIncrement3 = () => {
        count3++;
        total3 = 15*count3;
        p3.innerHTML = count3;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7;
    }
    
    const handleDecrement3 = () => {
    if(count3>0)
        count3--;
        total3 = 15*count3;
    p3.innerHTML = count3;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
     
    d6.addEventListener("click", handleIncrement3);
    d5.addEventListener("click", handleDecrement3);
    
               /* Pillow Cover */

  const d8 = document.getElementById("d8");
    const d7 = document.getElementById("d7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    var total4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        total4 = 10*count4;
        p4.innerHTML = count4;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 10*count4;
    p4.innerHTML = count4;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7;
    }
     
    d8.addEventListener("click", handleIncrement4);
    d7.addEventListener("click", handleDecrement4);
    
               /* Cushion Cover */

  const d10 = document.getElementById("d10");
    const d9 = document.getElementById("d9");
    const p5 = document.getElementById("p5");
    var count5 = 0;
    var total5 = 0;
    p5.innerHTML = count5;
    const handleIncrement5 = () => {
        count5++;
        total5 = 10*count5;
        p5.innerHTML = count5;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
    
    const handleDecrement5 = () => {
    if(count5>0)
        count5--;
        total5 = 10*count5;
    p5.innerHTML = count5;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7;
    }
     
    d10.addEventListener("click", handleIncrement5);
    d9.addEventListener("click", handleDecrement5);



 /*  Curtain Window */

 const d12 = document.getElementById("d12");
    const d11 = document.getElementById("d11");
    const p6 = document.getElementById("p6");
    var count6 = 0;
    var total6 = 0;
    p6.innerHTML = count6;
    const handleIncrement6 = () => {
        count6++;
        total6 = 10*count6;
        p6.innerHTML = count6;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
    
    const handleDecrement6 = () => {
    if(count6>0)
        count6--;
        total6 = 10*count6;
    p6.innerHTML = count6;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7;
    }
     
    d12.addEventListener("click", handleIncrement6);
    d11.addEventListener("click", handleDecrement6);


 /* Curtain Door */

 const d14 = document.getElementById("d14");
    const d13 = document.getElementById("d13");
    const p7 = document.getElementById("p7");
    var count7 = 0;
    var total7 = 0;
    p7.innerHTML = count7;
    const handleIncrement7 = () => {
        count7++;
        total7 = 12*count7;
        p7.innerHTML = count7;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 ;
    }
    
    const handleDecrement7 = () => {
    if(count7>0)
        count7--;
        total7 = 12*count7;
    p7.innerHTML = count7;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 ;
    }
     
    d14.addEventListener("click", handleIncrement7);
    d13.addEventListener("click", handleDecrement7);

         

    document.getElementById("continue").addEventListener("click", function(){

var beds,bedd, bedcover, pillowcover, cushioncover, curtainw,curtaind, hscurtainw, hscurtaind, total_rate, total_proceed , hsbeds, hsbedd, hsbedcover, hspillowcover, hscushioncover, hstotal_proceed;

hsbeds = beds = document.getElementById("p1").innerText;
hsbedd = bedd = document.getElementById("p2").innerText;
hsbedcover = bedcover = document.getElementById("p3").innerText;
hspillowcover = pillowcover = document.getElementById("p4").innerText;
hscushioncover = cushioncover = document.getElementById("p5").innerText;
hscurtainw = curtainw = document.getElementById("p6").innerText;
hscurtaind = curtaind = document.getElementById("p7").innerText;
hstotal_proceed = total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("beds1", beds);
localStorage.setItem("bedd1", bedd);
localStorage.setItem("bedcover1", bedcover);
localStorage.setItem("pillowcover1", pillowcover);
localStorage.setItem("cushioncover1", cushioncover);
localStorage.setItem("curtainw1", curtainw);
localStorage.setItem("curtaind1", curtaind);
localStorage.setItem("housetotal_rate_iron1", total_rate);

localStorage.setItem("beds10", hsbeds);
localStorage.setItem("bedd10", hsbedd);
localStorage.setItem("bedcover10", hsbedcover);
localStorage.setItem("pillowcover10", hspillowcover);
localStorage.setItem("cushioncover10", hscushioncover)
localStorage.setItem("curtainw10", hscurtainw);
localStorage.setItem("curtaind10", hscurtaind);
localStorage.setItem("housetotal_rate_iron10", hstotal_proceed);



if(total_proceed>100){
    
    var flagiron5 = 1;
    sessionStorage.setItem("flagiron5", flagiron5);

    document.getElementById("warning").style.display="none";
    var outsort5 = localStorage.getItem("insort5");

    if(outsort5 == 1){
    window.location ="schedule-pickup.html";
    }
    else{
        window.location ="steam1.html";
    }

}
if(total_proceed<100){
  document.getElementById("warning").style.display="block";
}


    })


