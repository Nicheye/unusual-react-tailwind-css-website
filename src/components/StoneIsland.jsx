import React from 'react'
import StoneIslandClothes from './StoneIslandClothes'

const StoneIsland = () => {
  return (
	<div className="container bg-slate-300">
		<div className="stone_island">
			<div className="stone_top flex flex-wrap justify-center">

			<div class="bg-indigo-300 ...">
				<img class="object-cover h-100 w-100" src='https://cdn3.yoox.biz/cloud/stonewp/uploads/2023/09/HP-Portrait-Desktop_900x600-1.jpg'/>
			</div>
			<div className="stone-text">
				<div className="stone_title text-zinc-100 hover:text-emerald-600 text-4xl font-bold text-center my-4">Stone Island</div>
				<div className="stone_descr text-gray-50 text-xl w-68"> A culture of research, experimentation and usability are the matrixes that have always defined Stone Island; the brand, established in 1982, destined to become a symbol of extreme research on fibres and textiles applied to innovative design.
Each Stone Island piece is born from the perfect synthesis between experimentation and usability, between the study of fabrics and rationality.
The study of uniforms and of workwear, its evolution according to new functions of use, becomes Stone Island’s observatory for defining a project where the clothing’s purpose is never just purely aesthetic.</div>
			</div>
			</div>
			<StoneIslandClothes/>
		</div>

	</div>
  )
}

export default StoneIsland