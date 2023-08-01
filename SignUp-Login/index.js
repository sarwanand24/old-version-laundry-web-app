
// JavaScript code
function search_clothes() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('clothes');
    var h2= document.getElementById("h2");
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="block";	
            h2.style.display="block";	
		}
	}
}

document.getElementById("proceed").addEventListener("click", function(){


  const total_quant = document.getElementById("quant").innerText;
    sessionStorage.setItem("total_quant1","total_quant");
    window.location="order.html";

})

//Counting Begins-----------------------------------------------------------------------------------------------------------

     /* Shirt */
      
     const d2 = document.getElementById("d2");
    const d1 = document.getElementById("d1");
    const p1 = document.getElementById("p1");
    var count = 0;
    const quant = document.getElementById("quant");
    p1.innerHTML = count;
    const handleIncrement = () => {
        count++;
        p1.innerHTML = count;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement = () => {
    if(count>0)
        count--;
    p1.innerHTML = count;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d2.addEventListener("click", handleIncrement);
    d1.addEventListener("click", handleDecrement);
    


     /* T-Shirt */
      
     const d4 = document.getElementById("d4");
    const d3 = document.getElementById("d3");
    const p2 = document.getElementById("p2");
    var count2 = 0;
    p2.innerHTML = count2;
    const handleIncrement2 = () => {
        count2++;
        p2.innerHTML = count2;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement2 = () => {
    if(count2>0)
        count2--;
    p2.innerHTML = count2;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d4.addEventListener("click", handleIncrement2);
    d3.addEventListener("click", handleDecrement2);
    


     /* Jeans */
      
     const d6 = document.getElementById("d6");
    const d5 = document.getElementById("d5");
    const p3 = document.getElementById("p3");
    var count3 = 0;
    p3.innerHTML = count3;
    const handleIncrement3 = () => {
        count3++;
        p3.innerHTML = count3;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement3 = () => {
    if(count3>0)
        count3--;
    p3.innerHTML = count3;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d6.addEventListener("click", handleIncrement3);
    d5.addEventListener("click", handleDecrement3);

    

     /* Formal Pant */
      
     const d8 = document.getElementById("d8");
    const d7 = document.getElementById("d7");
    const p4 = document.getElementById("p4");
    var count4 = 0;
    p4.innerHTML = count4;
    const handleIncrement4 = () => {
        count4++;
        p4.innerHTML = count4;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement4 = () => {
    if(count4>0)
        count4--;
    p4.innerHTML = count4;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d8.addEventListener("click", handleIncrement4);
    d7.addEventListener("click", handleDecrement4);



     /* Jacket */
      
     const d10 = document.getElementById("d10");
    const d9= document.getElementById("d9");
    const p5 = document.getElementById("p5");
    var count5 = 0;
    p5.innerHTML = count5;
    const handleIncrement5 = () => {
        count5++;
        p5.innerHTML = count5;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement5 = () => {
    if(count5>0)
        count5--;
    p5.innerHTML = count5;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d10.addEventListener("click", handleIncrement5);
    d9.addEventListener("click", handleDecrement5);



    

     /* Jacket Leather */
      
     const d12 = document.getElementById("d12");
    const d11= document.getElementById("d11");
    const p6 = document.getElementById("p6");
    var count6 = 0;
    p6.innerHTML = count6;
    const handleIncrement6 = () => {
        count6++;
        p6.innerHTML = count6;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement6 = () => {
    if(count6>0)
        count6--;
    p6.innerHTML = count6;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d12.addEventListener("click", handleIncrement6);
    d11.addEventListener("click", handleDecrement6);



    

     /* Kurta */
      
     const d14 = document.getElementById("d14");
    const d13= document.getElementById("d13");
    const p7 = document.getElementById("p7");
    var count7 = 0;
    p7.innerHTML = count7;
    const handleIncrement7 = () => {
        count7++;
        p7.innerHTML = count7;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement7 = () => {
    if(count7>0)
        count7--;
    p7.innerHTML = count7;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d14.addEventListener("click", handleIncrement7);
    d13.addEventListener("click", handleDecrement7);



    /* Pajama */
      
    const d16 = document.getElementById("d16");
    const d15= document.getElementById("d15");
    const p8 = document.getElementById("p8");
    var count8 = 0;
    p8.innerHTML = count8;
    const handleIncrement8 = () => {
        count8++;
        p8.innerHTML = count8;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement8 = () => {
    if(count8>0)
        count8--;
    p8.innerHTML = count8;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d16.addEventListener("click", handleIncrement8);
    d15.addEventListener("click", handleDecrement8);



     /* Ladies Top */
      
     const d18 = document.getElementById("d18");
    const d17= document.getElementById("d17");
    const p9 = document.getElementById("p9");
    var count9 = 0;
    p9.innerHTML = count9;
    const handleIncrement9 = () => {
        count9++;
        p9.innerHTML = count9;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement9 = () => {
    if(count9>0)
        count9--;
    p9.innerHTML = count9;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d18.addEventListener("click", handleIncrement9);
    d17.addEventListener("click", handleDecrement9);



     /* Skirt Half */
      
     const d20 = document.getElementById("d20");
    const d19= document.getElementById("d19");
    const p10 = document.getElementById("p10");
    var count10 = 0;
    p10.innerHTML = count10;
    const handleIncrement10 = () => {
        count10++;
        p10.innerHTML = count10;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement10 = () => {
    if(count10>0)
        count10--;
    p10.innerHTML = count10;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d20.addEventListener("click", handleIncrement10);
    d19.addEventListener("click", handleDecrement10);



     /* Skirt Full */
      
     const d22 = document.getElementById("d22");
    const d21= document.getElementById("d21");
    const p11 = document.getElementById("p11");
    var count11 = 0;
    p11.innerHTML = count11;
    const handleIncrement11 = () => {
        count11++;
        p11.innerHTML = count11;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement11 = () => {
    if(count11>0)
        count11--;
    p11.innerHTML = count11;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d22.addEventListener("click", handleIncrement11);
    d21.addEventListener("click", handleDecrement11);


    
     /* Dress */
      
     const d24 = document.getElementById("d24");
    const d23= document.getElementById("d23");
    const p12 = document.getElementById("p12");
    var count12 = 0;
    p12.innerHTML = count12;
    const handleIncrement12 = () => {
        count12++;
        p12.innerHTML = count12;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement12 = () => {
    if(count12>0)
        count12--;
    p12.innerHTML = count12;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d24.addEventListener("click", handleIncrement12);
    d23.addEventListener("click", handleDecrement12);



    
    
     /* Dress Designer */
      
     const d26 = document.getElementById("d26");
    const d25= document.getElementById("d25");
    const p13 = document.getElementById("p13");
    var count13 = 0;
    p13.innerHTML = count13;
    const handleIncrement13 = () => {
        count13++;
        p13.innerHTML = count13;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement13 = () => {
    if(count13>0)
        count13--;
    p13.innerHTML = count13;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d26.addEventListener("click", handleIncrement13);
    d25.addEventListener("click", handleDecrement13);



     /* Gown(Plain) */
      
     const d28 = document.getElementById("d28");
    const d27= document.getElementById("d27");
    const p14 = document.getElementById("p14");
    var count14 = 0;
    p14.innerHTML = count14;
    const handleIncrement14 = () => {
        count14++;
        p14.innerHTML = count14;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement14 = () => {
    if(count14>0)
        count14--;
    p14.innerHTML = count14;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d28.addEventListener("click", handleIncrement14);
    d27.addEventListener("click", handleDecrement14);



    /* Gown(Heavy) */
      
    const d30 = document.getElementById("d30");
    const d29= document.getElementById("d29");
    const p15 = document.getElementById("p15");
    var count15 = 0;
    p15.innerHTML = count15;
    const handleIncrement15 = () => {
        count15++;
        p15.innerHTML = count15;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement15 = () => {
    if(count15>0)
        count15--;
    p15.innerHTML = count15;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d30.addEventListener("click", handleIncrement15);
    d29.addEventListener("click", handleDecrement15);



     /* Payjama/Leggings */
      
     const d32 = document.getElementById("d32");
    const d31= document.getElementById("d31");
    const p16 = document.getElementById("p16");
    var count16 = 0;
    p16.innerHTML = count16;
    const handleIncrement16 = () => {
        count16++;
        p16.innerHTML = count16;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement16 = () => {
    if(count16>0)
        count16--;
    p16.innerHTML = count16;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d32.addEventListener("click", handleIncrement16);
    d31.addEventListener("click", handleDecrement16);


     /* Plazo(Plain) */
      
     const d34 = document.getElementById("d34");
    const d33= document.getElementById("d33");
    const p17 = document.getElementById("p17");
    var count17 = 0;
    p17.innerHTML = count17;
    const handleIncrement17 = () => {
        count17++;
        p17.innerHTML = count17;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement17 = () => {
    if(count17>0)
        count17--;
    p17.innerHTML = count17;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d34.addEventListener("click", handleIncrement17);
    d33.addEventListener("click", handleDecrement17);



     /* Plazo(Heavy) */
      
     const d36 = document.getElementById("d36");
    const d35= document.getElementById("d35");
    const p18 = document.getElementById("p18");
    var count18 = 0;
    p18.innerHTML = count18;
    const handleIncrement18 = () => {
        count18++;
        p18.innerHTML = count18;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement18 = () => {
    if(count18>0)
        count18--;
    p18.innerHTML = count18;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d36.addEventListener("click", handleIncrement18);
    d35.addEventListener("click", handleDecrement18);



    /* Kurti/Kameez */
      
    const d38 = document.getElementById("d38");
    const d37= document.getElementById("d37");
    const p19 = document.getElementById("p19");
    var count19 = 0;
    p19.innerHTML = count19;
    const handleIncrement19 = () => {
        count19++;
        p19.innerHTML = count19;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement19 = () => {
    if(count19>0)
        count19--;
    p19.innerHTML = count19;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d38.addEventListener("click", handleIncrement19);
    d37.addEventListener("click", handleDecrement19);



     /* Blouse */
      
     const d40 = document.getElementById("d40");
    const d39= document.getElementById("d39");
    const p20 = document.getElementById("p20");
    var count20 = 0;
    p20.innerHTML = count20;
    const handleIncrement20 = () => {
        count20++;
        p20.innerHTML = count20;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement20 = () => {
    if(count20>0)
        count20--;
    p20.innerHTML = count20;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d40.addEventListener("click", handleIncrement20);
    d39.addEventListener("click", handleDecrement20);



    
     /*  Saree  */
      
     const d42 = document.getElementById("d42");
    const d41= document.getElementById("d41");
    const p21 = document.getElementById("p21");
    var count21 = 0;
    p21.innerHTML = count21;
    const handleIncrement21 = () => {
        count21++;
        p21.innerHTML = count21;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement21 = () => {
    if(count21>0)
        count21--;
    p21.innerHTML = count21;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d42.addEventListener("click", handleIncrement21);
    d41.addEventListener("click", handleDecrement21);



     /*  Suit 2pc Dry Clean  */
      
     const d44 = document.getElementById("d44");
    const d43= document.getElementById("d43");
    const p22 = document.getElementById("p22");
    var count22 = 0;
    p22.innerHTML = count22;
    const handleIncrement22 = () => {
        count22++;
        p22.innerHTML = count22;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement22 = () => {
    if(count22>0)
        count22--;
    p22.innerHTML = count22;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d44.addEventListener("click", handleIncrement22);
    d43.addEventListener("click", handleDecrement22);



     /*  Suit 3pc Dry Clean  */
      
     const d46 = document.getElementById("d46");
    const d45= document.getElementById("d45");
    const p23 = document.getElementById("p23");
    var count23 = 0;
    p23.innerHTML = count23;
    const handleIncrement23 = () => {
        count23++;
        p23.innerHTML = count23;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement23 = () => {
    if(count23>0)
        count23--;
    p23.innerHTML = count23;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d46.addEventListener("click", handleIncrement23);
    d45.addEventListener("click", handleDecrement23);



     /*  Lehenga Plain Dry Clean  */
      
     const d48 = document.getElementById("d48");
    const d47= document.getElementById("d47");
    const p24 = document.getElementById("p24");
    var count24 = 0;
    p24.innerHTML = count24;
    const handleIncrement24 = () => {
        count24++;
        p24.innerHTML = count24;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement24 = () => {
    if(count24>0)
        count24--;
    p24.innerHTML = count24;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d48.addEventListener("click", handleIncrement24);
    d47.addEventListener("click", handleDecrement24);



    /*  Lehenga Heavy Dry Clean  */
      
    const d50 = document.getElementById("d50");
    const d49= document.getElementById("d49");
    const p25 = document.getElementById("p25");
    var count25 = 0;
    p25.innerHTML = count25;
    const handleIncrement25 = () => {
        count25++;
        p25.innerHTML = count25;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement25 = () => {
    if(count25>0)
        count25--;
    p25.innerHTML = count25;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d50.addEventListener("click", handleIncrement25);
    d49.addEventListener("click", handleDecrement25);



     /*  Lehenga Bridal Dry Clean  */
      
     const d52 = document.getElementById("d52");
    const d51= document.getElementById("d51");
    const p26 = document.getElementById("p26");
    var count26 = 0;
    p26.innerHTML = count26;
    const handleIncrement26 = () => {
        count26++;
        p26.innerHTML = count26;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement26 = () => {
    if(count26>0)
        count26--;
    p26.innerHTML = count26;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d52.addEventListener("click", handleIncrement26);
    d51.addEventListener("click", handleDecrement26);



     /*  Shirt Dry Clean  */
      
     const d54 = document.getElementById("d54");
    const d53= document.getElementById("d53");
    const p27 = document.getElementById("p27");
    var count27 = 0;
    p27.innerHTML = count27;
    const handleIncrement27 = () => {
        count27++;
        p27.innerHTML = count27;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement27 = () => {
    if(count27>0)
        count27--;
    p27.innerHTML = count27;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d54.addEventListener("click", handleIncrement27);
    d53.addEventListener("click", handleDecrement27);



     /* T-Shirt Dry Clean  */
      
     const d56 = document.getElementById("d56");
    const d55= document.getElementById("d55");
    const p28 = document.getElementById("p28");
    var count28 = 0;
    p28.innerHTML = count28;
    const handleIncrement28 = () => {
        count28++;
        p28.innerHTML = count28;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement28 = () => {
    if(count28>0)
        count28--;
    p28.innerHTML = count28;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d56.addEventListener("click", handleIncrement28);
    d55.addEventListener("click", handleDecrement28);



     /* Formal Pant Dry Clean  */
      
     const d58 = document.getElementById("d58");
    const d57= document.getElementById("d57");
    const p29 = document.getElementById("p29");
    var count29 = 0;
    p29.innerHTML = count29;
    const handleIncrement29 = () => {
        count29++;
        p29.innerHTML = count29;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement29 = () => {
    if(count29>0)
        count29--;
    p29.innerHTML = count29;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d58.addEventListener("click", handleIncrement29);
    d57.addEventListener("click", handleDecrement29);



    /* Kurta Dry Clean  */
      
    const d60 = document.getElementById("d60");
    const d59= document.getElementById("d59");
    const p30 = document.getElementById("p30");
    var count30 = 0;
    p30.innerHTML = count30;
    const handleIncrement30 = () => {
        count30++;
        p30.innerHTML = count30;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement30 = () => {
    if(count30>0)
        count30--;
    p30.innerHTML = count30;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d60.addEventListener("click", handleIncrement30);
    d59.addEventListener("click", handleDecrement30);



     /* Pajama Dry Clean  */
      
     const d62 = document.getElementById("d62");
    const d61= document.getElementById("d61");
    const p31 = document.getElementById("p31");
    var count31 = 0;
    p31.innerHTML = count31;
    const handleIncrement31 = () => {
        count31++;
        p31.innerHTML = count31;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement31 = () => {
    if(count31>0)
        count31--;
    p31.innerHTML = count31;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d62.addEventListener("click", handleIncrement31);
    d61.addEventListener("click", handleDecrement31);



    /*  Saree  Dry Clean  */
      
    const d64 = document.getElementById("d64");
    const d63= document.getElementById("d63");
    const p32 = document.getElementById("p32");
    var count32 = 0;
    p32.innerHTML = count32;
    const handleIncrement32 = () => {
        count32++;
        p32.innerHTML = count32;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement32 = () => {
    if(count32>0)
        count32--;
    p32.innerHTML = count32;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d64.addEventListener("click", handleIncrement32);
    d63.addEventListener("click", handleDecrement32);


     /*  Bedsheet(S)  */
      
     const d66 = document.getElementById("d66");
    const d65= document.getElementById("d65");
    const p33 = document.getElementById("p33");
    var count33 = 0;
    p33.innerHTML = count33;
    const handleIncrement33 = () => {
        count33++;
        p33.innerHTML = count33;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement33 = () => {
    if(count33>0)
        count33--;
    p33.innerHTML = count33;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d66.addEventListener("click", handleIncrement33);
    d65.addEventListener("click", handleDecrement33);



     /*  Bedsheet(D)  */
      
     const d68 = document.getElementById("d68");
    const d67= document.getElementById("d67");
    const p34 = document.getElementById("p34");
    var count34 = 0;
    p34.innerHTML = count34;
    const handleIncrement34 = () => {
        count34++;
        p34.innerHTML = count34;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement34 = () => {
    if(count34>0)
        count34--;
    p34.innerHTML = count34;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d68.addEventListener("click", handleIncrement34);
    d67.addEventListener("click", handleDecrement34);




     /*  Bed Cover  */
      
     const d70 = document.getElementById("d70");
    const d69= document.getElementById("d69");
    const p35 = document.getElementById("p35");
    var count35 = 0;
    p35.innerHTML = count35;
    const handleIncrement35 = () => {
        count35++;
        p35.innerHTML = count35;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement35 = () => {
    if(count35>0)
        count35--;
    p35.innerHTML = count35;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d70.addEventListener("click", handleIncrement35);
    d69.addEventListener("click", handleDecrement35);




     /*  Pillow/Cushion Cover  */
      
     const d72 = document.getElementById("d72");
    const d71= document.getElementById("d71");
    const p36 = document.getElementById("p36");
    var count36 = 0;
    p36.innerHTML = count36;
    const handleIncrement36 = () => {
        count36++;
        p36.innerHTML = count36;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement36 = () => {
    if(count36>0)
        count36--;
    p36.innerHTML = count36;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d72.addEventListener("click", handleIncrement36);
    d71.addEventListener("click", handleDecrement36);




     /*  Curtain Window */
      
     const d74 = document.getElementById("d74");
    const d73= document.getElementById("d73");
    const p37 = document.getElementById("p37");
    var count37 = 0;
    p37.innerHTML = count37;
    const handleIncrement37 = () => {
        count37++;
        p37.innerHTML = count37;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement37 = () => {
    if(count37>0)
        count37--;
    p37.innerHTML = count37;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d74.addEventListener("click", handleIncrement37);
    d73.addEventListener("click", handleDecrement37);



      /*  Curtain Door */
      
      const d76 = document.getElementById("d76");
    const d75= document.getElementById("d75");
    const p38 = document.getElementById("p38");
    var count38 = 0;
    p38.innerHTML = count38;
    const handleIncrement38 = () => {
        count38++;
        p38.innerHTML = count38;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement38 = () => {
    if(count38>0)
        count38--;
    p38.innerHTML = count38;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d76.addEventListener("click", handleIncrement38);
    d75.addEventListener("click", handleDecrement38);





    /*  Blanket(S) */
      
    const d78 = document.getElementById("d78");
    const d77= document.getElementById("d77");
    const p39 = document.getElementById("p39");
    var count39 = 0;
    p39.innerHTML = count39;
    const handleIncrement39 = () => {
        count39++;
        p39.innerHTML = count39;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement39 = () => {
    if(count39>0)
        count39--;
    p39.innerHTML = count39;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d78.addEventListener("click", handleIncrement39);
    d77.addEventListener("click", handleDecrement39);



     /*  Blanket(D) */
      
     const d80 = document.getElementById("d80");
    const d79= document.getElementById("d79");
    const p40 = document.getElementById("p40");
    var count40 = 0;
    p40.innerHTML = count40;
    const handleIncrement40 = () => {
        count40++;
        p40.innerHTML = count40;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement40 = () => {
    if(count40>0)
        count40--;
    p40.innerHTML = count40;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d80.addEventListener("click", handleIncrement40);
    d79.addEventListener("click", handleDecrement40);




    /*  Carpet */
      
    const d82 = document.getElementById("d82");
    const d81= document.getElementById("d81");
    const p41 = document.getElementById("p41");
    var count41 = 0;
    p41.innerHTML = count41;
    const handleIncrement41 = () => {
        count41++;
        p41.innerHTML = count41;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement41 = () => {
    if(count41>0)
        count41--;
    p41.innerHTML = count41;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d82.addEventListener("click", handleIncrement41);
    d81.addEventListener("click", handleDecrement41);




    

    /*  Sofa Cover(set) */
      
    const d84 = document.getElementById("d84");
    const d83= document.getElementById("d83");
    const p42 = document.getElementById("p42");
    var count42 = 0;
    p42.innerHTML = count42;
    const handleIncrement42 = () => {
        count42++;
        p42.innerHTML = count42;
        quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42 ;
    }
    
    const handleDecrement42 = () => {
    if(count42>0)
        count42--;
    p42.innerHTML = count42;
    quant.innerHTML = count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14 + count15 + count16 + count17 + count18 + count19 + count20 + count21 + count22 + count23 + count24 + count25 + count26 + count27 + count28 + count29 + count30 + count31 + count32 + count33 + count34 + count35 + count36 + count37 + count38 + count39 + count40 + count41 + count42;
    }
     
    d84.addEventListener("click", handleIncrement42);
    d83.addEventListener("click", handleDecrement42);


//for database --------------------------------------------------------------------------------------------------


