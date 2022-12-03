import React from 'react'
import Card from './Components/Card'

function Home() {
  const imageUrls = [
    {
        id: 1,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dwf2997a07/images/images/1234100.png",
        title: "Bangles",
    },
    {
        id: 2,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dw081bd1ce/images/images/1047883.png",
        title: "Bracelet"
    },
    {
        id: 3,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dwcc5b37bc/images/images/470636.png",
        title: "Necklace"
    },
    {
        id: 4,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dwe370a979/images/images/1357921.png",
        title: "Chain"
    },
    {
        id: 5,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dw51cedef6/images/images/1239142.png",
        title: "Earrings"
    },
    {
        id: 6,
        url: "https://media2.bulgari.com/c_thumb,h_160,w_160/production/dwe535e641/images/images/1148803.png",
        title: "Rings"
    },

];
  return (
    <div>
      {imageUrls.map(imageUrl => (<Card
        key = {imageUrl.id}
        src = {imageUrl.url}
        title = {imageUrl.title}
        description = {imageUrl.description}
      />))}
    </div>
  )
}

export default Home
