import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    //Early return
    if (!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-52'>
      <ul>
        <li className='font-bold'><Link to = "/">Home </Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

    <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>News</li>
        <li>Podcast</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
