Shery.imageEffect("#part2 #img1", {
   
    style: 2, 
   });
  
   gsap.from("#part1 ",{
opacity:0,
duration:1.5,
y:30,
   })
   gsap.from("#part3 #cont",{
    opacity:0,
    durtion:2.5,
    y:30,
   })

   document.querySelector("#part3 #cont #cont1").addEventListener("mouseover", function(){
    gsap.to("#part3 #cont #cont1",{
        opacity:1,
        fontSize:"30px",
        duration:0.3
       
    })
   })

   document.querySelector("#part3 #cont #cont1").addEventListener("mouseleave", function(){
    gsap.to("#part3 #cont #cont1",{
        opacity:0.7,
        fontSize:"24px",
        duration:0.3
        
    })
   })

   document.querySelector("#part3 #cont #cont2").addEventListener("mouseover", function(){
    gsap.to("#part3 #cont #cont2",{
        opacity:1,
        fontSize:"30px",
        duration:0.1
       
    })
   })

   document.querySelector("#part3 #cont #cont2").addEventListener("mouseleave", function(){
    gsap.to("#part3 #cont #cont2",{
        opacity:0.7,
        fontSize:"24px",
        duration:0.1
        
    })
   })


   document.querySelector("#part3 #cont #cont3").addEventListener("mouseover", function(){
    gsap.to("#part3 #cont #cont3",{
        opacity:1,
        fontSize:"30px",
        duration:0.1
       
    })
   })

   document.querySelector("#part3 #cont #cont3").addEventListener("mouseleave", function(){
    gsap.to("#part3 #cont #cont3",{
        opacity:0.7,
        fontSize:"24px",
        duration:0.1
        
    })
   })

   document.querySelector("#page1 button").addEventListener("mouseover",function(){
    gsap.to("#page1 button",{
       paddingRight:"65px",
      paddingLeft:"65px",
        fontSize:"14px",
        duration:0.1

    })
   })

   document.querySelector("#page1 button").addEventListener("mouseleave",function(){
    gsap.to("#page1 button",{
       paddingRight:"60px",
       paddingLeft:"60px",
        fontSize:"13px",
        duration:0.1

    })
   })