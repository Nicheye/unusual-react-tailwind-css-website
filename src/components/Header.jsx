import { useState,useRef,useLayoutEffect } from 'react'

import '../App.css'
import {gsap} from 'gsap'
import DropdownMenu from "./DropDownMenu";

import React from 'react'

const Header = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const handleMouseEnter = () => {
	  setDropdownVisible(true);
	};
  
	const handleMouseLeave = () => {
	  setDropdownVisible(false);
	};
	const LogoRef = useRef();
  
	useLayoutEffect((el) => {
	  const ctx = gsap.context(() => {
		const animation1 = gsap.to(".logo", { rotation: "+=360" });
	
		const animation2 = gsap.to(".logo", {
		  scrollTrigger: {
			//...
		  }
		});
	  }, el);
	
	  const onMove = () => {
		//...52
	  };
	  window.addEventListener("pointermove", onMove);
	
	  // cleanup function will be called when component is removed
	  return () => {
		ctx.revert(); // animation cleanup!!
	
		window.removeEventListener("pointermove", onMove); // Remove the event listener
	  };
	}, []);
	return (
	  <>
	   
		<header className="App-header">
		<button className="logo" ref={LogoRef}> Unusual site</button>
		<div className="bh">
		  <div
			className="menu"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		  >
			<button>Первая вкладка</button>
			{/* <DropdownMenu /> */}
			{isDropdownVisible && <DropdownMenu first="mamont" second="loh" />}
  
		  
		  </div>
  
		  <div
			className="menu"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		  >
			<button>Вторая вкладка</button>
			{/* <DropdownMenu /> */}
			{isDropdownVisible && <DropdownMenu first="mamont" second="loh" />}
  
		  
		  </div>
		  </div>
		</header>
		<hr />
	  
	
	  </>
	)
}

export default Header