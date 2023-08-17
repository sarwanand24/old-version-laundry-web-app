
document.getElementById("openSidebarMenu14").addEventListener("click", function(){

var hidden = document.getElementById("hidden");
hidden.style.display = openSidebarMenu14.checked? "none" : "block";

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
        total1 = 119*count;
        p1.innerHTML = count;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
        total1 = 119*count;
    p1.innerHTML = count;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
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
        total2= 99*count2;
        p2.innerHTML = count2;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    }
    
    const handleDecrement2 = () => {
        if(count2>0)
    count2--;
    total2 = 99*count2;
    p2.innerHTML = count2;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
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
        total3 = 89*count3;
        p3.innerHTML = count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    }
    
    const handleDecrement3 = () => {
        if(count3>0) 
    count3--;
    total3 = 89*count3;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    p3.innerHTML = count3;
    }
    
    b6.addEventListener("click", handleIncrement3);
    b5.addEventListener("click", handleDecrement3);
    
       /*     Wash & Fold     */

    const b8 = document.getElementById("b8");
    const b7 = document.getElementById("b7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    var total4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        total4 = 79*count4;
        p4.innerHTML = count4;
        total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
        total4 = 79*count4;
    p4.innerHTML = count4;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
    }
     
    b8.addEventListener("click", handleIncrement4);
    b7.addEventListener("click", handleDecrement4);




/*  Payjama/Salwar Calculation */

const b10 = document.getElementById("b10");
const b9 = document.getElementById("b9");
const p5 = document.getElementById("p5");
var count5 = 0;
var total5 = 0;
p5.innerHTML = count4;
const handleIncrement5 = () => {
    count5++;
    total5= 39*count5;
    p5.innerHTML = count5;
    total.innerHTML =total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement5 = () => {
    if(count5>0)
count5--;
total5 = 39*count5;
p5.innerHTML = count5;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b10.addEventListener("click", handleIncrement5);
b9.addEventListener("click", handleDecrement5);


/*  Plazo Plain Calculation */

const b12 = document.getElementById("b12");
const b11 = document.getElementById("b11");
const p6 = document.getElementById("p6");
var count6 = 0;
var total6 = 0;
p6.innerHTML = count6;
const handleIncrement6 = () => {
    count6++;
    total6= 39*count6;
    p6.innerHTML = count6;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement6 = () => {
    if(count6>0)
count6--;
total6 = 39*count6;
p6.innerHTML = count6;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b12.addEventListener("click", handleIncrement6);
b11.addEventListener("click", handleDecrement6);


/*  Plazo Heavy Calculation */

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
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement7 = () => {
    if(count7>0)
count7--;
total7 = 49*count7;
p7.innerHTML = count7;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b14.addEventListener("click", handleIncrement7);
b13.addEventListener("click", handleDecrement7);


/*  Kurti/Kameez Calculation */

const b16 = document.getElementById("b16");
const b15 = document.getElementById("b15");
const p8 = document.getElementById("p8");
var count8 = 0;
var total8 = 0;
p8.innerHTML = count8;
const handleIncrement8 = () => {
    count8++;
    total8= 49*count8;
    p8.innerHTML = count8;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement8 = () => {
    if(count8>0)
count8--;
total8 = 49*count8;
p8.innerHTML = count8;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b16.addEventListener("click", handleIncrement8);
b15.addEventListener("click", handleDecrement8);


/*  Saree Calculation */

const b18 = document.getElementById("b18");
const b17 = document.getElementById("b17");
const p9 = document.getElementById("p9");
var count9 = 0;
var total9 = 0;
p9.innerHTML = count9;
const handleIncrement9 = () => {
    count9++;
    total9= 21*count9;
    p9.innerHTML = count9;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement9 = () => {
    if(count9>0)
count9--;
total9 = 21*count9;
p9.innerHTML = count9;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b18.addEventListener("click", handleIncrement9);
b17.addEventListener("click", handleDecrement9);


/*  Saree(Heavy) Calculation */

const b20 = document.getElementById("b20");
const b19 = document.getElementById("b19");
const p10 = document.getElementById("p10");
var count10 = 0;
var total10 = 0;
p10.innerHTML = count10;
const handleIncrement10 = () => {
    count10++;
    total10= 59*count10;
    p10.innerHTML = count10;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement10 = () => {
    if(count10>0)
count10--;
total10 = 59*count10;
p10.innerHTML = count10;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b20.addEventListener("click", handleIncrement10);
b19.addEventListener("click", handleDecrement10);

/*  Choli Calculation */

const b22 = document.getElementById("b22");
const b21 = document.getElementById("b21");
const p11 = document.getElementById("p11");
var count11 = 0;
var total11 = 0;
p11.innerHTML = count11;
const handleIncrement11 = () => {
    count11++;
    total11= 99*count11;
    p11.innerHTML = count11;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement11 = () => {
    if(count11>0)
count11--;
total11 = 99*count11;
p11.innerHTML = count11;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b22.addEventListener("click", handleIncrement11);
b21.addEventListener("click", handleDecrement11);



/*  Ladies Top Calculation */

const b24 = document.getElementById("b24");
const b23 = document.getElementById("b23");
const p12 = document.getElementById("p12");
var count12 = 0;
var total12 = 0;
p12.innerHTML = count12;
const handleIncrement12 = () => {
    count12++;
    total12= 12*count12;
    p12.innerHTML = count12;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement12 = () => {
    if(count12>0)
count12--;
total12 = 12*count12;
p12.innerHTML = count12;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b24.addEventListener("click", handleIncrement12);
b23.addEventListener("click", handleDecrement12);


/*  Skirt(Half) Calculation */

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
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement13 = () => {
    if(count13>0)
count13--;
total13 = 29*count13;
p13.innerHTML = count13;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b26.addEventListener("click", handleIncrement13);
b25.addEventListener("click", handleDecrement13);




/*  Skirt(Full) Calculation */

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
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement14 = () => {
    if(count14>0)
count14--;
total14 = 39*count14;
p14.innerHTML = count14;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b28.addEventListener("click", handleIncrement14);
b27.addEventListener("click", handleDecrement14);


/*  Lehenga(Plain) Calculation */

const b30 = document.getElementById("b30");
const b29 = document.getElementById("b29");
const p15 = document.getElementById("p15");
var count15 = 0;
var total15 = 0;
p15.innerHTML = count15;
const handleIncrement15 = () => {
    count15++;
    total15= 99*count15;
    p15.innerHTML = count15;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement15 = () => {
    if(count15>0)
count15--;
total15 = 99*count15;
p15.innerHTML = count15;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b30.addEventListener("click", handleIncrement15);
b29.addEventListener("click", handleDecrement15);


/*  Lehenga(Heavy) Calculation */

const b32 = document.getElementById("b32");
const b31 = document.getElementById("b31");
const p16 = document.getElementById("p16");
var count16 = 0;
var total16 = 0;
p16.innerHTML = count16;
const handleIncrement16 = () => {
    count16++;
    total16= 159*count16;
    p16.innerHTML = count16;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement16 = () => {
    if(count16>0)
count16--;
total16 = 159*count16;
p16.innerHTML = count16;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b32.addEventListener("click", handleIncrement16);
b31.addEventListener("click", handleDecrement16);


/*  Blouse Calculation */

const b34 = document.getElementById("b34");
const b33 = document.getElementById("b33");
const p17 = document.getElementById("p17");
var count17 = 0;
var total17 = 0;
p17.innerHTML = count17;
const handleIncrement17 = () => {
    count17++;
    total17= 19*count17;
    p17.innerHTML = count17;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement17 = () => {
    if(count17>0)
count17--;
total17 = 19*count17;
p17.innerHTML = count17;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b34.addEventListener("click", handleIncrement17);
b33.addEventListener("click", handleDecrement17);


/*  Leggings Calculation */

const b36 = document.getElementById("b36");
const b35 = document.getElementById("b35");
const p18 = document.getElementById("p18");
var count18 = 0;
var total18 = 0;
p18.innerHTML = count18;
const handleIncrement18 = () => {
    count18++;
    total18= 12*count18;
    p18.innerHTML = count18;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement18 = () => {
    if(count18>0)
count18--;
total18 = 12*count18;
p18.innerHTML = count18;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b36.addEventListener("click", handleIncrement18);
b35.addEventListener("click", handleDecrement18);


/*  Nighty Calculation */

const b38 = document.getElementById("b38");
const b37 = document.getElementById("b37");
const p19 = document.getElementById("p19");
var count19 = 0;
var total19 = 0;
p19.innerHTML = count19;
const handleIncrement19 = () => {
    count19++;
    total19= 19*count19;
    p19.innerHTML = count19;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement19 = () => {
    if(count19>0)
count19--;
total19 = 19*count19;
p19.innerHTML = count19;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b38.addEventListener("click", handleIncrement19);
b37.addEventListener("click", handleDecrement19);


/*  One Piece Calculation */

const b40 = document.getElementById("b40");
const b39 = document.getElementById("b39");
const p20 = document.getElementById("p20");
var count20 = 0;
var total20 = 0;
p20.innerHTML = count20;
const handleIncrement20 = () => {
    count20++;
    total20= 39*count20;
    p20.innerHTML = count20;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement20 = () => {
    if(count20>0)
count20--;
total20 = 39*count20;
p20.innerHTML = count20;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b40.addEventListener("click", handleIncrement20);
b39.addEventListener("click", handleDecrement20);


/*  Jeans Calculation */

const b42 = document.getElementById("b42");
const b41 = document.getElementById("b41");
const p21 = document.getElementById("p21");
var count21 = 0;
var total21 = 0;
p21.innerHTML = count21;
const handleIncrement21 = () => {
    count21++;
    total21= 19*count21;
    p21.innerHTML = count21;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement21 = () => {
    if(count21>0)
count21--;
total21 = 19*count21;
p21.innerHTML = count21;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b42.addEventListener("click", handleIncrement21);
b41.addEventListener("click", handleDecrement21);



/*  Inner Clothes Calculation */

const b44 = document.getElementById("b44");
const b43 = document.getElementById("b43");
const p22 = document.getElementById("p22");
var count22 = 0;
var total22 = 0;
p22.innerHTML = count22;
const handleIncrement22 = () => {
    count22++;
    total22= 11*count22;
    p22.innerHTML = count22;
    total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14+ total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
  
}

const handleDecrement22 = () => {
    if(count22>0)
count22--;
total22 = 11*count22;
p22.innerHTML = count22;
total.innerHTML = total2 + total1 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;

}

b44.addEventListener("click", handleIncrement22);
b43.addEventListener("click", handleDecrement22);


    

    document.getElementById("continue").addEventListener("click", function(){

var pw,ow,wi, payjamawi, plazopwi, plazohwi, kurtiwi, sareewi, sareemhwi, choliwi, topwi, skirthwi, skirtfwi, lpwi, lhwi, bwi, lwi, nwi, opwi, jwi, icwi,  total_rate, total_proceed;

pw = document.getElementById("p1").innerText;
ow = document.getElementById("p2").innerText;
wi = document.getElementById("p3").innerText;
wf = document.getElementById("p4").innerText;
payjamawi = document.getElementById("p5").innerText;
plazopwi = document.getElementById("p6").innerText;
plazohwi = document.getElementById("p7").innerText;
kurtiwi = document.getElementById("p8").innerText;
sareewi = document.getElementById("p9").innerText;
sareemhwi = document.getElementById("p10").innerText;
choliwi = document.getElementById("p11").innerText;
topwi = document.getElementById("p12").innerText;
skirthwi = document.getElementById("p13").innerText;
skirtfwi = document.getElementById("p14").innerText;
lpwi = document.getElementById("p15").innerText;
lhwi = document.getElementById("p16").innerText;
bwi = document.getElementById("p17").innerText;
lwi = document.getElementById("p18").innerText;
nwi = document.getElementById("p19").innerText;
opwi = document.getElementById("p20").innerText;
jwi = document.getElementById("p21").innerText;
icwi = document.getElementById("p22").innerText;


total_proceed = total_rate = document.getElementById("total").innerText;

localStorage.setItem("ladypw1", pw);
localStorage.setItem("ladyow1", ow);
localStorage.setItem("ladywi1", wi);
localStorage.setItem("ladywi1", wf);
localStorage.setItem("payjamawi1", payjamawi);
localStorage.setItem("plazopwi1", plazopwi);
localStorage.setItem("plazohwi1", plazohwi);
localStorage.setItem("kurtiwi1", kurtiwi);
localStorage.setItem("sareewi1", sareewi);
localStorage.setItem("sareemhwi1", sareemhwi);
localStorage.setItem("choliwi1", choliwi);
localStorage.setItem("topwi1", topwi);
localStorage.setItem("skirthwi1", skirthwi);
localStorage.setItem("skirtfwi1", skirtfwi);
localStorage.setItem("lpw1", lpwi);
localStorage.setItem("lhwi1", lhwi);
localStorage.setItem("bwi1", bwi);
localStorage.setItem("lwi1", lwi);
localStorage.setItem("nwi1", nwi);
localStorage.setItem("opwi1", opwi);
localStorage.setItem("jwi1", jwi);
localStorage.setItem("icwi1", icwi);
localStorage.setItem("ladytotal_rate1", total_rate);


if(total_proceed>160){
   
    var flagwash3 = 1;
    sessionStorage.setItem("flagwash3", flagwash3);

    document.getElementById("warning").style.display="none";
    var outsort8 = localStorage.getItem("insort8");

    if(outsort8 == 1){
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
