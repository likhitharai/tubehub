import React from 'react'
import logo from '../assets/thlogo.jpg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg rounded-md'>
    <div className='flex col-span-1'>
    <img className= 'w-12 h-14 p-2 cursor-pointer' onClick={()=> toggleMenuHandler()} src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt = 'Hamburger-menu'/>
        <img className='w-30 h-16 p-2 mx-2' src = {logo} alt ='Logo'/>
    </div>
    <div className='flex col-span-10 items-center '>
        <input className= 'w-1/2 rounded-l-3xl h-3/4 px-2 border' type = 'text' placeholder='Search'/>
        <button className='px-3 bg-gray-200 p-3 rounded-r-3xl'>Search</button>
    </div>
    <div className='flex col-span-1'>
        <img className= 'w-16 h-16 p-2  justify-end' src = 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' alt ='user-icon'/>
    </div>
    </div>
  )
}

export default Head
