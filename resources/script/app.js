//1 price
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(1)');
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
// 2 app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(2)');
    var imag=document.querySelector('.plans .plan-box:nth-child(2)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateY(50px)';
        imag.style.opacity='0';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateY(0)';
    imag.style.opacity='1';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateY(50px)';
    imag.style.opacity='0';
     }
}

)
// omni app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(3)');
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
// ANIMATION
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.section-feature .box-parent');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.opacity=0;
     }
}

)