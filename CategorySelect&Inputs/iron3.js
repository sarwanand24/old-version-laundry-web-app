document.getElementById("openSidebarMenu").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu.checked? "none" : "block";

})

           /* Payjama */
      
const d2 = document.getElementById("d2");
    const d1 = document.getElementById("d1");
    const p1 = document.getElementById("p1");
    var count = 0;
    const total = document.getElementById("total");
    var total1 = 0;
    p1.innerHTML = count;
    const handleIncrement = () => {
        count++;
        total1 = 15*count;
        p1.innerHTML = count;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 15*count;
    p1.innerHTML = count;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d2.addEventListener("click", handleIncrement);
    d1.addEventListener("click", handleDecrement);
    

         /* Plazo Plain */
         const d4 = document.getElementById("d4");
    const d3 = document.getElementById("d3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    var total2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        total2 = 10*count2;
        p2.innerHTML = count2;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
        total2 = 10*count2;
    p2.innerHTML = count2;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d4.addEventListener("click", handleIncrement2);
    d3.addEventListener("click", handleDecrement2);
    
              /* Plazo Heavy */

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
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement3 = () => {
    if(count3>0)
        count3--;
        total3 = 20*count3;
    p3.innerHTML = count3;
    total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d6.addEventListener("click", handleIncrement3);
    d5.addEventListener("click", handleDecrement3);
    
               /* Kurti */

  const d8 = document.getElementById("d8");
    const d7 = document.getElementById("d7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    var total4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        total4 = 19*count4;
        p4.innerHTML = count4;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 19*count4;
    p4.innerHTML = count4;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d8.addEventListener("click", handleIncrement4);
    d7.addEventListener("click", handleDecrement4);
    
               /* Saree */

  const d10 = document.getElementById("d10");
    const d9 = document.getElementById("d9");
    const p5 = document.getElementById("p5");
    var count5 = 0;
    var total5 = 0;
    p5.innerHTML = count5;
    const handleIncrement5 = () => {
        count5++;
        total5 = 15*count5;
        p5.innerHTML = count5;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement5 = () => {
    if(count5>0)
        count5--;
        total5 = 15*count5;
    p5.innerHTML = count5;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d10.addEventListener("click", handleIncrement5);
    d9.addEventListener("click", handleDecrement5);
         
               /* Saree M/H */

               const d12 = document.getElementById("d12");
    const d11 = document.getElementById("d11");
    const p6 = document.getElementById("p6");
    var count6 = 0;
    var total6 = 0;
    p6.innerHTML = count6;
    const handleIncrement6 = () => {
        count6++;
        total6 = 20*count6;
        p6.innerHTML = count6;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement6 = () => {
    if(count6>0)
        count6--;
        total6 = 20*count6;
    p6.innerHTML = count6;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d12.addEventListener("click", handleIncrement6);
    d11.addEventListener("click", handleDecrement6);
         
               /* Choli */

               const d14 = document.getElementById("d14");
    const d13 = document.getElementById("d13");
    const p7 = document.getElementById("p7");
    var count7 = 0;
    var total7 = 0;
    p7.innerHTML = count7;
    const handleIncrement7 = () => {
        count7++;
        total7 = 49*count7;
        p7.innerHTML = count7;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement7 = () => {
    if(count7>0)
        count7--;
        total7 = 49*count7;
    p7.innerHTML = count7;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d14.addEventListener("click", handleIncrement7);
    d13.addEventListener("click", handleDecrement7);
         
                /* Ladies Top */

                const d16 = document.getElementById("d16");
    const d15 = document.getElementById("d15");
    const p8 = document.getElementById("p8");
    var count8 = 0;
    var total8 = 0;
    p8.innerHTML = count8;
    const handleIncrement8 = () => {
        count8++;
        total8 = 7*count8;
        p8.innerHTML = count8;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement8 = () => {
    if(count8>0)
        count8--;
        total8 = 7*count8;
    p8.innerHTML = count8;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10 ;
    }
     
    d16.addEventListener("click", handleIncrement8);
    d15.addEventListener("click", handleDecrement8);
           
             /* Skirt(Half) */

const d18 = document.getElementById("d18");
    const d17 = document.getElementById("d17");
    const p9 = document.getElementById("p9");
    var count9 = 0;
    var total9 = 0;
    p9.innerHTML = count9;
    const handleIncrement9 = () => {
        count9++;
        total9 = 10*count9;
        p9.innerHTML = count9;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement9 = () => {
    if(count9>0)
        count9--;
        total9 = 10*count9;
    p9.innerHTML = count9;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d18.addEventListener("click", handleIncrement9);
    d17.addEventListener("click", handleDecrement9);
           
              /* Skirt(Full) */

  const d20 = document.getElementById("d20");
    const d19 = document.getElementById("d19");
    const p10 = document.getElementById("p10");
    var count10 = 0;
    var total10 = 0;
    p10.innerHTML = count10;
    const handleIncrement10 = () => {
        count10++;
        total10 = 15*count10;
        p10.innerHTML = count10;
        total.innerHTML = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    }
    
    const handleDecrement10 = () => {
    if(count10>0)
        count10--;
        total10 = 15*count10;
    p10.innerHTML = count10;
    total.innerHTML = total1 + total2 + total3 + total4  + total5 + total6 + total7 + total8 + total9 + total10;
    }
     
    d20.addEventListener("click", handleIncrement10);
    d19.addEventListener("click", handleDecrement10);
           

    document.getElementById("continue").addEventListener("click", function(){

var paijama, plazo, heavy, kurti, saree, mh , choli,top,skirt, full, total_rate, total_proceed ,paijama3, plazo3, heavy3, kurti3, saree3, mh3 , choli3,top3,skirt3, full3, total_proceed3;

paijama3 = paijama = document.getElementById("p1").innerText;
plazo3 = plazo = document.getElementById("p2").innerText;
heavy3 = heavy = document.getElementById("p3").innerText;
kurti3 = kurti = document.getElementById("p4").innerText;
saree3 = saree = document.getElementById("p5").innerText;
mh3 = mh = document.getElementById("p6").innerText;
choli3 = choli = document.getElementById("p7").innerText;
top3 = top = document.getElementById("p8").innerText;
skirt3 = skirt = document.getElementById("p9").innerText;
full3 = full = document.getElementById("p10").innerText;
total_proceed3 = total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("paijama1", paijama);
localStorage.setItem("plazo1", plazo);
localStorage.setItem("heavy1", heavy);
localStorage.setItem("kurti1", kurti);
localStorage.setItem("saree1", saree);
localStorage.setItem("mh1", mh);
localStorage.setItem("choli1", choli);
localStorage.setItem("top1", top);
localStorage.setItem("skirt1", skirt);
localStorage.setItem("full1", full);
localStorage.setItem("ladytotal_rate_iron1", total_rate);


localStorage.setItem("paijama4", paijama3);
localStorage.setItem("plazo4", plazo3);
localStorage.setItem("heavy4", heavy3);
localStorage.setItem("kurti4", kurti3);
localStorage.setItem("saree4", saree3);
localStorage.setItem("mh4", mh3);
localStorage.setItem("choli4", choli3);
localStorage.setItem("top4", top3);
localStorage.setItem("skirt4", skirt3);
localStorage.setItem("full4", full3);
localStorage.setItem("ladytotal_rate_iron4", total_proceed3);



if(total_proceed>100){

    var flagiron3 = 1;
    sessionStorage.setItem("flagiron3", flagiron3);
  

    document.getElementById("warning").style.display="none";
    var outsort3 = localStorage.getItem("insort3");

    if(outsort3 == 1){
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



