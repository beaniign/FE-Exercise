import React from 'react'

export default function Img({ image }) {
  return (
    <div className = "component">
        <img src={image.url} alt={image.title} loading="lazy"/> 
        <p>{image.title}</p> 
    </div>
  )
}
