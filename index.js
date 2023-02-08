var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click",function(e){
  e.preventDefault();
   var myname = document.getElementById("myname").value ;
   var email = document.getElementById("email").value ;
   var dept = document.getElementById("dept").value ;

   if(myname==""){
     alert("vai name den ");
   }else if(email==""){
    alert("vai email den ");
   }else if(dept==""){
    alert("vai dept den ");
   }else{
      var tbody = document.getElementById("tbody");
      var tr = document.createElement("tr");
      //for name 
      var tdName = document.createElement("td");
      tdName.innerHTML = myname ;
      tr.appendChild(tdName);
      tbody.appendChild(tr);

      // for email 
      var tdEmail = document.createElement("td");
      tdEmail.innerHTML = email ;
      tr.appendChild(tdEmail);
      tbody.appendChild(tr)

       // for dept 
       var tdDept = document.createElement("td");
       tdDept.innerHTML = dept ;
       tr.appendChild(tdDept);
       tbody.appendChild(tr);

       var dltBtn = document.createElement("button");
       dltBtn.innerHTML = 'Delete ';
       tr.appendChild(dltBtn);

       dltBtn.onclick = DeleteMytask ;
   }
   

   function DeleteMytask(){
       var Myitems = this.parentNode ; 
       var trr = Myitems.parentNode ;
       trr.removeChild(Myitems)
   }
});


//clickable slider
// var next = document.getElementById("next");
// var prev = document.getElementById("prev");
// var myimg = ["0.jpg","1.jpg","2.jpg","3.jfif"];
// var count = 0 ; 
// var imgLen = myimg.length ;//4

// var pic = document.getElementById("pic");

// next.addEventListener("click",function(){
//    count++ ;//
     
//         console.log(count);
//            //4 >=  4
//      if(count>=imgLen){
//          count = 0 ; 
//          pic.src = myimg[count];
//      }else{
//         pic.src = myimg[count];
//      }
   
// });

// prev.addEventListener('click',function(){
//       count-- ;
         
//       if(count<=0){
//         count = imgLen - 1;
//         pic.src = myimg[count];
//       }else{
//         pic.src = myimg[count];
//      }
// });



//BOM

var prev = document.getElementById("prev");
var myimg = ["0.jpg","1.jpg","2.jpg","3.jfif"];
var count = 0 ; 
var imgLen = myimg.length ;//4

var pic = document.getElementById("pic");

setInterval(slider,1000);

function slider(){
    count++ ;//
     
        console.log(count);
           //4 >=  4
     if(count>=imgLen){
         count = 0 ; 
         pic.src = myimg[count];
     }else{
        pic.src = myimg[count];
     }
   
}
