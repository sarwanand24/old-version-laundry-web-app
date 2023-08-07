document.getElementById("openSidebarMenu").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu.checked? "none" : "block";

})



           /* Shirt */
      
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
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 ;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 20*count;
    p1.innerHTML = count;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
     
    d2.addEventListener("click", handleIncrement);
    d1.addEventListener("click", handleDecrement);
    

         /* T-Shirt */
         const d4 = document.getElementById("d4");
    const d3 = document.getElementById("d3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    var total2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        total2 = 15*count2;
        p2.innerHTML = count2;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
        total2 = 15*count2;
    p2.innerHTML = count2;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 ;
    }
     
    d4.addEventListener("click", handleIncrement2);
    d3.addEventListener("click", handleDecrement2);
    
              /* Trouser */

 const d6 = document.getElementById("d6");
    const d5 = document.getElementById("d5");
    const p3 = document.getElementById("p3");
    var count3 = 0;
    var total3 = 0;
    p3.innerHTML = count3;
    const handleIncrement3 = () => {
        count3++;
        total3 = 20*count3;
        p3.innerHTML = count3;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 ;
    }
    
    const handleDecrement3 = () => {
    if(count3>0)
        count3--;
        total3 = 20*count3;
    p3.innerHTML = count3;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 ;
    }
     
    d6.addEventListener("click", handleIncrement3);
    d5.addEventListener("click", handleDecrement3);
    
               /* Jeans */

  const d8 = document.getElementById("d8");
    const d7 = document.getElementById("d7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    var total4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        total4 = 20*count4;
        p4.innerHTML = count4;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 20*count4;
    p4.innerHTML = count4;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8;
    }
     
    d8.addEventListener("click", handleIncrement4);
    d7.addEventListener("click", handleDecrement4);
    
               /* School Dress */

  const d10 = document.getElementById("d10");
    const d9 = document.getElementById("d9");
    const p5 = document.getElementById("p5");
    var count5 = 0;
    var total5 = 0;
    p5.innerHTML = count5;
    const handleIncrement5 = () => {
        count5++;
        total5 = 50*count5;
        p5.innerHTML = count5;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
    
    const handleDecrement5 = () => {
    if(count5>0)
        count5--;
        total5 = 50*count5;
    p5.innerHTML = count5;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8;
    }
     
    d10.addEventListener("click", handleIncrement5);
    d9.addEventListener("click", handleDecrement5);
         
               /* Dress(Designer) */

               const d12 = document.getElementById("d12");
    const d11 = document.getElementById("d11");
    const p6 = document.getElementById("p6");
    var count6 = 0;
    var total6 = 0;
    p6.innerHTML = count6;
    const handleIncrement6 = () => {
        count6++;
        total6 = 100*count6;
        p6.innerHTML = count6;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
    
    const handleDecrement6 = () => {
    if(count6>0)
        count6--;
        total6 = 100*count6;
    p6.innerHTML = count6;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8;
    }
     
    d12.addEventListener("click", handleIncrement6);
    d11.addEventListener("click", handleDecrement6);
         
               /* Kids Dress */

               const d14 = document.getElementById("d14");
    const d13 = document.getElementById("d13");
    const p7 = document.getElementById("p7");
    var count7 = 0;
    var total7 = 0;
    p7.innerHTML = count7;
    const handleIncrement7 = () => {
        count7++;
        total7 = 50*count7;
        p7.innerHTML = count7;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    }
    
    const handleDecrement7 = () => {
    if(count7>0)
        count7--;
        total7 = 50*count7;
    p7.innerHTML = count7;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 ;
    }
     
    d14.addEventListener("click", handleIncrement7);
    d13.addEventListener("click", handleDecrement7);
         
               /* Suit */

               const d16 = document.getElementById("d16");
    const d15 = document.getElementById("d15");
    const p8 = document.getElementById("p8");
    var count8 = 0;
    var total8 = 0;
    p8.innerHTML = count8;
    const handleIncrement8 = () => {
        count8++;
        total8 = 99*count8;
        p8.innerHTML = count8;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 ;
    }
    
    const handleDecrement8 = () => {
    if(count8>0)
        count8--;
        total8 = 99*count8;
    p8.innerHTML = count8;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8;
    }
     
    d16.addEventListener("click", handleIncrement8);
    d15.addEventListener("click", handleDecrement8);
         

    document.getElementById("continue").addEventListener("click", function(){

var shirt, t_shirt, trouser, jeans, school, dress_designer, kids, suit ,total_rate, total_proceed ,  sc , tsc , tc , jc , schc, ddc, kc, suitc , totc;

sc = shirt = document.getElementById("p1").innerText;
tsc = t_shirt = document.getElementById("p2").innerText;
tc = trouser = document.getElementById("p3").innerText;
jc = jeans = document.getElementById("p4").innerText;
schc = school = document.getElementById("p5").innerText;
ddc = dress_designer = document.getElementById("p6").innerText;
kc = kids = document.getElementById("p7").innerText;
suitc = suit = document.getElementById("p8").innerText;
 totc = total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("dryshirt1", shirt);
localStorage.setItem("dryt_shirt1", t_shirt);
localStorage.setItem("drytrouser1", trouser);
localStorage.setItem("dryjeans1", jeans);
localStorage.setItem("dryschool1", school);
localStorage.setItem("drydress_designer1", dress_designer);
localStorage.setItem("drykids1", kids);
localStorage.setItem("drysuit1", suit);
localStorage.setItem("drytotal_rate_iron1", total_rate);

localStorage.setItem("drysc1", sc);
localStorage.setItem("drytsc1", tsc);
localStorage.setItem("drytc1", tc);
localStorage.setItem("dryjc1", jc);
localStorage.setItem("dryschc1", schc);
localStorage.setItem("dryddc1", ddc);
localStorage.setItem("drykc1", kc);
localStorage.setItem("drysuitc1", suitc);
localStorage.setItem("drytotc1", totc);



if(total_proceed>100){
    
    var flagiron2 = 1;
    sessionStorage.setItem("flagiron2", flagiron2);
  

    document.getElementById("warning").style.display="none";

    var outsort2 = localStorage.getItem("insort2");

    if(outsort2 == 1){
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

