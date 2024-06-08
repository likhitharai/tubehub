import React from 'react'
import Button from './Button'
import { BUTTON_LIST_ITEMS } from '../Utils/constant'

const ButtonList = () => {
  
  return (
    <div className='flex'>
      {BUTTON_LIST_ITEMS.map((item, index) => (
    <Button key={index} name ={item}></Button>))}
    </div>
  )
}

export default ButtonList