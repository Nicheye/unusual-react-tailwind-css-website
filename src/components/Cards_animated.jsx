import React from 'react'
import { gsap } from 'gsap'
import '../App.css'
import { useState,useEffect,useLayoutEffect,useRef } from 'react'
const boxes=[
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,

]
function classic(number){
  return "box"+ " " + "box"+number
}


const Cards_animated = () => {

  useLayoutEffect((el) => {
    const ctx = gsap.context(() => {
      const animation1 = gsap.to(".box1", { rotation: "+=360" });
      const animation3 = gsap.to(".box2", { rotation: "+=180" });
      const animation4 = gsap.to(".box3", { rotation: "+=90" });
      
      const animation2 = gsap.to(".box5", {
        scrollTrigger: {
          //...
         
        }
      });
    }, el);
  
    const onMove = () => {
      const animation5 = gsap.to(".box4", { 
        rotation: "+=50"});
    };
    
    
    window.addEventListener("pointermove", onMove);
  
    // cleanup function will be called when component is removed
    return () => {
      ctx.revert(); // animation cleanup!!
  
      window.removeEventListener("pointermove", onMove); // Remove the event listener
    };
  }, []);
  const onBtnClick = () =>{
    const ctx = gsap.context(() => {
      const animation5 = gsap.to(".box5", {
        
        x: -100,
        duration: 2,
        
        
        yoyo: true
         });
      const anima=gsap.to(".box5", {
        delay:1,
        x: 0,
        duration: 2,
        
        
        yoyo: true
         });
        
      
      
    }) 
    
    return () => {
      ctx.revert();
  };}
  const box = boxes.map(number=> 
     
    <div className={classic(number) }  ><h2 className='box_name'>{number}</h2> </div>)
  return (
    <div className="container ">
    <div class="flex flex-wrap gap-5 justify-center">
    {box}
  </div>

  <button  className="bg-teal-900 text-sky-700 font-semibold py-2 px-4 animate_btn" onClick={onBtnClick}> 
  Пoдвинуть 5 бокс
</button>
  </div>
  )
}

export default Cards_animated