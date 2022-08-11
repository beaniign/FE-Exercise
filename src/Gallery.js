import React from 'react'
import Img from './Img'

export default function Gallery({ input }) {
  return (
    input.map( image => {
    return <Img key = {image.id} image={image} />
    })
  )
}
