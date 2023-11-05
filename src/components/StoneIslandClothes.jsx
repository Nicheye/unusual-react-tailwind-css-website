import React from 'react'
import { gsap } from 'gsap'
import { useState,useEffect,useLayoutEffect,useRef } from 'react'
const StoneIslandClothes = () => {
	const clothes=[
		{
			title:"559A4",
			image:"https://cdn.yoox.biz/14/14430073EF_13_f.jpg",
			id:1,
		},
		{
			title:"543XA STONE ISLAND MARINA",
			image:"https://cdn.yoox.biz/14/14418915CA_13_f.jpg",
			id:2,
		},
		{
			title:"533A3",
			image:"https://cdn.yoox.biz/14/14415983BB_13_f.jpg",
			id:3,
		},
		{
			title:"519C2",
			image:"https://cdn.yoox.biz/14/14358377TG_13_f.jpg",
			id:4,
		},
		{
			title:"549GA STONE ISLAND STELLINA",
			image:"https://cdn.yoox.biz/14/14415983BB_13_f.jpg",
			id:5,
		},
		{
			title:"545B6",
			image:"https://cdn.yoox.biz/14/14358357VT_13_f.jpg",
			id:6,
		},
		{
			title:"534D3",
			image:"https://cdn.yoox.biz/14/14358329TH_13_f.jpg",
			id:7,
		},


	]


	



	const clothes3 = clothes.map(clothe =>  
		{if (clothe.id %2 === 0){
			return (
			<div className='bg-teal-900 w-250 first'>
				
				<img className='object-cover h-98 w-96' src={clothe.image} alt="" />
				<div className="text-xl text-lime-400 p-2 text-center">{clothe.title}</div>
			</div>)
		}
		else if(clothe.id==7){
			return (
				<div className='bg-teal-900 w-250 mt-9'>
					
					<img className='object-cover h-98 w-96' src={clothe.image} alt="" />
					<div className="text-xl text-lime-400 p-2 text-center">{clothe.title}</div>
				</div>)
		}
		else{
			return (
			<div className='bg-teal-900 w-250 relative top-10 second'>
				<img className='object-cover h-98 w-96' src={clothe.image} alt="" />
				<div className="text-xl text-lime-400 p-2 text-center">{clothe.title}</div>
			</div>)
		}})
		
		useLayoutEffect((el) => {
			const ctx = gsap.context(() => {
			
			}, el);
		  
			const onMove = () => {
			  const animation5 = gsap.to(".first", {
				x: -450,
				delay:1
				
			});			
			const animati = gsap.to(".second", { 
					x: 450,
					delay:1,
					yoyo:true
        			
				});


			};
			
			
			window.addEventListener("pointermove", onMove);
		  
			// cleanup function will be called when component is removed
			return () => {
			  ctx.revert(); // animation cleanup!!
		  
			  window.removeEventListener("pointermove", onMove); // Remove the event listener
			};
		  }, []);
		
  return (
	<div className='flex flex-wrap justify-center gap-9 my-10'>{clothes3}</div>
  )
}

export default StoneIslandClothes