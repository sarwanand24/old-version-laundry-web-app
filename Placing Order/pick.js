  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCDqQzRmuFOXQgfc12PIxzCDcHIJcIUW0I",
authDomain: "laundry-walaa.firebaseapp.com",
projectId: "laundry-walaa",
storageBucket: "laundry-walaa.appspot.com",
messagingSenderId: "164078565347",
appId: "1:164078565347:web:f7169029dad99f15fa52d6",
measurementId: "G-54QCKHK71N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

    import{ getDatabase, ref, set, child, get}
    from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

    const database = getDatabase();

    const submit = document.getElementById("submit1");



window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
window.recaptchaVerifier.render().then(function(widgetId) {
  grecaptcha.reset(widgetId);
});  


function Otp(){

    const phoneNumber = "+91"+document.getElementById("mobile").value;
const appVerifier = window.recaptchaVerifier;


signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
     const coderesult = confirmationResult;
      document.getElementById("changer").style.display="none";
      document.getElementById("changer2").style.display="block";
      swal("An otp has been sent to your mobile number");


    document.getElementById("confirm").addEventListener("click", function(){

        const code = document.getElementById("orig");
    coderesult.confirm(code.value).then((result) => {
  // User signed in successfully.
  const user = result.user;
  swal({
  title: "Hurray!",
  text: "Order Confirmed!",
  icon: "success",
  button: "Next",
});
  window.location = "myprofile.html";
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  swal("OTP is incorrect");
});

    })


      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });


}


submit.addEventListener("click" , Otp);



var name3 = localStorage.getItem("name2");
      var mobile3 = localStorage.getItem("mobile2");
      var add3 = localStorage.getItem("add2");
      var house3 = localStorage.getItem("house2");
      var pin3 = localStorage.getItem("pin2");

      var pw2 = localStorage.getItem("pw1");
 var ow2 = localStorage.getItem("ow1");
 var wi2 = localStorage.getItem("wi1");
 var shirtwi2 = localStorage.getItem("shirtwi1");
 var tshirtwi2 = localStorage.getItem("tshirtwi1");
 var trouserwi2 = localStorage.getItem("trouserwi1");
 var jeanswi2 = localStorage.getItem("jeanswi1");
 var schoolwi2 = localStorage.getItem("schoolwi1");
 var dresswi2 = localStorage.getItem("dresswi1");
 var kidswi2 = localStorage.getItem("kidswi1");
 var total_rate2 = localStorage.getItem("total_rate1");

 var iron_shirt_steam =  localStorage.getItem("shirt1");
var t_shirt_iron_steam = localStorage.getItem("t_shirt1");
var trouser_iron_steam = localStorage.getItem("trouser1");
var jeans_iron_steam = localStorage.getItem("jeans1");
var school_iron_steam = localStorage.getItem("school1");
var dress_designer_steam_iron = localStorage.getItem("dress_designer1");
var kids_steam_iron = localStorage.getItem("kids1");
var total_rate_iron2 = localStorage.getItem("total_rate_iron1");


 var drypw2 = localStorage.getItem("drypw1");
 var dryow2 = localStorage.getItem("dryow1");
 var drywi2 = localStorage.getItem("drywi1");
 var dryshirtwi2 = localStorage.getItem("dryshirtwi1");
 var drytshirtwi2 = localStorage.getItem("drytshirtwi1");
 var drytrouserwi2 = localStorage.getItem("drytrouserwi1");
 var dryjeanswi2 = localStorage.getItem("dryjeanswi1");
 var dryschoolwi2 = localStorage.getItem("dryschoolwi1");
 var drydresswi2 = localStorage.getItem("drydresswi1");
 var drykidswi2 = localStorage.getItem("drykidswi1");
 var drysuitwi2 = localStorage.getItem("drysuitwi1");
 var drytotal_rate2 = localStorage.getItem("drytotal_rate1");

 var iron_shirt_dry =  localStorage.getItem("dryshirt1");
var t_shirt_iron_dry = localStorage.getItem("dryt_shirt1");
var trouser_iron_dry = localStorage.getItem("drytrouser1");
var jeans_iron_dry = localStorage.getItem("dryjeans1");
var school_iron_dry = localStorage.getItem("dryschool1");
var dress_designer_dry_iron = localStorage.getItem("drydress_designer1");
var kids_dry_iron = localStorage.getItem("drykids1");
var suit_dry_iron = localStorage.getItem("drysuit1");
var drytotal_rate_iron2 = localStorage.getItem("drytotal_rate_iron1");

var ladypw2 = localStorage.getItem("ladypw1");
 var ladyow2 = localStorage.getItem("ladyow1");
 var ladywi2 = localStorage.getItem("ladywi1");
 var ladywf2 = localStorage.getItem("ladywf1");
 var payjamawi2 = localStorage.getItem("payjamawi1");
var plazopwi2 = localStorage.getItem("plazopwi1");
var plazohwi2 = localStorage.getItem("plazohwi1");
var kurtiwi2 = localStorage.getItem("kurtiwi1");
var sareewi2 = localStorage.getItem("sareewi1");
var sareemhwi2 = localStorage.getItem("sareemhwi1");
var choliwi2 = localStorage.getItem("choliwi1");
var topwi2 = localStorage.getItem("topwi1");
var skirthwi2 = localStorage.getItem("skirthwi1");
var skirtfwi2 = localStorage.getItem("skirtfwi1");
var lpwi2 = localStorage.getItem("lpwi1");
var lhwi2 = localStorage.getItem("lhwi1");
var bwi2 = localStorage.getItem("bwi1");
var lwi2 = localStorage.getItem("lwi1");
var nwi2 = localStorage.getItem("nwi1");
var opwi2 = localStorage.getItem("opwi1");
var jwi2 = localStorage.getItem("jwi1");
var icwi2 = localStorage.getItem("icwi1");
 var ladytotal_rate2 = localStorage.getItem("ladytotal_rate1");

 var paijama2 = localStorage.getItem("paijama1");
var plazo2 = localStorage.getItem("plazo1");
var heavy2 = localStorage.getItem("heavy1");
var kurti2 = localStorage.getItem("kurti1");
var saree2 = localStorage.getItem("saree1");
var mh2 = localStorage.getItem("mh1");
var choli2 = localStorage.getItem("choli1");
var top2 = localStorage.getItem("top1");
var skirt2 = localStorage.getItem("skirt1");
var full2 = localStorage.getItem("full1");
var ladytotal_rate_iron2 = localStorage.getItem("ladytotal_rate_iron1");


var woolenpw2 = localStorage.getItem("pww1");
 var woolenow2 = localStorage.getItem("oww1");
 var woolenwi2 = localStorage.getItem("wwf1");
 var sweatwi2 = localStorage.getItem("sweatwi1" );
var sweater_halfwi2 = localStorage.getItem("sweater_halfwi1");
var waistwi2 = localStorage.getItem("waistwi1");
var coatwi2 = localStorage.getItem("coatwi1");
var over_coatwi2 = localStorage.getItem("over_coatwi1");
var jacket_halfwi2 = localStorage.getItem("jacket_halfwi1");
var jacket_fullwi2 = localStorage.getItem("jacket_fullwi1");
var shawlwi2 = localStorage.getItem("shawlwi1");
var shawl_fancywi2 = localStorage.getItem("shawl_fancywi1");
var sweater_fullwi2 = localStorage.getItem("sweater_fullwi1");
 var woolentotal_rate2 = localStorage.getItem("total_woolen_rate1");

 var sweat2 = localStorage.getItem("sweat1" );
var sweater_half2 = localStorage.getItem("sweater_half1");
var waist2 = localStorage.getItem("waist1");
var coat2 = localStorage.getItem("coat1");
var over_coat2 = localStorage.getItem("over_coat1");
var jacket_half2 = localStorage.getItem("jacket_half1");
var jacket_full2 = localStorage.getItem("jacket_full1");
var shawl2 = localStorage.getItem("shawl1");
var shawl_fancy2 = localStorage.getItem("shawl_fancy1");
var sweater_full2 = localStorage.getItem("sweater_full1");
var woolentotal_rate_iron2 = localStorage.getItem("woolentotal_rate_iron1");

var housepw2 = localStorage.getItem("housepw1");
 var houseow2 = localStorage.getItem("houseow1");
 var housewi2 = localStorage.getItem("housewi1");
 var housewf2 = localStorage.getItem("housewf1");
 var housebedswi2 = localStorage.getItem("housebedswi1");
 var housebeddwi2 = localStorage.getItem("housebeddwi1");
 var housebedcoverwi2 = localStorage.getItem("housebedcoverwi1");
 var housepillowcoverwi2 = localStorage.getItem("housepillowcoverwi1");
 var housecushioncoverwi2 = localStorage.getItem("housecushioncoverwi1");
 var housecurtainwwi2 = localStorage.getItem("housecurtainwwi");
 var housecurtaindwi2 = localStorage.getItem("housecurtaindwi1");
 var housetotal_rate2 = localStorage.getItem("housetotal_rate1");

 var beds2 = localStorage.getItem("beds1");
 var bedd2 = localStorage.getItem("bedd1");
 var bedcover2 = localStorage.getItem("bedcover1");
 var pillowcover2 = localStorage.getItem("pillowcover1");
 var cushioncover2 = localStorage.getItem("cushioncover1");
 var curtainw2 = localStorage.getItem("curtainw1");
 var curtaind2 = localStorage.getItem("curtaind1");
 var btwi2 = localStorage.getItem("btwi1");
 var stwi2 = localStorage.getItem("stwi1");
 var nbhwi2 = localStorage.getItem("nbhwi1");
 var nbfwi2 = localStorage.getItem("nbfwi1");
 var wbwi2 = localStorage.getItem("wbwi1");
 var rfwi2 = localStorage.getItem("rfwi1");
 var housetotal_rate_iron2 = localStorage.getItem("housetotal_rate_iron1");


var flagiron1 = sessionStorage.getItem("flagiron1");
var flagiron2 = sessionStorage.getItem("flagiron2");
var flagiron3 = sessionStorage.getItem("flagiron3");
var flagiron4 = sessionStorage.getItem("flagiron4");
var flagiron5 = sessionStorage.getItem("flagiron5");


var flagwash1 = sessionStorage.getItem("flagwash1");
var flagwash2 = sessionStorage.getItem("flagwash2");
var flagwash3 = sessionStorage.getItem("flagwash3");
var flagwash4 = sessionStorage.getItem("flagwash4");
var flagwash5 = sessionStorage.getItem("flagwash5");


document.getElementById("confirm").addEventListener("click", function(){

   var order, order10,order20 , order60;
  order60 =  order10 = order20 =  order = Date.now();
   localStorage.setItem("order30", order20);
   localStorage.setItem("order40", order10);
   localStorage.setItem("order70", order60);
  
  var date50 = document.getElementById("date").value;
   
    
  if(flagiron1 == 1){

    var flagirona = 1;
    sessionStorage.setItem("flagirona", flagirona);

    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
Order_Steam: "Iron",
   Shirt_Steam: iron_shirt_steam,
     T_Shirt_Steam:t_shirt_iron_steam,
     Trouser_Steam: trouser_iron_steam,
     Jeans_Steam: jeans_iron_steam,
     School_Dress_Steam: school_iron_steam,
     Dress_Designer_Steam: dress_designer_steam_iron,
     Kids_Dress_Steam: kids_steam_iron,
     Total_Steam_Iron: total_rate_iron2,

});


  }


  if(flagiron2 == 1){

    var flagironb = 1;
    sessionStorage.setItem("flagironb", flagironb);
  

    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Dry_Clean: "Iron",
   Shirt_Dry: iron_shirt_dry,
     T_Shirt_Dry:t_shirt_iron_dry,
     Trouser_Dry: trouser_iron_dry,
     Jeans_Dry: jeans_iron_dry,
     School_Dress_Dry: school_iron_dry,
     Dress_Designer_Dry: dress_designer_dry_iron,
     Kids_Dress_Dry: kids_dry_iron,
     Suit_Dress_Dry: suit_dry_iron,
     Total_Dry_Iron: drytotal_rate_iron2,


});



  }


  if(flagiron3 == 1){

    var flagironc = 1;
    sessionStorage.setItem("flagironc", flagironc);
    


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Ladies: "Iron",
   Paijama: paijama2,
     Plazo_plain:plazo2,
     Plazo_heavy:heavy2,
     Kurti: kurti2,
     Saree: saree2,
     Saree_mh: mh2,
     Choli: choli2,
    Ladies_top: top2,
    Skirt_half: skirt2,
    Skirt_full: full2,
     Total_Dry_Iron: ladytotal_rate_iron2,


});


  }


  if(flagiron4 == 1){

    var flagirond = 1;
    sessionStorage.setItem("flagirond", flagirond);
    


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Woollen: "Iron",
   Sweat_Shirt : sweat2,
     Sweater_Half:sweater_half2,
     Waist_Coat:waist2,
    Coat: coat2,
    Over_Coat: over_coat2,
     Jacket_Half: jacket_half2,
     Jacket_Full: jacket_full2,
    Shawl: shawl2,
    Shawl_fancy: shawl_fancy2,
    Sweater_Full: sweater_full2,
     Total_Dry_Iron: woolentotal_rate_iron2 ,


});



  }

if(flagiron5 == 1){

  var flagirone = 1;
    sessionStorage.setItem("flagirone", flagirone);
    


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Household: "Iron",
   Bed_Sheet_Single: beds2,
  Bed_Sheet_Double: bedd2,
  Bed_Cover: bedcover2,
  Pillow_Cover: pillowcover2,
  Cushion_Cover: cushioncover2,
  Curtain_Window: curtainw2,
  Curtain_Door: curtaind2,
  Total_HouseHold_Iron: housetotal_rate_iron2,

});



}

if(flagwash1 == 1){

  var flagwasha = 1;
sessionStorage.setItem("flagwasha", flagwasha);

    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
Order_Steam2: "Wash_Iron",
    Premium_Wash_Steam: pw2,
    Organic_Wash_Steam: ow2,
    Wash_Iron_Steam: wi2,
    Shirt: shirtwi2,
    T_Shirt: tshirtwi2,
    Trouser: trouserwi2,
    Jeans: jeanswi2,
    School_Dress: schoolwi2,
    Dress_Designer: dresswi2,
    Kids: kidswi2,
    Total_Steam_Wash_Iron: total_rate2,

});


}


if(flagwash2 == 1){

  var flagwashb = 1;
sessionStorage.setItem("flagwashb", flagwashb);


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Dry_Clean2: "Wash_Iron",
 Premium_Wash_dry: drypw2,
 Organic_Wash_dry: dryow2,
 Wash_Iron_dry: drywi2,
 Shirt: dryshirtwi2,
    T_Shirt: drytshirtwi2,
    Trouser: drytrouserwi2,
    Jeans: dryjeanswi2,
    School_Dress: dryschoolwi2,
    Dress_Designer: drydresswi2,
    Kids: drykidswi2,
    Suit: drysuitwi2,
 Total_dry_Wash_Iron: drytotal_rate2,

});



}


if(flagwash3 == 1){

  var flagwashc = 1;
sessionStorage.setItem("flagwashc", flagwashc);


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Ladies_Wear2: "Wash_Iron",
 Premium_Wash_lady: ladypw2,
 Organic_Wash_lady: ladyow2,
 Wash_Iron_lady: ladywi2,
 Wash_Fold_lady: ladywf2,
 Paijama: payjamawi2,
     Plazo_plain:plazopwi2,
     Plazo_heavy:plazohwi2,
     Kurti: kurtiwi2,
     Saree: sareewi2,
     Saree_mh: sareemhwi2,
     Choli: choliwi2,
    Ladies_top: topwi2,
    Skirt_half: skirthwi2,
    Skirt_full: skirtfwi2,
    Lehenga_Plain: lpwi2,
    Lehenga_Heavy: lhwi2,
    Blouse: bwi2,
    Leggings: lwi2,
    Nighty: nwi2,
    One_Piece: opwi2,
    Jeans: jwi2,
    Inner_Clothes: icwi2,
 Total_lady_Wash_Iron: ladytotal_rate2,
});




}


if(flagwash4 == 1){

  var flagwashd = 1;
sessionStorage.setItem("flagwashd", flagwashd);


    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Woollen2: "Wash_Iron",
 Premium_Woolen_Wash: woolenpw2,
 Organic_Woolen_Wash: woolenow2,
 Wash_Fold_: woolenwi2,
 Sweat_Shirt : sweatwi2,
     Sweater_Half:sweater_halfwi2,
     Waist_Coat:waistwi2,
    Coat: coatwi2,
    Over_Coat: over_coatwi2,
     Jacket_Half: jacket_halfwi2,
     Jacket_Full: jacket_fullwi2,
    Shawl: shawlwi2,
    Shawl_fancy: shawl_fancywi2,
    Sweater_Full: sweater_fullwi2,
 Total_Woolen_Wash_Iron: woolentotal_rate2,

});


}


if(flagwash5 == 1){

  var flagwashe = 1;
sessionStorage.setItem("flagwashe", flagwashe);

    const db = getDatabase();
  set(ref(db, "OrdersList/"+ order),{
    Name: name3,
    Mobile_No : mobile3 ,
    Address: add3,
   House_No : house3,
   Pin_Code: pin3,
   Pickup_Date: date50,
   Order_Household2: "Wash_Iron", 
 Premium_Wash_household: housepw2,
 Organic_Wash_household: houseow2,
 Wash_Iron_household: housewi2,
 Wash_Fold_household: housewf2,
 Bed_Sheet_Single: housebedswi2,
  Bed_Sheet_Double: housebeddwi2,
  Bed_Cover: housebedcoverwi2,
  Pillow_Cover: housepillowcoverwi2,
  Cushion_Cover: housecushioncoverwi2,
  Curtain_Window: housecurtainwwi2,
  Curtain_Door: housecurtaindwi2,
  Big_Towel: btwi2,
  Small_Towel: stwi2,
  Normal_Blanket_Half: nbhwi2,
  Normal_Blanket_Full: nbfwi2,
  Winter_Blanket: wbwi2,
  Retrofit_Covers: rfwi2,
 Total_HouseHold_Wash_Iron: housetotal_rate2,

  });



}


})


document.getElementById("addu").innerHTML= add3 ;



    

document.getElementById("submit1").addEventListener("click", function(){

    var date1 , date10;
    date10 = date1 = document.getElementById("date").value;
     document.getElementById("normal1").innerHTML= date1;
     localStorage.setItem("date20", date10)


    var checks = document.getElementById("time-slot");
    var str = " ";
   var i;
    for( i = 0 ; i<4 ; i++) {

        if(checks[i].checked === true){
        str += checks[i].value + " ";
        }
    }
    document.getElementById("normal2").innerHTML = str ; 

})
     
  
