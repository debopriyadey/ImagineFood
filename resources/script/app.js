if (document.location.hash == "" || document.location.hash == "#")
document.location.hash = "#product_one";

//1 price
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box-one');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateX(-200vw)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-200vw)';
     }
}

)

// omni app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box-two');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateX(200vw)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(200vw)';
     }
}

)
