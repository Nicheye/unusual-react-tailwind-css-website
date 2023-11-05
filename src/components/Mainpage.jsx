import React from 'react'

import '../App.css'
export const Mainpage = () => {
  const Cards = [
    {
      title:"Leng",
      link:"https://leng-en.com/",
      description:"помогает выучить английским интересным образом",
      id:1
    },
    {
      title:"Rssport",
      link:"https://Rssport/",
      description:"фейковый маркетплейс для сербов",
      id:2
    },
    {
      title:"Аутентификация в аккаунт django через react",
      link:"https://github.com/Nicheye/django-react-authtorization",
      description:"Аутентификация в аккаунт django через react",
      id:3
    },
    {
      title:"react eshop",
      link:"https://github.com/Nicheye/e-shop-react",
      description:"маленький фронт для инет магазина на джанго ",
      id:4
    },
  ]
  const card = Cards.map(card => 
    <div class="max-w-sm rounded overflow-hidden shadow-lg">

  <div class="px-6 py-4">
    <div class="font-bold text-xl text-emerald-500 mb-2">{card.title}</div>
    <p class="text-teal-50 text-base">
      {card.description}
    </p>
    <a class="bg-prime text-amber-500 rounded shadow" href={card.link}>
  go
  </a>
  </div>
  
  
</div>

    )
  return (
    <div className="container">
    <div className="bg-red">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
    {card}
    </div>
    </div>
  </div>
  )
}
